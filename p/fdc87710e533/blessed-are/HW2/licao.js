/* BLESSED ARE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: orações relativas (who / that / where / whose). Versículos (WEB, ao pé da letra): Matthew 5:6 (Listen), Matthew 5:9 (Out loud), Matthew 5:7 (Você). Nada da Bíblia é marcado como errado. B2: nenhum português. */
window.HW2 = {
  "id": "blessed-are",
  "titulo": "Blessed Are",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/fdc87710e533/blessed-are/img/live-capa2.webp",
  "alvo": "relative clauses: who / that for people, that / which for things, where for places, whose for possession; those who, people who; never who for things, which for people, repeated pronoun (people who they help), who's for whose",
  "abrir": "Who is a person who makes your day better?",
  "fecho": "<b>who</b> = people: <i>people who help others</i> · <b>that / which</b> = things: <i>the shop that sells bread</i> · <b>where</b> = places: <i>a place where people share food</i> · <b>whose</b> = belongs to: <i>a neighbour whose door is always open</i>. Never repeat the pronoun: not <i>people who they help</i>.",
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
      "sub": "Mia and Leo plan a street party. She reads Matthew 5:6. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/fdc87710e533/blessed-are/img/live-encosta.webp",
      "leg": "A green hill in the evening",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I found a place where we can cook for the street party. It's a small kitchen that belongs to the church."
        },
        {
          "quem": "leo",
          "t": "Good. Who is coming to help?"
        },
        {
          "quem": "mia",
          "t": "Everyone who lives on our street, and a few people whose children go to the same school."
        },
        {
          "quem": "leo",
          "t": "Is Mr Silva coming? He's the neighbour who always fixes things for everyone."
        },
        {
          "quem": "mia",
          "t": "Yes! He's bringing the tables that his son made. Listen, I read something this morning. Matthew chapter five, verse six."
        },
        {
          "quem": "mia",
          "t": "Blessed are those who hunger and thirst for righteousness, for they shall be filled."
        },
        {
          "quem": "leo",
          "t": "That's a big idea. What does it mean to you?"
        },
        {
          "quem": "mia",
          "t": "To me, it's about people who really want what is right: fair, kind things for everyone."
        },
        {
          "quem": "leo",
          "t": "Then our street party is a good start. The people we invited are all people who want a kinder street."
        },
        {
          "quem": "mia",
          "t": "Exactly. Now, the soup is the thing that worries me. Where did you put the big pot?"
        }
      ],
      "perguntas": [
        {
          "q": "What kind of place did Mia find?",
          "op": [
            "A small kitchen where they can cook",
            "A park where they can sleep",
            "A shop that sells big pots"
          ],
          "a": 0,
          "por": "I found a place where we can cook for the street party."
        },
        {
          "q": "Who is Mr Silva?",
          "op": [
            "A neighbour who fixes things",
            "A man whose son is a cook",
            "A friend who sells tables"
          ],
          "a": 0,
          "por": "He's the neighbour who always fixes things for everyone."
        },
        {
          "q": "What does Mia say the verse is about?",
          "op": [
            "People who really want what is right",
            "People who cook the best soup",
            "People who live far away"
          ],
          "a": 0,
          "por": "It's about people who really want what is right."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with who, whose and where. The third is from the Bible: Matthew 5:9 (World English Bible). Hear it, then say it.",
      "frases": [
        {
          "t": "This is a place where people share food.",
          "img": "https://wolf-labs.pages.dev/p/fdc87710e533/blessed-are/img/live-planicie.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She is the neighbour whose door is always open.",
          "img": "https://wolf-labs.pages.dev/p/fdc87710e533/blessed-are/img/live-encosta.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Blessed are the peacemakers, for they shall be called children of God.",
          "img": "https://wolf-labs.pages.dev/p/fdc87710e533/blessed-are/img/live-capa2.webp",
          "au": "audio/say3.mp3",
          "ref": "Matthew 5:9"
        }
      ]
    },
    "focus": {
      "sub": "who, that, where, whose. Four quick ones.",
      "regra": "<b>who</b> = people · <b>that / which</b> = things · <b>where</b> = places · <b>whose</b> = belongs to · never repeat the pronoun.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I know a place where people share food.",
          "aceita": [],
          "d": "Hint: a place → <b>where</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is too much.",
          "mostra": "People who they help others are happy.",
          "r": "People who help others are happy.",
          "aceita": [],
          "d": "Hint: <b>who</b> is already the subject. Don't repeat it with <i>they</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "That's the shop who sells fresh bread.",
          "r": "That's the shop that sells fresh bread.",
          "aceita": [
            "That's the shop which sells fresh bread."
          ],
          "d": "Hint: a shop is a thing, so <b>that</b> or <b>which</b>, not <i>who</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He is a man who's kindness is famous.",
          "r": "He is a man whose kindness is famous.",
          "aceita": [],
          "d": "Hint: the kindness belongs to him, so <b>whose</b>. <i>Who's</i> = who is."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/fdc87710e533/blessed-are/img/live-planicie.webp",
      "leg": "A wide, quiet valley at dusk",
      "pede": "Look at the picture: a wide, quiet valley at dusk. Write 2 or 3 sentences about a place where you feel at peace, and the people who live or work there. Use <b>where</b>, <b>who</b> or <b>whose</b>.",
      "ph": "It's a place where …",
      "ex": "It's a place where people don't shout. My neighbour, whose garden is beautiful, is a person who always helps."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Matthew 5:7 says, “Blessed are the merciful, for they shall obtain mercy.” Think of someone who was kind to you. Describe that person with who or whose.",
          "ph": "She is a person who …",
          "ex": "My aunt is a person who always forgives. She is the one whose house is always open."
        },
        {
          "q": "Describe the kind of person you want to be, or the kind of place you want to live in. Use who, whose or where.",
          "ph": "I want to live in a place where …",
          "ex": "I want to live in a place where neighbours know each other, and I want to be a person who helps."
        }
      ]
    }
  }
};
