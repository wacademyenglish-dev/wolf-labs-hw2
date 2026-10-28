/* WE’RE WORKING ON YOUR PROPOSAL. · SELLING SERVICES LESSON 10 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present continuous for now / this week (am / is / are + -ing) × present simple for routines; never “we working”, “I am work”, “we are send every month”. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-working-on-your-proposal",
  "titulo": "We’re Working on Your Proposal.",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/216ee29a3919/selling-services-working-on-your-proposal/img/live-capa.webp",
  "alvo": "present continuous for now / this week (am / is / are + -ing) × present simple for routines; never “we working”, “I am work”, “we are send every month”",
  "abrir": "A client asks: “How is my proposal going?” What do you say?",
  "fecho": "Now, today, this week → <b>am / is / are + -ing</b>. Every week, usually → <b>present simple</b> (we send).",
  "elenco": {
    "mia": {
      "nome": "Mia",
      "voz": "en-US-AvaNeural",
      "cor": "#86c9f0"
    },
    "leo": {
      "nome": "Leo",
      "voz": "en-US-GuyNeural",
      "cor": "#7fd1b9"
    }
  },
  "rate": "-12%",
  "rodadas": {
    "listen": {
      "sub": "A client calls Mia for news about the proposal. About one minute.",
      "img": "https://wolf-labs.pages.dev/p/216ee29a3919/selling-services-working-on-your-proposal/img/live-conversa.webp",
      "leg": "A laptop with a status e-mail at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Hi, Mia. How is the proposal going?"
        },
        {
          "quem": "mia",
          "t": "Good! We’re working on it right now."
        },
        {
          "quem": "leo",
          "t": "Are you using our numbers?"
        },
        {
          "quem": "mia",
          "t": "Yes, we are. Our team is checking them this week."
        },
        {
          "quem": "leo",
          "t": "And the TOTVS part?"
        },
        {
          "quem": "mia",
          "t": "My manager is talking with our TOTVS team today."
        },
        {
          "quem": "leo",
          "t": "When do you usually send proposals?"
        },
        {
          "quem": "mia",
          "t": "We usually send them in two weeks. Yours is on time."
        },
        {
          "quem": "leo",
          "t": "Great. Our CFO is asking every day!"
        },
        {
          "quem": "mia",
          "t": "No problem. I send an update every Friday."
        }
      ],
      "perguntas": [
        {
          "q": "What is Mia’s team doing right now?",
          "op": [
            "Working on the proposal",
            "Sending the proposal",
            "Waiting for numbers"
          ],
          "a": 0,
          "por": "We’re working on it right now."
        },
        {
          "q": "Who is talking with the TOTVS team?",
          "op": [
            "Mia’s manager",
            "Mia",
            "The CFO"
          ],
          "a": 0,
          "por": "My manager is talking with our TOTVS team today."
        },
        {
          "q": "When does Mia send an update?",
          "op": [
            "Every Friday",
            "Every Monday",
            "Every day"
          ],
          "a": 0,
          "por": "I send an update every Friday."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "We’re working on your proposal this week.",
          "img": "https://wolf-labs.pages.dev/p/216ee29a3919/selling-services-working-on-your-proposal/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "My team is checking the numbers.",
          "img": "https://wolf-labs.pages.dev/p/216ee29a3919/selling-services-working-on-your-proposal/img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We send an update every Monday.",
          "img": "https://wolf-labs.pages.dev/p/216ee29a3919/selling-services-working-on-your-proposal/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "now / this week → <b>am / is / are + -ing</b> · routine (every, usually) → <b>present simple</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We’re working on your proposal now.",
          "aceita": [],
          "d": "Dica: agora → <b>we’re</b> + working."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "We working on the proposal.",
          "r": "We’re working on the proposal.",
          "aceita": [
            "We are working on the proposal."
          ],
          "d": "Dica: falta o be: <b>we’re</b> working."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I am prepare the timeline.",
          "r": "I’m preparing the timeline.",
          "aceita": [
            "I am preparing the timeline."
          ],
          "d": "Dica: am + verbo com <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "We are send a report every month.",
          "r": "We send a report every month.",
          "aceita": [],
          "d": "Dica: rotina (every month) → <b>we send</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/216ee29a3919/selling-services-working-on-your-proposal/img/live-mesa.webp",
      "leg": "A laptop with a status e-mail at night",
      "pede": "Write a short status e-mail (3 sentences): what you’re doing this week, what your team is doing, one routine.",
      "ph": "This week we’re … My team is … We usually …",
      "ex": "This week we’re working on your proposal. My team is checking the numbers. We send an update every Monday."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you working on this week?",
          "ph": "I’m working on …",
          "ex": "I’m working on two proposals."
        },
        {
          "q": "What do you usually do on Friday afternoons?",
          "ph": "I usually …",
          "ex": "I usually update the CRM."
        }
      ]
    }
  }
};
