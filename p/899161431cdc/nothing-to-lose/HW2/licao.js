/* NOTHING TO LOSE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: something / anything / nothing. B1: nenhum português. Só live-capa (escura). */
window.HW2 = {
  "id": "nothing-to-lose",
  "titulo": "Nothing to Lose",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/899161431cdc/nothing-to-lose/img/live-capa.jpg",
  "alvo": "something / anything / nothing: something in positive sentences, anything in negatives and questions, nothing alone (not + anything); one negative only, never don't have nothing; nothing to + verb",
  "abrir": "What is something you want to try this year?",
  "fecho": "<b>something</b> in a positive sentence: <i>I want to try something new.</i> <b>anything</b> after not and in questions: <i>I don't have anything to lose. Is there anything in your bag?</i> <b>nothing</b> alone: <i>I have nothing to lose.</i> One negative only: never <i>don't have nothing</i>.",
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
      "sub": "Mia and Leo the night before an audition. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/899161431cdc/nothing-to-lose/img/live-capa.jpg",
      "leg": "A racket and a tennis ball against an old brick wall",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you look nervous. What's up?"
        },
        {
          "quem": "mia",
          "t": "I have an audition tomorrow, and I don't have anything to wear."
        },
        {
          "quem": "leo",
          "t": "Nothing? Your wardrobe is full."
        },
        {
          "quem": "mia",
          "t": "It's full, but there's nothing I like. Is there anything in your wardrobe I can borrow?"
        },
        {
          "quem": "leo",
          "t": "Let me think. I have something blue. Do you want to try it?"
        },
        {
          "quem": "mia",
          "t": "Yes, please! What are you wearing to the show?"
        },
        {
          "quem": "leo",
          "t": "I didn't buy anything new. I have nothing to lose, so I'm wearing my old jeans."
        },
        {
          "quem": "mia",
          "t": "You're right. I want to try something different, a red jacket, just for fun."
        },
        {
          "quem": "leo",
          "t": "Great idea. Is there anything else you need?"
        },
        {
          "quem": "mia",
          "t": "Just something to eat. I didn't eat anything today."
        }
      ],
      "perguntas": [
        {
          "q": "Why is Mia nervous?",
          "op": [
            "She has an audition and nothing to wear",
            "She lost her phone",
            "She has nothing to eat"
          ],
          "a": 0,
          "por": "I have an audition tomorrow, and I don't have anything to wear."
        },
        {
          "q": "What does Leo offer her?",
          "op": [
            "Something blue",
            "Something red",
            "Something old"
          ],
          "a": 0,
          "por": "I have something blue. Do you want to try it?"
        },
        {
          "q": "What does Mia say about food?",
          "op": [
            "She didn't eat anything today",
            "She ate something big",
            "She is not hungry"
          ],
          "a": 0,
          "por": "I didn't eat anything today."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with something, anything and nothing. Hear it, then say it.",
      "frases": [
        {
          "t": "I don't have anything to lose.",
          "img": "https://wolf-labs.pages.dev/p/899161431cdc/nothing-to-lose/img/live-capa.jpg",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Is there anything in your bag?",
          "img": "https://wolf-labs.pages.dev/p/899161431cdc/nothing-to-lose/img/live-capa.jpg",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I want to try something new this year.",
          "img": "https://wolf-labs.pages.dev/p/899161431cdc/nothing-to-lose/img/live-capa.jpg",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "something, anything or nothing? Four quick ones.",
      "regra": "<b>something</b> = positive · <b>anything</b> = negative and questions · <b>nothing</b> alone · one negative only.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "There isn't anything in the fridge.",
          "aceita": [],
          "d": "Hint: <b>isn't</b> already says no, so use <b>anything</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I don't have nothing to lose.",
          "r": "I don't have anything to lose.",
          "aceita": [
            "I have nothing to lose."
          ],
          "d": "Hint: one negative only: <b>don't ... anything</b>, or just <b>nothing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She didn't say nothing at the meeting.",
          "r": "She didn't say anything at the meeting.",
          "aceita": [
            "She said nothing at the meeting."
          ],
          "d": "Hint: <b>didn't</b> + <b>anything</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I want to try anything new this year.",
          "r": "I want to try something new this year.",
          "aceita": [],
          "d": "Hint: a positive sentence takes <b>something</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/899161431cdc/nothing-to-lose/img/live-capa.jpg",
      "leg": "A racket and a tennis ball against an old brick wall",
      "pede": "Look at the picture: a racket and a ball against an old brick wall, with nobody watching. Write 2 or 3 sentences about something you want to try this year. Use <b>something</b>, <b>anything</b> or <b>nothing</b>.",
      "ph": "This year I want to try something … I don't have anything to lose …",
      "ex": "This year I want to try something new: surfing. I don't have anything to lose, so why not? There is nothing to be afraid of."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Is there anything you want to try, but you are afraid of?",
          "ph": "I want to try … but …",
          "ex": "I want to try singing in public, but I am a little afraid."
        },
        {
          "q": "Did you eat anything special this week? Or buy anything new?",
          "ph": "I ate something … I didn't buy anything …",
          "ex": "I ate something delicious on Sunday, but I didn't buy anything new."
        }
      ]
    }
  }
};
