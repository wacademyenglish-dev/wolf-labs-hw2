/* HOW MUCH IS TOO MUCH · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: too much / too many / enough / too + adjetivo. B1: nenhum português. Só as imagens live-* (já escuras). */
window.HW2 = {
  "id": "how-much-is-too-much",
  "titulo": "How Much Is Too Much",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e61622e19bfe/how-much-is-too-much/img/live-manha.webp",
  "alvo": "too much + uncountable (time, coffee, sleep) vs too many + countable (hours, cups, people); enough before a noun (enough time) and after an adjective (big enough); not enough as a complaint; too + adjective (too tired)",
  "abrir": "What do you have too much of in your week?",
  "fecho": "<b>Too many</b> + things you count (<i>hours, cups, people</i>). <b>Too much</b> + things you don't (<i>time, coffee, sleep</i>). <b>Enough</b> before a noun (<i>enough time</i>) and after an adjective (<i>big enough</i>). <b>Too</b> + adjective: <i>too tired</i>, never <i>too much tired</i>.",
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
      "sub": "Mia and Leo after a long week. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/e61622e19bfe/how-much-is-too-much/img/live-mesa2.webp",
      "leg": "Two cups on a dark café table",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you look exhausted. What's going on?"
        },
        {
          "quem": "mia",
          "t": "Too many things at once. I have too much work, and there aren't enough hours in the day."
        },
        {
          "quem": "leo",
          "t": "How many cups of coffee did you drink today?"
        },
        {
          "quem": "mia",
          "t": "Five. I know, that's too many. And I didn't get enough sleep: only five hours."
        },
        {
          "quem": "leo",
          "t": "Five hours isn't enough for anybody. Is it your phone? Mine is my problem. I pick it up two hundred times a day."
        },
        {
          "quem": "mia",
          "t": "Two hundred times? That's too many! Imagine how much time that takes."
        },
        {
          "quem": "leo",
          "t": "Over four hours a day. That's too much time on a screen, but I can't stop."
        },
        {
          "quem": "mia",
          "t": "Let's try something this week: two cups of coffee, one hour less on the phone, and eight hours of sleep."
        },
        {
          "quem": "leo",
          "t": "Eight hours is enough for me. Deal."
        }
      ],
      "perguntas": [
        {
          "q": "How many cups of coffee did Mia drink today?",
          "op": [
            "Five, and she thinks it's too many",
            "Two, and it's enough",
            "None"
          ],
          "a": 0,
          "por": "Five. I know, that's too many."
        },
        {
          "q": "Why is Mia so tired?",
          "op": [
            "She didn't get enough sleep",
            "She drank too little coffee",
            "She has too many friends"
          ],
          "a": 0,
          "por": "I didn't get enough sleep: only five hours."
        },
        {
          "q": "What does Leo do two hundred times a day?",
          "op": [
            "He picks up his phone",
            "He drinks coffee",
            "He checks his email"
          ],
          "a": 0,
          "por": "I pick it up two hundred times a day."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about too much and enough. Hear it, then say it.",
      "frases": [
        {
          "t": "I drink too many cups of coffee and I don't get enough sleep.",
          "img": "https://wolf-labs.pages.dev/p/e61622e19bfe/how-much-is-too-much/img/live-mesa2.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "This bedroom is quiet enough, but it's too cold to sleep.",
          "img": "https://wolf-labs.pages.dev/p/e61622e19bfe/how-much-is-too-much/img/live-quarto.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Is two hours too much time on your phone?",
          "img": "https://wolf-labs.pages.dev/p/e61622e19bfe/how-much-is-too-much/img/live-bolso.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Too much, too many or enough? Four quick ones.",
      "regra": "<b>too many</b> + countable · <b>too much</b> + uncountable · <b>enough</b> before a noun, after an adjective · <b>too</b> + adjective.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "There aren't enough chairs for all the guests.",
          "aceita": [],
          "d": "Hint: <b>enough</b> comes before the noun: <i>enough chairs</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There were too much people at the party.",
          "r": "There were too many people at the party.",
          "aceita": [],
          "d": "Hint: you can count people, so <b>too many</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The room isn't enough big for six people.",
          "r": "The room isn't big enough for six people.",
          "aceita": [
            "The room is not big enough for six people."
          ],
          "d": "Hint: after an adjective, <b>enough</b> comes second: <i>big enough</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I drink too many coffee every day.",
          "r": "I drink too much coffee every day.",
          "aceita": [
            "I drink too many cups of coffee every day."
          ],
          "d": "Hint: coffee is uncountable, so <b>too much</b>. With <i>cups</i>, you can say <b>too many</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e61622e19bfe/how-much-is-too-much/img/live-manha.webp",
      "leg": "A messy bed on a tired morning",
      "pede": "Look at the picture: a messy bed on a tired morning. Write 2 or 3 sentences about your week. Use <b>too much</b>, <b>too many</b> or <b>enough</b> (or <b>not enough</b>).",
      "ph": "I have too much … I don't have enough …",
      "ex": "I have too much work this week, and there aren't enough hours in the day. I drink too many cups of coffee. I don't get enough sleep."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you have too much of, and what don't you have enough of?",
          "ph": "I have too much … but I don't have enough …",
          "ex": "I have too much homework, but I don't have enough free time."
        },
        {
          "q": "How much sleep is enough for you? And how much do you really get?",
          "ph": "… hours is enough for me. Usually I sleep …",
          "ex": "Eight hours is enough for me, but usually I sleep only six."
        }
      ]
    }
  }
};
