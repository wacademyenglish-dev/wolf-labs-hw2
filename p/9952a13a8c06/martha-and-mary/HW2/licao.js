/* MARTHA AND MARY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present simple x present continuous; verbos de estado. Bíblia (WEB, ao pé da letra, conferido em ebible.org/eng-web e engwebu): Lucas 10:39 (Out loud), 10:40 (Listen e Você). Nenhum versículo no Focus nem marcado como errado; nada da Bíblia vira falsa opção. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "martha-and-mary",
  "titulo": "Martha and Mary",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/9952a13a8c06/martha-and-mary/img/live-sala.webp",
  "alvo": "present simple (a habit: Martha usually cooks) versus present continuous (now: Martha is making bread); state verbs (want, need, know, love) never take -ing; he / she + -s; never she cook, never is make, never is wanting",
  "abrir": "What are you doing right now? What do you usually do at this time?",
  "fecho": "<b>Usually, every day</b> = one piece: <i>Martha cooks.</i> <b>Right now</b> = two pieces: <i>Martha is making bread.</i> He / she / it: the <b>-s</b>. Verbs like <b>want, need, know, love</b> never take -ing: <i>She wants help.</i>",
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
      "sub": "Mia tells Leo about two sisters. She quotes Martha in Luke 10:40. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/9952a13a8c06/martha-and-mary/img/live-cozinha.webp",
      "leg": "A kitchen with dough and clay jars",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, what are you doing?"
        },
        {
          "quem": "mia",
          "t": "I'm reading about two sisters, Martha and Mary. Martha usually cooks for the guests."
        },
        {
          "quem": "leo",
          "t": "What is she doing in the story?"
        },
        {
          "quem": "mia",
          "t": "She is making bread right now, and she is very busy. Her sister Mary is sitting in the other room."
        },
        {
          "quem": "leo",
          "t": "What is Mary doing there?"
        },
        {
          "quem": "mia",
          "t": "She is listening. She wants to hear Jesus, and she knows this is special."
        },
        {
          "quem": "leo",
          "t": "And Martha? Is she happy?"
        },
        {
          "quem": "mia",
          "t": "No. She says, “Lord, don’t you care that my sister left me to serve alone? Ask her therefore to help me.”"
        },
        {
          "quem": "leo",
          "t": "Does Martha usually ask for help?"
        },
        {
          "quem": "mia",
          "t": "No, she doesn't. She usually does everything alone, but today she needs help."
        }
      ],
      "perguntas": [
        {
          "q": "What is Martha doing now?",
          "op": [
            "She is making bread",
            "She is listening",
            "She is sleeping"
          ],
          "a": 0,
          "por": "She is making bread right now."
        },
        {
          "q": "What is Mary doing?",
          "op": [
            "She is sitting and listening",
            "She is cooking",
            "She is washing"
          ],
          "a": 0,
          "por": "Mary is sitting in the other room. She is listening."
        },
        {
          "q": "What does Martha usually do?",
          "op": [
            "She cooks for the guests",
            "She sits and listens",
            "She goes out"
          ],
          "a": 0,
          "por": "Martha usually cooks for the guests."
        }
      ]
    },
    "out": {
      "sub": "Three sentences. The third is from the Bible: Luke 10:39 (World English Bible). Hear it, then say it.",
      "frases": [
        {
          "t": "Martha usually cooks for the guests.",
          "img": "https://wolf-labs.pages.dev/p/9952a13a8c06/martha-and-mary/img/live-cozinha.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Right now Mary is sitting and listening.",
          "img": "https://wolf-labs.pages.dev/p/9952a13a8c06/martha-and-mary/img/live-sala.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "She had a sister called Mary, who also sat at Jesus’ feet and heard his word.",
          "img": "https://wolf-labs.pages.dev/p/9952a13a8c06/martha-and-mary/img/live-sala.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Every day or right now? Four quick ones.",
      "regra": "<b>usually / every day</b> = one piece (cooks) · <b>right now</b> = two pieces (is making) · he / she + <b>-s</b> · <b>want, need, know</b>: no -ing.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Martha is making bread right now.",
          "aceita": [],
          "d": "Dica: agora = <b>is</b> + verbo com <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Mary listening to Jesus now.",
          "r": "Mary is listening to Jesus now.",
          "aceita": [],
          "d": "Dica: agora tem dois pedaços: <b>is</b> + <b>listening</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Martha is cooking every day.",
          "r": "Martha cooks every day.",
          "aceita": [],
          "d": "Dica: todo dia é um pedaço só: <b>cooks</b>, sem is e sem -ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She is wanting some help now.",
          "r": "She wants some help now.",
          "aceita": [],
          "d": "Dica: <b>want</b> não leva -ing: she wants."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/9952a13a8c06/martha-and-mary/img/live-cozinha.webp",
      "leg": "A kitchen with dough and clay jars",
      "pede": "Look at the picture: a kitchen with dough and clay jars. Write 2 or 3 sentences: what you <b>usually</b> do in a kitchen, and what someone <b>is doing</b> right now.",
      "ph": "In the kitchen I usually … Right now …",
      "ex": "I usually cook rice in the kitchen. Right now my mother is making bread."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "In Luke 10:40 Martha says, “Lord, don’t you care that my sister left me to serve alone?” Think of your home. Who usually helps you? What is that person doing right now?",
          "ph": "… usually helps me. Right now …",
          "ex": "My brother usually helps me. Right now he is playing a game."
        },
        {
          "q": "What do you usually do in the evening? What are you doing right now?",
          "ph": "In the evening I usually … Right now I am …",
          "ex": "In the evening I usually watch a series. Right now I am answering this question."
        }
      ]
    }
  }
};
