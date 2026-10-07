// Run: node tests/quiz.test.js
const fs = require('fs'), path = require('path'), vm = require('vm'), assert = require('assert');
const root = path.join(__dirname, '..');
const src = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const pSrc = src.slice(src.indexOf('const P=['), src.indexOf('];', src.indexOf('const P=[')) + 2);
const sandbox = {}; vm.createContext(sandbox);
vm.runInContext(pSrc.replace('const P=', 'P='), sandbox);
const P = sandbox.P;
assert.ok(Array.isArray(P) && P.length > 20, 'period data loads');
const { buildQuiz, yearLabel } = require(path.join(root, 'quiz.js'));
const norm = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').toLowerCase().trim();

let checked = 0;
for (let seed = 1; seed <= 200; seed++) {
  const quiz = buildQuiz(P, { seed });
  assert.strictEqual(quiz.length, 10, `seed ${seed}: 10 questions`);
  assert.strictEqual(new Set(quiz.map(q => q.prompt)).size, 10, `seed ${seed}: no repeated question`);
  for (const q of quiz) {
    assert.ok(q.options.includes(q.answer), 'answer is among the options');
    assert.strictEqual(new Set(q.options.map(norm)).size, q.options.length, `options are distinct: ${q.options}`);
    assert.ok(q.options.length === (q.kind === 'order' ? 2 : 4));
    const p = P[q.period];
    // The marked answer really is the fact stored for that period.
    if (q.kind === 'capital') assert.strictEqual(q.answer, p[5]);
    if (q.kind === 'leader') assert.strictEqual(q.answer, p[3]);
    if (q.kind === 'state') assert.strictEqual(q.answer, p[4]);
    if (q.kind === 'start') assert.strictEqual(q.answer, yearLabel(p[0]));
    if (q.kind === 'event') {
      assert.strictEqual(q.answer, p[2]);
      const ev = q.prompt.match(/“(.+)”/)[1];
      assert.strictEqual(P.filter(r => norm(r[8]) === norm(ev) || norm(r[9]) === norm(ev)).length, 1, 'event belongs to one period only');
    }
    if (q.kind === 'order') {
      const others = q.options.filter(o => o !== q.answer).map(o => P.find(r => r[2] === o));
      assert.ok(others.every(o => o[0] > p[0]), 'answer is the earlier period');
    }
    checked++;
  }
}
assert.strictEqual(yearLabel(-2879), '2879 TCN');
assert.strictEqual(yearLabel(938), '938');
console.log(`quiz validation passed: ${checked} questions across 200 quizzes`);
