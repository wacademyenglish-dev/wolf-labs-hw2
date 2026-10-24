/* DON'T DROP IT · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: pronomes objeto. Jogo WOLFSTATION: falas originais, sem violência. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "dont-drop-it",
  "titulo": "Don't Drop It",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/c88423769307/dont-drop-it/img/live-keyart.webp",
  "alvo": "object pronouns after a verb and after with / for / to: me, you, him, her, it, us, them; never help she, with I, see they",
  "abrir": "Who helps you when you have a problem?",
  "fecho": "After a verb, or after <b>with / for / to</b>, the word changes: <i>help me, call him, give it to her, come with us</i>. Never <i>help she</i>, never <i>with I</i>.",
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
      "sub": "Mia and Leo on a city roof at night. A new scene, about 30 seconds.",
      "img": "https://wolf-labs.pages.dev/p/c88423769307/dont-drop-it/img/live-escada.webp",
      "leg": "A fire escape and a cat",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look! A girl is on the stairs. She has a big box."
        },
        {
          "quem": "mia",
          "t": "I see her. Let's help her."
        },
        {
          "quem": "leo",
          "t": "Give the box to me. I can carry it."
        },
        {
          "quem": "mia",
          "t": "OK. Here it is. Where is her little brother?"
        },
        {
          "quem": "leo",
          "t": "He is on the roof with the cat. I can see them."
        },
        {
          "quem": "mia",
          "t": "Call him. Tell him to come with us."
        },
        {
          "quem": "leo",
          "t": "Hey! Come with us! We can help you."
        },
        {
          "quem": "mia",
          "t": "He is coming. The cat is coming with him."
        },
        {
          "quem": "leo",
          "t": "Good. Now the girl is happy. She wants to thank us."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo carry?",
          "op": [
            "The girl's box",
            "The cat",
            "A bag of food"
          ],
          "a": 0,
          "por": "Give the box to me. I can carry it."
        },
        {
          "q": "Who is on the roof with the cat?",
          "op": [
            "The girl's little brother",
            "The girl",
            "Mia"
          ],
          "a": 0,
          "por": "He is on the roof with the cat."
        },
        {
          "q": "What does the girl want to do?",
          "op": [
            "Thank Mia and Leo",
            "Call her mother",
            "Take the cat home"
          ],
          "a": 0,
          "por": "She wants to thank us."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the roof. Hear it, then say it.",
      "frases": [
        {
          "t": "I can see them on the bridge.",
          "img": "https://wolf-labs.pages.dev/p/c88423769307/dont-drop-it/img/live-ponte.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Give the box to me, please.",
          "img": "https://wolf-labs.pages.dev/p/c88423769307/dont-drop-it/img/live-escada.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Come with us, and we can help you.",
          "img": "https://wolf-labs.pages.dev/p/c88423769307/dont-drop-it/img/live-metro.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "me, him, her, it, us or them? Four quick ones.",
      "regra": "<b>I, you, he, she, it, we, they</b> before the verb · <b>me, you, him, her, it, us, them</b> after the verb and after <b>with / for / to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She wants to come with us.",
          "aceita": [],
          "d": "Dica: depois de <b>with</b>, a palavra muda: <b>us</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Help she, please.",
          "r": "Help her, please.",
          "aceita": [
            "Please help her."
          ],
          "d": "Dica: depois do verbo, <b>she</b> vira <b>her</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Come with I, please.",
          "r": "Come with me, please.",
          "aceita": [
            "Please come with me."
          ],
          "d": "Dica: depois de <b>with</b>, <b>I</b> vira <b>me</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I can't see they.",
          "r": "I can't see them.",
          "aceita": [
            "I cannot see them."
          ],
          "d": "Dica: depois do verbo, <b>they</b> vira <b>them</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/c88423769307/dont-drop-it/img/live-escada.webp",
      "leg": "A fire escape and a cat",
      "pede": "Look at the picture: a fire escape and a small cat. Write 2 or 3 sentences about the cat and the people. Use <b>me, you, him, her, it, us</b> or <b>them</b>.",
      "ph": "I can see the cat. I want to help …",
      "ex": "I can see the cat on the stairs. I want to help it. Please give it to me."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who do you call when you need help?",
          "ph": "I call … She / He helps me.",
          "ex": "I call my sister. She always helps me."
        },
        {
          "q": "Who do you want to see this weekend? Why?",
          "ph": "I want to see … because …",
          "ex": "I want to see my friends. I love them."
        }
      ]
    }
  }
};
