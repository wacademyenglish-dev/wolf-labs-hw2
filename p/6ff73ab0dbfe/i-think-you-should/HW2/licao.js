/* I THINK YOU SHOULD · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: should / shouldn't, I don't think ... should, I agree. B1: nenhum português. Só live-prox (a live-capa, estádio claro, ficou de fora). */
window.HW2 = {
  "id": "i-think-you-should",
  "titulo": "I Think You Should",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/6ff73ab0dbfe/i-think-you-should/img/live-prox.jpg",
  "alvo": "opinion and advice with should / shouldn't: I think ... should + plain verb; I don't think ... should; I agree with you (not 'I am agree'); no 'to' after should",
  "abrir": "What advice did a friend give you that really helped?",
  "fecho": "<b>should / shouldn't + plain verb</b>: <i>You should sleep earlier.</i> No <i>to</i> after should. Opinion: <b>I think … should</b> · <b>I don't think … should</b>. Agree: <b>I agree</b>, never <i>I am agree</i>.",
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
      "sub": "Mia and Leo talk about football and advice. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/6ff73ab0dbfe/i-think-you-should/img/live-prox.jpg",
      "leg": "A record player on a dark beach under green lights",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, our local football team lost again. I think they should buy better players."
        },
        {
          "quem": "leo",
          "t": "I don't think that's the problem. I think they should train harder."
        },
        {
          "quem": "mia",
          "t": "Maybe both. And I think clubs should have foreign players. They bring new ideas."
        },
        {
          "quem": "leo",
          "t": "I agree with you there. Everybody learns from different styles."
        },
        {
          "quem": "mia",
          "t": "But some fans say it isn't fair to local players."
        },
        {
          "quem": "leo",
          "t": "I don't think they should worry. If you're good, you should play, whoever you are."
        },
        {
          "quem": "mia",
          "t": "True. By the way, my brother wants to learn English fast. What should he do?"
        },
        {
          "quem": "leo",
          "t": "He should watch matches in English, and he shouldn't be afraid of making mistakes."
        },
        {
          "quem": "mia",
          "t": "I'll tell him. He gets so nervous when he speaks."
        },
        {
          "quem": "leo",
          "t": "Tell him not to think so much. Just talk."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia think the team should do?",
          "op": [
            "Buy better players",
            "Change the coach",
            "Sell the stadium"
          ],
          "a": 0,
          "por": "I think they should buy better players."
        },
        {
          "q": "What does Leo agree with?",
          "op": [
            "Clubs should have foreign players",
            "Fans should stay home",
            "The team shouldn't play"
          ],
          "a": 0,
          "por": "I agree with you there."
        },
        {
          "q": "What should Mia's brother do to learn English fast?",
          "op": [
            "Watch matches in English and not fear mistakes",
            "Stop speaking for a month",
            "Read only grammar books"
          ],
          "a": 0,
          "por": "He should watch matches in English, and he shouldn't be afraid of making mistakes."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with should. Hear it, then say it.",
      "frases": [
        {
          "t": "I think the team should buy better players.",
          "img": "",
          "au": "audio/say1.mp3"
        },
        {
          "t": "You shouldn't be afraid of making mistakes.",
          "img": "",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I don't think they should stop now.",
          "img": "",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "should, shouldn't, I agree. Four quick ones.",
      "regra": "<b>should / shouldn't + plain verb</b> · no <i>to</i> after should · <b>I don't think … should</b> · <b>I agree</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I don't think clubs should sell their best players.",
          "aceita": [],
          "d": "Hint: <b>I don't think</b> + subject + <b>should</b> + plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "You should to watch more matches.",
          "r": "You should watch more matches.",
          "aceita": [],
          "d": "Hint: no <i>to</i> after <b>should</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I am agree with you.",
          "r": "I agree with you.",
          "aceita": [
            "I do agree with you."
          ],
          "d": "Hint: <b>agree</b> is a verb, so no <i>am</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "You don't should eat so late.",
          "r": "You shouldn't eat so late.",
          "aceita": [
            "You should not eat so late."
          ],
          "d": "Hint: the negative of should is <b>shouldn't</b>, never <i>don't should</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "",
      "leg": "",
      "pede": "Imagine a friend who is stressed and needs a quiet place to relax. Write 2 or 3 sentences of advice. Use <b>should / shouldn't</b> and <b>I think … / I don't think …</b>.",
      "ph": "I think you should …",
      "ex": "I think you should come here and listen to some calm music. You shouldn't check your phone, and I don't think you should work tonight."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "A friend wants to learn English fast. What should they do?",
          "ph": "You should … You shouldn't …",
          "ex": "You should watch series in English every day, and you shouldn't be afraid of mistakes."
        },
        {
          "q": "Do you agree: everybody should learn a second language? Why?",
          "ph": "I agree / I don't think …",
          "ex": "I agree, because a second language opens doors. I think everybody should start at school."
        }
      ]
    }
  }
};
