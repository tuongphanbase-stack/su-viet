# Sử Việt — Lịch sử Việt Nam tương tác

An interactive timeline of Vietnamese history, from the Hồng Bàng / Văn Lang
period onward: dynasties, rulers, capitals, and notes on which dates are
traditional rather than archaeologically confirmed.

Plain HTML, CSS and JavaScript with no build step:

- `index.html`: the page
- `app.js`: the timeline data and interactions
- `style.css`: styles
- `quiz.js`: the history quiz (10 random questions per round); add a new kind of question by adding an entry to `KINDS`

## Features

- Year slider and search over the timeline of Vietnamese history, with an
  interactive historical map, rulers, capitals and key events per period.
- People profiles (story, life, relations, places, contemporaries, sources).
- **History quiz** (“Trắc nghiệm”): 10 random questions per round about
  capitals, rulers, state names, start years, events, which period came
  first, and the historical figures of each period. Questions are generated from the same period data as the timeline,
  so they always match it. Each answer explains the period and links back to
  it on the timeline; the result screen lists what to review, and the best
  score is remembered. Keys 1–4 pick an answer.

- **Richer eras and people** (`history-details.js`): every period has a dated
  timeline (the "Sự kiện" tab and the end of each story) and its own text on
  politics, economy, culture and war. Twenty key figures get a longer story
  and a dated life, and 22 more figures are added (Lữ Gia, Sĩ Nhiếp, Tô Hiến
  Thành, Chu Văn An, Nguyễn Bỉnh Khiêm, Lê Quý Đôn, Nguyễn Du, Võ Thị Sáu…).
  To add more, edit only `history-details.js`; `history-extend.js` shows it.

## Tests

`node tests/quiz.test.js` builds 200 quizzes and checks every question:
the marked answer really is that period's fact, options are distinct, and
no question repeats within a round.
`node tests/history-details.test.js` checks the extra era and people data
(every era covered, ids unique, relations point to real people).

## Viewing it

Open `index.html` in a browser, or publish it with GitHub Pages
(Settings -> Pages -> Source: `main` branch, `/` root).
