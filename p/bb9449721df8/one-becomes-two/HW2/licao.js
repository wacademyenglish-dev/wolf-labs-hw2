/* ONE BECOMES TWO · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: plural: -s, -es, -ies, irregulares. A1: dicas em português só nas notas (d). Só imagens live-* (já escuras). */
window.HW2 = {
  "id": "one-becomes-two",
  "titulo": "One Becomes Two",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/bb9449721df8/one-becomes-two/img/live-barraca.webp",
  "alvo": "the plural: +s, +es after s / x / ch / sh, consonant + y becomes -ies, f becomes -ves, irregular man / men, child / children, person / people, foot / feet; two or more needs the plural; never two tomato, childs, peoples",
  "abrir": "What do you buy every week at the market?",
  "fecho": "<b>One</b> thing: <i>an apple</i>. <b>Two or more</b>: <b>-s</b>: <i>apples</i>. After a hiss (s, x, ch, sh): <b>-es</b>: <i>peaches</i>. Consonant + y: <b>-ies</b>: <i>cherries</i>. Odd ones: <i>children, people</i>.",
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
      "sub": "Mia buys fruit at a Saturday market. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/bb9449721df8/one-becomes-two/img/live-barraca.webp",
      "leg": "A market stall with crates of fruit",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Good morning! What do you want today?"
        },
        {
          "quem": "mia",
          "t": "Hello. I want six eggs and two lemons, please."
        },
        {
          "quem": "leo",
          "t": "Here you are. Do you want peaches? I have ten peaches."
        },
        {
          "quem": "mia",
          "t": "Yes, three peaches. And some cherries. How much are the cherries?"
        },
        {
          "quem": "leo",
          "t": "The cherries are five dollars. Do you need bread? I have four loaves."
        },
        {
          "quem": "mia",
          "t": "Two loaves, please. I have two children at home, and they love bread."
        },
        {
          "quem": "leo",
          "t": "Two children! Then take two boxes of tomatoes too. Many people buy them on Saturday."
        },
        {
          "quem": "mia",
          "t": "OK. Six eggs, two lemons, three peaches, two loaves and tomatoes. Thank you!"
        }
      ],
      "perguntas": [
        {
          "q": "How many eggs does Mia want?",
          "op": [
            "Six",
            "Two",
            "Ten"
          ],
          "a": 0,
          "por": "I want six eggs and two lemons."
        },
        {
          "q": "How many children does Mia have?",
          "op": [
            "Two",
            "Six",
            "Four"
          ],
          "a": 0,
          "por": "I have two children at home."
        },
        {
          "q": "How many loaves of bread does Mia buy?",
          "op": [
            "Two",
            "Four",
            "Three"
          ],
          "a": 0,
          "por": "Two loaves, please."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with plurals. Hear it, then say it.",
      "frases": [
        {
          "t": "There are many boxes of fruit at this stall.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/bb9449721df8/one-becomes-two/img/live-barraca.webp"
        },
        {
          "t": "The basket has apples, bananas and bread.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/bb9449721df8/one-becomes-two/img/live-cesta.webp"
        },
        {
          "t": "There are five signs and two pens on the table.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/bb9449721df8/one-becomes-two/img/live-placas.webp"
        }
      ]
    },
    "focus": {
      "sub": "One or more? Four quick ones.",
      "regra": "<b>-s</b> · <b>-es</b> after a hiss · <b>-ies</b> after consonant + y · odd ones: <i>children, people</i> · two or more needs the plural.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I want two boxes of tomatoes.",
          "aceita": [],
          "d": "Dica: <b>two</b> pede plural: tomato + es = tomatoes."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I have three peachs.",
          "r": "I have three peaches.",
          "aceita": [],
          "d": "Dica: depois de ch, o plural pede <b>-es</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She has two childs.",
          "r": "She has two children.",
          "aceita": [],
          "d": "Dica: child é irregular: <b>children</b>, nunca <i>childs</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Ten cherrys, please.",
          "r": "Ten cherries, please.",
          "aceita": [],
          "d": "Dica: consoante + y: tira o y e põe <b>-ies</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/bb9449721df8/one-becomes-two/img/live-cesta.webp",
      "leg": "A basket with fruit and bread",
      "pede": "Look at the picture: a basket with fruit and bread. Write 2 or 3 sentences about your shopping list. Use numbers and plurals: <b>six eggs</b>, <b>two loaves</b>, <b>ten cherries</b>.",
      "ph": "I buy six eggs, two …",
      "ex": "I buy six eggs and two lemons. I need three loaves of bread and ten cherries. Four people live in my house."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you buy every week?",
          "ph": "I buy …",
          "ex": "I buy six eggs, two lemons and a lot of tomatoes."
        },
        {
          "q": "How many people live in your house? Any children?",
          "ph": "… people live in my house.",
          "ex": "Four people live in my house: two adults and two children."
        }
      ]
    }
  }
};
