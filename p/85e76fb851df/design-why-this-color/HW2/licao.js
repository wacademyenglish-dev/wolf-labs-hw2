/* WHY THIS COLOR? · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: too / enough / feels / looks like / -ish. Curso de Design (B1+): nenhum português. */
window.HW2 = {
  "id": "why-this-color",
  "titulo": "Why This Color?",
  "nivel": "B1",
  "minutos": 10,
  "capa": "../img/live-conversa.webp",
  "alvo": "describing a design precisely: too + adjective (a problem), adjective + enough (not big enough), feels / looks + adjective, feels / looks like + noun, -ish for color",
  "abrir": "Look around you. What color do you see the most?",
  "fecho": "<b>too</b> + adjective = a problem: <i>The text is too small.</i> Adjective + <b>enough</b>: <i>It is not big enough.</i> <b>feels / looks</b> + adjective: <i>It feels calm.</i> <b>feels / looks like</b> + noun: <i>It looks like a circus.</i> <b>-ish</b> = a little: <i>a bluish grey.</i>",
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
      "sub": "Mia and Leo choose colors for a café sign. A new scene, about one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "Jars of paint on a shelf",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, which one do you prefer for the café sign? The yellow or the grey?"
        },
        {
          "quem": "leo",
          "t": "The yellow looks too bright. It feels like a warning sign."
        },
        {
          "quem": "mia",
          "t": "True. The grey is calm, but the contrast isn't strong enough. People can't read the name from the street."
        },
        {
          "quem": "leo",
          "t": "What about a warmer grey? Something brownish?"
        },
        {
          "quem": "mia",
          "t": "A brownish grey with cream letters. Cream is a neutral, so it stays quiet and lets the main color stand out."
        },
        {
          "quem": "leo",
          "t": "Is that enough color? I want something that gets noticed."
        },
        {
          "quem": "mia",
          "t": "We can add one accent, a small orange. Not the whole sign, just the cup in the logo."
        },
        {
          "quem": "leo",
          "t": "I like that. The sign feels warm and calm now."
        },
        {
          "quem": "mia",
          "t": "And the letters are big enough to read from the other side of the street."
        },
        {
          "quem": "leo",
          "t": "Perfect. Let's order the paint."
        }
      ],
      "perguntas": [
        {
          "q": "Why does Leo reject the yellow?",
          "op": [
            "It looks too bright",
            "It looks too dark",
            "It feels too quiet"
          ],
          "a": 0,
          "por": "The yellow looks too bright."
        },
        {
          "q": "What is the problem with the grey?",
          "op": [
            "The contrast isn't strong enough",
            "It looks too warm",
            "It is too bright"
          ],
          "a": 0,
          "por": "The grey is calm, but the contrast isn't strong enough."
        },
        {
          "q": "Where will the orange go?",
          "op": [
            "Only on the cup in the logo",
            "On the whole sign",
            "On the street"
          ],
          "a": 0,
          "por": "Not the whole sign, just the cup in the logo."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about color. Hear it, then say it.",
      "frases": [
        {
          "t": "The yellow looks too bright for a café.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The contrast is not strong enough.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It feels warm and calm, like a quiet morning.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "too, enough, looks like. Four quick ones.",
      "regra": "<b>too</b> + adjective · adjective + <b>enough</b> (not <i>enough big</i>) · <b>looks like</b> + noun · <b>too</b> never takes <i>much</i> before an adjective.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The contrast is not strong enough.",
          "aceita": [],
          "d": "Hint: adjective + <b>enough</b>: strong enough."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is in the wrong place.",
          "mostra": "The text is not enough big.",
          "r": "The text is not big enough.",
          "aceita": [
            "The text isn't big enough."
          ],
          "d": "Hint: <b>enough</b> comes after the adjective: big enough."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "This poster looks a circus.",
          "r": "This poster looks like a circus.",
          "aceita": [],
          "d": "Hint: <b>looks like</b> + noun."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The screen is too much bright.",
          "r": "The screen is too bright.",
          "aceita": [],
          "d": "Hint: <b>too</b> + adjective, without <i>much</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-conversa.webp",
      "leg": "Jars of paint on a shelf",
      "pede": "Look at the picture: shelves with jars of paint in many colors. Choose two colors for a poster or a room and describe them. Use <b>feels</b>, <b>looks</b>, <b>too</b> or <b>enough</b>.",
      "ph": "I would choose … because it feels …",
      "ex": "I would choose a bluish grey and a warm orange. The grey feels calm, and the orange is bright enough to stand out."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Which color feels calm to you? Which color looks too loud?",
          "ph": "… feels calm. … looks too …",
          "ex": "Light blue feels calm to me. Bright red looks too loud."
        },
        {
          "q": "Look at your room or your phone screen. Is there enough light? Is anything too dark or too bright?",
          "ph": "There is enough … but … is too …",
          "ex": "There is enough light in the morning, but my desk is too dark at night."
        }
      ]
    }
  }
};
