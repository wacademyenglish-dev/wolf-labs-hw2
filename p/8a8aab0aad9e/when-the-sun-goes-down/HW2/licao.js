/* WHEN THE SUN GOES DOWN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: zero conditional: if / when + presente, presente. Filme: falas originais, no mundo da aula, sem violência. B1: nenhum português. */
window.HW2 = {
  "id": "when-the-sun-goes-down",
  "titulo": "When the Sun Goes Down",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/8a8aab0aad9e/when-the-sun-goes-down/img/live-capa.webp",
  "alvo": "zero conditional: if / when + present, present for a rule that is always true (When the sun goes down, the streets get empty); he / she / it takes -s; never will after if or when; never a past tense in a rule",
  "abrir": "What happens in your city when the sun goes down?",
  "fecho": "<b>if / when + present, present</b> = a rule that is always true: <i>When the sun goes down, the streets get empty.</i> No <b>will</b> after <i>if</i> or <i>when</i>. He, she, it, the sun: the <b>-s</b>: <i>goes</i>. The rule stays in the present: never <i>If you opened the door, they come</i>.",
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
      "sub": "Mia is new in a small town. Leo tells her the rules. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/8a8aab0aad9e/when-the-sun-goes-down/img/live-capa.webp",
      "leg": "A small town street at sunset",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you're new in town, so listen. Here, the rules start when the sun goes down."
        },
        {
          "quem": "mia",
          "t": "What happens when the sun goes down?"
        },
        {
          "quem": "leo",
          "t": "When the sun goes down, the streets get empty. Everybody goes home."
        },
        {
          "quem": "mia",
          "t": "And if someone stays outside?"
        },
        {
          "quem": "leo",
          "t": "If you stay outside, you get lost in the dark. The road looks the same in every direction."
        },
        {
          "quem": "mia",
          "t": "That's scary. What if a stranger knocks on my door?"
        },
        {
          "quem": "leo",
          "t": "If a stranger knocks, you don't open it. You ask for the town password."
        },
        {
          "quem": "mia",
          "t": "And what about the little stone on my window?"
        },
        {
          "quem": "leo",
          "t": "That's the charm. If it hangs by the window, you sleep well. Every house has one."
        }
      ],
      "perguntas": [
        {
          "q": "What happens when the sun goes down?",
          "op": [
            "The streets get empty",
            "Everybody goes to the park",
            "The shops open"
          ],
          "a": 0,
          "por": "When the sun goes down, the streets get empty."
        },
        {
          "q": "What do you do if a stranger knocks?",
          "op": [
            "You don't open the door",
            "You open the door",
            "You call Leo"
          ],
          "a": 0,
          "por": "If a stranger knocks, you don't open it."
        },
        {
          "q": "What helps you sleep well?",
          "op": [
            "The charm by the window",
            "A loud radio",
            "A long walk"
          ],
          "a": 0,
          "por": "If it hangs by the window, you sleep well."
        }
      ]
    },
    "out": {
      "sub": "Three rules of a small town. Hear it, then say it.",
      "frases": [
        {
          "t": "When the sun goes down, the streets get quiet.",
          "img": "https://wolf-labs.pages.dev/p/8a8aab0aad9e/when-the-sun-goes-down/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If you drive on this road at night, you feel alone.",
          "img": "https://wolf-labs.pages.dev/p/8a8aab0aad9e/when-the-sun-goes-down/img/live-estrada.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If the fog comes in, the forest disappears.",
          "img": "https://wolf-labs.pages.dev/p/8a8aab0aad9e/when-the-sun-goes-down/img/live-floresta.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "If / when + present, present. Four quick ones.",
      "regra": "<b>if / when</b> + present, present · no <b>will</b> after if / when · he / she / it + <b>-s</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "When the lights go out, the town sleeps.",
          "aceita": [],
          "d": "Hint: <b>when</b> + present, then present. No will."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "When the sun will go down, we go home.",
          "r": "When the sun goes down, we go home.",
          "aceita": [],
          "d": "Hint: no <b>will</b> after when. Use the present: <i>goes</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If she stay outside, she gets cold.",
          "r": "If she stays outside, she gets cold.",
          "aceita": [],
          "d": "Hint: she / he / it takes -s: <b>stays</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If it rains, the road became slippery.",
          "r": "If it rains, the road gets slippery.",
          "aceita": [
            "If it rains, the road becomes slippery."
          ],
          "d": "Hint: a rule that is always true stays in the present, not the past."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/8a8aab0aad9e/when-the-sun-goes-down/img/live-estrada.webp",
      "leg": "A dark road beside a forest",
      "pede": "Look at the picture: a dark road beside a forest. Write 2 or 3 rules for a place you know (a town, a house, a school). Use <b>if / when + present, present</b>.",
      "ph": "When it …, I … If you …, …",
      "ex": "When it rains, the street floods. If you go out at night, you take a flashlight. If I'm tired, I go to bed early."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What happens in your city when it rains a lot?",
          "ph": "When it rains a lot, …",
          "ex": "When it rains a lot, the streets flood and the traffic gets terrible."
        },
        {
          "q": "What do you do if you can't sleep?",
          "ph": "If I can't sleep, I …",
          "ex": "If I can't sleep, I drink water and read a book."
        }
      ]
    }
  }
};
