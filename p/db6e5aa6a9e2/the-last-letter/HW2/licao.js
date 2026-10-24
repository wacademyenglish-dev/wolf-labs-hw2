/* THE LAST LETTER · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: presente simples he/she/it -s, doesn't, Do/Does. Jogo (Death Stranding): falas originais, nenhuma fala copiada, sem violência; Mae, Bram, Tomo e Pip são da aula. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-last-letter",
  "titulo": "The Last Letter",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/db6e5aa6a9e2/the-last-letter/img/live-abrigo.webp",
  "alvo": "present simple with he / she / it: add -s (gets, works, cooks); after doesn't the verb stays plain; questions with Do you ...? / Does she ...?",
  "abrir": "What does a person in your family do every day?",
  "fecho": "<b>I · you · we · they</b>: walk. <b>He · she · it</b>: walk<b>s</b>. After <b>doesn't</b>, no -s: <i>She doesn't drive.</i> Questions: <b>Do</b> you cook? <b>Does</b> she cook?",
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
      "sub": "Mia and Leo at a shelter door in the rain. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/db6e5aa6a9e2/the-last-letter/img/live-cidade.webp",
      "leg": "A letter for the shelter",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, this letter is for Nia. She lives in the shelter by the river."
        },
        {
          "quem": "leo",
          "t": "Does she work there?"
        },
        {
          "quem": "mia",
          "t": "Yes, she does. She works in the kitchen. She gets up at five."
        },
        {
          "quem": "leo",
          "t": "At five? Does she eat breakfast first?"
        },
        {
          "quem": "mia",
          "t": "No, she doesn't. She cooks for everybody first."
        },
        {
          "quem": "leo",
          "t": "And her brother? Does he live there too?"
        },
        {
          "quem": "mia",
          "t": "No, he doesn't. He lives in the city, and he walks to the shelter every Sunday."
        },
        {
          "quem": "leo",
          "t": "Every Sunday? That is a long way."
        },
        {
          "quem": "mia",
          "t": "It is. He carries a letter for his sister every time."
        },
        {
          "quem": "leo",
          "t": "I like him. Let's walk with him next Sunday."
        }
      ],
      "perguntas": [
        {
          "q": "What does Nia do first in the morning?",
          "op": [
            "She cooks for everybody",
            "She eats breakfast",
            "She reads letters"
          ],
          "a": 0,
          "por": "She doesn't eat breakfast first. She cooks for everybody first."
        },
        {
          "q": "Where does Nia's brother live?",
          "op": [
            "In the city",
            "In the shelter",
            "By the river"
          ],
          "a": 0,
          "por": "He lives in the city."
        },
        {
          "q": "What does he carry every Sunday?",
          "op": [
            "A letter for his sister",
            "A box of food",
            "An umbrella"
          ],
          "a": 0,
          "por": "He carries a letter for his sister every time."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the people in the shelter. Hear it, then say it.",
      "frases": [
        {
          "t": "Mae gets up at five and she reads old letters.",
          "img": "https://wolf-labs.pages.dev/p/db6e5aa6a9e2/the-last-letter/img/live-abrigo.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Bram works at night and he sleeps in the day.",
          "img": "https://wolf-labs.pages.dev/p/db6e5aa6a9e2/the-last-letter/img/live-cidade.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Does Tomo cook for everybody? Yes, he does.",
          "img": "https://wolf-labs.pages.dev/p/db6e5aa6a9e2/the-last-letter/img/live-terminal.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "He, she, it: -s. Four quick ones.",
      "regra": "<b>he · she · it</b> + verb<b>s</b> · <b>doesn't</b> + plain verb · <b>Do</b> you ...? · <b>Does</b> she ...?",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Does she get up at five?",
          "aceita": [],
          "d": "Dica: pergunta com she: <b>does</b> + o verbo sem -s."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Mae get up at five.",
          "r": "Mae gets up at five.",
          "aceita": [],
          "d": "Dica: Mae = she, então o verbo leva -s: <b>gets</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Pip doesn't draws birds in the rain.",
          "r": "Pip doesn't draw birds in the rain.",
          "aceita": [
            "Pip does not draw birds in the rain."
          ],
          "d": "Dica: depois de <b>doesn't</b>, o verbo fica limpo: <b>draw</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make it a question.",
          "mostra": "You cook for everybody?",
          "r": "Do you cook for everybody?",
          "aceita": [
            "Do you cook for everyone?"
          ],
          "d": "Dica: a pergunta começa com <b>Do</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/db6e5aa6a9e2/the-last-letter/img/live-abrigo.webp",
      "leg": "A small shelter in the rain",
      "pede": "Look at the picture: a small shelter in the rain. Write 2 or 3 sentences about one person who lives there. Use <b>he</b> or <b>she</b> and verbs with <b>-s</b>.",
      "ph": "She lives alone and she …",
      "ex": "Mae lives in a small shelter. She gets up at five and she reads old letters."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What time do you get up? What do you do after that?",
          "ph": "I get up at … and I …",
          "ex": "I get up at seven and I drink coffee."
        },
        {
          "q": "What does one person in your family do every day?",
          "ph": "My … works / cooks / walks …",
          "ex": "My mother works at a school. She walks to work."
        }
      ]
    }
  }
};
