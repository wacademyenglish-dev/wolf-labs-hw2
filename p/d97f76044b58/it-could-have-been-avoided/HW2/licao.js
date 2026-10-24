/* IT COULD HAVE BEEN AVOIDED · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: passiva com modal no passado: should/could/might have been + particípio. B2 Business: nenhum português. */
window.HW2 = {
  "id": "it-could-have-been-avoided",
  "titulo": "It Could Have Been Avoided",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/d97f76044b58/it-could-have-been-avoided/img/live-goteira.webp",
  "alvo": "passive with modals: should / could / might have been + third form for the past (what did not happen); the third conditional in the passive (If it had been checked, it wouldn't have been paid); must be / will have to be + third form for the future",
  "abrir": "What could have been avoided in your year?",
  "fecho": "The passive with a modal: <b>should have been</b> + third form (the right thing nobody did), <b>could have been</b> (it was possible), <b>might have been</b> (maybe, nobody knows). For rules ahead: <b>must be</b> + third form. Never <i>should have repaired</i>, never <i>must checked</i>: <b>been</b> and <b>be</b> are part of the passive.",
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
      "sub": "Mia and Leo review three year-end problems. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/d97f76044b58/it-could-have-been-avoided/img/live-pastas.webp",
      "leg": "Folders on a desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the audit found three problems. Let's go through them."
        },
        {
          "quem": "leo",
          "t": "First, the warehouse roof leaked. The repair should have been done in spring."
        },
        {
          "quem": "mia",
          "t": "Yes. The loss could have been avoided for a tenth of the price."
        },
        {
          "quem": "leo",
          "t": "Second, the delivery to Berlin. The truck might have been delayed by the storm, but nobody knows."
        },
        {
          "quem": "mia",
          "t": "And the third?"
        },
        {
          "quem": "leo",
          "t": "An invoice was paid twice. If it had been checked, it would not have been paid twice."
        },
        {
          "quem": "mia",
          "t": "Who signed it?"
        },
        {
          "quem": "leo",
          "t": "I did. My name is on it."
        },
        {
          "quem": "mia",
          "t": "Thank you for saying so. From now on, big invoices must be checked by two people."
        },
        {
          "quem": "leo",
          "t": "Agreed. I will write the new rule today."
        }
      ],
      "perguntas": [
        {
          "q": "What should have been done in spring?",
          "op": [
            "The roof repair",
            "The audit",
            "The delivery"
          ],
          "a": 0,
          "por": "The repair should have been done in spring."
        },
        {
          "q": "What might have delayed the truck?",
          "op": [
            "The storm",
            "A strike",
            "The invoice"
          ],
          "a": 0,
          "por": "The truck might have been delayed by the storm, but nobody knows."
        },
        {
          "q": "What is the new rule?",
          "op": [
            "Big invoices must be checked by two people",
            "Invoices are paid twice",
            "Nobody signs invoices"
          ],
          "a": 0,
          "por": "Big invoices must be checked by two people."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about what didn't happen. Hear it, then say it.",
      "frases": [
        {
          "t": "The repair should have been done in spring.",
          "img": "https://wolf-labs.pages.dev/p/d97f76044b58/it-could-have-been-avoided/img/live-goteira.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The loss could have been avoided.",
          "img": "https://wolf-labs.pages.dev/p/d97f76044b58/it-could-have-been-avoided/img/live-armazem.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The truck might have been delayed by the storm.",
          "img": "https://wolf-labs.pages.dev/p/d97f76044b58/it-could-have-been-avoided/img/live-estande.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "should have been, could have been, must be. Four quick ones.",
      "regra": "<b>should / could / might have been</b> + third form · <b>must be</b> + third form · don't forget <b>been</b> and <b>be</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The invoice should have been checked.",
          "aceita": [],
          "d": "Hint: <b>should have been</b> + the third form: <b>checked</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "The roof should have repaired in May.",
          "r": "The roof should have been repaired in May.",
          "aceita": [],
          "d": "Hint: the passive needs <b>been</b>: <i>should have been repaired</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The truck might have been delay by the storm.",
          "r": "The truck might have been delayed by the storm.",
          "aceita": [],
          "d": "Hint: after <b>been</b>, use the third form: <b>delayed</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Big invoices must checked by two people.",
          "r": "Big invoices must be checked by two people.",
          "aceita": [],
          "d": "Hint: for rules ahead: <b>must be</b> + the third form."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/d97f76044b58/it-could-have-been-avoided/img/live-goteira.webp",
      "leg": "A leak in a warehouse",
      "pede": "Look at the picture: a leak in a warehouse. Write 2 or 3 sentences about something that could have been avoided at work or at home. Use <b>should have been</b>, <b>could have been</b> or <b>might have been</b>.",
      "ph": "It should have been …",
      "ex": "The meeting should have been canceled. The mistake could have been avoided. The file might have been deleted by accident."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What should have been done earlier at your work or at home?",
          "ph": "… should have been … earlier.",
          "ex": "The windows should have been cleaned last month."
        },
        {
          "q": "What is one rule that must be followed at your work or at home?",
          "ph": "… must be …",
          "ex": "Bills must be paid by the fifth day of the month."
        }
      ]
    }
  }
};
