/* WHAT IS TRUTH? · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: frases clivadas e hedging. Versículos (WEB): John 18:37 e 18:38 (Listen), John 18:38 (Out loud, Você). Sem cena do julgamento. Nada da Bíblia é marcado como errado. C1: nenhum português. */
window.HW2 = {
  "id": "what-is-truth",
  "titulo": "What Is Truth?",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/18a426914660/what-is-truth/img/live-tabula.webp",
  "alvo": "cleft sentences (It was Daniel who sent it; What we know is that ...; All we need to do is listen) and hedging (seems to, appears to, may / might have, it is likely that); never It was him which, What he wanted it was, maybe + might",
  "abrir": "When is it hard to know what is true?",
  "fecho": "A <b>cleft</b> puts the focus first: <i>It was Daniel who sent it. What we know is that the file was sent at nine.</i> Use <b>who</b> for people, <b>that</b> for things. <b>Hedging</b> says only what the evidence allows: <i>It seems to have come from his computer. It may have been a mistake.</i> One hedge is enough.",
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
      "sub": "Mia and Leo look for the truth about a mistake at work. Mia quotes John 18:37 and 18:38. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/18a426914660/what-is-truth/img/live-tabula.webp",
      "leg": "An empty writing tablet",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the wrong numbers went to the client. It was Daniel who sent them, I'm sure."
        },
        {
          "quem": "mia",
          "t": "Are you? What we actually know is that the file was sent at nine. That's all."
        },
        {
          "quem": "leo",
          "t": "Well, it seems to have come from his computer."
        },
        {
          "quem": "mia",
          "t": "It may have been a mistake. It's likely that two versions were saved. Let's find the truth before we blame anyone."
        },
        {
          "quem": "leo",
          "t": "Funny you say that. Last night I read about truth. In John 18:38, Pilate said to him, “What is truth?”"
        },
        {
          "quem": "mia",
          "t": "And just before that, in John 18:37, Jesus says, “Everyone who is of the truth listens to my voice.”"
        },
        {
          "quem": "leo",
          "t": "So listening matters most."
        },
        {
          "quem": "mia",
          "t": "Exactly. All we have to do is listen to Daniel first."
        },
        {
          "quem": "leo",
          "t": "Fair enough. It was my mistake to jump to conclusions."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia say they actually know?",
          "op": [
            "The file was sent at nine",
            "Daniel sent the file",
            "The client is angry"
          ],
          "a": 0,
          "por": "What we actually know is that the file was sent at nine."
        },
        {
          "q": "Why does Mia say it may have been a mistake?",
          "op": [
            "It is likely that two versions were saved",
            "Daniel never makes mistakes",
            "The client called twice"
          ],
          "a": 0,
          "por": "It's likely that two versions were saved."
        },
        {
          "q": "What does Mia want to do first?",
          "op": [
            "Listen to Daniel",
            "Call the client",
            "Delete the file"
          ],
          "a": 0,
          "por": "All we have to do is listen to Daniel first."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about finding the truth. The third is from the Bible: John 18:38 (World English Bible). Hear it, then say it.",
      "frases": [
        {
          "t": "It was Daniel who sent the file, but it may have been a mistake.",
          "img": "https://wolf-labs.pages.dev/p/18a426914660/what-is-truth/img/live-tabula.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "What we know is that the file was sent at nine.",
          "img": "https://wolf-labs.pages.dev/p/18a426914660/what-is-truth/img/live-tabula.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Pilate said to him, “What is truth?”",
          "img": "https://wolf-labs.pages.dev/p/18a426914660/what-is-truth/img/live-pretorio.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Cleft or hedge? Four quick ones.",
      "regra": "<b>It was ... who / that</b> · <b>What ... is / was ...</b> · hedge once: <b>seems to, may have, it is likely that</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It was the manager who signed the report.",
          "aceita": [],
          "d": "Hint: <b>who</b> for a person: <i>It was ... who</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It was the manager which signed it.",
          "r": "It was the manager who signed it.",
          "aceita": [],
          "d": "Hint: a person takes <b>who</b>, not <b>which</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is too much.",
          "mostra": "What she wanted it was more time.",
          "r": "What she wanted was more time.",
          "aceita": [],
          "d": "Hint: <b>What she wanted</b> is the subject. No extra <i>it</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: two hedges are one too many.",
          "mostra": "Maybe he might have forgotten the file.",
          "r": "He might have forgotten the file.",
          "aceita": [
            "He may have forgotten the file.",
            "Maybe he forgot the file."
          ],
          "d": "Hint: <b>maybe</b> and <b>might</b> say the same thing. Keep one."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/18a426914660/what-is-truth/img/live-tabula.webp",
      "leg": "An empty writing tablet",
      "pede": "Look at the picture: an empty writing tablet, waiting for a record. Write 2 or 3 sentences about a time when the truth about something was not clear. Use a cleft (<b>It was ... who</b> / <b>What ... was ...</b>) and one careful word (<b>seems to</b>, <b>may have</b>, <b>it is likely that</b>).",
      "ph": "It was … who …",
      "ex": "It was my brother who found the mistake. It seems to have been a small error in the bill. What I wanted was a clear answer."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "In John 18:38 Pilate said to him, “What is truth?” What does the truth mean to you? Start with a cleft.",
          "ph": "What matters to me is …",
          "ex": "What matters most to me is honesty, even when it is hard."
        },
        {
          "q": "Think of a rumor you heard. What do you really know, and what only seems true?",
          "ph": "What I know is that … It seems to …",
          "ex": "What I know is that the shop is closed. It seems to be for repairs, but it may have been sold."
        }
      ]
    }
  }
};
