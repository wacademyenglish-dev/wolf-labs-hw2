/* HOW WAS YOUR WEEKEND · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: perguntas de small talk: was / did / do + How about you. A2: dicas em português só nas notas (d). Só live-* escuras. */
window.HW2 = {
  "id": "how-was-your-weekend",
  "titulo": "How Was Your Weekend",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/d155da73bcbd/how-was-your-weekend/img/live-elevador.webp",
  "alvo": "small talk questions: How was ...? (the weekend is over) · Did you + plain verb · Do you like ...? · What happened? · and the question back: How about you?; never How is your weekend on Monday, never Did you went, never Are you like ...",
  "abrir": "It is Monday morning. What do you ask a colleague first?",
  "fecho": "<b>How was</b> your weekend? It is over, so the past. <b>Did you</b> + plain verb: <i>Did you go out?</i> Never <i>Did you went</i>. <b>Do you like</b> …? Never <i>Are you like</i>. And always give it back: <b>How about you?</b>",
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
      "sub": "Mia and Leo in the elevator, Monday morning. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/d155da73bcbd/how-was-your-weekend/img/live-elevador.webp",
      "leg": "The elevator hall",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Good morning, Mia! How was your weekend?"
        },
        {
          "quem": "mia",
          "t": "It was great, thanks. I went to the beach with my sister. How about you?"
        },
        {
          "quem": "leo",
          "t": "Mine was quiet. I stayed home and watched a series."
        },
        {
          "quem": "mia",
          "t": "Did you like it?"
        },
        {
          "quem": "leo",
          "t": "Yes, I did. Do you like series?"
        },
        {
          "quem": "mia",
          "t": "Not really. I like books. Did you cook on Sunday?"
        },
        {
          "quem": "leo",
          "t": "I did! I made pasta for my parents."
        },
        {
          "quem": "mia",
          "t": "What happened to your shirt? There is a spot on it."
        },
        {
          "quem": "leo",
          "t": "Ha! I dropped the pot on Sunday, and the sauce is still here."
        },
        {
          "quem": "mia",
          "t": "Here is the elevator. Have a good day, Leo!"
        }
      ],
      "perguntas": [
        {
          "q": "Where did Mia go on the weekend?",
          "op": [
            "To the beach with her sister",
            "To her parents' house",
            "Nowhere, she stayed home"
          ],
          "a": 0,
          "por": "I went to the beach with my sister."
        },
        {
          "q": "What did Leo do on Sunday?",
          "op": [
            "He cooked pasta for his parents",
            "He went to the beach",
            "He read a book"
          ],
          "a": 0,
          "por": "I made pasta for my parents."
        },
        {
          "q": "Does Mia like series?",
          "op": [
            "Not really, she likes books",
            "Yes, a lot",
            "She never watched one"
          ],
          "a": 0,
          "por": "Not really. I like books."
        }
      ]
    },
    "out": {
      "sub": "Three questions for a Monday. Hear it, then say it.",
      "frases": [
        {
          "t": "How was your weekend?",
          "img": "https://wolf-labs.pages.dev/p/d155da73bcbd/how-was-your-weekend/img/live-elevador.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Did you go out on Saturday?",
          "img": "https://wolf-labs.pages.dev/p/d155da73bcbd/how-was-your-weekend/img/live-canecas.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Do you like Mondays? How about you?",
          "img": "https://wolf-labs.pages.dev/p/d155da73bcbd/how-was-your-weekend/img/live-elevador.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Was, did or do? Four quick ones.",
      "regra": "<b>How was</b> (it is over) · <b>Did you</b> + plain verb · <b>Do you like</b> … · <b>How about you?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Did you go out on Saturday?",
          "aceita": [],
          "d": "Dica: <b>Did you</b> + o verbo limpo (go)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Did you went to the party?",
          "r": "Did you go to the party?",
          "aceita": [],
          "d": "Dica: depois de <b>did</b>, o verbo fica limpo: go, não went."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it is Monday. One word is wrong.",
          "mostra": "How is your weekend?",
          "r": "How was your weekend?",
          "aceita": [],
          "d": "Dica: o fim de semana já acabou, então <b>was</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Are you like football?",
          "r": "Do you like football?",
          "aceita": [],
          "d": "Dica: para gostar, use <b>Do you like</b>, nunca 'Are you like'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/d155da73bcbd/how-was-your-weekend/img/live-canecas.webp",
      "leg": "Four mugs on a Monday",
      "pede": "Look at the picture: four mugs on a counter. Write 2 or 3 sentences for small talk with a colleague: a question about the weekend, your answer, and <b>How about you?</b>",
      "ph": "How was your weekend? It was …",
      "ex": "How was your weekend? It was good. I went to the market. How about you?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How was your last weekend? What did you do?",
          "ph": "It was … I …",
          "ex": "It was nice. I visited my cousin and we cooked lunch."
        },
        {
          "q": "What do you ask a colleague on Monday morning?",
          "ph": "I ask: How was …?",
          "ex": "I ask: How was your weekend? Did you do anything fun?"
        }
      ]
    }
  }
};
