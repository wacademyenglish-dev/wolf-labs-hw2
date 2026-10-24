/* WHAT DID YOU DO ON SATURDAY? · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Did you ...? + verbo limpo + respostas curtas. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "what-did-you-do-on-saturday",
  "titulo": "What Did You Do on Saturday?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/cb9f8170486f/what-did-you-do-on-saturday/img/live-estudio.webp",
  "alvo": "past questions with did: Did you ...? What / Where did you ...?; short answers Yes, I did / No, I didn't; the plain verb after did (Did you go?, never Did you went?)",
  "abrir": "What did you do last Saturday?",
  "fecho": "<b>Did you</b> + the plain verb: <i>Did you go out? Where did you go?</i> The short answer: <b>Yes, I did.</b> / <b>No, I didn't.</b> <b>did</b> already carries the past, so never <i>Did you went</i>.",
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
      "sub": "Mia and Leo on Monday morning. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/cb9f8170486f/what-did-you-do-on-saturday/img/live-estudio.webp",
      "leg": "A quiet room on Monday",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Hi Mia! What did you do on Saturday?"
        },
        {
          "quem": "mia",
          "t": "I went to the park with my friends."
        },
        {
          "quem": "leo",
          "t": "Did you play frisbee?"
        },
        {
          "quem": "mia",
          "t": "Yes, I did. And we ate sandwiches. Did you go out?"
        },
        {
          "quem": "leo",
          "t": "No, I didn't. I stayed home and watched a movie."
        },
        {
          "quem": "mia",
          "t": "What movie did you watch?"
        },
        {
          "quem": "leo",
          "t": "A funny one. Then I cooked pasta."
        },
        {
          "quem": "mia",
          "t": "Did you cook it for your family?"
        },
        {
          "quem": "leo",
          "t": "No, I didn't. I cooked it for me!"
        }
      ],
      "perguntas": [
        {
          "q": "Where did Mia go on Saturday?",
          "op": [
            "To the park",
            "To the cinema",
            "To the beach"
          ],
          "a": 0,
          "por": "I went to the park with my friends."
        },
        {
          "q": "Did Leo go out on Saturday?",
          "op": [
            "No, he didn't",
            "Yes, he did",
            "Yes, he went"
          ],
          "a": 0,
          "por": "No, I didn't. I stayed home and watched a movie."
        }
      ]
    },
    "out": {
      "sub": "Three lines about the weekend. Hear it, then say it.",
      "frases": [
        {
          "t": "Where did you go on Saturday?",
          "img": "https://wolf-labs.pages.dev/p/cb9f8170486f/what-did-you-do-on-saturday/img/live-rua.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Yes, I did. We played frisbee in the park.",
          "img": "https://wolf-labs.pages.dev/p/cb9f8170486f/what-did-you-do-on-saturday/img/live-parque.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "No, I didn't. I stayed home.",
          "img": "https://wolf-labs.pages.dev/p/cb9f8170486f/what-did-you-do-on-saturday/img/live-estudio.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Did you ...? Four quick ones.",
      "regra": "<b>Did you</b> + plain verb · <b>Where / What did you ...?</b> · <b>Yes, I did.</b> / <b>No, I didn't.</b> · never <i>Did you went</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "What did you do on Saturday?",
          "aceita": [],
          "d": "Dica: palavra de pergunta + <b>did you</b> + verbo limpo (do)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Did you went to the park?",
          "r": "Did you go to the park?",
          "aceita": [],
          "d": "Dica: <b>did</b> já é o passado; depois dele o verbo fica limpo: <b>go</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make a question.",
          "mostra": "You watched a movie.",
          "r": "Did you watch a movie?",
          "aceita": [],
          "d": "Dica: pergunta começa com <b>Did</b>, e o verbo volta ao normal."
        },
        {
          "tipo": "escreve",
          "t": "Say no. Use a short answer.",
          "mostra": "Did you cook dinner?",
          "r": "No, I didn't.",
          "aceita": [
            "No, I did not.",
            "No I didn't."
          ],
          "d": "Dica: resposta curta: <b>No, I didn't.</b> Sem outro verbo."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/cb9f8170486f/what-did-you-do-on-saturday/img/live-parque.webp",
      "leg": "A picnic in the park",
      "pede": "Look at the picture: a picnic blanket in the park. Write 2 or 3 sentences about last Saturday. Use a past verb, <b>didn't</b> or a question with <b>Did you ...?</b>",
      "ph": "Last Saturday I … I didn't …",
      "ex": "Last Saturday I went to the park. I didn't cook. Did you play frisbee?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you do last Saturday?",
          "ph": "Last Saturday I …",
          "ex": "Last Saturday I visited my friends and ate pizza."
        },
        {
          "q": "Did you go out last night?",
          "ph": "Yes, I did. / No, I didn't.",
          "ex": "No, I didn't. I stayed home and watched TV."
        }
      ]
    }
  }
};
