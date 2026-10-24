/* WHOSE IDEA WAS IT? · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: reporting verbs, strong / compound adjectives, double comparative. B2: nenhum português. Só live-capa (a live-conversa é clara demais). */
window.HW2 = {
  "id": "b2-review-whose-idea-was-it",
  "titulo": "Whose Idea Was It?",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/b58a8d3a6f99/b2-review-whose-idea-was-it/img/live-capa.webp",
  "alvo": "reporting verbs with -ing (denied choosing, admitted making, insisted on blaming, suggested moving, refused to listen); extreme adjectives (absolutely furious, never very furious); compound adjectives, singular (a three-hour meeting); double comparative (the more ..., the less ...)",
  "abrir": "Think of a meeting or a plan that went badly. Who got the blame?",
  "fecho": "Each reporting verb has its pattern: <b>denied / admitted / suggested + -ing</b>, <b>insisted on + -ing</b>, <b>refused + to</b>. Strong adjectives take <b>absolutely / really</b>, never <i>very</i>: <i>absolutely furious</i>. A compound adjective stays singular: <b>a three-hour meeting</b>. <b>The more …, the less …</b>.",
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
      "sub": "Mia and Leo after a disastrous product launch. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/b58a8d3a6f99/b2-review-whose-idea-was-it/img/live-capa.webp",
      "leg": "The meeting room, after the meeting",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the launch of the Glow Mug was a disaster. Whose idea was it?"
        },
        {
          "quem": "leo",
          "t": "Dan denied choosing the date. He said Priya had picked it."
        },
        {
          "quem": "mia",
          "t": "And Priya?"
        },
        {
          "quem": "leo",
          "t": "She admitted making the final call, but she insisted on blaming the supplier. She was absolutely furious."
        },
        {
          "quem": "mia",
          "t": "Did anyone suggest waiting?"
        },
        {
          "quem": "leo",
          "t": "Sam suggested moving the launch to March, but the director refused to listen."
        },
        {
          "quem": "mia",
          "t": "Typical. Was the meeting long?"
        },
        {
          "quem": "leo",
          "t": "It was a three-hour meeting. The more they talked, the less they agreed."
        },
        {
          "quem": "mia",
          "t": "And the mugs?"
        },
        {
          "quem": "leo",
          "t": "A Glow Mug takes four times longer to heat up than a normal one. The customers are exhausted from waiting."
        }
      ],
      "perguntas": [
        {
          "q": "What did Dan deny?",
          "op": [
            "Choosing the date",
            "Blaming the supplier",
            "Moving the launch"
          ],
          "a": 0,
          "por": "Dan denied choosing the date."
        },
        {
          "q": "What did Sam suggest?",
          "op": [
            "Moving the launch to March",
            "Cancelling the mug",
            "Firing Priya"
          ],
          "a": 0,
          "por": "Sam suggested moving the launch to March."
        },
        {
          "q": "What happened the more they talked?",
          "op": [
            "They agreed less",
            "They agreed more",
            "They finished earlier"
          ],
          "a": 0,
          "por": "The more they talked, the less they agreed."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the meeting. Hear it, then say it.",
      "frases": [
        {
          "t": "Dan denied choosing the date, and Priya admitted making the call.",
          "img": "https://wolf-labs.pages.dev/p/b58a8d3a6f99/b2-review-whose-idea-was-it/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It was a three-hour meeting, and the director refused to listen.",
          "img": "https://wolf-labs.pages.dev/p/b58a8d3a6f99/b2-review-whose-idea-was-it/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The more they talked, the less they agreed.",
          "img": "https://wolf-labs.pages.dev/p/b58a8d3a6f99/b2-review-whose-idea-was-it/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Reporting verbs, strong adjectives, compounds. Four quick ones.",
      "regra": "<b>denied / admitted / suggested + -ing</b> · <b>insisted on + -ing</b> · <b>refused to</b> · <b>absolutely</b> + strong adjective · <b>a three-hour meeting</b> (singular).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Sam suggested moving the launch to March.",
          "aceita": [],
          "d": "Hint: <b>suggested</b> + <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Dan denied to choose the date.",
          "r": "Dan denied choosing the date.",
          "aceita": [],
          "d": "Hint: <b>denied</b> is followed by <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It was a three-hours meeting.",
          "r": "It was a three-hour meeting.",
          "aceita": [],
          "d": "Hint: a compound adjective before a noun stays singular."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She was very furious about the delay.",
          "r": "She was absolutely furious about the delay.",
          "aceita": [
            "She was really furious about the delay.",
            "She was completely furious about the delay.",
            "She was utterly furious about the delay."
          ],
          "d": "Hint: a strong adjective does not take <i>very</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/b58a8d3a6f99/b2-review-whose-idea-was-it/img/live-capa.webp",
      "leg": "A meeting table with cold mugs",
      "pede": "Look at the picture: a meeting table with cold mugs after a long meeting. Report what two people said or did in a meeting of yours. Use <b>denied, admitted, suggested, insisted on</b> or <b>refused to</b>.",
      "ph": "My boss suggested …",
      "ex": "My boss suggested starting at nine. A colleague refused to change the plan. Another one denied sending the file."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Describe the longest journey or meeting you have had. Use a compound adjective.",
          "ph": "It was a …-hour …",
          "ex": "It was a ten-hour bus ride, and I was absolutely exhausted."
        },
        {
          "q": "What gets easier or harder the more you do it?",
          "ph": "The more I …, the …",
          "ex": "The more I practice, the more confident I feel."
        }
      ]
    }
  }
};
