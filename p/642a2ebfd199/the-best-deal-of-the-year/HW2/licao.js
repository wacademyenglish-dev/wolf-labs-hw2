/* THE BEST DEAL OF THE YEAR · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: as ... as, not as ... as, too, enough. A2: dicas em português só nas notas (d). Só live-* escuras. */
window.HW2 = {
  "id": "the-best-deal-of-the-year",
  "titulo": "The Best Deal of the Year",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/642a2ebfd199/the-best-deal-of-the-year/img/live-fone.webp",
  "alvo": "as ... as (the same) · not as ... as (less) · too + adjective (a problem) · adjective + enough (OK); never as ... than, never enough before the adjective, never too much + adjective",
  "abrir": "What is the best thing you bought on sale?",
  "fecho": "<b>as … as</b> = the same: <i>as cheap as</i>. <b>not as … as</b> = less: <i>not as cheap as</i>. <b>too</b> + adjective = a problem: <i>too expensive</i>. Adjective + <b>enough</b> = OK: <i>cheap enough</i>. Never <i>as cheap than</i>, never <i>enough cheap</i>.",
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
  "rate": "-14%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo choose headphones before a big sale. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/642a2ebfd199/the-best-deal-of-the-year/img/live-mesa.webp",
      "leg": "A laptop and a coffee at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at these two. The Pulse costs $49 and the Echo costs $49."
        },
        {
          "quem": "mia",
          "t": "So the Pulse is as cheap as the Echo."
        },
        {
          "quem": "leo",
          "t": "Yes. But the Nova costs $89. It is not as cheap as the others."
        },
        {
          "quem": "mia",
          "t": "Is the Nova better?"
        },
        {
          "quem": "leo",
          "t": "The sound is better, but I think it is too expensive for you."
        },
        {
          "quem": "mia",
          "t": "My budget is $60. The Pulse is cheap enough for me."
        },
        {
          "quem": "leo",
          "t": "Is it light enough for running?"
        },
        {
          "quem": "mia",
          "t": "Yes, it is as light as a phone. And the delivery is not as slow as the Echo's."
        },
        {
          "quem": "leo",
          "t": "Then buy the Pulse. That is a good deal."
        },
        {
          "quem": "mia",
          "t": "Done! I am clicking the button now."
        }
      ],
      "perguntas": [
        {
          "q": "Which headphones are as cheap as the Pulse?",
          "op": [
            "The Echo",
            "The Nova",
            "None of them"
          ],
          "a": 0,
          "por": "The Pulse is as cheap as the Echo."
        },
        {
          "q": "Why is the Nova not right for Mia?",
          "op": [
            "It is too expensive",
            "It is too heavy",
            "It is not loud enough"
          ],
          "a": 0,
          "por": "I think it is too expensive for you."
        },
        {
          "q": "What does Mia decide?",
          "op": [
            "To buy the Pulse",
            "To buy the Nova",
            "To wait for next year"
          ],
          "a": 0,
          "por": "Then buy the Pulse."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about prices. Hear it, then say it.",
      "frases": [
        {
          "t": "The Pulse is as cheap as the Echo.",
          "img": "https://wolf-labs.pages.dev/p/642a2ebfd199/the-best-deal-of-the-year/img/live-fones.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The Nova is not as cheap as the Pulse.",
          "img": "https://wolf-labs.pages.dev/p/642a2ebfd199/the-best-deal-of-the-year/img/live-fone.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "This one is too expensive for me.",
          "img": "https://wolf-labs.pages.dev/p/642a2ebfd199/the-best-deal-of-the-year/img/live-caixas.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "as ... as, too or enough? Four quick ones.",
      "regra": "<b>as … as</b> = the same · <b>not as … as</b> = less · <b>too</b> + adjective = problem · adjective + <b>enough</b> = OK.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The Nova is not as cheap as the Echo.",
          "aceita": [],
          "d": "Dica: <b>not as</b> + adjetivo + <b>as</b>: o AS abre e o AS fecha."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "This phone is as cheap than that one.",
          "r": "This phone is as cheap as that one.",
          "aceita": [],
          "d": "Dica: se o AS abre, o AS fecha: <b>as cheap as</b>, nunca 'as cheap than'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "The shoes are enough cheap for me.",
          "r": "The shoes are cheap enough for me.",
          "aceita": [],
          "d": "Dica: depois do adjetivo, o <b>enough</b> vem depois: <b>cheap enough</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It is too much expensive for me.",
          "r": "It is too expensive for me.",
          "aceita": [],
          "d": "Dica: antes de adjetivo, use <b>too</b>, nunca 'too much'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/642a2ebfd199/the-best-deal-of-the-year/img/live-fones.webp",
      "leg": "Three headphones on a shelf",
      "pede": "Look at the picture: three headphones on a shelf. Write 2 or 3 sentences comparing two things you own or want to buy. Use <b>as … as</b>, <b>not as … as</b>, <b>too</b> or <b>enough</b>.",
      "ph": "My phone is not as … as …",
      "ex": "My phone is not as new as my friend's phone. It is good enough for me. A new laptop is too expensive."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Is your phone as good as your friend's phone? Why?",
          "ph": "My phone is (not) as … as …",
          "ex": "My phone is not as fast as my friend's phone, but it is good enough."
        },
        {
          "q": "What is too expensive for you right now? What is cheap enough?",
          "ph": "… is too expensive. … is cheap enough.",
          "ex": "A new car is too expensive. A bike is cheap enough."
        }
      ]
    }
  }
};
