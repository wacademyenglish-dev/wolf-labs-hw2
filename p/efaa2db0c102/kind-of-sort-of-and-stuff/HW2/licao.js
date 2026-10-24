/* KIND OF, SORT OF, AND STUFF · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: linguagem vaga (kind of / sort of / and stuff / -ish / a bit of a) e registro. C1: nenhum português. */
window.HW2 = {
  "id": "kind-of-sort-of-and-stuff",
  "titulo": "Kind of, Sort of, and Stuff",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/efaa2db0c102/kind-of-sort-of-and-stuff/img/live-capa.webp",
  "alvo": "vague language: kind of / sort of + adjective or verb (kind of weird, sort of agree), and stuff / and things like that / or something, -ish (nine-ish, bluish), a bit + adjective, a bit of a + noun; the register: vague with a friend, exact on paper; never and stuffs, a bit of tired, nine-ish o'clock",
  "abrir": "Think of a friend you talk to every day. How do you describe your week to that person?",
  "fecho": "<b>Kind of / sort of</b> + adjective or verb: <i>kind of tense, sort of agree</i>. <b>And stuff</b> (never <i>stuffs</i>), <b>or something</b>, <b>-ish</b> on a number: <i>nine-ish</i>. <b>A bit</b> + adjective (<i>a bit tired</i>) but <b>a bit of a</b> + noun (<i>a bit of a mess</i>). Vague is fine with a friend; in writing, be exact.",
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
  "rate": "-8%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo catch up about his new job. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/efaa2db0c102/kind-of-sort-of-and-stuff/img/live-balcao.webp",
      "leg": "A desk, a lamp and some papers",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "So, how's the new job? Is it what you expected?"
        },
        {
          "quem": "leo",
          "t": "It's kind of intense, honestly. Meetings, emails, deadlines and stuff."
        },
        {
          "quem": "mia",
          "t": "Sort of what you wanted, then?"
        },
        {
          "quem": "leo",
          "t": "Sort of. The team is lovely, though. We usually start around nine-ish, and finish whenever the work is done."
        },
        {
          "quem": "mia",
          "t": "Nine-ish? Doesn't your manager want a proper time?"
        },
        {
          "quem": "leo",
          "t": "Ha. She's a bit of a stickler, actually. When it's official, she wants everything exact: nine o'clock sharp."
        },
        {
          "quem": "mia",
          "t": "Which is why you have to be precise when you write to her."
        },
        {
          "quem": "leo",
          "t": "I know. With you I can say the project is kind of a mess. In an email, I have to say the report is two days late."
        },
        {
          "quem": "mia",
          "t": "Exactly. Vague with friends, exact on paper. Or something like that."
        },
        {
          "quem": "leo",
          "t": "Or something. Anyway, coffee later, around four-ish?"
        },
        {
          "quem": "mia",
          "t": "Sure. Four-ish works."
        }
      ],
      "perguntas": [
        {
          "q": "How does Leo describe the job?",
          "op": [
            "Kind of intense",
            "Very easy",
            "Completely boring"
          ],
          "a": 0,
          "por": "It's kind of intense, honestly."
        },
        {
          "q": "What does his manager want when it is official?",
          "op": [
            "Everything exact",
            "Everything vague",
            "Nothing in writing"
          ],
          "a": 0,
          "por": "When it's official, she wants everything exact: nine o'clock sharp."
        },
        {
          "q": "When will they have coffee?",
          "op": [
            "Around four",
            "At nine sharp",
            "At noon"
          ],
          "a": 0,
          "por": "Coffee later, around four-ish?"
        }
      ]
    },
    "out": {
      "sub": "Three vague sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "I'll meet you around nine-ish, or something like that.",
          "img": "https://wolf-labs.pages.dev/p/efaa2db0c102/kind-of-sort-of-and-stuff/img/live-fone.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We talked about budgets and stuff, but nothing was decided.",
          "img": "https://wolf-labs.pages.dev/p/efaa2db0c102/kind-of-sort-of-and-stuff/img/live-esteira.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The meeting was kind of tense, but the results were fine.",
          "img": "https://wolf-labs.pages.dev/p/efaa2db0c102/kind-of-sort-of-and-stuff/img/live-estudio.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Vague words, the right way. Four quick ones.",
      "regra": "<b>kind of / sort of</b> + adjective · <b>and stuff</b> (never stuffs) · <b>-ish</b> instead of o'clock · <b>a bit</b> + adjective, <b>a bit of a</b> + noun.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The meeting was kind of tense at the end.",
          "aceita": [],
          "d": "Hint: <b>kind of</b> goes before the adjective, not after it."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We talked about budgets and stuffs.",
          "r": "We talked about budgets and stuff.",
          "aceita": [
            "We talked about budgets and things like that."
          ],
          "d": "Hint: <b>stuff</b> never takes an <b>s</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I'm a bit of tired today.",
          "r": "I'm a bit tired today.",
          "aceita": [
            "I am a bit tired today.",
            "I'm kind of tired today.",
            "I'm sort of tired today."
          ],
          "d": "Hint: <b>a bit</b> + adjective. <b>A bit of a</b> is only for nouns."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Let's meet at nine-ish o'clock.",
          "r": "Let's meet at nine-ish.",
          "aceita": [
            "Let's meet around nine o'clock.",
            "Let's meet around nine.",
            "Let us meet at nine-ish."
          ],
          "d": "Hint: <b>-ish</b> already makes the time vague, so no <i>o'clock</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/efaa2db0c102/kind-of-sort-of-and-stuff/img/live-balcao.webp",
      "leg": "A desk, a lamp and some papers",
      "pede": "Look at the picture: a desk with a lamp, a screen and some papers. Write 2 or 3 sentences about your day: first the way you would tell a friend (vague), then one exact sentence for an email. Use <b>kind of</b>, <b>sort of</b>, <b>and stuff</b> or <b>-ish</b>.",
      "ph": "Honestly, my day was kind of …",
      "ex": "Honestly, my day was kind of hectic: calls, emails and stuff. For my boss: I finished two reports and I have a meeting at nine."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How do you usually describe your week to a friend?",
          "ph": "It was kind of … and stuff.",
          "ex": "It was kind of busy, work and stuff, but fine."
        },
        {
          "q": "When do you need to be exact instead of vague? Why?",
          "ph": "I need to be exact when …",
          "ex": "In emails to my boss, because a vague date can cause problems."
        }
      ]
    }
  }
};
