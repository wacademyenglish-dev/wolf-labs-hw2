/* THOUGH EXHAUSTED, SHE RAN · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: orações sem verbo na escrita literária (Though exhausted, she ran). C1: nenhum português. */
window.HW2 = {
  "id": "though-exhausted-she-ran",
  "titulo": "Though Exhausted, She Ran",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/6b5192b78611/though-exhausted-she-ran/img/live-capa.webp",
  "alvo": "clauses with no verb in literary writing: cut the subject AND the be, keep the linking word (though, although, when, while, once, if) and the adjective / participle / place; the subject after the comma is the one the clause is about; never Though was exhausted, Despite tired, Once finishing",
  "abrir": "Think of a moment when you kept going even though you were tired. What kept you going?",
  "fecho": "Cut the subject <b>and</b> the verb <i>be</i>; keep the linking word and the rest: <i>Though she was exhausted</i> → <b>Though exhausted</b>, she ran. <i>When she was asked</i> → <b>When asked</b>, she shrugged. The subject after the comma must be the one the clause is about. With no linking word it still works: <i>Alone at the window, she waited.</i>",
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
      "sub": "Mia and Leo edit her short story. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/6b5192b78611/though-exhausted-she-ran/img/live-pagina.webp",
      "leg": "A notebook and a cup, late at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, thanks for sending the first page of your story. Honestly? It's good, but wordy."
        },
        {
          "quem": "mia",
          "t": "Wordy? Where?"
        },
        {
          "quem": "leo",
          "t": "Here: Although she was exhausted, she kept walking. Try Though exhausted, she kept walking."
        },
        {
          "quem": "mia",
          "t": "Oh, drop the subject and the verb. That's neat."
        },
        {
          "quem": "leo",
          "t": "And here: When she was asked about the storm, she shrugged. Make it When asked about the storm, she shrugged."
        },
        {
          "quem": "mia",
          "t": "Same trick. But the subject after the comma has to be the person who was asked."
        },
        {
          "quem": "leo",
          "t": "Exactly. Walking home, the rain started, is wrong. The rain wasn't walking."
        },
        {
          "quem": "mia",
          "t": "Ha, a classic. What about Once finished, the lights went out?"
        },
        {
          "quem": "leo",
          "t": "Same problem. Who finished? Try Once she had finished, the lights went out."
        },
        {
          "quem": "mia",
          "t": "And with no linking word at all? Alone at the window, she waited."
        },
        {
          "quem": "leo",
          "t": "Lovely. That one works, and it sounds like a novel."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo suggest for the first sentence?",
          "op": [
            "Cutting the subject and the verb",
            "Adding more detail",
            "Making it longer"
          ],
          "a": 0,
          "por": "Try Though exhausted, she kept walking."
        },
        {
          "q": "What is wrong with Walking home, the rain started?",
          "op": [
            "The rain was not the one walking",
            "It has no comma",
            "It is too long"
          ],
          "a": 0,
          "por": "The rain wasn't walking."
        },
        {
          "q": "Which line does Leo like at the end?",
          "op": [
            "Alone at the window, she waited",
            "Once finished, the lights went out",
            "When asked about the storm"
          ],
          "a": 0,
          "por": "Lovely. That one works, and it sounds like a novel."
        }
      ]
    },
    "out": {
      "sub": "Three literary sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "Though exhausted, she kept running toward the lighthouse.",
          "img": "https://wolf-labs.pages.dev/p/6b5192b78611/though-exhausted-she-ran/img/live-farol.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "When asked about the race, he simply smiled.",
          "img": "https://wolf-labs.pages.dev/p/6b5192b78611/though-exhausted-she-ran/img/live-percurso.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Alone at the start line, she waited for the sun.",
          "img": "https://wolf-labs.pages.dev/p/6b5192b78611/though-exhausted-she-ran/img/live-largada.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Verbless clauses, the right way. Four quick ones.",
      "regra": "Cut the <b>subject</b> and the <b>be</b> · keep <b>though / when / while / once</b> · the subject after the comma is the one the clause is about.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "While waiting for the call, she paced the hall.",
          "aceita": [],
          "d": "Hint: <b>while</b> + -ing, then the subject after the comma."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Though was exhausted, she kept running.",
          "r": "Though exhausted, she kept running.",
          "aceita": [
            "Though she was exhausted, she kept running."
          ],
          "d": "Hint: cut the verb as well, or give it a subject. <i>Though was</i> has neither."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Despite tired, she kept running.",
          "r": "Despite being tired, she kept running.",
          "aceita": [
            "Despite feeling tired, she kept running.",
            "Though tired, she kept running.",
            "Although tired, she kept running.",
            "Despite her tiredness, she kept running."
          ],
          "d": "Hint: <b>despite</b> needs a noun or -ing. Or use <b>though</b> with the adjective."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Once finishing, she sat down.",
          "r": "Once finished, she sat down.",
          "aceita": [
            "Once she finished, she sat down.",
            "Once she had finished, she sat down.",
            "Once she'd finished, she sat down."
          ],
          "d": "Hint: <b>once</b> + participle (<b>finished</b>), not -ing."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/6b5192b78611/though-exhausted-she-ran/img/live-pagina.webp",
      "leg": "A notebook and a cup, late at night",
      "pede": "Look at the picture: a notebook and a cup on a desk at night. Write 2 or 3 literary sentences about a hard day. Use at least one clause with no verb: <b>Though tired</b>, <b>When asked</b>, <b>Alone at</b> …",
      "ph": "Though tired, I …",
      "ex": "Though exhausted, I finished the report. When asked about my plans, I only shrugged. Alone in the office, I turned off the light."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Tell me about a hard day. Start with 'Though …' or 'When …'.",
          "ph": "Though …, I …",
          "ex": "Though nervous, I spoke first in the meeting."
        },
        {
          "q": "What did you finish even though you were tired? Use a clause with no verb.",
          "ph": "Though …, I …",
          "ex": "Though sleepy, I ran five kilometres on Sunday."
        }
      ]
    }
  }
};
