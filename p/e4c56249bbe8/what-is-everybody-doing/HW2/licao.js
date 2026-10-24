/* WHAT IS EVERYBODY DOING? · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present continuous. A1: dicas em português só nas notas (d). Só live-* escuras. */
window.HW2 = {
  "id": "what-is-everybody-doing",
  "titulo": "What Is Everybody Doing?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e4c56249bbe8/what-is-everybody-doing/img/live-ponte.webp",
  "alvo": "present continuous: am / is / are + verb-ing for now; the question (Is she smiling?) and the negative (isn't / aren't + -ing); never she cleaning, is cook",
  "abrir": "What are you doing right now?",
  "fecho": "<b>Now</b> = <b>am / is / are</b> + verb-<b>ing</b>: <i>She is cleaning the floor.</i> No: <b>isn't / aren't</b>: <i>She isn't smiling.</i> Question: the little verb goes first: <i>Is she smiling? Are they running?</i>",
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
      "sub": "Mia and Leo watch the windows of a big old building at night. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/e4c56249bbe8/what-is-everybody-doing/img/live-mapa.webp",
      "leg": "A big old building at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at the big old building. The lights are on."
        },
        {
          "quem": "mia",
          "t": "Yes! Look at the first window. A girl is cleaning the floor."
        },
        {
          "quem": "leo",
          "t": "Is she smiling?"
        },
        {
          "quem": "mia",
          "t": "No, she isn't smiling. She is working very hard."
        },
        {
          "quem": "leo",
          "t": "What is the old man doing in the next window?"
        },
        {
          "quem": "mia",
          "t": "He is cooking soup. Two women are carrying big bowls."
        },
        {
          "quem": "leo",
          "t": "Are they talking?"
        },
        {
          "quem": "mia",
          "t": "No, they aren't talking. They are running!"
        },
        {
          "quem": "leo",
          "t": "And what are we doing?"
        },
        {
          "quem": "mia",
          "t": "We are watching the windows, and we are drinking tea."
        }
      ],
      "perguntas": [
        {
          "q": "What is the girl doing?",
          "op": [
            "Cleaning the floor",
            "Cooking soup",
            "Smiling"
          ],
          "a": 0,
          "por": "A girl is cleaning the floor."
        },
        {
          "q": "Is the girl smiling?",
          "op": [
            "No, she isn't",
            "Yes, she is",
            "Yes, she does"
          ],
          "a": 0,
          "por": "No, she isn't smiling."
        },
        {
          "q": "What are the two women carrying?",
          "op": [
            "Big bowls",
            "Flowers",
            "Boxes"
          ],
          "a": 0,
          "por": "Two women are carrying big bowls."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the windows. Hear it, then say it.",
      "frases": [
        {
          "t": "Two women are carrying big bowls.",
          "img": "https://wolf-labs.pages.dev/p/e4c56249bbe8/what-is-everybody-doing/img/live-mapa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The lights are shining on the bridge.",
          "img": "https://wolf-labs.pages.dev/p/e4c56249bbe8/what-is-everybody-doing/img/live-ponte.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "A girl is walking to the tunnel.",
          "img": "https://wolf-labs.pages.dev/p/e4c56249bbe8/what-is-everybody-doing/img/live-tunel.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "am, is or are + -ing. Four quick ones.",
      "regra": "<b>am / is / are</b> + <b>-ing</b> · <b>isn't / aren't</b> + -ing · question: <b>Is she</b> smiling?",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The old man is cooking soup now.",
          "aceita": [],
          "d": "Dica: agora = <b>is</b> + verbo com <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "The girl cleaning the floor now.",
          "r": "The girl is cleaning the floor now.",
          "aceita": [],
          "d": "Dica: agora precisa de <b>is</b> antes do -ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He is cook soup now.",
          "r": "He is cooking soup now.",
          "aceita": [],
          "d": "Dica: depois de <b>is</b>, o verbo leva <b>-ing</b>: cooking."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "She is smiling?",
          "r": "Is she smiling?",
          "aceita": [],
          "d": "Dica: na pergunta, o <b>is</b> vem primeiro."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e4c56249bbe8/what-is-everybody-doing/img/live-ponte.webp",
      "leg": "A long bridge at night",
      "pede": "Look at the picture: a long bridge at night. Write 2 or 3 sentences: what is happening <b>now</b>, and what you are doing.",
      "ph": "It is night. The lights are … I am …",
      "ex": "It is night. The lights are shining on the water. I am sitting and I am watching the bridge."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you doing right now?",
          "ph": "I am …ing.",
          "ex": "I am sitting in my room and I am talking to my teacher."
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
