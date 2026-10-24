/* TO WHOM IT MAY CONCERN · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: registro formal da reclamação (however, furthermore, as a result, I would be grateful if). B2: nenhum português na lição. */
window.HW2 = {
  "id": "to-whom-it-may-concern",
  "titulo": "To Whom It May Concern",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/df775309b6ab/to-whom-it-may-concern/img/live-capa.webp",
  "alvo": "formal register in a complaint: I am writing to + verb, however, furthermore, as a result, in addition to + noun, I would be grateful if you could..., I look forward to hearing from you; never 'writing for complain', 'in addition of', 'look forward to hear'",
  "abrir": "Have you ever complained to a company? Did it work?",
  "fecho": "A formal letter says why you write: <b>I am writing to complain about…</b> (to + verb). Then it connects ideas: <b>However,</b> · <b>Furthermore,</b> · <b>As a result,</b> · <b>in addition to</b> + noun. It asks politely: <b>I would be grateful if you could…</b> It closes with <b>I look forward to hearing from you</b>, never <i>to hear</i>.",
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
      "sub": "Mia helps Leo with a complaint after a bad flight. A new scene, about one minute.",
      "leg": "Leo's flight to Dublin, five hours late",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you look tired. How was your flight to Dublin?"
        },
        {
          "quem": "leo",
          "t": "Terrible. It was five hours late. As a result, I missed my connection, and I lost a night at the hotel."
        },
        {
          "quem": "mia",
          "t": "Did the airline explain?"
        },
        {
          "quem": "leo",
          "t": "Only in the chat. They said sorry and closed it. So now I'm writing a formal complaint."
        },
        {
          "quem": "mia",
          "t": "Good idea. How do you start?"
        },
        {
          "quem": "leo",
          "t": "I am writing to complain about the delay of flight WA 615. Then the facts, with the dates and times."
        },
        {
          "quem": "mia",
          "t": "And the tone? Don't write, I want my money."
        },
        {
          "quem": "leo",
          "t": "No. I'll write, I would be grateful if you could pay the compensation. And, the crew were kind. However, nobody explained the delay."
        },
        {
          "quem": "mia",
          "t": "Furthermore, mention the damaged bag."
        },
        {
          "quem": "leo",
          "t": "Yes. And I'll ask for a reply within fourteen days."
        }
      ],
      "perguntas": [
        {
          "q": "What was the result of the delay?",
          "op": [
            "Leo missed his connection",
            "Leo lost his passport",
            "Leo changed hotels"
          ],
          "a": 0,
          "por": "As a result, I missed my connection."
        },
        {
          "q": "How will Leo start the letter?",
          "op": [
            "Hey, I want my money",
            "I am writing to complain about the delay",
            "Dear friend, sorry"
          ],
          "a": 1,
          "por": "I am writing to complain about the delay of flight WA 615."
        },
        {
          "q": "What does Mia say NOT to write?",
          "op": [
            "I want my money",
            "However, nobody explained",
            "Furthermore, the bag"
          ],
          "a": 0,
          "por": "Don't write, I want my money."
        }
      ],
      "audio": "audio/listen.mp3",
      "img": "https://wolf-labs.pages.dev/p/df775309b6ab/to-whom-it-may-concern/img/live-capa.webp"
    },
    "out": {
      "sub": "Three sentences for the letter. Hear it, then say it.",
      "frases": [
        {
          "t": "I am writing to complain about the five-hour delay.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/df775309b6ab/to-whom-it-may-concern/img/live-capa.webp"
        },
        {
          "t": "However, nobody explained the delay to us.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/df775309b6ab/to-whom-it-may-concern/img/live-capa.webp"
        },
        {
          "t": "As a result, I missed my connection and lost a hotel night.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/df775309b6ab/to-whom-it-may-concern/img/live-capa.webp"
        }
      ]
    },
    "focus": {
      "sub": "Formal and clear. Four quick ones.",
      "regra": "<b>I am writing to</b> + verb · <b>in addition to</b> + noun · <b>However, / Furthermore, / As a result,</b> · <b>I look forward to hearing</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I would be grateful if you could reply within fourteen days.",
          "aceita": [],
          "d": "Hint: the polite request: <b>I would be grateful if you could</b> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I am writing for complain about the delay.",
          "r": "I am writing to complain about the delay.",
          "aceita": [],
          "d": "Hint: <b>writing to</b> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "In addition of the delay, my bag was damaged.",
          "r": "In addition to the delay, my bag was damaged.",
          "aceita": [],
          "d": "Hint: <b>in addition to</b> + noun."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I look forward to hear from you.",
          "r": "I look forward to hearing from you.",
          "aceita": [],
          "d": "Hint: <b>look forward to</b> + -ing."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Look at the picture: Dublin at night, after a very long trip. Write 2 or 3 formal sentences to an airline about a delay. Use <b>however</b>, <b>furthermore</b> or <b>as a result</b>.",
      "ph": "I am writing to complain about …",
      "ex": "I am writing to complain about the five-hour delay of my flight. As a result, I missed my connection. I would be grateful if you could reply within fourteen days.",
      "img": "https://wolf-labs.pages.dev/p/df775309b6ab/to-whom-it-may-concern/img/live-capa.webp",
      "leg": "A Dublin street at night"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a time a company let you down (a delivery, an app, a trip). What would you write in the first sentence?",
          "ph": "I am writing to complain about …",
          "ex": "I am writing to complain about a parcel that never arrived."
        },
        {
          "q": "What would you ask the company to do? Use the polite form.",
          "ph": "I would be grateful if you could …",
          "ex": "I would be grateful if you could send a new parcel or give me a refund."
        }
      ]
    }
  }
};
