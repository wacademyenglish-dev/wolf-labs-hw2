/* MOVE THE NEEDLE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: idioms e collocations de negócios. C1: nenhum português. */
window.HW2 = {
  "id": "move-the-needle",
  "titulo": "Move the Needle",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/22071d65cc52/move-the-needle/img/live-medidor.webp",
  "alvo": "business idioms as blocks (move the needle, a seat at the table, raise the bar, lead by example, keep someone in the loop, on the same page, an uphill battle) and collocations (make a decision, take a risk, meet a deadline, hold a meeting, raise a concern, reach a consensus); only the verb changes; never do a decision, realize a meeting, arrive to a consensus, in the same page",
  "abrir": "Who led by example in your life? What did they do?",
  "fecho": "An <b>idiom</b> is a block: only the verb moves. <i>move the needle</i> · <i>a seat <b>at</b> the table</i> · <i>on the same page</i> · <i>lead <b>by</b> example</i> · <i>keep you in the loop</i>. A <b>collocation</b> is a pair that walks together: <b>make</b> a decision · <b>take</b> a risk · <b>meet</b> a deadline · <b>hold</b> a meeting · <b>raise</b> a concern · <b>reach</b> a consensus.",
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
      "sub": "Mia and Leo before a team meeting. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/22071d65cc52/move-the-needle/img/live-palco.webp",
      "leg": "A stage with one light",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, we hold the meeting at ten, and we must reach a consensus on the new plan."
        },
        {
          "quem": "leo",
          "t": "Fine. Are you on the same page with Dana about the deadline?"
        },
        {
          "quem": "mia",
          "t": "Not yet. I keep her in the loop, but she says the deadline is an uphill battle."
        },
        {
          "quem": "leo",
          "t": "Then raise your concern early. And make the decision with the whole team, not alone."
        },
        {
          "quem": "mia",
          "t": "I want everyone at the table. Everyone deserves a seat at the table."
        },
        {
          "quem": "leo",
          "t": "Good. Does the plan move the needle for the client?"
        },
        {
          "quem": "mia",
          "t": "Yes, if we meet the deadline. It raises the bar for the whole department."
        },
        {
          "quem": "leo",
          "t": "Then take the risk. And lead by example: be on time."
        },
        {
          "quem": "mia",
          "t": "Always. Wish me luck."
        }
      ],
      "perguntas": [
        {
          "q": "What must the team do at ten?",
          "op": [
            "Reach a consensus on the new plan",
            "Choose a new manager",
            "Cancel the deadline"
          ],
          "a": 0,
          "por": "We must reach a consensus on the new plan."
        },
        {
          "q": "What does Dana think about the deadline?",
          "op": [
            "It is an uphill battle",
            "It is too easy",
            "It is perfect"
          ],
          "a": 0,
          "por": "She says the deadline is an uphill battle."
        },
        {
          "q": "How should Mia lead the team?",
          "op": [
            "By example: be on time",
            "By giving orders",
            "By staying silent"
          ],
          "a": 0,
          "por": "Lead by example: be on time."
        }
      ]
    },
    "out": {
      "sub": "Three lines from the meeting. Hear it, then say it.",
      "frases": [
        {
          "t": "We hold the meeting at ten, and we must reach a consensus.",
          "img": "https://wolf-labs.pages.dev/p/22071d65cc52/move-the-needle/img/live-palco.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Everyone deserves a seat at the table.",
          "img": "https://wolf-labs.pages.dev/p/22071d65cc52/move-the-needle/img/live-plateia.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Does the plan move the needle for the client?",
          "img": "https://wolf-labs.pages.dev/p/22071d65cc52/move-the-needle/img/live-medidor.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Blocks and pairs. Four quick ones.",
      "regra": "idiom = a block, only the verb moves · <b>make</b> a decision · <b>reach</b> a consensus (not <i>arrive to</i>) · <b>on</b> the same page",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I will keep you in the loop.",
          "aceita": [],
          "d": "Hint: <b>keep someone in the loop</b>: the verb moves, <b>in the loop</b> stays."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: use the right pair.",
          "mostra": "We need to do a decision today.",
          "r": "We need to make a decision today.",
          "aceita": [],
          "d": "Hint: the pair is <b>make a decision</b>, never <i>do a decision</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: use the right pair.",
          "mostra": "We arrived to a consensus.",
          "r": "We reached a consensus.",
          "aceita": [
            "We came to a consensus.",
            "We arrived at a consensus.",
            "We have reached a consensus."
          ],
          "d": "Hint: the pair is <b>reach a consensus</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Are we in the same page?",
          "r": "Are we on the same page?",
          "aceita": [],
          "d": "Hint: the block keeps its preposition: <b>on</b> the same page."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/22071d65cc52/move-the-needle/img/live-bastidor.webp",
      "leg": "An empty stage and a stool",
      "pede": "Look at the picture: an empty stage with a stool and a small light. Write 2 or 3 sentences about a person you admire. Use one idiom (<b>move the needle, lead by example, raise the bar</b>) and a real pair like <b>make a decision</b> or <b>take a risk</b>.",
      "ph": "My boss leads by example: …",
      "ex": "My aunt leads by example: she is always first at work. She took a risk when she opened her own shop. She raised the bar for the whole family."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who led by example in your life? What did they do?",
          "ph": "… led by example: …",
          "ex": "My coach led by example: he trained every morning."
        },
        {
          "q": "What was your last big decision, or the last deadline you met?",
          "ph": "I made the decision to … / I met a deadline …",
          "ex": "I made the decision to study at night, and I met every deadline."
        }
      ]
    }
  }
};
