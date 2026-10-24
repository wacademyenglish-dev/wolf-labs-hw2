/* LET ME REPHRASE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: reformular e pedir clareza (in other words / what I mean is / mean by). C1: nenhum português. */
window.HW2 = {
  "id": "let-me-rephrase",
  "titulo": "Let Me Rephrase",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/fa29bde7e68b/let-me-rephrase/img/live-capa.webp",
  "alvo": "rephrasing and clarifying: In other words, ... / That is to say, ... / What I mean is ... / To put it another way, ... / Let me rephrase that / or rather, ...; asking for clarity: What exactly do you mean by ...? / Are you saying that ...? / So, if I understand correctly, ...",
  "abrir": "When did someone's explanation leave you more confused than before?",
  "fecho": "Say it again, better: <b>In other words, ... · That is to say, ... · To put it another way, ...</b> Correct yourself: <b>What I mean is ... · or rather, ... · Let me rephrase that.</b> Ask for clarity: <b>What exactly do you mean by ...? · Are you saying that ...?</b> It is <b>mean by</b>, never <i>mean with</i>, and <i>or be</i> and <i>want to say</i> are not English.",
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
  "rate": "-8%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo after a difficult meeting. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/fa29bde7e68b/let-me-rephrase/img/live-capa.webp",
      "leg": "Two armchairs, one difficult conversation",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I've just left the budget review, and I think I made a mess of it."
        },
        {
          "quem": "mia",
          "t": "What happened? What exactly do you mean by a mess?"
        },
        {
          "quem": "leo",
          "t": "I told them the project was running slightly behind schedule. Or rather, a lot behind. Let me rephrase that: we're going to miss the deadline."
        },
        {
          "quem": "mia",
          "t": "Are you saying that the client doesn't know yet?"
        },
        {
          "quem": "leo",
          "t": "Not exactly. What I mean is, they suspect something's wrong, but they have no idea how bad it is."
        },
        {
          "quem": "mia",
          "t": "So, if I understand correctly, you'd like me to help you break the news."
        },
        {
          "quem": "leo",
          "t": "In other words, yes. To put it bluntly, I'm dreading that call."
        },
        {
          "quem": "mia",
          "t": "To put it another way, you'd rather someone else said it."
        },
        {
          "quem": "leo",
          "t": "That is to say, I'd rather say it myself, but with you in the room."
        },
        {
          "quem": "mia",
          "t": "Fine. Let's draft it together. Keep it simple: we need two more weeks."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo correct in his own words?",
          "op": [
            "He says the project is a lot behind, not slightly behind",
            "He says the budget has been cut",
            "He says the client has already cancelled"
          ],
          "a": 0,
          "por": "Slightly behind schedule. Or rather, a lot behind."
        },
        {
          "q": "What does the client know so far?",
          "op": [
            "That something is wrong, but not how bad it is",
            "That the deadline will be missed",
            "Nothing at all"
          ],
          "a": 0,
          "por": "They suspect something's wrong, but they have no idea how bad it is."
        },
        {
          "q": "What does Leo want from Mia?",
          "op": [
            "To be in the room when he makes the call",
            "To make the call for him",
            "To change the deadline"
          ],
          "a": 0,
          "por": "I'd rather say it myself, but with you in the room."
        }
      ]
    },
    "out": {
      "sub": "Three ways to say it again. Hear it, then say it.",
      "frases": [
        {
          "t": "I told them it was slightly behind. Or rather, a lot behind.",
          "img": "https://wolf-labs.pages.dev/p/fa29bde7e68b/let-me-rephrase/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Sorry, what exactly do you mean by a mess?",
          "img": "https://wolf-labs.pages.dev/p/fa29bde7e68b/let-me-rephrase/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "So, if I understand correctly, you'd like me to help.",
          "img": "https://wolf-labs.pages.dev/p/fa29bde7e68b/let-me-rephrase/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Say it again, and ask for it again. Four quick ones.",
      "regra": "<b>In other words, ...</b> · <b>What I mean is ...</b> · <b>mean by</b> (never mean with) · <b>Are you saying that ...?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "In other words, we are going to miss the deadline.",
          "aceita": [],
          "d": "Hint: <b>In other words</b> introduces the same idea, said more clearly."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one phrase is not English.",
          "mostra": "It's pricey, or be, we can't afford it.",
          "r": "It's pricey; in other words, we can't afford it.",
          "aceita": [
            "It's pricey, in other words, we can't afford it.",
            "It's pricey, that is to say, we can't afford it.",
            "It's pricey, which means we can't afford it."
          ],
          "d": "Hint: the English way to say the same thing again is <b>in other words</b> or <b>that is to say</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one phrase is wrong.",
          "mostra": "What I want to say is, we need time.",
          "r": "What I mean is, we need time.",
          "aceita": [
            "What I'm trying to say is, we need time.",
            "What I'm saying is, we need time."
          ],
          "d": "Hint: when you correct or clarify yourself, natives say <b>What I mean is</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "What do you mean with that?",
          "r": "What do you mean by that?",
          "aceita": [
            "What exactly do you mean by that?"
          ],
          "d": "Hint: the verb takes <b>by</b>: <b>mean by</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/fa29bde7e68b/let-me-rephrase/img/live-capa.webp",
      "leg": "Two armchairs in a quiet room",
      "pede": "Look at the picture: two armchairs, where an expert explains something difficult. Write 2 or 3 sentences: say something about your job in a complicated way, then rephrase it. Use <b>In other words</b>, <b>To put it simply</b> or <b>What I mean is</b>.",
      "ph": "In my job I … To put it simply, …",
      "ex": "In my job I coordinate cross-functional deliverables. To put it simply, I make sure everyone finishes their work on time. What I mean is, I keep the team organised."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "When did an expert confuse you? What did you ask them?",
          "ph": "I asked, 'What exactly do you mean by …?'",
          "ex": "My bank explained my loan, and I asked, 'What exactly do you mean by variable interest?'"
        },
        {
          "q": "How would you explain your job to a child? Start with 'To put it simply'.",
          "ph": "To put it simply, I …",
          "ex": "To put it simply, I help people learn English so they can feel confident."
        }
      ]
    }
  }
};
