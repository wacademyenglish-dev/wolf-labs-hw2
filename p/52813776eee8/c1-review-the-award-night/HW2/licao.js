/* THE AWARD NIGHT · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=".
   Alvo: emphasis: it-clefts (It was my father who ...), It wasn't un. C1: nenhum português. */
window.HW2 = {
  "id": "c1-review-the-award-night",
  "titulo": "The Award Night",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/52813776eee8/c1-review-the-award-night/img/live-capa.webp",
  "alvo": "emphasis: it-clefts (It was my father who ...), It wasn't until ... that ..., what-clefts (What matters is ...), All we had was ..., fronting (That recipe I will never change), emphatic do (I did like it)",
  "abrir": "Who taught you something you still use today?",
  "fecho": "Put one idea in the spotlight. <b>It was my father who</b> taught me. <b>It wasn't until</b> June <b>that</b> she called. <b>What matters most is</b> the people. <b>All we had was</b> two ovens. Front it: <i>That recipe I will never change.</i> Stress it: <b>I did like</b> it, with the plain verb.",
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
      "sub": "Mia and Leo after a gala. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/52813776eee8/c1-review-the-award-night/img/live-conversa.webp",
      "leg": "A ballroom before the gala",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I missed the gala. Did Nora's bakery really win?"
        },
        {
          "quem": "leo",
          "t": "It did. And what surprised everyone was her speech. It was so short."
        },
        {
          "quem": "mia",
          "t": "What did she say?"
        },
        {
          "quem": "leo",
          "t": "She said it was her father who taught her to bake. It wasn't until he retired that she took over the shop."
        },
        {
          "quem": "mia",
          "t": "I didn't know that. Did she mention money?"
        },
        {
          "quem": "leo",
          "t": "All she said was that they had two ovens and a loan. Then she thanked the customers."
        },
        {
          "quem": "mia",
          "t": "Did she mention the old recipe?"
        },
        {
          "quem": "leo",
          "t": "She did mention it! Her last line was: That recipe I will never change. People stood up and clapped."
        },
        {
          "quem": "mia",
          "t": "So what matters most to her?"
        },
        {
          "quem": "leo",
          "t": "What matters to her is the people at the counter, not the trophy."
        },
        {
          "quem": "mia",
          "t": "Perfect. Now I know what to write."
        }
      ],
      "perguntas": [
        {
          "q": "Who taught Nora to bake?",
          "op": [
            "Her father",
            "A famous chef",
            "Her customers"
          ],
          "a": 0,
          "por": "She said it was her father who taught her to bake."
        },
        {
          "q": "When did she take over the shop?",
          "op": [
            "After her father retired",
            "Before the gala",
            "After she won the trophy"
          ],
          "a": 0,
          "por": "It wasn't until he retired that she took over the shop."
        },
        {
          "q": "What matters most to Nora?",
          "op": [
            "The people at the counter",
            "The trophy",
            "The money"
          ],
          "a": 0,
          "por": "What matters to her is the people at the counter, not the trophy."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the speech. Hear it, then say it.",
      "frases": [
        {
          "t": "It was my father who taught me to bake.",
          "img": "https://wolf-labs.pages.dev/p/52813776eee8/c1-review-the-award-night/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It wasn't until he retired that I took over the shop.",
          "img": "https://wolf-labs.pages.dev/p/52813776eee8/c1-review-the-award-night/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "That recipe I will never change.",
          "img": "https://wolf-labs.pages.dev/p/52813776eee8/c1-review-the-award-night/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Spotlight, order, stress. Four quick ones.",
      "regra": "<b>It was … who/that</b> · <b>It wasn't until … that</b> · <b>What matters is …</b> · <b>did / do</b> + plain verb for stress.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "What matters most to her is the people at the counter.",
          "aceita": [],
          "d": "Hint: <b>What matters most</b> + <b>is</b> + the thing in the spotlight."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It wasn't until June when she called me.",
          "r": "It wasn't until June that she called me.",
          "aceita": [],
          "d": "Hint: the cleft closes with <b>that</b>, not <i>when</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the stress verb.",
          "mostra": "I did liked her speech.",
          "r": "I did like her speech.",
          "aceita": [],
          "d": "Hint: after <b>did</b>, the verb stays plain: <b>did like</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It was Ana what called me.",
          "r": "It was Ana who called me.",
          "aceita": [
            "It was Ana that called me."
          ],
          "d": "Hint: for a person, <b>who</b> (or <b>that</b>), never <i>what</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/52813776eee8/c1-review-the-award-night/img/live-conversa.webp",
      "leg": "An empty ballroom",
      "pede": "Look at the picture: a ballroom before a gala. Write 2 or 3 sentences about a person or a day that matters to you. Use <b>It was … who</b>, <b>What matters is</b> or <b>I did</b> + verb.",
      "ph": "It was my … who …",
      "ex": "It was my grandmother who taught me to cook. What matters most to me is my family. That day I will never forget."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who taught you something important? What was it?",
          "ph": "It was my … who …",
          "ex": "It was my uncle who taught me to drive."
        },
        {
          "q": "What matters most to you in a job?",
          "ph": "What matters most is …",
          "ex": "What matters most is a kind team."
        }
      ]
    }
  }
};
