/* YOUR QUESTIONS FOR THEM · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: perguntas indiretas educadas (ordem de afirmação). B1: nenhum português. live-capa e live-conversa (escuras). */
window.HW2 = {
  "id": "hired-your-questions-for-them",
  "titulo": "Your Questions for Them",
  "nivel": "B1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "polite indirect questions at the end of an interview: Could you tell me what ...? / I was wondering how ... / Do you know when ...; after the opener the order is a statement (subject before verb), no do / does / is first",
  "abrir": "The interviewer says: do you have any questions for us? What do you usually say?",
  "fecho": "A polite question opens with <b>Could you tell me ...</b>, <b>I was wondering ...</b> or <b>Do you know ...</b>. After that, the order is a statement: <i>Could you tell me what the team <b>is</b> like?</i> not <i>what <b>is</b> the team like</i>. Ask two or three: the role, the team, success, the next steps.",
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
      "sub": "Mia and Leo talk about her interview. A new scene, about one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "A dark office at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, how was the interview? Did they ask if you had any questions?"
        },
        {
          "quem": "mia",
          "t": "Yes, at the end. And I didn't say no, like I did last time."
        },
        {
          "quem": "leo",
          "t": "Good. What did you ask?"
        },
        {
          "quem": "mia",
          "t": "I said, could you tell me what a typical day in this role looks like?"
        },
        {
          "quem": "leo",
          "t": "Nice. That is polite, and the word order is right."
        },
        {
          "quem": "mia",
          "t": "Then I said, I was wondering who I would work with most closely."
        },
        {
          "quem": "leo",
          "t": "And about the next step?"
        },
        {
          "quem": "mia",
          "t": "I asked, could you tell me what the next steps are, and when I might hear from you?"
        },
        {
          "quem": "leo",
          "t": "Perfect. Did they answer?"
        },
        {
          "quem": "mia",
          "t": "Yes. It is a team of six, and they decide by Friday. Then I said thank you for your time."
        },
        {
          "quem": "leo",
          "t": "You asked three smart questions. That is a great result."
        }
      ],
      "perguntas": [
        {
          "q": "What did Mia ask about first?",
          "op": [
            "What a typical day looks like",
            "How much the job pays",
            "Why the last person left"
          ],
          "a": 0,
          "por": "I said, could you tell me what a typical day in this role looks like?"
        },
        {
          "q": "What did Mia want to know about the people?",
          "op": [
            "Who she would work with",
            "Who the boss is married to",
            "Who sits near the door"
          ],
          "a": 0,
          "por": "I was wondering who I would work with most closely."
        },
        {
          "q": "When do they decide?",
          "op": [
            "By Friday",
            "Next month",
            "Tomorrow"
          ],
          "a": 0,
          "por": "It is a team of six, and they decide by Friday."
        }
      ]
    },
    "out": {
      "sub": "Three polite questions. Hear it, then say it.",
      "frases": [
        {
          "t": "Could you tell me what a typical day in this role looks like?",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I was wondering who I would work with most closely.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Could you tell me what the next steps are?",
          "img": "../img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Polite questions, normal order. Four quick ones.",
      "regra": "<b>Could you tell me</b> / <b>I was wondering</b> / <b>Do you know</b> + a statement: <b>subject</b> before <b>verb</b>, no <i>do / does</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Could you tell me what the team is like?",
          "aceita": [],
          "d": "Hint: after <b>Could you tell me what</b>, the subject comes first: <b>the team is</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Could you tell me what is the team like?",
          "r": "Could you tell me what the team is like?",
          "aceita": [],
          "d": "Hint: no question order after <b>Could you tell me</b>: <b>the team is</b>, not <i>is the team</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I was wondering how do you measure success.",
          "r": "I was wondering how you measure success.",
          "aceita": [],
          "d": "Hint: after <b>I was wondering how</b>, no <i>do</i>: just <b>you measure</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Do you know when will I hear from you?",
          "r": "Do you know when I will hear from you?",
          "aceita": [
            "Do you know when I'll hear from you."
          ],
          "d": "Hint: the subject <b>I</b> comes before <b>will</b>: <b>when I will hear</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-capa.webp",
      "leg": "A golden question mark in the dark",
      "pede": "Look at the picture: a question mark in the dark. It is the end of an interview, and it is your turn. Write 2 or 3 polite questions with <b>Could you tell me ...</b> or <b>I was wondering ...</b>.",
      "ph": "Could you tell me what ...?",
      "ex": "Could you tell me what the biggest challenge for the team is? I was wondering how you measure success in this role."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What would you like to know about a new team before you accept a job?",
          "ph": "Could you tell me ...",
          "ex": "Could you tell me how many people are in the team?"
        },
        {
          "q": "How can you ask about the next steps in a polite way?",
          "ph": "I was wondering when ...",
          "ex": "I was wondering when I might hear about the result."
        }
      ]
    }
  }
};
