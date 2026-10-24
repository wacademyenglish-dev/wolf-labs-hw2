/* CAN YOU FEEL MY HEART · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: possessive adjectives. Linha de música: NENHUM verso aqui; o listening é diálogo original. A1: dicas em português só nas notas (d). */
window.HW2_ARTIGO_CONTA = true;
window.HW2 = {
  "id": "can-you-feel-my-heart",
  "titulo": "Can You Feel My Heart",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/2716d1e8ee32/can-you-feel-my-heart/img/live-corredor.webp",
  "alvo": "possessive adjectives: my, your, his, her, our, their (I = my, you = your, he = his, she = her, we = our, they = their); his or her follows the owner, not the thing; no the before them; never we/they/me instead",
  "abrir": "Who is in your favorite band?",
  "fecho": "<b>my</b> (I) · <b>your</b> (you) · <b>his</b> (he) · <b>her</b> (she) · <b>our</b> (we) · <b>their</b> (they): <i>My guitar. Her voice. Their song.</i> <b>His</b> or <b>her</b> follows the owner, not the thing. No <i>the</i> before them: <i>my guitar</i>, never <i>the my guitar</i>.",
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
      "sub": "Mia and Leo talk about a school band. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/2716d1e8ee32/can-you-feel-my-heart/img/live-palco.webp",
      "leg": "A dark stage with soft lights",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, this is my guitar. It is old, but I love it."
        },
        {
          "quem": "mia",
          "t": "Nice! My guitar is new. Who is in your band?"
        },
        {
          "quem": "leo",
          "t": "Tom and Ana. Tom plays drums. His drums are very loud."
        },
        {
          "quem": "mia",
          "t": "And Ana? What does she do?"
        },
        {
          "quem": "leo",
          "t": "She sings. Her voice is great."
        },
        {
          "quem": "mia",
          "t": "Where do you practice?"
        },
        {
          "quem": "leo",
          "t": "In our school hall. Other bands practice there too. Their songs are very fast."
        },
        {
          "quem": "mia",
          "t": "Can I come to your practice on Friday?"
        },
        {
          "quem": "leo",
          "t": "Yes! Bring your friends."
        }
      ],
      "perguntas": [
        {
          "q": "Whose drums are very loud?",
          "op": [
            "Tom's drums",
            "Leo's drums",
            "Ana's drums"
          ],
          "a": 0,
          "por": "Tom plays drums. His drums are very loud."
        },
        {
          "q": "Who has a great voice?",
          "op": [
            "Ana",
            "Tom",
            "Mia"
          ],
          "a": 0,
          "por": "She sings. Her voice is great."
        },
        {
          "q": "Where does Leo's band practice?",
          "op": [
            "In the school hall",
            "At Mia's house",
            "In a park"
          ],
          "a": 0,
          "por": "In our school hall."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a band. Hear it, then say it.",
      "frases": [
        {
          "t": "This is my guitar, and that is your bag.",
          "img": "https://wolf-labs.pages.dev/p/2716d1e8ee32/can-you-feel-my-heart/img/live-palco.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "His drums are loud, and her voice is great.",
          "img": "https://wolf-labs.pages.dev/p/2716d1e8ee32/can-you-feel-my-heart/img/live-mochila.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Our band practices here, and their band practices there.",
          "img": "https://wolf-labs.pages.dev/p/2716d1e8ee32/can-you-feel-my-heart/img/live-corredor.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "my, your, his, her, our or their? Four quick ones.",
      "regra": "<b>my</b> · <b>your</b> · <b>his</b> · <b>her</b> · <b>our</b> · <b>their</b> + the thing. <b>His</b> or <b>her</b>: the owner, not the thing.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "My sister loves her new guitar.",
          "aceita": [],
          "d": "Dica: <b>my</b> + irmã, <b>her</b> porque o dono do violão é ela."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We band is very loud.",
          "r": "Our band is very loud.",
          "aceita": [
            "Our band is very loud."
          ],
          "d": "Dica: no lugar de <b>we</b>, o possessivo é <b>our</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Tom and Ana love they new song.",
          "r": "Tom and Ana love their new song.",
          "aceita": [
            "Tom and Ana love their new song."
          ],
          "d": "Dica: <b>they</b> vira <b>their</b> antes do nome."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Ana sings. His voice is great.",
          "r": "Ana sings. Her voice is great.",
          "aceita": [],
          "d": "Dica: a Ana é uma mulher, então a voz dela é <b>her</b> voice."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/2716d1e8ee32/can-you-feel-my-heart/img/live-armarios.webp",
      "leg": "A row of lockers in a dark hall",
      "pede": "Look at the picture: a row of lockers. Write 2 or 3 sentences about <b>your</b> bag or locker. What is in it? Use <b>my</b>, <b>his</b>, <b>her</b>, <b>our</b> or <b>their</b>.",
      "ph": "In my bag I have … My friend has his …",
      "ex": "In my bag I have my phone and my book. My friend Tom has his guitar. Our school hall is big."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is in your bag? Say two things.",
          "ph": "In my bag I have …",
          "ex": "In my bag I have my phone and my keys."
        },
        {
          "q": "Who is your favorite singer? Say two things about him or her.",
          "ph": "My favorite singer is … Her/His …",
          "ex": "My favorite singer is Anitta. Her songs are fun."
        }
      ]
    }
  }
};
