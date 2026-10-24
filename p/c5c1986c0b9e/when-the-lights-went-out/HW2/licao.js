/* WHEN THE LIGHTS WENT OUT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past continuous x past simple (o que faziam quando a luz apagou). Jogo: falas originais, um museu no escuro, sem violencia. A2: dicas em portugues so nas notas (d). Imagens live-* escuras. */
window.HW2 = {
  "id": "when-the-lights-went-out",
  "titulo": "When the Lights Went Out",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/c5c1986c0b9e/when-the-lights-went-out/img/live-keyart.webp",
  "alvo": "past continuous x past simple: was / were + -ing for what people were doing, past simple for the moment the lights went out; I / he / she / it was, we / you / they were; wasn't + -ing; What was he doing?",
  "abrir": "Where were you when the lights last went out at home?",
  "fecho": "<b>Was / were + -ing</b> = what each person was doing. The <b>past simple</b> = the moment that interrupted: <i>The pianist was playing when the lights went out.</i> The no: <b>wasn't / weren't + -ing</b>. The question: <b>What was he doing?</b>",
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
      "sub": "Mia and Leo ask who was where when the museum went dark. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/c5c1986c0b9e/when-the-lights-went-out/img/live-keyart.webp",
      "leg": "A museum at night with a beam of light",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the lights went out at nine. What were you doing?"
        },
        {
          "quem": "leo",
          "t": "I was standing by the piano. The pianist was playing a slow song."
        },
        {
          "quem": "mia",
          "t": "And the waiter?"
        },
        {
          "quem": "leo",
          "t": "He was talking on the phone. He was holding a tray, too."
        },
        {
          "quem": "mia",
          "t": "What about the photographer?"
        },
        {
          "quem": "leo",
          "t": "She was taking photos outside when the lights went out."
        },
        {
          "quem": "mia",
          "t": "So who was near the glass case?"
        },
        {
          "quem": "leo",
          "t": "The cleaner. He was walking to the case when the room became dark."
        },
        {
          "quem": "mia",
          "t": "Walking to the case? Then maybe he opened it!"
        },
        {
          "quem": "leo",
          "t": "Maybe. Let's watch the camera again."
        }
      ],
      "perguntas": [
        {
          "q": "What was the pianist doing?",
          "op": [
            "Playing a slow song",
            "Taking photos",
            "Talking on the phone"
          ],
          "a": 0,
          "por": "The pianist was playing a slow song."
        },
        {
          "q": "What was the waiter doing?",
          "op": [
            "Talking on the phone",
            "Playing the piano",
            "Walking to the case"
          ],
          "a": 0,
          "por": "He was talking on the phone."
        },
        {
          "q": "Who was walking to the glass case?",
          "op": [
            "The cleaner",
            "The photographer",
            "The pianist"
          ],
          "a": 0,
          "por": "He was walking to the case when the room became dark."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a dark museum. Hear it, then say it.",
      "frases": [
        {
          "t": "The pianist was playing when the lights went out.",
          "img": "https://wolf-labs.pages.dev/p/c5c1986c0b9e/when-the-lights-went-out/img/live-keyart.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I was watching the cameras when the phone rang.",
          "img": "https://wolf-labs.pages.dev/p/c5c1986c0b9e/when-the-lights-went-out/img/live-controle.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Where were you going when the room became dark?",
          "img": "https://wolf-labs.pages.dev/p/c5c1986c0b9e/when-the-lights-went-out/img/live-mapa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Was doing or did? Four quick ones.",
      "regra": "<b>was / were + -ing</b> = what they were doing · <b>past simple</b> = the moment · <b>wasn't + -ing</b> for no.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The waiter was talking when the room went dark.",
          "aceita": [],
          "d": "Dica: ação longa (<b>was talking</b>) + <b>when</b> + momento curto (went dark)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The pianist were playing when the lights went out.",
          "r": "The pianist was playing when the lights went out.",
          "aceita": [],
          "d": "Dica: com <b>he / she / it</b> e uma pessoa só, o certo é <b>was</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The cleaner didn't walking to the case.",
          "r": "The cleaner wasn't walking to the case.",
          "aceita": [
            "The cleaner was not walking to the case."
          ],
          "d": "Dica: o não de <b>was + -ing</b> é <b>wasn't + -ing</b>, não 'didn't + -ing'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "What the waiter was doing at nine?",
          "r": "What was the waiter doing at nine?",
          "aceita": [],
          "d": "Dica: na pergunta, <b>was</b> vem antes de <b>the waiter</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/c5c1986c0b9e/when-the-lights-went-out/img/live-controle.webp",
      "leg": "Camera screens in a dark room",
      "pede": "Look at the picture: camera screens in a dark room. Write 2 or 3 sentences about what people were doing at a party, a class or a trip. Use <b>was / were + -ing</b> and a past simple verb.",
      "ph": "At the party, my friend was … when …",
      "ex": "At the party, my friend was singing when the music stopped. I was talking to my cousin, and then the cake arrived."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What were you doing at eight this morning?",
          "ph": "At eight, I was …",
          "ex": "At eight, I was drinking coffee and reading messages."
        },
        {
          "q": "What were you doing the last time the lights went out at home?",
          "ph": "I was … when the lights went out.",
          "ex": "I was cooking when the lights went out. My brother was playing a game, and he shouted!"
        }
      ]
    }
  }
};
