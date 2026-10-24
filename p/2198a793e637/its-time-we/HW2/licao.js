/* IT'S TIME WE STOOD TOGETHER · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: would rather / it's time + passado. B2: nenhum português. Só live-* escuras. Sem violência. */
window.HW2 = {
  "id": "its-time-we",
  "titulo": "It's Time We Stood Together",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/2198a793e637/its-time-we/img/live-reuniao.webp",
  "alvo": "would rather + plain verb (I'd rather stay than leave), would rather + person + past (I'd rather you called me), I'd rather not, Would you rather ...?, it's time + person + past (it's time we left), it's time to + verb",
  "abrir": "Would you rather stay home or go out this weekend?",
  "fecho": "<b>Would rather</b> + plain verb: <i>I'd rather stay.</i> With another person, the past form: <i>I'd rather you called me.</i> <b>It's time we</b> + past: <i>It's time we left.</i> Or <b>it's time to</b> + verb: <i>It's time to go.</i> Never <i>would rather to</i>, never <i>it's time we go</i>.",
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
      "sub": "Mia and Leo prepare a meeting of their building's group. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/2198a793e637/its-time-we/img/live-reuniao.webp",
      "leg": "A round meeting room with screens",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the building group meets tonight. It's time we decided about the garden."
        },
        {
          "quem": "mia",
          "t": "I know. I'd rather we met outside, but it might rain."
        },
        {
          "quem": "leo",
          "t": "I'd rather not sit in the rain either. Would you rather meet in my flat?"
        },
        {
          "quem": "mia",
          "t": "Honestly, I'd rather you chose the place. You have more chairs."
        },
        {
          "quem": "leo",
          "t": "Fine. But it's time somebody told Mr. Costa about the noise."
        },
        {
          "quem": "mia",
          "t": "I'd rather you spoke to him. He listens to you."
        },
        {
          "quem": "leo",
          "t": "I'd rather not. Last time he talked for an hour."
        },
        {
          "quem": "mia",
          "t": "Then it's time to vote. Would you rather he came to the meeting or got a letter?"
        },
        {
          "quem": "leo",
          "t": "A letter. I'd rather finish early tonight."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia say about the place?",
          "op": [
            "She would rather Leo chose it",
            "She would rather meet in the rain",
            "She would rather not meet"
          ],
          "a": 0,
          "por": "I'd rather you chose the place. You have more chairs."
        },
        {
          "q": "What is it time to do about Mr. Costa?",
          "op": [
            "Tell him about the noise",
            "Vote on the garden",
            "Send him a gift"
          ],
          "a": 0,
          "por": "It's time somebody told Mr. Costa about the noise."
        },
        {
          "q": "What does Leo choose for Mr. Costa?",
          "op": [
            "A letter",
            "A meeting",
            "A phone call"
          ],
          "a": 0,
          "por": "A letter. I'd rather finish early tonight."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a group. Hear it, then say it.",
      "frases": [
        {
          "t": "I'd rather you called me before you came.",
          "img": "https://wolf-labs.pages.dev/p/2198a793e637/its-time-we/img/live-reuniao.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It's time we talked to our neighbor.",
          "img": "https://wolf-labs.pages.dev/p/2198a793e637/its-time-we/img/live-mansao.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Would you rather meet outside or in my flat?",
          "img": "https://wolf-labs.pages.dev/p/2198a793e637/its-time-we/img/live-clube.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Would rather and it's time. Four quick ones.",
      "regra": "<b>would rather</b> + plain verb · <b>would rather you</b> + past · <b>it's time we</b> + past · <b>it's time to</b> + verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I would rather stay home than go out.",
          "aceita": [],
          "d": "Hint: <b>would rather</b> + plain verb, then <b>than</b> + plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'd rather to stay home tonight.",
          "r": "I'd rather stay home tonight.",
          "aceita": [
            "I would rather stay home tonight."
          ],
          "d": "Hint: no <b>to</b> after <b>would rather</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It's time we go home now.",
          "r": "It's time we went home now.",
          "aceita": [
            "It is time we went home now."
          ],
          "d": "Hint: <b>it's time we</b> + past form."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I'd rather you to call me later.",
          "r": "I'd rather you called me later.",
          "aceita": [
            "I would rather you called me later."
          ],
          "d": "Hint: <b>I'd rather you</b> + past form, no <b>to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/2198a793e637/its-time-we/img/live-clube.webp",
      "leg": "A quiet room with a TV",
      "pede": "Look at the picture: a quiet room with a TV. Write 2 or 3 sentences about a group you are in (family, class, work). Say what you would rather do and what it is time to do. Use <b>I'd rather …</b>, <b>I'd rather you …</b> and <b>it's time we …</b>.",
      "ph": "It's time we … I'd rather …",
      "ex": "It's time we changed the day of our class. I'd rather meet on Thursday. I'd rather the teacher sent the homework earlier."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Would you rather go out or stay home after work? Why?",
          "ph": "I'd rather … than …",
          "ex": "I'd rather stay home than go out, because I'm tired after work."
        },
        {
          "q": "What is something you keep delaying? Is it time you did it?",
          "ph": "It's time I …",
          "ex": "It's time I started saving money for my trip."
        }
      ]
    }
  }
};
