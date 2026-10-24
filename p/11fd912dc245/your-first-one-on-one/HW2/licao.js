/* YOUR FIRST ONE-ON-ONE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: advérbios de frequência (always, usually, sometimes, never) + like / love / hate + -ing. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "your-first-one-on-one",
  "titulo": "Your First One-on-One",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/11fd912dc245/your-first-one-on-one/img/live-a.webp",
  "alvo": "talking about your work week: frequency adverbs before the verb (I usually work, I sometimes ask, I never work late), after be (I'm always on time), and like / love / hate + -ing (I like working with the team); never I work usually, never I like work, never Always I drink",
  "abrir": "How often do you talk to your boss or your teacher, one to one?",
  "fecho": "The adverb goes <b>before</b> the verb: <i>I <b>usually work</b> from home</i>. After <b>be</b>, it comes after: <i>I'm <b>always</b> on time</i>. With like, love and hate, add <b>-ing</b>: <i>I like <b>working</b> with the team</i>.",
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
      "sub": "Mia has her first one-on-one today. Leo gives her tips. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/11fd912dc245/your-first-one-on-one/img/live-a.webp",
      "leg": "A notebook, ready for the meeting",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you have your first one-on-one with Inês today, right?"
        },
        {
          "quem": "mia",
          "t": "Yes. I'm a little nervous. What do you usually say?"
        },
        {
          "quem": "leo",
          "t": "I always start with a rose. That's a small win."
        },
        {
          "quem": "mia",
          "t": "My first pull request was merged. That's my rose!"
        },
        {
          "quem": "leo",
          "t": "Nice. Then the thorn. That's a problem. I sometimes say the tests are slow."
        },
        {
          "quem": "mia",
          "t": "My thorn is the old code. I never know where to start."
        },
        {
          "quem": "leo",
          "t": "Say that. And she will ask what you like about the job."
        },
        {
          "quem": "mia",
          "t": "I like working with the team. And I love fixing bugs!"
        },
        {
          "quem": "leo",
          "t": "Great. Inês usually listens a lot. Don't worry."
        },
        {
          "quem": "mia",
          "t": "Thanks, Leo. I'm never late, so I'm going now."
        }
      ],
      "perguntas": [
        {
          "q": "What is a rose?",
          "op": [
            "A small win",
            "A problem",
            "A new idea"
          ],
          "a": 0,
          "por": "I always start with a rose. That's a small win."
        },
        {
          "q": "What is Mia's thorn?",
          "op": [
            "The old code",
            "The slow tests",
            "Too many meetings"
          ],
          "a": 0,
          "por": "My thorn is the old code. I never know where to start."
        },
        {
          "q": "What does Mia like about the job?",
          "op": [
            "Working with the team and fixing bugs",
            "Working from home",
            "Having long meetings"
          ],
          "a": 0,
          "por": "I like working with the team. And I love fixing bugs!"
        }
      ]
    },
    "out": {
      "sub": "Three sentences for the one-on-one. Hear it, then say it.",
      "frases": [
        {
          "t": "I usually work from home on Mondays.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/11fd912dc245/your-first-one-on-one/img/live-a.webp"
        },
        {
          "t": "I'm always on time for meetings.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/11fd912dc245/your-first-one-on-one/img/live-b.webp"
        },
        {
          "t": "I like working with the team.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/11fd912dc245/your-first-one-on-one/img/live-a.webp"
        }
      ]
    },
    "focus": {
      "sub": "Where does the adverb go? Four quick ones.",
      "regra": "<b>I usually work</b> (adverb before the verb) · <b>I'm always</b> on time (after be) · <b>like / love / hate</b> + <b>-ing</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I sometimes ask Leo for help.",
          "aceita": [],
          "d": "Dica: o advérbio vem <b>antes</b> do verbo: <b>sometimes ask</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the adverb is in the wrong place.",
          "mostra": "I work usually from home.",
          "r": "I usually work from home.",
          "aceita": [],
          "d": "Dica: <b>usually</b> vem antes de <b>work</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I like work with people.",
          "r": "I like working with people.",
          "aceita": [],
          "d": "Dica: depois de <b>like</b>, o verbo ganha <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the adverb is in the wrong place.",
          "mostra": "Always I drink coffee.",
          "r": "I always drink coffee.",
          "aceita": [],
          "d": "Dica: primeiro o <b>I</b>, depois <b>always</b>, depois o verbo."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/11fd912dc245/your-first-one-on-one/img/live-b.webp",
      "leg": "The meeting room at night",
      "pede": "Look at the picture: a quiet meeting room. Write 2 or 3 sentences about your work or study week. Use <b>always, usually, sometimes</b> or <b>never</b>, and one with <b>I like</b> + <b>-ing</b>.",
      "ph": "I usually …",
      "ex": "I usually start work at nine. I never work on Sundays. I like working with my team."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you usually do on Sundays?",
          "ph": "On Sundays I usually …",
          "ex": "On Sundays I usually cook lunch for my family."
        },
        {
          "q": "What do you like doing after work or class?",
          "ph": "I like …",
          "ex": "I like watching series and walking in the park."
        }
      ]
    }
  }
};
