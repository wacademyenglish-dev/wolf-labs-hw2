/* CHEER YOU UP · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: separable phrasal verbs. Falas originais, sem cena do filme. */
window.HW2 = {
  "id": "cheer-you-up",
  "titulo": "Cheer You Up",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/42ab3b3fb531/cheer-you-up/img/live-casa.webp",
  "alvo": "separable phrasal verbs: cheer her up, figure it out, turn it off, pick me up; a pronoun goes in the middle, never cheer up her, figure out it",
  "abrir": "What cheers you up when you are tired?",
  "fecho": "A pronoun goes <b>in the middle</b>: <b>cheer her up</b>, <b>figure it out</b>, <b>turn it off</b>, <b>pick me up</b>. Never <i>cheer up her</i> or <i>figure out it</i>. Don't lose the little word: <i>figure it</i> is not enough.",
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
  "rate": "-10%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo talk about a woman alone in her house. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/42ab3b3fb531/cheer-you-up/img/live-casa.webp",
      "leg": "A little house at night, one light on",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at the house with one light. Who lives there?"
        },
        {
          "quem": "mia",
          "t": "Carol. She is the only person who is not happy today."
        },
        {
          "quem": "leo",
          "t": "Do people try to help her?"
        },
        {
          "quem": "mia",
          "t": "Yes! They want to cheer her up. They send her flowers and messages."
        },
        {
          "quem": "leo",
          "t": "Does it work?"
        },
        {
          "quem": "mia",
          "t": "No. She doesn't want a happy face. She wants to turn her phone off."
        },
        {
          "quem": "leo",
          "t": "What does she do then?"
        },
        {
          "quem": "mia",
          "t": "She writes questions on paper. She wants to figure it out, step by step."
        },
        {
          "quem": "leo",
          "t": "I think she needs a quiet night. Then she can figure it out."
        }
      ],
      "perguntas": [
        {
          "q": "What do the people want to do?",
          "op": [
            "Cheer her up",
            "Pick her up at night",
            "Turn the house off"
          ],
          "a": 0,
          "por": "They want to cheer her up. They send her flowers and messages."
        },
        {
          "q": "What does Carol want to turn off?",
          "op": [
            "Her phone",
            "The light",
            "The music"
          ],
          "a": 0,
          "por": "She wants to turn her phone off."
        },
        {
          "q": "What does Carol write on paper?",
          "op": [
            "Questions",
            "Songs",
            "A list of friends"
          ],
          "a": 0,
          "por": "She writes questions. She wants to figure it out, step by step."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the lesson. Hear it, then say it.",
      "frases": [
        {
          "t": "Music always cheers me up.",
          "img": "https://wolf-labs.pages.dev/p/42ab3b3fb531/cheer-you-up/img/live-casa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I can't figure it out.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Please turn it off.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Cheer her up, figure it out. Four quick ones.",
      "regra": "pronoun in the <b>middle</b>: cheer <b>her</b> up · figure <b>it</b> out · turn <b>it</b> off · pick <b>me</b> up.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Music always cheers me up.",
          "aceita": [],
          "d": "Dica: o pronome <b>me</b> fica no meio: cheers <b>me</b> up."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the pronoun is in the wrong place.",
          "mostra": "Can you pick up me at six?",
          "r": "Can you pick me up at six?",
          "aceita": [],
          "d": "Dica: pronome no meio: <b>pick me up</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the pronoun is in the wrong place.",
          "mostra": "I can't figure out it.",
          "r": "I can't figure it out.",
          "aceita": [
            "I cannot figure it out."
          ],
          "d": "Dica: <b>figure it out</b>, o <b>it</b> fica no meio."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "We want to cheer her.",
          "r": "We want to cheer her up.",
          "aceita": [],
          "d": "Dica: não perca a palavrinha final: <b>cheer her up</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/42ab3b3fb531/cheer-you-up/img/live-casa.webp",
      "leg": "A little house, one light on",
      "pede": "Look at the picture: a house at night. Write 2 or 3 sentences about a bad day. Who cheers you up? Use <b>cheer me up</b>, <b>figure it out</b> or <b>turn it off</b>.",
      "ph": "On a bad day, … cheers me up. I turn …",
      "ex": "On a bad day, my sister cheers me up. I turn the TV off and we talk. We figure it out together."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What cheers you up on a bad day?",
          "ph": "… cheers me up.",
          "ex": "Music cheers me up, especially loud songs."
        },
        {
          "q": "What do you turn off when you want to relax?",
          "ph": "I turn … off.",
          "ex": "I turn my phone off at night."
        }
      ]
    }
  }
};
