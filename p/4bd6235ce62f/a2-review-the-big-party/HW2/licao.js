/* THE BIG PARTY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Revisão A2: mistura das unidades da aula. A2: dicas em português só nas notas (d). Sem imagens. */
window.HW2_ARTIGO_CONTA = true;
window.HW2 = {
  "id": "a2-review-the-big-party",
  "titulo": "The Big Party",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4bd6235ce62f/a2-review-the-big-party/img/live-capa.webp",
  "alvo": "Unit 4 review, how much, how many, who: a few / many (countable), a little / much (uncountable), a lot of, too much / too many, enough, some / any, nobody / anything (one negative only), a / an / the",
  "abrir": "What do you bring to a party?",
  "fecho": "Countable: <b>a few, many, too many</b>. Uncountable: <b>a little, much, too much</b>. <b>Enough</b> goes before the noun. Questions and no: <b>any / anything</b>. One negative only: <i>There isn't anything</i>. <b>An</b> before a vowel sound.",
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
      "sub": "Mia and Leo plan a birthday party. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/4bd6235ce62f/a2-review-the-big-party/img/live-capa.webp",
      "leg": "Getting ready for the party",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "How many cups do we have, Mia?"
        },
        {
          "quem": "mia",
          "t": "Only a few. We need more. And we have too much rice, but not enough chairs."
        },
        {
          "quem": "leo",
          "t": "How much ice do we have?"
        },
        {
          "quem": "mia",
          "t": "Just a little. And there isn't any juice."
        },
        {
          "quem": "leo",
          "t": "Is there anything for vegetarians?"
        },
        {
          "quem": "mia",
          "t": "Yes, a lot of salad. And an apple cake."
        },
        {
          "quem": "leo",
          "t": "Is anybody bringing music?"
        },
        {
          "quem": "mia",
          "t": "Nobody yet. I'll ask everybody."
        },
        {
          "quem": "leo",
          "t": "Good. All the guests are coming at eight."
        },
        {
          "quem": "mia",
          "t": "Perfect. Let's make it a great party!"
        }
      ],
      "perguntas": [
        {
          "q": "How many cups do they have?",
          "op": [
            "A lot",
            "Only a few",
            "None"
          ],
          "a": 1,
          "por": "Only a few. We need more."
        },
        {
          "q": "Is there any juice?",
          "op": [
            "Yes, a lot",
            "Just a little",
            "No, there isn't any"
          ],
          "a": 2,
          "por": "There isn't any juice."
        },
        {
          "q": "What do they not have enough of?",
          "op": [
            "Chairs",
            "Rice",
            "Salad"
          ],
          "a": 0,
          "por": "Too much rice, but not enough chairs."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the party. Hear it, then say it.",
      "frases": [
        {
          "t": "We have a few cups and a little ice.", "img": "https://wolf-labs.pages.dev/p/4bd6235ce62f/a2-review-the-big-party/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "There isn't any juice, and nobody has music.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "There are too many people and not enough chairs.", "img": "https://wolf-labs.pages.dev/p/4bd6235ce62f/a2-review-the-big-party/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "few / little, too much / many, any, an. Four quick ones.",
      "regra": "<b>many / a few / too many</b> + things you count · <b>much / a little / too much</b> + things you do not · <b>any</b> in no and questions · <b>an</b> before a, e, i, o, u.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "How much ice do we have?",
          "aceita": [],
          "d": "Dica: <b>ice</b> não se conta, então: <b>How much</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: people, or people?",
          "mostra": "We have too much people.",
          "r": "We have too many people.",
          "aceita": [],
          "d": "Dica: pessoas se contam: <b>too many</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: only one negative.",
          "mostra": "There isn't nothing to eat.",
          "r": "There isn't anything to eat.",
          "aceita": [],
          "d": "Dica: uma negativa só: <b>isn't anything</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: a or an?",
          "mostra": "She brought a apple cake.",
          "r": "She brought an apple cake.",
          "aceita": [],
          "d": "Dica: antes de som de vogal: <b>an</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Write 2 or 3 sentences about a party. Use <b>a few</b> or <b>a little</b>, and <b>too much</b>, <b>too many</b> or <b>enough</b>.",
      "ph": "We have a few …",
      "ex": "We have a few cups and a little ice. There is too much rice, but there aren't enough chairs."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How many people do you invite to a party?",
          "ph": "I invite …",
          "ex": "I invite a few close friends."
        },
        {
          "q": "What do you bring to a party?",
          "ph": "I bring …",
          "ex": "I bring a lot of snacks and some juice."
        }
      ]
    }
  }
};
