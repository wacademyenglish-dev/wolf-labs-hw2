/* AU PAIR · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=". Falas originais. */
window.HW2 = {
  "id": "aupair-references-and-records",
  "titulo": "References and Records",
  "nivel": "A2",
  "minutos": 10,
  "capa": "",
  "alvo": "need to / have to + plain verb (needs to / has to with he, she); Could you + plain verb to ask for a favor; never need bring, has to sends, Could you to",
  "abrir": "What documents do you need to travel?",
  "fecho": "<b>need to / have to</b> + plain verb: <i>I need to bring my passport.</i> He or she: <b>needs to / has to</b>. To ask politely: <b>Could you</b> + plain verb: <i>Could you write a letter for me?</i> Never <i>need bring</i> or <i>Could you to</i>.",
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
      "sub": "Mia and Leo plan her au pair papers. A new scene, about 45 seconds.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, how is your au pair file? Is it ready?"
        },
        {
          "quem": "mia",
          "t": "Not yet. I have to collect a few papers."
        },
        {
          "quem": "leo",
          "t": "What do you need?"
        },
        {
          "quem": "mia",
          "t": "I need my passport, two photos and two reference letters."
        },
        {
          "quem": "leo",
          "t": "Who can write the letters?"
        },
        {
          "quem": "mia",
          "t": "My old boss at the daycare, and my neighbor. I babysit her kids every week."
        },
        {
          "quem": "leo",
          "t": "Good choice. They saw you with children. Could you ask them this week?"
        },
        {
          "quem": "mia",
          "t": "Yes. I will say, Could you write a short letter for me, please?"
        },
        {
          "quem": "leo",
          "t": "And give them a date. People forget things."
        },
        {
          "quem": "mia",
          "t": "Right. I need to send everything by Friday."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia need for her file?",
          "op": [
            "Her passport, two photos and two letters",
            "Only a passport",
            "A new phone"
          ],
          "a": 0,
          "por": "I need my passport, two photos and two reference letters."
        },
        {
          "q": "Why is her neighbor a good reference?",
          "op": [
            "Mia babysits her kids every week",
            "She is Mia's mother",
            "She works at the airport"
          ],
          "a": 0,
          "por": "I babysit her kids every week."
        },
        {
          "q": "What does Leo say about the date?",
          "op": [
            "Give people a date, because they forget",
            "Ask on Friday night",
            "Do not ask anyone"
          ],
          "a": 0,
          "por": "And give them a date. People forget things."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for your au pair file. Hear it, then say it.",
      "frases": [
        {
          "t": "I need to bring my passport and two photos.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She has to send the form on Friday.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Could you write a short letter for me, please?",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "need to, have to, Could you. Four quick ones.",
      "regra": "<b>need to / have to</b> + plain verb · he, she: <b>needs to / has to</b> · <b>Could you</b> + plain verb · never <b>need bring</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Could you write a letter for me?",
          "aceita": [],
          "d": "Dica: <b>Could you</b> + verbo limpo: write."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "I need bring two photos.",
          "r": "I need to bring two photos.",
          "aceita": [
            "I have to bring two photos."
          ],
          "d": "Dica: depois de <b>need</b>, entra <b>to</b> antes do verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She have to send the form on Friday.",
          "r": "She has to send the form on Friday.",
          "aceita": [
            "She needs to send the form on Friday."
          ],
          "d": "Dica: com she, he, it: <b>has to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Could you to write a letter for me?",
          "r": "Could you write a letter for me?",
          "aceita": [],
          "d": "Dica: depois de <b>Could you</b>, o verbo vem direto, sem <b>to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Write 2 or 3 sentences about your au pair file: two documents you need to bring, and who you have to ask for a reference. Use <b>need to</b> or <b>have to</b>.",
      "ph": "I need to bring …",
      "ex": "I need to bring my passport and two photos. I have to ask my old boss for a reference. Could you write it by Friday?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who can write a reference for you? Why?",
          "ph": "My … can write it because …",
          "ex": "My old boss can write it because she saw me with the kids."
        },
        {
          "q": "Your teacher is busy. How do you ask for a reference letter?",
          "ph": "Could you …?",
          "ex": "Could you write a short reference for me, please?"
        }
      ]
    }
  }
};
