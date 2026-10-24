/* THE HANDOVER · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present perfect continuous (have been + -ing, for / since). B2: nenhum português na lição. */
window.HW2 = {
  "id": "the-dev-handover",
  "titulo": "The Handover",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/6037d25cb18d/the-dev-handover/img/live-capa.webp",
  "alvo": "present perfect continuous for what started and is still going (have / has been + -ing) with since + a point in time and for + a length of time; the simple form for the result (I've restarted it twice); no continuous with stative verbs (I've known)",
  "abrir": "What have you been working on or learning for the last few weeks?",
  "fecho": "<b>Have / has been + -ing</b> for what started and is still going: <i>The queue has been growing since two o'clock.</i> <b>Since</b> + the starting point, <b>for</b> + the length: <i>for three hours</i>. The simple form gives the result: <i>I've restarted it twice.</i> Verbs like <b>know</b> do not take it: <i>I've known her for years</i>, not <s>I've been knowing</s>.",
  "elenco": {
    "mia": { "nome": "Mia", "voz": "en-US-AvaNeural", "cor": "#86c9f0" },
    "leo": { "nome": "Leo", "voz": "en-AU-WilliamMultilingualNeural", "cor": "#f0b866" }
  },
  "rate": "-12%",
  "rodadas": {
    "listen": {
      "sub": "Mia hands the on-call shift over to Leo. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/6037d25cb18d/the-dev-handover/img/live-capa.webp",
      "leg": "The monitoring screens",
      "audio": "audio/listen.mp3",
      "falas": [
        { "quem": "mia", "t": "Leo, it's eleven pm for me and my shift is over. Are you ready for the handover?" },
        { "quem": "leo", "t": "Ready. What's been happening?" },
        { "quem": "mia", "t": "The payments queue has been growing since two o'clock. Latency has been climbing for three hours." },
        { "quem": "leo", "t": "Have you been restarting the workers?" },
        { "quem": "mia", "t": "Yes. I've restarted them twice, but the problem keeps coming back. I've also been watching the memory graph." },
        { "quem": "leo", "t": "And what does it say?" },
        { "quem": "mia", "t": "There's probably a memory leak. It's been getting worse since the last deploy." },
        { "quem": "leo", "t": "Has anyone been working on a fix?" },
        { "quem": "mia", "t": "Priya has been testing a patch all evening, but it isn't ready." },
        { "quem": "leo", "t": "OK. What should I watch?" },
        { "quem": "mia", "t": "The retries. If they pass fifty a minute, call Priya. I've been writing it all in the handover note." }
      ],
      "perguntas": [
        {
          "q": "How long has latency been climbing?",
          "op": ["For three hours", "For ten minutes", "Since yesterday"],
          "a": 0,
          "por": "Latency has been climbing for three hours."
        },
        {
          "q": "What has Mia done about the workers?",
          "op": ["She has restarted them twice", "She has fixed the memory leak", "She has called Priya"],
          "a": 0,
          "por": "I've restarted them twice, but the problem keeps coming back."
        },
        {
          "q": "When should Leo call Priya?",
          "op": ["If the retries pass fifty a minute", "When the workers restart", "At eleven pm"],
          "a": 0,
          "por": "If they pass fifty a minute, call Priya."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the handover. Hear it, then say it.",
      "frases": [
        { "t": "The queue has been growing since two o'clock.", "au": "audio/say1.mp3", "img": "https://wolf-labs.pages.dev/p/6037d25cb18d/the-dev-handover/img/live-a.webp" },
        { "t": "I've been watching the memory graph for three hours.", "au": "audio/say2.mp3", "img": "https://wolf-labs.pages.dev/p/6037d25cb18d/the-dev-handover/img/live-b.webp" },
        { "t": "Priya has been testing a patch all evening.", "au": "audio/say3.mp3", "img": "https://wolf-labs.pages.dev/p/6037d25cb18d/the-dev-handover/img/live-capa.webp" }
      ]
    },
    "focus": {
      "sub": "Tense, since or for, verb form. Four quick ones.",
      "regra": "<b>have / has been + -ing</b> for what is still going · <b>since</b> + starting point, <b>for</b> + length · the verb after <i>been</i> ends in <b>-ing</b> · <i>know</i> does not take the continuous.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Latency has been climbing for three hours.",
          "aceita": [],
          "d": "Hint: <b>for</b> + a length of time: <b>for three hours</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the tense is wrong.",
          "mostra": "We are seeing timeouts since two pm.",
          "r": "We have been seeing timeouts since two pm.",
          "aceita": [],
          "d": "Hint: it started in the past and is still going: <b>have been seeing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: since or for?",
          "mostra": "I have been working here since three years.",
          "r": "I have been working here for three years.",
          "aceita": [],
          "d": "Hint: <b>three years</b> is a length, so use <b>for</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: this verb does not take -ing.",
          "mostra": "I have been knowing Priya for years.",
          "r": "I have known Priya for years.",
          "aceita": [],
          "d": "Hint: <b>know</b> is not an action in progress: use <b>have known</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/6037d25cb18d/the-dev-handover/img/live-b.webp",
      "leg": "Eleven pm: the shift is over",
      "pede": "Look at the picture: the clock says the shift is over. Write a short handover note for a colleague: what has been happening, since when, and what you have done. Use <b>have been + -ing</b> with <b>since</b> or <b>for</b>.",
      "ph": "The queue has been … since …",
      "ex": "The build has been failing since this morning. I've been checking the logs for two hours, and I've restarted the runner twice. Priya has been working on a fix."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What have you been learning or working on lately? For how long?",
          "ph": "I've been … for …",
          "ex": "I've been learning Docker for two weeks."
        },
        {
          "q": "What has been annoying you since this morning?",
          "ph": "… has been … since …",
          "ex": "My laptop has been freezing since this morning."
        }
      ]
    }
  }
};
