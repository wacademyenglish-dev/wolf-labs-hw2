/* BEFORE PARIS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: as soon as / just as / while / by the time / afterwards. B2: nenhum português. SEM imagem: a live-capa tem luminância 105 (clara) e a live-prox é a capa da próxima aula. */
window.HW2 = {
  "id": "before-paris",
  "titulo": "Before Paris",
  "nivel": "B2",
  "minutos": 10,
  "capa": "",
  "alvo": "telling events in a clear order and with exact timing: as soon as, just as, while, by the time, afterwards; no will after as soon as (as soon as I arrive); by the time + earlier event in the past perfect",
  "abrir": "What was the busiest morning of your week?",
  "fecho": "<b>As soon as</b> = immediately after: <i>As soon as I arrived, I called her.</i> <b>Just as</b> = at exactly that moment. <b>While</b> = at the same time. <b>By the time</b> = before that moment: <i>By the time I got there, it had closed.</i> No <i>will</i> after <i>as soon as</i>: <i>As soon as I arrive</i>.",
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
  "rate": "-10%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo after a messy trip. A new scene, about one minute.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you look wiped out. How was your trip to the conference?"
        },
        {
          "quem": "leo",
          "t": "Chaos. First of all, I overslept. As soon as I woke up, I realized my train was leaving in ten minutes."
        },
        {
          "quem": "mia",
          "t": "Ouch. Did you make it?"
        },
        {
          "quem": "leo",
          "t": "No. By the time I got to the station, the train had already left. Just as I was walking out, I saw the next one on the board."
        },
        {
          "quem": "mia",
          "t": "So you waited?"
        },
        {
          "quem": "leo",
          "t": "Yes. While I was waiting, I bumped into an old colleague. Afterwards, we had coffee together."
        },
        {
          "quem": "mia",
          "t": "That sounds nice, actually."
        },
        {
          "quem": "leo",
          "t": "It was. And as soon as I arrive next time, I will text you. I promise."
        },
        {
          "quem": "mia",
          "t": "Please do. I like to know you are safe."
        }
      ],
      "perguntas": [
        {
          "q": "What had happened by the time Leo got to the station?",
          "op": [
            "The train had already left",
            "The station had closed",
            "The next train was late"
          ],
          "a": 0,
          "por": "By the time I got to the station, the train had already left."
        },
        {
          "q": "What happened while Leo was waiting?",
          "op": [
            "He bumped into an old colleague",
            "He missed another train",
            "He called Mia"
          ],
          "a": 0,
          "por": "While I was waiting, I bumped into an old colleague."
        },
        {
          "q": "What will Leo do as soon as he arrives next time?",
          "op": [
            "Text Mia",
            "Call his boss",
            "Take a taxi"
          ],
          "a": 0,
          "por": "As soon as I arrive next time, I will text you."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the order of things. Hear it, then say it.",
      "frases": [
        {
          "t": "As soon as I woke up, I checked my phone.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "By the time we got to the cinema, the film had started.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Just as I was leaving, my boss called me.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "As soon as, by the time, while. Four quick ones.",
      "regra": "<b>as soon as</b> + present for the future · <b>by the time</b> + earlier event in the past perfect · <b>while</b> · <b>just as</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "By the time we arrived, the show had started.",
          "aceita": [],
          "d": "Hint: <b>by the time</b> + past, then <b>had</b> + participle for the earlier event."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: two words are wrong.",
          "mostra": "As soon as she will get home, she will cook.",
          "r": "As soon as she gets home, she will cook.",
          "aceita": [],
          "d": "Hint: after <b>as soon as</b>, use the present for the future."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Until I got there, the shop had closed.",
          "r": "By the time I got there, the shop had closed.",
          "aceita": [],
          "d": "Hint: <b>by the time</b> = before that moment. <i>Until</i> is for something that lasts."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "While waiting, I bumped to an old friend.",
          "r": "While waiting, I bumped into an old friend.",
          "aceita": [],
          "d": "Hint: the phrasal verb is <b>bump into</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "",
      "pede": "Write 2 or 3 sentences about a busy morning or a trip: what happened, in order. Use <b>as soon as</b>, <b>just as</b>, <b>while</b> or <b>by the time</b>.",
      "ph": "As soon as I woke up, ...",
      "ex": "As soon as I woke up, I made a coffee. While I was drinking it, my neighbor knocked on the door. By the time I got to work, the meeting had already started."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Tell me what you did this morning, in order.",
          "ph": "As soon as I woke up, I ...",
          "ex": "As soon as I woke up, I took a shower. Afterwards, I had breakfast, and by eight I was on the bus."
        },
        {
          "q": "What will you do as soon as this class ends?",
          "ph": "As soon as the class ends, I will ...",
          "ex": "As soon as the class ends, I will make a coffee and call my sister."
        }
      ]
    }
  }
};
