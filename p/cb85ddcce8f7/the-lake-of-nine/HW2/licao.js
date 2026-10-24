/* THE LAKE OF NINE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: should / shouldn't. Jogo: falas originais, sem violência. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-lake-of-nine",
  "titulo": "The Lake of Nine",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/cb85ddcce8f7/the-lake-of-nine/img/live-barco.webp",
  "alvo": "should / shouldn't for advice: You should row slowly. We shouldn't go there. Should we wait? Yes, we should. No, we shouldn't. Plain verb after should, never to; no do in the question",
  "abrir": "What should you do when you can't sleep?",
  "fecho": "<b>should</b> = good advice · <b>shouldn't</b> = bad idea: <i>You should wait. We shouldn't row.</i> The plain verb after it, never <i>to</i>, never <i>-s</i>. The question: <i>Should we stay?</i> Short answer: <i>Yes, we should. No, we shouldn't.</i>",
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
  "rate": "-14%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo in a small boat on a foggy lake. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/cb85ddcce8f7/the-lake-of-nine/img/live-barco.webp",
      "leg": "A small boat on the lake",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the fog is very thick. Should we wait?"
        },
        {
          "quem": "leo",
          "t": "Yes, we should. We shouldn't row in the fog."
        },
        {
          "quem": "mia",
          "t": "The boat has a small hole. Should we fix it?"
        },
        {
          "quem": "leo",
          "t": "Yes, we should. You should use the old cloth."
        },
        {
          "quem": "mia",
          "t": "Look, there is a small island. Should we go there?"
        },
        {
          "quem": "leo",
          "t": "No, we shouldn't. It's too far. We should stay near the shore."
        },
        {
          "quem": "mia",
          "t": "OK. What should we do after that?"
        },
        {
          "quem": "leo",
          "t": "We should sleep early and start at sunrise."
        }
      ],
      "perguntas": [
        {
          "q": "Why shouldn't they row now?",
          "op": [
            "The fog is very thick",
            "The lake is too small",
            "It is too late"
          ],
          "a": 0,
          "por": "We shouldn't row in the fog."
        },
        {
          "q": "What should Mia use for the hole?",
          "op": [
            "The old cloth",
            "A big stone",
            "Her coat"
          ],
          "a": 0,
          "por": "You should use the old cloth."
        },
        {
          "q": "Should they go to the island?",
          "op": [
            "No, it's too far",
            "Yes, right now",
            "Yes, with the cloth"
          ],
          "a": 0,
          "por": "No, we shouldn't. It's too far."
        }
      ]
    },
    "out": {
      "sub": "Three pieces of advice on the lake. Hear it, then say it.",
      "frases": [
        {
          "t": "We shouldn't row in the fog.",
          "img": "https://wolf-labs.pages.dev/p/cb85ddcce8f7/the-lake-of-nine/img/live-barco.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "You should fix the hole first.",
          "img": "https://wolf-labs.pages.dev/p/cb85ddcce8f7/the-lake-of-nine/img/live-margem.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Should we go to the island?",
          "img": "https://wolf-labs.pages.dev/p/cb85ddcce8f7/the-lake-of-nine/img/live-ilha.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "should or shouldn't? Four quick ones.",
      "regra": "<b>should</b> + plain verb (no <b>to</b>, no <b>-s</b>) · <b>shouldn't</b> = no · <b>Should we ...?</b> (no <b>do</b>).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We should wait here until the morning.",
          "aceita": [],
          "d": "Dica: <b>should</b> + o verbo limpo (wait)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "You should to row slowly.",
          "r": "You should row slowly.",
          "aceita": [],
          "d": "Dica: depois de <b>should</b>, o verbo fica limpo, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "We don't should go there.",
          "r": "We shouldn't go there.",
          "aceita": [
            "We should not go there."
          ],
          "d": "Dica: o não é <b>shouldn't</b>, nunca <i>don't should</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make the question correct.",
          "mostra": "Do we should stay here?",
          "r": "Should we stay here?",
          "aceita": [],
          "d": "Dica: a pergunta começa com <b>Should</b>, sem <b>do</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/cb85ddcce8f7/the-lake-of-nine/img/live-ilha.webp",
      "leg": "A small island in the fog",
      "pede": "Look at the picture: a small island in the fog. Write 2 or 3 sentences of advice for Mia and Leo: should they go there? What should they do? Use <b>should</b> and <b>shouldn't</b>.",
      "ph": "We shouldn't …",
      "ex": "We shouldn't go to the island tonight. We should stay in the boat and wait for the morning."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What should you do to learn English faster?",
          "ph": "I should …",
          "ex": "I should study every day and watch more films."
        },
        {
          "q": "What shouldn't you do at night?",
          "ph": "I shouldn't …",
          "ex": "I shouldn't drink coffee at night."
        }
      ]
    }
  }
};
