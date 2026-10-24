/* WHAT THEY SAID · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: discurso indireto: said x told me, um passo atras, if, told me not to. B1: nenhum portugues. Imagens live-* escuras (live-fita, live-sala, live-escritorio, live-telefones). */
window.HW2 = {
  "id": "what-they-said",
  "titulo": "What They Said",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e7e5288dbfd1/what-they-said/img/live-telefones.webp",
  "alvo": "reported speech: said (no person) vs told me (a person); one step back (will -> would, am -> was); yes/no questions with if, no did (asked me if I ...); told me not to + verb",
  "abrir": "What did somebody tell you today?",
  "fecho": "<b>said</b> has no person; <b>told me</b> needs one: <i>She told me she was late.</i> One step back: <i>will</i> becomes <b>would</b>. Questions lose <i>did</i>: <i>He asked me where I lived.</i> Yes/no questions take <b>if</b>. Orders: <b>told me not to</b> + verb.",
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
      "sub": "Mia and Leo talk about a busy meeting. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/e7e5288dbfd1/what-they-said/img/live-escritorio.webp",
      "leg": "An office at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, how was your meeting with Karen this morning?"
        },
        {
          "quem": "leo",
          "t": "Long. She told me the new project would start on Monday."
        },
        {
          "quem": "mia",
          "t": "On Monday? Did she say who would work on it?"
        },
        {
          "quem": "leo",
          "t": "She said she was still deciding. Then she asked me if I could stay late this week."
        },
        {
          "quem": "mia",
          "t": "And what did you say?"
        },
        {
          "quem": "leo",
          "t": "I told her I had a class on Wednesday, so she said I could leave early that day."
        },
        {
          "quem": "mia",
          "t": "That's fair. Did she ask anything else?"
        },
        {
          "quem": "leo",
          "t": "She asked me where I had put the client files. And she told me not to lose them again."
        },
        {
          "quem": "mia",
          "t": "Ha! Did you find them?"
        },
        {
          "quem": "leo",
          "t": "Yes. They were under my coat."
        }
      ],
      "perguntas": [
        {
          "q": "What did Karen tell Leo about the project?",
          "op": [
            "It would start on Monday",
            "It had already started",
            "It would start in June"
          ],
          "a": 0,
          "por": "She told me the new project would start on Monday."
        },
        {
          "q": "What did Karen ask Leo?",
          "op": [
            "If he could stay late",
            "Where he was going on holiday",
            "Why he was late"
          ],
          "a": 0,
          "por": "She asked me if I could stay late this week."
        },
        {
          "q": "What did Karen tell Leo not to do?",
          "op": [
            "Lose the files again",
            "Be late on Monday",
            "Call the client"
          ],
          "a": 0,
          "por": "She told me not to lose them again."
        }
      ]
    },
    "out": {
      "sub": "Three sentences that report what people said. Hear it, then say it.",
      "frases": [
        {
          "t": "She told me that the meeting would start at nine.",
          "img": "https://wolf-labs.pages.dev/p/e7e5288dbfd1/what-they-said/img/live-escritorio.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "He asked me if I had finished the report.",
          "img": "https://wolf-labs.pages.dev/p/e7e5288dbfd1/what-they-said/img/live-telefones.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "He told me not to wait for them.",
          "img": "https://wolf-labs.pages.dev/p/e7e5288dbfd1/what-they-said/img/live-fita.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "said, told me, if and would. Four quick ones.",
      "regra": "<b>said</b> (no person) · <b>told me</b> (a person) · one step back: will -> <b>would</b> · asked me <b>if</b> · no <i>did</i> in a report.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "He said he would call me tomorrow.",
          "aceita": [],
          "d": "Hint: one step back: <b>will</b> becomes <b>would</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She said me she was late.",
          "r": "She told me she was late.",
          "aceita": [
            "She said she was late."
          ],
          "d": "Hint: <b>said</b> has no person. With <i>me</i>, use <b>told</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "He asked me where did I live.",
          "r": "He asked me where I lived.",
          "aceita": [],
          "d": "Hint: a report is not a question: no <i>did</i>, normal order."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She asked me did I like the food.",
          "r": "She asked me if I liked the food.",
          "aceita": [
            "She asked me whether I liked the food."
          ],
          "d": "Hint: a yes/no question takes <b>if</b> in a report."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e7e5288dbfd1/what-they-said/img/live-sala.webp",
      "leg": "Two empty chairs in a grey room",
      "pede": "Look at the picture: two chairs in an empty room. Imagine a short talk there. Write 2 or 3 sentences that report what somebody said to you. Use <b>told me</b>, <b>asked me if</b> or <b>said they would</b>.",
      "ph": "My friend told me … and asked me if …",
      "ex": "My boss told me the meeting would start at nine. She asked me if I had the report. She said she would call me later."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did somebody tell you this week? Report it.",
          "ph": "… told me (that) …",
          "ex": "My boss told me the meeting would start at nine."
        },
        {
          "q": "What did somebody ask you recently? Report the question.",
          "ph": "… asked me if …",
          "ex": "My sister asked me if I wanted to travel with her."
        }
      ]
    }
  }
};
