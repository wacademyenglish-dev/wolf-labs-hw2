/* ABSOLUTELY EXHAUSTED (one-letter-away) · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: adjetivos graduáveis × extremos. B1: nenhum português na lição. */
window.HW2 = {
  "id": "one-letter-away",
  "titulo": "Absolutely Exhausted",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e790549b8309/one-letter-away/img/cinema.webp",
  "alvo": "gradable vs extreme adjectives: very / quite / a bit + normal (tired, good) · absolutely + extreme (exhausted, amazing, awful); really works with both",
  "abrir": "What was the best thing you ate this year? How was it?",
  "fecho": "Normal adjectives have degrees: <b>a bit / quite / very</b> tired. Extreme adjectives already mean very, very: <b>absolutely</b> exhausted, awful, amazing. Never <i>very exhausted</i>, never <i>absolutely good</i>. <b>Really</b> works with both.",
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
      "sub": "Mia and Leo write reviews. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/e790549b8309/one-letter-away/img/fones.webp",
      "leg": "Reviews after midnight",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I read your review of the hotel. It says the room was very awful."
        },
        {
          "quem": "mia",
          "t": "Did I write that? It should be absolutely awful. Awful is already extreme."
        },
        {
          "quem": "leo",
          "t": "Right. You can say very bad, but absolutely awful."
        },
        {
          "quem": "mia",
          "t": "The breakfast was really good, though."
        },
        {
          "quem": "leo",
          "t": "Really works with both. Very good, really good. But for amazing, you need absolutely."
        },
        {
          "quem": "mia",
          "t": "What about the café next door?"
        },
        {
          "quem": "leo",
          "t": "The coffee was quite good, but the service was absolutely terrible."
        },
        {
          "quem": "mia",
          "t": "After the trip I was absolutely exhausted. I slept for twelve hours."
        },
        {
          "quem": "leo",
          "t": "Then say it in your review. Very tired is not strong enough."
        },
        {
          "quem": "mia",
          "t": "Deal. Five stars for the breakfast. It was absolutely delicious."
        }
      ],
      "perguntas": [
        {
          "q": "Why should the review say absolutely awful?",
          "op": [
            "Awful is already extreme",
            "Awful is a weak word",
            "Very is too formal"
          ],
          "a": 0,
          "por": "Awful is already extreme."
        },
        {
          "q": "How was the service at the café?",
          "op": [
            "Absolutely terrible",
            "Quite good",
            "Very slow"
          ],
          "a": 0,
          "por": "The service was absolutely terrible."
        },
        {
          "q": "How did Mia feel after the trip?",
          "op": [
            "Absolutely exhausted",
            "A bit tired",
            "Quite bored"
          ],
          "a": 0,
          "por": "After the trip I was absolutely exhausted."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the lesson. Hear it, then say it.",
      "frases": [
        {
          "t": "The service was absolutely terrible, but the coffee was quite good.",
          "img": "https://wolf-labs.pages.dev/p/e790549b8309/one-letter-away/img/cafe.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I was absolutely exhausted after the trip.",
          "img": "https://wolf-labs.pages.dev/p/e790549b8309/one-letter-away/img/fones.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The breakfast was really good, and the view was absolutely amazing.",
          "img": "https://wolf-labs.pages.dev/p/e790549b8309/one-letter-away/img/hotel.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Normal or extreme? Four quick ones.",
      "regra": "<b>very / quite / a bit</b> + normal (tired, good, big) · <b>absolutely</b> + extreme (exhausted, amazing, huge) · <b>really</b> + both.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The hotel room was absolutely huge and very quiet.",
          "aceita": [],
          "d": "Hint: huge is extreme, so absolutely. Quiet is normal, so very."
        },
        {
          "tipo": "escreve",
          "t": "Add a word that fits.",
          "mostra": "The soup was ___ delicious.",
          "r": "The soup was absolutely delicious.",
          "aceita": [
            "The soup was really delicious."
          ],
          "d": "Hint: delicious is extreme. Use absolutely, or really."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "After the flight I was very exhausted.",
          "r": "After the flight I was absolutely exhausted.",
          "aceita": [
            "After the flight I was really exhausted.",
            "After the flight I was very tired.",
            "After the flight I was really tired."
          ],
          "d": "Hint: exhausted is extreme, so not <i>very</i>. Or change it to <b>very tired</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The food was absolutely good.",
          "r": "The food was very good.",
          "aceita": [
            "The food was really good.",
            "The food was quite good.",
            "The food was absolutely delicious.",
            "The food was absolutely amazing.",
            "The food was absolutely wonderful."
          ],
          "d": "Hint: good is a normal adjective, so <b>very good</b>. Or choose an extreme one: absolutely delicious."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e790549b8309/one-letter-away/img/hotel.webp",
      "leg": "Room 12, late checkout",
      "pede": "Look at the picture. Write a short review of this room in 2 or 3 sentences. Use <b>very / quite</b> with normal adjectives and <b>absolutely</b> with extreme ones.",
      "ph": "The room was quite … and the bed was absolutely …",
      "ex": "The room was quite small, but the bed was absolutely wonderful. I was very tired, and I slept for ten hours."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What was the best thing you ate this year? How was it?",
          "ph": "It was absolutely …",
          "ex": "It was a bowl of soup on a cold day. It was absolutely delicious."
        },
        {
          "q": "How do you feel right now, and why?",
          "ph": "I am quite … / I am absolutely …",
          "ex": "I am quite tired, but not exhausted yet. I worked late all week."
        }
      ]
    }
  }
};
