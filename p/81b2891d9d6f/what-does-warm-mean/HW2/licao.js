/* WHAT DOES WARM MEAN? · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: adjetivos extremos (very x absolutely). B2: nenhum português. Só imagens live-* (já escuras). Falas originais. */
window.HW2 = {
  "id": "what-does-warm-mean",
  "titulo": "What Does Warm Mean?",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/81b2891d9d6f/what-does-warm-mean/img/live-capa.webp",
  "alvo": "extreme adjectives: very + normal adjective (very tired, very difficult), absolutely / really + extreme adjective (absolutely exhausted, absolutely boiling); never very + extreme, never absolutely + normal",
  "abrir": "What is the most boring part of your week?",
  "fecho": "<b>very</b> + normal adjective: <i>very tired, very hot, very good</i>. <b>absolutely / really</b> + extreme adjective: <i>absolutely exhausted, absolutely boiling, absolutely amazing</i>. Never <i>very exhausted</i> and never <i>absolutely tired</i>.",
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
  "rate": "-10%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo talk about a long meeting and a surprise drill at the office. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/81b2891d9d6f/what-does-warm-mean/img/live-escritorio.webp",
      "leg": "The quiet office",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the safety meeting yesterday was very boring."
        },
        {
          "quem": "mia",
          "t": "Boring? It was absolutely exhausting. Two hours!"
        },
        {
          "quem": "leo",
          "t": "And the room was very hot."
        },
        {
          "quem": "mia",
          "t": "Hot? It was absolutely boiling. I was totally lost after the first hour."
        },
        {
          "quem": "leo",
          "t": "Today the manager says there is a drill. Everybody must leave in two minutes."
        },
        {
          "quem": "mia",
          "t": "I'm not scared, but I'm very nervous. Where do we meet?"
        },
        {
          "quem": "leo",
          "t": "In the parking lot. The sign is absolutely huge, so just follow the green arrows."
        },
        {
          "quem": "mia",
          "t": "OK. And I'm really starving, by the way. Is there a snack after?"
        },
        {
          "quem": "leo",
          "t": "Of course. The cake is absolutely delicious."
        }
      ],
      "perguntas": [
        {
          "q": "How was yesterday's meeting?",
          "op": [
            "Very boring and absolutely exhausting",
            "Very short",
            "Absolutely fascinating"
          ],
          "a": 0,
          "por": "It was very boring, and absolutely exhausting."
        },
        {
          "q": "What is the drill today?",
          "op": [
            "Everybody leaves in two minutes",
            "Everybody stays at their desks",
            "Everybody goes home"
          ],
          "a": 0,
          "por": "Everybody must leave in two minutes."
        },
        {
          "q": "What does Leo say about the cake?",
          "op": [
            "It's absolutely delicious",
            "It's very cold",
            "It's a little boring"
          ],
          "a": 0,
          "por": "The cake is absolutely delicious."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with very and absolutely. Hear it, then say it.",
      "frases": [
        {
          "t": "The meeting was very boring and absolutely exhausting.",
          "img": "https://wolf-labs.pages.dev/p/81b2891d9d6f/what-does-warm-mean/img/live-escritorio.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "My desk is very small, but my chair is absolutely huge.",
          "img": "https://wolf-labs.pages.dev/p/81b2891d9d6f/what-does-warm-mean/img/live-mesa-dwight.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I was absolutely terrified, but it was only a drill.",
          "img": "https://wolf-labs.pages.dev/p/81b2891d9d6f/what-does-warm-mean/img/live-fumaca.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "very or absolutely? Four quick ones.",
      "regra": "<b>very</b> + normal (very tired) · <b>absolutely / really</b> + extreme (absolutely exhausted) · never <i>very exhausted</i>, never <i>absolutely tired</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The soup was absolutely delicious.",
          "aceita": [],
          "d": "Hint: <b>delicious</b> is extreme, so <b>absolutely</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The movie was very fantastic.",
          "r": "The movie was absolutely fantastic.",
          "aceita": [
            "The movie was really fantastic."
          ],
          "d": "Hint: <b>fantastic</b> is extreme, so not <i>very</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I was absolutely tired after work.",
          "r": "I was absolutely exhausted after work.",
          "aceita": [
            "I was very tired after work."
          ],
          "d": "Hint: <b>tired</b> is normal. Use <b>very tired</b> or the extreme <b>exhausted</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The test was absolutely difficult.",
          "r": "The test was very difficult.",
          "aceita": [
            "The test was really difficult."
          ],
          "d": "Hint: <b>difficult</b> is a normal adjective, so <b>very</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/81b2891d9d6f/what-does-warm-mean/img/live-mesa-dwight.webp",
      "leg": "A quiet desk with a lamp",
      "pede": "Look at the picture: a quiet office desk with a lamp. Write 2 or 3 sentences about a day at work or school. Use <b>very</b> + a normal adjective and <b>absolutely</b> or <b>really</b> + an extreme one.",
      "ph": "My day was very … It was absolutely …",
      "ex": "My Monday was very busy. The train was absolutely packed, and I was absolutely exhausted by noon."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Describe the weather in your city today. Use very and absolutely.",
          "ph": "It's very … It's absolutely …",
          "ex": "It's very warm today, but at night it's absolutely freezing."
        },
        {
          "q": "Tell me about a meal you had this week. Use a normal and an extreme adjective.",
          "ph": "The … was very … The … was absolutely …",
          "ex": "The pizza was very good. The dessert was absolutely amazing."
        }
      ]
    }
  }
};
