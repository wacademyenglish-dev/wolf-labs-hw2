/* WHY US? · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: What drew me to / interested / impressed by (por que esta empresa). B1: nenhum português. Curso WOLF HIRED, histórias e empresas fictícias. */
window.HW2 = {
  "id": "hired-why-us",
  "titulo": "Why Us?",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f8c7113c86dd/hired-why-us/img/live-capa.webp",
  "alvo": "answering Why do you want to work here? with a specific fact and a reason: What drew me to ... is ..., I have always been interested in ..., I was impressed by ..., This role is a great fit for me because ...; interested (not interesting), since + starting point, impressed by",
  "abrir": "Name a company you like. What do you know about it?",
  "fecho": "A weak answer fits any company (<i>You are a big company</i>). A strong one has <b>one fact about them</b> and <b>one fact about you</b>: <b>What drew me to … is …</b> · <b>I have always been interested in …</b> · <b>I was impressed by …</b> · <b>This role is a great fit for me because …</b> · <b>I really want to be part of that.</b>",
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
  "rate": "-12%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo practice with a fictional company. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/f8c7113c86dd/hired-why-us/img/live-capa.webp",
      "leg": "The lobby of a company",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, last practice. Why do you want to work at Brightpath?"
        },
        {
          "quem": "leo",
          "t": "Well, I need a job, and you are a big company."
        },
        {
          "quem": "mia",
          "t": "Hmm. That could be about anyone. What do you know about them?"
        },
        {
          "quem": "leo",
          "t": "Okay. Brightpath teaches children to read with short games, and it started with only ten people."
        },
        {
          "quem": "mia",
          "t": "Better. Now, why does it matter to you?"
        },
        {
          "quem": "leo",
          "t": "I have always been interested in education. My nephew learned his letters with your app last year."
        },
        {
          "quem": "mia",
          "t": "Nice. What drew you to the company?"
        },
        {
          "quem": "leo",
          "t": "What drew me to Brightpath is the free version for schools. I was impressed by that."
        },
        {
          "quem": "mia",
          "t": "And the role?"
        },
        {
          "quem": "leo",
          "t": "This role is a great fit for me because I have three years of experience in customer support."
        },
        {
          "quem": "mia",
          "t": "Now finish strong."
        },
        {
          "quem": "leo",
          "t": "I really want to be part of that."
        }
      ],
      "perguntas": [
        {
          "q": "Why is You are a big company a weak answer?",
          "op": [
            "It could be about any company",
            "It is too long",
            "It is rude"
          ],
          "a": 0,
          "por": "Hmm. That could be about anyone."
        },
        {
          "q": "How does Leo connect Brightpath to his own life?",
          "op": [
            "His nephew learned letters with the app",
            "He worked there last year",
            "He studied education"
          ],
          "a": 0,
          "por": "My nephew learned his letters with your app last year."
        },
        {
          "q": "What impressed Leo?",
          "op": [
            "The free version for schools",
            "The office",
            "The salary"
          ],
          "a": 0,
          "por": "What drew me to Brightpath is the free version for schools. I was impressed by that."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for a strong answer. Hear it, then say it.",
      "frases": [
        {
          "t": "What drew me to your company is the free version for schools.",
          "img": "https://wolf-labs.pages.dev/p/f8c7113c86dd/hired-why-us/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I have always been interested in education.",
          "img": "https://wolf-labs.pages.dev/p/f8c7113c86dd/hired-why-us/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I really want to be part of that.",
          "img": "https://wolf-labs.pages.dev/p/f8c7113c86dd/hired-why-us/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Specific, not generic. Four quick ones.",
      "regra": "<b>interested</b> (how you feel) · <b>impressed by</b> · <b>since</b> + a starting point · one fact about them, one about you.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "This role is a great fit for me because I enjoy helping customers.",
          "aceita": [],
          "d": "Hint: <b>a great fit for me because</b> + your reason."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm interesting in education.",
          "r": "I'm interested in education.",
          "aceita": [
            "I am interested in education."
          ],
          "d": "Hint: how you feel: <b>interested</b>. <i>Interesting</i> describes the thing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I was impressed for your growth.",
          "r": "I was impressed by your growth.",
          "aceita": [
            "I was impressed with your growth."
          ],
          "d": "Hint: <b>impressed by</b> (or <b>with</b>), not <i>for</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I am interested in your app since 2020.",
          "r": "I have been interested in your app since 2020.",
          "aceita": [
            "I've been interested in your app since 2020."
          ],
          "d": "Hint: it started in 2020 and it continues: <b>have been</b> + <b>since</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f8c7113c86dd/hired-why-us/img/live-capa.webp",
      "leg": "The lobby of a company at night",
      "pede": "Look at the picture: the lobby of a company. Imagine your interview is there. Write 2 or 3 sentences: one fact about the company and why it fits you. Use <b>What drew me to</b> or <b>I was impressed by</b>.",
      "ph": "What drew me to your company is …",
      "ex": "What drew me to your company is the way you train new staff. I have always been interested in teaching, so this role is a great fit for me."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is a company you like? What do you know about it?",
          "ph": "I like … because …",
          "ex": "I like a local bakery. It uses flour from small farms."
        },
        {
          "q": "What are you interested in? Since when?",
          "ph": "I have been interested in … since …",
          "ex": "I have been interested in photography since I was fifteen."
        }
      ]
    }
  }
};
