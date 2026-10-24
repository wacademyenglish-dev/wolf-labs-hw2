/* THE REAL INTERVIEW · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: the full job interview: I've been + -ing / have + past participle with since and for. B1: nenhum português. */
window.HW2 = {
  "id": "hired-the-real-interview",
  "titulo": "The Real Interview",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/080a2ff493f7/hired-the-real-interview/img/live-capa.webp",
  "alvo": "the full job interview: I've been + -ing / have + past participle with since and for; the story (mistake, fix, lesson); I'd like to / I hope to have; Could you tell me ...?",
  "abrir": "Which interview question makes you most nervous?",
  "fecho": "<b>I've worked here since 2019</b> / <b>for four years</b>: not <i>I work here since</i>. Tell a story in three steps: the mistake, the fix, what you do now. Ask politely: <i>Could you tell me what a typical week looks like?</i>",
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
      "sub": "Mia and Leo after a mock interview. About one minute.",
      "img": "https://wolf-labs.pages.dev/p/080a2ff493f7/hired-the-real-interview/img/live-conversa.webp",
      "leg": "A door open to a lit room",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "How did the mock interview go, Leo?"
        },
        {
          "quem": "leo",
          "t": "Better than I expected. I've been practicing for three weeks, and it showed."
        },
        {
          "quem": "mia",
          "t": "What was the hardest question?"
        },
        {
          "quem": "leo",
          "t": "Where do you see yourself in five years? I said I'd like to be leading a small team."
        },
        {
          "quem": "mia",
          "t": "Good. Did you tell a story for the mistake question?"
        },
        {
          "quem": "leo",
          "t": "Yes. I sent a wrong price list, I called the client the same day, and now I always check numbers twice."
        },
        {
          "quem": "mia",
          "t": "That's the whole formula: the mistake, the fix, and what you do now."
        },
        {
          "quem": "leo",
          "t": "At the end, I asked two questions about the team, and they said they would get back to me by Friday."
        },
        {
          "quem": "mia",
          "t": "Then relax. Thank them again by email tonight."
        },
        {
          "quem": "leo",
          "t": "Good idea. I'll write it right after dinner."
        }
      ],
      "perguntas": [
        {
          "q": "How long has Leo been practicing?",
          "op": [
            "For three months",
            "For three weeks",
            "Since Friday"
          ],
          "a": 1,
          "por": "I've been practicing for three weeks."
        },
        {
          "q": "What does Leo do now, after his mistake?",
          "op": [
            "He avoids clients",
            "He asks for a new price list",
            "He checks numbers twice"
          ],
          "a": 2,
          "por": "Now I always check numbers twice."
        },
        {
          "q": "What does Mia suggest?",
          "op": [
            "Thank them again by email",
            "Call them tonight",
            "Wait and do nothing"
          ],
          "a": 0,
          "por": "Thank them again by email tonight."
        }
      ]
    },
    "out": {
      "sub": "Three sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "I've been working in customer service for four years.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I'm responsible for a team of five people.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Could you tell me what a typical week looks like?",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Four quick ones from the interview room.",
      "regra": "<b>since</b> + a point (since 2019) · <b>for</b> + a length (for four years) · <b>tell</b> me (not say me) · <b>look forward to</b> + -ing",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I'd like to ask two questions about the team.",
          "aceita": [],
          "d": "Hint: <b>I'd like to</b> + base verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I work here since 2019.",
          "r": "I've worked here since 2019.",
          "aceita": [
            "I have worked here since 2019.",
            "I've been working here since 2019.",
            "I have been working here since 2019."
          ],
          "d": "Hint: it started in 2019 and it continues, so <b>have worked</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Can you say me the salary range?",
          "r": "Can you tell me the salary range?",
          "aceita": [
            "Could you tell me the salary range?"
          ],
          "d": "Hint: <b>tell</b> somebody something. <i>Say</i> does not take me."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm looking forward to hear from you.",
          "r": "I'm looking forward to hearing from you.",
          "aceita": [
            "I am looking forward to hearing from you."
          ],
          "d": "Hint: <b>look forward to</b> + -ing."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/080a2ff493f7/hired-the-real-interview/img/live-capa.webp",
      "leg": "An empty chair in a spotlight",
      "pede": "Look at the picture: an empty chair, waiting for you. Write 2 or 3 sentences to answer <b>Why should we hire you?</b> Give one example. Use <b>I've ...</b>, <b>for</b> or <b>since</b>.",
      "ph": "From what I understand, this role needs …",
      "ex": "From what I understand, this role needs someone organized. I've managed a small team for three years: for example, I made a weekly plan that saved us two hours. That's why I'm confident I can help you."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Which interview question is the hardest for you? Why?",
          "ph": "The hardest question is … because …",
          "ex": "The hardest question is about my weakness, because I never know how honest to be."
        },
        {
          "q": "What would you like to ask a new employer?",
          "ph": "I'd like to ask …",
          "ex": "I'd like to ask how the team celebrates a good month."
        }
      ]
    }
  }
};
