/* A1 REVIEW: THE CONCIERGE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Unidade 5 (imperativo, don't, let's, direções). A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "a1-review-the-concierge",
  "titulo": "A1 Review: The Concierge",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/774904c527d7/a1-review-the-concierge/img/live-capa.webp",
  "alvo": "Unit 5 review: the imperative (verb first); Don't + verb; steps with first, then, finally; let's / Shall we...?; directions (go straight, turn left AT, on your right, next to)",
  "abrir": "Give me one rule from your home.",
  "fecho": "Verb first: <i>Go straight.</i> <b>Don't</b> + verb: <i>Don't take the bus.</i> <b>Let's</b> + verb: <i>Let's go.</i> Turn left <b>at</b> the bank. It's <b>on</b> your right.",
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
      "sub": "Mia is the concierge. Leo is a tourist. A new scene, about 35 seconds.",
      "img": "https://wolf-labs.pages.dev/p/774904c527d7/a1-review-the-concierge/img/live-conversa.webp",
      "leg": "An old street at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Excuse me, where is the museum?"
        },
        {
          "quem": "mia",
          "t": "Go out of the hotel and go straight for two blocks."
        },
        {
          "quem": "leo",
          "t": "Two blocks. Then?"
        },
        {
          "quem": "mia",
          "t": "Turn left at the bank. The museum is on your right, next to the park."
        },
        {
          "quem": "leo",
          "t": "Thank you. Shall I take the bus?"
        },
        {
          "quem": "mia",
          "t": "No, don't take the bus. It's close. Walk!"
        },
        {
          "quem": "leo",
          "t": "OK. Tonight, let's have dinner together. Shall we go to the café?"
        },
        {
          "quem": "mia",
          "t": "Good idea! Let's go at eight. Don't be late!"
        }
      ],
      "perguntas": [
        {
          "q": "Where does Leo turn left?",
          "op": [
            "At the bank",
            "At the park",
            "At the hotel"
          ],
          "a": 0,
          "por": "Turn left at the bank."
        },
        {
          "q": "Why does Mia say don't take the bus?",
          "op": [
            "It's close",
            "It's late",
            "It's expensive"
          ],
          "a": 0,
          "por": "No, don't take the bus. It's close."
        },
        {
          "q": "What do they plan for tonight?",
          "op": [
            "Dinner at the café",
            "A walk to the museum",
            "A movie"
          ],
          "a": 0,
          "por": "Let's have dinner together. Shall we go to the café?"
        }
      ]
    },
    "out": {
      "sub": "Three sentences for a tourist. Hear it, then say it.",
      "frases": [
        {
          "t": "Go straight and turn left at the bank.",
          "img": "https://wolf-labs.pages.dev/p/774904c527d7/a1-review-the-concierge/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Don't take the bus. Walk!",
          "img": "https://wolf-labs.pages.dev/p/774904c527d7/a1-review-the-concierge/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Let's go to the café at eight.",
          "img": "https://wolf-labs.pages.dev/p/774904c527d7/a1-review-the-concierge/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Verb first, don't, let's. Four quick ones.",
      "regra": "<b>verb first</b> · <b>Don't</b> + verb · <b>Let's</b> + verb · turn left <b>at</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Turn right at the church and go straight.",
          "aceita": [],
          "d": "Dica: o verbo vem primeiro, e é <b>turn right AT</b> o lugar."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "No take the bus.",
          "r": "Don't take the bus.",
          "aceita": [
            "Do not take the bus."
          ],
          "d": "Dica: o 'não' do imperativo é <b>don't</b> + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Let's to go to the park.",
          "r": "Let's go to the park.",
          "aceita": [],
          "d": "Dica: depois de <b>let's</b>, só o verbo: let's go."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Turn left in the bank.",
          "r": "Turn left at the bank.",
          "aceita": [],
          "d": "Dica: é <b>turn left AT</b> o lugar."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/774904c527d7/a1-review-the-concierge/img/live-conversa.webp",
      "leg": "An old street at night",
      "pede": "Look at the picture: an old street at night. Write 2 or 3 sentences: tell a tourist the way. Use the verb first, <b>turn left / right at</b> and <b>Don't</b>.",
      "ph": "Go straight. Turn left at …",
      "ex": "Go straight for one block. Turn left at the lamp. Don't walk in the middle of the street."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Give me one rule from your home.",
          "ph": "Don't …",
          "ex": "Don't wear shoes in the house!"
        },
        {
          "q": "It is Saturday. What is your plan for us?",
          "ph": "Let's … Shall we …?",
          "ex": "Let's go to the park! Shall we have lunch out?"
        }
      ]
    }
  }
};
