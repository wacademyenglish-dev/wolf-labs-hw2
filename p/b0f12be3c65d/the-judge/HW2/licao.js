/* THE JUDGE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: superlativos: the -est, the most, the best / worst. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-judge",
  "titulo": "The Judge",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/b0f12be3c65d/the-judge/img/live-fitas.webp",
  "alvo": "superlatives: the + adjective + -est (the biggest, the tallest), the most + long adjective (the most beautiful), irregular the best / the worst; never 'the most big' or 'the goodest'",
  "abrir": "Who is the tallest person in your family?",
  "fecho": "One short word: add <b>the -est</b>: <i>the tallest, the biggest</i> (big: double the g). A long word: <b>the most</b>: <i>the most beautiful</i>. Two words break: <b>good → the best</b>, <b>bad → the worst</b>. Never <i>the most big</i>, never <i>the goodest</i>.",
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
      "sub": "Mia and Leo at the Riverside fair. A new scene, about 30 seconds.",
      "img": "https://wolf-labs.pages.dev/p/b0f12be3c65d/the-judge/img/live-tenda.webp",
      "leg": "The fair, at sunset",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Welcome to the fair, Leo. Today I am the judge."
        },
        {
          "quem": "leo",
          "t": "Great! Look at my pumpkin. It is the biggest here."
        },
        {
          "quem": "mia",
          "t": "Wow, you are right. And it is the heaviest, too."
        },
        {
          "quem": "leo",
          "t": "Forty kilos! Now look at the cakes. Which one is the best?"
        },
        {
          "quem": "mia",
          "t": "The chocolate cake is the sweetest, but the lemon cake is the most beautiful."
        },
        {
          "quem": "leo",
          "t": "And my cake? Is it the worst?"
        },
        {
          "quem": "mia",
          "t": "No, no! Your cake is the second best."
        },
        {
          "quem": "leo",
          "t": "Thank you! Who is the tallest man at the fair?"
        },
        {
          "quem": "mia",
          "t": "Mr. Ford. He is the tallest man in town."
        },
        {
          "quem": "leo",
          "t": "And you are the nicest judge in town."
        }
      ],
      "perguntas": [
        {
          "q": "What is special about Leo's pumpkin?",
          "op": [
            "It is the biggest and the heaviest",
            "It is the smallest",
            "It is the sweetest"
          ],
          "a": 0,
          "por": "Look at my pumpkin. It is the biggest here."
        },
        {
          "q": "Which cake is the sweetest?",
          "op": [
            "The chocolate cake",
            "The lemon cake",
            "Leo's cake"
          ],
          "a": 0,
          "por": "The chocolate cake is the sweetest."
        },
        {
          "q": "What does Mia say about Leo's cake?",
          "op": [
            "It is the second best",
            "It is the worst",
            "It is the sweetest"
          ],
          "a": 0,
          "por": "Your cake is the second best."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the fair. Hear it, then say it.",
      "frases": [
        {
          "t": "Leo's pumpkin is the biggest and the heaviest.",
          "img": "https://wolf-labs.pages.dev/p/b0f12be3c65d/the-judge/img/live-abob-b.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The chocolate cake is the sweetest.",
          "img": "https://wolf-labs.pages.dev/p/b0f12be3c65d/the-judge/img/live-bolos.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "This is the most beautiful flower at the fair.",
          "img": "https://wolf-labs.pages.dev/p/b0f12be3c65d/the-judge/img/live-flor-b.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "The -est, the most, the best. Four quick ones.",
      "regra": "<b>the -est</b>: the tallest, the biggest · <b>the most</b> + long word: the most beautiful · <b>good → the best</b> · <b>bad → the worst</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Mr. Ford is the tallest man in town.",
          "aceita": [],
          "d": "Dica: <b>the</b> + adjetivo + <b>-est</b>: the tallest."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "This is the most big pumpkin.",
          "r": "This is the biggest pumpkin.",
          "aceita": [
            "That is the biggest pumpkin."
          ],
          "d": "Dica: big é uma palavra curta: <b>the biggest</b> (dobre o g)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "That is the goodest cake.",
          "r": "That is the best cake.",
          "aceita": [
            "This is the best cake."
          ],
          "d": "Dica: good é irregular: <b>the best</b>."
        },
        {
          "tipo": "escreve",
          "t": "Say it with the most.",
          "mostra": "this flower · beautiful",
          "r": "This is the most beautiful flower.",
          "aceita": [
            "It is the most beautiful flower.",
            "That is the most beautiful flower.",
            "This flower is the most beautiful."
          ],
          "d": "Dica: palavra comprida: <b>the most</b> + adjetivo."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/b0f12be3c65d/the-judge/img/live-fitas.webp",
      "leg": "Ribbons for the winners",
      "pede": "Look at the picture: ribbons for the winners. Write 2 or 3 prizes for people you know. Use <b>the …est, the most …</b> or <b>the best</b>.",
      "ph": "The tallest person in my family is …",
      "ex": "My brother is the tallest person in my family. My mother makes the best cake. The most beautiful place I know is the beach."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who is the tallest person in your family? And the youngest?",
          "ph": "The tallest is … The youngest is …",
          "ex": "My father is the tallest. My niece is the youngest."
        },
        {
          "q": "What is the best food in your city? What is the most expensive thing you have?",
          "ph": "The best food is … The most expensive thing is my …",
          "ex": "The best food in my city is fish stew. The most expensive thing I have is my phone."
        }
      ]
    }
  }
};
