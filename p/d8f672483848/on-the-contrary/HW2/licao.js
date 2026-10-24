/* ON THE CONTRARY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: on the contrary x on the other hand x conversely / in contrast to x far from. C1: nenhum português. Imagens live-capa e live-conversa (escuras). */
window.HW2 = {
  "id": "on-the-contrary",
  "titulo": "On the Contrary",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/d8f672483848/on-the-contrary/img/live-capa.webp",
  "alvo": "on the contrary (no, the opposite is true) · on the other hand (the other side of the SAME thing: both true) · conversely / in contrast to (two different things compared) · far from it / far from + adjective or -ing / quite the opposite; never 'on the contrary' to add a second side, 'in contrast of', 'far of'",
  "abrir": "What is something people say that you think is simply not true?",
  "fecho": "<b>On the contrary</b> = no, the opposite is true: <i>Lazy? On the contrary, she works twelve hours.</i> <b>On the other hand</b> = another side of the same thing, and both are true: <i>It's small. On the other hand, it's cheap.</i> <b>Conversely</b> and <b>in contrast to</b> compare two different things. <b>Far from it</b> and <b>quite the opposite</b> deny strongly: <i>far from cheap</i>, never <i>far of</i>.",
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
      "sub": "Mia and Leo argue about a newspaper column. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/d8f672483848/on-the-contrary/img/live-capa.webp",
      "leg": "A chessboard between two empty chairs",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, did you read that column? It claims working from home makes people lazy."
        },
        {
          "quem": "leo",
          "t": "Lazy? On the contrary, I work longer hours at home. I never switch off."
        },
        {
          "quem": "mia",
          "t": "Same here. Far from slacking, we're all answering emails at ten at night."
        },
        {
          "quem": "leo",
          "t": "Mind you, it isn't all bad. On the one hand, I save two hours of commuting. On the other hand, I haven't seen my colleagues in months."
        },
        {
          "quem": "mia",
          "t": "That's the trade-off. Two sides of the same coin, and both are true."
        },
        {
          "quem": "leo",
          "t": "Whereas my brother, conversely, can't stand working at home. He needs the noise of an office."
        },
        {
          "quem": "mia",
          "t": "In contrast to you, then. Is he a quiet person by nature?"
        },
        {
          "quem": "leo",
          "t": "Quiet? Quite the opposite. He talks nonstop, which is exactly why he needs people around."
        },
        {
          "quem": "mia",
          "t": "Funny how the same thing suits one person and not another."
        },
        {
          "quem": "leo",
          "t": "So is remote work good for us? Honestly, that depends on who you ask."
        }
      ],
      "perguntas": [
        {
          "q": "Does Leo agree that working from home makes people lazy?",
          "op": [
            "No, he works longer hours at home",
            "Yes, he does very little",
            "He has no opinion about it"
          ],
          "a": 0,
          "por": "Lazy? On the contrary, I work longer hours at home."
        },
        {
          "q": "Which downside of working from home does Leo mention?",
          "op": [
            "He hasn't seen his colleagues in months",
            "His commute is two hours longer",
            "His brother keeps interrupting him"
          ],
          "a": 0,
          "por": "On the other hand, I haven't seen my colleagues in months."
        },
        {
          "q": "Why does Leo's brother want an office?",
          "op": [
            "He talks nonstop and needs people around",
            "He is shy and likes silence",
            "He dislikes his own flat"
          ],
          "a": 0,
          "por": "He talks nonstop, which is exactly why he needs people around."
        }
      ]
    },
    "out": {
      "sub": "Three lines from a newspaper column. Hear it, then say it.",
      "frases": [
        {
          "t": "Lazy? On the contrary, I work longer hours at home.",
          "img": "https://wolf-labs.pages.dev/p/d8f672483848/on-the-contrary/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "On the one hand, I save time. On the other hand, I miss my colleagues.",
          "img": "https://wolf-labs.pages.dev/p/d8f672483848/on-the-contrary/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "In contrast to me, my brother can't stand working from home.",
          "img": "https://wolf-labs.pages.dev/p/d8f672483848/on-the-contrary/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Opposite or other side? Four quick ones.",
      "regra": "<b>on the contrary</b> = no, the opposite · <b>on the other hand</b> = both true · <b>in contrast to</b> · <b>far from</b> + adjective / -ing.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "In contrast to villages, cities let you choose your friends.",
          "aceita": [],
          "d": "Hint: <b>in contrast to</b> compares two different things: villages and cities."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one phrase is wrong.",
          "mostra": "It's small. On the contrary, it's cheap.",
          "r": "It's small. On the other hand, it's cheap.",
          "aceita": [],
          "d": "Hint: small is true, and cheap is true too: two sides of one flat. <b>On the contrary</b> would deny the first idea."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "In contrast of cities, villages are quiet.",
          "r": "In contrast to cities, villages are quiet.",
          "aceita": [
            "In contrast with cities, villages are quiet."
          ],
          "d": "Hint: the preposition is <b>in contrast to</b> (or <i>with</i>), never <i>of</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The film is far of being boring.",
          "r": "The film is far from being boring.",
          "aceita": [
            "The film is far from boring."
          ],
          "d": "Hint: <b>far from</b> + adjective or -ing, never <i>far of</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/d8f672483848/on-the-contrary/img/live-capa.webp",
      "leg": "A chessboard between two empty chairs: two sides",
      "pede": "Look at the picture: a chessboard between two empty chairs, two sides of one game. Think of a myth people believe (about cities, social media, gyms, video games…). Write 2 or 3 sentences: deny it with <b>on the contrary</b> or <b>far from it</b>, then show two sides with <b>on the one hand … on the other hand …</b>.",
      "ph": "People say … On the contrary, …",
      "ex": "People say video games make children lazy. On the contrary, many of them learn to solve problems. On the one hand, games take time. On the other hand, they can teach teamwork."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Is there a common belief you strongly disagree with? What do you say?",
          "ph": "People say … On the contrary, …",
          "ex": "People say young people never read. On the contrary, my cousins read all the time, just on their phones."
        },
        {
          "q": "Compare two people or places you know, using conversely or in contrast to.",
          "ph": "In contrast to …, …",
          "ex": "In contrast to my sister, I love getting up early. She, conversely, is at her best after midnight."
        }
      ]
    }
  }
};
