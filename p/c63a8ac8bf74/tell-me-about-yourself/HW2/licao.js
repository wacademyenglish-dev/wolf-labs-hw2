/* TELL ME ABOUT YOURSELF · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: perguntas indiretas educadas + perguntas de sujeito (Who leads...?). B1: nenhum portugues. Sem imagens (todas as live-* claras demais). Entrevista de emprego. */
window.HW2 = {
  "id": "tell-me-about-yourself",
  "titulo": "Tell Me About Yourself",
  "nivel": "B1",
  "minutos": 10,
  "capa": "",
  "alvo": "polite indirect questions (Could you tell me what the salary is? Do you know when I will hear back? I'd like to know if ...): normal word order after the polite start, no do/does; subject questions (Who leads the team? What happens next?) with no do/does",
  "abrir": "What is the one question you always forget to ask in a job interview?",
  "fecho": "<b>Could you tell me / Do you know / I'd like to know</b> + normal order: <i>Could you tell me what the salary <u>is</u>? Do you know when I <u>will hear</u> back?</i> For yes / no, use <b>if</b>: <i>I'd like to know if the job is hybrid.</i> When <b>who / what</b> is the subject, there is no <i>do / does</i>: <i>Who leads the team? What happens next?</i>",
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
      "sub": "Mia asks Leo some questions at the end of a job interview. A new scene, about one minute.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Thanks for coming in, Mia. Do you have any questions about the role?"
        },
        {
          "quem": "mia",
          "t": "Yes, a few. Could you tell me what a normal day looks like?"
        },
        {
          "quem": "leo",
          "t": "Sure. You start at nine, we have a short team meeting, and then you work on your own projects."
        },
        {
          "quem": "mia",
          "t": "Great. Do you know who leads the team?"
        },
        {
          "quem": "leo",
          "t": "Priya leads it. She has worked here for six years."
        },
        {
          "quem": "mia",
          "t": "And I'd like to know if the job is remote or hybrid."
        },
        {
          "quem": "leo",
          "t": "It's hybrid. You come to the office two days a week."
        },
        {
          "quem": "mia",
          "t": "Perfect. Could you tell me when I will hear back from you?"
        },
        {
          "quem": "leo",
          "t": "By next Friday. Now, do you know when you could start, if we make an offer?"
        },
        {
          "quem": "mia",
          "t": "I could start in two weeks. Thank you for your time, Leo."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia ask about first?",
          "op": [
            "What a normal day looks like",
            "How much the job pays",
            "Where the office is"
          ],
          "a": 0,
          "por": "Could you tell me what a normal day looks like?"
        },
        {
          "q": "Who leads the team?",
          "op": [
            "Priya",
            "Leo",
            "Mia"
          ],
          "a": 0,
          "por": "Priya leads it."
        },
        {
          "q": "How often does Mia go to the office?",
          "op": [
            "Two days a week",
            "Every day",
            "Never"
          ],
          "a": 0,
          "por": "You come to the office two days a week."
        }
      ]
    },
    "out": {
      "sub": "Three polite questions for an interview. Hear it, then say it.",
      "frases": [
        {
          "t": "Could you tell me what a normal day looks like?",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Do you know when I will hear back from you?",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Who leads the team, and what happens next?",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Polite questions and subject questions. Four quick ones.",
      "regra": "<b>Could you tell me / Do you know</b> + normal order (subject + verb) · <b>if</b> for yes / no · <b>Who / What</b> as the subject: no <i>do / does</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Could you tell me where the office is?",
          "aceita": [],
          "d": "Hint: after <b>Could you tell me</b>, use normal order: <i>where the office is</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Do you know when will I hear back?",
          "r": "Do you know when I will hear back?",
          "aceita": [
            "Do you know when I'll hear back?"
          ],
          "d": "Hint: after <b>Do you know</b>, the order is normal: <i>when I will hear back</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Can you tell me what is the salary?",
          "r": "Can you tell me what the salary is?",
          "aceita": [
            "Could you tell me what the salary is?"
          ],
          "d": "Hint: in a polite question, the verb goes last: <i>what the salary is</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Who does lead the team?",
          "r": "Who leads the team?",
          "aceita": [],
          "d": "Hint: <b>Who</b> is the subject, so there is no <i>does</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Imagine the end of your interview. The manager says: \"Do you have any questions?\" Write 2 or 3 polite questions. Use <b>Could you tell me …</b>, <b>Do you know …</b> or <b>I'd like to know if …</b>.",
      "ph": "Could you tell me …?",
      "ex": "Could you tell me what the next steps are? Do you know when I will hear back? I'd like to know if the job is hybrid."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Imagine you are in an interview. What do you want to know about the job?",
          "ph": "I'd like to know if … / Could you tell me …?",
          "ex": "I'd like to know if the team works from home. Could you tell me who my manager is?"
        },
        {
          "q": "Who makes the big decisions where you work or study?",
          "ph": "… makes the decisions.",
          "ex": "My boss, Paula, makes the big decisions, and the team gives ideas."
        }
      ]
    }
  }
};
