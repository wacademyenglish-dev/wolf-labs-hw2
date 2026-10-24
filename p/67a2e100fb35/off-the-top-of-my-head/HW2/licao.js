/* OFF THE TOP OF MY HEAD · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: expressões idiomáticas em contexto. C1: nenhum português. Só imagens live-* escuras. */
window.HW2 = {
  "id": "off-the-top-of-my-head",
  "titulo": "Off the Top of My Head",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/67a2e100fb35/off-the-top-of-my-head/img/live-capa.webp",
  "alvo": "idioms in context: the words are fixed (every the, every -s, every preposition); only the verb tense and the possessive change (she spilled the beans, off the top of her head); never translate word by word: spill the beans, off the top of my head, the elephant in the room, a piece of cake, kill two birds with one stone, drop the ball, the last straw, on a roll, cost an arm and a leg",
  "abrir": "When did a secret come out by accident?",
  "fecho": "An idiom is one block: keep <b>every the, every -s, every preposition</b>. Only the verb and the possessive change: <i>she spilled the beans</i> · <i>off the top of her head</i>. <b>The elephant in the room</b> · <b>a piece of cake</b> · <b>kill two birds with one stone</b> · <b>drop the ball</b> · <b>the last straw</b> · <b>on a roll</b> · <b>cost an arm and a leg</b>. Never word by word.",
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
  "rate": "-6%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo plan a surprise at their storytelling club. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/67a2e100fb35/off-the-top-of-my-head/img/live-clube.webp",
      "leg": "The club, before Friday",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, how many people are coming on Friday? Off the top of your head."
        },
        {
          "quem": "leo",
          "t": "Off the top of my head, about thirty. But we have a problem. Dana spilled the beans, so Tom knows about his surprise party."
        },
        {
          "quem": "mia",
          "t": "Oh no. And we were on a roll! The decorations are done, and the band is booked."
        },
        {
          "quem": "leo",
          "t": "I know. And there's an elephant in the room: the budget. The cake alone cost an arm and a leg."
        },
        {
          "quem": "mia",
          "t": "Then let's split the work. If you call the caterer and I call the band, we kill two birds with one stone."
        },
        {
          "quem": "leo",
          "t": "Good. But please don't drop the ball this time. Last month you forgot the microphone."
        },
        {
          "quem": "mia",
          "t": "I know, I know. That was the last straw for the whole club."
        },
        {
          "quem": "leo",
          "t": "It was. So who tells Dana to keep quiet?"
        },
        {
          "quem": "mia",
          "t": "Not me. It's a piece of cake for you: you just smile and say please."
        },
        {
          "quem": "leo",
          "t": "A piece of cake? We'll see. Let's get started."
        }
      ],
      "perguntas": [
        {
          "q": "How many people does Leo expect?",
          "op": [
            "About thirty",
            "About fifteen",
            "About a hundred"
          ],
          "a": 0,
          "por": "Off the top of my head, about thirty."
        },
        {
          "q": "Why does Tom know about the party?",
          "op": [
            "Dana told him by accident",
            "He found the cake",
            "He planned it himself"
          ],
          "a": 0,
          "por": "Dana spilled the beans, so Tom knows about his surprise party."
        },
        {
          "q": "What is the elephant in the room?",
          "op": [
            "The budget",
            "The music",
            "The date"
          ],
          "a": 0,
          "por": "There's an elephant in the room: the budget."
        }
      ]
    },
    "out": {
      "sub": "Three lines with idioms. Hear it, then say it.",
      "frases": [
        {
          "t": "Off the top of my head, I'd say about thirty people.",
          "img": "https://wolf-labs.pages.dev/p/67a2e100fb35/off-the-top-of-my-head/img/live-clube.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Dana spilled the beans, so Tom knows about the party.",
          "img": "https://wolf-labs.pages.dev/p/67a2e100fb35/off-the-top-of-my-head/img/live-i-feijao.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If we split the work, we kill two birds with one stone.",
          "img": "https://wolf-labs.pages.dev/p/67a2e100fb35/off-the-top-of-my-head/img/live-i-passaros.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Fixed words, loose verb. Four quick ones.",
      "regra": "Keep every <b>the</b>, every <b>-s</b>, every preposition · <b>spill the beans</b> · <b>off the top of my head</b> · <b>the last straw</b> · <b>kill two birds with one stone</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She spilled the beans about the surprise party.",
          "aceita": [],
          "d": "Hint: the block is <b>spilled the beans</b>: the verb changes, the rest stays."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "From the top of my head, about thirty.",
          "r": "Off the top of my head, about thirty.",
          "aceita": [],
          "d": "Hint: the idiom starts with <b>off</b>: <b>off the top of my head</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "That was the last drop for me.",
          "r": "That was the last straw for me.",
          "aceita": [],
          "d": "Hint: the idiom is <b>the last straw</b>, the one that breaks the camel's back."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We can kill two rabbits with one stone.",
          "r": "We can kill two birds with one stone.",
          "aceita": [],
          "d": "Hint: in English it is <b>two birds with one stone</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/67a2e100fb35/off-the-top-of-my-head/img/live-clube.webp",
      "leg": "A club at night, frames on the wall",
      "pede": "Look at the picture: a small club at night, with frames on the wall. Write 2 or 3 sentences about a surprise, a plan or an event of yours. Use idioms: <b>spill the beans</b>, <b>a piece of cake</b>, <b>drop the ball</b>, <b>the last straw</b> or <b>off the top of my head</b>.",
      "ph": "Off the top of my head …",
      "ex": "My sister spilled the beans about my surprise trip, so it wasn't a surprise anymore. The planning was a piece of cake, but I dropped the ball with the tickets. That was the last straw for my brother."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What was a piece of cake for you, and what cost an arm and a leg?",
          "ph": "… was a piece of cake. … cost an arm and a leg.",
          "ex": "Cooking dinner was a piece of cake. My new phone cost an arm and a leg."
        },
        {
          "q": "When did you last drop the ball, or kill two birds with one stone?",
          "ph": "I dropped the ball when … / I killed two birds with one stone when …",
          "ex": "I killed two birds with one stone when I bought groceries on my way to the gym."
        }
      ]
    }
  }
};
