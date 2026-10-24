/* THE CORRECTION · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: quantifiers: a few / a little / few / little / most. B1: nenhum português. */
window.HW2_ARTIGO_CONTA = true;
window.HW2 = {
  "id": "the-correction",
  "titulo": "The Correction",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/c75c15f1f106/the-correction/img/live-jornais.webp",
  "alvo": "quantifiers: a few / a little = some, and it is fine; few / little = hardly any, a small complaint; few + things you count, little + things you can't count; most / most of the / most of them (never the most of)",
  "abrir": "What do you have a few of, and what do you have little of?",
  "fecho": "<b>A few / a little</b> = some, and that is fine. <b>Few / little</b> = hardly any: a small complaint. Count it? <b>few</b>. Can’t count it? <b>little</b>. And <b>most / most of the / most of them</b>, never <i>the most of</i>.",
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
      "sub": "Mia and Leo write a report about a workshop. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/c75c15f1f106/the-correction/img/live-mesa.webp",
      "leg": "A desk with a phone and headphones",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I'm writing the report about Saturday's workshop. I wrote: few people came. Is that OK?"
        },
        {
          "quem": "mia",
          "t": "How many people came?"
        },
        {
          "quem": "leo",
          "t": "Twelve. Not a lot, but they all joined in."
        },
        {
          "quem": "mia",
          "t": "Then write: a few people came. Few sounds like a complaint, and a few sounds fine."
        },
        {
          "quem": "leo",
          "t": "Good point. And the coffee? We had little coffee, and it finished in ten minutes."
        },
        {
          "quem": "mia",
          "t": "Then little is right. That is a small complaint: almost no coffee."
        },
        {
          "quem": "leo",
          "t": "At the end we had a little time, so we answered some questions."
        },
        {
          "quem": "mia",
          "t": "Nice. A little time, and it was enough. What about the group?"
        },
        {
          "quem": "leo",
          "t": "Most of the people stayed until the end, and most of them asked for a second workshop."
        },
        {
          "quem": "mia",
          "t": "Write it exactly like that. Most of the people, never the most of the people."
        }
      ],
      "perguntas": [
        {
          "q": "Why does Mia want to write a few people came?",
          "op": [
            "Twelve people is fine, and few sounds like a complaint",
            "Forty people came",
            "Nobody came"
          ],
          "a": 0,
          "por": "Few sounds like a complaint, and a few sounds fine."
        },
        {
          "q": "What was the problem with the coffee?",
          "op": [
            "There was almost none",
            "It was too strong",
            "Nobody wanted it"
          ],
          "a": 0,
          "por": "We had little coffee, and it finished in ten minutes."
        },
        {
          "q": "What did most of the people do?",
          "op": [
            "Stayed until the end",
            "Left early",
            "Drank all the coffee"
          ],
          "a": 0,
          "por": "Most of the people stayed until the end."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for the report. Hear it, then say it.",
      "frases": [
        {
          "t": "A few people came, and they liked it.",
          "img": "https://wolf-labs.pages.dev/p/c75c15f1f106/the-correction/img/live-jornais.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We had little coffee, so it finished quickly.",
          "img": "https://wolf-labs.pages.dev/p/c75c15f1f106/the-correction/img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Most of the people stayed until the end.",
          "img": "https://wolf-labs.pages.dev/p/c75c15f1f106/the-correction/img/live-sala.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "a few, a little, few, little, most. Four quick ones.",
      "regra": "<b>a few / a little</b> = some, fine · <b>few / little</b> = hardly any · <b>few</b> + count, <b>little</b> + can’t count · <b>most of the</b>, never <i>the most of</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "A few of my friends still use paper.",
          "aceita": [],
          "d": "Hint: <b>a few</b> + things you can count (friends)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I have a few money.",
          "r": "I have a little money.",
          "aceita": [],
          "d": "Hint: you can’t count money, so <b>a little</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it was fine, not a complaint.",
          "mostra": "Few people came, and we were happy about it.",
          "r": "A few people came, and we were happy about it.",
          "aceita": [],
          "d": "Hint: <b>a few</b> = some, and that is fine. <b>Few</b> sounds like a complaint."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The most of the teachers use it.",
          "r": "Most of the teachers use it.",
          "aceita": [
            "Most teachers use it."
          ],
          "d": "Hint: never <i>the most of</i>: <b>most of the</b> or just <b>most</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/c75c15f1f106/the-correction/img/live-jornais.webp",
      "leg": "A pile of newspapers under a lamp",
      "pede": "Look at the picture: a pile of newspapers under a lamp. Write 2 or 3 sentences about your last week. Use <b>a few / a little</b> for something fine, <b>few / little</b> for a small complaint, and <b>most of</b> ...",
      "ph": "Last week I had a few …",
      "ex": "Last week I had a few good conversations. I had little time to read, but most of my evenings were quiet."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you have a few of, and it is enough for you?",
          "ph": "I have a few …",
          "ex": "I have a few close friends, and that is enough for me."
        },
        {
          "q": "What do you have little of these days?",
          "ph": "I have little …",
          "ex": "I have little free time this month, so I plan my evenings carefully."
        }
      ]
    }
  }
};
