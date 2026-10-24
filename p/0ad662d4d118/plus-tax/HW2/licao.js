/* Plus Tax · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: How much / How many. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "plus-tax",
  "titulo": "Plus Tax",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/0ad662d4d118/plus-tax/img/live-b.webp",
  "alvo": "How much / How many with things we count and don't count (two apples, some milk, a loaf of bread); never 'How many milk', 'two breads', 'How much is the apples'",
  "abrir": "What food do you buy every week?",
  "fecho": "<b>How many</b> + things we count: <i>How many apples?</i> <b>How much</b> + things we don't count: <i>How much milk?</i> The price: <i>How much is it? How much are they?</i> Bread: <i>a loaf, two loaves</i>.",
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
      "sub": "Mia tells Leo about a supermarket in Toronto. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/0ad662d4d118/plus-tax/img/live-b.webp",
      "leg": "Toronto at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I'm at a supermarket in Toronto. I have a shopping list."
        },
        {
          "quem": "leo",
          "t": "What do you need?"
        },
        {
          "quem": "mia",
          "t": "Two apples, a loaf of bread and some milk."
        },
        {
          "quem": "leo",
          "t": "How many apples do you want? And how much milk?"
        },
        {
          "quem": "mia",
          "t": "Two apples and one litre of milk. How much is the bread?"
        },
        {
          "quem": "leo",
          "t": "The tag says three dollars. But there is tax at the checkout."
        },
        {
          "quem": "mia",
          "t": "Tax? How much is the tax?"
        },
        {
          "quem": "leo",
          "t": "Thirteen percent. So the bread is not three dollars."
        },
        {
          "quem": "mia",
          "t": "Oh no. And I want some coffee too. How much are the eggs?"
        },
        {
          "quem": "leo",
          "t": "Stop, Mia! First pay for the apples."
        }
      ],
      "perguntas": [
        {
          "q": "How many apples does Mia want?",
          "op": [
            "Two",
            "Six",
            "One"
          ],
          "a": 0,
          "por": "Two apples, a loaf of bread and some milk."
        },
        {
          "q": "What does the tag say about the bread?",
          "op": [
            "Three dollars",
            "Thirteen dollars",
            "One dollar"
          ],
          "a": 0,
          "por": "The tag says three dollars."
        },
        {
          "q": "When does Mia pay the tax?",
          "op": [
            "At the checkout",
            "At the door",
            "On the bus"
          ],
          "a": 0,
          "por": "There is tax at the checkout."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the shop. Hear it, then say it.",
      "frases": [
        {
          "t": "How many apples do you want?",
          "img": "https://wolf-labs.pages.dev/p/0ad662d4d118/plus-tax/img/live-b.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I want two apples and some milk.",
          "img": "https://wolf-labs.pages.dev/p/0ad662d4d118/plus-tax/img/live-b.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "How much is the bread? It is three dollars.",
          "img": "https://wolf-labs.pages.dev/p/0ad662d4d118/plus-tax/img/live-b.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "much or many? Four quick ones.",
      "regra": "<b>How many</b> + things we count · <b>How much</b> + things we don't count · <b>a loaf of</b> bread · <b>How much are</b> the apples?",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "How many apples do you need",
          "aceita": [],
          "d": "Dica: apples se conta (um, dois): <b>how many</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "How many milk do you want?",
          "r": "How much milk do you want?",
          "aceita": [],
          "d": "Dica: leite não se conta: <b>how much</b> milk."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Two breads, please.",
          "r": "Two loaves of bread, please.",
          "aceita": [],
          "d": "Dica: pão: <b>a loaf of bread</b>, dois: <b>two loaves of bread</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "How much is the apples?",
          "r": "How much are the apples?",
          "aceita": [],
          "d": "Dica: apples = eles: <b>how much are</b> the apples?"
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/0ad662d4d118/plus-tax/img/live-b.webp",
      "leg": "Toronto at night",
      "pede": "Look at the picture: Toronto at night. It is your first week there. Write 2 or 3 sentences about the food you buy. Use <b>two</b>, <b>some</b> or <b>a loaf of</b>.",
      "ph": "This week I buy two … and some …",
      "ex": "This week I buy two apples and some milk. I need a loaf of bread. I don't need coffee."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What food do you buy every week? Say two things.",
          "ph": "Every week I buy …",
          "ex": "Every week I buy two kilos of rice and some milk. I buy a loaf of bread too."
        },
        {
          "q": "How much is a coffee in your city?",
          "ph": "A coffee is … in my city.",
          "ex": "A coffee is about eight reais in my city."
        }
      ]
    }
  }
};
