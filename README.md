# Sử Việt — Lịch sử Việt Nam tương tác

An interactive timeline of Vietnamese history, from the Hồng Bàng / Văn Lang
period onward: dynasties, rulers, capitals, and notes on which dates are
traditional rather than archaeologically confirmed.

Plain HTML, CSS and JavaScript with no build step:

- `index.html`: the page
- `app.js`: the timeline data and interactions
- `style.css`: styles
- `quiz.js`: the history quiz (10 random questions per round)

## Features

- Year slider and search over the timeline of Vietnamese history, with an
  interactive historical map, rulers, capitals and key events per period.
- People profiles (story, life, relations, places, contemporaries, sources).
- **History quiz** (“Trắc nghiệm”): 10 random questions per round about
  capitals, rulers, state names, start years, events and which period came
  first. Questions are generated from the same period data as the timeline,
  so they always match it. Each answer explains the period and links back to
  it on the timeline; the result screen lists what to review, and the best
  score is remembered. Keys 1–4 pick an answer.

## Tests

`node tests/quiz.test.js` builds 200 quizzes and checks every question:
the marked answer really is that period's fact, options are distinct, and
no question repeats within a round.

## Viewing it

Open `index.html` in a browser, or publish it with GitHub Pages
(Settings -> Pages -> Source: `main` branch, `/` root).
