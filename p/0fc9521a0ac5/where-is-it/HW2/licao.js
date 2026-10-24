/* WHERE IS IT? · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: posição: on, under, above, behind, next to, in front of, between. A1: dicas em português só nas notas (d). Só as imagens live-* (já escuras). */
window.HW2 = {
  "id": "where-is-it",
  "titulo": "Where Is It?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/0fc9521a0ac5/where-is-it/img/live-casa.webp",
  "alvo": "position words: on, under, above, behind, next to, in front of, between ... and ...; Where is the ...? It's ...; never in the table, between of, in front the",
  "abrir": "Where is your phone right now?",
  "fecho": "<b>on</b> the table · <b>under</b> · <b>above</b> · <b>behind</b> · <b>next to</b> · <b>in front of</b> · <b>between</b> A <b>and</b> B. A flat thing = <b>on</b>. Never <i>in the table</i>, never <i>between of</i>, never <i>in front the</i>.",
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
      "sub": "Mia and Leo look at a little house. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/0fc9521a0ac5/where-is-it/img/live-casa.webp",
      "leg": "A little house, lit inside",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at this little house. Where is the cat?"
        },
        {
          "quem": "mia",
          "t": "The cat is under the table."
        },
        {
          "quem": "leo",
          "t": "And where is the ball?"
        },
        {
          "quem": "mia",
          "t": "The ball is on the sofa."
        },
        {
          "quem": "leo",
          "t": "Where is the lamp? I can't see it."
        },
        {
          "quem": "mia",
          "t": "The lamp is above the table."
        },
        {
          "quem": "leo",
          "t": "And the plant?"
        },
        {
          "quem": "mia",
          "t": "The plant is between the table and the sofa."
        },
        {
          "quem": "leo",
          "t": "What is behind the sofa?"
        },
        {
          "quem": "mia",
          "t": "Nothing! But the bag is in front of the table, next to the cat."
        },
        {
          "quem": "leo",
          "t": "Great. Now I know where everything is."
        }
      ],
      "perguntas": [
        {
          "q": "Where is the cat?",
          "op": [
            "Under the table",
            "On the sofa",
            "Behind the sofa"
          ],
          "a": 0,
          "por": "The cat is under the table."
        },
        {
          "q": "Where is the ball?",
          "op": [
            "On the sofa",
            "Under the table",
            "Above the table"
          ],
          "a": 0,
          "por": "The ball is on the sofa."
        },
        {
          "q": "Where is the plant?",
          "op": [
            "Between the table and the sofa",
            "Next to the sofa",
            "On the shelf"
          ],
          "a": 0,
          "por": "The plant is between the table and the sofa."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a wooden man. Hear it, then say it.",
      "frases": [
        {
          "t": "The wooden man is next to the box.",
          "img": "https://wolf-labs.pages.dev/p/0fc9521a0ac5/where-is-it/img/live-pos-nextto.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The wooden man is behind the box.",
          "img": "https://wolf-labs.pages.dev/p/0fc9521a0ac5/where-is-it/img/live-pos-behind.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The wooden man is between the chair and the box.",
          "img": "https://wolf-labs.pages.dev/p/0fc9521a0ac5/where-is-it/img/live-pos-between.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "on, in front of, between. Four quick ones.",
      "regra": "<b>on</b> the table · <b>in front of</b> · <b>next to</b> · <b>between</b> A <b>and</b> B (no <i>of</i>).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The cat is under the table.",
          "aceita": [],
          "d": "Dica: <b>under</b> + the + coisa."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The book is in the table.",
          "r": "The book is on the table.",
          "aceita": [],
          "d": "Dica: mesa é uma superfície: <b>on</b> the table, não 'in'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The plant is between of the table and the sofa.",
          "r": "The plant is between the table and the sofa.",
          "aceita": [],
          "d": "Dica: depois de <b>between</b> não tem 'of'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "The cat is in front the table.",
          "r": "The cat is in front of the table.",
          "aceita": [],
          "d": "Dica: são três palavras: <b>in front of</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/0fc9521a0ac5/where-is-it/img/live-quarto.webp",
      "leg": "A dark bedroom with a lamp",
      "pede": "Look at the picture: a dark bedroom with a small lamp. Write 2 or 3 sentences: where are things in a room? Use <b>on</b>, <b>next to</b>, <b>under</b> or <b>between</b>.",
      "ph": "The lamp is on …",
      "ex": "The lamp is on the table. The table is next to the bed. My shoes are under the bed."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Where is your phone now?",
          "ph": "My phone is on / next to …",
          "ex": "My phone is on the table, next to my cup."
        },
        {
          "q": "What is next to your bed? What is under it?",
          "ph": "A … is next to my bed.",
          "ex": "A small table is next to my bed. My shoes are under it."
        }
      ]
    }
  }
};
