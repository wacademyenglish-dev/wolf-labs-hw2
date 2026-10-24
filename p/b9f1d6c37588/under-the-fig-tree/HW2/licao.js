/* UNDER THE FIG TREE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: perguntas no passado com be e did. Bíblia (WEB, ao pé da letra, conferido em ebible.org/eng-web e engwebu): João 1:46 (Listen), 1:48 (Out loud e Você). Nenhum versículo no Focus nem marcado como errado; nada da Bíblia vira falsa opção. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "under-the-fig-tree",
  "titulo": "Under the Fig Tree",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/b9f1d6c37588/under-the-fig-tree/img/live-figueira.webp",
  "alvo": "past questions with be (Where were you? Were you alone? Why were you sad?) and with did (Did you pray? What did you do? How did you feel?) with irregular verbs; never did + be (Did you were), never did + past (What did you did), never the statement order (Where you were?)",
  "abrir": "Where were you at this time yesterday?",
  "fecho": "With <b>be</b>, the question starts with <b>was / were</b>: <i>Where were you? Were you alone?</i> With other verbs, <b>did</b> + the plain verb: <i>What did you do? Did you pray?</i> Never <i>did</i> and <i>was</i> together, never <i>did</i> + a past verb.",
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
      "sub": "Mia tells Leo about Philip and Nathanael. She quotes John 1:46. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/b9f1d6c37588/under-the-fig-tree/img/live-figueira.webp",
      "leg": "A fig tree in a quiet courtyard",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, what are you reading today?"
        },
        {
          "quem": "mia",
          "t": "A story about Philip and his friend Nathanael."
        },
        {
          "quem": "leo",
          "t": "Where was Nathanael?"
        },
        {
          "quem": "mia",
          "t": "He was under a fig tree. Philip found him there and told him about Jesus."
        },
        {
          "quem": "leo",
          "t": "Was Nathanael sure about it?"
        },
        {
          "quem": "mia",
          "t": "No, he wasn't. He asked, “Can any good thing come out of Nazareth?”"
        },
        {
          "quem": "leo",
          "t": "What did Philip say?"
        },
        {
          "quem": "mia",
          "t": "He said, “Come and see.”"
        },
        {
          "quem": "leo",
          "t": "Did Nathanael go?"
        },
        {
          "quem": "mia",
          "t": "Yes, he did. He went, and Jesus saw him coming."
        },
        {
          "quem": "leo",
          "t": "How did Jesus know him?"
        },
        {
          "quem": "mia",
          "t": "That is the surprise. Jesus saw him under the fig tree before they met."
        }
      ],
      "perguntas": [
        {
          "q": "Where was Nathanael?",
          "op": [
            "Under a fig tree",
            "At the market",
            "On a boat"
          ],
          "a": 0,
          "por": "He was under a fig tree."
        },
        {
          "q": "What did Philip say?",
          "op": [
            "Come and see",
            "Stay at home",
            "Wait here"
          ],
          "a": 0,
          "por": "He said, “Come and see.”"
        },
        {
          "q": "Did Nathanael go?",
          "op": [
            "Yes, he did",
            "No, he didn't",
            "Mia doesn't say"
          ],
          "a": 0,
          "por": "Yes, he did."
        }
      ]
    },
    "out": {
      "sub": "Three sentences. The third is from the Bible: John 1:48 (World English Bible). Hear it, then say it.",
      "frases": [
        {
          "t": "Where was Nathanael before Philip called him?",
          "img": "https://wolf-labs.pages.dev/p/b9f1d6c37588/under-the-fig-tree/img/live-figueira.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "How did Jesus know Nathanael?",
          "img": "https://wolf-labs.pages.dev/p/b9f1d6c37588/under-the-fig-tree/img/live-folhas.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Before Philip called you, when you were under the fig tree, I saw you.",
          "img": "https://wolf-labs.pages.dev/p/b9f1d6c37588/under-the-fig-tree/img/live-figueira.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Was, were or did? Four quick ones.",
      "regra": "<b>be</b>: <b>Where were you</b>? <b>Was he alone</b>? · other verbs: <b>What did you do</b>? <b>Did you pray</b>? · never <i>did + was</i>, never <i>did + past</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Where was Nathanael when Philip called him",
          "aceita": [],
          "d": "Dica: com <b>be</b>, a pergunta começa por <b>Where was</b>, sem did."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Where you were yesterday?",
          "r": "Where were you yesterday?",
          "aceita": [],
          "d": "Dica: na pergunta, <b>were</b> vem antes de you: Where were you."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Did you were alone under the tree?",
          "r": "Were you alone under the tree?",
          "aceita": [],
          "d": "Dica: com <b>be</b> não usamos <b>did</b>. A pergunta começa por Were."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "What did you did last night?",
          "r": "What did you do last night?",
          "aceita": [],
          "d": "Dica: com <b>did</b>, o verbo fica limpo: do, não did."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/b9f1d6c37588/under-the-fig-tree/img/live-folhas.webp",
      "leg": "Figs among green leaves",
      "pede": "Look at the picture: figs among green leaves. Write 2 or 3 questions to a friend about yesterday. Use <b>Where were you …?</b>, <b>Were you …?</b>, <b>Did you …?</b> or <b>What did you …?</b>",
      "ph": "Where were you …? Did you …?",
      "ex": "Where were you yesterday afternoon? Did you sit under a tree? What did you do there?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "In John 1:48 Nathanael asks, “How do you know me?” Think of a good friend. Where were you when you met? What did you do first?",
          "ph": "We met at … I …",
          "ex": "We met at school. I said hello and sat next to her."
        },
        {
          "q": "Where were you yesterday afternoon? What did you do?",
          "ph": "I was at … I …",
          "ex": "I was at home. I cooked lunch and watched a movie."
        }
      ]
    }
  }
};
