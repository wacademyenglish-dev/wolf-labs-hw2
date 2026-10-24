/* ALL I WANT IS TIME · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: cleft sentences that put one thing in the spotlight. C1: nenhum português. Só imagens live-* (escuras). */
window.HW2 = {
  "id": "all-i-want-is-time",
  "titulo": "All I Want Is Time",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e545f6d6e48e/all-i-want-is-time/img/live-capa.webp",
  "alvo": "cleft sentences that put one thing in the spotlight: All I want is ..., The only thing I need is ..., The reason (why) ... is that ..., The last thing I need is ...; never 'all what', 'the reason is because'",
  "abrir": "If you could have one thing right now, what would it be?",
  "fecho": "Put one thing in the spotlight: <b>All I want is time.</b> <b>The only thing I need is a quiet evening.</b> <b>The reason I said no is that</b> ... (never <i>the reason is because</i>). And never <i>all what</i>: <i>all <b>I</b> want</i>.",
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
      "sub": "Mia and Leo, the day after a big decision. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/e545f6d6e48e/all-i-want-is-time/img/live-conversa.webp",
      "leg": "An empty bench under a street lamp",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I heard you turned down the promotion. Everyone's talking about it."
        },
        {
          "quem": "leo",
          "t": "Of course they are. But it really isn't about the money."
        },
        {
          "quem": "mia",
          "t": "Then what is it? Surely the only thing anyone wants at our age is a bigger title."
        },
        {
          "quem": "leo",
          "t": "Honestly, all I want is time. Time to cook, to read, to do absolutely nothing."
        },
        {
          "quem": "mia",
          "t": "Fair enough. So the reason you said no is that the job would eat your evenings?"
        },
        {
          "quem": "leo",
          "t": "Exactly. The last thing I need is another year of answering emails at midnight."
        },
        {
          "quem": "mia",
          "t": "And the team? The one person who'll miss you is me, you know."
        },
        {
          "quem": "leo",
          "t": "Stop it, you'll be fine. All you have to do is have lunch with me on Fridays."
        },
        {
          "quem": "mia",
          "t": "Deal. But don't be surprised if I turn up and ask for your recipes."
        },
        {
          "quem": "leo",
          "t": "That's the least I can do."
        }
      ],
      "perguntas": [
        {
          "q": "Why did Leo turn down the promotion?",
          "op": [
            "He wants more free time",
            "He wants a higher salary",
            "He dislikes the team"
          ],
          "a": 0,
          "por": "All I want is time."
        },
        {
          "q": "What is the last thing Leo needs?",
          "op": [
            "Another year of late emails",
            "A bigger title",
            "A longer lunch break"
          ],
          "a": 0,
          "por": "The last thing I need is another year of answering emails at midnight."
        },
        {
          "q": "What does Leo ask Mia to do?",
          "op": [
            "Have lunch with him on Fridays",
            "Take over his job",
            "Cook for the team"
          ],
          "a": 0,
          "por": "All you have to do is have lunch with me on Fridays."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with one thing in the spotlight. Hear it, then say it.",
      "frases": [
        {
          "t": "All I really want after a long week is a quiet evening.",
          "img": "https://wolf-labs.pages.dev/p/e545f6d6e48e/all-i-want-is-time/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The only thing I miss about my old job is the people.",
          "img": "https://wolf-labs.pages.dev/p/e545f6d6e48e/all-i-want-is-time/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The reason I left the city is that I needed more space.",
          "img": "https://wolf-labs.pages.dev/p/e545f6d6e48e/all-i-want-is-time/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "All I want is ..., the reason is that ... Four quick ones.",
      "regra": "<b>All I want is</b> + noun · <b>All I want to do is</b> + verb · <b>The reason (why) ... is that</b> · <b>The only thing I need is</b> · never <i>all what</i>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The only thing she ever asked for was time.",
          "aceita": [],
          "d": "Hint: the spotlight starts with <b>The only thing</b> and ends after <b>was</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "All what I want is some peace.",
          "r": "All I want is some peace.",
          "aceita": [
            "All that I want is some peace."
          ],
          "d": "Hint: in this spotlight structure there is no <i>what</i>: <b>All I want</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The reason is because I was tired.",
          "r": "The reason is that I was tired.",
          "aceita": [
            "The reason was that I was tired."
          ],
          "d": "Hint: <b>the reason</b> is followed by <b>that</b>, not <i>because</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "All I want is relax.",
          "r": "All I want is to relax.",
          "aceita": [
            "All I want to do is relax."
          ],
          "d": "Hint: after <b>All I want is</b>, a verb needs <b>to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e545f6d6e48e/all-i-want-is-time/img/live-capa.webp",
      "leg": "An hourglass and a candle in the dark",
      "pede": "Look at the picture: an hourglass and a candle, and time running out. Write 2 or 3 sentences about what really matters to you. Use two of these: <b>All I want is ...</b>, <b>The only thing I need is ...</b>, <b>The reason why ... is that ...</b>, <b>The last thing I need is ...</b>.",
      "ph": "All I want is …",
      "ex": "All I want is a calm morning. The only thing I need is a good coffee, and the last thing I need is a meeting at eight."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is the one thing you would never give up? Why?",
          "ph": "The only thing I would never give up is … because …",
          "ex": "The only thing I would never give up is my Sunday walk. It is the one hour that really belongs to me."
        },
        {
          "q": "Think of a big decision you made. What was the reason?",
          "ph": "The reason I … is that …",
          "ex": "The reason I changed jobs is that I wanted to learn something new."
        }
      ]
    }
  }
};
