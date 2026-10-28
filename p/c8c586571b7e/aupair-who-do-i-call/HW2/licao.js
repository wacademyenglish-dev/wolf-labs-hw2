/* WHO DO I CALL · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: first conditional (if + presente, will), when + presente, to + verbo. B1: nenhum português. Só imagens live-* escuras. Problemas pequenos (agenda, chave); sem emergência e sem telefone. */
window.HW2 = {
  "id": "aupair-who-do-i-call",
  "titulo": "Who Do I Call",
  "nivel": "B1",
  "minutos": 10,
  "capa": "../img/live-conversa.webp",
  "alvo": "first conditional for small problems at work: If + present simple, will + verb (never if I will have); when + present for time (when I arrive); to + verb for purpose (never for ask); calling the family or the coordinator",
  "abrir": "A small problem comes up with your schedule. Who do you talk to first?",
  "fecho": "<b>If</b> + present, <b>will</b> + verb: <i>If I lose my key, I will tell the host mom.</i> Never <i>if I will</i>, never <i>when I will arrive</i>. Purpose: <b>to</b> + verb: <i>I called to ask about my schedule.</i> A small problem: the family first, then your coordinator.",
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
      "sub": "Mia has two small problems. A new scene, about one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "A quiet café table for two",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you look worried. What is going on?"
        },
        {
          "quem": "mia",
          "t": "Two small problems. My class moved to Tuesday evening, but I am supposed to look after the kids then."
        },
        {
          "quem": "leo",
          "t": "A schedule conflict. Who do you call?"
        },
        {
          "quem": "mia",
          "t": "First I talk to the family. If we can't find a solution, I will call my coordinator."
        },
        {
          "quem": "leo",
          "t": "Good. What is the second problem?"
        },
        {
          "quem": "mia",
          "t": "I lost my spare key to the house."
        },
        {
          "quem": "leo",
          "t": "Don't panic. If you tell the host mom, she will make a new one."
        },
        {
          "quem": "mia",
          "t": "Right. And if something feels wrong with the family, I won't wait. I will call my coordinator."
        },
        {
          "quem": "leo",
          "t": "Did you save her number?"
        },
        {
          "quem": "mia",
          "t": "Yes, on my first day. It is in my phone and on my safety card."
        },
        {
          "quem": "leo",
          "t": "Perfect. A calm call is a good call."
        }
      ],
      "perguntas": [
        {
          "q": "What is Mia's first problem?",
          "op": [
            "Her class moved to Tuesday evening",
            "She lost her phone",
            "She is late for work"
          ],
          "a": 0,
          "por": "My class moved to Tuesday evening."
        },
        {
          "q": "Who does Mia talk to first about it?",
          "op": [
            "The family",
            "Her coordinator",
            "Her friend Leo"
          ],
          "a": 0,
          "por": "First I talk to the family."
        },
        {
          "q": "What will happen if Mia tells the host mom about the key?",
          "op": [
            "She will make a new one",
            "She will be angry",
            "Nothing"
          ],
          "a": 0,
          "por": "If you tell the host mom, she will make a new one."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about who to call. Hear it, then say it.",
      "frases": [
        {
          "t": "If I have a schedule problem, I will call my coordinator.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I saved my coordinator's number on my first day.",
          "img": "../img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Could you help me with my schedule, please?",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "If + present, will + verb. Four quick ones.",
      "regra": "<b>if</b> + present simple, <b>will</b> + verb · <b>when I arrive</b> (no will) · <b>to</b> + verb for purpose.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If I lose my key, I will call the family.",
          "aceita": [],
          "d": "Hint: <b>if</b> + present, then <b>will</b> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If I will have a problem, I will call you.",
          "r": "If I have a problem, I will call you.",
          "aceita": [
            "If I have a problem, I'll call you."
          ],
          "d": "Hint: after <b>if</b>, use the present, never <i>will</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I will call her when I will arrive.",
          "r": "I will call her when I arrive.",
          "aceita": [
            "I'll call her when I arrive."
          ],
          "d": "Hint: after <b>when</b>, use the present for the future."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I called her for ask about my schedule.",
          "r": "I called her to ask about my schedule.",
          "aceita": [],
          "d": "Hint: purpose is <b>to</b> + verb, never <i>for</i> + verb."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-capa.webp",
      "leg": "A phone on a bedside table",
      "pede": "Look at the picture: a phone on a bedside table. Write 2 or 3 sentences about a small problem (a key, a class, your schedule) and who you will call. Use <b>if + present, will + verb</b>.",
      "ph": "If I …, I will …",
      "ex": "If I lose my key, I will tell the host mom. If my class changes, I will talk to the family first. If we can't find a solution, I will call my coordinator."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who do you talk to first when you have a small problem? Why?",
          "ph": "I talk to … first, because …",
          "ex": "I talk to the family first, because most problems are easy to fix together."
        },
        {
          "q": "What will you save in your phone on your first day?",
          "ph": "I will save …",
          "ex": "I will save my coordinator's number and my agency's number."
        }
      ]
    }
  }
};
