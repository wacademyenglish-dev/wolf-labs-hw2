/* GIVE IT TO HER · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: pronomes objeto (me, him, her, us, them, it). A1: dicas em português só nas notas (d). Alvo = pronomes: HW2_ARTIGO_CONTA. */
window.HW2_ARTIGO_CONTA = true;
window.HW2 = {
  "id": "give-it-to-her",
  "titulo": "Give It to Her",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/46da24032963/give-it-to-her/img/live-presentes.webp",
  "alvo": "object pronouns (me, you, him, her, it, us, them) after a verb and after to / for / with: Give it to her · Call him · I love it (do not drop IT; not give it to she, not for we, not for your)",
  "abrir": "Who do you give presents to?",
  "fecho": "After a verb or <b>to / for / with</b>, the pronoun changes: <b>I → me · he → him · she → her · we → us · they → them</b>: <i>Give it to her. Call him. Pick them up.</i> A thing is <b>it</b>: <i>I love it</i>, never <i>I love</i>.",
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
      "sub": "Mia and Leo get ready for Grandma Rosa's birthday. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/46da24032963/give-it-to-her/img/live-bolo.webp",
      "leg": "A chocolate cake with candles",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, we have a present for Grandma Rosa. Where is it?"
        },
        {
          "quem": "leo",
          "t": "I have it. It is in the box. Give it to her at the party."
        },
        {
          "quem": "mia",
          "t": "No, you give it to her. She loves you."
        },
        {
          "quem": "leo",
          "t": "She loves you too. And the cake? Who brings it?"
        },
        {
          "quem": "mia",
          "t": "Uncle Tom brings it. Call him, please."
        },
        {
          "quem": "leo",
          "t": "I call him every day. He never answers me!"
        },
        {
          "quem": "mia",
          "t": "Send him a message. Tell him to bring it at five."
        },
        {
          "quem": "leo",
          "t": "OK. And the twins? Are they coming?"
        },
        {
          "quem": "mia",
          "t": "Yes. Pick them up at the station. I want to see them."
        },
        {
          "quem": "leo",
          "t": "Done. Now help me with this box."
        }
      ],
      "perguntas": [
        {
          "q": "Who has the present?",
          "op": [
            "Leo",
            "Uncle Tom",
            "The twins"
          ],
          "a": 0,
          "por": "I have it. It is in the box."
        },
        {
          "q": "Who brings the cake?",
          "op": [
            "Uncle Tom",
            "Mia",
            "Grandma Rosa"
          ],
          "a": 0,
          "por": "Uncle Tom brings it."
        },
        {
          "q": "Where do they pick up the twins?",
          "op": [
            "At the station",
            "At the party",
            "At the door"
          ],
          "a": 0,
          "por": "Pick them up at the station."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for the party. Hear it, then say it.",
      "frases": [
        {
          "t": "Give it to her at the party.",
          "img": "https://wolf-labs.pages.dev/p/46da24032963/give-it-to-her/img/live-presentes.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Call him, please. He never answers me.",
          "img": "https://wolf-labs.pages.dev/p/46da24032963/give-it-to-her/img/live-porta.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Pick them up at the station.",
          "img": "https://wolf-labs.pages.dev/p/46da24032963/give-it-to-her/img/live-bolo.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "me, him, her, us or them? Four quick ones.",
      "regra": "<b>me · you · him · her · it · us · them</b> after a verb or <b>to / for / with</b> · never drop <b>it</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Give it to him, please.",
          "aceita": [],
          "d": "Dica: depois de <b>to</b>, o pronome muda: <b>him</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Give it to she.",
          "r": "Give it to her.",
          "aceita": [],
          "d": "Dica: depois de <b>to</b>, she vira <b>her</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Call they tomorrow.",
          "r": "Call them tomorrow.",
          "aceita": [],
          "d": "Dica: depois do verbo, they vira <b>them</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one thing is missing.",
          "mostra": "Do you like the cake? Yes, I love.",
          "r": "Do you like the cake? Yes, I love it.",
          "aceita": [
            "Do you like the cake? Yes, I like it."
          ],
          "d": "Dica: não largue o <b>it</b>: I love <b>it</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/46da24032963/give-it-to-her/img/live-presentes.webp",
      "leg": "Presents with paper tags",
      "pede": "Look at the picture: presents with paper tags. Write 2 or 3 sentences about who the presents are for. Use <b>her, him, them, us, you</b> or <b>me</b>.",
      "ph": "This present is for … I give it to …",
      "ex": "This present is for her. I give it to Grandma. The small ones are for them, and the red one is for me."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who do you give presents to? What do you give her or him?",
          "ph": "I give presents to … I give her / him …",
          "ex": "I give presents to my mother. I give her flowers."
        },
        {
          "q": "Who do you call every week? Why do you like talking to them?",
          "ph": "I call … I like talking to her / him / them …",
          "ex": "I call my sister every week. I like talking to her because she is funny."
        }
      ]
    }
  }
};
