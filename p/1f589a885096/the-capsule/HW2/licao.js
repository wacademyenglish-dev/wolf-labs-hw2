/* THE CAPSULE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: remember / forget / stop + -ing (the action happened before. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-capsule",
  "titulo": "The Capsule",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/1f589a885096/the-capsule/img/live-terra.webp",
  "alvo": "remember / forget / stop + -ing (the action happened before: I remember taking the photo; she stopped eating sweets) x + to (the action comes after: don't forget to close the box; we stopped to take a photo); never stopped to for quit, never forgot buying for didn't buy",
  "abrir": "What do you remember doing when you were ten?",
  "fecho": "<b>-ing</b> points back, the action happened first: <i>I remember taking it. She stopped eating sweets.</i> <b>to</b> points forward, the action comes after: <i>Don't forget to close it. We stopped to take a photo.</i>",
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
      "sub": "Mia and Leo bury a box for the year 2036. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/1f589a885096/the-capsule/img/live-buraco.webp",
      "leg": "A hole in the ground and a shovel",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, we are going to bury a box for 2036. Did you bring something?"
        },
        {
          "quem": "mia",
          "t": "I remembered to bring a photo. But I forgot to bring a pen."
        },
        {
          "quem": "leo",
          "t": "Don't worry. I have two. Do you remember taking this photo?"
        },
        {
          "quem": "mia",
          "t": "Yes! I remember taking it on the last day of school. We were laughing."
        },
        {
          "quem": "leo",
          "t": "We stopped to take it, right? We were in the middle of a game."
        },
        {
          "quem": "mia",
          "t": "Yes. We stopped to take a photo, and then we kept playing."
        },
        {
          "quem": "leo",
          "t": "OK. Put it in the box. Don't forget to close the lid."
        },
        {
          "quem": "mia",
          "t": "Closed! And I stopped worrying about the pen."
        }
      ],
      "perguntas": [
        {
          "q": "What did Mia forget to bring?",
          "op": [
            "A pen",
            "A photo",
            "A camera"
          ],
          "a": 0,
          "por": "I forgot to bring a pen."
        },
        {
          "q": "What does Mia remember?",
          "op": [
            "Taking the photo",
            "Bringing a pen",
            "Closing the lid"
          ],
          "a": 0,
          "por": "I remember taking it on the last day of school."
        },
        {
          "q": "Why did they stop?",
          "op": [
            "To take a photo",
            "Because they were tired",
            "Because it rained"
          ],
          "a": 0,
          "por": "We stopped to take a photo, and then we kept playing."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with -ing or to. Hear it, then say it.",
      "frases": [
        {
          "t": "I remember taking this photo.",
          "img": "https://wolf-labs.pages.dev/p/1f589a885096/the-capsule/img/live-terra.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Don't forget to close the box.",
          "img": "https://wolf-labs.pages.dev/p/1f589a885096/the-capsule/img/live-buraco.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We stopped to take a photo.",
          "img": "https://wolf-labs.pages.dev/p/1f589a885096/the-capsule/img/live-chao.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "-ing or to? Four quick ones.",
      "regra": "<b>-ing</b> = it happened before · <b>to</b> = it comes after · <b>stop -ing</b> = quit · <b>stop to</b> = stop in order to.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Don't forget to close the box.",
          "aceita": [],
          "d": "Dica: lembrete para o futuro: <b>forget to</b> + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: you did not bring it.",
          "mostra": "I forgot bringing a pen.",
          "r": "I forgot to bring a pen.",
          "aceita": [],
          "d": "Dica: esqueci de fazer (não fiz): <b>forget to</b> + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: she quit eating sweets.",
          "mostra": "She stopped to eat sweets.",
          "r": "She stopped eating sweets.",
          "aceita": [],
          "d": "Dica: parou de fazer = <b>stop + -ing</b>. <b>Stop to</b> = parou PARA fazer."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: you did it, and now you remember.",
          "mostra": "I remember to take this photo.",
          "r": "I remember taking this photo.",
          "aceita": [],
          "d": "Dica: lembro de algo que já fiz: <b>remember + -ing</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/1f589a885096/the-capsule/img/live-terra.webp",
      "leg": "Earth and a shovel",
      "pede": "Look at the picture: earth and a shovel. Write 2 or 3 sentences for your own box: one thing you <b>remember</b> doing, one thing you must <b>remember to</b> do, one thing you <b>stopped</b> doing.",
      "ph": "I remember …",
      "ex": "I remember playing football in the street. Remember to call your mom. I stopped eating fast food."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you remember doing when you were ten?",
          "ph": "I remember …",
          "ex": "I remember playing football in the street."
        },
        {
          "q": "What did you stop doing in the last years?",
          "ph": "I stopped …",
          "ex": "I stopped eating fast food."
        }
      ]
    }
  }
};
