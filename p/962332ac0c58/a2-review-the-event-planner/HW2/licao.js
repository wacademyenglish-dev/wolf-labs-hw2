/* THE EVENT PLANNER · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Revisão A2: mistura das unidades da aula. A2: dicas em português só nas notas (d). Sem imagens. */
window.HW2 = {
  "id": "a2-review-the-event-planner",
  "titulo": "The Event Planner",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/962332ac0c58/a2-review-the-event-planner/img/live-capa.webp",
  "alvo": "Unit 6 review, plans and predictions: at / on / in with time, movement prepositions (get off, through, into), will (quick decision, promise, prediction) x going to (plan), present continuous for what is already booked; never in Monday, never I will to call",
  "abrir": "What are you doing this Saturday?",
  "fecho": "Time: <b>at</b> 7 PM · <b>on</b> Monday · <b>in</b> June. Plan: <b>going to</b>. Decision now: <b>I'll</b> (never <i>will to</i>). Already booked: <b>I'm meeting</b> my boss at ten.",
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
      "sub": "Leo plans a party and Mia is the event planner. About 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/962332ac0c58/a2-review-the-event-planner/img/live-conversa.webp",
      "leg": "At the planner's desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "When is your party, Leo?"
        },
        {
          "quem": "leo",
          "t": "It's on June twelfth, at four in the afternoon."
        },
        {
          "quem": "mia",
          "t": "How are the guests going to get there?"
        },
        {
          "quem": "leo",
          "t": "They'll get off the bus at the gate and walk through the garden."
        },
        {
          "quem": "mia",
          "t": "What are you doing that morning?"
        },
        {
          "quem": "leo",
          "t": "I'm meeting the photographer at ten."
        },
        {
          "quem": "mia",
          "t": "There is no music yet. What will you do?"
        },
        {
          "quem": "leo",
          "t": "I'll call a band right now."
        },
        {
          "quem": "mia",
          "t": "Do you think it will rain?"
        },
        {
          "quem": "leo",
          "t": "No. It's June. It's going to be sunny."
        }
      ],
      "perguntas": [
        {
          "q": "When is the party?",
          "op": [
            "In June, at ten",
            "On June twelfth, at four",
            "On Sunday, at noon"
          ],
          "a": 1,
          "por": "It's on June twelfth, at four in the afternoon."
        },
        {
          "q": "What will Leo do about the music?",
          "op": [
            "Call a band",
            "Play old records",
            "Nothing"
          ],
          "a": 0,
          "por": "I'll call a band right now."
        },
        {
          "q": "What is Leo doing at ten?",
          "op": [
            "Meeting the photographer",
            "Calling a band",
            "Taking a bus"
          ],
          "a": 0,
          "por": "I'm meeting the photographer at ten."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the big day. Hear it, then say it.",
      "frases": [
        {
          "t": "The party is on June twelfth, at four.", "img": "https://wolf-labs.pages.dev/p/962332ac0c58/a2-review-the-event-planner/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I'm meeting the photographer at ten.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "There is no music, so I'll call a band.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "at / on / in, I'll, going to, booked plans. Four quick ones.",
      "regra": "<b>at</b> + clock · <b>on</b> + day or date · <b>in</b> + month · <b>I'll</b> = decided now · <b>I'm …ing</b> = already booked.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "How are the guests going to get there?",
          "aceita": [],
          "d": "Dica: pergunta sobre plano: <b>How are the guests going to</b> + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: at, on or in?",
          "mostra": "My class is in Monday.",
          "r": "My class is on Monday.",
          "aceita": [],
          "d": "Dica: dia da semana pede <b>on</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: no to after will.",
          "mostra": "I will to call you later.",
          "r": "I'll call you later.",
          "aceita": [
            "I will call you later."
          ],
          "d": "Dica: depois de <b>will</b>, o verbo vem direto."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it is already booked.",
          "mostra": "I will meet my boss at ten tomorrow.",
          "r": "I'm meeting my boss at ten tomorrow.",
          "aceita": [
            "I am meeting my boss at ten tomorrow."
          ],
          "d": "Dica: já está marcado: <b>I'm meeting</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Write 2 or 3 sentences about next Saturday. Use <b>on / at / in</b>, <b>I'm …ing</b> for what is booked, and <b>I'll</b> or <b>going to</b>.",
      "ph": "On Saturday I'm …",
      "ex": "On Saturday I'm meeting my friends at noon. I'm going to cook, and I'll bring dessert."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you doing this Saturday?",
          "ph": "This Saturday I'm …",
          "ex": "This Saturday I'm having lunch with my friends."
        },
        {
          "q": "There is no music at the party. What will you do?",
          "ph": "I'll …",
          "ex": "I'll play songs from my phone."
        }
      ]
    }
  }
};
