/* IF IT RAINS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: if + present simple. A2: dicas em inglês simples. */
window.HW2 = {
  "id": "if-it-rains",
  "titulo": "If It Rains",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/079070bd270b/if-it-rains/img/live-capa.webp",
  "alvo": "if + present simple, then the instruction (If it rains, close the door); comma when if comes first; never will after if",
  "abrir": "What do you do if it rains on the weekend?",
  "fecho": "<b>If + present</b>, then the instruction: <i>If it rains, close the door.</i> Never <i>will</i> after if: not <i>if it will rain</i>. When if comes first, use a comma.",
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
      "sub": "Mia and Leo talk about a friend's flat. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/079070bd270b/if-it-rains/img/live-capa.webp",
      "leg": "A balcony and an umbrella at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, what are Nina's instructions for the flat?"
        },
        {
          "quem": "mia",
          "t": "If it rains, I close the balcony door."
        },
        {
          "quem": "leo",
          "t": "And the dog? Does he bark?"
        },
        {
          "quem": "mia",
          "t": "Yes, at night. But if he barks, I don't worry. He talks to the cat next door."
        },
        {
          "quem": "leo",
          "t": "What if the plants look sad?"
        },
        {
          "quem": "mia",
          "t": "If they look sad, I give them a little water."
        },
        {
          "quem": "leo",
          "t": "And the washing machine?"
        },
        {
          "quem": "mia",
          "t": "If it makes a noise, I turn it off and call you."
        },
        {
          "quem": "leo",
          "t": "Great. And if you are hungry?"
        },
        {
          "quem": "mia",
          "t": "There is a cake in the fridge. If I'm hungry, I eat it!"
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia do if it rains?",
          "op": [
            "She closes the balcony door",
            "She takes the dog out",
            "She calls Nina"
          ],
          "a": 0,
          "por": "If it rains, I close the balcony door."
        },
        {
          "q": "Why does the dog bark at night?",
          "op": [
            "He talks to the cat next door",
            "He is hungry",
            "He is afraid of rain"
          ],
          "a": 0,
          "por": "He talks to the cat next door."
        },
        {
          "q": "What does Mia do if the washing machine makes a noise?",
          "op": [
            "She turns it off and calls Leo",
            "She gives it water",
            "She eats the cake"
          ],
          "a": 0,
          "por": "I turn it off and call you."
        }
      ]
    },
    "out": {
      "sub": "Three instructions for a friend. Hear it, then say it.",
      "frases": [
        {
          "t": "If it rains, close the balcony door.",
          "img": "https://wolf-labs.pages.dev/p/079070bd270b/if-it-rains/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If the dog barks, don't worry.",
          "img": "https://wolf-labs.pages.dev/p/079070bd270b/if-it-rains/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If you are hungry, eat the cake.",
          "img": "https://wolf-labs.pages.dev/p/079070bd270b/if-it-rains/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "if + present. Four quick ones.",
      "regra": "<b>If + present simple</b>, then the instruction · never <b>will</b> after if · comma when if comes first.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If the plants look sad, give them water.",
          "aceita": [],
          "d": "Hint: <b>If</b> + present, comma, then the instruction."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: no will after if.",
          "mostra": "If it will rain, take the umbrella.",
          "r": "If it rains, take the umbrella.",
          "aceita": [
            "If it rains, take an umbrella."
          ],
          "d": "Hint: after <b>if</b>, use the present: <b>rains</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If the dog is hungry, gives him food.",
          "r": "If the dog is hungry, give him food.",
          "aceita": [
            "If the dog is hungry, feed him."
          ],
          "d": "Hint: the instruction uses the plain verb: <b>give</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "If is very hot, open the windows.",
          "r": "If it is very hot, open the windows.",
          "aceita": [
            "If it's very hot, open the windows."
          ],
          "d": "Hint: weather needs <b>it</b>: if <b>it</b> is hot."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/079070bd270b/if-it-rains/img/live-conversa.webp",
      "leg": "A watering can, a leash and keys",
      "pede": "Look at the picture: a watering can, a leash and keys. A friend stays in your home. Write 2 or 3 sentences with <b>if</b>: what should your friend do?",
      "ph": "If you are cold, …",
      "ex": "If you are cold, the blankets are in the closet. If the cat meows, give her some food."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you do if it rains on the weekend?",
          "ph": "If it rains, I …",
          "ex": "If it rains, I stay home and watch a film."
        },
        {
          "q": "A friend is staying at your home. What should they do if they are hungry?",
          "ph": "If you are hungry, …",
          "ex": "If you are hungry, eat the cake in the fridge."
        }
      ]
    }
  }
};
