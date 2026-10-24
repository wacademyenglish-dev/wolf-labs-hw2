/* STRENGTHS AND WEAKNESSES · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: I tend to / I have started / I am working on (pontos fortes e fracos). B1: nenhum português. Curso WOLF HIRED, histórias e empresas fictícias. */
window.HW2 = {
  "id": "hired-strengths-and-weaknesses",
  "titulo": "Strengths and Weaknesses",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/9b73b02c5bc2/hired-strengths-and-weaknesses/img/live-capa.webp",
  "alvo": "talking about yourself honestly: I tend to + plain verb, I used to ... now I ..., I have started + -ing, I am working on ... by + -ing, one strength with proof (I have never missed a deadline); no fake weakness, no cliche",
  "abrir": "What is one thing you do very well? How could you prove it?",
  "fecho": "A real weakness has three parts: <b>the weakness</b> (<i>I tend to forget small details</i>), <b>the action</b> (<i>I have started using a checklist</i>; <i>I am working on it by practicing</i>), <b>the result</b>. After <b>tend to</b> the plain verb; after <b>by</b> the <b>-ing</b> form. A strength needs proof: <i>I am very reliable. In four years, I have never missed a deadline.</i>",
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
      "sub": "Mia coaches Leo before his interview. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/9b73b02c5bc2/hired-strengths-and-weaknesses/img/live-conversa.webp",
      "leg": "An empty meeting room",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, your interview is tomorrow. What is your greatest weakness?"
        },
        {
          "quem": "leo",
          "t": "Easy. I'm a perfectionist. I just work too hard."
        },
        {
          "quem": "mia",
          "t": "No, no. Everyone says that. It sounds fake."
        },
        {
          "quem": "leo",
          "t": "Okay. Honestly, I tend to say yes to every request, so my week gets too full."
        },
        {
          "quem": "mia",
          "t": "That is better. What are you doing about it?"
        },
        {
          "quem": "leo",
          "t": "I have started using a priority list, and I am working on saying no politely."
        },
        {
          "quem": "mia",
          "t": "Good. Now the result. Has it worked?"
        },
        {
          "quem": "leo",
          "t": "Yes. Last month I finished every project on time."
        },
        {
          "quem": "mia",
          "t": "And a strength? Don't just say you are reliable."
        },
        {
          "quem": "leo",
          "t": "Right. I am very reliable. In four years, I have never missed a deadline."
        },
        {
          "quem": "mia",
          "t": "Perfect: a real weakness, an action, a result, and a strength with proof."
        }
      ],
      "perguntas": [
        {
          "q": "Why does Mia say the first answer is bad?",
          "op": [
            "Everyone says it, so it sounds fake",
            "It is too long",
            "It is not about work"
          ],
          "a": 0,
          "por": "No, no. Everyone says that. It sounds fake."
        },
        {
          "q": "What has Leo started doing about his weakness?",
          "op": [
            "Using a priority list",
            "Working fewer hours",
            "Taking a speaking course"
          ],
          "a": 0,
          "por": "I have started using a priority list."
        },
        {
          "q": "What proof does Leo give that he is reliable?",
          "op": [
            "He has never missed a deadline in four years",
            "He finished a project last week",
            "His boss told him"
          ],
          "a": 0,
          "por": "In four years, I have never missed a deadline."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for a strong answer. Hear it, then say it.",
      "frases": [
        {
          "t": "I tend to say yes to every request.",
          "img": "https://wolf-labs.pages.dev/p/9b73b02c5bc2/hired-strengths-and-weaknesses/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I have started using a priority list.",
          "img": "https://wolf-labs.pages.dev/p/9b73b02c5bc2/hired-strengths-and-weaknesses/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "In four years, I have never missed a deadline.",
          "img": "https://wolf-labs.pages.dev/p/9b73b02c5bc2/hired-strengths-and-weaknesses/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Weakness, action, proof. Four quick ones.",
      "regra": "<b>I tend to</b> + plain verb · <b>I have started</b> + <b>-ing</b> · <b>I am working on it by</b> + <b>-ing</b> · a strength needs proof.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "One of my strengths is staying calm with clients.",
          "aceita": [],
          "d": "Hint: <b>is</b> + <b>-ing</b>: <b>staying</b> calm."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I tend to forgetting small details.",
          "r": "I tend to forget small details.",
          "aceita": [],
          "d": "Hint: after <b>tend to</b>, the plain verb: <b>forget</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I am working on it by practice every day.",
          "r": "I am working on it by practicing every day.",
          "aceita": [
            "I'm working on it by practicing every day."
          ],
          "d": "Hint: after <b>by</b>, the <b>-ing</b> form: <b>practicing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I have started use a priority list.",
          "r": "I have started using a priority list.",
          "aceita": [
            "I have started to use a priority list."
          ],
          "d": "Hint: <b>started</b> + <b>-ing</b> (or <b>to</b> + verb)."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/9b73b02c5bc2/hired-strengths-and-weaknesses/img/live-capa.webp",
      "leg": "A small brass scale in balance",
      "pede": "Look at the picture: a small scale in balance. Write 2 or 3 sentences: one real weakness and what you are doing about it. Use <b>I tend to</b>, <b>I have started</b> or <b>I am working on</b>.",
      "ph": "I tend to … so I have started …",
      "ex": "I tend to forget small details, so I have started using a checklist. I am working on it by checking every email twice."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is one thing you do very well? Give proof.",
          "ph": "I am very … For example, …",
          "ex": "I am very organized. For example, I planned my sister's whole party."
        },
        {
          "q": "What are you working on right now? How?",
          "ph": "I am working on … by …",
          "ex": "I am working on my English by watching one video a day."
        }
      ]
    }
  }
};
