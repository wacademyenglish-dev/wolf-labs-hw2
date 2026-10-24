/* THE LOST WALLET · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Unit 10: was/were, didn't, going to, already. A1: dicas em português só nas notas (d). Só live-capa (escura); live-conversa ficou de fora por ser a mais clara (lum 55). */
window.HW2 = {
  "id": "a1-final-the-lost-wallet",
  "titulo": "The Lost Wallet",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/1301ca73643b/a1-final-the-lost-wallet/img/live-capa.webp",
  "alvo": "Unit 10 review: was / were; there was; past simple (irregulars: went, had); didn't + plain verb; am / is / are going to for plans; already / not yet",
  "abrir": "Where were you yesterday at 8 PM?",
  "fecho": "<b>I / he / she was</b>, <b>you / we / they were</b>. <b>didn't</b> + plain verb: <i>She didn't see it.</i> Plans: <b>am / is / are going to</b> + verb. <b>Already</b> in the middle: <i>I already had lunch.</i>",
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
      "sub": "Mia and Leo at the café. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/1301ca73643b/a1-final-the-lost-wallet/img/live-capa.webp",
      "leg": "A dark café with warm lamps",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, a black wallet was on table five last night."
        },
        {
          "quem": "leo",
          "t": "Where were you at six o'clock?"
        },
        {
          "quem": "mia",
          "t": "I was at the café. Ms. Lee and her sister were here too."
        },
        {
          "quem": "leo",
          "t": "Did Ms. Lee see it?"
        },
        {
          "quem": "mia",
          "t": "No, she didn't see it. She drank a coffee and went home."
        },
        {
          "quem": "leo",
          "t": "There was a young woman at the next table. Her name is Dani."
        },
        {
          "quem": "mia",
          "t": "Dani saw it at seven! She is going to call the owner tomorrow."
        },
        {
          "quem": "leo",
          "t": "I already called the owner. She is coming now!"
        },
        {
          "quem": "mia",
          "t": "Great! We didn't close the café yet. Let's wait for her."
        }
      ],
      "perguntas": [
        {
          "q": "Where was the wallet?",
          "op": [
            "On table five",
            "In the kitchen",
            "At home"
          ],
          "a": 0,
          "por": "A black wallet was on table five last night."
        },
        {
          "q": "Did Ms. Lee see it?",
          "op": [
            "No, she didn't",
            "Yes, she did",
            "She took it"
          ],
          "a": 0,
          "por": "No, she didn't see it."
        },
        {
          "q": "Who is coming now?",
          "op": [
            "The owner",
            "Dani",
            "Ms. Lee"
          ],
          "a": 0,
          "por": "I already called the owner. She is coming now!"
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the café. Hear it, then say it.",
      "frases": [
        {
          "t": "I was at the café at six o'clock.",
          "img": "https://wolf-labs.pages.dev/p/1301ca73643b/a1-final-the-lost-wallet/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She didn't see the wallet.",
          "img": "https://wolf-labs.pages.dev/p/1301ca73643b/a1-final-the-lost-wallet/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I am going to call you tomorrow.",
          "img": "https://wolf-labs.pages.dev/p/1301ca73643b/a1-final-the-lost-wallet/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "was, didn't, going to. Four quick ones.",
      "regra": "<b>was / were</b> · <b>didn't</b> + plain verb · <b>am / is / are going to</b> + verb · <b>already</b> in the middle.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I already had lunch today.",
          "aceita": [],
          "d": "Dica: <b>already</b> fica no meio, antes do verbo: I already had."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "They was here yesterday.",
          "r": "They were here yesterday.",
          "aceita": [],
          "d": "Dica: com they / we / you, use <b>were</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She didn't saw it.",
          "r": "She didn't see it.",
          "aceita": [
            "She did not see it."
          ],
          "d": "Dica: depois de <b>didn't</b>, o verbo fica limpo: see."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "I going to call you tomorrow.",
          "r": "I am going to call you tomorrow.",
          "aceita": [
            "I'm going to call you tomorrow."
          ],
          "d": "Dica: <b>am</b> + <b>going to</b> + verbo."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/1301ca73643b/a1-final-the-lost-wallet/img/live-capa.webp",
      "leg": "A dark café at night",
      "pede": "Look at the picture: a dark café at night. Write 2 or 3 sentences about last night. Use <b>was / were</b>, <b>there was</b> or a verb in the past.",
      "ph": "Last night I was …",
      "ex": "Last night I was at home. There was a good movie on TV. I didn't go out because I was tired."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Where were you yesterday at 8 PM?",
          "ph": "At 8 PM I was …",
          "ex": "At 8 PM I was at home with my family."
        },
        {
          "q": "What are you going to do tomorrow?",
          "ph": "I am going to …",
          "ex": "I am going to visit my mother. I am going to cook lunch."
        }
      ]
    }
  }
};
