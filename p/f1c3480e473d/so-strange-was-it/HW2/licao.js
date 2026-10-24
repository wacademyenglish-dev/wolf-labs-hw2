/* SO STRANGE WAS IT · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: so / such + inversion for result and intensity. C1: nenhum português. Só imagens live-* (escuras). */
window.HW2 = {
  "id": "so-strange-was-it",
  "titulo": "So Strange Was It",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f1c3480e473d/so-strange-was-it/img/live-capa.webp",
  "alvo": "so / such + inversion for result and intensity: So strange was the light that ...; So quickly did it happen that ...; Such was the noise that ...; compared with the normal forms It was so strange that / It was such a strange light that",
  "abrir": "Have you ever seen or heard something you could not explain?",
  "fecho": "Put the feeling first and the result after <b>that</b>: <b>So strange was the light that nobody slept.</b> <b>Such was the noise that the windows shook.</b> <b>So quickly did it happen that nobody ran.</b> After <b>so + adverb</b>, the auxiliary comes before the subject. Never <i>So strange the light was</i>.",
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
      "sub": "Mia and Leo, the morning after a strange night. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/f1c3480e473d/so-strange-was-it/img/live-conversa.webp",
      "leg": "A foggy road with two street lamps",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Did you see the news? There was a strange light over the valley last night."
        },
        {
          "quem": "leo",
          "t": "I did. So bright was it that the whole town woke up, apparently."
        },
        {
          "quem": "mia",
          "t": "My neighbour says such was the noise that her dog hid under the bed."
        },
        {
          "quem": "leo",
          "t": "Noise? I thought it was completely silent."
        },
        {
          "quem": "mia",
          "t": "Not according to her. And so quickly did it vanish that nobody got a photo."
        },
        {
          "quem": "leo",
          "t": "How convenient. Such is life in a small town: plenty of stories, no evidence."
        },
        {
          "quem": "mia",
          "t": "Come on, don't you want it to be real?"
        },
        {
          "quem": "leo",
          "t": "I'd love it to be. I stayed up until four with a flask of coffee."
        },
        {
          "quem": "mia",
          "t": "And?"
        },
        {
          "quem": "leo",
          "t": "Nothing. So disappointed was I that I slept through my alarm."
        }
      ],
      "perguntas": [
        {
          "q": "Why did the whole town wake up?",
          "op": [
            "The light was extremely bright",
            "There was a loud siren",
            "The dogs were barking"
          ],
          "a": 0,
          "por": "So bright was it that the whole town woke up."
        },
        {
          "q": "Why did nobody take a photo?",
          "op": [
            "The light vanished so quickly",
            "Phones were not working",
            "It was too foggy"
          ],
          "a": 0,
          "por": "So quickly did it vanish that nobody got a photo."
        },
        {
          "q": "What did Leo do that night?",
          "op": [
            "He stayed up until four",
            "He went to the valley",
            "He slept through it all"
          ],
          "a": 0,
          "por": "I stayed up until four with a flask of coffee."
        }
      ]
    },
    "out": {
      "sub": "Three dramatic sentences with so and such. Hear it, then say it.",
      "frases": [
        {
          "t": "So thick was the fog that we could barely see the road.",
          "img": "https://wolf-labs.pages.dev/p/f1c3480e473d/so-strange-was-it/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Such was the silence that I could hear my own heartbeat.",
          "img": "https://wolf-labs.pages.dev/p/f1c3480e473d/so-strange-was-it/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "So suddenly did the light appear that everybody froze.",
          "img": "https://wolf-labs.pages.dev/p/f1c3480e473d/so-strange-was-it/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "So strange was it that ... Four quick ones.",
      "regra": "<b>So + adjective + was + subject + that ...</b> · <b>Such was the + noun + that ...</b> · <b>So quickly did it ... that ...</b> · never <i>So strange the light was</i>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Such was her fear that she could not speak.",
          "aceita": [],
          "d": "Hint: <b>Such was</b> + noun, then <b>that</b> + result."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "So strange the light was that nobody slept.",
          "r": "So strange was the light that nobody slept.",
          "aceita": [],
          "d": "Hint: after <b>so strange</b>, the verb comes before the subject."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Such was the noise that the windows shaked.",
          "r": "Such was the noise that the windows shook.",
          "aceita": [],
          "d": "Hint: <b>shake</b> is irregular: shake, shook, shaken."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "So quickly it happened that nobody ran.",
          "r": "So quickly did it happen that nobody ran.",
          "aceita": [],
          "d": "Hint: <b>so quickly</b> + <b>did</b> + subject + base verb."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f1c3480e473d/so-strange-was-it/img/live-capa.webp",
      "leg": "A strange blue glow in a dark forest",
      "pede": "Look at the picture: a strange blue glow between the trees at night. Write 2 or 3 sentences about what happens, using <b>So ... was ... that</b>, <b>Such was the ... that</b> or <b>So quickly did it ... that</b>.",
      "ph": "So strange was the glow that …",
      "ex": "So strange was the glow that we stopped walking. Such was the silence that nobody dared to speak, and so quickly did it fade that we doubted what we had seen."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Describe the loudest, brightest or strangest thing you have ever experienced.",
          "ph": "So … was it that … / Such was the … that …",
          "ex": "Such was the noise at the concert that I could not hear my own voice."
        },
        {
          "q": "Tell me about something that happened very quickly.",
          "ph": "So quickly did it … that …",
          "ex": "So quickly did the summer pass that I never made it to the beach."
        }
      ]
    }
  }
};
