/* TWO HUNDRED AND TWENTY WORDS · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=".
   Alvo: nominalização. C1: nenhum português na lição. */
window.HW2 = {
  "id": "two-hundred-and-twenty-words",
  "titulo": "Two Hundred and Twenty Words",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/62fddd2f0390/two-hundred-and-twenty-words/img/live-predio.webp",
  "alvo": "nominalization: turn a verb into a noun to shorten a report (-tion, -ment, -al, -ance, zero form: a cut, a rise); stack modifiers before the noun instead of chains of of; keep the person who disappeared",
  "abrir": "Think of a long email you wrote. What could you cut?",
  "fecho": "A verb can become a noun: <b>decide → decision</b>, <b>improve → improvement</b>, <b>refuse → refusal</b>, <b>perform → performance</b>, and the zero form: <b>a cut, a rise, a delay</b>. Stack before the noun, don't chain <i>of</i>: <b>transport cost reduction</b>. And ask who disappeared: <i>A decision was made</i> hides the person.",
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
  "rate": "-10%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo cut a long report down to one page. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/62fddd2f0390/two-hundred-and-twenty-words/img/live-predio.webp",
      "leg": "The office building at dusk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, my report is two pages too long, and the director reads only one."
        },
        {
          "quem": "leo",
          "t": "Show me a sentence. Maybe a verb can become a noun."
        },
        {
          "quem": "mia",
          "t": "Here: because the company decided to move the office, many staff resigned."
        },
        {
          "quem": "leo",
          "t": "Try this: the office relocation led to staff resignations. Same facts, half the words."
        },
        {
          "quem": "mia",
          "t": "Nice. But now nobody decided anything. Who moved the office?"
        },
        {
          "quem": "leo",
          "t": "Good point. Sometimes the noun deletes the person. Put the company back: the company's relocation decision led to resignations."
        },
        {
          "quem": "mia",
          "t": "And this one: there was a rising in the costs of the transport of goods."
        },
        {
          "quem": "leo",
          "t": "That has two problems. A rise is a noun already, and the chain of of is heavy. Say: a rise in goods transport costs."
        },
        {
          "quem": "mia",
          "t": "Short, and still clear. The director will thank us."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo suggest first?",
          "op": [
            "Turn a verb into a noun",
            "Delete the whole sentence",
            "Add more details"
          ],
          "a": 0,
          "por": "Maybe a verb can become a noun."
        },
        {
          "q": "Why does Mia object to the shorter sentence?",
          "op": [
            "Nobody decided anything in it",
            "It is too long",
            "It has no verb"
          ],
          "a": 0,
          "por": "Now nobody decided anything. Who moved the office?"
        },
        {
          "q": "What is wrong with a rising in the costs?",
          "op": [
            "A rise is already a noun",
            "Costs cannot rise",
            "It is too short"
          ],
          "a": 0,
          "por": "A rise is a noun already, and the chain of of is heavy."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the report. Hear it, then say it.",
      "frases": [
        {
          "t": "The office relocation led to many staff resignations.",
          "img": "https://wolf-labs.pages.dev/p/62fddd2f0390/two-hundred-and-twenty-words/img/live-predio.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "A sharp price rise reduced demand across the region.",
          "img": "https://wolf-labs.pages.dev/p/62fddd2f0390/two-hundred-and-twenty-words/img/live-predio.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The board's refusal to approve the plan caused a delay.",
          "img": "https://wolf-labs.pages.dev/p/62fddd2f0390/two-hundred-and-twenty-words/img/live-predio.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Noun, form, person. Four quick ones.",
      "regra": "<b>-tion, -ment, -al, -ance</b> or the zero form · stack before the noun, never <i>as … of … of</i> chains · say who disappeared.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Careful data analysis revealed a sharp fall in sales.",
          "aceita": [],
          "d": "Hint: the verb <b>analyze</b> became the noun <b>analysis</b>, and the modifiers sit before it."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There was a cutting in the budget.",
          "r": "There was a cut in the budget.",
          "aceita": [
            "There was a budget cut."
          ],
          "d": "Hint: <b>cut</b> is already a noun (zero form)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The improvation of the process was clear.",
          "r": "The improvement of the process was clear.",
          "aceita": [
            "The process improvement was clear."
          ],
          "d": "Hint: the noun for <b>improve</b> ends in <b>-ment</b>."
        },
        {
          "tipo": "escreve",
          "t": "Condense it with nouns.",
          "mostra": "The board refused to approve the plan, so the launch was delayed.",
          "r": "The board's refusal to approve the plan delayed the launch.",
          "aceita": [
            "The board's refusal to approve the plan caused a launch delay.",
            "The board's refusal to approve the plan caused a delay to the launch.",
            "The board's refusal to approve the plan caused a delay in the launch."
          ],
          "d": "Hint: <b>refuse</b> becomes <b>refusal</b>, and the board stays in."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/62fddd2f0390/two-hundred-and-twenty-words/img/live-predio.webp",
      "leg": "A grey office building at dusk",
      "pede": "Look at the picture: an office building at dusk. Take one long sentence from an email of yours and make it shorter with nouns. Keep the person in it. Use a form such as <b>-tion, -ment, -al</b> or a zero noun.",
      "ph": "The team's decision to …",
      "ex": "Our team's decision to close the shop led to a rise in online orders. The shop closure also meant a cut in running costs."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you improve at work or at home recently?",
          "ph": "The … improvement was …",
          "ex": "The improvement in my morning routine was huge: I now start work an hour earlier."
        },
        {
          "q": "What was the last big decision made around you? Who made it?",
          "ph": "The … decision led to …",
          "ex": "My manager's decision to change the schedule led to fewer meetings."
        }
      ]
    }
  }
};
