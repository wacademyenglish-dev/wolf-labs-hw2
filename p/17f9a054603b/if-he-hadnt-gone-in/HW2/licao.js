/* IF HE HADN’T GONE IN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: third conditional. Filme: falas originais, no mundo da aula, sem violência. B2: nenhum português. Imagens: só livro/estatua (as outras tem sangue). */
window.HW2 = {
  "id": "if-he-hadnt-gone-in",
  "titulo": "If He Hadn’t Gone In",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/17f9a054603b/if-he-hadnt-gone-in/img/live-livro.webp",
  "alvo": "third conditional: if + had + past participle, would / could / might have + past participle (a past that did not happen); never would after if, never would + base without have, never had + past simple (had went)",
  "abrir": "What would have happened if you had missed your bus this morning?",
  "fecho": "<b>If + had + past participle, would have + past participle</b>: <i>If I hadn't opened the door, I wouldn't have found it.</i> It is about a past that did not happen. Never <i>would</i> after <i>if</i>. <b>Might have</b> and <b>could have</b> = less sure.",
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
      "sub": "Mia and Leo talk about a late-night series. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/17f9a054603b/if-he-hadnt-gone-in/img/live-livro.webp",
      "leg": "A phone and a cup on a dark desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, how did you find that series? You read it all night."
        },
        {
          "quem": "mia",
          "t": "By accident. If my cousin hadn't sent me the link, I wouldn't have started it."
        },
        {
          "quem": "leo",
          "t": "And if you hadn't started it, what would you have done last night?"
        },
        {
          "quem": "mia",
          "t": "I would have gone to bed early. I might even have gone for a run."
        },
        {
          "quem": "leo",
          "t": "So one link changed your night."
        },
        {
          "quem": "mia",
          "t": "It did. If I had known it was that long, I would have waited for the weekend."
        },
        {
          "quem": "leo",
          "t": "If I had been there, I would have stopped you."
        },
        {
          "quem": "mia",
          "t": "You couldn't have. I would have hidden my phone under the pillow."
        }
      ],
      "perguntas": [
        {
          "q": "Why did Mia start the series?",
          "op": [
            "Her cousin sent her the link",
            "Leo told her about it",
            "She saw an ad"
          ],
          "a": 0,
          "por": "If my cousin hadn't sent me the link, I wouldn't have started it."
        },
        {
          "q": "What would Mia have done if she hadn't started?",
          "op": [
            "Gone to bed early",
            "Read all night",
            "Called Leo"
          ],
          "a": 0,
          "por": "I would have gone to bed early."
        },
        {
          "q": "What would Mia have done if she had known it was long?",
          "op": [
            "Waited for the weekend",
            "Never started",
            "Asked Leo"
          ],
          "a": 0,
          "por": "If I had known it was that long, I would have waited for the weekend."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about choices. Hear it, then say it.",
      "frases": [
        {
          "t": "If I hadn't read the first page, I would have stopped.",
          "img": "https://wolf-labs.pages.dev/p/17f9a054603b/if-he-hadnt-gone-in/img/live-livro.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If we hadn't opened that door, we wouldn't have found the hall.",
          "img": "https://wolf-labs.pages.dev/p/17f9a054603b/if-he-hadnt-gone-in/img/live-estatua.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If she had known, she would have waited.",
          "img": "https://wolf-labs.pages.dev/p/17f9a054603b/if-he-hadnt-gone-in/img/live-livro.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "If + had + participle, would have. Four quick ones.",
      "regra": "<b>if + had + past participle</b>, <b>would have + past participle</b> · never <i>would</i> after <i>if</i> · never <i>had went</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If I had known, I would have called you.",
          "aceita": [],
          "d": "Hint: <b>if + had known</b>, then <b>would have</b> + past participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If I would have known, I would have come.",
          "r": "If I had known, I would have come.",
          "aceita": [],
          "d": "Hint: no <b>would</b> after <i>if</i>. Use <b>had</b> + past participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "If I had known, I would told you.",
          "r": "If I had known, I would have told you.",
          "aceita": [],
          "d": "Hint: <b>would have</b> + past participle: you need <i>have</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If he had went in, he would have found it.",
          "r": "If he had gone in, he would have found it.",
          "aceita": [],
          "d": "Hint: after <b>had</b>, use the past participle: <i>gone</i>, not <i>went</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/17f9a054603b/if-he-hadnt-gone-in/img/live-livro.webp",
      "leg": "A phone and a cup on a desk at night",
      "pede": "Look at the picture: a phone and a cup on a desk at night. Write 2 or 3 sentences about a small choice that changed something. Use <b>If + had + past participle, would have + past participle</b>.",
      "ph": "If I hadn't …, I wouldn't have …",
      "ex": "If I hadn't joined the course, I wouldn't have met my friend. If I had stayed home, I would have missed a lot."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "If you hadn't started learning English, what would you have done instead?",
          "ph": "If I hadn't started …, I would have …",
          "ex": "If I hadn't started English, I would have studied design."
        },
        {
          "q": "What small choice last year changed something big for you?",
          "ph": "If I hadn't …, I wouldn't have …",
          "ex": "If I hadn't said yes to the trip, I wouldn't have met my partner."
        }
      ]
    }
  }
};
