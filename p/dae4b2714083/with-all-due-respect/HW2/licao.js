/* WITH ALL DUE RESPECT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: discordar com diplomacia (take your point / slightly differently / with all due respect). C1: nenhum português. Imagens live-capa e live-conversa (escuras). */
window.HW2 = {
  "id": "with-all-due-respect",
  "titulo": "With All Due Respect",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/dae4b2714083/with-all-due-respect/img/live-capa.webp",
  "alvo": "disagreeing diplomatically: I take your point, but ... · I see it slightly differently · I'm not sure I'd go that far · Correct me if I'm wrong, but ... · I hear what you're saying. However, ... · softeners (a bit, slightly, perhaps, might); With all due respect is a warning, not a compliment; never 'with all respect', 'I see it different', 'disagree of'",
  "abrir": "Think of the last time someone disagreed with you politely. What did they say?",
  "fecho": "<b>Recognise first, then soften</b>: <i>I take your point, but I see it slightly differently.</i> <b>Ask, don't accuse</b>: <i>Correct me if I'm wrong, but didn't we vote last spring?</i> Cool it down with <b>a bit, slightly, perhaps, might</b>. The full phrase is <b>with all due respect</b>, and it usually warns that something sharp is coming. You <b>disagree with</b> someone, never <i>of</i>.",
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
      "sub": "Mia and Leo before a tense residents' meeting. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/dae4b2714083/with-all-due-respect/img/live-capa.webp",
      "leg": "The meeting room, before the meeting",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you're chairing the residents' meeting tonight, aren't you? I hear Mr. Costa wants to scrap the vote on the garden."
        },
        {
          "quem": "leo",
          "t": "He does. I take his point that a pool would be lovely, but I'm not sure I'd go as far as cancelling a vote."
        },
        {
          "quem": "mia",
          "t": "Careful. If you open with 'with all due respect', he'll hear 'you're an idiot'."
        },
        {
          "quem": "leo",
          "t": "True, that phrase usually warns people that something sharp is coming. I'd rather say I see it slightly differently."
        },
        {
          "quem": "mia",
          "t": "Much better. And if you aren't certain of the facts, ask. Correct me if I'm wrong, but didn't we vote last spring?"
        },
        {
          "quem": "leo",
          "t": "Right. That way I'm inviting him to correct me, instead of telling him he's wrong."
        },
        {
          "quem": "mia",
          "t": "What if he gets heated?"
        },
        {
          "quem": "leo",
          "t": "Then I'll say, I hear what you're saying. However, perhaps we could look at the costs first. Perhaps and might soften almost anything."
        },
        {
          "quem": "mia",
          "t": "Add 'a bit' and you're a diplomat. It might be a bit expensive sounds far kinder than it's too expensive."
        },
        {
          "quem": "leo",
          "t": "Fine. Wish me luck. If I come back with a pool, you'll know I failed."
        },
        {
          "quem": "mia",
          "t": "If you come back with the vote intact, the coffee's on me."
        }
      ],
      "perguntas": [
        {
          "q": "Why does Mia warn Leo about 'with all due respect'?",
          "op": [
            "It often signals that something sharp is coming",
            "It sounds far too polite for a meeting",
            "It means that he agrees with Mr. Costa"
          ],
          "a": 0,
          "por": "If you open with 'with all due respect', he'll hear 'you're an idiot'."
        },
        {
          "q": "What does Leo plan to say instead?",
          "op": [
            "I see it slightly differently",
            "End of story",
            "You are completely wrong"
          ],
          "a": 0,
          "por": "I'd rather say I see it slightly differently."
        },
        {
          "q": "How does 'Correct me if I'm wrong' help Leo?",
          "op": [
            "He invites Mr. Costa to correct him instead of accusing him",
            "It proves that Leo is right",
            "It ends the argument quickly"
          ],
          "a": 0,
          "por": "That way I'm inviting him to correct me, instead of telling him he's wrong."
        }
      ]
    },
    "out": {
      "sub": "Three ways to disagree without a war. Hear it, then say it.",
      "frases": [
        {
          "t": "I take your point, but I see it slightly differently.",
          "img": "https://wolf-labs.pages.dev/p/dae4b2714083/with-all-due-respect/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Correct me if I'm wrong, but didn't we vote on this last spring?",
          "img": "https://wolf-labs.pages.dev/p/dae4b2714083/with-all-due-respect/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I hear what you're saying. However, perhaps we could look at the costs first.",
          "img": "https://wolf-labs.pages.dev/p/dae4b2714083/with-all-due-respect/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Soften it, keep the peace. Four quick ones.",
      "regra": "<b>I take your point, but ...</b> · <b>I see it slightly differently</b> · <b>Correct me if I'm wrong, but ...</b> · <b>with all due respect</b> (a warning) · <b>disagree with</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I take your point, but I see it differently.",
          "aceita": [],
          "d": "Hint: recognise the other view first, then talk about <i>your</i> view: <b>I see it differently</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "With all respect, I see it differently.",
          "r": "With all due respect, I see it differently.",
          "aceita": [],
          "d": "Hint: the fixed phrase is <b>with all due respect</b>. And use it rarely: it often comes before something sharp."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I see it slightly different from you.",
          "r": "I see it slightly differently from you.",
          "aceita": [
            "I see it slightly differently than you."
          ],
          "d": "Hint: it describes how you <i>see</i> it, so it needs an adverb: <b>differently</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I disagree of that, but I see why.",
          "r": "I disagree with that, but I see why.",
          "aceita": [
            "I disagree about that, but I see why."
          ],
          "d": "Hint: you <b>disagree with</b> a person or an idea, never <i>of</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/dae4b2714083/with-all-due-respect/img/live-conversa.webp",
      "leg": "A quiet lounge after a tense meeting",
      "pede": "Look at the picture: a quiet lounge, two cups on a table, after a tense meeting. Write 2 or 3 sentences disagreeing politely with someone about a real topic (a plan, a rule, a price). Use <b>I take your point, but …</b>, <b>I see it slightly differently</b> or <b>I'm not sure I'd go that far</b>.",
      "ph": "I take your point, but …",
      "ex": "I take your point, but I see it slightly differently. I'm not sure I'd go that far, because the plan might be a bit expensive. Perhaps we could look at the numbers first."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a recent disagreement at work, at school or at home. How could you have said it more diplomatically?",
          "ph": "I could have said …",
          "ex": "I could have said that I see it slightly differently, instead of telling him he was wrong."
        },
        {
          "q": "Someone says: 'Everybody hates the new schedule.' What do you answer?",
          "ph": "I'm not sure I'd go that far …",
          "ex": "I'm not sure I'd go that far. A few people are unhappy, but perhaps we could ask everyone."
        }
      ]
    }
  }
};
