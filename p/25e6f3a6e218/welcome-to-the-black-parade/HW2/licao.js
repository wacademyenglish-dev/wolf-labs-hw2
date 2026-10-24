/* WELCOME TO THE BLACK PARADE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: orações relativas (who / which / that / where). Linha de música: NENHUM verso aqui; o listening é diálogo original. Cena neutra (regra 9: nada de morte, luto, doença). B1: nenhum português. Cena: o desfile da cidade num sábado. */
window.HW2 = {
  "id": "welcome-to-the-black-parade",
  "titulo": "Welcome to the Black Parade",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/25e6f3a6e218/welcome-to-the-black-parade/img/live-coreto.webp",
  "alvo": "relative clauses: who for people, which for things, that for both, where for places; the pronoun already stands for the thing, so never repeat it (the song that I love it, the town where I grew up there); which for people is wrong",
  "abrir": "Have you ever seen a parade or a marching band?",
  "fecho": "Relative clauses tell us <b>which one</b>: <b>who</b> for people, <b>which</b> for things, <b>that</b> for both, <b>where</b> for places. The pronoun already stands for the thing, so don't repeat it: <i>the song that I love</i> (not <i>love it</i>), <i>the town where I grew up</i> (not <i>grew up there</i>). When it is the object, you can drop it: <i>the song I love</i>.",
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
      "sub": "Mia and Leo watch the town parade on a Saturday. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/25e6f3a6e218/welcome-to-the-black-parade/img/live-arquibancada.webp",
      "leg": "Ribbons along the parade route",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, look! That's the band that won the school contest last year."
        },
        {
          "quem": "leo",
          "t": "Which one? The band which has the silver drums?"
        },
        {
          "quem": "mia",
          "t": "Yes. And the girl who is playing the big drum is my cousin Ana."
        },
        {
          "quem": "leo",
          "t": "Wow. Is that the bandstand where they practise?"
        },
        {
          "quem": "mia",
          "t": "No, they practise in the park where we played football as kids."
        },
        {
          "quem": "leo",
          "t": "And who is the man who is walking in front?"
        },
        {
          "quem": "mia",
          "t": "He's the music teacher who started the band ten years ago."
        },
        {
          "quem": "leo",
          "t": "And the song they're playing now? I know it."
        },
        {
          "quem": "mia",
          "t": "It's the song that they play at the end of every parade. Everybody sings along."
        },
        {
          "quem": "leo",
          "t": "This is the kind of Saturday that I'll remember for a long time."
        }
      ],
      "perguntas": [
        {
          "q": "Who is playing the big drum?",
          "op": [
            "Mia's cousin Ana",
            "The music teacher",
            "Leo's friend"
          ],
          "a": 0,
          "por": "And the girl who is playing the big drum is my cousin Ana."
        },
        {
          "q": "Where does the band practise?",
          "op": [
            "In the park where Mia and Leo played football",
            "At the bandstand",
            "At the school gym"
          ],
          "a": 0,
          "por": "No, they practise in the park where we played football as kids."
        },
        {
          "q": "Who started the band?",
          "op": [
            "A music teacher, ten years ago",
            "Mia's cousin",
            "The town mayor"
          ],
          "a": 0,
          "por": "He's the music teacher who started the band ten years ago."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the parade. Hear it, then say it.",
      "frases": [
        {
          "t": "The girl who plays the big drum is my cousin.",
          "img": "https://wolf-labs.pages.dev/p/25e6f3a6e218/welcome-to-the-black-parade/img/live-arquibancada.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "This is the bandstand where the band plays on Sundays.",
          "img": "https://wolf-labs.pages.dev/p/25e6f3a6e218/welcome-to-the-black-parade/img/live-coreto.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It's the song that everybody sings at the end.",
          "img": "https://wolf-labs.pages.dev/p/25e6f3a6e218/welcome-to-the-black-parade/img/live-arquibancada.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "who, which, that, where. Four quick ones.",
      "regra": "<b>who</b> = people · <b>which</b> = things · <b>that</b> = both · <b>where</b> = places · never repeat the thing with <i>it</i> or <i>there</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The woman who teaches the drums lives on my street.",
          "aceita": [],
          "d": "Hint: <b>who</b> comes right after the person: <i>the woman who …</i>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "This is the song that I love it.",
          "r": "This is the song that I love.",
          "aceita": [
            "This is the song I love.",
            "This is the song which I love."
          ],
          "d": "Hint: <b>that</b> already means the song, so no <i>it</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "That's the town where I grew up there.",
          "r": "That's the town where I grew up.",
          "aceita": [
            "That is the town where I grew up."
          ],
          "d": "Hint: <b>where</b> already means the place, so no <i>there</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The man which plays the trumpet is my uncle.",
          "r": "The man who plays the trumpet is my uncle.",
          "aceita": [
            "The man that plays the trumpet is my uncle."
          ],
          "d": "Hint: for people, use <b>who</b> (or <i>that</i>), not <i>which</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/25e6f3a6e218/welcome-to-the-black-parade/img/live-coreto.webp",
      "leg": "A bandstand with small lights in the park",
      "pede": "Look at the picture: a bandstand with small lights in a park. Write 2 or 3 sentences about a place or a party in your town. Use <b>who</b>, <b>which / that</b> and <b>where</b>.",
      "ph": "This is the square where …",
      "ex": "This is the square where my town has a festival every June. The band that plays there is from my school. The man who sells corn is always there."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is the first concert or show that you remember?",
          "ph": "The first show that I remember was …",
          "ex": "The first show that I remember was a samba school that played in my street."
        },
        {
          "q": "What is a place where you feel happy?",
          "ph": "A place where I feel happy is …",
          "ex": "A place where I feel happy is the beach where I learned to surf."
        }
      ]
    }
  }
};
