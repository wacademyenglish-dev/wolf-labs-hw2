/* HAD WE KNOWN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: inversão para ênfase (never have we, at no point did, had we known). B2: nenhum português na lição. */
window.HW2 = {
  "id": "had-we-known",
  "titulo": "Had We Known",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4c7a1e93b6d2/had-we-known/img/live-mesa-longa.webp",
  "alvo": "inversion for emphasis: never have we, at no point did, not until ... did, not only was ... but, under no circumstances will, had we known (no if, third form); the helper jumps in front of the subject, and without a helper call did + simple verb",
  "abrir": "Think of a plan that went wrong. What did you only learn later?",
  "fecho": "For the record, the fact goes first and the helper jumps in front of the subject: <b>Never have we…</b>, <b>Under no circumstances will we…</b>. No helper in the sentence? Call <b>did</b>, and the verb goes back to the simple form: <b>At no point did the carrier warn us</b>. Be jumps by itself: <b>Not only was it late</b>. And the if disappears: <b>Had we known</b>, with the third form.",
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
      "sub": "Mia and Leo review a late shipment. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/4c7a1e93b6d2/had-we-known/img/live-abertura.webp",
      "leg": "The meeting room, at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the client is furious. The shipment arrived two weeks late, and nobody told them."
        },
        {
          "quem": "mia",
          "t": "I know. Had we known about the port strike, we would have used another carrier."
        },
        {
          "quem": "leo",
          "t": "At no point did the shipping company warn us."
        },
        {
          "quem": "mia",
          "t": "Not until Tuesday did we see the first delay notice. It was in the spam folder."
        },
        {
          "quem": "leo",
          "t": "Never have I seen a delay like this. Not only was the shipment late, but it was also damaged."
        },
        {
          "quem": "mia",
          "t": "Under no circumstances will we use that carrier again."
        },
        {
          "quem": "leo",
          "t": "Agreed. Let's write the review for the board."
        },
        {
          "quem": "mia",
          "t": "Had we asked for a backup plan, we would not be here."
        },
        {
          "quem": "leo",
          "t": "Never again will we sign a contract without a penalty clause."
        },
        {
          "quem": "mia",
          "t": "Good. That goes at the top of the report."
        }
      ],
      "perguntas": [
        {
          "q": "Why is the client furious?",
          "op": [
            "The shipment was two weeks late",
            "The carrier was too expensive",
            "The order was too big"
          ],
          "a": 0,
          "por": "The shipment arrived two weeks late, and nobody told them."
        },
        {
          "q": "When did the team see the first delay notice?",
          "op": [
            "On Tuesday",
            "On Monday",
            "Before the strike"
          ],
          "a": 0,
          "por": "Not until Tuesday did we see the first delay notice."
        },
        {
          "q": "What do they decide about the carrier?",
          "op": [
            "They will not use it again",
            "They will use it more",
            "They will ask for a refund"
          ],
          "a": 0,
          "por": "Under no circumstances will we use that carrier again."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the call. Hear it, then say it.",
      "frases": [
        {
          "t": "At no point did the shipping company warn us.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/4c7a1e93b6d2/had-we-known/img/live-mesa-longa.webp"
        },
        {
          "t": "Not until Tuesday did we see the first delay notice.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/4c7a1e93b6d2/had-we-known/img/live-abertura.webp"
        },
        {
          "t": "Had we known about the port strike, we would have used another carrier.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/4c7a1e93b6d2/had-we-known/img/live-marcado.webp"
        }
      ]
    },
    "focus": {
      "sub": "The helper jumps. Four quick ones.",
      "regra": "<b>Never have we</b> … · <b>At no point did</b> the carrier <b>warn</b> … (did + simple verb) · <b>Not only was</b> it late … · <b>Had we known</b> … (no if, third form).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Never have we seen a delay like this.",
          "aceita": [],
          "d": "Hint: <b>never</b> opens the sentence, and the helper <b>have</b> jumps in front of <b>we</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the helper must jump.",
          "mostra": "At no point the carrier warned us.",
          "r": "At no point did the carrier warn us.",
          "aceita": [],
          "d": "Hint: no helper in the sentence? Call <b>did</b>, and the verb goes back to the simple form: <b>warn</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Had we know about the strike, we would have waited.",
          "r": "Had we known about the strike, we would have waited.",
          "aceita": [],
          "d": "Hint: no <i>if</i>, and the third form: <b>known</b>."
        },
        {
          "tipo": "escreve",
          "t": "Say it with the opener. Keep the meaning.",
          "mostra": "We did not see the notice until Tuesday. (Not until ...)",
          "r": "Not until Tuesday did we see the notice.",
          "aceita": [],
          "d": "Hint: <b>Not until</b> + time, then <b>did</b> + <b>we</b> + simple verb."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/4c7a1e93b6d2/had-we-known/img/live-marcado.webp",
      "leg": "A report with one line marked",
      "pede": "Look at the picture: a report with one line marked. Write 2 or 3 lines for the record about something that went wrong at work or in your life. Use <b>Never have I …</b>, <b>Not until … did I …</b> or <b>Had I known …</b>.",
      "ph": "Never have I …",
      "ex": "Never have I lost so much money. Not until Friday did I read the contract. Had I known the price, I would have said no."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What will you never do again? Why?",
          "ph": "Never again will I …",
          "ex": "Never again will I buy a phone without reading the reviews."
        },
        {
          "q": "What did you understand too late?",
          "ph": "Not until … did I …",
          "ex": "Not until I moved out did I understand how much my parents did."
        }
      ]
    }
  }
};
