/* ON THE RECORD · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: reported speech (said / told / asked). Filme: falas originais, sem violência. B1: nenhum português. */
window.HW2 = {
  "id": "on-the-record",
  "titulo": "On the Record",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/068273ae404e/on-the-record/img/live-redacao.webp",
  "alvo": "reported speech: said (that) / told + person; the step back in time (is → was, will → would, can → could); reported questions (asked if / asked where + statement order, no did); told him to + verb",
  "abrir": "Think of something somebody told you this week. What exactly did they say?",
  "fecho": "<b>Said</b> has no person; <b>told</b> needs one: <i>He said he was busy. He told me he was busy.</i> The tense steps back: <i>is → was, will → would</i>. A reported question keeps normal order: <i>She asked where he lived.</i> Orders: <i>told us to turn it off</i>.",
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
      "sub": "Mia and Leo in a newsroom after a press conference. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/068273ae404e/on-the-record/img/live-coletiva.webp",
      "leg": "A press room with microphones",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, how was the press conference? What did the mayor say?"
        },
        {
          "quem": "leo",
          "t": "He said the new bridge would open in June."
        },
        {
          "quem": "mia",
          "t": "Did anybody ask him a question?"
        },
        {
          "quem": "leo",
          "t": "Yes. A reporter asked him if the bridge was safe. He said it had been checked twice."
        },
        {
          "quem": "mia",
          "t": "Did he tell you anything about the cost?"
        },
        {
          "quem": "leo",
          "t": "He told me he couldn't give a number yet. Another reporter asked where the money was coming from."
        },
        {
          "quem": "mia",
          "t": "What did he answer?"
        },
        {
          "quem": "leo",
          "t": "He said it was coming from the city budget. Then his assistant told us to turn off our phones."
        },
        {
          "quem": "mia",
          "t": "So what do I write?"
        },
        {
          "quem": "leo",
          "t": "Write that he said the bridge would open in June. And remember: he told me, not said me."
        }
      ],
      "perguntas": [
        {
          "q": "When did the mayor say the bridge would open?",
          "op": [
            "In June",
            "In May",
            "Next week"
          ],
          "a": 0,
          "por": "He said the new bridge would open in June."
        },
        {
          "q": "What did a reporter ask?",
          "op": [
            "If the bridge was safe",
            "Where the mayor lived",
            "When the mayor was born"
          ],
          "a": 0,
          "por": "A reporter asked him if the bridge was safe."
        },
        {
          "q": "What did the assistant tell the reporters to do?",
          "op": [
            "To turn off their phones",
            "To write the story",
            "To leave the room"
          ],
          "a": 0,
          "por": "His assistant told us to turn off our phones."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about what people said. Hear it, then say it.",
      "frases": [
        {
          "t": "The mayor said the bridge would open in June.",
          "img": "https://wolf-labs.pages.dev/p/068273ae404e/on-the-record/img/live-coletiva.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She asked me if I had read the report.",
          "img": "https://wolf-labs.pages.dev/p/068273ae404e/on-the-record/img/live-redacao.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "He told us to send the story before midnight.",
          "img": "https://wolf-labs.pages.dev/p/068273ae404e/on-the-record/img/live-torre.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "said, told, asked. Four quick ones.",
      "regra": "<b>said</b> / <b>told + person</b> · one step back (<b>will → would</b>) · <b>asked if / where</b> + normal order · <b>told him to</b> + verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She asked me if I had read the report.",
          "aceita": [],
          "d": "Hint: <b>asked me if</b> + normal order, and the tense steps back: <i>had read</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He said me the bridge was safe.",
          "r": "He told me the bridge was safe.",
          "aceita": [
            "He said the bridge was safe."
          ],
          "d": "Hint: <b>told</b> needs a person. <b>Said</b> has none: <i>He said the bridge was safe.</i>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She asked where did he live.",
          "r": "She asked where he lived.",
          "aceita": [
            "She asked where he was living."
          ],
          "d": "Hint: a reported question keeps statement order: no <i>did</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The mayor said the bridge will open in June.",
          "r": "The mayor said the bridge would open in June.",
          "aceita": [],
          "d": "Hint: the tense steps back: <b>will → would</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/068273ae404e/on-the-record/img/live-redacao.webp",
      "leg": "A typewriter and a pile of newspapers",
      "pede": "Look at the picture: a newsroom desk at night. Write 2 or 3 sentences about something somebody said, told or asked you this week. Use <b>said</b>, <b>told me</b> or <b>asked me if / where</b>.",
      "ph": "My friend told me … She asked me if …",
      "ex": "My boss told me the meeting was at ten. My sister asked me if I had seen her keys. A colleague said he would call later."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did someone tell you this week?",
          "ph": "My … told me (that) …",
          "ex": "My teacher told me I had improved a lot."
        },
        {
          "q": "What did someone ask you today?",
          "ph": "… asked me if / where …",
          "ex": "A friend asked me where I was going."
        }
      ]
    }
  }
};
