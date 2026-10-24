/* NOT A REAL TAXI · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: orações relativas who / that / where. B1: nenhum portugues. Imagens live-a, live-b, live-capa (escuras, combinam). */
window.HW2 = {
  "id": "not-a-real-taxi",
  "titulo": "Not a Real Taxi",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/927bd3ce9de7/not-a-real-taxi/img/live-capa.webp",
  "alvo": "relative clauses: who for people, that / which for things, where for places (the driver who took the tunnel, the taxi that had no meter, the hotel where I stayed); never 'the taxi who', 'the place which I stayed' or 'the man who he gave me'",
  "abrir": "Have you ever almost fell for a trick? What happened?",
  "fecho": "<b>who</b> = people: <i>the driver who took the tunnel</i>. <b>that / which</b> = things: <i>the taxi that had no meter</i>. <b>where</b> = places: <i>the hotel where I stayed</i>. The relative word is already the subject: never <i>the man who he gave me</i>.",
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
      "sub": "Mia tells Leo about her first night in Las Vegas. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/927bd3ce9de7/not-a-real-taxi/img/live-capa.webp",
      "leg": "A taxi on a dark road at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "You look upset, Mia. How was the ride from the airport?"
        },
        {
          "quem": "mia",
          "t": "Awful. The driver who picked me up took the tunnel, and his taxi had no meter."
        },
        {
          "quem": "leo",
          "t": "No meter? That's a red flag. Drivers who do that can charge any price they want."
        },
        {
          "quem": "mia",
          "t": "He charged sixty-eight dollars. Then a man who was standing on the Strip put a bracelet on my wrist."
        },
        {
          "quem": "leo",
          "t": "Oh no. The one that looks free? Then he asks for twenty dollars."
        },
        {
          "quem": "mia",
          "t": "Exactly. I gave it back. It's the first place where I really felt like a tourist."
        },
        {
          "quem": "leo",
          "t": "Did you keep the receipt?"
        },
        {
          "quem": "mia",
          "t": "Yes, and I took a photo of the taxi. It's the one whose door has a big number seven."
        },
        {
          "quem": "leo",
          "t": "Perfect. Send me the photo, and I'll call the taxi company that works at the airport."
        },
        {
          "quem": "mia",
          "t": "Thank you. Next time, I'll use an app that shows the price first."
        }
      ],
      "perguntas": [
        {
          "q": "What was wrong with the taxi?",
          "op": [
            "It had no meter",
            "It was too small",
            "It was very old"
          ],
          "a": 0,
          "por": "His taxi had no meter."
        },
        {
          "q": "What did the man on the Strip do?",
          "op": [
            "He put a bracelet on her wrist",
            "He took her bag",
            "He called her a taxi"
          ],
          "a": 0,
          "por": "A man put a bracelet on my wrist."
        },
        {
          "q": "What will Leo do?",
          "op": [
            "Call the taxi company",
            "Pay the fare",
            "Go to the airport"
          ],
          "a": 0,
          "por": "I'll call the taxi company that works at the airport."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a travel trick. Hear it, then say it.",
      "frases": [
        {
          "t": "I don't trust a taxi that has no meter.",
          "img": "https://wolf-labs.pages.dev/p/927bd3ce9de7/not-a-real-taxi/img/live-a.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The man who gave me the bracelet wanted money.",
          "img": "https://wolf-labs.pages.dev/p/927bd3ce9de7/not-a-real-taxi/img/live-b.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "This is the street where the driver stopped.",
          "img": "https://wolf-labs.pages.dev/p/927bd3ce9de7/not-a-real-taxi/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "who, that and where. Four quick ones.",
      "regra": "<b>who</b> = people · <b>that / which</b> = things · <b>where</b> = places · never <i>the man who he gave</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The man who helped me was very kind.",
          "aceita": [],
          "d": "Hint: <b>who</b> after a person, then the verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The taxi who I took had no meter.",
          "r": "The taxi that I took had no meter.",
          "aceita": [
            "The taxi which I took had no meter.",
            "The taxi I took had no meter."
          ],
          "d": "Hint: a taxi is a thing, so <b>that</b> or <b>which</b>, not <i>who</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "This is the hotel which I stayed.",
          "r": "This is the hotel where I stayed.",
          "aceita": [
            "This is the hotel which I stayed at.",
            "This is the hotel that I stayed at.",
            "This is the hotel I stayed at."
          ],
          "d": "Hint: a hotel is a place, so <b>where</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The man who he gave me a bracelet was rude.",
          "r": "The man who gave me a bracelet was rude.",
          "aceita": [
            "The man that gave me a bracelet was rude."
          ],
          "d": "Hint: <b>who</b> is already the subject. Do not add <i>he</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/927bd3ce9de7/not-a-real-taxi/img/live-b.webp",
      "leg": "A woven bracelet on a dark table",
      "pede": "Look at the picture: a colourful bracelet on a table. Write 2 or 3 sentences about a trick, or a bad experience, when you travel or shop. Use <b>who</b>, <b>that</b> or <b>where</b>.",
      "ph": "A man who … / A place where …",
      "ex": "A man who was standing near my hotel offered me a free bracelet. It's a trick that many tourists fall for. I walked away from the place where he was."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a person or a thing you trust when you travel. Why?",
          "ph": "I trust a … that / who …",
          "ex": "I trust a hotel that has good reviews, and a driver who uses the meter."
        },
        {
          "q": "Describe a place where you like to relax.",
          "ph": "It's a place where …",
          "ex": "It's a small café where nobody is in a hurry, and the owner is a man who always remembers my name."
        }
      ]
    }
  }
};
