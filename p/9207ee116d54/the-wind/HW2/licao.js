/* THE ONRYŌ'S LIST (the-wind) · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present continuous (am/is/are + -ing). A1: dicas em português só nas notas (d). Mundo do jogo, sem violência; falas originais. */
window.HW2 = {
  "id": "the-wind",
  "titulo": "The Onryō’s List",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/9207ee116d54/the-wind/img/live-keyart.webp",
  "alvo": "present continuous: am / is / are + verb-ing for what is happening right now; one = is, many = are; question: Is the wolf sleeping?",
  "abrir": "What are you doing right now?",
  "fecho": "Two pieces, always: <b>am / is / are</b> + the verb with <b>-ing</b>: <i>The archer is sleeping.</i> One person: <i>is</i>. Many: <i>are</i>. A question: <i>Is the archer sleeping?</i>",
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
      "sub": "Mia and Leo on a hill, looking at a sleepy camp. A new scene, about 35 seconds.",
      "img": "https://wolf-labs.pages.dev/p/9207ee116d54/the-wind/img/live-campo.webp",
      "leg": "A hill above the camp",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at the camp. What is the guard doing?"
        },
        {
          "quem": "mia",
          "t": "The guard is eating rice by the gate."
        },
        {
          "quem": "leo",
          "t": "And the two soldiers?"
        },
        {
          "quem": "mia",
          "t": "They are playing dice by the fire."
        },
        {
          "quem": "leo",
          "t": "Is the archer watching the road?"
        },
        {
          "quem": "mia",
          "t": "No, he isn't. He is sleeping."
        },
        {
          "quem": "leo",
          "t": "The horses are sleeping too. And the wind is blowing from the river."
        },
        {
          "quem": "mia",
          "t": "Good. Are you ready?"
        },
        {
          "quem": "leo",
          "t": "Yes. I'm taking the map, and you are carrying the lantern."
        },
        {
          "quem": "mia",
          "t": "Perfect. The wolf is waiting for us by the trees."
        }
      ],
      "perguntas": [
        {
          "q": "What is the guard doing?",
          "op": [
            "Eating rice",
            "Sleeping",
            "Watching the road"
          ],
          "a": 0,
          "por": "The guard is eating rice by the gate."
        },
        {
          "q": "What are the soldiers doing?",
          "op": [
            "Playing dice",
            "Eating rice",
            "Sleeping"
          ],
          "a": 0,
          "por": "They are playing dice by the fire."
        },
        {
          "q": "Is the archer watching the road?",
          "op": [
            "No, he is sleeping",
            "Yes, he is",
            "No, he is eating"
          ],
          "a": 0,
          "por": "No, he isn't. He is sleeping."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the story. Hear it, then say it.",
      "frases": [
        {
          "t": "The archer is sleeping, and the horses are sleeping too.",
          "img": "https://wolf-labs.pages.dev/p/9207ee116d54/the-wind/img/live-campo.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Two soldiers are playing dice by the fire.",
          "img": "https://wolf-labs.pages.dev/p/9207ee116d54/the-wind/img/live-fogueira.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'm taking the map, and you are carrying the lantern.",
          "img": "https://wolf-labs.pages.dev/p/9207ee116d54/the-wind/img/live-vila.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Two pieces, always. Four quick ones.",
      "regra": "<b>am / is / are</b> + verb-<b>ing</b> · one person: <b>is</b> · many: <b>are</b> · a question: <b>Is</b> the wolf sleeping?",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The guard is eating rice by the gate.",
          "aceita": [],
          "d": "Dica: duas peças: <b>is</b> + <b>eating</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one piece is missing.",
          "mostra": "The archer watching the road.",
          "r": "The archer is watching the road.",
          "aceita": [],
          "d": "Dica: sem <b>is</b> a frase fica errada. Duas peças: <b>is</b> + <b>watching</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The soldiers is playing dice.",
          "r": "The soldiers are playing dice.",
          "aceita": [],
          "d": "Dica: muitos soldados, então <b>are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Make it a question.",
          "mostra": "The wolf is sleeping.",
          "r": "Is the wolf sleeping?",
          "aceita": [],
          "d": "Dica: na pergunta, <b>is</b> vai para o começo."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/9207ee116d54/the-wind/img/live-pousada.webp",
      "leg": "An inn in the snow",
      "pede": "Look at the picture: an inn at night, in the snow. Write 2 or 3 sentences about what people are doing right now. Use <b>is / are + -ing</b>.",
      "ph": "The old woman is … The men are …",
      "ex": "The old woman is sleeping. Two men are drinking tea, and the wolf is waiting outside."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you doing right now?",
          "ph": "I am … / I'm …",
          "ex": "I'm sitting on my bed, and I'm talking to Wolf."
        },
        {
          "q": "What is your family doing right now?",
          "ph": "My mother is … My brother is …",
          "ex": "My mother is cooking, and my brother is watching TV."
        }
      ]
    }
  }
};
