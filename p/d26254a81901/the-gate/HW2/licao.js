/* THE GATE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past continuous x past simple (was/were + -ing x evento curto). Jogo: falas originais, so uma estrada e um portao, sem luta. A2: dicas em portugues so nas notas (d). Imagens live-* escuras. */
window.HW2 = {
  "id": "the-gate",
  "titulo": "The Gate",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/d26254a81901/the-gate/img/live-estrada.webp",
  "alvo": "past continuous x past simple: was / were + -ing for the long action in the background, past simple for the short event that interrupts (I was reading when the cart stopped); we / you / they were; never was + base verb",
  "abrir": "What were you doing at this time yesterday?",
  "fecho": "<b>Was / were + -ing</b> = the long action in the background. The <b>past simple</b> = the short event that interrupts: <i>I was reading the map when the cart stopped.</i> I, he, she, it = <b>was</b>. We, you, they = <b>were</b>.",
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
      "sub": "Mia and Leo reach an old gate on a night road. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/d26254a81901/the-gate/img/live-carroca.webp",
      "leg": "A cart on a night road",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the gate was open when we arrived. Who opened it?"
        },
        {
          "quem": "mia",
          "t": "Maybe the keeper. What was he doing when you came in?"
        },
        {
          "quem": "leo",
          "t": "He was sleeping by the fire when I said hello."
        },
        {
          "quem": "mia",
          "t": "Sleeping? So he wasn't watching the gate."
        },
        {
          "quem": "leo",
          "t": "No. And the wind was blowing hard all night."
        },
        {
          "quem": "mia",
          "t": "So the wind opened it! I was reading the map when the cart stopped, and I felt the wind too."
        },
        {
          "quem": "leo",
          "t": "Then the keeper woke up and laughed. He was dreaming about soup!"
        },
        {
          "quem": "mia",
          "t": "Funny. Let's go in before the rain starts."
        }
      ],
      "perguntas": [
        {
          "q": "What was the keeper doing when Leo said hello?",
          "op": [
            "He was sleeping by the fire",
            "He was reading the map",
            "He was closing the gate"
          ],
          "a": 0,
          "por": "He was sleeping by the fire when I said hello."
        },
        {
          "q": "What was Mia doing when the cart stopped?",
          "op": [
            "She was reading the map",
            "She was sleeping",
            "She was talking to the keeper"
          ],
          "a": 0,
          "por": "I was reading the map when the cart stopped."
        },
        {
          "q": "What opened the gate?",
          "op": [
            "The wind",
            "The keeper",
            "Mia"
          ],
          "a": 0,
          "por": "So the wind opened it!"
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a night at the gate. Hear it, then say it.",
      "frases": [
        {
          "t": "I was reading the map when the cart stopped.",
          "img": "https://wolf-labs.pages.dev/p/d26254a81901/the-gate/img/live-carroca.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The keeper was sleeping when I said hello.",
          "img": "https://wolf-labs.pages.dev/p/d26254a81901/the-gate/img/live-fogueira.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "What were you doing when the gate opened?",
          "img": "https://wolf-labs.pages.dev/p/d26254a81901/the-gate/img/live-portao.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Was doing or did? Four quick ones.",
      "regra": "<b>was / were + -ing</b> = the long action · <b>past simple</b> = the short event · we / you / they <b>were</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The keeper was sleeping when we arrived.",
          "aceita": [],
          "d": "Dica: ação longa (<b>was sleeping</b>) + <b>when</b> + ação curta no passado (arrived)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We was waiting when the gate opened.",
          "r": "We were waiting when the gate opened.",
          "aceita": [],
          "d": "Dica: com <b>we</b>, <b>you</b>, <b>they</b> o certo é <b>were</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I was sleep when the bell rang.",
          "r": "I was sleeping when the bell rang.",
          "aceita": [],
          "d": "Dica: depois de <b>was</b> vem o verbo com <b>-ing</b>: <b>sleeping</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I was walking when I was hearing a bell.",
          "r": "I was walking when I heard a bell.",
          "aceita": [],
          "d": "Dica: o evento curto que interrompe vai no passado simples: <b>heard</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/d26254a81901/the-gate/img/live-portao.webp",
      "leg": "A big wooden gate, open at night",
      "pede": "Look at the picture: a big wooden gate, open at night. Write 2 or 3 sentences about a time something happened while you were doing something. Use <b>was / were + -ing</b> and a past simple verb.",
      "ph": "I was … when …",
      "ex": "I was cooking dinner when my phone rang. My sister was watching TV when I came home."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What were you doing at nine last night?",
          "ph": "At nine, I was …",
          "ex": "At nine, I was watching a series with my sister."
        },
        {
          "q": "Where were you going when you got a message today?",
          "ph": "I was going to … when …",
          "ex": "I was going to the bus stop when my friend called."
        }
      ]
    }
  }
};
