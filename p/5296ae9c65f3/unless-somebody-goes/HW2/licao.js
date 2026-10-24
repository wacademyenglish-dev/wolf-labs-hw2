/* UNLESS SOMEBODY GOES · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: first conditional: if / unless / when + presente. B1: nenhum português. Só live-* escuras; sem arco, espada nem batalha. Falas originais. */
window.HW2 = {
  "id": "unless-somebody-goes",
  "titulo": "Unless Somebody Goes",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/5296ae9c65f3/unless-somebody-goes/img/live-capa.webp",
  "alvo": "first conditional: if + present, will + verb; unless = if ... not, with a positive verb; when / as soon as + present for the future; never will after if / unless / when",
  "abrir": "What will you do if you have a free day tomorrow?",
  "fecho": "<b>If</b> + present, <b>will</b> + verb: <i>If it rains, we will wait.</i> <b>Unless</b> = if not, with a positive verb: <i>Unless you hurry, you will be late.</i> <b>When / as soon as</b> + present: <i>When I arrive, I will call.</i> Never <i>will</i> after if, unless or when.",
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
      "sub": "Mia and Leo plan a long trip. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/5296ae9c65f3/unless-somebody-goes/img/live-mapa.webp",
      "leg": "A map of a winding road",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the council meets at dawn. If nobody takes the small box to the mountain, it will stay here forever."
        },
        {
          "quem": "mia",
          "t": "Then somebody must go. If I go, I will need a map and a lamp."
        },
        {
          "quem": "leo",
          "t": "When you reach the river, you will see a bridge. Unless it rains, the bridge will be open."
        },
        {
          "quem": "mia",
          "t": "And if it rains?"
        },
        {
          "quem": "leo",
          "t": "If it rains, you will wait in the old mill. As soon as the sun comes out, you will cross."
        },
        {
          "quem": "mia",
          "t": "What if I get lost?"
        },
        {
          "quem": "leo",
          "t": "If you follow the stars, you won't get lost. Unless the sky is cloudy, of course."
        },
        {
          "quem": "mia",
          "t": "Then I will go. If I leave tonight, I will arrive on Friday."
        },
        {
          "quem": "leo",
          "t": "Good. When you arrive, send me a bird."
        }
      ],
      "perguntas": [
        {
          "q": "What will happen if nobody takes the box?",
          "op": [
            "It will stay here forever",
            "The council will take it",
            "It will fly to the mountain"
          ],
          "a": 0,
          "por": "If nobody takes the small box to the mountain, it will stay here forever."
        },
        {
          "q": "What will Mia do if it rains?",
          "op": [
            "She will wait in the old mill",
            "She will cross the bridge",
            "She will go home"
          ],
          "a": 0,
          "por": "If it rains, you will wait in the old mill."
        },
        {
          "q": "When will Mia arrive if she leaves tonight?",
          "op": [
            "On Friday",
            "On Monday",
            "Tonight"
          ],
          "a": 0,
          "por": "If I leave tonight, I will arrive on Friday."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a long road. Hear it, then say it.",
      "frases": [
        {
          "t": "If nobody goes, the box will stay here.",
          "img": "https://wolf-labs.pages.dev/p/5296ae9c65f3/unless-somebody-goes/img/live-condado.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Unless it rains, the bridge will be open.",
          "img": "https://wolf-labs.pages.dev/p/5296ae9c65f3/unless-somebody-goes/img/live-fogo.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "When the sun comes out, you will cross.",
          "img": "https://wolf-labs.pages.dev/p/5296ae9c65f3/unless-somebody-goes/img/live-mesa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "If, unless and when. Four quick ones.",
      "regra": "<b>if</b> + present, <b>will</b> + verb · <b>unless</b> = if not · <b>when / as soon as</b> + present · no <b>will</b> after if.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If it rains, we will wait inside.",
          "aceita": [],
          "d": "Hint: <b>if</b> + present, then <b>will</b> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If it will rain, we will stay home.",
          "r": "If it rains, we will stay home.",
          "aceita": [],
          "d": "Hint: after <b>if</b>, use the present. No <i>will</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Unless you don't hurry, you will be late.",
          "r": "Unless you hurry, you will be late.",
          "aceita": [
            "If you don't hurry, you will be late."
          ],
          "d": "Hint: <b>unless</b> already means if not. Use a positive verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "When I arrive, I call you.",
          "r": "When I arrive, I will call you.",
          "aceita": [
            "When I arrive, I'll call you."
          ],
          "d": "Hint: the result about the future needs <b>will</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/5296ae9c65f3/unless-somebody-goes/img/live-capa.webp",
      "leg": "A house by a waterfall",
      "pede": "Look at the picture: a house by a waterfall, far away. Write 2 or 3 sentences about a trip you will take. Use <b>if</b>, <b>unless</b> or <b>when</b>.",
      "ph": "If the weather is good, I will …",
      "ex": "If the weather is good, I will visit the waterfall. Unless it rains, we will walk to the village. When we arrive, I will call my mother."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What will you do this weekend if the weather is bad?",
          "ph": "If the weather is bad, I will …",
          "ex": "If the weather is bad, I will stay home and read."
        },
        {
          "q": "What will you do tomorrow unless something changes?",
          "ph": "Unless …, I will …",
          "ex": "Unless my boss calls, I will study after work."
        }
      ]
    }
  }
};
