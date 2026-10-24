/* AFTERNOON CLASS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present continuous. A1: dicas em português só nas notas (d). Só live-*. */
window.HW2 = {
  "id": "afternoon-class",
  "titulo": "Afternoon Class",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/64e2100e46ad/afternoon-class/img/live-capa.webp",
  "alvo": "present continuous: am / is / are + verb-ing for right now; spelling of -ing (write → writing, swim → swimming); isn't / aren't / I'm not; Are you ...ing?",
  "abrir": "Where are you right now? What are you doing?",
  "fecho": "<b>Right now</b> = two pieces: <b>am / is / are</b> + verb-<b>ing</b>: <i>The teacher is writing.</i> The spelling changes a little: <i>write → writing, swim → swimming.</i> No: <i>He isn't sleeping.</i> A question: <i>Are you studying?</i>",
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
      "sub": "Leo calls Mia at two o'clock. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/64e2100e46ad/afternoon-class/img/live-predio.webp",
      "leg": "A school at two o'clock",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Hi Mia! What are you doing now?"
        },
        {
          "quem": "mia",
          "t": "I am sitting in class. It is two o'clock, and everybody is sleepy."
        },
        {
          "quem": "leo",
          "t": "Is the teacher talking?"
        },
        {
          "quem": "mia",
          "t": "Yes, she is writing on the board. A boy is looking at the clock."
        },
        {
          "quem": "leo",
          "t": "Is he sleeping?"
        },
        {
          "quem": "mia",
          "t": "No, he isn't sleeping. But the girl next to him is sleeping!"
        },
        {
          "quem": "leo",
          "t": "And the weather?"
        },
        {
          "quem": "mia",
          "t": "It is raining, and a cat is running under the window."
        },
        {
          "quem": "leo",
          "t": "Are you drinking coffee?"
        },
        {
          "quem": "mia",
          "t": "No, I'm not. I'm drinking water. Oh, the bell is ringing! Bye!"
        }
      ],
      "perguntas": [
        {
          "q": "What is the teacher doing?",
          "op": [
            "She is writing on the board",
            "She is sleeping",
            "She is drinking coffee"
          ],
          "a": 0,
          "por": "She is writing on the board."
        },
        {
          "q": "Is the boy sleeping?",
          "op": [
            "No, he isn't",
            "Yes, he is",
            "He is running"
          ],
          "a": 0,
          "por": "No, he isn't sleeping."
        },
        {
          "q": "What is the weather?",
          "op": [
            "It is raining",
            "It is sunny",
            "It is snowing"
          ],
          "a": 0,
          "por": "It is raining, and a cat is running under the window."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a class. Hear it, then say it.",
      "frases": [
        {
          "t": "The teacher is writing on the board.",
          "img": "https://wolf-labs.pages.dev/p/64e2100e46ad/afternoon-class/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The cat is sleeping near the window.",
          "img": "https://wolf-labs.pages.dev/p/64e2100e46ad/afternoon-class/img/live-gato.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It is raining, and the bird is eating.",
          "img": "https://wolf-labs.pages.dev/p/64e2100e46ad/afternoon-class/img/live-chuva.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "am, is or are + -ing. Four quick ones.",
      "regra": "<b>am / is / are</b> + verb-<b>ing</b> · <b>isn't / aren't / I'm not</b> · <b>write → writing</b>, <b>swim → swimming</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The boy is looking at the clock.",
          "aceita": [],
          "d": "Dica: <b>is</b> + verbo com <b>-ing</b>: dois pedaços."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "The girl sleeping at her desk.",
          "r": "The girl is sleeping at her desk.",
          "aceita": [
            "The girl's sleeping at her desk."
          ],
          "d": "Dica: agora tem dois pedaços: <b>is</b> + <b>sleeping</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the spelling is wrong.",
          "mostra": "The fish is swiming.",
          "r": "The fish is swimming.",
          "aceita": [],
          "d": "Dica: verbo curto dobra a última letra: swim → <b>swimming</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Are you study now?",
          "r": "Are you studying now?",
          "aceita": [],
          "d": "Dica: depois de <b>are you</b>, o verbo leva <b>-ing</b>: studying."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/64e2100e46ad/afternoon-class/img/live-cachorro.webp",
      "leg": "A dog with a red ball",
      "pede": "Look at the picture: a dog with a red ball. Write 2 or 3 sentences about what is happening now. Use <b>am / is / are + -ing</b>.",
      "ph": "The dog is playing with …",
      "ex": "The dog is playing with a red ball. He is running. He isn't sleeping."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Where are you right now? What are you doing?",
          "ph": "I am at … I am …ing.",
          "ex": "I am at home. I am sitting on my bed and answering these questions."
        },
        {
          "q": "What is your family doing now?",
          "ph": "My … is …ing.",
          "ex": "My mother is cooking and my brother is watching TV."
        }
      ]
    }
  }
};
