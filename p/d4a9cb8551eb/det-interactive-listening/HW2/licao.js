/* INTERACTIVE LISTENING · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Interactive Listening: best next answer, notes, summary. B1: nenhum português. Só as imagens live-* da própria aula (todas escuras). */
window.HW2 = {
  "id": "det-interactive-listening",
  "titulo": "Interactive Listening",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/d4a9cb8551eb/det-interactive-listening/img/live-conversa.webp",
  "alvo": "Interactive Listening: choose the answer a real person would say next (answer + reason, polite no, follow-up question), complete notes from a voice message, summarize a conversation (who, problem, solution)",
  "abrir": "What do you say when someone changes your plans?",
  "fecho": "The best answer <b>answers the question and keeps the conversation going</b>: a reason, a polite no, a follow-up question. In notes, write the key facts: <b>day, time, place, what to bring</b>. A summary has three parts: <b>who, the problem, the solution</b>.",
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
      "sub": "Mia and Leo talk about a phone call. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/d4a9cb8551eb/det-interactive-listening/img/live-conversa.webp",
      "leg": "The campus at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "How was your call with the gym, Leo?"
        },
        {
          "quem": "leo",
          "t": "Good. The receptionist asked if I wanted to change my class. I said, Yes, Thursday works better for me."
        },
        {
          "quem": "mia",
          "t": "Nice. That answers the question and gives a reason."
        },
        {
          "quem": "leo",
          "t": "Then she said the Thursday class was full. I almost said just, Oh."
        },
        {
          "quem": "mia",
          "t": "That is a weak answer. What did you say instead?"
        },
        {
          "quem": "leo",
          "t": "I said, No problem. Is there a place on the waiting list?"
        },
        {
          "quem": "mia",
          "t": "Perfect. It is polite and it keeps the conversation going."
        },
        {
          "quem": "leo",
          "t": "She said yes, and she asked me to leave my number. Later she left me a voice message with the details."
        },
        {
          "quem": "mia",
          "t": "What were the details?"
        },
        {
          "quem": "leo",
          "t": "Thursday, seven o'clock, room three. Bring a towel and a bottle of water."
        },
        {
          "quem": "mia",
          "t": "Good notes. You will need those for Listen and Complete."
        }
      ],
      "perguntas": [
        {
          "q": "Why was Leo's first answer good?",
          "op": [
            "It answered and gave a reason",
            "It was very short",
            "It asked a question"
          ],
          "a": 0,
          "por": "That answers the question and gives a reason."
        },
        {
          "q": "What did Leo say when the class was full?",
          "op": [
            "Is there a place on the waiting list?",
            "Oh.",
            "I will not come."
          ],
          "a": 0,
          "por": "No problem. Is there a place on the waiting list?"
        },
        {
          "q": "What must Leo bring on Thursday?",
          "op": [
            "A towel and a bottle of water",
            "His phone and a book",
            "A friend"
          ],
          "a": 0,
          "por": "Bring a towel and a bottle of water."
        }
      ]
    },
    "out": {
      "sub": "Three answers a real person would say. Hear it, then say it.",
      "frases": [
        {
          "t": "Thursday works better for me, if that is possible.",
          "img": "https://wolf-labs.pages.dev/p/d4a9cb8551eb/det-interactive-listening/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "No problem. Is there a place on the waiting list?",
          "img": "https://wolf-labs.pages.dev/p/d4a9cb8551eb/det-interactive-listening/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Perfect. Thank you, and see you on Thursday.",
          "img": "https://wolf-labs.pages.dev/p/d4a9cb8551eb/det-interactive-listening/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Polite answers and reported questions. Four quick ones.",
      "regra": "<b>I agree</b> (no <i>am</i>) · past simple with a finished time · a reported question keeps normal order: <b>asked me where I live</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Could you send me the details by Friday?",
          "aceita": [],
          "d": "Hint: a polite request starts with <b>Could you</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I am agree with the new time.",
          "r": "I agree with the new time.",
          "aceita": [],
          "d": "Hint: <b>agree</b> is a verb. No <i>am</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Yesterday I have called the gym.",
          "r": "Yesterday I called the gym.",
          "aceita": [],
          "d": "Hint: <b>yesterday</b> asks for the past simple."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "She asked me where do I live.",
          "r": "She asked me where I live.",
          "aceita": [],
          "d": "Hint: no question order in a report: <b>where I live</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/d4a9cb8551eb/det-interactive-listening/img/live-capa.webp",
      "leg": "A radio in a dark room",
      "pede": "Look at the picture: an old radio. Write 2 or 3 sentences that summarize a short conversation you had this week: who, the problem, the solution.",
      "ph": "I talked to … about …",
      "ex": "I talked to my neighbor about the noise. He said sorry, and he will stop the music at ten."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Someone asks: Can you come on Saturday? You cannot. What do you say?",
          "ph": "I'd love to, but … Is …?",
          "ex": "I'd love to, but I have to work. Is Sunday possible?"
        },
        {
          "q": "In one minute, tell me about a conversation you had yesterday: who, the problem, the solution.",
          "ph": "I talked to … about …",
          "ex": "I talked to my boss about my schedule, and she moved my meeting to Monday."
        }
      ]
    }
  }
};
