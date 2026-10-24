/* KNOW HOW TO · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=".
   Alvo: resume and interview language: good at + -ing, know how to +. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "know-how-to",
  "titulo": "Know How To",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/008c444b9c64/know-how-to/img/live-bandejas.webp",
  "alvo": "resume and interview language: good at + -ing, know how to + verb, experience in + -ing; hard skills (learned in a course or job) and soft skills (work in any job)",
  "abrir": "What are you good at?",
  "fecho": "Three phrases for a resume: <b>good at + -ing</b> (<i>I'm good at solving problems</i>), <b>know how to + verb</b> (<i>I know how to use Excel</i>), <b>experience in + -ing</b> (<i>I have experience in managing a team</i>). <b>Hard</b> skills are learned in a course or job. <b>Soft</b> skills work in any job.",
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
      "sub": "Mia and Leo before a hotel interview. A new scene, about 50 seconds.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, your resume is almost ready. What skills do you have?"
        },
        {
          "quem": "leo",
          "t": "I'm good at solving problems. And I know how to use Excel."
        },
        {
          "quem": "mia",
          "t": "Great. Hard skills are things you learn, like Excel. Soft skills work in any job."
        },
        {
          "quem": "leo",
          "t": "So solving problems is a soft skill. And speaking Spanish is a hard skill."
        },
        {
          "quem": "mia",
          "t": "Right. Do you have experience in managing a team?"
        },
        {
          "quem": "leo",
          "t": "Yes, I have experience in managing a team of four. I'm good at organizing events too."
        },
        {
          "quem": "mia",
          "t": "Do you know how to use the cash register?"
        },
        {
          "quem": "leo",
          "t": "No, I don't know how to use it. But I'm good at learning fast."
        },
        {
          "quem": "mia",
          "t": "Perfect. Write that on the resume."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo know how to use?",
          "op": [
            "Excel",
            "A forklift",
            "A cash register"
          ],
          "a": 0,
          "por": "I know how to use Excel."
        },
        {
          "q": "What experience does Leo have?",
          "op": [
            "Managing a team of four",
            "Selling hotel rooms",
            "Teaching Spanish"
          ],
          "a": 0,
          "por": "I have experience in managing a team of four."
        },
        {
          "q": "What doesn't Leo know how to use?",
          "op": [
            "The cash register",
            "Excel",
            "A computer"
          ],
          "a": 0,
          "por": "I don't know how to use it."
        }
      ],
      "img": "https://wolf-labs.pages.dev/p/008c444b9c64/know-how-to/img/live-bandejas.webp",
      "leg": "Two trays: hard skills and soft skills"
    },
    "out": {
      "sub": "Three lines for a resume. Hear it, then say it.",
      "frases": [
        {
          "t": "I'm good at solving problems.",
          "img": "https://wolf-labs.pages.dev/p/008c444b9c64/know-how-to/img/live-bandejas.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I know how to use Excel.",
          "img": "https://wolf-labs.pages.dev/p/008c444b9c64/know-how-to/img/live-mural.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I have experience in managing a team.",
          "img": "https://wolf-labs.pages.dev/p/008c444b9c64/know-how-to/img/live-entrevista.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Good at, know how to, experience in. Four quick ones.",
      "regra": "<b>good at</b> + <b>-ing</b> · <b>know how to</b> + plain verb · <b>experience in</b> + <b>-ing</b> · never <i>good in</i>, never <i>know use</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I'm good at organizing events.",
          "aceita": [],
          "d": "Dica: <b>good at</b> + verbo com <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: two words are missing.",
          "mostra": "I know use Excel.",
          "r": "I know how to use Excel.",
          "aceita": [],
          "d": "Dica: <b>know how to</b> + verbo. Falta <b>how to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She is good in speaking Spanish.",
          "r": "She is good at speaking Spanish.",
          "aceita": [],
          "d": "Dica: o par certo é <b>good at</b>, não <i>good in</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one verb is wrong.",
          "mostra": "I'm good at organize events.",
          "r": "I'm good at organizing events.",
          "aceita": [],
          "d": "Dica: depois de <b>at</b>, o verbo leva <b>-ing</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Look at the picture: a board with notes. Write 2 or 3 lines for your resume. Use <b>good at + -ing</b>, <b>know how to</b> or <b>experience in</b>.",
      "ph": "I'm good at …",
      "ex": "I'm good at solving problems. I know how to use Excel. I have experience in working with customers.",
      "img": "https://wolf-labs.pages.dev/p/008c444b9c64/know-how-to/img/live-mural.webp",
      "leg": "A board with notes for a resume"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you good at? Use good at + -ing.",
          "ph": "I'm good at …",
          "ex": "I'm good at cooking."
        },
        {
          "q": "What do you know how to do very well?",
          "ph": "I know how to …",
          "ex": "I know how to fix a bike."
        }
      ]
    }
  }
};
