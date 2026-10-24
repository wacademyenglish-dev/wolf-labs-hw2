/* YOUR NEXT STOP · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: concessão e contraste (although, even though, despite, however, whereas). B2: nenhum português na lição. */
window.HW2 = {
  "id": "your-next-stop",
  "titulo": "Your Next Stop",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4cf26914a85f/your-next-stop/img/live-b.webp",
  "alvo": "concession and contrast to defend a choice: although / even though + sentence, despite + noun or -ing (never 'despite of'), however, whereas; never 'although ..., but'",
  "abrir": "Where would you live next, and what is the biggest con?",
  "fecho": "<b>Although</b> / <b>even though</b> + a full sentence: <i>Although it's expensive, I want to go.</i> No <i>but</i> in the same sentence. <b>Despite</b> + noun or -ing, never <i>despite of</i>: <i>Despite the rain, I loved it. Despite being far, it's my dream.</i> <b>However</b> starts a new sentence. <b>Whereas</b> sets two things side by side.",
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
      "sub": "Mia chooses her next stop and Leo asks her why. A new scene, about one minute.",
      "leg": "The tribunal room, before the vote",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, so where is your next stop?"
        },
        {
          "quem": "mia",
          "t": "I'm choosing between Dublin and Lisbon. Although Dublin is rainy, I love the people there."
        },
        {
          "quem": "leo",
          "t": "And Lisbon?"
        },
        {
          "quem": "mia",
          "t": "Lisbon is sunny, whereas Dublin is cold and grey. However, Lisbon is a harder place to find work in English."
        },
        {
          "quem": "leo",
          "t": "Is it expensive?"
        },
        {
          "quem": "mia",
          "t": "Dublin is. Even though I have saved for a year, my budget is tight. Despite the cost, I think I'll choose Dublin."
        },
        {
          "quem": "leo",
          "t": "Why?"
        },
        {
          "quem": "mia",
          "t": "Despite being far from Brazil, it feels like a second home. And my friends will judge me if I choose the easy option!"
        },
        {
          "quem": "leo",
          "t": "Then defend it to them. Three old friends from the road will vote on it."
        },
        {
          "quem": "mia",
          "t": "Fair enough. I'll tell them that although it isn't perfect, it is right for me."
        }
      ],
      "perguntas": [
        {
          "q": "Which city does Mia say is sunny?",
          "op": [
            "Dublin",
            "Lisbon",
            "Neither"
          ],
          "a": 1,
          "por": "Lisbon is sunny, whereas Dublin is cold and grey."
        },
        {
          "q": "What does Mia say about her budget?",
          "op": [
            "It is tight, even though she saved for a year",
            "It is huge",
            "She has no budget"
          ],
          "a": 0,
          "por": "Even though I have saved for a year, my budget is tight."
        },
        {
          "q": "Who will vote on her choice?",
          "op": [
            "Three old friends from the road",
            "Her boss",
            "Her family"
          ],
          "a": 0,
          "por": "Three old friends from the road will vote on it."
        }
      ],
      "audio": "audio/listen.mp3",
      "img": "https://wolf-labs.pages.dev/p/4cf26914a85f/your-next-stop/img/live-b.webp"
    },
    "out": {
      "sub": "Three sentences from Mia. Hear it, then say it.",
      "frases": [
        {
          "t": "Although Dublin is rainy, I love the people there.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/4cf26914a85f/your-next-stop/img/live-b.webp"
        },
        {
          "t": "Despite the cost, I think I'll choose Dublin.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/4cf26914a85f/your-next-stop/img/live-b.webp"
        },
        {
          "t": "Lisbon is sunny, whereas Dublin is cold and grey.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/4cf26914a85f/your-next-stop/img/live-b.webp"
        }
      ]
    },
    "focus": {
      "sub": "Although, despite, however. Four quick ones.",
      "regra": "<b>although / even though</b> + sentence · <b>despite</b> + noun / -ing (no <i>of</i>) · no <i>but</i> after although · <b>however</b> = new sentence.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Although the flight is expensive, I still want to go.",
          "aceita": [],
          "d": "Hint: <b>although</b> + a full sentence, then a comma."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Despite of the rain, I loved Galway.",
          "r": "Despite the rain, I loved Galway.",
          "aceita": [],
          "d": "Hint: <b>despite</b> never takes <i>of</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is too many.",
          "mostra": "Although it's expensive, but I want to go.",
          "r": "Although it's expensive, I want to go.",
          "aceita": [],
          "d": "Hint: <b>although</b> already contrasts: no <i>but</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Even I loved Dublin, I want something new.",
          "r": "Even though I loved Dublin, I want something new.",
          "aceita": [],
          "d": "Hint: <b>even though</b> + sentence."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Look at the picture: an empty tribunal. Three friends will judge your next stop. Write 2 or 3 sentences defending a place you would like to live. Use <b>although</b>, <b>despite</b> or <b>however</b>.",
      "ph": "Although …, I would like to …",
      "ex": "Although Lisbon is far, I would love to live there. Despite the language, I think I could learn it fast. However, I would need a job first.",
      "img": "https://wolf-labs.pages.dev/p/4cf26914a85f/your-next-stop/img/live-b.webp",
      "leg": "An empty tribunal room"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Where would you like to live next? Give one reason, and accept one con.",
          "ph": "Although …, I'd like to …",
          "ex": "Although it is expensive, I would like to live in Dublin because I love the people."
        },
        {
          "q": "Say one pro and one con of your own city. Use whereas.",
          "ph": "…, whereas …",
          "ex": "São Paulo is busy, whereas Florianópolis is relaxed."
        }
      ]
    }
  }
};
