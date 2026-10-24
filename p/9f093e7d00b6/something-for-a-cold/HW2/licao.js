/* SOMETHING FOR A COLD · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: this/these/that/those + Do you have something for...? Resfriado simples, conversa leve (regra 9). A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "something-for-a-cold",
  "titulo": "Something for a Cold",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/9f093e7d00b6/something-for-a-cold/img/live-capa.webp",
  "alvo": "this / these (near) and that / those (far) + Do you have something for a cold? + I have a cold / a sore throat",
  "abrir": "What do you drink at home when you have a cold?",
  "fecho": "Near: <b>this</b> (one) · <b>these</b> (many). Far: <b>that</b> (one) · <b>those</b> (many). Ask: <i>Do you have something for a cold?</i> Say: <i>I have a sore throat.</i> Never <i>I am with a sore throat.</i>",
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
      "sub": "Mia has a small cold. Leo and Mia in a pharmacy in Auckland. About 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/9f093e7d00b6/something-for-a-cold/img/live-capa.webp",
      "leg": "A quiet pharmacy at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I have a cold and a sore throat."
        },
        {
          "quem": "leo",
          "t": "Let's ask the pharmacist. Excuse me, do you have something for a cold?"
        },
        {
          "quem": "leo",
          "t": "She says these lozenges are good."
        },
        {
          "quem": "mia",
          "t": "These here, on the counter?"
        },
        {
          "quem": "leo",
          "t": "Yes, these. Those on the shelf are for children."
        },
        {
          "quem": "mia",
          "t": "OK. I need tissues too."
        },
        {
          "quem": "leo",
          "t": "These tissues are on the counter. Take this box."
        },
        {
          "quem": "mia",
          "t": "Thank you. Now I have lozenges and tissues."
        },
        {
          "quem": "leo",
          "t": "Good. Go home and drink hot tea with honey."
        },
        {
          "quem": "mia",
          "t": "That sounds nice. Thanks, Leo!"
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia have?",
          "op": [
            "A cold and a sore throat",
            "A headache and a cough",
            "A cough and a rash"
          ],
          "a": 0,
          "por": "I have a cold and a sore throat."
        },
        {
          "q": "Which lozenges does Mia take?",
          "op": [
            "The ones on the counter",
            "The ones on the shelf",
            "The ones for children"
          ],
          "a": 0,
          "por": "Yes, these. Those on the shelf are for children."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the pharmacy. Hear it, then say it.",
      "frases": [
        {
          "t": "I have a cold and a sore throat.",
          "img": "https://wolf-labs.pages.dev/p/9f093e7d00b6/something-for-a-cold/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Can I have these lozenges, please?",
          "img": "https://wolf-labs.pages.dev/p/9f093e7d00b6/something-for-a-cold/img/live-p-lozenges.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "This syrup is good for a cough.",
          "img": "https://wolf-labs.pages.dev/p/9f093e7d00b6/something-for-a-cold/img/live-p-syrup.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "This, that, these, those. Four quick ones.",
      "regra": "<b>this / these</b> = near · <b>that / those</b> = far · <b>something for</b> + the problem · <b>I have</b> a sore throat.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Do you have something for a cold?",
          "aceita": [],
          "d": "Dica: <b>Do you have something for</b> + o problema."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Take this lozenges for your throat.",
          "r": "Take these lozenges for your throat.",
          "aceita": [],
          "d": "Dica: vários (lozenges) pede <b>these</b>, não <b>this</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: ask for a cough.",
          "mostra": "Do you have something to cough?",
          "r": "Do you have something for a cough?",
          "aceita": [
            "Do you have something for my cough?"
          ],
          "d": "Dica: o problema vem depois de <b>for</b>, não <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: say what you have.",
          "mostra": "I am with a sore throat.",
          "r": "I have a sore throat.",
          "aceita": [],
          "d": "Dica: sintoma = <b>I have</b>, não <b>I am with</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/9f093e7d00b6/something-for-a-cold/img/live-capa.webp",
      "leg": "A quiet pharmacy at night",
      "pede": "Look at the picture: a pharmacy. Write 2 or 3 sentences: what you have, and what you want. Use <b>this, that, these</b> or <b>those</b>.",
      "ph": "I have a cold. I want …",
      "ex": "I have a cold. Do you have something for a cold? I want these lozenges, please."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you take at home when you have a cold?",
          "ph": "I drink … / I take …",
          "ex": "I drink hot tea with honey."
        },
        {
          "q": "Look around you. What is this near you? What is that far from you?",
          "ph": "This is … That is …",
          "ex": "This is my phone. That is my bag."
        }
      ]
    }
  }
};
