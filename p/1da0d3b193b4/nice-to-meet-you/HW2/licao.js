/* NICE TO MEET YOU · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: hello/hi/hey, I'm / My name's, his / her, How do you spell it?. A1: dicas em português só nas notas (d). Só as imagens live-* (já escuras). Alvo de artigo/possessivo: HW2_ARTIGO_CONTA ligado. */
window.HW2_ARTIGO_CONTA = true;
window.HW2 = {
  "id": "nice-to-meet-you",
  "titulo": "Nice to Meet You",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/1da0d3b193b4/nice-to-meet-you/img/live-porta.webp",
  "alvo": "hello / hi / hey + I'm / My name's (never 'my name's is') · What's your name? · How do you spell it? · Nice to meet you · his (a man) / her (a woman)",
  "abrir": "What's your name? How do you spell it?",
  "fecho": "<b>Hello · Hi · Hey</b>, then your name: <b>I'm Mia</b> or <b>My name's Mia</b>, never <i>my name's is</i>. Ask: <b>What's your name? How do you spell it?</b> The first time: <b>Nice to meet you</b>. A man: <b>his</b> name. A woman: <b>her</b> name.",
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
      "sub": "Mia and Leo at the welcome desk. A new scene, about 30 seconds.",
      "img": "https://wolf-labs.pages.dev/p/1da0d3b193b4/nice-to-meet-you/img/live-porta.webp",
      "leg": "The door of the welcome desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Hello! My name's Leo. What's your name?"
        },
        {
          "quem": "mia",
          "t": "Hi, Leo. I'm Mia. Nice to meet you."
        },
        {
          "quem": "leo",
          "t": "Nice to meet you, too. How do you spell your name?"
        },
        {
          "quem": "mia",
          "t": "It's M-I-A. And how do you spell Leo?"
        },
        {
          "quem": "leo",
          "t": "L-E-O. Who is that woman at the door?"
        },
        {
          "quem": "mia",
          "t": "Her name's Priya. P-R-I-Y-A."
        },
        {
          "quem": "leo",
          "t": "And what's his name? The man with the badge."
        },
        {
          "quem": "mia",
          "t": "His name's Kofi. K-O-F-I."
        },
        {
          "quem": "leo",
          "t": "Hey, Kofi! I'm Leo. Nice to meet you."
        },
        {
          "quem": "mia",
          "t": "Welcome to the party, everybody!"
        }
      ],
      "perguntas": [
        {
          "q": "How does Leo spell his name?",
          "op": [
            "L-E-O",
            "M-I-A",
            "K-O-F-I"
          ],
          "a": 0,
          "por": "L-E-O."
        },
        {
          "q": "What is the man's name?",
          "op": [
            "Kofi",
            "Leo",
            "Priya"
          ],
          "a": 0,
          "por": "His name's Kofi."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for the door. Hear it, then say it.",
      "frases": [
        {
          "t": "Hello! My name's Leo. What's your name?",
          "img": "https://wolf-labs.pages.dev/p/1da0d3b193b4/nice-to-meet-you/img/live-porta.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Her name's Priya, and his name's Kofi.",
          "img": "https://wolf-labs.pages.dev/p/1da0d3b193b4/nice-to-meet-you/img/live-porta.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Nice to meet you, too.",
          "img": "https://wolf-labs.pages.dev/p/1da0d3b193b4/nice-to-meet-you/img/live-porta.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "My name's, his or her, how do you spell it? Four quick ones.",
      "regra": "<b>My name's</b> Ana (no extra is) · <b>his</b> name = a man · <b>her</b> name = a woman · <b>How do you spell it?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "How do you spell her name?",
          "aceita": [],
          "d": "Dica: <b>her</b> para mulher. Pergunta: <b>How do you</b> + spell."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Hello! My name's is Priya.",
          "r": "Hello! My name's Priya.",
          "aceita": [
            "Hello! My name is Priya."
          ],
          "d": "Dica: <b>name's</b> já tem o <b>is</b> dentro. Nunca 'name's is'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: his or her?",
          "mostra": "Priya is a woman. His name's Priya.",
          "r": "Priya is a woman. Her name's Priya.",
          "aceita": [
            "Priya is a woman. Her name is Priya."
          ],
          "d": "Dica: mulher = <b>her</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "How you spell it?",
          "r": "How do you spell it?",
          "aceita": [],
          "d": "Dica: pergunta pede <b>do</b>: How <b>do</b> you spell it?"
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/1da0d3b193b4/nice-to-meet-you/img/live-porta.webp",
      "leg": "A door and a table with badges",
      "pede": "Look at the picture: a door and a table with badges. Write 2 or 3 sentences: say hello, say your name, and ask a name. Use <b>Hello</b>, <b>My name's</b> or <b>What's your name?</b>",
      "ph": "Hello! My name's … What's your name?",
      "ex": "Hello! My name's Ana. What's your name? Nice to meet you."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What's your best friend's name? How do you spell it?",
          "ph": "My best friend's name's … It's spelled …",
          "ex": "My best friend's name's Bruna. B-R-U-N-A."
        },
        {
          "q": "Who is in your family? Say two names with his or her.",
          "ph": "His name's … Her name's …",
          "ex": "I have a brother and a sister. His name's Paulo. Her name's Lia."
        }
      ]
    }
  }
};
