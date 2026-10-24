/* THE MISSING E-MAILS · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: dedução no passado (must have / can't have / might have + particípio). B2: nenhum português na lição. */
window.HW2 = {
  "id": "the-missing-e-mails",
  "titulo": "The Missing E-mails",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/bf6875e010ec/the-missing-e-mails/img/live-b.webp",
  "alvo": "deduction about the past: must have + past participle (sure), can't have + been/past participle (sure it did not), might / may / could have + past participle (possible); have, not had or to have; third form, not the simple past (gone, not went)",
  "abrir": "Something at home disappeared or broke. What must have happened?",
  "fecho": "<b>Must have</b> + third form when you are sure: <i>The e-mails must have gone to spam.</i> <b>Can't have</b> when you are sure it did not happen: <i>It can't have been a hacker.</i> <b>Might have</b> (or <i>may / could have</i>) when it is possible: <i>Someone might have changed the service.</i> Always <b>have</b> and the third form: <s>must have went</s>, <s>might had</s>, <s>can't have be</s>.",
  "elenco": {
    "mia": { "nome": "Mia", "voz": "en-US-AvaNeural", "cor": "#86c9f0" },
    "leo": { "nome": "Leo", "voz": "en-AU-WilliamMultilingualNeural", "cor": "#f0b866" }
  },
  "rate": "-12%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo look for what went wrong. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/bf6875e010ec/the-missing-e-mails/img/live-b.webp",
      "leg": "The mailbox at night",
      "audio": "audio/listen.mp3",
      "falas": [
        { "quem": "mia", "t": "Leo, Sarah from Crumbs Bakery says her customers haven't been getting their order e-mails for two weeks." },
        { "quem": "leo", "t": "Two weeks? Did anyone change the code?" },
        { "quem": "mia", "t": "No. Nobody touched it. So what must have happened?" },
        { "quem": "leo", "t": "The e-mails must have gone to spam. Look at the header: SPF fail, and the spam score is high." },
        { "quem": "mia", "t": "Could it have been a hacker?" },
        { "quem": "leo", "t": "It can't have been a hacker. The logs look normal. Someone might have changed the e-mail service." },
        { "quem": "mia", "t": "But Sarah says nobody changed anything." },
        { "quem": "leo", "t": "She might have forgotten. Ask her again." },
        { "quem": "mia", "t": "I did. She says her nephew helped her last month." },
        { "quem": "leo", "t": "That's it. He must have changed the service, and the SPF record still points to the old one." },
        { "quem": "mia", "t": "So I fix the DNS and tell Sarah what happened." },
        { "quem": "leo", "t": "Yes. And write the timeline, so nobody blames her nephew." }
      ],
      "perguntas": [
        {
          "q": "Where did the order e-mails probably go?",
          "op": ["To spam", "To the old server", "To a hacker"],
          "a": 0,
          "por": "The e-mails must have gone to spam."
        },
        {
          "q": "Why can't it have been a hacker?",
          "op": ["The logs look normal", "Sarah has no e-mail", "The code was changed"],
          "a": 0,
          "por": "It can't have been a hacker. The logs look normal."
        },
        {
          "q": "What must have happened last month?",
          "op": ["Sarah's nephew changed the e-mail service", "A hacker changed the DNS", "Leo changed the code"],
          "a": 0,
          "por": "He must have changed the service, and the SPF record still points to the old one."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the case. Hear it, then say it.",
      "frases": [
        { "t": "The e-mails must have gone to spam.", "au": "audio/say1.mp3", "img": "https://wolf-labs.pages.dev/p/bf6875e010ec/the-missing-e-mails/img/live-b.webp" },
        { "t": "It can't have been a hacker.", "au": "audio/say2.mp3", "img": "https://wolf-labs.pages.dev/p/bf6875e010ec/the-missing-e-mails/img/live-b.webp" },
        { "t": "Someone might have changed the e-mail service.", "au": "audio/say3.mp3", "img": "https://wolf-labs.pages.dev/p/bf6875e010ec/the-missing-e-mails/img/live-b.webp" }
      ]
    },
    "focus": {
      "sub": "Have, third form, the right certainty. Four quick ones.",
      "regra": "<b>must have</b> + third form (sure) · <b>can't have</b> + <b>been</b> / third form (sure it did not) · <b>might / may / could have</b> (possible) · never <i>had</i>, <i>to have</i> or the simple past after it.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "He must have changed the service last month.",
          "aceita": [],
          "d": "Hint: <b>must have</b> + third form: <b>changed</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: wrong verb form.",
          "mostra": "The e-mails must have went to spam.",
          "r": "The e-mails must have gone to spam.",
          "aceita": ["The emails must have gone to spam.", "The e-mail must have gone to spam."],
          "d": "Hint: after <b>must have</b> use the third form of <i>go</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: wrong verb form.",
          "mostra": "It can't have be a hacker.",
          "r": "It can't have been a hacker.",
          "aceita": ["It cannot have been a hacker."],
          "d": "Hint: <b>can't have</b> + <b>been</b>, the third form of <i>be</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Someone might had changed the DNS.",
          "r": "Someone might have changed the DNS.",
          "aceita": ["Someone may have changed the DNS.", "Someone could have changed the DNS."],
          "d": "Hint: <b>might have</b>, never <i>might had</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/bf6875e010ec/the-missing-e-mails/img/live-b.webp",
      "leg": "The mailbox at night",
      "pede": "Look at the picture: a mailbox at night, and the letter never arrived. Write what must have, can't have or might have happened. It can be a real problem you had with a message, a package or an app.",
      "ph": "The package must have …",
      "ex": "My package never arrived. It must have gone to the wrong address. It can't have been lost in the post, because the tracking says delivered. The neighbour might have taken it."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Something in your house disappeared or broke. What must have happened?",
          "ph": "It must have …",
          "ex": "My charger disappeared. My brother must have taken it."
        },
        {
          "q": "A friend did not answer your message for two days. What might have happened? What can't have happened?",
          "ph": "She might have … / It can't have …",
          "ex": "She might have lost her phone. She can't have been angry, because we are good friends."
        }
      ]
    }
  }
};
