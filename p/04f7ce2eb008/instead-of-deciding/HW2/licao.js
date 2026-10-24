/* INSTEAD OF DECIDING · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: preposicao + -ing. B2: nenhum portugues. live-celular/quarto/poltrona. */
window.HW2 = {
  "id": "instead-of-deciding",
  "titulo": "Instead of Deciding",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/04f7ce2eb008/instead-of-deciding/img/live-celular.webp",
  "alvo": "preposition + -ing: instead of / without / after / before + -ing; verb + preposition + -ing (insist on, succeed in, give up); TO as a preposition (look forward to, be used to, object to): if IT can follow, use -ing",
  "abrir": "What did you do this week instead of making a decision?",
  "fecho": "After a preposition, the verb takes <b>-ing</b>: <i>instead of deciding, without answering, after reading, before going</i>. Some verbs bring their own preposition: <i>insist on cooking, succeed in changing</i>. Some <b>to</b> are prepositions: <i>look forward to seeing, be used to working</i>. The test: if <b>it</b> can follow the <b>to</b>, use <b>-ing</b>.",
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
      "sub": "Mia and Leo talk about their phones. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/04f7ce2eb008/instead-of-deciding/img/live-quarto.webp",
      "leg": "A dark bedroom",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you were supposed to answer Clara last night. Did you?"
        },
        {
          "quem": "leo",
          "t": "No. Instead of answering her, I watched videos for two hours."
        },
        {
          "quem": "mia",
          "t": "Before going to bed, I always do the same. Then I go to sleep without finishing anything."
        },
        {
          "quem": "leo",
          "t": "After reading the news, I can't sleep. And I'm not used to putting the phone away."
        },
        {
          "quem": "mia",
          "t": "I'm looking forward to leaving mine in the kitchen. I'll try tonight."
        },
        {
          "quem": "leo",
          "t": "My sister insists on taking hers out of the bedroom."
        },
        {
          "quem": "mia",
          "t": "Did she succeed in changing the habit?"
        },
        {
          "quem": "leo",
          "t": "She did. She gave up checking messages after nine."
        }
      ],
      "perguntas": [
        {
          "q": "What did Leo do instead of answering Clara?",
          "op": [
            "He watched videos for two hours",
            "He called her",
            "He went to bed early"
          ],
          "a": 0,
          "por": "Instead of answering her, I watched videos for two hours."
        },
        {
          "q": "What is Mia looking forward to?",
          "op": [
            "Leaving her phone in the kitchen",
            "Reading the news",
            "Calling Clara"
          ],
          "a": 0,
          "por": "I'm looking forward to leaving mine in the kitchen."
        },
        {
          "q": "What did Leo's sister give up?",
          "op": [
            "Checking messages after nine",
            "Reading the news",
            "Going to bed late"
          ],
          "a": 0,
          "por": "She gave up checking messages after nine."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with -ing after a preposition. Hear it, then say it.",
      "frases": [
        {
          "t": "Instead of answering her, I watched videos for two hours.",
          "img": "https://wolf-labs.pages.dev/p/04f7ce2eb008/instead-of-deciding/img/live-celular.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I'm looking forward to leaving my phone in the kitchen.",
          "img": "https://wolf-labs.pages.dev/p/04f7ce2eb008/instead-of-deciding/img/live-quarto.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "She succeeded in changing the habit.",
          "img": "https://wolf-labs.pages.dev/p/04f7ce2eb008/instead-of-deciding/img/live-poltrona.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "preposition + -ing. Four quick ones.",
      "regra": "<b>instead of / without / after / before + -ing</b> · <b>insist on, succeed in + -ing</b> · <b>look forward to, be used to + -ing</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I went to bed without answering the message.",
          "aceita": [],
          "d": "Hint: <b>without</b> is a preposition, so the verb takes <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Instead of decide, I watched videos.",
          "r": "Instead of deciding, I watched videos.",
          "aceita": [],
          "d": "Hint: after <b>instead of</b>, the verb takes <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm looking forward to see you on Friday.",
          "r": "I'm looking forward to seeing you on Friday.",
          "aceita": [
            "I am looking forward to seeing you on Friday."
          ],
          "d": "Hint: <b>to</b> is a preposition here: <i>looking forward to it</i> works, so <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the verb pattern is wrong.",
          "mostra": "She insisted to pay for dinner.",
          "r": "She insisted on paying for dinner.",
          "aceita": [
            "She insisted on paying for the dinner."
          ],
          "d": "Hint: <b>insist on</b> + -ing."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/04f7ce2eb008/instead-of-deciding/img/live-poltrona.webp",
      "leg": "An armchair by the window at dusk",
      "pede": "Look at the picture: an armchair by the window in the evening. Write 2 or 3 sentences about your evening habits. Use <b>instead of, without, after, before</b> or <b>looking forward to</b> with <b>-ing</b>.",
      "ph": "Instead of …ing, I …",
      "ex": "Instead of watching videos, I read in my armchair. After finishing work, I make tea. I'm looking forward to going to bed early."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you do instead of something you should do?",
          "ph": "Instead of …ing, I …",
          "ex": "Instead of studying, I check my phone."
        },
        {
          "q": "What are you looking forward to doing this month?",
          "ph": "I'm looking forward to …ing",
          "ex": "I'm looking forward to visiting my cousins in the mountains."
        }
      ]
    }
  }
};
