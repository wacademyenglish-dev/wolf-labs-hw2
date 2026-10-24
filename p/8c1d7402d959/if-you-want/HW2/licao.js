/* IF YOU WANT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: can / can't / couldn't. Versículos (World English Bible, ao pé da letra): Mark 1:40 (Out loud, Você) e Mark 1:41 (Listen). Nada da Bíblia é marcado como errado. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "if-you-want",
  "titulo": "If You Want",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/8c1d7402d959/if-you-want/img/live-porta.webp",
  "alvo": "can / can't for ability and possibility, can in questions (Can you help me?), and couldn't for before; plain verb after can, no -s, no to, no don't can",
  "abrir": "What can you do very well?",
  "fecho": "After <b>can</b>, the plain verb: <i>She can cook.</i> No: <b>can't</b>: <i>I can't swim.</i> A question starts with <b>can</b>: <i>Can you help me?</i> Before (the past): <b>couldn't</b>.",
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
      "sub": "Mia tells Leo a story she is reading. She quotes Mark 1:41. A new scene, about 30 seconds.",
      "img": "https://wolf-labs.pages.dev/p/8c1d7402d959/if-you-want/img/live-casa.webp",
      "leg": "A small room, a warm window",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I'm reading a story about a man on a road."
        },
        {
          "quem": "leo",
          "t": "What is the story?"
        },
        {
          "quem": "mia",
          "t": "He is sick. He can't live in the city, and people can't touch him."
        },
        {
          "quem": "leo",
          "t": "That's sad. Can he go home?"
        },
        {
          "quem": "mia",
          "t": "Before, he couldn't. But now he can. Jesus helps him. He says, “I want to. Be made clean.”"
        },
        {
          "quem": "leo",
          "t": "Can you tell me more?"
        },
        {
          "quem": "mia",
          "t": "Yes. Now he can walk home. He can eat with his family tonight."
        },
        {
          "quem": "leo",
          "t": "I'm happy for him. Can we read it together?"
        }
      ],
      "perguntas": [
        {
          "q": "Where can't the man live?",
          "op": [
            "In the city",
            "At home",
            "On the road"
          ],
          "a": 0,
          "por": "He can't live in the city."
        },
        {
          "q": "What can he do now?",
          "op": [
            "He can go home",
            "He can't walk",
            "He can't eat"
          ],
          "a": 0,
          "por": "Now he can walk home."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the story. The third is from the Bible: Mark 1:40 (World English Bible). Hear it, then say it.",
      "frases": [
        {
          "t": "He can't live in the city.",
          "img": "https://wolf-labs.pages.dev/p/8c1d7402d959/if-you-want/img/live-porta.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Now he can go home.",
          "img": "https://wolf-labs.pages.dev/p/8c1d7402d959/if-you-want/img/live-casa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If you want to, you can make me clean.",
          "img": "https://wolf-labs.pages.dev/p/8c1d7402d959/if-you-want/img/live-porta.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "can or can't? Four quick ones.",
      "regra": "<b>can</b> + plain verb · <b>can't</b> = no · <b>Can you ...?</b> = question · before: <b>couldn't</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Can you help me with the door?",
          "aceita": [],
          "d": "Dica: pergunta: <b>can</b> vem primeiro."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He can to go home.",
          "r": "He can go home.",
          "aceita": [
            "He can go home."
          ],
          "d": "Dica: depois de <b>can</b>, o verbo fica limpo, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She cans cook very well.",
          "r": "She can cook very well.",
          "aceita": [
            "She can cook very well."
          ],
          "d": "Dica: <b>can</b> não ganha -s: she can."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I don't can swim.",
          "r": "I can't swim.",
          "aceita": [
            "I cannot swim.",
            "I can not swim."
          ],
          "d": "Dica: o não é <b>can't</b>, nunca 'don't can'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/8c1d7402d959/if-you-want/img/live-casa.webp",
      "leg": "A small room with a window",
      "pede": "Look at the picture: a small warm room with a window. Write 2 or 3 sentences: what <b>can</b> you do in a room like this? What <b>can't</b> you do?",
      "ph": "In this room I can … but I can't …",
      "ex": "In this room I can read a book and drink tea. I can't play loud music because it is quiet."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "In Mark 1:40 a man says to Jesus, “If you want to, you can make me clean.” Think of a friend. What can you do to help a friend? What can't you do?",
          "ph": "I can … I can't …",
          "ex": "I can listen and I can cook for my friend. I can't give money."
        },
        {
          "q": "What can you do very well?",
          "ph": "I can …",
          "ex": "I can sing and I can swim very well."
        }
      ]
    }
  }
};
