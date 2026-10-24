/* THE WIND BLOWS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: so / such ... that. Bíblia WEB: John 3:7 e 3:9 (Out loud), John 3:16 (Listen), 3:9 (Você). B1: nenhum português. */
window.HW2 = {
  "id": "the-wind-blows",
  "titulo": "The Wind Blows",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/a166bd9ca2eb/the-wind-blows/img/live-vento.webp",
  "alvo": "so / such ... that: so + adjective (so strong that), so many / so much + noun, such a + adjective + noun (such a strange answer that), such + plural / uncountable; never so a, never such + adjective alone, never very ... that",
  "abrir": "What is something so good that you want to tell everyone?",
  "fecho": "<b>so + adjective</b>: <i>so tired that</i>. <b>so many / so much + noun</b>: <i>so many questions that</i>. <b>such a + adjective + noun</b>: <i>such a long night that</i>. Never <i>so a</i>, never <i>such tired</i>, never <i>very … that</i>.",
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
      "sub": "Mia tells Leo about a night scene. She reads John 3:16. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/a166bd9ca2eb/the-wind-blows/img/live-janelas.webp",
      "leg": "Night windows, one light on",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, this passage is so interesting that I can't stop reading."
        },
        {
          "quem": "leo",
          "t": "Which one?"
        },
        {
          "quem": "mia",
          "t": "John three. A teacher named Nicodemus comes to Jesus at night. It's such a quiet scene that you can almost hear the wind."
        },
        {
          "quem": "leo",
          "t": "Why does he come at night?"
        },
        {
          "quem": "mia",
          "t": "Maybe he has so many questions that he can't wait until morning. And maybe he's a little afraid."
        },
        {
          "quem": "leo",
          "t": "And what does Jesus tell him?"
        },
        {
          "quem": "mia",
          "t": "Something so simple and so big. It's John 3:16. “For God so loved the world, that he gave his only born Son, that whoever believes in him should not perish, but have eternal life.”"
        },
        {
          "quem": "leo",
          "t": "Such a famous verse! I've heard it so many times, but tonight it sounds new."
        }
      ],
      "perguntas": [
        {
          "q": "Why does Mia say she can't stop reading?",
          "op": [
            "The passage is so interesting",
            "The book is so short",
            "The room is so warm"
          ],
          "a": 0,
          "por": "This passage is so interesting that I can't stop reading."
        },
        {
          "q": "What does Mia say about the scene?",
          "op": [
            "It's such a quiet scene that you can almost hear the wind",
            "It's such a loud scene that nobody can speak",
            "It's such a bright scene that you can't see"
          ],
          "a": 0,
          "por": "It's such a quiet scene that you can almost hear the wind."
        },
        {
          "q": "Why does Mia think Nicodemus comes at night?",
          "op": [
            "He has so many questions",
            "He has so much work",
            "He has so little time"
          ],
          "a": 0,
          "por": "Maybe he has so many questions that he can't wait until morning."
        }
      ]
    },
    "out": {
      "sub": "Three sentences. The second and third are from the Bible: John 3:7 and John 3:9 (World English Bible). Hear it, then say it.",
      "frases": [
        {
          "t": "The wind was so strong that the cloth flew away.",
          "img": "https://wolf-labs.pages.dev/p/a166bd9ca2eb/the-wind-blows/img/live-vento.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Don’t marvel that I said to you, ‘You must all be born anew.’",
          "img": "https://wolf-labs.pages.dev/p/a166bd9ca2eb/the-wind-blows/img/live-terraco.webp",
          "au": "audio/say2.mp3",
          "ref": "John 3:7"
        },
        {
          "t": "Nicodemus answered him, “How can these things be?”",
          "img": "https://wolf-labs.pages.dev/p/a166bd9ca2eb/the-wind-blows/img/live-janelas.webp",
          "au": "audio/say3.mp3",
          "ref": "John 3:9"
        }
      ]
    },
    "focus": {
      "sub": "so or such? Four quick ones.",
      "regra": "<b>so</b> + adjective · <b>so many / so much</b> + noun · <b>such a</b> + adjective + noun · then <b>that</b> · never <i>so a</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The soup was so hot that nobody could eat it.",
          "aceita": [],
          "d": "Hint: <b>so</b> + adjective + <b>that</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It was so a good movie that I cried.",
          "r": "It was such a good movie that I cried.",
          "aceita": [],
          "d": "Hint: before <i>a + noun</i> we use <b>such a</b>, never <i>so a</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I have so much questions about this.",
          "r": "I have so many questions about this.",
          "aceita": [],
          "d": "Hint: questions are countable, so <b>so many</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She was such tired that she fell asleep at the table.",
          "r": "She was so tired that she fell asleep at the table.",
          "aceita": [],
          "d": "Hint: an adjective alone takes <b>so</b>: <i>so tired</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/a166bd9ca2eb/the-wind-blows/img/live-capa2.webp",
      "leg": "An open book and a candle at night",
      "pede": "Look at the picture: an open book and a candle at night. Write 2 or 3 sentences about a book, a series or a night you will not forget. Use <b>so … that</b> or <b>such a … that</b>.",
      "ph": "It was such a … that …",
      "ex": "It was such a good book that I read it all night. I was so tired the next day that I slept on the bus."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "In John 3:9 Nicodemus asks, “How can these things be?” He has so many questions. What do you have so many questions about?",
          "ph": "I have so many questions about … that …",
          "ex": "I have so many questions about space that I watch videos every night."
        },
        {
          "q": "What is something so good that you want to tell everyone?",
          "ph": "It is so good that … / It is such a … that …",
          "ex": "It is such a good series that I told all my friends about it."
        }
      ]
    }
  }
};
