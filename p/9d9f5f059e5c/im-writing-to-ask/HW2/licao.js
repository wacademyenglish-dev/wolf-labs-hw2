/* I'M WRITING TO ASK · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present continuous para hoje / esta semana (am-is-are + -ing) contra a rotina (usually + simples). A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "im-writing-to-ask",
  "titulo": "I'm Writing to Ask",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/9d9f5f059e5c/im-writing-to-ask/img/live-mesa.webp",
  "alvo": "present continuous for today / this week (am, is, are + verb-ing) vs the routine (usually + simple present): Ansel usually works in the office; today he is working from home",
  "abrir": "What are you doing right now? And what do you usually do on Monday?",
  "fecho": "<b>Usually</b> + simple: <i>Ansel usually works in the office</i>. <b>Today / this week</b> = am, is, are + -ing: <i>Today he is working from home</i>. Never forget <b>is</b>: <i>He is working</i>, not <i>He working</i>.",
  "elenco": {
    "mia": { "nome": "Mia", "voz": "en-US-AvaNeural", "cor": "#86c9f0" },
    "leo": { "nome": "Leo", "voz": "en-AU-WilliamMultilingualNeural", "cor": "#f0b866" }
  },
  "rate": "-14%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo at a map company. The office is closed this week. About 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/9d9f5f059e5c/im-writing-to-ask/img/live-trem.webp",
      "leg": "On the train, in the rain",
      "audio": "audio/listen.mp3",
      "falas": [
        { "quem": "mia", "t": "Leo, the office is closed this week. The roof is broken." },
        { "quem": "leo", "t": "I know. Hester is on a train to Seattle today." },
        { "quem": "mia", "t": "And Ansel? Is he working?" },
        { "quem": "leo", "t": "Yes, he is working from home. He usually works in the office." },
        { "quem": "mia", "t": "Wynne from the hotel is waiting for her maps." },
        { "quem": "leo", "t": "Are you writing to her?" },
        { "quem": "mia", "t": "Yes, I am writing to her now. I am writing to say sorry." },
        { "quem": "leo", "t": "Good. Tell her Marek is printing the maps today." },
        { "quem": "mia", "t": "OK! And Noor? Is she working this week?" },
        { "quem": "leo", "t": "No, she isn't. She is on holiday." }
      ],
      "perguntas": [
        { "q": "Where is Hester today?", "op": ["On a train to Seattle", "At home", "In the office"], "a": 0, "por": "Hester is on a train to Seattle today." },
        { "q": "What is Mia doing now?", "op": ["She is writing to Wynne", "She is printing maps", "She is on holiday"], "a": 0, "por": "Yes, I am writing to her now." },
        { "q": "Who is printing the maps today?", "op": ["Marek", "Ansel", "Noor"], "a": 0, "por": "Tell her Marek is printing the maps today." }
      ]
    },
    "out": {
      "sub": "Three sentences from the story. Hear it, then say it.",
      "frases": [
        { "t": "Ansel is working from home today.", "au": "audio/say1.mp3", "img": "https://wolf-labs.pages.dev/p/9d9f5f059e5c/im-writing-to-ask/img/live-mesa.webp" },
        { "t": "The builders are fixing the roof this week.", "au": "audio/say2.mp3", "img": "https://wolf-labs.pages.dev/p/9d9f5f059e5c/im-writing-to-ask/img/live-porta.webp" },
        { "t": "I am writing to ask about my order.", "au": "audio/say3.mp3", "img": "https://wolf-labs.pages.dev/p/9d9f5f059e5c/im-writing-to-ask/img/live-mesa.webp" }
      ]
    },
    "focus": {
      "sub": "Today or usually? Four quick ones.",
      "regra": "<b>today / this week</b> = am, is, are + -ing · <b>usually</b> = simple present · never forget <b>is</b>.",
      "itens": [
        { "tipo": "monta", "t": "Put the words in order.", "r": "Marek is printing the maps today.", "aceita": [], "d": "Dica: <b>is</b> + verbo com <b>-ing</b> para o que acontece hoje." },
        { "tipo": "escreve", "t": "Fix it: one word is missing.", "mostra": "Ansel working from home today.", "r": "Ansel is working from home today.", "aceita": ["Ansel is working at home today."], "d": "Dica: faltou o <b>is</b> antes de working." },
        { "tipo": "escreve", "t": "Fix it: this is a routine.", "mostra": "Hester is usually working in the office.", "r": "Hester usually works in the office.", "aceita": ["Hester usually works at the office."], "d": "Dica: com <b>usually</b> use o presente simples: <b>works</b>." },
        { "tipo": "escreve", "t": "Fix it: it is happening now.", "mostra": "Today I write to Wynne.", "r": "Today I am writing to Wynne.", "aceita": ["Today I'm writing to Wynne.", "Today I am writing to her."], "d": "Dica: hoje, agora: <b>am writing</b>, não <i>write</i>." }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/9d9f5f059e5c/im-writing-to-ask/img/live-mesa.webp",
      "leg": "A desk with a laptop",
      "pede": "Look at the picture: a desk with a laptop. Write 2 or 3 sentences: what are you doing today? What is someone at home doing? Use <b>is</b> or <b>am</b> + -ing.",
      "ph": "Today I am …",
      "ex": "Today I am working at home. My sister is studying in her room. I usually work in the office."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        { "q": "Where are you today, and what are you doing?", "ph": "Today I am … ing …", "ex": "Today I am at home. I am studying English." },
        { "q": "What do you usually do on Monday morning?", "ph": "I usually …", "ex": "I usually go to work at eight. This week I am working from home." }
      ]
    }
  }
};
