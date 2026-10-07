// Trắc nghiệm lịch sử: questions are generated from the same period data (P)
// that drives the timeline, so the quiz always agrees with what the site shows.
// P rows: [start, end, dynasty, leader, state, capital, confidence, summary, event1, event2]
(function (root) {
  'use strict';

  var QUIZ_LENGTH = 10;
  var BEST_KEY = 'suviet_quiz_best';

  function yearLabel(y) { return y < 0 ? Math.abs(y) + ' TCN' : String(y); }
  function rangeLabel(p) { return yearLabel(p[0]) + '–' + yearLabel(p[1]); }
  // "thời Nhà Lý", but not "thời Thời Pháp thuộc".
  function era(name, capital) {
    var phrase = /^thời\s/i.test(name) ? name.replace(/^Thời/, 'thời') : 'thời ' + name;
    return capital ? phrase.charAt(0).toUpperCase() + phrase.slice(1) : phrase;
  }

  // Small seeded RNG so tests are repeatable; the page uses Math.random.
  function rng(seed) {
    if (seed == null) return Math.random;
    var s = seed >>> 0;
    return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
  }
  function shuffle(arr, rand) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rand() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function norm(s) {
    return String(s == null ? '' : s).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase().trim();
  }

  // Three wrong answers whose text differs from the right one (and each other).
  function distractors(values, correct, rand) {
    var seen = {}; seen[norm(correct)] = true;
    var out = [];
    shuffle(values, rand).forEach(function (v) {
      var k = norm(v);
      if (v && !seen[k] && out.length < 3) { seen[k] = true; out.push(v); }
    });
    return out.length === 3 ? out : null;
  }

  function makeQuestion(kind, i, P, rand) {
    var p = P[i];
    var options, correct, prompt;
    if (kind === 'capital') {
      correct = p[5];
      prompt = 'Kinh đô / trung tâm chính trị ' + era(p[2]) + ' (' + rangeLabel(p) + ') ở đâu?';
      options = distractors(P.map(function (q) { return q[5]; }), correct, rand);
    } else if (kind === 'leader') {
      correct = p[3];
      prompt = 'Ai là người cầm quyền tiêu biểu của ' + era(p[2]) + ' (' + rangeLabel(p) + ')?';
      options = distractors(P.map(function (q) { return q[3]; }), correct, rand);
    } else if (kind === 'state') {
      correct = p[4];
      prompt = 'Quốc hiệu / chính thể ' + era(p[2]) + ' là gì?';
      options = distractors(P.map(function (q) { return q[4]; }), correct, rand);
    } else if (kind === 'start') {
      correct = yearLabel(p[0]);
      prompt = era(p[2], true) + ' bắt đầu vào năm nào?';
      options = distractors(P.map(function (q) { return yearLabel(q[0]); }), correct, rand);
    } else if (kind === 'event') {
      // Only ask "which period" for events that appear in exactly one period.
      var event = p[8];
      var owners = P.filter(function (q) { return norm(q[8]) === norm(event) || norm(q[9]) === norm(event); });
      if (!event || owners.length !== 1) return null;
      correct = p[2];
      prompt = 'Sự kiện “' + event + '” thuộc thời kỳ nào?';
      options = distractors(P.map(function (q) { return q[2]; }), correct, rand);
    } else if (kind === 'order') {
      var j = Math.floor(rand() * P.length);
      if (j === i || P[j][0] === p[0] || norm(P[j][2]) === norm(p[2])) return null;
      var earlier = p[0] < P[j][0] ? p : P[j];
      return {
        kind: kind, period: P.indexOf(earlier),
        prompt: 'Thời kỳ nào diễn ra SỚM HƠN?',
        options: shuffle([p[2], P[j][2]], rand), answer: earlier[2],
        explain: p[2] + ': ' + rangeLabel(p) + ' · ' + P[j][2] + ': ' + rangeLabel(P[j]) + '.'
      };
    }
    if (!options || !correct) return null;
    return {
      kind: kind, period: i, prompt: prompt,
      options: shuffle(options.concat(correct), rand), answer: correct,
      explain: p[2] + ' (' + rangeLabel(p) + '): ' + p[7]
    };
  }

  // Builds `count` distinct questions, mixing kinds and periods.
  function buildQuiz(P, opts) {
    opts = opts || {};
    var rand = rng(opts.seed);
    var count = opts.count || QUIZ_LENGTH;
    var kinds = ['capital', 'leader', 'start', 'event', 'order', 'state'];
    var out = [], used = {}, tries = 0;
    while (out.length < count && tries < 500) {
      tries++;
      var kind = kinds[out.length % kinds.length];
      var i = Math.floor(rand() * P.length);
      var q = makeQuestion(kind, i, P, rand);
      if (!q) continue;
      var key = q.prompt;
      if (used[key]) continue;
      used[key] = true;
      out.push(q);
    }
    return shuffle(out, rand);
  }

  /* ---------- UI (browser only) ---------- */

  function mount() {
    var doc = root.document;
    var section = doc.getElementById('quiz');
    if (!section || typeof P === 'undefined') return;
    var els = {
      body: doc.getElementById('quizBody'), progress: doc.getElementById('quizProgress'),
      score: doc.getElementById('quizScore'), best: doc.getElementById('quizBest')
    };
    var state = { questions: [], i: 0, score: 0, answered: false, wrong: [] };

    function getBest() { try { return Number(root.localStorage.getItem(BEST_KEY)) || 0; } catch (e) { return 0; } }
    function setBest(v) { try { root.localStorage.setItem(BEST_KEY, String(v)); } catch (e) { /* blocked */ } }
    function el(tag, cls, text) { var n = doc.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }

    function showOnTimeline(periodIndex) {
      var y = P[periodIndex][0];
      var slider = doc.getElementById('slider');
      if (slider) slider.value = String(y);
      if (typeof render === 'function') render(y);
      var target = doc.getElementById('explore');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function updateHeader() {
      els.progress.textContent = state.i < state.questions.length ? 'Câu ' + (state.i + 1) + ' / ' + state.questions.length : 'Hoàn thành';
      els.score.textContent = 'Đúng ' + state.score;
      var best = getBest();
      els.best.textContent = best ? 'Kỷ lục ' + best + '/' + QUIZ_LENGTH : '';
    }

    function renderQuestion() {
      state.answered = false;
      updateHeader();
      var q = state.questions[state.i];
      var wrap = el('div', 'quiz-card');
      wrap.appendChild(el('p', 'quiz-q', q.prompt));
      var list = el('div', 'quiz-options');
      list.setAttribute('role', 'group');
      list.setAttribute('aria-label', 'Các lựa chọn');
      q.options.forEach(function (opt, k) {
        var b = el('button', 'quiz-opt');
        b.type = 'button';
        b.appendChild(el('span', 'quiz-key', String(k + 1)));
        b.appendChild(el('span', 'quiz-text', opt));
        b.addEventListener('click', function () { answer(opt, b, list); });
        list.appendChild(b);
      });
      wrap.appendChild(list);
      wrap.appendChild(el('div', 'quiz-feedback'));
      els.body.replaceChildren(wrap);
      list.firstChild.focus({ preventScroll: true });
    }

    function answer(choice, button, list) {
      if (state.answered) return;
      state.answered = true;
      var q = state.questions[state.i];
      var right = choice === q.answer;
      if (right) state.score++; else state.wrong.push({ q: q, choice: choice });
      Array.prototype.forEach.call(list.children, function (b) {
        var text = b.querySelector('.quiz-text').textContent;
        b.disabled = true;
        if (text === q.answer) { b.classList.add('correct'); b.querySelector('.quiz-key').textContent = '✓'; }
        else if (b === button) { b.classList.add('wrong'); b.querySelector('.quiz-key').textContent = '✗'; }
      });
      var fb = els.body.querySelector('.quiz-feedback');
      fb.appendChild(el('p', 'quiz-verdict ' + (right ? 'ok' : 'no'), right ? '✓ Chính xác!' : '✗ Chưa đúng. Đáp án: ' + q.answer));
      fb.appendChild(el('p', 'quiz-explain', q.explain));
      var actions = el('div', 'quiz-actions');
      var look = el('button', 'quiz-link', 'Xem thời kỳ này trên dòng thời gian ↑');
      look.type = 'button';
      look.addEventListener('click', function () { showOnTimeline(q.period); });
      var next = el('button', 'quiz-next', state.i + 1 < state.questions.length ? 'Câu tiếp →' : 'Xem kết quả →');
      next.type = 'button';
      next.addEventListener('click', function () { state.i++; state.i < state.questions.length ? renderQuestion() : renderResult(); });
      actions.appendChild(look); actions.appendChild(next);
      fb.appendChild(actions);
      updateHeader();
      next.focus({ preventScroll: true });
    }

    function renderResult() {
      var total = state.questions.length;
      var best = getBest();
      var isRecord = state.score > best;
      if (isRecord) setBest(state.score);
      updateHeader();
      var wrap = el('div', 'quiz-card quiz-result');
      wrap.appendChild(el('p', 'quiz-big', state.score + ' / ' + total));
      var msg = state.score === total ? 'Xuất sắc! Bạn nắm rất chắc các thời kỳ.'
        : state.score >= total * 0.7 ? 'Rất tốt! Chỉ còn vài chỗ cần ôn lại.'
        : state.score >= total * 0.4 ? 'Khá! Xem lại các câu sai bên dưới nhé.'
        : 'Hãy khám phá dòng thời gian rồi thử lại nhé.';
      wrap.appendChild(el('p', 'quiz-msg', msg + (isRecord && best ? ' Kỷ lục mới!' : '')));
      if (state.wrong.length) {
        wrap.appendChild(el('p', 'quiz-review-title', 'CẦN ÔN LẠI'));
        var ul = el('ul', 'quiz-review');
        state.wrong.forEach(function (w) {
          var li = el('li');
          li.appendChild(el('strong', null, w.q.prompt));
          li.appendChild(el('span', null, 'Bạn chọn: ' + w.choice + ' · Đáp án: ' + w.q.answer));
          var look = el('button', 'quiz-link', 'Xem trên dòng thời gian ↑');
          look.type = 'button';
          look.addEventListener('click', function () { showOnTimeline(w.q.period); });
          li.appendChild(look);
          ul.appendChild(li);
        });
        wrap.appendChild(ul);
      }
      var again = el('button', 'quiz-next', 'Làm bộ câu hỏi mới ↻');
      again.type = 'button';
      again.addEventListener('click', start);
      wrap.appendChild(again);
      els.body.replaceChildren(wrap);
    }

    function start() {
      state = { questions: buildQuiz(P), i: 0, score: 0, answered: false, wrong: [] };
      renderQuestion();
    }

    section.addEventListener('keydown', function (e) {
      if (state.answered || !/^[1-4]$/.test(e.key)) return;
      var b = els.body.querySelectorAll('.quiz-opt')[Number(e.key) - 1];
      if (b) b.click();
    });
    start();
  }

  var api = { buildQuiz: buildQuiz, yearLabel: yearLabel, QUIZ_LENGTH: QUIZ_LENGTH };
  root.SuVietQuiz = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (root.document) {
    if (root.document.readyState === 'loading') root.document.addEventListener('DOMContentLoaded', mount);
    else mount();
  }
})(typeof window !== 'undefined' ? window : globalThis);
