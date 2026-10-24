/* THE BADGE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: am / is / are + a / an + profissão. A1: dicas em português só nas notas (d). Alvo é artigo: HW2_ARTIGO_CONTA. */
window.HW2_ARTIGO_CONTA = true;
window.HW2 = {
  "id": "the-badge",
  "titulo": "The Badge",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/c40939731f27/the-badge/img/live-catraca.webp",
  "alvo": "am / is / are + a / an before the job (She is a designer. He is an intern.), no a with more than one person (They are accountants); short answers: Yes, I am. / No, she isn't.",
  "abrir": "What is your job? Or are you a student?",
  "fecho": "One person, one job: <b>is a</b> designer, <b>is an</b> intern (an before a, e, i, o, u). Two people: <b>are</b> accountants, no <i>a</i>. Short answers: <b>Yes, I am.</b> · <b>No, she isn't.</b> Never <i>she is designer</i>, never <i>Yes, I'm</i>.",
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
      "sub": "Mia and a new intern at the office. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/c40939731f27/the-badge/img/live-catraca.webp",
      "leg": "The lobby and the turnstiles",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Hi, I'm Mia. I'm a designer. Are you new here?"
        },
        {
          "quem": "leo",
          "t": "Yes, I am. I'm an intern. My name is Leo."
        },
        {
          "quem": "mia",
          "t": "Welcome, Leo! Is Marta your manager?"
        },
        {
          "quem": "leo",
          "t": "Yes, she is. And Bruno is in my team. He is a developer."
        },
        {
          "quem": "mia",
          "t": "Are Rita and Paulo in your team too?"
        },
        {
          "quem": "leo",
          "t": "No, they aren't. Rita is an accountant, and Paulo is an engineer."
        },
        {
          "quem": "mia",
          "t": "Good memory! And Sam is at the door. He is a security guard."
        },
        {
          "quem": "leo",
          "t": "Is this badge yours?"
        },
        {
          "quem": "mia",
          "t": "No, it isn't. It's Sam's badge."
        }
      ],
      "perguntas": [
        {
          "q": "What is Leo's job?",
          "op": [
            "He is an intern",
            "He is a designer",
            "He is a manager"
          ],
          "a": 0,
          "por": "I'm an intern. My name is Leo."
        },
        {
          "q": "Is Marta Leo's manager?",
          "op": [
            "Yes, she is",
            "No, she isn't",
            "Yes, he is"
          ],
          "a": 0,
          "por": "Yes, she is."
        },
        {
          "q": "What is Paulo's job?",
          "op": [
            "An engineer",
            "An accountant",
            "A developer"
          ],
          "a": 0,
          "por": "Rita is an accountant, and Paulo is an engineer."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about people at work. Hear it, then say it.",
      "frases": [
        {
          "t": "Marta is a manager.",
          "img": "https://wolf-labs.pages.dev/p/c40939731f27/the-badge/img/live-reception.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Diego is an intern.",
          "img": "https://wolf-labs.pages.dev/p/c40939731f27/the-badge/img/live-desk-first-day.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Rita and Ana are accountants.",
          "img": "https://wolf-labs.pages.dev/p/c40939731f27/the-badge/img/live-andar.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "a, an or no a? Four quick ones.",
      "regra": "<b>is a</b> + job · <b>is an</b> + a, e, i, o, u · <b>are</b> + plural, no <i>a</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "He is a developer in my team.",
          "aceita": [],
          "d": "Dica: <b>is a</b> + profissão."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "She is designer.",
          "r": "She is a designer.",
          "aceita": [],
          "d": "Dica: uma pessoa, uma profissão: <b>is a</b> designer."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He is a engineer.",
          "r": "He is an engineer.",
          "aceita": [],
          "d": "Dica: antes de a, e, i, o, u usa <b>an</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "They are an accountants.",
          "r": "They are accountants.",
          "aceita": [],
          "d": "Dica: duas pessoas: <b>are</b> e sem <b>a</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/c40939731f27/the-badge/img/live-welcome-note.webp",
      "leg": "A welcome note on a laptop",
      "pede": "Look at the picture: a welcome note on a laptop. Write 2 or 3 sentences about you and people you know: name and job. Use <b>am / is / are</b> and <b>a / an</b>.",
      "ph": "I am a … My friend is an …",
      "ex": "I am a teacher. My sister is an engineer. My friends are doctors."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is your job? Or are you a student?",
          "ph": "I am a / an …",
          "ex": "I am a nurse. I am very happy at my job."
        },
        {
          "q": "Is anyone in your family a teacher, a doctor or an engineer?",
          "ph": "My … is a / an …",
          "ex": "My uncle is an engineer. My cousins are teachers."
        }
      ]
    }
  }
};
