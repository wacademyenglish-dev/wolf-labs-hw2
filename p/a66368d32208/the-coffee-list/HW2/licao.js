/* THE COFFEE LIST · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: advérbios de frequência (lugar). A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-coffee-list",
  "titulo": "The Coffee List",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/a66368d32208/the-coffee-list/img/live-counter.webp",
  "alvo": "adverbs of frequency (always, usually, often, sometimes, rarely, never): before the verb, after am / is / are, never at the start; never already means no (never I drink, I don't never are wrong); How often ...?",
  "abrir": "How often do you drink coffee?",
  "fecho": "<b>Always, usually, often, sometimes, rarely, never</b> go <b>before</b> the verb: <i>she always makes coffee.</i> After <b>am / is / are</b>: <i>he is never late.</i> <b>Never</b> already means no: <i>I never drink tea.</i> Ask: <b>How often</b> do you ...?",
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
      "sub": "Mia and Leo in the office kitchen. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/a66368d32208/the-coffee-list/img/live-counter.webp",
      "leg": "The office kitchen counter",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, who makes the coffee here?"
        },
        {
          "quem": "leo",
          "t": "Tom always makes it on Monday. I usually make it on Wednesday."
        },
        {
          "quem": "mia",
          "t": "Do you ever forget?"
        },
        {
          "quem": "leo",
          "t": "Sometimes. I am often late on Wednesday."
        },
        {
          "quem": "mia",
          "t": "I never make it. I always drink tea."
        },
        {
          "quem": "leo",
          "t": "Really? Are you ever tired?"
        },
        {
          "quem": "mia",
          "t": "Rarely. But I am always hungry at ten."
        },
        {
          "quem": "leo",
          "t": "How often do you eat at ten?"
        },
        {
          "quem": "mia",
          "t": "Every day. I never skip it."
        }
      ],
      "perguntas": [
        {
          "q": "Who always makes the coffee on Monday?",
          "op": [
            "Tom",
            "Leo",
            "Mia"
          ],
          "a": 0,
          "por": "Tom always makes it on Monday."
        },
        {
          "q": "How often is Leo late on Wednesday?",
          "op": [
            "Often",
            "Never",
            "Rarely"
          ],
          "a": 0,
          "por": "I am often late on Wednesday."
        },
        {
          "q": "What does Mia never make?",
          "op": [
            "Coffee",
            "Tea",
            "Lunch"
          ],
          "a": 0,
          "por": "I never make it. I always drink tea."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about habits. Hear it, then say it.",
      "frases": [
        {
          "t": "I usually make the coffee at nine.",
          "img": "https://wolf-labs.pages.dev/p/a66368d32208/the-coffee-list/img/live-counter.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "He is never late on Monday.",
          "img": "https://wolf-labs.pages.dev/p/a66368d32208/the-coffee-list/img/live-mugs.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We sometimes drink tea at three.",
          "img": "https://wolf-labs.pages.dev/p/a66368d32208/the-coffee-list/img/live-counter.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Where does the small word go? Four quick ones.",
      "regra": "<b>always, usually, often, sometimes, rarely, never</b> + verb · after <b>am / is / are</b> · <b>never</b> = already no.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She is always late on Friday.",
          "aceita": [],
          "d": "Dica: depois de <b>is</b>: is + always."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the small word is in the wrong place.",
          "mostra": "She makes always the coffee.",
          "r": "She always makes the coffee.",
          "aceita": [
            "She always makes coffee."
          ],
          "d": "Dica: a palavrinha vem <b>antes</b> do verbo comum."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the small word is in the wrong place.",
          "mostra": "He never is late.",
          "r": "He is never late.",
          "aceita": [
            "He is never late."
          ],
          "d": "Dica: com <b>is</b>, a palavrinha vem depois: is never."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I don't never drink tea.",
          "r": "I never drink tea.",
          "aceita": [
            "I don't ever drink tea."
          ],
          "d": "Dica: <b>never</b> já é o não. Sem don't."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/a66368d32208/the-coffee-list/img/live-mugs.webp",
      "leg": "A rack of mugs in a dark kitchen",
      "pede": "Look at the picture: a rack of mugs in a dark kitchen. Write 2 or 3 sentences about your mornings. Use <b>always</b>, <b>usually</b>, <b>sometimes</b> or <b>never</b>.",
      "ph": "In the morning I always …",
      "ex": "In the morning I always drink coffee. I usually check my email at nine. I never eat breakfast."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you always do in the morning?",
          "ph": "I always …",
          "ex": "I always check my email first."
        },
        {
          "q": "How often do you drink coffee?",
          "ph": "I … drink coffee.",
          "ex": "I often drink three cups a day."
        }
      ]
    }
  }
};
