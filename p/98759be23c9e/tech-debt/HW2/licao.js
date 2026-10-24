/* TECH DEBT · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: condições para negociar: unless, provided that, as long as. B2: nenhum português na lição. */
window.HW2 = {
  "id": "tech-debt",
  "titulo": "Tech Debt",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/98759be23c9e/tech-debt/img/live-capa.webp",
  "alvo": "conditions for negotiating: unless (= if ... not), provided that and as long as (= only if), followed by the present, never will; no double negative after unless",
  "abrir": "What are you putting off at home, and what happens unless you fix it?",
  "fecho": "<b>Unless</b> already means <i>if ... not</i>: <i>Unless we fix it, it will get worse</i> (not <s>unless we don't</s>). <b>Provided that</b> and <b>as long as</b> mean <i>only if</i>, and they take the present: <i>provided that we have time</i>, <i>as long as the bugs get fixed</i>. Then the promise: <i>we can pause features</i>, <i>the debt will go down</i>.",
  "elenco": {
    "mia": { "nome": "Mia", "voz": "en-US-AvaNeural", "cor": "#86c9f0" },
    "leo": { "nome": "Leo", "voz": "en-AU-WilliamMultilingualNeural", "cor": "#f0b866" }
  },
  "rate": "-12%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo plan a debt sprint. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/98759be23c9e/tech-debt/img/live-capa.webp",
      "leg": "The tangled server room",
      "audio": "audio/listen.mp3",
      "falas": [
        { "quem": "mia", "t": "Leo, Marcus wants the new checkout in March. Can we still fix the payments code first?" },
        { "quem": "leo", "t": "Unless we fix it first, every feature will take longer. It took six days last year. Now it takes thirteen." },
        { "quem": "mia", "t": "Marcus won't like that. What can I offer him?" },
        { "quem": "leo", "t": "Two weeks without new features, provided that urgent bugs still get fixed." },
        { "quem": "mia", "t": "And if he says the roadmap is full?" },
        { "quem": "leo", "t": "Then we ask for twenty percent of every sprint. As long as the team keeps that time, the debt goes down." },
        { "quem": "mia", "t": "What do we fix first?" },
        { "quem": "leo", "t": "The deprecated library. Unless we replace it, we get no more security updates." },
        { "quem": "mia", "t": "Good. And the tests?" },
        { "quem": "leo", "t": "Right after. We'll add them, provided that nobody adds a new workaround." },
        { "quem": "mia", "t": "Perfect. I'll send Marcus the numbers today, as long as you check them first." }
      ],
      "perguntas": [
        {
          "q": "What happens unless they fix the payments code?",
          "op": ["Every feature will take longer", "The checkout will be ready in March", "Marcus will approve the plan"],
          "a": 0,
          "por": "Unless we fix it first, every feature will take longer."
        },
        {
          "q": "What does Leo offer Marcus first?",
          "op": ["Two weeks without new features, if urgent bugs still get fixed", "A new checkout in two weeks", "Twenty percent more budget"],
          "a": 0,
          "por": "Two weeks without new features, provided that urgent bugs still get fixed."
        },
        {
          "q": "What is Leo's condition for adding the tests?",
          "op": ["Nobody adds a new workaround", "Marcus sends the numbers", "The library is not deprecated"],
          "a": 0,
          "por": "We'll add them, provided that nobody adds a new workaround."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the plan. Hear it, then say it.",
      "frases": [
        { "t": "Unless we fix it first, every feature will take longer.", "au": "audio/say1.mp3", "img": "https://wolf-labs.pages.dev/p/98759be23c9e/tech-debt/img/live-a.webp" },
        { "t": "We can pause features, provided that urgent bugs still get fixed.", "au": "audio/say2.mp3", "img": "https://wolf-labs.pages.dev/p/98759be23c9e/tech-debt/img/live-b.webp" },
        { "t": "As long as the team keeps that time, the debt goes down.", "au": "audio/say3.mp3", "img": "https://wolf-labs.pages.dev/p/98759be23c9e/tech-debt/img/live-capa.webp" }
      ]
    },
    "focus": {
      "sub": "Condition, tense, no double negative. Four quick ones.",
      "regra": "<b>Unless</b> = <i>if ... not</i>, so no <i>don't</i> after it · <b>provided that</b> / <b>as long as</b> + present (no <i>will</i>, no <i>that</i> after <i>as long as</i>) · never <i>unless if</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We will ship faster, provided that we fix it first.",
          "aceita": [],
          "d": "Hint: after <b>provided that</b> use the present: <b>we fix</b>, not <i>we will fix</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word too many.",
          "mostra": "Unless we don't fix it, the code will break.",
          "r": "Unless we fix it, the code will break.",
          "aceita": ["If we don't fix it, the code will break.", "The code will break unless we fix it."],
          "d": "Hint: <b>unless</b> already means <i>if ... not</i>. No <i>don't</i> after it."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: wrong tense after the condition.",
          "mostra": "Provided that we will have time, we can refactor.",
          "r": "Provided that we have time, we can refactor.",
          "aceita": ["As long as we have time, we can refactor.", "We can refactor provided that we have time.", "We can refactor as long as we have time."],
          "d": "Hint: <b>provided that</b> + present. The <i>will</i> belongs to the promise, not to the condition."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word too many.",
          "mostra": "We will deploy unless if tests fail.",
          "r": "We will deploy unless tests fail.",
          "aceita": ["We will deploy unless the tests fail.", "Unless tests fail, we will deploy.", "Unless the tests fail, we will deploy."],
          "d": "Hint: say <b>unless</b>, not <i>unless if</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/98759be23c9e/tech-debt/img/live-b.webp",
      "leg": "The tower of debt",
      "pede": "Look at the picture: a tower with one block too many. Write your own proposal to a manager: what you want to fix and your conditions. Use <b>unless</b>, <b>provided that</b> or <b>as long as</b>.",
      "ph": "Unless we fix …, provided that …",
      "ex": "Unless we fix the login code, every release will be risky. I need two weeks, provided that urgent bugs still get fixed. We can add features again as long as we keep the tests green."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is the tech debt in your life? What happens unless you fix it?",
          "ph": "Unless I …",
          "ex": "My phone is full of photos. Unless I delete some, I can't update the system."
        },
        {
          "q": "When a colleague asks for help, what condition do you set?",
          "ph": "I'll help, as long as …",
          "ex": "I'll review your code, as long as you write the tests first."
        }
      ]
    }
  }
};
