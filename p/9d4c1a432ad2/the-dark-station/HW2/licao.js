/* THE DARK STATION · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: imperativo + something / anything / nothing. Jogo: falas originais, mistério leve. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-dark-station",
  "titulo": "The Dark Station",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/9d4c1a432ad2/the-dark-station/img/live-hall.webp",
  "alvo": "imperative (Open the drawer. Don't go down. Be careful.) and something / anything / nothing / anybody / nobody: something in a yes, anything in a question or with not, nothing alone; never a double no (There isn't nothing); Don't + plain verb, never No go or Don't to run",
  "abrir": "What is in your bag right now?",
  "fecho": "<b>Orders</b>: <i>Open the drawer. Don't run.</i> <b>Something</b> = yes: <i>I found something.</i> <b>Anything</b> = question or not: <i>Is there anything? There isn't anything.</i> <b>Nothing</b> alone: <i>There is nothing.</i> Never a double no: <i>There isn't nothing.</i>",
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
      "sub": "Mia searches a dark old station. Leo guides her by radio. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/9d4c1a432ad2/the-dark-station/img/live-office.webp",
      "leg": "The old office",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, can you hear me? What do you see in the office?"
        },
        {
          "quem": "mia",
          "t": "It's dark. There's nothing on the desk."
        },
        {
          "quem": "leo",
          "t": "Open the top drawer. Is there anything inside?"
        },
        {
          "quem": "mia",
          "t": "Yes! I found something: a small silver key."
        },
        {
          "quem": "leo",
          "t": "Great. Take it. Don't go downstairs yet."
        },
        {
          "quem": "mia",
          "t": "OK. Is there anybody in the hall?"
        },
        {
          "quem": "leo",
          "t": "No, nobody. The hall is empty. Check the locker, please."
        },
        {
          "quem": "mia",
          "t": "There isn't anything in it. Wait, there's a note. Look behind the clock."
        },
        {
          "quem": "leo",
          "t": "Go to the clock. Be careful and don't run."
        }
      ],
      "perguntas": [
        {
          "q": "What is on the desk?",
          "op": [
            "Nothing",
            "A silver key",
            "A note"
          ],
          "a": 0,
          "por": "There's nothing on the desk."
        },
        {
          "q": "What does Mia find in the drawer?",
          "op": [
            "A small silver key",
            "A note",
            "A clock"
          ],
          "a": 0,
          "por": "I found something: a small silver key."
        },
        {
          "q": "What does Leo say about the hall?",
          "op": [
            "Nobody is there",
            "Somebody is there",
            "It is full of boxes"
          ],
          "a": 0,
          "por": "No, nobody. The hall is empty."
        }
      ]
    },
    "out": {
      "sub": "Orders and searches. Hear it, then say it.",
      "frases": [
        {
          "t": "Open the top drawer.",
          "img": "https://wolf-labs.pages.dev/p/9d4c1a432ad2/the-dark-station/img/live-office.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "There is nothing on the desk.",
          "img": "https://wolf-labs.pages.dev/p/9d4c1a432ad2/the-dark-station/img/live-office.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Don't run in the hall.",
          "img": "https://wolf-labs.pages.dev/p/9d4c1a432ad2/the-dark-station/img/live-hall.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Orders and something / anything / nothing. Four quick ones.",
      "regra": "<b>Open</b> / <b>Don't open</b> + plain verb · <b>something</b> = yes · <b>anything</b> = question or <b>not</b> · <b>nothing</b> alone · no double no.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Please open the door and take the key.",
          "aceita": [],
          "d": "Dica: ordem = o verbo limpo no começo: <b>open</b>, <b>take</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There isn't nothing in the locker.",
          "r": "There isn't anything in the locker.",
          "aceita": [
            "There is nothing in the locker.",
            "There's nothing in the locker."
          ],
          "d": "Dica: <b>isn't</b> já é negativo, então <b>anything</b>. Sem negativa dupla."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Don't to run in the hall.",
          "r": "Don't run in the hall.",
          "aceita": [
            "Do not run in the hall."
          ],
          "d": "Dica: depois de <b>Don't</b>, o verbo fica limpo, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make the order correct.",
          "mostra": "No go there.",
          "r": "Don't go there.",
          "aceita": [
            "Do not go there."
          ],
          "d": "Dica: ordem negativa = <b>Don't</b> + verbo."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/9d4c1a432ad2/the-dark-station/img/live-tv.webp",
      "leg": "An old TV in a dark room",
      "pede": "Look at the picture: an old TV in a dark room. Write 2 or 3 sentences about the room: what is there, and what isn't there? Use <b>something</b>, <b>anything</b> or <b>nothing</b>.",
      "ph": "There is something …",
      "ex": "There is something blue on the TV, but there isn't anything on the table. Nobody is in the room."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Is there anything in your bag right now? What is it?",
          "ph": "Yes, there is something: …",
          "ex": "Yes, there is something: my keys and a bottle of water."
        },
        {
          "q": "Give a friend two orders for a party: one with a verb, one with Don't.",
          "ph": "Bring … Don't …",
          "ex": "Bring some snacks. Don't be late."
        }
      ]
    }
  }
};
