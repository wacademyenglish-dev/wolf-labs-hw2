/* ASSUMING THAT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: condições precisas (assuming, given that, providing, in case, in the event of, otherwise). C1: nenhum português. Só live-capa (a live-conversa é quase preta, fica de fora). */
window.HW2 = {
  "id": "assuming-that",
  "titulo": "Assuming That",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/13859ebd1d29/assuming-that/img/live-capa.webp",
  "alvo": "precise conditions: assuming (that) = we expect it, not certain · given that = a known fact (because) · supposing = let's imagine · providing / as long as = only on this condition · in the event of + noun · in case = a precaution, not 'if' · otherwise; present tense after assuming / providing, never will; never 'in the event of it rains'",
  "abrir": "What do you have to assume when you plan a trip?",
  "fecho": "<b>Assuming that</b> = we expect it. <b>Given that</b> = a fact we already know (it means <i>because</i>). <b>Supposing</b> = let's imagine it. <b>Providing / as long as</b> = only on this condition: <i>providing we pay</i>, never <i>providing we will pay</i>. <b>In the event of</b> + noun. <b>In case</b> is a precaution, not <i>if</i>: take the umbrella now. <b>Otherwise</b> = if not.",
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
      "sub": "Mia and Leo plan a weekend in the mountains. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/13859ebd1d29/assuming-that/img/live-capa.webp",
      "leg": "A notebook, a pen and a coffee: the plan",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, about the weekend in the mountains. Assuming that everyone can get Friday off, we leave at noon."
        },
        {
          "quem": "leo",
          "t": "Given that two of them work in shifts, I wouldn't count on it. Supposing they can't come, would we still go?"
        },
        {
          "quem": "mia",
          "t": "Providing at least six of us are going, yes. Otherwise the cabin is too expensive."
        },
        {
          "quem": "leo",
          "t": "Fair. I'll book it, as long as we can cancel for free."
        },
        {
          "quem": "mia",
          "t": "Good. And take warm clothes, in case it gets cold at night. It's the mountains, after all."
        },
        {
          "quem": "leo",
          "t": "Oh, I'll pack them whatever the forecast says. That's a precaution, not a condition."
        },
        {
          "quem": "mia",
          "t": "Exactly. Different thing. And in the event of snow, the road might close, so the owner wants us to call her first."
        },
        {
          "quem": "leo",
          "t": "Then we call her on Thursday. Otherwise we could end up stuck at the bottom of the hill."
        },
        {
          "quem": "mia",
          "t": "Assuming that the car starts. Given that it's twelve years old, I'm not totally relaxed."
        },
        {
          "quem": "leo",
          "t": "Then we take the train. Done."
        }
      ],
      "perguntas": [
        {
          "q": "Why does Leo doubt that everyone can come?",
          "op": [
            "Two of them work in shifts",
            "The cabin is already full",
            "The road is closed"
          ],
          "a": 0,
          "por": "Given that two of them work in shifts, I wouldn't count on it."
        },
        {
          "q": "Under what condition will they still go?",
          "op": [
            "If at least six people are going",
            "Only if it snows",
            "Whatever the number of people"
          ],
          "a": 0,
          "por": "Providing at least six of us are going, yes."
        },
        {
          "q": "Why does Leo call the warm clothes a precaution, not a condition?",
          "op": [
            "He will pack them whatever the forecast says",
            "He will pack them only if it snows",
            "He doesn't think anyone needs them"
          ],
          "a": 0,
          "por": "I'll pack them whatever the forecast says. That's a precaution, not a condition."
        }
      ]
    },
    "out": {
      "sub": "Three plans with conditions. Hear it, then say it.",
      "frases": [
        {
          "t": "Assuming that everyone gets Friday off, we leave at noon.",
          "img": "https://wolf-labs.pages.dev/p/13859ebd1d29/assuming-that/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I'll book the cabin, providing we can cancel for free.",
          "img": "https://wolf-labs.pages.dev/p/13859ebd1d29/assuming-that/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "In the event of snow, call the owner. Otherwise, we could get stuck.",
          "img": "https://wolf-labs.pages.dev/p/13859ebd1d29/assuming-that/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Which condition word? Four quick ones.",
      "regra": "<b>assuming / providing / as long as</b> + present · <b>given that</b> = fact · <b>in case</b> = precaution · <b>in the event of</b> + noun.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Assuming that the permit arrives, we start in June.",
          "aceita": [],
          "d": "Hint: <b>assuming that</b> + present tense, then the plan."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: you help only if asked.",
          "mostra": "I'll help you in case you ask.",
          "r": "I'll help you if you ask.",
          "aceita": [
            "I will help you if you ask.",
            "I'll help you as long as you ask."
          ],
          "d": "Hint: <b>in case</b> is a precaution you take now. When something happens only on a condition, use <b>if</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'll go, providing you will pay.",
          "r": "I'll go, providing you pay.",
          "aceita": [
            "I will go, providing you pay.",
            "I'll go, as long as you pay.",
            "I'll go, providing that you pay."
          ],
          "d": "Hint: use the present after <b>providing</b>, never <i>will</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "In the event of it rains, call me.",
          "r": "In the event of rain, call me.",
          "aceita": [
            "In the event it rains, call me.",
            "In the event that it rains, call me."
          ],
          "d": "Hint: <b>in the event of</b> + noun, or <b>in the event that</b> + a clause."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/13859ebd1d29/assuming-that/img/live-capa.webp",
      "leg": "A notebook, a pen and a coffee on a desk",
      "pede": "Look at the picture: a notebook, a pen and a cup of coffee on a desk. Plan a trip, a party or a project. Write 2 or 3 sentences with <b>assuming that</b>, <b>providing</b>, <b>given that</b>, <b>in case</b> or <b>otherwise</b>.",
      "ph": "Assuming that …, we will …",
      "ex": "Assuming that everyone is free, we'll meet on Saturday. Given that it's a holiday, we should book early; otherwise, there won't be any tables. I'll bring a jacket in case it gets cold."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you planning for the next few weeks? What could change the plan?",
          "ph": "Assuming that …, I will …",
          "ex": "Assuming that I get the day off, I'll visit my grandmother. If not, I'll go the following weekend."
        },
        {
          "q": "What is one condition you would set before agreeing to a trip with friends?",
          "ph": "I'll go, providing …",
          "ex": "I'll go, providing we book somewhere that allows free cancellation."
        }
      ]
    }
  }
};
