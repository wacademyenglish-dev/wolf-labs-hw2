/* IT WASN’T THE TIME · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: cleft sentences. B2: nenhum português. */
window.HW2 = {
  "id": "it-wasnt-the-time",
  "titulo": "It Wasn’t the Time",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/2d8e1da9e8e2/it-wasnt-the-time/img/live-mesa.webp",
  "alvo": "cleft sentences to focus one part: It is / was X that / who ...; What ... is / was X; the thing that ...; It isn't X that ..., it's Y; never drop the IT, never use what instead of that",
  "abrir": "What takes you longer than it should? Is it really the time?",
  "fecho": "<b>It is / was</b> + the focus + <b>that / who</b>: <i>It was the notifications that broke our focus.</i> <b>What</b> + clause + <b>is / was</b>: <i>What slowed us down was the chat.</i> Contrast: <i>It wasn’t the deadline that failed us; it was the interruptions.</i>",
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
      "sub": "Mia and Leo review a project that went wrong. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/2d8e1da9e8e2/it-wasnt-the-time/img/live-plateia.webp",
      "leg": "A dark lecture hall",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the project failed, and everybody blames the deadline."
        },
        {
          "quem": "leo",
          "t": "It wasn't the deadline that failed us. It was the constant interruptions."
        },
        {
          "quem": "mia",
          "t": "What exactly slowed the team down?"
        },
        {
          "quem": "leo",
          "t": "What slowed us down was the chat window. It was the notifications that broke our focus, not the meetings."
        },
        {
          "quem": "mia",
          "t": "Who started that rule, anyway?"
        },
        {
          "quem": "leo",
          "t": "It was our manager who asked everyone to answer within five minutes."
        },
        {
          "quem": "mia",
          "t": "So it wasn't laziness. It was the rule."
        },
        {
          "quem": "leo",
          "t": "Exactly. What I'd change is the rule, not the people. The thing that helps me most is two quiet hours in the morning."
        },
        {
          "quem": "mia",
          "t": "It's in the morning that I focus best, too."
        },
        {
          "quem": "leo",
          "t": "Then that's where we should start."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo say failed the project?",
          "op": [
            "The constant interruptions",
            "The deadline",
            "The budget"
          ],
          "a": 0,
          "por": "It wasn't the deadline that failed us. It was the constant interruptions."
        },
        {
          "q": "Who asked everyone to answer within five minutes?",
          "op": [
            "The manager",
            "Leo",
            "Mia"
          ],
          "a": 0,
          "por": "It was our manager who asked everyone to answer within five minutes."
        },
        {
          "q": "What helps Leo most?",
          "op": [
            "Two quiet hours in the morning",
            "More meetings",
            "A longer deadline"
          ],
          "a": 0,
          "por": "The thing that helps me most is two quiet hours in the morning."
        }
      ]
    },
    "out": {
      "sub": "Three sentences that put the focus on one part. Hear it, then say it.",
      "frases": [
        {
          "t": "It wasn’t the deadline that failed us.",
          "img": "https://wolf-labs.pages.dev/p/2d8e1da9e8e2/it-wasnt-the-time/img/live-mesa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "What slowed the team down was the chat window.",
          "img": "https://wolf-labs.pages.dev/p/2d8e1da9e8e2/it-wasnt-the-time/img/live-plateia.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It’s in the morning that I focus best.",
          "img": "https://wolf-labs.pages.dev/p/2d8e1da9e8e2/it-wasnt-the-time/img/live-pista.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Where does the focus go? Four quick ones.",
      "regra": "<b>It is / was</b> + focus + <b>that / who</b> · <b>What</b> + clause + <b>is / was</b> · never drop the <b>it</b> · <b>that</b>, not <i>what</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It was our manager who set the five-minute rule.",
          "aceita": [],
          "d": "Hint: <b>It was</b> + the person + <b>who</b> + the action."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Was the chat window that slowed us down.",
          "r": "It was the chat window that slowed us down.",
          "aceita": [],
          "d": "Hint: a cleft sentence always starts with <b>It</b> + <i>is / was</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It was the notifications what broke my focus.",
          "r": "It was the notifications that broke my focus.",
          "aceita": [
            "It was the notifications which broke my focus."
          ],
          "d": "Hint: after the focus, use <b>that</b> (or <b>who</b> for a person), not <i>what</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "What slowed us down it was the chat window.",
          "r": "What slowed us down was the chat window.",
          "aceita": [],
          "d": "Hint: a <b>What</b> clause goes straight into <b>was</b>: no extra <i>it</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/2d8e1da9e8e2/it-wasnt-the-time/img/live-plateia.webp",
      "leg": "A dark lecture hall with a lit podium",
      "pede": "Look at the picture: an empty lecture hall with one light. Write 2 or 3 sentences about what really affects your focus. Put the focus on one part with <b>It is … that …</b> or <b>What … is …</b>.",
      "ph": "It isn’t … that … It’s …",
      "ex": "It isn’t the noise that bothers me; it’s the messages. What I need is one quiet hour. It’s in the evening that I work best."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What distracts you most when you work or study? Put the focus on it.",
          "ph": "It’s … that …",
          "ex": "It’s my phone that distracts me most."
        },
        {
          "q": "What would help you most to focus?",
          "ph": "What would help me is …",
          "ex": "What would help me is a quiet room and a clear plan."
        }
      ]
    }
  }
};
