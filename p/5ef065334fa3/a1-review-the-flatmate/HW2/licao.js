/* A1 REVIEW: THE FLATMATE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Unidade 6 (-s, doesn't, at + hora, frequência). A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "a1-review-the-flatmate",
  "titulo": "A1 Review: The Flatmate",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/5ef065334fa3/a1-review-the-flatmate/img/live-capa.webp",
  "alvo": "Unit 6 review: he / she + -s; doesn't + plain verb; Do / Does ...? and short answers; at + time; on + date; always / usually / sometimes / never",
  "abrir": "What time do you usually get up on Sundays?",
  "fecho": "<b>He / she + -s</b>: <i>She works.</i> After <b>doesn't</b>, no -s: <i>He doesn't cook.</i> <b>At</b> + time, <b>on</b> + date. <b>Always / sometimes / never</b> go before the verb.",
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
      "sub": "Mia and Leo choose a new flatmate. A new scene, about 35 seconds.",
      "img": "https://wolf-labs.pages.dev/p/5ef065334fa3/a1-review-the-flatmate/img/live-conversa.webp",
      "leg": "A living room at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I have a good flatmate for us. Her name is Hana."
        },
        {
          "quem": "leo",
          "t": "What time does she get up?"
        },
        {
          "quem": "mia",
          "t": "She gets up at half past six. She works at a school."
        },
        {
          "quem": "leo",
          "t": "Does she cook?"
        },
        {
          "quem": "mia",
          "t": "Yes, she sometimes cooks. She never plays loud music."
        },
        {
          "quem": "leo",
          "t": "Does she like jazz?"
        },
        {
          "quem": "mia",
          "t": "Yes, she does. But she doesn't play it loud."
        },
        {
          "quem": "leo",
          "t": "When is her birthday?"
        },
        {
          "quem": "mia",
          "t": "It's on December third."
        },
        {
          "quem": "leo",
          "t": "Great. Let's tell her tonight!"
        }
      ],
      "perguntas": [
        {
          "q": "What time does Hana get up?",
          "op": [
            "At half past six",
            "At seven o'clock",
            "At eleven"
          ],
          "a": 0,
          "por": "She gets up at half past six."
        },
        {
          "q": "How often does Hana cook?",
          "op": [
            "Sometimes",
            "Always",
            "Never"
          ],
          "a": 0,
          "por": "Yes, she sometimes cooks."
        },
        {
          "q": "When is her birthday?",
          "op": [
            "On December third",
            "On May fifth",
            "On April second"
          ],
          "a": 0,
          "por": "It's on December third."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about Hana. Hear it, then say it.",
      "frases": [
        {
          "t": "She gets up at half past six.",
          "img": "https://wolf-labs.pages.dev/p/5ef065334fa3/a1-review-the-flatmate/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She never plays loud music.",
          "img": "https://wolf-labs.pages.dev/p/5ef065334fa3/a1-review-the-flatmate/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "My birthday is on December third.",
          "img": "https://wolf-labs.pages.dev/p/5ef065334fa3/a1-review-the-flatmate/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "-s, doesn't, at. Four quick ones.",
      "regra": "<b>he / she + -s</b> · <b>doesn't</b> + plain verb · <b>at</b> + time · <b>never</b> alone.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She sometimes cooks dinner on Sundays.",
          "aceita": [],
          "d": "Dica: <b>sometimes</b> vem antes do verbo; com she, <b>cooks</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She work at a school.",
          "r": "She works at a school.",
          "aceita": [],
          "d": "Dica: com <b>she / he</b>, o verbo leva <b>-s</b>: works."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He doesn't cooks.",
          "r": "He doesn't cook.",
          "aceita": [],
          "d": "Dica: depois de <b>doesn't</b>, o verbo fica limpo, sem -s."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I get up in seven o'clock.",
          "r": "I get up at seven o'clock.",
          "aceita": [
            "I get up at seven."
          ],
          "d": "Dica: horas pedem <b>at</b>: at seven o'clock."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/5ef065334fa3/a1-review-the-flatmate/img/live-conversa.webp",
      "leg": "A living room at night",
      "pede": "Look at the picture: a living room at night. Imagine your flatmate lives here. Write 2 or 3 sentences about his or her day. Use <b>-s</b>, <b>doesn't</b> and <b>always / never</b>.",
      "ph": "My flatmate gets up at …",
      "ex": "My flatmate gets up at seven. He never cooks, but he always watches TV here. He doesn't play loud music."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What time do you usually get up on Sundays?",
          "ph": "I usually get up at …",
          "ex": "I usually get up at ten. I never get up early on Sundays."
        },
        {
          "q": "When is your birthday?",
          "ph": "My birthday is on …",
          "ex": "My birthday is on March third."
        }
      ]
    }
  }
};
