/* THE KEYNOTE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: hedging, discourse markers, ellipsis, signposting (unidade 10). B2: nenhum português. So live-capa (a live-conversa e um bar, nao combina). */
window.HW2 = {
  "id": "b2-final-the-keynote",
  "titulo": "The Keynote",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/3720412b3778/b2-final-the-keynote/img/live-capa.webp",
  "alvo": "sound like a confident speaker: hedging (seem to, tend to, it could be argued), discourse markers (actually, mind you, by the way), short answers (so do I, neither have I, I hope so), signposting (moving on, to sum up, what this means is); never are tend, never so after a negative",
  "abrir": "Think of a talk or a meeting you remember. How did the speaker end it?",
  "fecho": "<b>Hedge</b>: <i>seem to, tend to, it could be argued that…</i> <b>Markers</b>: <i>actually, mind you, by the way</i>. <b>Short answers</b> repeat the auxiliary: <i>so do I</i> after a positive, <i>neither have I</i> after a negative. <b>Signposts</b> guide the listener: <i>moving on, to sum up, what this means is…</i>",
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
      "sub": "Mia and Leo after a conference talk. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/3720412b3778/b2-final-the-keynote/img/live-capa.webp",
      "leg": "The empty stage",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you gave the closing talk. How did it go?"
        },
        {
          "quem": "leo",
          "t": "Well, I think the audience liked it. Actually, one man asked whether remote work seems to make teams less creative."
        },
        {
          "quem": "mia",
          "t": "And what did you say?"
        },
        {
          "quem": "leo",
          "t": "I said it could be argued that it depends. People tend to work better when they choose their place."
        },
        {
          "quem": "mia",
          "t": "Did anyone disagree?"
        },
        {
          "quem": "leo",
          "t": "A woman said, I see your point, but offices build trust. Mind you, she designs offices, so she is not neutral."
        },
        {
          "quem": "mia",
          "t": "I love working from home."
        },
        {
          "quem": "leo",
          "t": "So do I."
        },
        {
          "quem": "mia",
          "t": "I haven't missed the commute once."
        },
        {
          "quem": "leo",
          "t": "Neither have I. By the way, did you like the ending?"
        },
        {
          "quem": "mia",
          "t": "Yes. Moving on to the last slide, you said: to sum up, what this means is that trust matters more than place."
        }
      ],
      "perguntas": [
        {
          "q": "What did the man ask?",
          "op": [
            "Whether remote work seems to make teams less creative",
            "Whether offices are too noisy",
            "Whether the talk was too long"
          ],
          "a": 0,
          "por": "One man asked whether remote work seems to make teams less creative."
        },
        {
          "q": "Why does Leo say the woman is not neutral?",
          "op": [
            "She designs offices",
            "She works from home",
            "She dislikes talks"
          ],
          "a": 0,
          "por": "Mind you, she designs offices, so she is not neutral."
        },
        {
          "q": "What was Leo's final message?",
          "op": [
            "Trust matters more than place",
            "Offices are better",
            "Remote work is cheaper"
          ],
          "a": 0,
          "por": "To sum up, what this means is that trust matters more than place."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the talk. Hear it, then say it.",
      "frases": [
        {
          "t": "It could be argued that people tend to work better at home.",
          "img": "https://wolf-labs.pages.dev/p/3720412b3778/b2-final-the-keynote/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Mind you, she designs offices, so she is not neutral.",
          "img": "https://wolf-labs.pages.dev/p/3720412b3778/b2-final-the-keynote/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "To sum up, what this means is that trust matters.",
          "img": "https://wolf-labs.pages.dev/p/3720412b3778/b2-final-the-keynote/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Hedge, short answers, signposts. Four quick ones.",
      "regra": "<b>tend to / seem to</b> · <b>so do I</b> (positive) · <b>neither have I</b> (negative) · <b>to sum up, what this means is…</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "To sum up, what this means is simple.",
          "aceita": [],
          "d": "Hint: a signpost, then <b>what this means is</b> + the point."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "People are tend to work better at home.",
          "r": "People tend to work better at home.",
          "aceita": [],
          "d": "Hint: <b>tend to</b> + verb, with no <i>are</i>."
        },
        {
          "tipo": "escreve",
          "t": "Answer short: agree.",
          "mostra": "A: I love remote work. B: So I do.",
          "r": "So do I.",
          "aceita": [
            "Me too."
          ],
          "d": "Hint: the verb comes first: <b>so do I</b>."
        },
        {
          "tipo": "escreve",
          "t": "Answer short: agree with a negative.",
          "mostra": "A: I haven't finished. B: So have I.",
          "r": "Neither have I.",
          "aceita": [
            "Me neither.",
            "Nor have I."
          ],
          "d": "Hint: after a negative, use <b>neither have I</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/3720412b3778/b2-final-the-keynote/img/live-capa.webp",
      "leg": "A stage with a microphone",
      "pede": "Look at the picture: a stage with one microphone. Write 2 or 3 sentences as if you were giving the closing talk. Use <b>tend to, it could be argued, mind you</b> or <b>to sum up</b>.",
      "ph": "It could be argued that …",
      "ex": "It could be argued that people tend to learn faster in small groups. Mind you, it depends on the person. To sum up, what this means is that choice matters."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do people tend to do in your family on Sundays?",
          "ph": "We tend to …",
          "ex": "We tend to cook together and stay at home."
        },
        {
          "q": "Give a short opinion and hedge it. What seems true to you about work today?",
          "ph": "It seems to me that …",
          "ex": "It seems to me that people tend to work longer hours than before."
        }
      ]
    }
  }
};
