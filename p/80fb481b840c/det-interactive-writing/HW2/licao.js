/* INTERACTIVE WRITING · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: paragrafo com conectivos variados. B1: nenhum portugues. So imagens live-* (escuras). */
window.HW2 = {
  "id": "det-interactive-writing",
  "titulo": "Interactive Writing",
  "nivel": "B1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "a clear paragraph with varied connectors: topic sentence, Before / Now, Moreover, However, For instance, Overall; On the other hand (never In the other hand), Besides that (never Besides of that)",
  "abrir": "Which app or device helps you most in your week?",
  "fecho": "A paragraph has three parts: <b>topic sentence</b> -> <b>support</b> (<i>Moreover, For instance, However</i>) -> <b>wrap-up</b> (<i>Overall,</i>). <b>On the other hand</b>, never <i>in the other hand</i>. <b>Besides that</b>, never <i>besides of that</i>. One connector at a time: never <i>However, but</i>.",
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
      "sub": "Mia and Leo plan a paragraph. A new scene, about one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "A dark cabin with a window",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the writing task gives me five minutes. I never know how to start."
        },
        {
          "quem": "mia",
          "t": "Start with a topic sentence. For example: a good example of useful technology is my calendar app."
        },
        {
          "quem": "leo",
          "t": "Then I just keep writing?"
        },
        {
          "quem": "mia",
          "t": "No, you build it. Say how things were before, and how they are now."
        },
        {
          "quem": "leo",
          "t": "Before, I forgot meetings all the time. Now, my phone reminds me ten minutes earlier."
        },
        {
          "quem": "mia",
          "t": "Good. Add one more point with moreover, and then an example with for instance."
        },
        {
          "quem": "leo",
          "t": "Moreover, I can share my calendar with my team. For instance, last week we planned a trip in one message."
        },
        {
          "quem": "mia",
          "t": "Nice. Now you need a different connector for the problem: however."
        },
        {
          "quem": "leo",
          "t": "However, I sometimes depend on it too much."
        },
        {
          "quem": "mia",
          "t": "Perfect. Finish with overall, and save thirty seconds to check your text."
        }
      ],
      "perguntas": [
        {
          "q": "What should Leo write first?",
          "op": [
            "A topic sentence",
            "An example",
            "The last sentence"
          ],
          "a": 0,
          "por": "Start with a topic sentence."
        },
        {
          "q": "What does the phone do now, in Leo's example?",
          "op": [
            "It reminds him ten minutes earlier",
            "It forgets his meetings",
            "It writes his emails"
          ],
          "a": 0,
          "por": "Now, my phone reminds me ten minutes earlier."
        },
        {
          "q": "Which word should Leo use to start the wrap-up?",
          "op": [
            "Overall",
            "However",
            "Moreover"
          ],
          "a": 0,
          "por": "Finish with overall, and save thirty seconds to check your text."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with connectors. Hear it, then say it.",
      "frases": [
        {
          "t": "Before, I took a bus to the bank, but now I use an app.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Moreover, my phone reminds me of every appointment.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Overall, small tools like these save me a lot of time.",
          "img": "../img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Connectors that sound natural. Four quick ones.",
      "regra": "<b>On the other hand</b> · <b>Besides that</b> · <b>However,</b> + new sentence · never <i>However, but</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "However, it can also be distracting.",
          "aceita": [],
          "d": "Hint: <b>However</b> opens the new idea. No <i>but</i> after it."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "In the other hand, it saves me time.",
          "r": "On the other hand, it saves me time.",
          "aceita": [
            "On the other hand it saves me time."
          ],
          "d": "Hint: the fixed phrase is <b>on the other hand</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Besides of that, it is free.",
          "r": "Besides that, it is free.",
          "aceita": [
            "Besides, it is free."
          ],
          "d": "Hint: <b>besides that</b>, without <i>of</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "However, but it is a little slow.",
          "r": "However, it is a little slow.",
          "aceita": [
            "But it is a little slow."
          ],
          "d": "Hint: <b>however</b> already means but. Use only one."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-capa.webp",
      "leg": "A typewriter with a blank page",
      "pede": "Look at the picture: a typewriter with a blank page. Write a short paragraph (3 or 4 sentences) about an app or device that helps you. Use a topic sentence, <b>Moreover</b> or <b>For instance</b>, and <b>Overall</b>.",
      "ph": "A good example of ... is my ...",
      "ex": "A good example of useful technology is my maps app. Before, I got lost all the time. Moreover, it shows the bus times. Overall, it saves me a lot of time."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Which app helps you most? Say why, and add one example.",
          "ph": "My ... app helps me, because ... For instance, ...",
          "ex": "My calendar app helps me, because I forget things easily. For instance, it reminded me of a meeting yesterday."
        },
        {
          "q": "What is one disadvantage of depending on it? Use However or On the other hand.",
          "ph": "However, ...",
          "ex": "However, I sometimes feel lost without my phone. As a result, I carry a charger everywhere."
        }
      ]
    }
  }
};
