/* EERILY QUIET · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: colocações advérbio + adjetivo (eerily quiet, dimly lit, utterly exhausted, deeply sorry). C1: nenhum português. */
window.HW2 = {
  "id": "eerily-quiet",
  "titulo": "Eerily Quiet",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4bfc3ebb24c3/eerily-quiet/img/live-capa.webp",
  "alvo": "adverb + adjective collocations: the adverb chooses the adjective (eerily quiet, bitterly cold, dimly lit, faintly familiar, painfully slow, perfectly still); extreme adjectives take absolutely / utterly / completely (utterly exhausted), never very; gradable ones take very / extremely / deeply / highly (deeply sorry, highly unlikely), never absolutely; never eerie quiet, strongly cold, highly sorry",
  "abrir": "Think of a place that feels different at night. What changes?",
  "fecho": "The adverb chooses the adjective: <b>eerily quiet, bitterly cold, dimly lit, faintly familiar, painfully slow</b>. Extreme adjectives (<i>exhausted, freezing</i>) take <b>absolutely / utterly / completely</b>, never <i>very</i>. Gradable ones take <b>very / extremely / deeply / highly</b>: <i>deeply sorry, highly unlikely</i>. And the adverb needs <b>-ly</b>: <i>eerily</i>, not <i>eerie</i> quiet.",
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
  "rate": "-8%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo in a cottage during a storm. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/4bfc3ebb24c3/eerily-quiet/img/live-quarto.webp",
      "leg": "A dark doorway and one small light",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the whole street is eerily quiet. No cars, no voices, nothing."
        },
        {
          "quem": "leo",
          "t": "It's the storm. The power has been out for an hour, and the hall is dimly lit by one candle."
        },
        {
          "quem": "mia",
          "t": "Honestly, it's absolutely freezing in here too. I'm utterly exhausted, and I can't even sleep."
        },
        {
          "quem": "leo",
          "t": "Well, the house is perfectly still. It's oddly peaceful, if you ask me."
        },
        {
          "quem": "mia",
          "t": "Peaceful? That creak upstairs sounded faintly familiar, like my grandmother's old stairs."
        },
        {
          "quem": "leo",
          "t": "Faintly familiar, ha. You've been reading too many ghost stories. It's just the wind."
        },
        {
          "quem": "mia",
          "t": "The wind is bitterly cold, I'll give you that. And the old clock is painfully slow."
        },
        {
          "quem": "leo",
          "t": "It stopped at four. Look, I'm deeply sorry I picked this cottage, but I'm very glad you came."
        },
        {
          "quem": "mia",
          "t": "Don't be sorry. It's highly unlikely we'll meet a ghost, and the tea is hot."
        }
      ],
      "perguntas": [
        {
          "q": "How does Mia describe the street?",
          "op": [
            "Eerily quiet",
            "Very noisy",
            "Brightly lit"
          ],
          "a": 0,
          "por": "The whole street is eerily quiet."
        },
        {
          "q": "What is the hall lit by?",
          "op": [
            "One candle",
            "A strong lamp",
            "The moon"
          ],
          "a": 0,
          "por": "The hall is dimly lit by one candle."
        },
        {
          "q": "What is Leo deeply sorry about?",
          "op": [
            "Choosing this cottage",
            "Losing the key",
            "Waking Mia up"
          ],
          "a": 0,
          "por": "I'm deeply sorry I picked this cottage."
        }
      ]
    },
    "out": {
      "sub": "Three atmospheric sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "The village was eerily quiet after the storm.",
          "img": "https://wolf-labs.pages.dev/p/4bfc3ebb24c3/eerily-quiet/img/live-tempestade.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The hall was dimly lit by a single candle.",
          "img": "https://wolf-labs.pages.dev/p/4bfc3ebb24c3/eerily-quiet/img/live-vela.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'm utterly exhausted, and it's absolutely freezing.",
          "img": "https://wolf-labs.pages.dev/p/4bfc3ebb24c3/eerily-quiet/img/live-mesa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "The adverb that belongs. Four quick ones.",
      "regra": "The adverb chooses the adjective · extreme adjective + <b>absolutely / utterly / completely</b> · gradable + <b>very / deeply / highly</b> · the adverb needs <b>-ly</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The hall was dimly lit by one candle.",
          "aceita": [],
          "d": "Hint: <b>dimly lit</b> is a fixed pair, then <b>by</b> + the light."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The street was eerie quiet.",
          "r": "The street was eerily quiet.",
          "aceita": [],
          "d": "Hint: the adverb needs <b>-ly</b>: <b>eerily</b> quiet."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We were very exhausted after the trip.",
          "r": "We were utterly exhausted after the trip.",
          "aceita": [
            "We were absolutely exhausted after the trip.",
            "We were completely exhausted after the trip."
          ],
          "d": "Hint: <b>exhausted</b> is already extreme, so <b>utterly</b>, not <i>very</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm highly sorry for the noise.",
          "r": "I'm deeply sorry for the noise.",
          "aceita": [
            "I'm terribly sorry for the noise.",
            "I'm very sorry for the noise.",
            "I'm so sorry for the noise.",
            "I'm extremely sorry for the noise."
          ],
          "d": "Hint: feelings go with <b>deeply</b> (<i>deeply sorry</i>). <i>Highly</i> is for <i>unlikely, recommended</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/4bfc3ebb24c3/eerily-quiet/img/live-pagina.webp",
      "leg": "A typewriter and two candles",
      "pede": "Look at the picture: a typewriter and two candles. Write 2 or 3 sentences opening a spooky but gentle story. Use adverb + adjective pairs such as <b>eerily quiet</b>, <b>dimly lit</b>, <b>bitterly cold</b> or <b>utterly alone</b>.",
      "ph": "The old library was eerily …",
      "ex": "The old library was eerily quiet. A single lamp dimly lit the shelves, and the air was bitterly cold. I was utterly alone."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Where in your life is it eerily quiet? Describe a place you know.",
          "ph": "… is eerily quiet at night.",
          "ex": "My office at night is eerily quiet, and the corridor is dimly lit."
        },
        {
          "q": "What are you deeply grateful for? What is highly unlikely to happen to you?",
          "ph": "I'm deeply … It's highly unlikely that …",
          "ex": "I'm deeply grateful for my friends. It's highly unlikely that I will ever go skydiving."
        }
      ]
    }
  }
};
