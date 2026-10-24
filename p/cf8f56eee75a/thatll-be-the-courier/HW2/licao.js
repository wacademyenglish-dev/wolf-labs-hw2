/* THAT'LL BE THE COURIER · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: will and would for confident deductions. C1: nenhum português. Só imagens live-* (escuras). */
window.HW2 = {
  "id": "thatll-be-the-courier",
  "titulo": "That'll Be the Courier",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/cf8f56eee75a/thatll-be-the-courier/img/live-capa.webp",
  "alvo": "will and would for confident deductions: That'll be the courier (now); She'll be at work now; He'll have left by now / won't have read it yet (past); That would be about 1998, he'd be about ten (past time); age with be, never have",
  "abrir": "When the doorbell rings and you aren't expecting anyone, who do you guess it is?",
  "fecho": "A confident guess, not the future: <b>That'll be</b> the courier (now) · <b>She'll be</b> at work (now) · <b>He'll have left</b> by now (past) · <b>That would be</b> about 1998 · <b>He'd be</b> about ten there. Age: <b>be</b>, never <i>have</i>.",
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
      "sub": "Mia and Leo wait for a parcel and a friend. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/cf8f56eee75a/thatll-be-the-courier/img/live-capa.webp",
      "leg": "A dark front door",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "(a doorbell rings) Oh, that'll be the courier. I've been waiting all week."
        },
        {
          "quem": "leo",
          "t": "At this hour? It won't be him. It'll be the neighbour, asking for sugar again."
        },
        {
          "quem": "mia",
          "t": "Hang on, I'll check. And can you try Sam? He should have landed by now."
        },
        {
          "quem": "leo",
          "t": "His phone's off. His flight will have landed an hour ago, but he won't have switched it on yet."
        },
        {
          "quem": "mia",
          "t": "Typical. So where would he be now?"
        },
        {
          "quem": "leo",
          "t": "Probably in the queue for passport control. It always takes ages there."
        },
        {
          "quem": "mia",
          "t": "It was the courier! Look, my aunt sent a parcel, with an old photo inside."
        },
        {
          "quem": "leo",
          "t": "Let me see. That would be about 1998, I'd say. You'd be about ten there."
        },
        {
          "quem": "mia",
          "t": "Ha, I was eleven. Look at that haircut, though."
        },
        {
          "quem": "leo",
          "t": "That'll be your mother's doing."
        }
      ],
      "perguntas": [
        {
          "q": "Who does Leo think is at the door?",
          "op": [
            "The neighbour",
            "The courier",
            "Sam"
          ],
          "a": 0,
          "por": "It'll be the neighbour, asking for sugar again."
        },
        {
          "q": "Why can't they reach Sam?",
          "op": [
            "He won't have turned his phone on after landing",
            "He hasn't left home yet",
            "He has lost his phone"
          ],
          "a": 0,
          "por": "He won't have switched it on yet."
        },
        {
          "q": "When does Leo think the photo was taken?",
          "op": [
            "Around 1998",
            "Around 2008",
            "Last year"
          ],
          "a": 0,
          "por": "That would be about 1998, I'd say."
        }
      ]
    },
    "out": {
      "sub": "Three confident guesses. Hear it, then say it.",
      "frases": [
        {
          "t": "Is that the bell? That'll be the courier with my parcel.",
          "img": "https://wolf-labs.pages.dev/p/cf8f56eee75a/thatll-be-the-courier/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It's eight already, so she'll have left for work by now.",
          "img": "https://wolf-labs.pages.dev/p/cf8f56eee75a/thatll-be-the-courier/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "That photo would be about 1998, and my father would be about forty there.",
          "img": "https://wolf-labs.pages.dev/p/cf8f56eee75a/thatll-be-the-courier/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "will and would for guesses. Four quick ones.",
      "regra": "<b>That'll be</b> the courier · <b>She'll be</b> at work now · <b>He'll have left</b> by now · <b>He won't have read</b> it yet · age: <b>be</b>, not <i>have</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "He won't have read my email yet.",
          "aceita": [],
          "d": "Hint: a confident guess about something that probably has not happened."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I'm sure she will arrive already.",
          "r": "I'm sure she will have arrived already.",
          "aceita": [
            "I'm sure she has arrived already."
          ],
          "d": "Hint: a guess about the past needs <b>will have</b> + participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "In this photo he would have about twenty.",
          "r": "In this photo he would be about twenty.",
          "aceita": [],
          "d": "Hint: in English, age goes with <b>be</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She is not answering, so she must to be in a meeting.",
          "r": "She is not answering, so she must be in a meeting.",
          "aceita": [
            "She is not answering, so she will be in a meeting."
          ],
          "d": "Hint: after <b>must</b>, no <i>to</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/cf8f56eee75a/thatll-be-the-courier/img/live-capa.webp",
      "leg": "A dark front door",
      "pede": "Look at the picture: a front door at night, and someone has just rung the bell. Write 2 or 3 sentences: who you think it is, and where somebody else will be right now. Use <b>that'll be</b>, <b>he'll / she'll be</b> or <b>will have</b>.",
      "ph": "That'll be … and my sister will be …",
      "ex": "That'll be my neighbour, because he always comes at this time. My sister will be at the gym now, and she'll have forgotten her keys again."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Your phone rings at six in the morning. Who will that be, and why?",
          "ph": "That'll be … because …",
          "ex": "That'll be my father. Nobody else calls that early, and he'll have forgotten the time difference."
        },
        {
          "q": "Think of a friend who lives abroad. What will they be doing right now?",
          "ph": "She'll be …ing right now.",
          "ex": "She'll be having lunch right now, and she'll have checked her phone twice."
        }
      ]
    }
  }
};
