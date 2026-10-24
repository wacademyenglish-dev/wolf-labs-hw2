/* THE HANDOVER · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present simple he/she + S, doesn't, Does. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-handover",
  "titulo": "The Handover",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/9784c96366ed/the-handover/img/live-bg-empty-desk.webp",
  "alvo": "present simple with he / she: verb + S (starts, checks, has, goes); doesn't + plain verb; Does she ...? Yes, she does. / No, she doesn't.; one S, in one place",
  "abrir": "What does your boss do first in the morning?",
  "fecho": "<b>He, she</b>: verb + <b>S</b>: <i>he starts, she checks, he has, she goes.</i> <b>Doesn't</b> + plain verb: <i>he doesn't work.</i> A question: <b>Does</b> she work? <i>Yes, she does. No, she doesn't.</i>",
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
      "sub": "Mia and Leo at the office. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/9784c96366ed/the-handover/img/live-bg-office.webp",
      "leg": "An open office",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you cover for Sam tomorrow. Here is his day."
        },
        {
          "quem": "leo",
          "t": "OK. What time does he start?"
        },
        {
          "quem": "mia",
          "t": "He starts at eight. He checks the emails and he calls the client at nine."
        },
        {
          "quem": "leo",
          "t": "Does he have lunch at his desk?"
        },
        {
          "quem": "mia",
          "t": "Yes, he does. He has a sandwich and a coffee."
        },
        {
          "quem": "leo",
          "t": "Does he work on Friday afternoon?"
        },
        {
          "quem": "mia",
          "t": "No, he doesn't. He goes to the gym at three."
        },
        {
          "quem": "leo",
          "t": "And the report? Who writes it?"
        },
        {
          "quem": "mia",
          "t": "Sam writes it and sends it on Thursday."
        },
        {
          "quem": "leo",
          "t": "Great. Thank you."
        }
      ],
      "perguntas": [
        {
          "q": "What time does Sam start?",
          "op": [
            "At eight",
            "At nine",
            "At three"
          ],
          "a": 0,
          "por": "He starts at eight."
        },
        {
          "q": "Does Sam work on Friday afternoon?",
          "op": [
            "No, he goes to the gym",
            "Yes, he writes the report",
            "Yes, he calls the client"
          ],
          "a": 0,
          "por": "No, he doesn't. He goes to the gym at three."
        },
        {
          "q": "When does Sam send the report?",
          "op": [
            "On Thursday",
            "On Friday",
            "On Monday"
          ],
          "a": 0,
          "por": "Sam writes it and sends it on Thursday."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a colleague. Hear it, then say it.",
      "frases": [
        {
          "t": "He starts at eight and checks the emails.",
          "img": "https://wolf-labs.pages.dev/p/9784c96366ed/the-handover/img/live-bg-office.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She doesn't answer the phone after six.",
          "img": "https://wolf-labs.pages.dev/p/9784c96366ed/the-handover/img/live-bg-corridor.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Does he have lunch at his desk?",
          "img": "https://wolf-labs.pages.dev/p/9784c96366ed/the-handover/img/live-bg-empty-desk.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "he / she + S, doesn't, Does. Four quick ones.",
      "regra": "<b>he / she</b> + verb<b>S</b> (starts, has, goes) · <b>doesn't</b> + plain verb · <b>Does</b> she ...? Yes, she <b>does</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Does she send the invoice on Thursday?",
          "aceita": [],
          "d": "Dica: pergunta: <b>Does</b> + she + verbo limpo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She check the emails first.",
          "r": "She checks the emails first.",
          "aceita": [
            "She checks the emails first."
          ],
          "d": "Dica: com she, o verbo leva <b>-s</b>: checks."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He doesn't works on Friday.",
          "r": "He doesn't work on Friday.",
          "aceita": [
            "He does not work on Friday."
          ],
          "d": "Dica: depois de <b>doesn't</b>, o verbo fica limpo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Does she works on Monday?",
          "r": "Does she work on Monday?",
          "aceita": [
            "Does she work on Monday?"
          ],
          "d": "Dica: depois de <b>Does</b>, o verbo fica limpo, sem -s."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/9784c96366ed/the-handover/img/live-note.webp",
      "leg": "A handwritten note on a desk",
      "pede": "Look at the picture: a handwritten note on a desk. Write 2 or 3 sentences about a real person at work or at school: what he or she <b>does</b> first, and one thing he or she <b>doesn't</b> do.",
      "ph": "My boss starts at …",
      "ex": "My boss starts at eight and checks the emails. She has lunch at her desk. She doesn't work on Saturday."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What does your boss or teacher do first in the morning?",
          "ph": "He / She … first.",
          "ex": "My boss checks the emails first."
        },
        {
          "q": "Does someone in your family work from home? What does he or she do?",
          "ph": "My … works from home. He / She …",
          "ex": "My brother works from home. He writes code all day."
        }
      ]
    }
  }
};
