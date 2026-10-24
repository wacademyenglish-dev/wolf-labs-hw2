/* THE THANK-YOU EMAIL · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: e-mail de agradecimento: thank you for, excited about, look forward to hearing. B1: nenhum português. Sem imagem: as duas da aula são claras (lum>50). */
window.HW2 = {
  "id": "hired-the-thank-you-email",
  "titulo": "The Thank-You Email",
  "nivel": "B1",
  "minutos": 10,
  "alvo": "the thank-you email after an interview: gratitude, one specific moment, enthusiasm and next steps; Thank you for ...; I am writing to thank you; I look forward to hearing; excited about",
  "abrir": "Do you send a thank-you email after an interview? What do you write?",
  "fecho": "Send it within 24 hours, short and warm: <b>thank you for</b> your time, <b>one specific moment</b> (<i>I really enjoyed hearing about ...</i>), <b>enthusiasm</b> (<i>I am very excited about this opportunity</i>) and <b>next steps</b> (<i>I look forward to hearing about next steps</i>). Watch the small words: <b>thank you for</b>, <b>excited about</b>, <b>look forward to hearing</b>.",
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
      "sub": "Mia and Leo look at her email draft. A new scene, about one minute.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you want to send a thank-you email after your interview? Let me see."
        },
        {
          "quem": "mia",
          "t": "Here. The subject is, interview. And I wrote, thanks for the interview."
        },
        {
          "quem": "leo",
          "t": "Hmm. It is short, but it is not warm. Try this subject: great speaking with you today, Ms. Lima."
        },
        {
          "quem": "mia",
          "t": "That is better. And what about the first line?"
        },
        {
          "quem": "leo",
          "t": "Write, thank you for taking the time to meet with me today."
        },
        {
          "quem": "mia",
          "t": "Okay. Should I say something specific?"
        },
        {
          "quem": "leo",
          "t": "Yes. What did you enjoy in the conversation?"
        },
        {
          "quem": "mia",
          "t": "She talked about their plan to open a new office in Recife."
        },
        {
          "quem": "leo",
          "t": "Perfect. Write, I really enjoyed hearing about your plans for the new office."
        },
        {
          "quem": "mia",
          "t": "And at the end?"
        },
        {
          "quem": "leo",
          "t": "I am very excited about this opportunity, and I look forward to hearing about next steps. Then send it today."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo want in the first line?",
          "op": [
            "Thanks for her time",
            "A question about salary",
            "A joke"
          ],
          "a": 0,
          "por": "Write, thank you for taking the time to meet with me today."
        },
        {
          "q": "What specific thing does Mia mention?",
          "op": [
            "A plan for a new office",
            "A salary number",
            "The coffee"
          ],
          "a": 0,
          "por": "I really enjoyed hearing about your plans for the new office."
        },
        {
          "q": "When should Mia send the email?",
          "op": [
            "Today",
            "Next month",
            "After they call"
          ],
          "a": 0,
          "por": "Then send it today."
        }
      ]
    },
    "out": {
      "sub": "Three lines for the email. Hear it, then say it.",
      "frases": [
        {
          "t": "Thank you for taking the time to meet with me today.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I really enjoyed hearing about your plans for the new office.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I look forward to hearing about next steps.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Small words, big difference. Four quick ones.",
      "regra": "<b>Thank you for</b> · <b>I am writing to thank you</b> · <b>excited about</b> · <b>look forward to hearing</b> (not <i>to hear</i>).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I really enjoyed hearing about your new office.",
          "aceita": [],
          "d": "Hint: <b>enjoyed</b> + <b>hearing</b>: the verb after it ends in -ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Thank you by your time today.",
          "r": "Thank you for your time today.",
          "aceita": [],
          "d": "Hint: you thank someone <b>for</b> something."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I look forward to hear from you.",
          "r": "I look forward to hearing from you.",
          "aceita": [],
          "d": "Hint: after <b>look forward to</b>, use -ing: <b>hearing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I am very excited with this opportunity.",
          "r": "I am very excited about this opportunity.",
          "aceita": [
            "I'm very excited about this opportunity."
          ],
          "d": "Hint: you are <b>excited about</b> something."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Imagine this: you had an interview with <b>Ms. Lima</b>, a fictional manager at a travel company. She talked about new trips for families. Write 2 or 3 sentences for your thank-you email: <b>thank</b> her, name <b>one specific moment</b>, and show <b>enthusiasm</b>.",
      "ph": "Thank you for ...",
      "ex": "Thank you for taking the time to meet with me today. I really enjoyed hearing about your new trips for families. I look forward to hearing about next steps."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "When should you send a thank-you email, and what do you include?",
          "ph": "I should send it ... I include ...",
          "ex": "I should send it within a day. I include thanks and one specific topic."
        },
        {
          "q": "Think of an interview or a meeting. What specific moment could you mention?",
          "ph": "I could mention ...",
          "ex": "I could mention the new project the manager described."
        }
      ]
    }
  }
};
