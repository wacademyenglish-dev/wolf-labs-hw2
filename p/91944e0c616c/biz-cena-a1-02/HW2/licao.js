/* BUSINESS 1 · CENA 02 (YOU DON'T READ RUNWAY?) · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present simple em entrevista: Do you...? Yes, I do / No, I don't; she doesn't; sem am antes do verbo. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "biz-cena-a1-02",
  "titulo": "You Don't Read Runway?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/91944e0c616c/biz-cena-a1-02/img/live-capa.webp",
  "alvo": "present simple in a job interview: Do you...? Yes, I do. No, I don't. He / she doesn't + verb. I work (no am before the verb)",
  "abrir": "In a job interview: Do you work in a team?",
  "fecho": "Question: <b>Do you</b> work? Short answer: <b>Yes, I do. / No, I don't.</b> With he / she: <b>doesn't</b> + verb: <i>She doesn't know</i>. And no <b>am</b>: <i>I work</i>, not <i>I am work</i>.",
  "elenco": {
    "mia": { "nome": "Mia", "voz": "en-US-AvaNeural", "cor": "#86c9f0" },
    "leo": { "nome": "Leo", "voz": "en-AU-WilliamMultilingualNeural", "cor": "#f0b866" }
  },
  "rate": "-14%",
  "rodadas": {
    "listen": {
      "sub": "A job interview at Northwind. Leo asks, Mia answers. About 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/91944e0c616c/biz-cena-a1-02/img/live-capa.webp",
      "leg": "A quiet hall before the interview",
      "audio": "audio/listen.mp3",
      "falas": [
        { "quem": "leo", "t": "Good morning, Mia. Do you know our company?" },
        { "quem": "mia", "t": "No, I don't. But I learn fast." },
        { "quem": "leo", "t": "Do you work in a team?" },
        { "quem": "mia", "t": "Yes, I do. I work with five people now." },
        { "quem": "leo", "t": "Does your boss speak English?" },
        { "quem": "mia", "t": "No, he doesn't. But I speak English every day." },
        { "quem": "leo", "t": "Do you start early?" },
        { "quem": "mia", "t": "Yes, I start at eight. I usually finish at five." },
        { "quem": "leo", "t": "Thank you. We call you on Friday." }
      ],
      "perguntas": [
        { "q": "Does Mia know the company?", "op": ["No, she doesn't", "Yes, she does", "She works there"], "a": 0, "por": "No, I don't. But I learn fast." },
        { "q": "How many people does Mia work with?", "op": ["Five", "Eight", "Friday"], "a": 0, "por": "I work with five people now." },
        { "q": "When does Mia usually finish work?", "op": ["At five", "At eight", "On Friday"], "a": 0, "por": "I usually finish at five." }
      ]
    },
    "out": {
      "sub": "Three sentences for an interview. Hear it, then say it.",
      "frases": [
        { "t": "Do you work in a team?", "au": "audio/say1.mp3", "img": "https://wolf-labs.pages.dev/p/91944e0c616c/biz-cena-a1-02/img/live-capa.webp" },
        { "t": "No, my boss doesn't speak English.", "au": "audio/say2.mp3", "img": "https://wolf-labs.pages.dev/p/91944e0c616c/biz-cena-a1-02/img/live-capa.webp" },
        { "t": "I usually finish work at five.", "au": "audio/say3.mp3", "img": "https://wolf-labs.pages.dev/p/91944e0c616c/biz-cena-a1-02/img/live-capa.webp" }
      ]
    },
    "focus": {
      "sub": "Do, don't, doesn't. Four quick ones.",
      "regra": "<b>Do you</b> + verb? · <b>Yes, I do. / No, I don't.</b> · he / she <b>doesn't</b> + verb · <b>I work</b> (no am).",
      "itens": [
        { "tipo": "monta", "t": "Put the words in order.", "r": "My boss does not speak English.", "aceita": [], "d": "Dica: he / she: <b>does not</b> + verbo (speak), sem <i>s</i>." },
        { "tipo": "escreve", "t": "Fix it: make it a question.", "mostra": "You work in a team?", "r": "Do you work in a team?", "aceita": [], "d": "Dica: pergunta no presente simples começa com <b>Do you</b>." },
        { "tipo": "escreve", "t": "Fix it: one word is wrong.", "mostra": "She don't know the company.", "r": "She doesn't know the company.", "aceita": ["She does not know the company."], "d": "Dica: he / she pede <b>doesn't</b>, não <i>don't</i>." },
        { "tipo": "escreve", "t": "Fix it: no am before the verb.", "mostra": "I am work in a bank.", "r": "I work in a bank.", "aceita": ["I work at a bank."], "d": "Dica: <b>I work</b>, sem <i>am</i>." }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/91944e0c616c/biz-cena-a1-02/img/live-capa.webp",
      "leg": "A quiet hall before the interview",
      "pede": "Look at the picture: a quiet hall in an office. Write 2 or 3 sentences about your normal work day or study day. Use the simple present, with <b>don't</b> if you want.",
      "ph": "I start at …",
      "ex": "I start work at eight. I usually have lunch at noon. I don't work on Sunday."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        { "q": "Do you speak English every day?", "ph": "Yes, I do. / No, I don't. …", "ex": "Yes, I do. I speak English at work." },
        { "q": "What time do you start your day?", "ph": "I start at …", "ex": "I start at seven. I don't like Monday mornings." }
      ]
    }
  }
};
