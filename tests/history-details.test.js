// Run: node tests/history-details.test.js
// Checks the extra era and people data in history-details.js.
const fs = require('fs'), path = require('path'), vm = require('vm'), assert = require('assert');
const root = path.join(__dirname, '..');
const src = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const sandbox = {}; vm.createContext(sandbox);
const pSrc = src.slice(src.indexOf('const P=['), src.indexOf('];', src.indexOf('const P=[')) + 2);
vm.runInContext(pSrc.replace('const P=', 'P='), sandbox);
const line = (name) => src.split('\n').find(l => l.startsWith(`const ${name}=`)).replace(`const ${name}=`, `${name}=`);
vm.runInContext(line('PEOPLE'), sandbox);
vm.runInContext(line('PERIOD_PEOPLE'), sandbox);
const { P, PEOPLE, PERIOD_PEOPLE } = sandbox;

const sandbox2 = { module: { exports: {} } }; sandbox2.window = sandbox2; vm.createContext(sandbox2);
vm.runInContext(fs.readFileSync(path.join(root, 'history-details.js'), 'utf8'), sandbox2);
const D = sandbox2.SUVIET_DETAILS;
assert.ok(D && typeof sandbox2.SuVietExtend === 'function', 'history-details.js defines its globals');

// Every era has a timeline and the four topic texts.
P.forEach((p, i) => {
  const e = D.eras[i];
  assert.ok(e, `era ${i} (${p[2]}) has details`);
  assert.ok(Array.isArray(e.timeline) && e.timeline.length >= 3, `era ${i} has a timeline`);
  e.timeline.forEach(r => assert.ok(r.length === 2 && r[0] && r[1].length > 10, `era ${i} timeline row ${r}`));
  for (const k of ['politics', 'economy', 'culture', 'war']) assert.ok(e[k] && e[k].length > 30, `era ${i} has ${k}`);
});
assert.strictEqual(Object.keys(D.eras).length, P.length, 'no details for eras that do not exist');

// Extra stories belong to people that exist.
const ids = new Set(PEOPLE.map(p => p.id));
for (const [id, x] of Object.entries(D.people)) {
  assert.ok(ids.has(id), `details for unknown person ${id}`);
  assert.ok(x.story && x.story.length > 80, `${id} story`);
  (x.events || []).forEach(e => assert.ok(e.length === 2 && e[0] && e[1], `${id} event ${e}`));
}

// New people are new, complete and placed in real eras.
const required = ['id', 'name', 'birthLabel', 'deathLabel', 'polity', 'region', 'roles', 'relevance', 'summary', 'story', 'vietnamLink', 'events', 'relations', 'places'];
const newIds = new Set();
for (const p of D.newPeople) {
  required.forEach(k => assert.ok(p[k] !== undefined, `${p.id} has ${k}`));
  assert.ok(!newIds.has(p.id), `${p.id} is listed twice`);
  newIds.add(p.id);
  assert.ok(p.periods.length && p.periods.every(i => i >= 0 && i < P.length), `${p.id} periods in range`);
}

// Merging adds the people, places them in eras and keeps relations valid.
const before = PEOPLE.length;
const added = D.newPeople.filter(p => !ids.has(p.id)).length;
sandbox2.SuVietExtend(PEOPLE, PERIOD_PEOPLE);
assert.strictEqual(PEOPLE.length, before + added);
assert.ok(PEOPLE.every(p => !('periods' in p)), 'periods is not left on people');
assert.strictEqual(new Set(PEOPLE.map(p => p.id)).size, PEOPLE.length, 'ids stay unique');
const all = new Set(PEOPLE.map(p => p.id));
D.newPeople.forEach(p => p.periods.forEach(i => assert.ok(PERIOD_PEOPLE[i].includes(p.id), `${p.id} in era ${i}`)));
PEOPLE.forEach(p => (p.relations || []).forEach(r => assert.ok(all.has(r.id), `${p.id} relation to unknown ${r.id}`)));
const tqk = PEOPLE.find(p => p.id === 'tran-quang-khai');
assert.ok(tqk.story.length > 100, 'an existing person gets the richer story');
const hd = PEOPLE.find(p => p.id === 'tran-quoc-tuan');
assert.ok(hd.datedEvents && hd.datedEvents.length, 'dated events are attached');

console.log(`ok: ${P.length} eras, ${Object.keys(D.people).length} richer stories, ${added} new people`);
