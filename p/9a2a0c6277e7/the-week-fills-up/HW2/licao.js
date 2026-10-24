/* THE WEEK FILLS UP · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present continuous para o já marcado + I'll / will. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-week-fills-up",
  "titulo": "The Week Fills Up",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/9a2a0c6277e7/the-week-fills-up/img/live-agenda.webp",
  "alvo": "present continuous for arrangements (I'm meeting ... on Thursday; What are you doing on Saturday?); I'll for a decision made now; will for a guess",
  "abrir": "What are you doing this weekend?",
  "fecho": "Already in the calendar: <b>I'm + -ing</b> and the day: <i>I'm meeting Ana on Thursday.</i> Ask: <i>What <b>are you doing</b> on Saturday?</i> Decided right now: <b>I'll</b>. A guess: <b>it will rain</b>.",
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
      "sub": "Mia and Leo plan the week. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/9a2a0c6277e7/the-week-fills-up/img/live-cafe.webp",
      "leg": "A table for Thursday",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, what are you doing on Thursday? Are you free at one?"
        },
        {
          "quem": "mia",
          "t": "Thursday? I'm having lunch with my sister at one. But I'm free at three."
        },
        {
          "quem": "leo",
          "t": "Three is perfect. I'm not working then."
        },
        {
          "quem": "mia",
          "t": "Great. Where are we meeting?"
        },
        {
          "quem": "leo",
          "t": "Let's go to the café by the park. I think it will be busy."
        },
        {
          "quem": "mia",
          "t": "Then I'll book a table."
        },
        {
          "quem": "leo",
          "t": "Thanks! And on Saturday? Are you doing anything?"
        },
        {
          "quem": "mia",
          "t": "I'm flying to Recife on Saturday morning, so I'm not free."
        },
        {
          "quem": "leo",
          "t": "OK. Take an umbrella to the airport. I think it will rain."
        },
        {
          "quem": "mia",
          "t": "Good idea. See you on Thursday!"
        }
      ],
      "perguntas": [
        {
          "q": "What is Mia doing on Thursday at one?",
          "op": [
            "She's having lunch with her sister",
            "She's working",
            "She's flying to Recife"
          ],
          "a": 0,
          "por": "I'm having lunch with my sister at one."
        },
        {
          "q": "What will Mia do about the café?",
          "op": [
            "She'll book a table",
            "She'll cancel Thursday",
            "She'll stay home"
          ],
          "a": 0,
          "por": "Then I'll book a table."
        },
        {
          "q": "What is Mia doing on Saturday morning?",
          "op": [
            "She's flying to Recife",
            "She's meeting Leo",
            "She's working"
          ],
          "a": 0,
          "por": "I'm flying to Recife on Saturday morning."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the week. Hear it, then say it.",
      "frases": [
        {
          "t": "I'm meeting my sister at the café on Thursday.",
          "img": "https://wolf-labs.pages.dev/p/9a2a0c6277e7/the-week-fills-up/img/live-cafe.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "What are you doing on Saturday?",
          "img": "https://wolf-labs.pages.dev/p/9a2a0c6277e7/the-week-fills-up/img/live-agenda.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'm leaving on Friday, so I'll take my coat.",
          "img": "https://wolf-labs.pages.dev/p/9a2a0c6277e7/the-week-fills-up/img/live-porta.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "I'm + -ing for plans, I'll for a decision now. Four quick ones.",
      "regra": "<b>I'm + -ing</b> + the day = already arranged · <b>What are you doing ...?</b> · <b>I'll</b> = decided now · <b>will</b> = a guess.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "What are you doing on Friday night?",
          "aceita": [],
          "d": "Dica: pergunta de plano: <b>are you doing</b> + o dia."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it is already in the calendar.",
          "mostra": "I meet my dentist on Tuesday.",
          "r": "I'm meeting my dentist on Tuesday.",
          "aceita": [
            "I am meeting my dentist on Tuesday."
          ],
          "d": "Dica: já está marcado: <b>I'm meeting</b>, não 'I meet'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: you decide right now.",
          "mostra": "The phone is ringing. I'm answering it.",
          "r": "The phone is ringing. I'll answer it.",
          "aceita": [
            "The phone is ringing. I will answer it."
          ],
          "d": "Dica: decidiu agora, na hora: <b>I'll</b> + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it is only a guess.",
          "mostra": "Look at the gray sky. It's raining tomorrow.",
          "r": "Look at the gray sky. It will rain tomorrow.",
          "aceita": [
            "Look at the gray sky. It'll rain tomorrow."
          ],
          "d": "Dica: palpite, não plano: <b>it will rain</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/9a2a0c6277e7/the-week-fills-up/img/live-agenda.webp",
      "leg": "A planner, a phone and a coffee",
      "pede": "Look at the picture: a planner, a phone and a coffee. Write 2 or 3 sentences about next week: what you <b>are doing</b> and one thing you <b>will</b> do.",
      "ph": "Next week I'm …",
      "ex": "Next week I'm meeting a friend on Wednesday and I'm working on Friday. I think it will be a busy week."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you doing this weekend?",
          "ph": "This weekend I'm …",
          "ex": "This weekend I'm visiting my parents on Saturday."
        },
        {
          "q": "A friend asks for help with a heavy bag. What do you say?",
          "ph": "I'll …",
          "ex": "I'll carry it for you. Give me the bag."
        }
      ]
    }
  }
};
