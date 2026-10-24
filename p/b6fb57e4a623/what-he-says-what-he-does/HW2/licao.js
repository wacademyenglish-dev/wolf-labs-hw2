/* WHAT HE SAYS, WHAT HE DOES · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present simple x present continuous. Filme: falas originais, sem violência. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "what-he-says-what-he-does",
  "titulo": "What He Says, What He Does",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/b6fb57e4a623/what-he-says-what-he-does/img/live-capa.webp",
  "alvo": "present simple (what he usually does, what he says) versus present continuous (what he is doing now: is + -ing); he / she + -s; no -ing with want, know, like",
  "abrir": "What do you usually do on Saturdays, and what are you doing now?",
  "fecho": "<b>Usually</b> = one piece: <i>He works at a bank.</i> With he / she, add <b>-s</b>. <b>Now</b> = two pieces: <i>He is looking at the bridge.</i> Some verbs stay in one piece, even now: <i>want, know, like</i>.",
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
      "sub": "Mia and Leo watch a man by a bridge. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/b6fb57e4a623/what-he-says-what-he-does/img/live-capa.webp",
      "leg": "A bridge at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at the man by the bridge. What does he say he does?"
        },
        {
          "quem": "mia",
          "t": "He says he works at a bank. He goes to the office every day."
        },
        {
          "quem": "leo",
          "t": "But what is he doing now?"
        },
        {
          "quem": "mia",
          "t": "Now he is standing by the river with binoculars. He isn't going to the office."
        },
        {
          "quem": "leo",
          "t": "Is he alone?"
        },
        {
          "quem": "mia",
          "t": "No. He is talking to a girl. She is eating an apple."
        },
        {
          "quem": "leo",
          "t": "What does he usually do at night?"
        },
        {
          "quem": "mia",
          "t": "He usually reads at home. But tonight he is writing notes in a small book."
        },
        {
          "quem": "leo",
          "t": "So he says one thing, and he does another!"
        }
      ],
      "perguntas": [
        {
          "q": "What does the man say he does?",
          "op": [
            "He works at a bank",
            "He is a teacher",
            "He reads at home"
          ],
          "a": 0,
          "por": "He says he works at a bank."
        },
        {
          "q": "What is he doing now?",
          "op": [
            "Standing by the river with binoculars",
            "Going to the office",
            "Eating an apple"
          ],
          "a": 0,
          "por": "Now he is standing by the river with binoculars."
        },
        {
          "q": "What is he doing tonight?",
          "op": [
            "Writing notes in a small book",
            "Reading at home",
            "Talking to Leo"
          ],
          "a": 0,
          "por": "Tonight he is writing notes in a small book."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the man. Hear it, then say it.",
      "frases": [
        {
          "t": "He says he works at a bank.",
          "img": "https://wolf-labs.pages.dev/p/b6fb57e4a623/what-he-says-what-he-does/img/live-mesa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Right now he is looking at the bridge.",
          "img": "https://wolf-labs.pages.dev/p/b6fb57e4a623/what-he-says-what-he-does/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "He usually reads, but tonight he is writing notes.",
          "img": "https://wolf-labs.pages.dev/p/b6fb57e4a623/what-he-says-what-he-does/img/live-mesa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Every day or now? Four quick ones.",
      "regra": "<b>usually</b> = one piece (he works) · <b>now</b> = two pieces (he is working) · he / she + <b>-s</b> · <b>want, know, like</b> stay in one piece.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "He usually says yes, but today he is saying no.",
          "aceita": [],
          "d": "Dica: hoje, agora = <b>is</b> + verbo com <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She is wanting a coffee right now.",
          "r": "She wants a coffee right now.",
          "aceita": [
            "She wants a coffee right now."
          ],
          "d": "Dica: <b>want</b> não usa -ing, nem agora."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Every day he is going to the office.",
          "r": "Every day he goes to the office.",
          "aceita": [],
          "d": "Dica: todo dia = um pedaço só: <b>goes</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Look! He talks to a man.",
          "r": "Look! He is talking to a man.",
          "aceita": [
            "Look! He's talking to a man."
          ],
          "d": "Dica: <b>Look!</b> = agora, então <b>is</b> + verbo com -ing."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/b6fb57e4a623/what-he-says-what-he-does/img/live-mesa.webp",
      "leg": "A desk with binoculars and a notebook",
      "pede": "Look at the picture: a desk with binoculars and a notebook. Write 2 or 3 sentences about a person: what they <b>usually do</b>, and what they <b>are doing</b> now.",
      "ph": "He usually … but now he is …ing.",
      "ex": "He usually sleeps at night, but now he is looking through the binoculars. He is writing in the notebook."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you usually do on Saturdays?",
          "ph": "On Saturdays I usually …",
          "ex": "On Saturdays I usually sleep late and visit my mother."
        },
        {
          "q": "What are you doing these days? Is it different from your usual life?",
          "ph": "These days I am …ing.",
          "ex": "These days I am studying English at night. It is different, because I usually watch TV."
        }
      ]
    }
  }
};
