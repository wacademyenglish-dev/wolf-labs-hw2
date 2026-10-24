/* FLAT WHITE, PLEASE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: nome, soletrar, preço. A1: português só nas dicas (d). Sem imagens: as da cafeteria são claras demais (fotofobia). */
window.HW2 = {
  "id": "flat-white-please",
  "titulo": "Flat White, Please",
  "nivel": "A1",
  "minutos": 10,
  "capa": "",
  "alvo": "At a café: What's your name? / My name is ... · spelling a name letter by letter · How much is it? / It's twelve fifty. Never: How much cost, My name Ana, twelve and fifty.",
  "abrir": "What coffee do you like?",
  "fecho": "<b>My name is Mia.</b> <b>How do you spell it?</b> M, I, A. <b>How much is it?</b> <i>It's five twenty</i> (no <i>and</i>).",
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
      "sub": "Mia orders a coffee in Sydney. Leo is the barista. A new scene, about 40 seconds.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Hi, what can I get you?"
        },
        {
          "quem": "mia",
          "t": "A flat white, please."
        },
        {
          "quem": "leo",
          "t": "Small, medium or large?"
        },
        {
          "quem": "mia",
          "t": "Medium, please."
        },
        {
          "quem": "leo",
          "t": "Sure. What's your name?"
        },
        {
          "quem": "mia",
          "t": "My name is Mia."
        },
        {
          "quem": "leo",
          "t": "How do you spell that?"
        },
        {
          "quem": "mia",
          "t": "M, I, A."
        },
        {
          "quem": "leo",
          "t": "Thanks, Mia."
        },
        {
          "quem": "mia",
          "t": "How much is it?"
        },
        {
          "quem": "leo",
          "t": "Five twenty."
        },
        {
          "quem": "mia",
          "t": "Here you go."
        },
        {
          "quem": "leo",
          "t": "No worries! Take a seat."
        }
      ],
      "perguntas": [
        {
          "q": "What size coffee does Mia want?",
          "op": [
            "Medium",
            "Small",
            "Large"
          ],
          "a": 0,
          "por": "Medium, please."
        },
        {
          "q": "How does Mia spell her name?",
          "op": [
            "M, I, A",
            "M, E, A",
            "N, I, A"
          ],
          "a": 0,
          "por": "M, I, A."
        },
        {
          "q": "How much is the coffee?",
          "op": [
            "Five twenty",
            "Fifteen twenty",
            "Five fifty"
          ],
          "a": 0,
          "por": "Five twenty."
        }
      ]
    },
    "out": {
      "sub": "Three sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "My name is Leo. L, E, O.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "A medium flat white, please.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "How much is it?",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Name, spelling, price. Four quick ones.",
      "regra": "<b>My name is ...</b> · <b>How do you spell it?</b> · <b>How much is it?</b> · <b>It's twelve fifty</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "How much is a small latte.",
          "aceita": [],
          "d": "Dica: <b>How much is</b> + o que você quer comprar."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make the question correct.",
          "mostra": "How much cost?",
          "r": "How much is it?",
          "aceita": [
            "How much does it cost?",
            "How much is that?"
          ],
          "d": "Dica: pergunte o preço com <b>How much is it?</b>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "My name Ana.",
          "r": "My name is Ana.",
          "aceita": [
            "I'm Ana.",
            "I am Ana.",
            "My name's Ana."
          ],
          "d": "Dica: em inglês precisamos do verbo: <b>My name is</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "It is twelve and fifty.",
          "r": "It is twelve fifty.",
          "aceita": [
            "It's twelve fifty.",
            "It is twelve dollars fifty."
          ],
          "d": "Dica: o preço não leva <b>and</b>: <b>twelve fifty</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Write a short message to a friend from a café: your coffee, the size and the price.",
      "ph": "I'm at a café. I have …",
      "ex": "I'm at a café. I have a medium flat white. It is five twenty."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is your name? Spell it.",
          "ph": "My name is … , …",
          "ex": "My name is Ana. A, N, A."
        },
        {
          "q": "What coffee do you like? Hot or cold?",
          "ph": "I like … I like it …",
          "ex": "I like a latte. I like it hot."
        }
      ]
    }
  }
};
