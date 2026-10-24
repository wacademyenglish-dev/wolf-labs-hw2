/* GIVE ME A SECOND · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Hold on / That's a good question / How do I put it / It's a kind of. A2: dicas em portugues so nas notas (d). So imagens live-* escuras */
window.HW2 = {
  "id": "give-me-a-second",
  "titulo": "Give Me a Second",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/61aef48ceb88/give-me-a-second/img/live-ampulheta.webp",
  "alvo": "buying time out loud: Hold on, let me think · That's a good question · How do I put it ... · It's a kind of ... (describe the word that won't come); never silence, never switching language",
  "abrir": "What do you say when you need a moment to think?",
  "fecho": "<b>Hold on, let me think.</b> · <b>That's a good question.</b> · <b>How do I put it ...</b> · <b>It's a kind of ...</b> The only mistake is silence. If the word doesn't come, describe it: <i>It's a kind of small bag for coins.</i>",
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
      "sub": "Mia gets a hard question from Leo. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/61aef48ceb88/give-me-a-second/img/live-porta.webp",
      "leg": "A warm hallway with a coat on the hook",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, quick question. What's the difference between a chair and a stool?"
        },
        {
          "quem": "mia",
          "t": "Hold on, let me think."
        },
        {
          "quem": "leo",
          "t": "Take your time."
        },
        {
          "quem": "mia",
          "t": "That's a good question. A chair has a back, and a stool doesn't."
        },
        {
          "quem": "leo",
          "t": "Nice. Now describe a purse for coins. You don't know the word, right?"
        },
        {
          "quem": "mia",
          "t": "How do I put it... It's a kind of small bag for coins."
        },
        {
          "quem": "leo",
          "t": "Yes! It's a wallet. What about this one: why do people keep old photos?"
        },
        {
          "quem": "mia",
          "t": "Give me a second. Hmm. I think they keep them because they miss the day."
        },
        {
          "quem": "leo",
          "t": "Good answer. You didn't stay silent once."
        },
        {
          "quem": "mia",
          "t": "That's the trick. I always say something!"
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia say first when she needs time?",
          "op": [
            "Hold on, let me think",
            "I don't know",
            "Nothing"
          ],
          "a": 0,
          "por": "Hold on, let me think."
        },
        {
          "q": "How does Mia describe the word she doesn't know?",
          "op": [
            "It's a kind of small bag for coins",
            "It's my favorite word",
            "She says it in her language"
          ],
          "a": 0,
          "por": "It's a kind of small bag for coins."
        },
        {
          "q": "What is the trick?",
          "op": [
            "Always say something",
            "Stay silent and think",
            "Ask Leo to answer"
          ],
          "a": 0,
          "por": "That's the trick. I always say something!"
        }
      ]
    },
    "out": {
      "sub": "Three ways to buy a moment. Hear it, then say it.",
      "frases": [
        {
          "t": "Hold on, let me think.",
          "img": "https://wolf-labs.pages.dev/p/61aef48ceb88/give-me-a-second/img/live-ampulheta.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "That's a good question. Give me a second.",
          "img": "https://wolf-labs.pages.dev/p/61aef48ceb88/give-me-a-second/img/live-porta.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "How do I put it? It's a kind of small bag.",
          "img": "https://wolf-labs.pages.dev/p/61aef48ceb88/give-me-a-second/img/live-ampulheta.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Buy time and keep going. Four quick ones.",
      "regra": "<b>Hold on, let me think</b> · <b>That's a good question</b> · <b>How do I put it ...</b> · <b>It's a kind of ...</b> · no silence.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Hold on, let me think about it for a second.",
          "aceita": [],
          "d": "Dica: <b>Hold on, let me think</b>: o verbo fica limpo depois de <b>let me</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Hold on, let me to think.",
          "r": "Hold on, let me think.",
          "aceita": [],
          "d": "Dica: depois de <b>let me</b>, o verbo fica limpo, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "That's a good questions.",
          "r": "That's a good question.",
          "aceita": [
            "That is a good question."
          ],
          "d": "Dica: <b>a good question</b>, no singular."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It's a kind from small bag.",
          "r": "It's a kind of small bag.",
          "aceita": [
            "It is a kind of small bag."
          ],
          "d": "Dica: a expressão é <b>a kind of</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/61aef48ceb88/give-me-a-second/img/live-ampulheta.webp",
      "leg": "An hourglass, the sand running",
      "pede": "Look at the picture: an hourglass, the sand running. A hard question: why do people keep old photos? Write 2 or 3 sentences: start with a move like <b>Hold on</b> or <b>That's a good question</b>, then answer.",
      "ph": "That's a good question …",
      "ex": "That's a good question. I think people keep photos because they miss the day. It's a kind of small time machine."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Describe your kitchen to somebody who has never seen it.",
          "ph": "Hold on … my kitchen is …",
          "ex": "Hold on, let me think. It's small, with a window over the sink."
        },
        {
          "q": "You forget a word. Describe it. What do you say?",
          "ph": "How do I put it … It's a kind of …",
          "ex": "How do I put it... It's a kind of machine for making coffee."
        }
      ]
    }
  }
};
