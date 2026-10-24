/* THE CHARGE I DIDN'T MAKE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: phrasal verbs do telefone e posição do objeto. B2: nenhum português. Nenhum número de cartão real. Imagens live-* (todas escuras). */
window.HW2 = {
  "id": "the-charge-i-didnt-make",
  "titulo": "The Charge I Didn't Make",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/8b36f3849d13/the-charge-i-didnt-make/img/live-capa.webp",
  "alvo": "phone phrasal verbs and where the object goes: hold on · put me through (to) · call you back · look into it · get through · cut off · sort it out; a pronoun goes in the middle of separable verbs (put me through, call you back) and after the particle in look into it; never put through me, call back you, look it into, hang off",
  "abrir": "What is the worst phone call you remember?",
  "fecho": "A pronoun goes <b>in the middle</b>: <i>put me through, call you back.</i> After <b>look into</b>, the object follows: <i>look into it.</i> Without an object: <i>hold on, get through, got cut off, hang up.</i> Never <i>put through me</i>, <i>call back you</i>, <i>look it into</i>, <i>hang off</i>.",
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
      "sub": "Mia tells Leo about a strange charge on her card. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/8b36f3849d13/the-charge-i-didnt-make/img/live-b.webp",
      "leg": "An old phone under a lamp",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you look relieved. Did you solve the card problem?"
        },
        {
          "quem": "mia",
          "t": "Finally. I couldn't get through all morning, and then the call got cut off."
        },
        {
          "quem": "leo",
          "t": "Oh no. What did you do?"
        },
        {
          "quem": "mia",
          "t": "I called again. A woman said, please hold on, and then she put me through to the fraud team."
        },
        {
          "quem": "leo",
          "t": "Did they believe you? The charge was almost nine hundred dollars, right?"
        },
        {
          "quem": "mia",
          "t": "Yes, from a shop in New Jersey. The agent said they would look into it today."
        },
        {
          "quem": "leo",
          "t": "And then?"
        },
        {
          "quem": "mia",
          "t": "He asked if he could call me back in an hour. And he did. He called me back at noon."
        },
        {
          "quem": "leo",
          "t": "Great! So did they sort it out?"
        },
        {
          "quem": "mia",
          "t": "Yes. I got a temporary credit, and he told me not to worry."
        }
      ],
      "perguntas": [
        {
          "q": "Why did the first call end?",
          "op": [
            "It got cut off",
            "Mia hung up",
            "The agent left"
          ],
          "a": 0,
          "por": "I couldn't get through all morning, and then the call got cut off."
        },
        {
          "q": "Where did the woman put Mia through to?",
          "op": [
            "The fraud team",
            "A shop in New Jersey",
            "The manager"
          ],
          "a": 0,
          "por": "She put me through to the fraud team."
        },
        {
          "q": "What did the agent do at noon?",
          "op": [
            "He called Mia back",
            "He hung up",
            "He cut her off"
          ],
          "a": 0,
          "por": "He called me back at noon."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from a card call. Hear it, then say it.",
      "frases": [
        {
          "t": "Could you put me through to the fraud team?",
          "img": "https://wolf-labs.pages.dev/p/8b36f3849d13/the-charge-i-didnt-make/img/live-a.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We will look into it today, and I will call you back.",
          "img": "https://wolf-labs.pages.dev/p/8b36f3849d13/the-charge-i-didnt-make/img/live-b.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I couldn't get through, and then we got cut off.",
          "img": "https://wolf-labs.pages.dev/p/8b36f3849d13/the-charge-i-didnt-make/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Where does the pronoun go? Four quick ones.",
      "regra": "<b>put me through</b> · <b>call you back</b> · <b>look into it</b> · <b>hold on</b>, <b>get through</b>, <b>cut off</b>, <b>sort out</b> · the pronoun goes in the middle.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Please hold on while I look into it.",
          "aceita": [],
          "d": "Hint: <b>hold on</b> = wait; <b>look into it</b> = investigate."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the pronoun is in the wrong place.",
          "mostra": "Can you put through me to fraud?",
          "r": "Can you put me through to fraud?",
          "aceita": [],
          "d": "Hint: <b>put me through</b>, with the pronoun in the middle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the pronoun is in the wrong place.",
          "mostra": "I will call back you tomorrow.",
          "r": "I will call you back tomorrow.",
          "aceita": [
            "I'll call you back tomorrow."
          ],
          "d": "Hint: <b>call you back</b>, with the pronoun in the middle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "We will look it into today.",
          "r": "We will look into it today.",
          "aceita": [
            "We'll look into it today."
          ],
          "d": "Hint: <b>look into</b> stays together, then <b>it</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/8b36f3849d13/the-charge-i-didnt-make/img/live-b.webp",
      "leg": "An old phone under a lamp",
      "pede": "Look at the picture: an old desk phone under a lamp. Write 2 or 3 sentences about a phone call that went well or badly. Use <b>put me through</b>, <b>call me back</b>, <b>look into it</b>, <b>get through</b>, <b>cut off</b> or <b>sort it out</b>.",
      "ph": "I couldn't get through …",
      "ex": "I couldn't get through to the bank all morning. Finally, they put me through to a kind agent, and he sorted it out."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Tell me about a time you couldn't get through to someone. What happened?",
          "ph": "I couldn't get through to … because …",
          "ex": "I couldn't get through to my internet company, so I wrote to them."
        },
        {
          "q": "Who do you need to call back this week? Why?",
          "ph": "I need to call … back because …",
          "ex": "I need to call my dentist back. I missed his call yesterday."
        }
      ]
    }
  }
};
