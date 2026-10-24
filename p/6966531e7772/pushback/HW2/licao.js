/* PUSHBACK · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: 2a condicional + hedging. B2: nenhum portugues. So live-capa (lum 10). */
window.HW2 = {
  "id": "pushback",
  "titulo": "Pushback",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/6966531e7772/pushback/img/live-capa.webp",
  "alvo": "the second conditional to show consequences (If we added everything, we would miss the date) and hedging to say no politely (I'm not sure we can · It might be better to · I'd suggest); never if + would, never if + present with would",
  "abrir": "How hard is it for you to say no at work? When was the last time?",
  "fecho": "<b>If + past, would + plain verb</b>: <i>If we added everything, we would miss the date.</i> Never <i>if we would add</i>. Say no softly: <b>I'm not sure we can…</b> · <b>It might be better to…</b> · <b>I'd suggest…</b>. A hard \"no\" with a consequence is easier to accept.",
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
      "sub": "Mia and Leo before the planning meeting. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/6966531e7772/pushback/img/live-capa.webp",
      "leg": "A small scale with almost nothing on it",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, Hannah wants all six features in five weeks. What did you tell her?"
        },
        {
          "quem": "mia",
          "t": "I said I'm not sure we can do all of them. If we added everything, we would miss the date."
        },
        {
          "quem": "leo",
          "t": "Did she accept that?"
        },
        {
          "quem": "mia",
          "t": "Not yet. She said we had promised the client the full list."
        },
        {
          "quem": "leo",
          "t": "So what are you proposing?"
        },
        {
          "quem": "mia",
          "t": "I'd suggest cutting two features. If we only shipped four, we could test them properly."
        },
        {
          "quem": "leo",
          "t": "And the other two?"
        },
        {
          "quem": "mia",
          "t": "It might be better to release them in the next sprint. That would mean a smaller launch, but a stable one."
        },
        {
          "quem": "leo",
          "t": "She won't like the word smaller."
        },
        {
          "quem": "mia",
          "t": "Then I'll say it would reduce the risk. If we rushed, a bug could reach every customer."
        },
        {
          "quem": "leo",
          "t": "That's a strong argument."
        }
      ],
      "perguntas": [
        {
          "q": "What would happen if the team added every feature?",
          "op": [
            "They would miss the date",
            "They would finish early",
            "They would hire more people"
          ],
          "a": 0,
          "por": "If we added everything, we would miss the date."
        },
        {
          "q": "What does Mia suggest?",
          "op": [
            "Cutting two features for now",
            "Adding two developers",
            "Moving the launch to next year"
          ],
          "a": 0,
          "por": "I'd suggest cutting two features."
        },
        {
          "q": "What could happen if the team rushed?",
          "op": [
            "A bug could reach every customer",
            "Hannah could leave",
            "The client could cancel"
          ],
          "a": 0,
          "por": "If we rushed, a bug could reach every customer."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for a hard meeting. Hear it, then say it.",
      "frases": [
        {
          "t": "If we added everything, we would miss the date.",
          "img": "https://wolf-labs.pages.dev/p/6966531e7772/pushback/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I'm not sure we can do all six in five weeks.",
          "img": "https://wolf-labs.pages.dev/p/6966531e7772/pushback/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It might be better to release two of them in the next sprint.",
          "img": "https://wolf-labs.pages.dev/p/6966531e7772/pushback/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Second conditional and soft no. Four quick ones.",
      "regra": "<b>if + past, would + plain verb</b> · never <i>if we would</i> · <b>I'm not sure we can</b> · <b>It might be better to</b> · <b>I'd suggest</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If we added it, we would miss the date.",
          "aceita": [],
          "d": "Hint: <b>if</b> + past simple, then <b>would</b> + plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If we add everything, we would miss the date.",
          "r": "If we added everything, we would miss the date.",
          "aceita": [],
          "d": "Hint: an imagined situation needs the past after <b>if</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If we would hire two more developers, we could finish.",
          "r": "If we hired two more developers, we could finish.",
          "aceita": [
            "If we had two more developers, we could finish."
          ],
          "d": "Hint: never <b>would</b> right after <b>if</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "It would be better do it next sprint.",
          "r": "It would be better to do it next sprint.",
          "aceita": [
            "It might be better to do it next sprint."
          ],
          "d": "Hint: after <b>better</b>, use <b>to</b> + plain verb."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/6966531e7772/pushback/img/live-capa.webp",
      "leg": "A scale on a dark table",
      "pede": "Look at the picture: a scale on a dark table. Write 2 or 3 sentences about a deadline or a request you would push back on. Use <b>if + past, would</b> and a soft opener: <b>I'm not sure we can…</b>, <b>It might be better to…</b> or <b>I'd suggest…</b>.",
      "ph": "I'm not sure we can … If we …, we would …",
      "ex": "I'm not sure we can finish by Friday. If we had two more days, we could test it properly. I'd suggest starting with the main page."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is hard for you to say no to? What would happen if you said yes to everything?",
          "ph": "If I said yes to everything, I would …",
          "ex": "If I said yes to everything, I would never rest. I would have no time for my family."
        },
        {
          "q": "If you had one more week for a project, what would you do with it?",
          "ph": "If I had one more week, I would …",
          "ex": "If I had one more week, I would write more tests and improve the design."
        }
      ]
    }
  }
};
