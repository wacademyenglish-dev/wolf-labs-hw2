/* LISTEN AND TYPE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Listen and Type: written form, weak words, quiet endings, same sound. B1: nenhum português. Só as imagens live-* da própria aula (todas escuras). */
window.HW2 = {
  "id": "det-listen-and-type",
  "titulo": "Listen and Type",
  "nivel": "B1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "Listen and Type: type the written form of fast speech (want to, going to), hear weak small words (of, a, to), use grammar for quiet -ed / -s, and choose between same-sound words (their / there / they're)",
  "abrir": "What do you do when you cannot understand a word in English?",
  "fecho": "Type the <b>written form</b>, not the sound: <b>wanna → want to</b>. Small words are weak but there: <b>a cup of tea</b>. Endings are quiet: <b>yesterday</b> tells you <b>walked</b>. Same sound, different word: <b>their car, over there, they're late</b>. Listen three times: meaning, details, check.",
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
      "sub": "Mia and Leo practice dictation. A new scene, about one minute.",
      "img": "../img/live-capa.webp",
      "leg": "A desk with headphones",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I missed three Listen and Type sentences today. The speaker said wanna, so I typed wanna."
        },
        {
          "quem": "leo",
          "t": "In the test you type the written form. Wanna becomes want to."
        },
        {
          "quem": "mia",
          "t": "And another one: a cup of tea. I heard a cup a tea."
        },
        {
          "quem": "leo",
          "t": "Yes, of is very weak. Grammar helps: a cup of something."
        },
        {
          "quem": "mia",
          "t": "Then the past. Yesterday she walked to the station. I typed walk."
        },
        {
          "quem": "leo",
          "t": "The ed is almost silent before a t. But yesterday tells you it is past."
        },
        {
          "quem": "mia",
          "t": "Oh. And they're, their, there? They sound the same."
        },
        {
          "quem": "leo",
          "t": "Meaning decides. They're late means they are late. Their car belongs to them."
        },
        {
          "quem": "mia",
          "t": "So I should listen three times: meaning, details, check."
        },
        {
          "quem": "leo",
          "t": "Exactly. And type every word, even the small ones."
        }
      ],
      "perguntas": [
        {
          "q": "What did Mia type wrong at first?",
          "op": [
            "Wanna instead of want to",
            "Walk instead of go",
            "There instead of here"
          ],
          "a": 0,
          "por": "The speaker said wanna, so I typed wanna."
        },
        {
          "q": "Why is walked correct in that sentence?",
          "op": [
            "Yesterday shows it is past",
            "Walked is shorter",
            "She likes walking"
          ],
          "a": 0,
          "por": "Yesterday tells you it is past."
        },
        {
          "q": "What does They're late mean?",
          "op": [
            "They are late",
            "Their car is late",
            "It is late there"
          ],
          "a": 0,
          "por": "They're late means they are late."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with hidden words. Hear it, then say it.",
      "frases": [
        {
          "t": "I want to practice a little every day.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She walked to the station with a cup of tea.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "They're sure their keys are over there.",
          "img": "../img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Written form, endings, same sound. Four quick ones.",
      "regra": "type <b>want to</b>, not <i>wanna</i> · <b>-ed</b> for the past · <b>their</b> = of them, <b>there</b> = a place, <b>they're</b> = they are.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I want to buy a cup of tea.",
          "aceita": [],
          "d": "Hint: the small word <b>of</b> is weak, but you type it."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: type the written form.",
          "mostra": "I wanna go home now.",
          "r": "I want to go home now.",
          "aceita": [],
          "d": "Hint: in the test, <b>wanna</b> is always typed as <b>want to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She walk to the station yesterday.",
          "r": "She walked to the station yesterday.",
          "aceita": [],
          "d": "Hint: <b>yesterday</b> means the past, so <b>walked</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We visited there house on Sunday.",
          "r": "We visited their house on Sunday.",
          "aceita": [],
          "d": "Hint: the house belongs to them: <b>their</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-conversa.webp",
      "leg": "A recording booth",
      "pede": "Look at the picture: a recording booth. Write 2 or 3 sentences about yesterday. Use a past verb with <b>-ed</b> and the small word <b>of</b>.",
      "ph": "Yesterday I walked to …",
      "ex": "Yesterday I walked to work. I drank a cup of coffee and listened to a podcast."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you want to do this weekend?",
          "ph": "I want to …",
          "ex": "I want to visit my friends and cook dinner for them."
        },
        {
          "q": "In one minute, tell me one thing you did yesterday and one thing you are going to do tomorrow.",
          "ph": "Yesterday I … Tomorrow I'm going to …",
          "ex": "Yesterday I walked to class. Tomorrow I'm going to practice listening."
        }
      ]
    }
  }
};
