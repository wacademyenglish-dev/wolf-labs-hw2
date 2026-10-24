/* CALL ME WHEN YOU'RE SOBER · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: time clauses (when / until / as soon as). Linha de música: NENHUM verso aqui; cena neutra, sem bebida. B1: nenhum português. */
window.HW2 = {
  "id": "call-me-when-youre-sober",
  "titulo": "Call Me When You're Sober",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/fa2fad95c45c/call-me-when-youre-sober/img/live-celular.webp",
  "alvo": "time clauses with when / until / as soon as / before / after + present simple for the future (never will after them): Call me when you arrive; I'll wait until you come; after I finish",
  "abrir": "What will you do as soon as this class ends?",
  "fecho": "After <b>when, until, as soon as, before, after</b>, we use the <b>present simple</b> for the future: <i>I'll call you when I arrive.</i> Never <i>when I will arrive</i>. The <i>will</i> goes in the other part: <i>As soon as I finish, I'll text you.</i>",
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
      "sub": "Mia and Leo plan dinner on the phone. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/fa2fad95c45c/call-me-when-youre-sober/img/live-celular.webp",
      "leg": "A phone on the bed",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, can I call you when I get home? I'm still at the office."
        },
        {
          "quem": "mia",
          "t": "Sure. Call me as soon as you leave. I'll start cooking when you call."
        },
        {
          "quem": "leo",
          "t": "I'll wait until the meeting ends, and then I'll go straight home."
        },
        {
          "quem": "mia",
          "t": "Good. Before you come, please buy some bread."
        },
        {
          "quem": "leo",
          "t": "OK. After I buy the bread, I'll text you."
        },
        {
          "quem": "mia",
          "t": "Perfect. I won't put the pasta in the water until you arrive."
        },
        {
          "quem": "leo",
          "t": "What will you do if I'm late?"
        },
        {
          "quem": "mia",
          "t": "When you're late, I always eat first. That's the rule."
        },
        {
          "quem": "leo",
          "t": "Ha! Then I'll be there as soon as I can."
        },
        {
          "quem": "mia",
          "t": "Good. Call me when you're free, and I'll tell you about my day."
        }
      ],
      "perguntas": [
        {
          "q": "When will Mia start cooking?",
          "op": [
            "When Leo calls",
            "Before the meeting",
            "After dinner"
          ],
          "a": 0,
          "por": "I'll start cooking when you call."
        },
        {
          "q": "What will Leo do after he buys the bread?",
          "op": [
            "Text Mia",
            "Go to the office",
            "Eat first"
          ],
          "a": 0,
          "por": "After I buy the bread, I'll text you."
        },
        {
          "q": "When won't Mia put the pasta in the water?",
          "op": [
            "Until Leo arrives",
            "As soon as he leaves",
            "Before he calls"
          ],
          "a": 0,
          "por": "I won't put the pasta in the water until you arrive."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with time clauses. Hear it, then say it.",
      "frases": [
        {
          "t": "Call me as soon as you leave the office.",
          "img": "https://wolf-labs.pages.dev/p/fa2fad95c45c/call-me-when-youre-sober/img/live-celular.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I'll wait by the window until you arrive.",
          "img": "https://wolf-labs.pages.dev/p/fa2fad95c45c/call-me-when-youre-sober/img/live-janela.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "When I get home, I'll sit on the sofa and relax.",
          "img": "https://wolf-labs.pages.dev/p/fa2fad95c45c/call-me-when-youre-sober/img/live-sofa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Present simple or will? Four quick ones.",
      "regra": "<b>when · until · as soon as · before · after</b> + <b>present simple</b> for the future · <i>will</i> only in the other part.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I will call you as soon as I get home.",
          "aceita": [],
          "d": "Hint: after <b>as soon as</b>, the present simple: <i>I get</i>, not <i>I will get</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I will call you when I will arrive.",
          "r": "I will call you when I arrive.",
          "aceita": [
            "I'll call you when I arrive."
          ],
          "d": "Hint: after <b>when</b>, the present simple, not <i>will</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Wait here until I will come back.",
          "r": "Wait here until I come back.",
          "aceita": [
            "Wait here until I return."
          ],
          "d": "Hint: after <b>until</b>, the present simple."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "After to finish the meeting, I'll call you.",
          "r": "After I finish the meeting, I'll call you.",
          "aceita": [
            "After finishing the meeting, I'll call you."
          ],
          "d": "Hint: after <b>after</b> use a subject and a verb (<i>I finish</i>), or <i>-ing</i>. Never <i>to</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/fa2fad95c45c/call-me-when-youre-sober/img/live-sofa.webp",
      "leg": "A sofa and a warm lamp",
      "pede": "Look at the picture: a sofa and a warm lamp. Write 2 or 3 sentences about your evening. Use <b>when</b>, <b>until</b>, <b>as soon as</b>, <b>before</b> or <b>after</b>.",
      "ph": "When I get home, I will …",
      "ex": "When I get home, I will take a shower. I will watch TV until I feel sleepy. As soon as the show ends, I'll go to bed."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What will you do as soon as this class ends?",
          "ph": "As soon as I finish, I will …",
          "ex": "As soon as I finish, I will make lunch."
        },
        {
          "q": "What do you always do before you go to bed?",
          "ph": "Before I go to bed, I …",
          "ex": "Before I go to bed, I always brush my teeth and read a little."
        }
      ]
    }
  }
};
