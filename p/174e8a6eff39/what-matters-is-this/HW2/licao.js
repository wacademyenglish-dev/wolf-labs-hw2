/* WHAT MATTERS IS THIS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: clivadas e ênfase: what-cleft, it-cleft, All I'm asking is, the reason is that. C1: nenhum português. Só imagens live-* escuras. */
window.HW2 = {
  "id": "what-matters-is-this",
  "titulo": "What Matters Is This",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/174e8a6eff39/what-matters-is-this/img/live-capa.webp",
  "alvo": "cleft sentences and emphasis in persuasion: what-cleft (What matters is...) · it-cleft (It isn't X that... It's Y) · All I'm asking is... · The thing is... · The reason... is that... · emphatic do/did + plain verb; never the important is, all what, the reason is because",
  "abrir": "What is one thing you would like to change in your city?",
  "fecho": "Put the weight where you want it: <b>What matters is…</b> · <b>It isn't X that… It's Y</b> · <b>All I'm asking is…</b> · <b>The reason… is that…</b> · <b>The thing is…</b> · <b>did</b> + plain verb for emphasis (<i>I did try</i>). Never <i>the important is</i>, <i>all what</i> or <i>the reason is because</i>.",
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
  "rate": "-6%",
  "rodadas": {
    "listen": {
      "sub": "Mia rehearses a sixty-second pitch with Leo. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/174e8a6eff39/what-matters-is-this/img/live-bastidor.webp",
      "leg": "Backstage, before the pitch",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, on Friday I have sixty seconds to ask the council for a bookmobile for the north side. Listen to my opening."
        },
        {
          "quem": "leo",
          "t": "Go ahead."
        },
        {
          "quem": "mia",
          "t": "Some people say it's about money. What matters is this: the kids up north have nowhere to borrow a book."
        },
        {
          "quem": "leo",
          "t": "I like that. But then you say the library is too far. Is that the real problem?"
        },
        {
          "quem": "mia",
          "t": "Good point. It isn't the distance that stops them. It's the bus fare, eight dollars a day."
        },
        {
          "quem": "leo",
          "t": "There it is. Say that. The fare is what makes it impossible."
        },
        {
          "quem": "mia",
          "t": "And then the ask. All I'm asking is that you give us one bus for one year."
        },
        {
          "quem": "leo",
          "t": "Short and clear. What about the reason?"
        },
        {
          "quem": "mia",
          "t": "The reason I'm here is that two hundred kids joined the summer club last year, and there were no books."
        },
        {
          "quem": "leo",
          "t": "Now pause. Then say the line you really mean."
        },
        {
          "quem": "mia",
          "t": "The thing is, I did try to do this quietly, and it didn't work. So now I'm asking out loud."
        },
        {
          "quem": "leo",
          "t": "That's your ending. Don't change a word."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia say really stops the kids?",
          "op": [
            "The bus fare",
            "The distance",
            "The summer club"
          ],
          "a": 0,
          "por": "It isn't the distance that stops them. It's the bus fare."
        },
        {
          "q": "What is Mia asking for?",
          "op": [
            "One bus for one year",
            "Eight dollars a day",
            "A bigger library"
          ],
          "a": 0,
          "por": "All I'm asking is that you give us one bus for one year."
        },
        {
          "q": "Why does she say I did try to do this quietly?",
          "op": [
            "To stress that the quiet way already failed",
            "To thank the council",
            "To end the pitch early"
          ],
          "a": 0,
          "por": "I did try to do this quietly, and it didn't work."
        }
      ]
    },
    "out": {
      "sub": "Three lines for the pitch. Hear it, then say it.",
      "frases": [
        {
          "t": "What matters is this: the kids up north have nowhere to borrow a book.",
          "img": "https://wolf-labs.pages.dev/p/174e8a6eff39/what-matters-is-this/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It's the bus fare that stops them, not the distance.",
          "img": "https://wolf-labs.pages.dev/p/174e8a6eff39/what-matters-is-this/img/live-roteiro.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "All I'm asking is that you give us one bus for one year.",
          "img": "https://wolf-labs.pages.dev/p/174e8a6eff39/what-matters-is-this/img/live-microfone.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Weight and word order. Four quick ones.",
      "regra": "<b>What matters is…</b> · <b>It is X that…</b> (the <b>it</b> is never dropped) · <b>All I'm asking is…</b> (no <i>what</i>) · <b>The reason is that…</b> (not <i>because</i>).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "What matters is that the kids have somewhere to read.",
          "aceita": [],
          "d": "Hint: <b>What matters is that</b> + the full clause."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The reason is because tickets cost too much.",
          "r": "The reason is that tickets cost too much.",
          "aceita": [
            "The reason is tickets cost too much."
          ],
          "d": "Hint: after <b>the reason is</b>, use <b>that</b>. <i>Because</i> repeats the idea of reason."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the subject is missing.",
          "mostra": "Is the fare that stops them.",
          "r": "It is the fare that stops them.",
          "aceita": [
            "It's the fare that stops them."
          ],
          "d": "Hint: in the cleft, <b>it is</b> comes first: <b>It is the fare that…</b>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "All what I ask is one bus.",
          "r": "All I ask is one bus.",
          "aceita": [
            "All I'm asking is one bus."
          ],
          "d": "Hint: <b>all</b> already means <i>the only thing</i>; no <i>what</i> after it."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/174e8a6eff39/what-matters-is-this/img/live-plateia.webp",
      "leg": "An empty theater, waiting",
      "pede": "Look at the picture: an empty theater. You have thirty seconds to convince it of one change in your street, school or workplace. Write 2 or 3 sentences. Use <b>What matters is…</b>, <b>It isn't X that… It's Y</b> or <b>All I'm asking is…</b>",
      "ph": "What matters is …",
      "ex": "What matters is that our street has no safe place for children to play. It isn't the cost that worries me; it's the speed of the cars. All I'm asking is that you put one crossing here."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What matters most to you in a job?",
          "ph": "What matters to me is …",
          "ex": "What matters to me is having a boss who listens."
        },
        {
          "q": "Think of a change you would like in your city. What is the real reason?",
          "ph": "The reason is that … / All I'm asking is …",
          "ex": "I would like more bike lanes. The reason is that the main road is far too dangerous."
        }
      ]
    }
  }
};
