/* THE EMBASSY DINNER · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=".
   Alvo: distance and diplomacy: I was wondering whether you might ... C1: nenhum português. */
window.HW2 = {
  "id": "c1-review-the-embassy-dinner",
  "titulo": "The Embassy Dinner",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f302532f96e3/c1-review-the-embassy-dinner/img/live-capa.webp",
  "alvo": "distance and diplomacy: I was wondering whether you might ..., I'm afraid ..., It would appear that ..., The evidence suggests ..., Mistakes were made (no agent), neither ... nor, I take your point, but ...",
  "abrir": "When was the last time you had to say something difficult kindly?",
  "fecho": "Distance is polite. Ask softly: <b>I was wondering whether you might</b> … Warn first: <b>I'm afraid</b> … Hedge: <b>It would appear that</b> … No blame: <b>Mistakes were made</b>. <b>Neither … nor</b> takes no <i>not</i>. Disagree: <b>I take your point, but</b> I see it <b>differently</b>.",
  "elenco": {
    "mia": {
      "nome": "Mia",
      "voz": "en-US-AvaNeural",
      "cor": "#86c9f0"
    },
    "leo": {
      "nome": "Leo",
      "voz": "en-AU-WilliamMultilingualNeural",
      "cor": "#f0b866"
    }
  },
  "rate": "-12%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo before a dinner at an embassy. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/f302532f96e3/c1-review-the-embassy-dinner/img/live-capa.webp",
      "leg": "A long table, ready for guests",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the minister's wife is unhappy about her seat. What do I say?"
        },
        {
          "quem": "leo",
          "t": "Start softly. I'm afraid there has been a problem with the seating."
        },
        {
          "quem": "mia",
          "t": "Should I say who made it?"
        },
        {
          "quem": "leo",
          "t": "No. It would appear that mistakes were made is enough. Then offer a solution: I was wondering whether you might prefer the window seat."
        },
        {
          "quem": "mia",
          "t": "And the journalist? He says our plan is a failure."
        },
        {
          "quem": "leo",
          "t": "Don't argue. Say: I take your point, but I see it slightly differently."
        },
        {
          "quem": "mia",
          "t": "He also asks about the report."
        },
        {
          "quem": "leo",
          "t": "The report was neither checked nor approved, so be honest, but gentle. I'm afraid I can't comment tonight."
        },
        {
          "quem": "mia",
          "t": "Careful, kind and clear."
        },
        {
          "quem": "leo",
          "t": "Exactly. That is the whole evening."
        }
      ],
      "perguntas": [
        {
          "q": "What should Mia NOT do about the seating mistake?",
          "op": [
            "Say who made it",
            "Offer another seat",
            "Start softly"
          ],
          "a": 0,
          "por": "No. It would appear that mistakes were made is enough."
        },
        {
          "q": "What does Leo suggest for the journalist?",
          "op": [
            "I take your point, but I see it differently",
            "Ignore him completely",
            "Agree with every word"
          ],
          "a": 0,
          "por": "Say: I take your point, but I see it slightly differently."
        },
        {
          "q": "What is true about the report?",
          "op": [
            "Nobody checked or approved it",
            "It was checked, but not approved",
            "It was approved, but not checked"
          ],
          "a": 0,
          "por": "The report was neither checked nor approved."
        }
      ]
    },
    "out": {
      "sub": "Three lines for the host. Hear it, then say it.",
      "frases": [
        {
          "t": "I was wondering whether you might prefer the window seat.",
          "img": "https://wolf-labs.pages.dev/p/f302532f96e3/c1-review-the-embassy-dinner/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I take your point, but I see it slightly differently.",
          "img": "https://wolf-labs.pages.dev/p/f302532f96e3/c1-review-the-embassy-dinner/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It would appear that mistakes were made.",
          "img": "https://wolf-labs.pages.dev/p/f302532f96e3/c1-review-the-embassy-dinner/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Soften it, hedge it, no blame. Four quick ones.",
      "regra": "<b>I was wondering whether you could</b> · <b>It would appear that</b> · <b>neither … nor</b> · <b>I take your point, but</b> + <b>differently</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It would appear that mistakes were made.",
          "aceita": [],
          "d": "Hint: <b>It would appear that</b> + the agentless passive."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the tense is not soft.",
          "mostra": "I was wondering if you can move seats.",
          "r": "I was wondering whether you could move seats.",
          "aceita": [
            "I was wondering if you could move seats."
          ],
          "d": "Hint: the past <b>was wondering</b> asks for <b>could</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The memo was not neither read nor signed.",
          "r": "The memo was neither read nor signed.",
          "aceita": [
            "The memo was not read or signed."
          ],
          "d": "Hint: <b>neither … nor</b> already carries the negative."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I take your point, but I see it different.",
          "r": "I take your point, but I see it differently.",
          "aceita": [],
          "d": "Hint: the word describes the verb <b>see</b>, so it needs <b>-ly</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f302532f96e3/c1-review-the-embassy-dinner/img/live-capa.webp",
      "leg": "A long table, ready for guests",
      "pede": "Look at the picture: a table ready for a formal dinner. Write 2 or 3 careful sentences to a guest with a problem. Use <b>I'm afraid</b>, <b>It would appear that</b> or <b>I was wondering whether</b>.",
      "ph": "I'm afraid …",
      "ex": "I'm afraid I have difficult news. It would appear that mistakes were made, and I was wondering whether we might meet tomorrow."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How do you ask for a favor politely at work or in class?",
          "ph": "I was wondering whether …",
          "ex": "I was wondering whether I might leave early on Friday."
        },
        {
          "q": "How would you disagree politely with a friend about a film?",
          "ph": "I take your point, but …",
          "ex": "I take your point, but I found the ending very strong."
        }
      ]
    }
  }
};
