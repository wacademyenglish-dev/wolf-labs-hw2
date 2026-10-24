/* STILL OPEN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present perfect (ever, never, already, just, yet) x past simple com tempo terminado. Jogo: falas originais, so uma viagem noturna, sem crime ou violencia. A2: dicas em portugues so nas notas (d). Imagens live-* escuras. */
window.HW2 = {
  "id": "still-open",
  "titulo": "Still Open",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/40bf639756e7/still-open/img/live-keyart.webp",
  "alvo": "present perfect (have / has + participle: ever, never, already, just, yet) x past simple for a finished time (in 2019, last night, an hour ago); never have went, have seen ... last night, I didn't eat yet",
  "abrir": "Have you ever driven at night? Where did you go?",
  "fecho": "<b>Have / has + participle</b> = experience or news, no date: <i>I have never seen this city.</i> With <b>already</b>, <b>just</b>, <b>yet</b> too. A date or a finished time = <b>past simple</b>: <i>I went there in 2019.</i>",
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
      "sub": "Mia and Leo drive to a neon city at night. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/40bf639756e7/still-open/img/live-mapa.webp",
      "leg": "A lit road over dark water",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look! The neon city is open all night. Have you ever been here?"
        },
        {
          "quem": "mia",
          "t": "Yes, I have. I went there with my cousin in 2019."
        },
        {
          "quem": "leo",
          "t": "Nice. Have you eaten? I haven't eaten yet."
        },
        {
          "quem": "mia",
          "t": "I have already eaten. I had a sandwich at the gas station an hour ago."
        },
        {
          "quem": "leo",
          "t": "Good. Have you called the hotel yet?"
        },
        {
          "quem": "mia",
          "t": "Yes, I have just called them. The room is ready."
        },
        {
          "quem": "leo",
          "t": "And the car? Is there enough gas?"
        },
        {
          "quem": "mia",
          "t": "Yes, we filled the tank this afternoon. And this car has never broken down."
        },
        {
          "quem": "leo",
          "t": "Great! Then what are we waiting for? The city is still open!"
        }
      ],
      "perguntas": [
        {
          "q": "When did Mia go to the neon city?",
          "op": [
            "In 2019",
            "Last week",
            "She has never been there"
          ],
          "a": 0,
          "por": "I went there with my cousin in 2019."
        },
        {
          "q": "What has Mia already done?",
          "op": [
            "She has already eaten",
            "She hasn't eaten yet",
            "She has never eaten"
          ],
          "a": 0,
          "por": "I have already eaten."
        },
        {
          "q": "When did they fill the tank?",
          "op": [
            "This afternoon",
            "Next week",
            "An hour ago"
          ],
          "a": 0,
          "por": "We filled the tank this afternoon."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a night trip. Hear it, then say it.",
      "frases": [
        {
          "t": "I have never seen this city at night.",
          "img": "https://wolf-labs.pages.dev/p/40bf639756e7/still-open/img/live-keyart.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We have already filled the tank.",
          "img": "https://wolf-labs.pages.dev/p/40bf639756e7/still-open/img/live-carro.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I haven't seen the room yet.",
          "img": "https://wolf-labs.pages.dev/p/40bf639756e7/still-open/img/live-motel.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Have done or did? Four quick ones.",
      "regra": "<b>have / has + participle</b> (ever, never, already, just, yet) · a finished time = <b>past simple</b> · never <i>have went</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We have already filled the tank.",
          "aceita": [],
          "d": "Dica: <b>already</b> fica entre <b>have</b> e o particípio (filled)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Have you ever went to this city?",
          "r": "Have you ever been to this city?",
          "aceita": [
            "Have you ever gone to this city?"
          ],
          "d": "Dica: depois de <b>have</b> vem o particípio: <b>been</b> ou <b>gone</b>, não 'went'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I have seen that film last night.",
          "r": "I saw that film last night.",
          "aceita": [
            "I watched that film last night."
          ],
          "d": "Dica: <b>last night</b> é tempo terminado: use o passado simples (<b>saw</b>)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I didn't eat yet.",
          "r": "I haven't eaten yet.",
          "aceita": [],
          "d": "Dica: <b>yet</b> combina com <b>have</b> + particípio: <b>haven't eaten</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/40bf639756e7/still-open/img/live-carro.webp",
      "leg": "A red car at a night gas station",
      "pede": "Look at the picture: a car at a gas station at night. Write 2 or 3 sentences about a trip. Use <b>have / has</b> (ever, never, already, yet) once, and a finished time (<b>in 2019</b>, <b>last year</b>, <b>two days ago</b>) once.",
      "ph": "I have never … I went to … in …",
      "ex": "I have never been to the beach at night. I went to Salvador in 2019. I have already packed my bag."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Have you ever traveled at night? Where did you go?",
          "ph": "Yes, I have. I went to … in …",
          "ex": "Yes, I have. I went to Curitiba last year by bus."
        },
        {
          "q": "What have you already done today? What haven't you done yet?",
          "ph": "I have already … but I haven't … yet.",
          "ex": "I have already had lunch, but I haven't called my sister yet."
        }
      ]
    }
  }
};
