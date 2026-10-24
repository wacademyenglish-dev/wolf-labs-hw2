/* Table for Two · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Is it? Does it have? I don't / can't eat. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "table-for-two",
  "titulo": "Table for Two",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/c2e034692aa9/table-for-two/img/live-capa.webp",
  "alvo": "Is it ...? (Is it spicy?), Does it have ...? (Does it have nuts?), I don't eat ... / I can't eat ...; never 'Is spicy?', 'It have nuts?', 'I no eat meat', 'I can't to eat'",
  "abrir": "What is your favourite food?",
  "fecho": "<b>Is it</b> spicy? <i>Yes, it is. / No, it isn't.</i> <b>Does it have</b> nuts? <i>Yes, it does. / No, it doesn't.</i> <b>I don't eat</b> meat. <b>I can't eat</b> nuts. English needs <i>it</i>, and <i>don't</i> (not <i>no</i>).",
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
      "sub": "Mia tells Leo about her dinner in Chicago. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/c2e034692aa9/table-for-two/img/live-a.webp",
      "leg": "A plate of pasta and two salads",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I'm at a restaurant in Chicago. I'm at table twelve."
        },
        {
          "quem": "leo",
          "t": "What is on the menu?"
        },
        {
          "quem": "mia",
          "t": "There is soup, pasta and fish. I ask the waiter: Is the soup spicy?"
        },
        {
          "quem": "leo",
          "t": "What does he say?"
        },
        {
          "quem": "mia",
          "t": "He says: No, it isn't spicy. But it has nuts."
        },
        {
          "quem": "leo",
          "t": "Oh. Does the pasta have nuts?"
        },
        {
          "quem": "mia",
          "t": "No, it doesn't. I can't eat nuts, so I take the pasta."
        },
        {
          "quem": "leo",
          "t": "And your friend?"
        },
        {
          "quem": "mia",
          "t": "She is late. She doesn't eat meat, so I order a salad for her."
        }
      ],
      "perguntas": [
        {
          "q": "Is the soup spicy?",
          "op": [
            "No, it isn't",
            "Yes, it is",
            "Yes, it does"
          ],
          "a": 0,
          "por": "No, it isn't spicy. But it has nuts."
        },
        {
          "q": "Why does Mia take the pasta?",
          "op": [
            "The soup has nuts",
            "The pasta is cheap",
            "The soup is cold"
          ],
          "a": 0,
          "por": "I can't eat nuts, so I take the pasta."
        },
        {
          "q": "What does Mia order for her friend?",
          "op": [
            "A salad",
            "A soup",
            "A steak"
          ],
          "a": 0,
          "por": "She doesn't eat meat, so I order a salad for her."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the restaurant. Hear it, then say it.",
      "frases": [
        {
          "t": "Is it spicy? No, it isn't.",
          "img": "https://wolf-labs.pages.dev/p/c2e034692aa9/table-for-two/img/live-a.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Does it have nuts? I can't eat nuts.",
          "img": "https://wolf-labs.pages.dev/p/c2e034692aa9/table-for-two/img/live-a.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "A table for two, please.",
          "img": "https://wolf-labs.pages.dev/p/c2e034692aa9/table-for-two/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Ordering food. Four quick ones.",
      "regra": "<b>Is it</b> spicy? · <b>Does it have</b> nuts? · <b>I don't eat</b> meat · <b>I can't eat</b> nuts · always <b>it</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Does the soup have any meat",
          "aceita": [],
          "d": "Dica: pergunta com <b>does</b> + <b>have</b>: Does the soup <b>have</b> ...?"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Is spicy?",
          "r": "Is it spicy?",
          "aceita": [],
          "d": "Dica: o inglês sempre precisa do <b>it</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: ask the question right.",
          "mostra": "It have nuts?",
          "r": "Does it have nuts?",
          "aceita": [],
          "d": "Dica: pergunta: <b>Does it have</b> ...?"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I no eat meat.",
          "r": "I don't eat meat.",
          "aceita": [
            "I do not eat meat."
          ],
          "d": "Dica: o não é <b>don't</b>, nunca 'no'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/c2e034692aa9/table-for-two/img/live-b.webp",
      "leg": "A waiter's notebook and a pen",
      "pede": "Look at the picture: a waiter's notebook and a pen. Write 2 or 3 sentences: what do you want? Ask about the food. Use <b>Is it ...?</b> <b>Does it have ...?</b> <b>I don't eat ...</b>",
      "ph": "I want … Is it …? Does it have …?",
      "ex": "I want the pasta. Is it spicy? Does it have meat? I don't eat meat."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What food don't you eat? Say two things.",
          "ph": "I don't eat …",
          "ex": "I don't eat mushrooms. I don't eat fish because I don't like it."
        },
        {
          "q": "Think of your favourite dish. Is it spicy? Does it have meat?",
          "ph": "It isn't … / It has …",
          "ex": "My favourite dish is lasagna. It isn't spicy. It has cheese and meat."
        }
      ]
    }
  }
};
