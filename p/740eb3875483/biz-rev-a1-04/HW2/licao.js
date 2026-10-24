/* THE BIG VISIT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: review da unidade 4: there is/are, lugar, pronomes objeto, at/on/in. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "biz-rev-a1-04",
  "titulo": "The Big Visit",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/740eb3875483/biz-rev-a1-04/img/live-capa.webp",
  "alvo": "review of unit 4: there is / there are (some, any), place (on, in, next to, at the end of), object pronouns (call him, give it to her), at / on / in with times, days and months",
  "abrir": "What is on your desk right now?",
  "fecho": "<b>There is</b> + one, <b>there are</b> + two or more; questions with <b>any</b>: <i>Is there any coffee?</i> Place: <b>on the shelf, next to the printer, at the end of the hall.</b> After the verb: <b>him, her, it, them</b>: <i>call him, give it to her.</i> Time: <b>at</b> ten, <b>on</b> Tuesday, <b>in</b> May.",
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
      "sub": "Mia and Leo get the office ready. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/740eb3875483/biz-rev-a1-04/img/live-capa.webp",
      "leg": "A supply room with boxes on shelves",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the big client visits tomorrow. The meeting is on Tuesday at ten."
        },
        {
          "quem": "leo",
          "t": "OK. Is there any coffee in the kitchen?"
        },
        {
          "quem": "mia",
          "t": "Yes, there is some. And there are snacks on the shelf next to the printer."
        },
        {
          "quem": "leo",
          "t": "How many chairs are there in the meeting room?"
        },
        {
          "quem": "mia",
          "t": "There are eight chairs, but there are ten people."
        },
        {
          "quem": "leo",
          "t": "We need two more. The extra chairs are in the supply room, at the end of the hall."
        },
        {
          "quem": "mia",
          "t": "Good. The TV does not work. Can you call Tom?"
        },
        {
          "quem": "leo",
          "t": "Yes, I can call him now. And here is Mr. Park's name card."
        },
        {
          "quem": "mia",
          "t": "Please give it to him at the door. Thank you!"
        }
      ],
      "perguntas": [
        {
          "q": "When is the meeting?",
          "op": [
            "On Tuesday at ten",
            "On Monday at nine",
            "In May at ten"
          ],
          "a": 0,
          "por": "The meeting is on Tuesday at ten."
        },
        {
          "q": "Where are the extra chairs?",
          "op": [
            "In the supply room, at the end of the hall",
            "Next to the printer",
            "On the shelf in the kitchen"
          ],
          "a": 0,
          "por": "The extra chairs are in the supply room, at the end of the hall."
        },
        {
          "q": "Who does Leo call about the TV?",
          "op": [
            "Tom",
            "Mr. Park",
            "The client"
          ],
          "a": 0,
          "por": "Can you call Tom? Yes, I can call him now."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the visit. Hear it, then say it.",
      "frases": [
        {
          "t": "The meeting is on Tuesday at ten.",
          "img": "https://wolf-labs.pages.dev/p/740eb3875483/biz-rev-a1-04/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "There are snacks on the shelf next to the printer.",
          "img": "https://wolf-labs.pages.dev/p/740eb3875483/biz-rev-a1-04/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Please call him about the TV.",
          "img": "https://wolf-labs.pages.dev/p/740eb3875483/biz-rev-a1-04/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "There is, any, on / in, him / her. Four quick ones.",
      "regra": "<b>There is / there are</b> · <b>any</b> in questions · <b>at</b> ten, <b>on</b> Tuesday, <b>in</b> May · <b>him, her, it, them</b> after the verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Is there any coffee in the kitchen?",
          "aceita": [],
          "d": "Dica: pergunta com there is + <b>any</b>: Is there any coffee?"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the sentence is not English.",
          "mostra": "Have two chairs in the hall.",
          "r": "There are two chairs in the hall.",
          "aceita": [
            "In the hall there are two chairs."
          ],
          "d": "Dica: o nosso \"tem\" é <b>there is / there are</b>. Duas cadeiras: there are."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The meeting is in Tuesday at ten.",
          "r": "The meeting is on Tuesday at ten.",
          "aceita": [
            "The meeting is on Tuesday at 10."
          ],
          "d": "Dica: dia da semana pede <b>on</b>: on Tuesday."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Please call he about the TV.",
          "r": "Please call him about the TV.",
          "aceita": [],
          "d": "Dica: depois do verbo, he vira <b>him</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/740eb3875483/biz-rev-a1-04/img/live-capa.webp",
      "leg": "A supply room with boxes on shelves",
      "pede": "Look at the picture: boxes on the shelves of a supply room. Write 2 or 3 sentences: what there is in the room and where it is. Use <b>there is, there are, on, next to</b>.",
      "ph": "In the supply room there are …",
      "ex": "In the supply room there are boxes on the shelf. The paper is next to the door. There isn't any coffee."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is on your desk? Where is it?",
          "ph": "On my desk there is …",
          "ex": "On my desk there is a laptop. My phone is next to it."
        },
        {
          "q": "When is your next meeting or class? Say the day and the time.",
          "ph": "My next … is on … at …",
          "ex": "My next class is on Tuesday at seven."
        }
      ]
    }
  }
};
