/* THE REVIEW · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: orações reduzidas (Having led / Asked to / Working with). C1: nenhum português. Imagens live-a, live-b e live-capa (escuras). */
window.HW2 = {
  "id": "the-review",
  "titulo": "The Review",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/559663bc0ee8/the-review/img/live-a.webp",
  "alvo": "participle clauses to talk about your own results: Having led ..., I ... · Asked to ..., I ... · Working with ..., we ...; the subject after the comma must be the one who did the action; never 'Having lead', 'Asking to', 'Working late, the deadline was missed'",
  "abrir": "What is the best thing you did at work this year?",
  "fecho": "<b>Having</b> + past participle shows what came first: <i>Having led the migration, I cut deploy time by half.</i> <b>Asked to</b> + verb: <i>Asked to mentor two juniors, I set up weekly reviews.</i> <b>Working with</b> + a team: <i>Working with Support, we reduced repeat tickets.</i> The person after the comma must be the one doing it.",
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
      "sub": "Mia and Leo before annual review season. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/559663bc0ee8/the-review/img/live-a.webp",
      "leg": "A trophy on a desk, two cups of coffee",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, your self-review is due tomorrow. How is it going?"
        },
        {
          "quem": "leo",
          "t": "Badly. Every sentence sounds like bragging, or like an apology."
        },
        {
          "quem": "mia",
          "t": "Use evidence, not adjectives. Instead of 'I was great', say 'Having led the migration, I cut deploy time by half.'"
        },
        {
          "quem": "leo",
          "t": "Having led the migration, I cut deploy time by half. That does sound solid."
        },
        {
          "quem": "mia",
          "t": "Try another. Working with Support, we reduced repeat tickets by a third."
        },
        {
          "quem": "leo",
          "t": "And I can add: asked to mentor two juniors, I set up weekly code reviews."
        },
        {
          "quem": "mia",
          "t": "Perfect. Just check the subject. If you write 'Working late, the deadline was missed', it sounds as if the deadline was working late."
        },
        {
          "quem": "leo",
          "t": "Ha. So the person after the comma must be the one doing the action."
        },
        {
          "quem": "mia",
          "t": "Exactly. Working late, I missed the deadline. Now, what is your area to grow?"
        },
        {
          "quem": "leo",
          "t": "Having ignored the documentation all year, I need to write more of it."
        },
        {
          "quem": "mia",
          "t": "Honest and specific. That is what the reviewer wants to read."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia tell Leo to use in his self-review?",
          "op": [
            "Evidence instead of adjectives",
            "Long adjectives about himself",
            "Only the team's results"
          ],
          "a": 0,
          "por": "Use evidence, not adjectives."
        },
        {
          "q": "What is wrong with 'Working late, the deadline was missed'?",
          "op": [
            "It sounds as if the deadline was working late",
            "It uses the wrong tense for the deadline",
            "It is too short for a review"
          ],
          "a": 0,
          "por": "It sounds as if the deadline was working late."
        },
        {
          "q": "What area does Leo decide to grow?",
          "op": [
            "Writing documentation",
            "Leading meetings",
            "Learning a new language"
          ],
          "a": 0,
          "por": "Having ignored the documentation all year, I need to write more of it."
        }
      ]
    },
    "out": {
      "sub": "Three lines for the review. Hear it, then say it.",
      "frases": [
        {
          "t": "Having led the migration, I cut deploy time by half.",
          "img": "https://wolf-labs.pages.dev/p/559663bc0ee8/the-review/img/live-a.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Asked to mentor two juniors, I set up weekly code reviews.",
          "img": "https://wolf-labs.pages.dev/p/559663bc0ee8/the-review/img/live-b.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Working with Support, we reduced repeat tickets by a third.",
          "img": "https://wolf-labs.pages.dev/p/559663bc0ee8/the-review/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Having done it, say it right. Four quick ones.",
      "regra": "<b>Having</b> + past participle · <b>Asked to</b> + verb · <b>Working with</b> + team · the subject after the comma = the person who did it.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Having led the migration, I cut deploy time by half.",
          "aceita": [],
          "d": "Hint: <b>Having</b> + past participle, then a comma, then the person who did it: <b>I</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Having lead the migration, I cut deploy time.",
          "r": "Having led the migration, I cut deploy time.",
          "aceita": [],
          "d": "Hint: the past participle of <i>lead</i> is <b>led</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the subject is wrong.",
          "mostra": "Working late, the deadline was missed.",
          "r": "Working late, I missed the deadline.",
          "aceita": [
            "Working late, we missed the deadline."
          ],
          "d": "Hint: who was working late? A person. The person must come right after the comma."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Asking to mentor two juniors, I set up weekly reviews.",
          "r": "Asked to mentor two juniors, I set up weekly reviews.",
          "aceita": [],
          "d": "Hint: somebody asked you, so you need the passive participle: <b>Asked</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/559663bc0ee8/the-review/img/live-b.webp",
      "leg": "A stack of notebooks under a lamp",
      "pede": "Look at the picture: a stack of notebooks under a lamp, a whole year of work. Write 2 or 3 sentences about your achievements this year, with evidence. Use <b>Having + past participle</b>, <b>Asked to …</b> or <b>Working with …</b>.",
      "ph": "Having finished …, I …",
      "ex": "Having finished the project in May, I took a real holiday. Asked to lead a small team, I learned a lot. Working with Support, we reduced repeat tickets."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is one achievement from this year you would put in a brag document? Start with Having.",
          "ph": "Having …, I …",
          "ex": "Having moved to a new team in March, I became the main person for payments."
        },
        {
          "q": "Which area would you like to grow next year? Say it with evidence.",
          "ph": "Having …, I need to …",
          "ex": "Having avoided public speaking all year, I need to present at least once."
        }
      ]
    }
  }
};
