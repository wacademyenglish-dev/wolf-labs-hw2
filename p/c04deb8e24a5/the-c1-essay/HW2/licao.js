/* THE ESSAY · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=".
   Alvo: thesis, arguments, evidence, the other side, one conclusion. C1: nenhum português. */
window.HW2 = {
  "id": "the-c1-essay",
  "titulo": "The Essay",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/c04deb8e24a5/the-c1-essay/img/live-capa.webp",
  "alvo": "the C1 argumentative essay: thesis (This essay will argue that), arguments with evidence (Firstly, A further argument is that, For instance), the other side (It is often argued that ... However, this view overlooks ...), one conclusion phrase (On balance / In conclusion), no personal I think; discuss + noun, On the other hand",
  "abrir": "What topic would you love to argue about in writing?",
  "fecho": "A C1 essay is not a list of opinions. <b>Thesis</b>: <i>This essay will argue that…</i> <b>Arguments</b>: <i>Firstly, …</i> <i>A further argument is that…</i> <b>Evidence</b>: <i>For instance, …</i> <b>The other side</b>: <i>It is often argued that… However, this view overlooks…</i> <b>Conclusion</b>: one phrase only, <i>On balance, …</i> Say <b>On the other hand</b>, never <i>in the other hand</i>, and <b>discuss</b> a topic, never <i>discuss about</i>.",
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
  "rate": "-10%",
  "rodadas": {
    "listen": {
      "sub": "Mia reads Leo's draft essay. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/c04deb8e24a5/the-c1-essay/img/live-conversa.webp",
      "leg": "A frosted window and a small lamp",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I read your draft on the four-day week. The first line says: I think it is good because it is nice."
        },
        {
          "quem": "leo",
          "t": "Is that a problem? It is my opinion."
        },
        {
          "quem": "mia",
          "t": "In an essay, you need a thesis. Try: This essay will argue that a four-day week should become standard."
        },
        {
          "quem": "leo",
          "t": "That sounds much stronger. And my second paragraph?"
        },
        {
          "quem": "mia",
          "t": "Start with Firstly, and add evidence. For instance, one company in Iceland reported higher productivity."
        },
        {
          "quem": "leo",
          "t": "Good. But some people say it is too expensive."
        },
        {
          "quem": "mia",
          "t": "Then write: It is often argued that it costs too much. However, this view overlooks the savings from fewer sick days."
        },
        {
          "quem": "leo",
          "t": "So I show the other side, and then I answer it."
        },
        {
          "quem": "mia",
          "t": "Exactly. And finish with one phrase: On balance, the benefits outweigh the costs."
        },
        {
          "quem": "leo",
          "t": "Not In conclusion, to conclude?"
        },
        {
          "quem": "mia",
          "t": "No. One phrase, and no new ideas."
        }
      ],
      "perguntas": [
        {
          "q": "What is wrong with Leo's first line?",
          "op": [
            "It is only a personal opinion",
            "It is too long",
            "It has no verb"
          ],
          "a": 0,
          "por": "In an essay, you need a thesis."
        },
        {
          "q": "How should Leo answer the argument that it costs too much?",
          "op": [
            "By showing what the argument overlooks",
            "By ignoring it",
            "By saying it is silly"
          ],
          "a": 0,
          "por": "However, this view overlooks the savings from fewer sick days."
        },
        {
          "q": "What should the conclusion do?",
          "op": [
            "Use one phrase and no new ideas",
            "Open a new topic",
            "Use two linking phrases"
          ],
          "a": 0,
          "por": "One phrase, and no new ideas."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the model essay. Hear it, then say it.",
      "frases": [
        {
          "t": "This essay will argue that a four-day week should become standard.",
          "img": "https://wolf-labs.pages.dev/p/c04deb8e24a5/the-c1-essay/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It is often argued that it costs too much.",
          "img": "https://wolf-labs.pages.dev/p/c04deb8e24a5/the-c1-essay/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "On balance, the benefits clearly outweigh the costs.",
          "img": "https://wolf-labs.pages.dev/p/c04deb8e24a5/the-c1-essay/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Academic phrases and classic traps. Four quick ones.",
      "regra": "<b>This essay will argue that</b> · <b>On the other hand</b> (not <i>in</i>) · <b>discuss</b> + noun (no <i>about</i>) · subject + verb agreement: <i>education increases</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "This essay will argue that tuition should be free.",
          "aceita": [],
          "d": "Hint: the thesis frame, then the position."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "In the other hand, the costs are high.",
          "r": "On the other hand, the costs are high.",
          "aceita": [],
          "d": "Hint: the fixed phrase is <b>on the other hand</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "Many people discuss about this issue.",
          "r": "Many people discuss this issue.",
          "aceita": [],
          "d": "Hint: <b>discuss</b> already means talk about: no <i>about</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one ending is wrong.",
          "mostra": "Free education increase social mobility.",
          "r": "Free education increases social mobility.",
          "aceita": [],
          "d": "Hint: the subject is singular, so the verb needs <b>-s</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/c04deb8e24a5/the-c1-essay/img/live-capa.webp",
      "leg": "A typewriter with a blank page",
      "pede": "Look at the picture: a typewriter with a blank page. Write 2 or 3 sentences for an essay: a thesis, and one argument with evidence. Use <b>This essay will argue that</b>, <b>Firstly</b> and <b>For instance</b>.",
      "ph": "This essay will argue that …",
      "ex": "This essay will argue that cities should ban cars from the centre. Firstly, the air becomes cleaner. For instance, pollution fell by a third in Oslo."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Should students wear uniforms? Give a thesis, without I think.",
          "ph": "This essay will argue that …",
          "ex": "This essay will argue that school uniforms should be optional."
        },
        {
          "q": "What is the main argument against your view? How do you answer it?",
          "ph": "It is often argued that … However, …",
          "ex": "It is often argued that uniforms reduce bullying. However, this view overlooks other causes."
        }
      ]
    }
  }
};
