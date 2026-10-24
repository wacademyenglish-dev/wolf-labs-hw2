/* THE MUSEUM AT NIGHT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   A2: dicas em português só nas notas (d). Imagens: as escuras da própria aula (live-*). */
window.HW2 = {
  "id": "a2-final-the-museum-at-night",
  "titulo": "The Museum at Night",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/fdeb3dc430ab/a2-final-the-museum-at-night/img/live-capa.webp",
  "alvo": "Unit 10 review, closing A2: phrasal verbs with the pronoun in the middle (turn it on, look for it); who / which / that / where; the passive in the present (it is made of, it is kept in); must / might / can't be to guess; never turn on them, never what for things",
  "abrir": "What is something in your house that is made of wood?",
  "fecho": "Phrasal verb + pronoun: <b>turn it on</b>, <b>turn them off</b>. People: <b>who</b>; things: <b>that / which</b>; places: <b>where</b>. Passive: <b>is made of</b>, <b>is kept in</b>. Guess: <b>must be</b>, <b>might be</b>, <b>can't be</b>.",
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
      "sub": "Mia and Leo are night guards in a small museum. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/fdeb3dc430ab/a2-final-the-museum-at-night/img/live-capa.webp",
      "leg": "A dark museum hall with statues",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, it's dark in here. Can you turn the lights on?"
        },
        {
          "quem": "mia",
          "t": "Sure, I'll turn them on. Wait. I hear a noise in the room where the statues are."
        },
        {
          "quem": "leo",
          "t": "It must be the wind."
        },
        {
          "quem": "mia",
          "t": "It can't be the wind. The windows are closed. It might be a cat."
        },
        {
          "quem": "leo",
          "t": "The cat that lives here? I look for it every night."
        },
        {
          "quem": "mia",
          "t": "Look! Little footprints. They must be from the cat."
        },
        {
          "quem": "leo",
          "t": "And what is this? A crown?"
        },
        {
          "quem": "mia",
          "t": "Yes. It's made of gold, and it's kept in a glass box. Please turn the alarm off."
        },
        {
          "quem": "leo",
          "t": "OK, I'll turn it off. The mystery is solved!"
        }
      ],
      "perguntas": [
        {
          "q": "Where does Mia hear a noise?",
          "op": [
            "In the kitchen",
            "In the room where the statues are",
            "On the road"
          ],
          "a": 1,
          "por": "I hear a noise in the room where the statues are."
        },
        {
          "q": "Why can't it be the wind?",
          "op": [
            "The windows are closed",
            "The doors are open",
            "It is a storm"
          ],
          "a": 0,
          "por": "It can't be the wind. The windows are closed."
        },
        {
          "q": "Where is the crown kept?",
          "op": [
            "On a table",
            "In a bag",
            "In a glass box"
          ],
          "a": 2,
          "por": "It's kept in a glass box."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the museum. Hear it, then say it.",
      "frases": [
        {
          "t": "Please turn the lights on.",
          "img": "https://wolf-labs.pages.dev/p/fdeb3dc430ab/a2-final-the-museum-at-night/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "This is the room where the statues are.",
          "img": "https://wolf-labs.pages.dev/p/fdeb3dc430ab/a2-final-the-museum-at-night/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It must be a cat. It can't be the wind.",
          "img": "https://wolf-labs.pages.dev/p/fdeb3dc430ab/a2-final-the-museum-at-night/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Phrasal verbs, who, passive. Four quick ones.",
      "regra": "<b>turn it off</b> (pronoun in the middle) · <b>who</b> for people · <b>is made of</b> (passive) · <b>must / can't be</b> to guess.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Please turn it off now.",
          "aceita": [],
          "d": "Dica: <b>turn</b> + <b>it</b> + <b>off</b>: o pronome fica no meio."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the pronoun goes in the middle.",
          "mostra": "Turn on them, please.",
          "r": "Turn them on, please.",
          "aceita": [
            "Please turn them on."
          ],
          "d": "Dica: com pronome, <b>turn them on</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "The crown made of gold.",
          "r": "The crown is made of gold.",
          "aceita": [],
          "d": "Dica: passiva no presente: <b>is made</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: who or what?",
          "mostra": "He is the guard what works here.",
          "r": "He is the guard who works here.",
          "aceita": [
            "He is the guard that works here."
          ],
          "d": "Dica: para pessoa, use <b>who</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/fdeb3dc430ab/a2-final-the-museum-at-night/img/live-capa.webp",
      "leg": "A dark museum hall with statues",
      "pede": "Look at the picture: a dark museum hall at night. Write 2 or 3 sentences. Use <b>must</b>, <b>might</b> or <b>can't</b> to guess, and say one thing with <b>is made of</b> or <b>is kept in</b>.",
      "ph": "The statue is made of …",
      "ex": "The big statue is made of stone. It is kept in the middle of the room. The noise might be a cat."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is something in your house that is made of wood?",
          "ph": "… is made of wood.",
          "ex": "My table is made of wood."
        },
        {
          "q": "Who is a person that helped you this year?",
          "ph": "… is a person who …",
          "ex": "My teacher is a person who helps me every week."
        }
      ]
    }
  }
};
