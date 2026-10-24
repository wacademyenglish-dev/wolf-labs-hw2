/* BOHEMIAN RHAPSODY · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: reporting verbs + recuo do tempo + pergunta relatada. Linha de música: NENHUM verso aqui; o listening é diálogo original, cena neutra. B2: nenhum português. Só imagens live-* escuras (lum < 50); sem cenas de perda (regra 9). */
window.HW2 = {
  "id": "bohemian-rhapsody",
  "titulo": "Bohemian Rhapsody",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/db43ee42313b/bohemian-rhapsody/img/live-palco.webp",
  "alvo": "reported speech with reporting verbs: promise / refuse to + verb, warn / beg + person + not to, admit / deny + -ing, suggest + -ing; the tense steps back (is -> was, has -> had, will -> would); told + person, said + that; a reported question keeps normal order",
  "abrir": "Think of the last time someone gave you advice. What did they tell you to do?",
  "fecho": "The reporting verb carries its own pattern: <b>promise / refuse to</b> + verb, <b>warn / beg</b> + person + <b>not to</b>, <b>admit / deny</b> + -ing, <b>suggest</b> + -ing. Reported later, the tense steps back: <i>is → was</i>, <i>has → had</i>, <i>will → would</i>. <b>Tell</b> someone, <b>say</b> something. A reported question keeps normal order: <i>she asked where the theatre was</i>.",
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
      "sub": "Mia tells Leo about an opening night at the theatre. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/db43ee42313b/bohemian-rhapsody/img/live-camarote.webp",
      "leg": "The box seats on opening night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you went to the opening night at the Rialto. How was it?"
        },
        {
          "quem": "mia",
          "t": "Wonderful, but backstage was chaos. The lead singer refused to go on until they fixed his microphone."
        },
        {
          "quem": "leo",
          "t": "Really? Who fixed it?"
        },
        {
          "quem": "mia",
          "t": "The sound engineer. He promised to have it ready in five minutes, and he did."
        },
        {
          "quem": "leo",
          "t": "And the director? I heard she's very strict."
        },
        {
          "quem": "mia",
          "t": "She is. Before the show, she warned the dancers not to look at the audience."
        },
        {
          "quem": "leo",
          "t": "Did anyone complain?"
        },
        {
          "quem": "mia",
          "t": "The pianist admitted feeling nervous. He told me that he had never played in such a big theatre."
        },
        {
          "quem": "leo",
          "t": "I'd be nervous too. What did the critic say?"
        },
        {
          "quem": "mia",
          "t": "She asked me where the singer had studied. Then she suggested meeting him after the show."
        },
        {
          "quem": "leo",
          "t": "So she liked it."
        },
        {
          "quem": "mia",
          "t": "She said that it was the best night of the season."
        }
      ],
      "perguntas": [
        {
          "q": "Why did the lead singer refuse to go on?",
          "op": [
            "His microphone wasn't working",
            "He felt too nervous",
            "The theatre was empty"
          ],
          "a": 0,
          "por": "The lead singer refused to go on until they fixed his microphone."
        },
        {
          "q": "What did the director warn the dancers?",
          "op": [
            "Not to look at the audience",
            "Not to be late",
            "To smile at the critic"
          ],
          "a": 0,
          "por": "She warned the dancers not to look at the audience."
        },
        {
          "q": "What did the critic ask Mia?",
          "op": [
            "Where the singer had studied",
            "Where the theatre was",
            "When the show had started"
          ],
          "a": 0,
          "por": "She asked me where the singer had studied."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a night at the theatre. Hear it, then say it.",
      "frases": [
        {
          "t": "The director warned us not to touch the curtain.",
          "img": "https://wolf-labs.pages.dev/p/db43ee42313b/bohemian-rhapsody/img/live-cortina.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The singer promised to sing one more song at the end.",
          "img": "https://wolf-labs.pages.dev/p/db43ee42313b/bohemian-rhapsody/img/live-palco.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "She asked me where I had bought my ticket.",
          "img": "https://wolf-labs.pages.dev/p/db43ee42313b/bohemian-rhapsody/img/live-camarote.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "The verb decides the pattern. Four quick ones.",
      "regra": "<b>promise / refuse to</b> + verb · <b>warn / beg</b> + person + <b>not to</b> · <b>admit / deny</b> + -ing · <b>told</b> + person · reported question: normal order.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The director warned the dancers not to look at the audience.",
          "aceita": [],
          "d": "Hint: <b>warn</b> + person + <b>not to</b> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "He denied to take the tickets.",
          "r": "He denied taking the tickets.",
          "aceita": [
            "He denied having taken the tickets."
          ],
          "d": "Hint: <b>deny</b> is followed by -ing, never <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "She asked me where was the theatre.",
          "r": "She asked me where the theatre was.",
          "aceita": [
            "She asked me where the theater was."
          ],
          "d": "Hint: a reported question keeps normal order: subject, then verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The singer said me that he was tired.",
          "r": "The singer told me that he was tired.",
          "aceita": [
            "The singer told me he was tired.",
            "The singer said that he was tired.",
            "The singer said he was tired."
          ],
          "d": "Hint: <b>tell</b> someone, <b>say</b> something. Never <i>said me</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/db43ee42313b/bohemian-rhapsody/img/live-camarote.webp",
      "leg": "Red seats before the show",
      "pede": "Look at the picture: red theatre seats before a show. Think of a show, a party or a meeting you went to. Write 2 or 3 sentences about what people said. Use <b>promised to</b>, <b>warned … not to</b>, <b>admitted + -ing</b> or <b>asked … where / if</b>.",
      "ph": "My friend promised to … The usher warned us not to …",
      "ex": "My friend promised to save me a seat. The usher warned us not to take photos. Later, my cousin admitted falling asleep in the second act."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a promise someone made to you this year. What did they promise? Did they keep it?",
          "ph": "My … promised to … and …",
          "ex": "My brother promised to help me move, and he arrived at seven in the morning."
        },
        {
          "q": "Has anyone ever warned you not to do something? What happened?",
          "ph": "… warned me not to …, but …",
          "ex": "My friend warned me not to buy cheap headphones, but I bought them, and they broke in a week."
        }
      ]
    }
  }
};
