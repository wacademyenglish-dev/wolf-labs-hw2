/* FILL IT IN · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Curso Au Pair (A2+). Alvo: formulários (surname, MM/DD/YYYY, status). A2: dicas em português só nas notas (d). Pessoa fictícia, nenhum dado real. */
window.HW2 = {
  "id": "aupair-fill-it-in",
  "titulo": "Fill It In",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/ec8ad5ee231a/aupair-fill-it-in/img/live-capa.webp",
  "alvo": "filling in forms in English: surname = last name, given name = first name; dates in the American order MM/DD/YYYY; marital status words (single, married); an emergency contact is another person; always a practice person, never real data",
  "abrir": "What forms do you have to fill in to be an au pair?",
  "fecho": "<b>Surname</b> = last name · <b>given name</b> = first name. In the USA the date is <b>MM/DD/YYYY</b>: March 7, 2003 = 03/07/2003. Marital status: <b>single</b>, married. An emergency contact is <b>another person</b>.",
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
      "sub": "Mia and Leo, a short scene of about 40 seconds.",
      "leg": "The agency office",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, this is a practice form. The person is Rui Lima."
        },
        {
          "quem": "mia",
          "t": "OK. The surname is Lima, and the given name is Rui?"
        },
        {
          "quem": "leo",
          "t": "Yes. Now the date of birth. He was born on March seventh, 2003."
        },
        {
          "quem": "mia",
          "t": "In the USA, the month comes first. So it is zero three, zero seven, two thousand three."
        },
        {
          "quem": "leo",
          "t": "Perfect. What about marital status?"
        },
        {
          "quem": "mia",
          "t": "He is not married, so I write single."
        },
        {
          "quem": "leo",
          "t": "And the emergency contact?"
        },
        {
          "quem": "mia",
          "t": "Another person, for example his mother. Never himself."
        },
        {
          "quem": "leo",
          "t": "Great. Now check every field with a star."
        }
      ],
      "perguntas": [
        {
          "q": "Which one is the surname?",
          "op": [
            "Lima",
            "Rui",
            "Mia"
          ],
          "a": 0,
          "por": "The surname is Lima, and the given name is Rui."
        },
        {
          "q": "How do you write March 7th, 2003 in the USA?",
          "op": [
            "03/07/2003",
            "07/03/2003",
            "2003/07/03"
          ],
          "a": 0,
          "por": "In the USA, the month comes first."
        },
        {
          "q": "Who is a good emergency contact?",
          "op": [
            "Another person, like his mother",
            "The same person",
            "Nobody"
          ],
          "a": 0,
          "por": "Another person, for example his mother."
        }
      ],
      "img": "https://wolf-labs.pages.dev/p/ec8ad5ee231a/aupair-fill-it-in/img/live-conversa.webp"
    },
    "out": {
      "sub": "Three lines about a form. Hear it, then say it.",
      "frases": [
        {
          "t": "My surname is Lima, and my given name is Rui.",
          "img": "https://wolf-labs.pages.dev/p/ec8ad5ee231a/aupair-fill-it-in/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "In the USA, the month comes first.",
          "img": "https://wolf-labs.pages.dev/p/ec8ad5ee231a/aupair-fill-it-in/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The emergency contact is another person.",
          "img": "https://wolf-labs.pages.dev/p/ec8ad5ee231a/aupair-fill-it-in/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Names, dates, status. Four quick ones.",
      "regra": "<b>surname</b> = last name · <b>given name</b> = first name · <b>MM/DD/YYYY</b> · <b>single</b>, married · emergency contact = another person.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The emergency contact is his mother.",
          "aceita": [],
          "d": "Dica: o contato de emergência é <b>outra pessoa</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the passport says Rui Lima.",
          "mostra": "Surname: Rui. Given name: Lima.",
          "r": "Surname: Lima. Given name: Rui.",
          "aceita": [],
          "d": "Dica: <b>surname</b> é o sobrenome (Lima); <b>given name</b> é o nome (Rui)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the USA wants month first.",
          "mostra": "March 7, 2003 = 07/03/2003",
          "r": "March 7, 2003 = 03/07/2003",
          "aceita": [
            "03/07/2003",
            "3/7/2003"
          ],
          "d": "Dica: nos EUA a data é <b>MM/DD/YYYY</b>: março primeiro."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: use the word a form uses.",
          "mostra": "Marital status: alone",
          "r": "Marital status: single",
          "aceita": [
            "single"
          ],
          "d": "Dica: nos formulários, solteiro é <b>single</b>, nunca 'alone'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Look at the picture: a red folder with a pen. Write 2 or 3 sentences about a practice form: the surname, how to write March 7th and the emergency contact. Use a practice person, never your real data.",
      "ph": "The surname is …",
      "ex": "The surname is Lima. March 7th is 03/07 in the USA. The emergency contact is his mother.",
      "img": "https://wolf-labs.pages.dev/p/ec8ad5ee231a/aupair-fill-it-in/img/live-capa.webp",
      "leg": "A folder, glasses and a pen"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "In the USA, how do you write July 4th, 2001? Say it or type it.",
          "ph": "Month first: …",
          "ex": "It is 07/04/2001."
        },
        {
          "q": "Why is a form with no mistakes important for an agency?",
          "ph": "Because it shows …",
          "ex": "Because it shows I am careful."
        }
      ]
    }
  }
};
