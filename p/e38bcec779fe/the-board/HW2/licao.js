/* THE BOARD · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: síntese para a diretoria (The bottom line is that / In short / What we're asking for is / frases nominais). C1: nenhum português. Imagens live-capa e live-b (escuras); a live-a (lum 53) ficou de fora. */
window.HW2 = {
  "id": "the-board",
  "titulo": "The Board",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e38bcec779fe/the-board/img/live-capa.webp",
  "alvo": "synthesis for senior people: The bottom line is that ... · In short, ... · What we're asking for is ... · noun phrases (a 40% reduction in failed payments, the launch of saved cards); never 'The bottom line, we need', 'a reduction of 40% of', 'In resume'",
  "abrir": "Your boss gives you one minute. What is the first sentence you say?",
  "fecho": "<b>The bottom line is that</b> + a full sentence: <i>The bottom line is that we need two engineers.</i> <b>In short,</b> and <b>To sum up,</b> close an idea. <b>What we're asking for is</b> names the request. Pack facts into noun phrases: <b>a 40% reduction in</b> failed payments, <b>an increase in</b> revenue, <b>the launch of</b> saved cards.",
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
      "sub": "Mia and Leo prepare three minutes with the board. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/e38bcec779fe/the-board/img/live-capa.webp",
      "leg": "The boardroom, before the meeting",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you have three minutes with the board on Thursday. What is your opening line?"
        },
        {
          "quem": "leo",
          "t": "I was going to start with the history of our payment code, back in 2015."
        },
        {
          "quem": "mia",
          "t": "Please don't. The board hasn't read anything. Start with the bottom line."
        },
        {
          "quem": "leo",
          "t": "Fine. The bottom line is that failed payments are down and we need two more engineers."
        },
        {
          "quem": "mia",
          "t": "Better. Now give them the number as a noun phrase: a 40% reduction in failed payments."
        },
        {
          "quem": "leo",
          "t": "So: since March, we've seen a 40% reduction in failed payments, and the launch of saved cards has helped."
        },
        {
          "quem": "mia",
          "t": "Good. And be explicit about the request. What we're asking for is a budget of four hundred thousand euros."
        },
        {
          "quem": "leo",
          "t": "To be precise, what we're asking for is two engineers. The money is just the cost."
        },
        {
          "quem": "mia",
          "t": "Then close it. In short, approve the hires today, or saved cards will slow down."
        },
        {
          "quem": "leo",
          "t": "In short, approve the hires today. I like that. And if the finance director interrupts?"
        },
        {
          "quem": "mia",
          "t": "Answer in one sentence, then return to your headline."
        }
      ],
      "perguntas": [
        {
          "q": "Why does Mia say no to the history of the payment code?",
          "op": [
            "The board hasn't read anything, so Leo should start with the conclusion",
            "The code is too old to be worth mentioning",
            "The finance director already knows the history"
          ],
          "a": 0,
          "por": "The board hasn't read anything. Start with the bottom line."
        },
        {
          "q": "How does Mia want Leo to present the result?",
          "op": [
            "As a noun phrase: a 40% reduction in failed payments",
            "As a long story about the whole sprint",
            "Without any number, to avoid questions"
          ],
          "a": 0,
          "por": "Now give them the number as a noun phrase: a 40% reduction in failed payments."
        },
        {
          "q": "What does Leo say the team is really asking for?",
          "op": [
            "Two more engineers",
            "A bigger office",
            "A longer meeting"
          ],
          "a": 0,
          "por": "To be precise, what we're asking for is two engineers."
        }
      ]
    },
    "out": {
      "sub": "Three lines for the board. Hear it, then say it.",
      "frases": [
        {
          "t": "The bottom line is that failed payments are down and we need two more engineers.",
          "img": "https://wolf-labs.pages.dev/p/e38bcec779fe/the-board/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Since March, we have seen a 40% reduction in failed payments.",
          "img": "https://wolf-labs.pages.dev/p/e38bcec779fe/the-board/img/live-b.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "What we're asking for is two engineers. In short, please approve the hires today.",
          "img": "https://wolf-labs.pages.dev/p/e38bcec779fe/the-board/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Headline first. Four quick ones.",
      "regra": "<b>The bottom line is that ...</b> · <b>In short, ...</b> · <b>What we're asking for is ...</b> · <b>a 40% reduction in ...</b> · <b>an increase in ...</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The bottom line is that we need two engineers.",
          "aceita": [],
          "d": "Hint: open with the headline, and remember the linking word before the sentence: <b>is that</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: two words are missing.",
          "mostra": "The bottom line, we need two more engineers.",
          "r": "The bottom line is that we need two more engineers.",
          "aceita": [
            "The bottom line is we need two more engineers."
          ],
          "d": "Hint: <b>The bottom line</b> is the subject, so it needs a verb: <b>is (that)</b> + a full sentence."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There was an increase of the revenue last quarter.",
          "r": "There was an increase in revenue last quarter.",
          "aceita": [
            "There was an increase in the revenue last quarter."
          ],
          "d": "Hint: you say an increase or a reduction <b>in</b> something, not <i>of</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one phrase is wrong.",
          "mostra": "In resume, we need four hundred thousand euros.",
          "r": "In short, we need four hundred thousand euros.",
          "aceita": [
            "To sum up, we need four hundred thousand euros.",
            "In summary, we need four hundred thousand euros."
          ],
          "d": "Hint: <i>resume</i> does not mean a summary here. Use <b>in short</b>, <b>to sum up</b> or <b>in summary</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e38bcec779fe/the-board/img/live-b.webp",
      "leg": "A glass of water and a notepad, before a board meeting",
      "pede": "Look at the picture: a glass of water and a notepad, waiting before a board meeting. Write 2 or 3 sentences presenting a real idea to a boss (a tool, a budget, a change). Use <b>The bottom line is that …</b>, <b>What we're asking for is …</b> or a noun phrase like <b>a 30% reduction in …</b>.",
      "ph": "The bottom line is that …",
      "ex": "The bottom line is that the new tool works. We saw a 30% reduction in build time. What we're asking for is one more engineer."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think about your own work this month. What is the bottom line, in one sentence?",
          "ph": "The bottom line is that …",
          "ex": "The bottom line is that we need two more weeks to finish the migration safely."
        },
        {
          "q": "What is one result you are proud of? Give the number, then say what you would ask for.",
          "ph": "A … reduction in … What I'm asking for is …",
          "ex": "A 20% reduction in page load time. What I'm asking for is time to do the same for mobile."
        }
      ]
    }
  }
};
