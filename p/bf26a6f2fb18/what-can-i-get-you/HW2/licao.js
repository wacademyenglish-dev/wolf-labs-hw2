/* WHAT CAN I GET YOU? · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Can I have / I'd like, a/an/some. A1: português só nas dicas (d). Sem imagens: as do deli são claras demais (fotofobia). */
window.HW2 = {
  "id": "what-can-i-get-you",
  "titulo": "What Can I Get You?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "",
  "alvo": "ordering food: Can I have ...? / I'd like ... · a / an / some · How much is it? Never: Give me a coffee, a chips, a sandwich of turkey.",
  "abrir": "What is in your dream sandwich?",
  "fecho": "<b>Can I have a coffee, please?</b> <b>I'd like some chips.</b> Chips = <i>some chips</i>, not <i>a chips</i>. A turkey sandwich, not <i>a sandwich of turkey</i>.",
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
      "sub": "Mia orders lunch at a deli in New York. Leo is Tony. A new scene, about 40 seconds.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Hey boss, what can I get you?"
        },
        {
          "quem": "mia",
          "t": "Hi! Can I have a turkey sandwich, please?"
        },
        {
          "quem": "leo",
          "t": "Sure. On a roll or a bagel?"
        },
        {
          "quem": "mia",
          "t": "On a bagel, please."
        },
        {
          "quem": "leo",
          "t": "Anything to drink?"
        },
        {
          "quem": "mia",
          "t": "A small coffee, please. And some chips."
        },
        {
          "quem": "leo",
          "t": "Okay, boss. Eat here or to go?"
        },
        {
          "quem": "mia",
          "t": "To go, please."
        },
        {
          "quem": "leo",
          "t": "That's nine dollars."
        },
        {
          "quem": "mia",
          "t": "Here you go. Thank you!"
        },
        {
          "quem": "leo",
          "t": "Have a good one, boss!"
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia order to eat?",
          "op": [
            "A turkey sandwich",
            "A ham sandwich",
            "A cheese bagel"
          ],
          "a": 0,
          "por": "Can I have a turkey sandwich, please?"
        },
        {
          "q": "Does Mia eat there or take it away?",
          "op": [
            "To go",
            "For here",
            "She doesn't say"
          ],
          "a": 0,
          "por": "To go, please."
        },
        {
          "q": "How much is it?",
          "op": [
            "Nine dollars",
            "Five dollars",
            "Nineteen dollars"
          ],
          "a": 0,
          "por": "That's nine dollars."
        }
      ]
    },
    "out": {
      "sub": "Three sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "Can I have a small coffee, please?",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I'd like a turkey sandwich, please.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "And some chips, please.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Order like a New Yorker. Four quick ones.",
      "regra": "<b>Can I have ...?</b> · <b>I'd like ...</b> · <b>some chips</b> · <b>a turkey sandwich</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Can I have a coffee, please.",
          "aceita": [],
          "d": "Dica: <b>Can I have</b> + o que você quer."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: ask politely.",
          "mostra": "Give me a coffee.",
          "r": "Can I have a coffee, please?",
          "aceita": [
            "Can I have a coffee please?",
            "Can I have a coffee?",
            "I'd like a coffee, please.",
            "I would like a coffee, please."
          ],
          "d": "Dica: no balcão, use <b>Can I have</b> ou <b>I'd like</b>, não <b>Give me</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I'd like a sandwich of turkey.",
          "r": "I'd like a turkey sandwich.",
          "aceita": [
            "I would like a turkey sandwich."
          ],
          "d": "Dica: o tipo vem antes: <b>turkey sandwich</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'd like a chips.",
          "r": "I'd like some chips.",
          "aceita": [
            "I would like some chips.",
            "I'd like chips.",
            "I'd like a bag of chips."
          ],
          "d": "Dica: <b>chips</b> é plural: use <b>some chips</b>, não <b>a chips</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "You are at a deli in New York. Write 2 or 3 short sentences: what you want to eat and drink. Use <b>Can I have ...?</b> or <b>I'd like ...</b>.",
      "ph": "Can I have …",
      "ex": "Can I have a turkey sandwich, please? I'd like a small coffee. And some chips, please."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is in your dream sandwich?",
          "ph": "It has … and …",
          "ex": "Turkey, cheese and tomato on a bagel."
        },
        {
          "q": "What food don't you like?",
          "ph": "I don't like …",
          "ex": "I don't like onion."
        }
      ]
    }
  }
};
