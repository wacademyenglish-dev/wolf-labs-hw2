/* STRESSED OUT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: used to x presente. Linha de música: NENHUM verso aqui; dialogo original. B1: nenhum portugues na licao. */
window.HW2 = {
  "id": "stressed-out",
  "titulo": "Stressed Out",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/accf479cc787/stressed-out/img/hw-capa.webp",
  "alvo": "used to (a habit that stopped) vs the present simple (what you do now); didn't use to / did you use to (no d after did); still and not … anymore",
  "abrir": "What did you use to do after school?",
  "fecho": "<b>Used to</b> + verb: a habit that stopped. <i>I used to ride my bike. Now I take the subway.</i> With <b>did / didn't</b> the d disappears: <i>Did you use to…? I didn't use to…</i> <b>Still</b> = it continues. <b>Not … anymore</b> = it stopped.",
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
      "sub": "Mia and Leo look at an old photo. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/accf479cc787/stressed-out/img/live-rua.webp",
      "leg": "A street, a long time ago",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at this old photo. That is my street when I was ten."
        },
        {
          "quem": "mia",
          "t": "Cute! What did you use to do there?"
        },
        {
          "quem": "leo",
          "t": "I used to ride my bike until dark. I didn't use to worry about anything."
        },
        {
          "quem": "mia",
          "t": "And now? Do you still ride it?"
        },
        {
          "quem": "leo",
          "t": "No, I don't ride it anymore. Now I take the subway to work."
        },
        {
          "quem": "mia",
          "t": "Did you use to watch cartoons on Saturdays?"
        },
        {
          "quem": "leo",
          "t": "Yes, I did. I still watch them sometimes, but only when I'm tired."
        },
        {
          "quem": "mia",
          "t": "I used to hate vegetables, but now I eat them every day."
        },
        {
          "quem": "leo",
          "t": "Really? You didn't use to eat anything green!"
        },
        {
          "quem": "mia",
          "t": "True. Now I even cook them myself. Time changes things."
        }
      ],
      "perguntas": [
        {
          "q": "What did Leo use to do as a kid?",
          "op": [
            "Ride his bike until dark",
            "Take the subway to work",
            "Cook vegetables"
          ],
          "a": 0,
          "por": "I used to ride my bike until dark."
        },
        {
          "q": "Does Leo still ride his bike?",
          "op": [
            "No, not anymore",
            "Yes, every day",
            "Only on Saturdays"
          ],
          "a": 0,
          "por": "No, I don't ride it anymore."
        },
        {
          "q": "What did Mia use to hate?",
          "op": [
            "Vegetables",
            "Cartoons",
            "Bikes"
          ],
          "a": 0,
          "por": "I used to hate vegetables."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the lesson. Hear it, then say it.",
      "frases": [
        {
          "t": "I used to ride my bike until dark.",
          "img": "https://wolf-labs.pages.dev/p/accf479cc787/stressed-out/img/live-rua.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I didn't use to worry about money.",
          "img": "https://wolf-labs.pages.dev/p/accf479cc787/stressed-out/img/live-agora.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Did you use to watch cartoons on Saturdays?",
          "img": "https://wolf-labs.pages.dev/p/accf479cc787/stressed-out/img/live-quarto.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Then or now? Four quick ones.",
      "regra": "<b>used to</b> + verb = then · present simple = now · <b>didn't use to</b> · <b>Did you use to</b>…? · <b>still</b> = it continues · <b>not … anymore</b> = it stopped",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "My brother used to read comics until midnight.",
          "aceita": [],
          "d": "Hint: <b>used to</b> + the base verb: read."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I didn't used to like coffee.",
          "r": "I didn't use to like coffee.",
          "aceita": [],
          "d": "Hint: after <b>didn't</b> the d disappears: <b>use to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Did you used to have a dog?",
          "r": "Did you use to have a dog?",
          "aceita": [],
          "d": "Hint: after <b>did</b>, it is <b>use to</b>, without the d."
        },
        {
          "tipo": "escreve",
          "t": "Say it with anymore.",
          "mostra": "I played video games every day. Now I don't.",
          "r": "I don't play video games anymore.",
          "aceita": [
            "I do not play video games anymore.",
            "Now I don't play video games anymore.",
            "I don't play video games any more."
          ],
          "d": "Hint: <b>not … anymore</b> = it stopped. The verb stays in the present."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/accf479cc787/stressed-out/img/live-quarto.webp",
      "leg": "A bedroom, late",
      "pede": "Look at the picture: a bedroom at night. Write 2 or 3 sentences about how your life changed: something you <b>used to</b> do, something you <b>didn't use to</b> do, something you <b>still</b> do.",
      "ph": "When I was ten, I used to … Now I …",
      "ex": "When I was ten, I used to collect stickers. I didn't use to cook, but now I cook every day. I still call my grandmother on Sundays."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you use to do after school as a kid? Do you still do it?",
          "ph": "I used to … I still … / I don't … anymore.",
          "ex": "I used to play football in the street. I don't play it anymore, but I still watch the games."
        },
        {
          "q": "What didn't you use to like that you like now?",
          "ph": "I didn't use to like … Now I …",
          "ex": "I didn't use to like spicy food. Now I put pepper on everything."
        }
      ]
    }
  }
};
