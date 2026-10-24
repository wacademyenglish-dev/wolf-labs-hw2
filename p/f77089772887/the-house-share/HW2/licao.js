/* The House Share · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present simple routine + frequency adverbs. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-house-share",
  "titulo": "The House Share",
  "nivel": "A1",
  "minutos": 10,
  "capa": "",
  "alvo": "present simple for routine: he / she + -s, always / usually / sometimes / never before the verb, doesn't; never 'She clean', 'I clean always', 'He don't'",
  "abrir": "What do you do every day at home?",
  "fecho": "<b>I / you / we / they</b> + plain verb · <b>he / she</b> + <b>-s</b>: <i>She cleans.</i> <b>always, usually, sometimes, never</b> go before the verb: <i>I always clean.</i> No: <b>doesn't</b>: <i>He doesn't clean.</i>",
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
      "sub": "Mia tells Leo about her new house in Malta. A new scene, about 45 seconds.",
      "img": "",
      "leg": "",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I live in a house in Malta now. Giulia is from Italy and Kenji is from Japan."
        },
        {
          "quem": "leo",
          "t": "Is it a good house?"
        },
        {
          "quem": "mia",
          "t": "Yes. Giulia always cooks dinner. Kenji usually washes the cups."
        },
        {
          "quem": "leo",
          "t": "And you?"
        },
        {
          "quem": "mia",
          "t": "I sometimes clean the bathroom. Kenji never cleans it!"
        },
        {
          "quem": "leo",
          "t": "Oh no. A house meeting tonight?"
        },
        {
          "quem": "mia",
          "t": "Yes. But he takes out the rubbish every day, so it is OK."
        },
        {
          "quem": "leo",
          "t": "What time do you get up?"
        },
        {
          "quem": "mia",
          "t": "I get up at seven. Giulia gets up at nine. She doesn't like the morning."
        },
        {
          "quem": "leo",
          "t": "Nice house. A bit like my house!"
        }
      ],
      "perguntas": [
        {
          "q": "Who always cooks dinner?",
          "op": [
            "Giulia",
            "Kenji",
            "Mia"
          ],
          "a": 0,
          "por": "Giulia always cooks dinner."
        },
        {
          "q": "What does Kenji do every day?",
          "op": [
            "He takes out the rubbish",
            "He cooks dinner",
            "He cleans the bathroom"
          ],
          "a": 0,
          "por": "He takes out the rubbish every day."
        },
        {
          "q": "What time does Giulia get up?",
          "op": [
            "At nine",
            "At seven",
            "At six"
          ],
          "a": 0,
          "por": "Giulia gets up at nine."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the house. Hear it, then say it.",
      "frases": [
        {
          "t": "Giulia always cooks dinner.",
          "img": "",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She gets up at nine, but I get up at seven.",
          "img": "",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Kenji doesn't clean the bathroom.",
          "img": "",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Daily routine. Four quick ones.",
      "regra": "<b>he / she + -s</b> · <b>always, usually, sometimes, never</b> before the verb · <b>doesn't</b> for he / she.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Kenji usually washes the cups after dinner",
          "aceita": [],
          "d": "Dica: <b>usually</b> vem antes do verbo, e Kenji (ele) leva <b>-es</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She clean the kitchen every day.",
          "r": "She cleans the kitchen every day.",
          "aceita": [],
          "d": "Dica: com <b>she</b> o verbo leva <b>-s</b>: cleans."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is in the wrong place.",
          "mostra": "I clean always the bathroom.",
          "r": "I always clean the bathroom.",
          "aceita": [],
          "d": "Dica: <b>always</b> vem antes do verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He don't wash the cups.",
          "r": "He doesn't wash the cups.",
          "aceita": [
            "He does not wash the cups."
          ],
          "d": "Dica: com <b>he</b> / <b>she</b>, o não é <b>doesn't</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "",
      "leg": "",
      "pede": "Think about your house. Write 2 or 3 sentences: who does what at home? Use <b>always</b>, <b>usually</b>, <b>sometimes</b> or <b>never</b>.",
      "ph": "My mother always … I sometimes …",
      "ex": "My mother always cooks lunch. I sometimes wash the cups. My brother never cleans his room."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What time do you get up on Monday?",
          "ph": "I get up at …",
          "ex": "I get up at six thirty on Monday."
        },
        {
          "q": "Who cooks in your house? How often?",
          "ph": "… cooks … every day / on Sunday",
          "ex": "My father cooks on Sunday. My mother cooks on Monday and Tuesday."
        }
      ]
    }
  }
};
