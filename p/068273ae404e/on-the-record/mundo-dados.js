/* SUPERMAN · O MUNDO (cena I · Warm-up and The Daily Planet)  19/10/2026 — formato jornal (kit/mundo.js).
   No lugar do mapa: warm-up de conversa e depois a primeira página do Daily Planet.
   B1, já com reported speech (said / told / asked if). */
window.WL_MUNDO = {
  forma: 'jornal',
  cena: { rot: 'Warm-up and The Daily Planet', t: 'Before the trailer: what people said, then the front page.', p: 'Answer three questions about your life. Then pick a story on the front page and say what happened.' },
  mundoRot: 'The Daily Planet',
  guia: '<b>Warm-up and The Daily Planet (I)</b>: two parts. <b>1 · Warm-up:</b> three questions about the student’s life, one at a time (big on the screen, with “Ask more” under each and one short line about the film under the photo). Let them talk; don’t correct the grammar yet. <b>2 · The Daily Planet:</b> the front page of the newspaper where Clark and Lois work, with three stories. The student picks one, says what they think happened, reads the start of the story and reacts. The stories are already in reported speech (he said that…, she asked him if…).',
  foto: 'redacao',
  aquece: [
    { img: 'redacao', q: 'What is the best advice a colleague or teacher told you?', st: ['My … told me that …', 'He / She said …'], filme: 'Clark Kent and Lois Lane work at the Daily Planet, a newspaper.', mais: 'Do you still follow it?', ex: 'My first boss told me that every email could be read by everyone.' },
    { img: 'fronteira', q: 'Did you ever help someone who hadn’t asked for help? What did they say?', st: ['Once, I helped …', 'He / She said …'], filme: 'Superman stopped a war, but nobody had asked him to go.', mais: 'Would you do it again?', ex: 'I helped an old man with his bags. He said he didn’t need help!' },
    { img: 'torre', q: 'Did someone ever say something about you that wasn’t true? What did they say?', st: ['Someone said that I …', 'I told them that …'], filme: 'Lex Luthor tells everybody that Superman is a danger.', mais: 'What did you do?', ex: 'Someone said I had quit my job. I told them it wasn’t true.' }
  ],
  jornal: 'THE DAILY PLANET', data: 'Metropolis · Monday',
  manchetes: [
    { t: 'Superman stops a war, and nobody asked him to', sub: 'Two countries were at war. He flew there in one hour. · Page 1',
      txt: 'Yesterday Superman flew to another country and stopped a war between two nations. He said he couldn’t watch people die. But some leaders said that nobody had asked him to go, and that he had no right to do it.',
      q: 'Was Superman right? What would you tell him?', ex: 'I think he was right. I would tell him that he saved a lot of people, but that he should ask first next time.' },
    { t: 'Lex Luthor: “He is not a man. He is a threat.”', sub: 'The billionaire speaks to the government. · Page 3',
      txt: 'Lex Luthor told the government that Superman was an alien, not a man. He said that one day Superman would decide to rule the world, and that somebody had to stop him now.',
      q: 'Do you believe Lex? Why or why not?', ex: 'No. He said that Superman was dangerous, but I think Lex is the dangerous one.' },
    { t: 'Our reporter asks Superman: “Who gave you the right?”', sub: 'An interview by Lois Lane. · Page 5',
      txt: 'Lois Lane asked Superman if he had asked anyone before he stopped the war. She asked him who had given him the right. He told her that he was only trying to help.',
      q: 'What question would you ask Superman?', ex: 'I would ask him if he ever takes a holiday, and he would say that he can’t.' }
  ],
  vida: [],
  antes: [
    { q: 'You read the front page. In the trailer, what did Lois ask Superman? Guess.', h: 'She asked him if … / She asked him why …' },
    { q: 'What did Lex Luthor tell the world about Superman?', h: 'He told them that Superman was …' }
  ]
};
