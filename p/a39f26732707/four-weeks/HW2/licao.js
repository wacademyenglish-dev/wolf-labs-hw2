/* FOUR WEEKS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: relativas: sem virgula x duas virgulas, who/which/what. B2: nenhum portugues. live-biblio/lampada. */
window.HW2 = {
  "id": "four-weeks",
  "titulo": "Four Weeks",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/a39f26732707/four-weeks/img/live-biblio.webp",
  "alvo": "relative clauses: no commas = defining (picks WHICH ones: the students who come every week); two commas = extra information about all of them (Ana, who lives next door); who for people, which for things, never that in the commas; what = the thing that (What we need is ...)",
  "abrir": "How do you really study? Who or what helps you?",
  "fecho": "No commas: the clause says <b>which</b> ones: <i>the students who come every week do better</i>. Two commas: extra information about <b>all</b> of them: <i>Ana, who lives next door, never misses a session</i>. <b>Who</b> for people, <b>which</b> for things; never <i>that</i> between commas. <b>What</b> = the thing that: <i>What we need is a bigger room.</i>",
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
      "sub": "Mia and Leo plan a study group. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/a39f26732707/four-weeks/img/live-biblio.webp",
      "leg": "A library table",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I'm writing a note about our study group. The students who come every week do better."
        },
        {
          "quem": "leo",
          "t": "Do you mean all of the students, or only some?"
        },
        {
          "quem": "mia",
          "t": "Only some. The ones who come every week. So, no commas."
        },
        {
          "quem": "leo",
          "t": "Fine. And Ana, who lives next door, never misses a session."
        },
        {
          "quem": "mia",
          "t": "Ana is one person, so the extra information gets commas. She's also the girl who brought the cake."
        },
        {
          "quem": "leo",
          "t": "The cake which we finished in ten minutes! What I like most is the quiet room."
        },
        {
          "quem": "mia",
          "t": "What we need is a bigger room, though."
        },
        {
          "quem": "leo",
          "t": "Let's ask the library. Their rooms, which are free on Fridays, are quiet and big."
        },
        {
          "quem": "mia",
          "t": "Perfect. I'll write that down."
        }
      ],
      "perguntas": [
        {
          "q": "Who does better, according to Mia's note?",
          "op": [
            "The students who come every week",
            "All of the students",
            "The students who live next door"
          ],
          "a": 0,
          "por": "The students who come every week do better."
        },
        {
          "q": "Why does Ana's clause have commas?",
          "op": [
            "Ana is one person, so the information is extra",
            "Ana is one of many students",
            "Ana is a new member"
          ],
          "a": 0,
          "por": "Ana is one person, so the extra information gets commas."
        },
        {
          "q": "What does the group need?",
          "op": [
            "A bigger room",
            "More cake",
            "A new teacher"
          ],
          "a": 0,
          "por": "What we need is a bigger room, though."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with relative clauses. Hear it, then say it.",
      "frases": [
        {
          "t": "The students who come every week do better.",
          "img": "https://wolf-labs.pages.dev/p/a39f26732707/four-weeks/img/live-biblio.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Ana, who lives next door, never misses a session.",
          "img": "https://wolf-labs.pages.dev/p/a39f26732707/four-weeks/img/live-lampada.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "What we need is a bigger room.",
          "img": "https://wolf-labs.pages.dev/p/a39f26732707/four-weeks/img/live-biblio.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "who, which, what, and commas. Four quick ones.",
      "regra": "no commas = <b>which ones</b> · two commas = <b>extra information</b> · <b>who</b> people, <b>which</b> things · <b>what</b> = the thing that.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The teacher who runs the group is very patient.",
          "aceita": [],
          "d": "Hint: no commas: the clause says <b>which</b> teacher."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The students which come every week do better.",
          "r": "The students who come every week do better.",
          "aceita": [
            "The students that come every week do better."
          ],
          "d": "Hint: students are people, so <b>who</b> (or <b>that</b>), not <i>which</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "My brother, that lives in Lisbon, is a chef.",
          "r": "My brother, who lives in Lisbon, is a chef.",
          "aceita": [],
          "d": "Hint: between commas, never <i>that</i>. For a person, use <b>who</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "That we need is a bigger room.",
          "r": "What we need is a bigger room.",
          "aceita": [],
          "d": "Hint: no noun in front, so <b>what</b> = the thing that."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/a39f26732707/four-weeks/img/live-lampada.webp",
      "leg": "A desk and a lamp, late at night",
      "pede": "Look at the picture: a desk with a lamp, late at night. Write 2 or 3 sentences about the people you study or work with. Use <b>who</b>, <b>which</b> or <b>what</b>, with or without commas.",
      "ph": "The people who help me most …",
      "ex": "The colleagues who share their notes help me most. My manager, who started last year, is very clear. What I need is a quiet room."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who is the person who helps you learn the most? Why?",
          "ph": "The person who helps me most is …",
          "ex": "The person who helps me most is my sister, who explains everything slowly."
        },
        {
          "q": "What do you need to study better?",
          "ph": "What I need is …",
          "ex": "What I need is a quiet hour every morning, which is hard with my job."
        }
      ]
    }
  }
};
