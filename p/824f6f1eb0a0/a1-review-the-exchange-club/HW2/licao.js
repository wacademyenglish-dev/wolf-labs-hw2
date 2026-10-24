/* THE EXCHANGE CLUB · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Unit 7: love/like/hate + -ing, like it/them, her/him, with me. A1: dicas em português só nas notas (d). Só live-capa e live-conversa (escuras). */
window.HW2 = {
  "id": "a1-review-the-exchange-club",
  "titulo": "The Exchange Club",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/824f6f1eb0a0/a1-review-the-exchange-club/img/live-capa.webp",
  "alvo": "Unit 7 review: love / like / hate + -ing; he / she likes + -ing; like it / like them (do not drop it); him / her / them after a verb; me / him / her after with and for",
  "abrir": "What do you love doing on the weekend?",
  "fecho": "<b>love / like / hate + -ing</b>: <i>I love cooking.</i> After a verb or with: <b>him, her, them, me</b>: <i>I call her. Come with me.</i> Do not drop it: <i>I like it. I like them.</i>",
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
      "sub": "Mia and Leo at a conversation club. A new scene, about 35 seconds.",
      "img": "https://wolf-labs.pages.dev/p/824f6f1eb0a0/a1-review-the-exchange-club/img/live-conversa.webp",
      "leg": "Two coffees on a night table",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, who is the new member at table two?"
        },
        {
          "quem": "mia",
          "t": "That is Ana. She loves cooking, and she hates running."
        },
        {
          "quem": "leo",
          "t": "I hate running too! Does she like rock music?"
        },
        {
          "quem": "mia",
          "t": "Yes, she loves it. And she likes vegetables. She likes them a lot."
        },
        {
          "quem": "leo",
          "t": "Who does she talk to every day?"
        },
        {
          "quem": "mia",
          "t": "Her sister. She calls her every night."
        },
        {
          "quem": "leo",
          "t": "I love cooking too. I want to cook with her."
        },
        {
          "quem": "mia",
          "t": "Ask her! Come with me. Let's say hello."
        }
      ],
      "perguntas": [
        {
          "q": "What does Ana love doing?",
          "op": [
            "Cooking",
            "Running",
            "Reading"
          ],
          "a": 0,
          "por": "She loves cooking, and she hates running."
        },
        {
          "q": "Who does Ana call every night?",
          "op": [
            "Her sister",
            "Leo",
            "Mia"
          ],
          "a": 0,
          "por": "Her sister. She calls her every night."
        },
        {
          "q": "Does Ana like rock music?",
          "op": [
            "Yes, she loves it",
            "No, she hates it",
            "She does not know it"
          ],
          "a": 0,
          "por": "Yes, she loves it."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the club. Hear it, then say it.",
      "frases": [
        {
          "t": "I love cooking, and I hate running.",
          "img": "https://wolf-labs.pages.dev/p/824f6f1eb0a0/a1-review-the-exchange-club/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She likes vegetables. She likes them a lot.",
          "img": "https://wolf-labs.pages.dev/p/824f6f1eb0a0/a1-review-the-exchange-club/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I call her every night. Come with me.",
          "img": "https://wolf-labs.pages.dev/p/824f6f1eb0a0/a1-review-the-exchange-club/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "love + -ing, it, her, me. Four quick ones.",
      "regra": "<b>love / like / hate + -ing</b> · <b>like it</b>, <b>like them</b> · <b>call her</b> · <b>with me</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Do you want to walk with me?",
          "aceita": [],
          "d": "Dica: depois de <b>with</b>, use <b>me</b>, nunca 'with I'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She loves cook.",
          "r": "She loves cooking.",
          "aceita": [],
          "d": "Dica: <b>love</b> + verbo com <b>-ing</b>: cooking."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Do you like pizza? Yes, I like.",
          "r": "Yes, I like it.",
          "aceita": [
            "I like it.",
            "Yes I like it."
          ],
          "d": "Dica: não deixe o <b>it</b> cair: I like <b>it</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I call she every night.",
          "r": "I call her every night.",
          "aceita": [],
          "d": "Dica: depois do verbo, use <b>her</b>, nunca 'call she'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/824f6f1eb0a0/a1-review-the-exchange-club/img/live-conversa.webp",
      "leg": "Two coffees on a night table",
      "pede": "Look at the picture: two coffees on a table at night. Write 2 or 3 sentences about a friend. What does your friend love doing? Use <b>love / like / hate + -ing</b>, <b>it</b>, <b>her</b> or <b>him</b>.",
      "ph": "My friend loves … and I love it too.",
      "ex": "My friend loves dancing, and I love it too. I call her every day. I like going out with her."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you love doing on the weekend?",
          "ph": "I love …ing.",
          "ex": "I love sleeping late and cooking with my family."
        },
        {
          "q": "Who do you call when you have good news?",
          "ph": "I call my … I call him / her.",
          "ex": "I call my sister. I call her at night."
        }
      ]
    }
  }
};
