/* WHEREAS THE OTHER COMPANY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: contraste formal (whereas / while / In contrast / However / on the other hand). B2: nenhum português. Imagens do próprio live-* (escuras). */
window.HW2 = {
  "id": "whereas-the-other-company",
  "titulo": "Whereas the Other Company",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/af19467ba879/whereas-the-other-company/img/live-cadeiras.webp",
  "alvo": "contrast in formal writing, with each connector's punctuation: X, whereas Y · Whereas X, Y · X, while Y · X. In contrast, Y · X. However, Y · On the one hand ... On the other hand ...; in contrast to + noun; never whereas as a fragment, never whereas ... but, never 'in the other hand', never 'in contrast of'",
  "abrir": "Think of two places where you worked or studied. What was the biggest difference?",
  "fecho": "<b>One sentence</b>: <i>X, whereas Y</i> · <i>Whereas X, Y</i> · <i>X, while Y</i> (never <i>whereas … but</i>, and never <i>Whereas Y.</i> alone). <b>Two sentences</b>: <i>X. In contrast, Y.</i> · <i>X. However, Y.</i> A full stop before, a comma after. <b>On the one hand … On the other hand …</b> shows two sides of the <i>same</i> thing, and <b>in contrast to</b> compares two different things.",
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
      "sub": "Mia and Leo write a report on two companies about to merge. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/af19467ba879/whereas-the-other-company/img/live-sala.webp",
      "leg": "The meeting room, before the merger report",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, Priya wants the culture report on the merger by five. Corvane and Fieldwise: what are the main differences?"
        },
        {
          "quem": "leo",
          "t": "Corvane is formal, whereas Fieldwise is relaxed. Everyone at Corvane wears a suit."
        },
        {
          "quem": "mia",
          "t": "And size?"
        },
        {
          "quem": "leo",
          "t": "Corvane has twenty-four hundred people, while Fieldwise has only a hundred and forty."
        },
        {
          "quem": "mia",
          "t": "Careful: whereas must join two facts in one sentence. A second sentence can't be only the whereas part."
        },
        {
          "quem": "leo",
          "t": "Right. Whereas Corvane plans a year ahead, Fieldwise decides on Mondays. One sentence, one comma."
        },
        {
          "quem": "mia",
          "t": "What if I want two sentences?"
        },
        {
          "quem": "leo",
          "t": "Then use another link. Corvane has a long history. In contrast, Fieldwise started in 2020."
        },
        {
          "quem": "mia",
          "t": "And however?"
        },
        {
          "quem": "leo",
          "t": "Corvane likes written reports. However, Fieldwise prefers a quick chat. A full stop before, a comma after."
        },
        {
          "quem": "mia",
          "t": "Last one. On the one hand, the merger is exciting. On the other hand, it is risky."
        },
        {
          "quem": "leo",
          "t": "Two sides of one thing. Good. That's the whole report."
        }
      ],
      "perguntas": [
        {
          "q": "How does Leo describe the two cultures?",
          "op": [
            "Corvane is formal, and Fieldwise is relaxed",
            "Both companies are formal",
            "Fieldwise is older than Corvane"
          ],
          "a": 0,
          "por": "Corvane is formal, whereas Fieldwise is relaxed."
        },
        {
          "q": "What does Mia warn about 'whereas'?",
          "op": [
            "It must join two facts in one sentence",
            "It must always start a new paragraph",
            "It needs a 'but' after it"
          ],
          "a": 0,
          "por": "Whereas must join two facts in one sentence."
        },
        {
          "q": "Which link does Leo use for two separate sentences about history?",
          "op": [
            "In contrast",
            "While",
            "Whereas"
          ],
          "a": 0,
          "por": "Corvane has a long history. In contrast, Fieldwise started in 2020."
        }
      ]
    },
    "out": {
      "sub": "Three ways to compare. Hear it, then say it.",
      "frases": [
        {
          "t": "Corvane is formal, whereas Fieldwise is relaxed.",
          "img": "https://wolf-labs.pages.dev/p/af19467ba879/whereas-the-other-company/img/live-cadeiras.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Corvane has a long history. In contrast, Fieldwise started in 2020.",
          "img": "https://wolf-labs.pages.dev/p/af19467ba879/whereas-the-other-company/img/live-mesas.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "On the one hand, the merger is exciting. On the other hand, it is risky.",
          "img": "https://wolf-labs.pages.dev/p/af19467ba879/whereas-the-other-company/img/live-ponte.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Which link? Four quick ones.",
      "regra": "<b>X, whereas Y</b> · <b>X, while Y</b> · <b>X. In contrast, Y.</b> · <b>X. However, Y.</b> · <b>in contrast to</b> + noun · <b>on the other hand</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Corvane is formal, while Fieldwise is relaxed.",
          "aceita": [],
          "d": "Hint: <b>while</b> joins the two facts in one sentence, with a comma before it."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "In the other hand, the merger is risky.",
          "r": "On the other hand, the merger is risky.",
          "aceita": [],
          "d": "Hint: the fixed phrase is <b>on the one hand … on the other hand</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "In contrast of Corvane, Fieldwise is informal.",
          "r": "In contrast to Corvane, Fieldwise is informal.",
          "aceita": [
            "In contrast with Corvane, Fieldwise is informal."
          ],
          "d": "Hint: it is <b>in contrast to</b> (or <i>with</i>), never <i>of</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is too many.",
          "mostra": "Whereas Corvane is formal, but Fieldwise is relaxed.",
          "r": "Whereas Corvane is formal, Fieldwise is relaxed.",
          "aceita": [
            "Corvane is formal, whereas Fieldwise is relaxed."
          ],
          "d": "Hint: <b>whereas</b> already marks the contrast, so no <i>but</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/af19467ba879/whereas-the-other-company/img/live-mesas.webp",
      "leg": "Two desks in a dark office: one tidy, one busy",
      "pede": "Look at the picture: two desks in a dark office, one tidy and one busy. Write 2 or 3 sentences comparing two workplaces, teams or cities you know. Use <b>whereas</b>, <b>while</b>, <b>In contrast, …</b> or <b>However, …</b>.",
      "ph": "My first job was …, whereas …",
      "ex": "My first job was formal, whereas my second one was relaxed. The first office was quiet. In contrast, the second one was always noisy."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Compare two cities you know well. How are they different?",
          "ph": "…, whereas …",
          "ex": "São Paulo never stops, whereas my hometown sleeps at nine."
        },
        {
          "q": "Something with a good side and a bad side: your phone, your car, your job?",
          "ph": "On the one hand, … On the other hand, …",
          "ex": "On the one hand, my phone helps me work. On the other hand, I never rest."
        }
      ]
    }
  }
};
