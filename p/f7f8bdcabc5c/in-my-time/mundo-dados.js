/* AVENGERS: DOOMSDAY (B1) · O MUNDO (cena I · Pick a Side)  19/10/2026 — formato F (kit/mundo.js).
   No lugar do mapa: dois lados; o aluno escolhe, defende, o professor rebate duas vezes.
   B1, já com who / which / that / where / whose. */
window.WL_MUNDO = {
  forma: 'lado',
  cena: { rot: 'Warm-up and Pick a Side', t: 'Before the trailer: your people, then the heroes and the man in the mask.', p: 'Answer three questions about your life. Then pick a side and defend it.' },
  mundoRot: 'Pick a Side',
  guia: '<b>Warm-up and Pick a Side (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the film under the photo). Let them talk; don’t correct the grammar yet. <b>2 · Pick a Side:</b> Two sides: the heroes who are left (Sam, the new Captain America, Thor, the Fantastic Four) and Doctor Doom, the genius whose face is behind a metal mask. The student taps one side and defends it for thirty seconds. Then tap “The teacher pushes back”: read the counter-argument on the screen, in your voice, and let them answer. Twice. Push for who / which / whose in the defense (“He’s a man whose country…”). After the trailer, ask if they changed sides.',
  q: 'Who is right: the heroes who want to save their world, or the man who wants to rule every world?',
  lados: [
    { img: 'escudo', nome: 'The heroes', t: 'Sam, the man who carries the shield now. Thor, a god whose home is gone. A family whose powers came from space.' },
    { img: 'latveria', nome: 'Doctor Doom', t: 'A genius whose face is behind a metal mask. He rules Latveria, a country where nobody says no to him.' }
  ],
  ex: [
    'I’m with the heroes, because they are people who lost everything and still fight for others.',
    'I’m with Doom. He is a man whose country has order, and maybe the heroes are the ones who bring chaos.'
  ],
  contra: [
    ['The heroes are people who fight all the time. Cities that they “save” are always destroyed. Why should we trust them?', 'Doom is a genius whose country has no war. Maybe he knows something that the heroes don’t.'],
    ['A man who hides his face can’t be honest. What is he hiding?', 'The people who live in Latveria can’t say no to him. Is that order, or fear?']
  ],
  depois: 'Watch the trailer. Then tell me: are you still on the same side?',
  aquece: [
    { img: 'escudo', q: 'What is something that someone passed to you, like a shield?', st: ['It’s a … that my … gave me.', 'It belonged to someone who …'], filme: 'Steve Rogers gave his shield to Sam, the new Captain America.', mais: 'Do you use it? Will you pass it to someone?', ex: 'It’s a watch that my grandfather gave me. I wear it on special days.' },
    { img: 'ceu', q: 'Who is the person that you would call first in an emergency? Why?', st: ['The person who I would call is …', 'because he / she is someone who …'], filme: 'The heroes who are left must stand together.', mais: 'Did you ever call them? What happened?', ex: 'The person who I would call is my brother, because he is someone who never panics.' },
    { img: 'latveria', q: 'Is there a place where you feel you are “the king” or “the queen”?', st: ['It’s the place where I …', 'Nobody who … can …'], filme: 'Doctor Doom rules Latveria, a country where nobody says no to him.', mais: 'What are the rules there?', ex: 'It’s my kitchen, the place where I decide everything.' }
  ],
  vida: [],
  antes: [
    { q: 'You picked a side. In the trailer, who is the hero that you want to see most? Why?', h: 'The hero who I want to see is …, because …' },
    { q: 'Doctor Doom is a man whose… what? Finish the sentence.', h: 'He is a man whose …' }
  ]
};
