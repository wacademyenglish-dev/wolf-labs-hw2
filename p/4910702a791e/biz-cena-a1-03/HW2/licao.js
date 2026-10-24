/* BUSINESS 1 · CENA 03 (HERE'S WHAT WE CAN DO) · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: atender um cliente: I can + verbo, Can you...? / Could you..., please?, Let me... A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "biz-cena-a1-03",
  "titulo": "Here's What We Can Do",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4910702a791e/biz-cena-a1-03/img/live-capa.webp",
  "alvo": "help a customer: I can + verb (no to, no -s), Can you...? / Could you..., please?, Let me + verb",
  "abrir": "A customer calls with a problem. What do you say first?",
  "fecho": "<b>I can</b> + verb: <i>I can send it today</i> (no <i>to</i>, no <i>s</i>). Ask politely: <b>Can you / Could you</b> + verb + <b>please</b>? Offer help: <b>Let me</b> check.",
  "elenco": {
    "mia": { "nome": "Mia", "voz": "en-US-AvaNeural", "cor": "#86c9f0" },
    "leo": { "nome": "Leo", "voz": "en-AU-WilliamMultilingualNeural", "cor": "#f0b866" }
  },
  "rate": "-14%",
  "rodadas": {
    "listen": {
      "sub": "A customer calls. Mia helps. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/4910702a791e/biz-cena-a1-03/img/live-capa.webp",
      "leg": "A phone and boxes on a desk",
      "audio": "audio/listen.mp3",
      "falas": [
        { "quem": "leo", "t": "Hello, I have a problem. I ordered ten chairs, but only six arrived." },
        { "quem": "mia", "t": "I'm sorry! Let me check. Can you give me your name, please?" },
        { "quem": "leo", "t": "Leo Park." },
        { "quem": "mia", "t": "Thank you. I can send four more chairs today." },
        { "quem": "leo", "t": "Can you send them on Friday? I can't be home on Thursday." },
        { "quem": "mia", "t": "Yes, I can. They arrive on Friday morning." },
        { "quem": "leo", "t": "Could you send me an email, please?" },
        { "quem": "mia", "t": "Of course. Let me do it now." }
      ],
      "perguntas": [
        { "q": "How many chairs arrived?", "op": ["Six", "Ten", "Four"], "a": 0, "por": "I ordered ten chairs, but only six arrived." },
        { "q": "On what day can't Leo be home?", "op": ["Thursday", "Friday", "Monday"], "a": 0, "por": "I can't be home on Thursday." },
        { "q": "What does Mia promise?", "op": ["Four more chairs on Friday", "Ten new chairs today", "A phone call on Thursday"], "a": 0, "por": "I can send four more chairs today. They arrive on Friday morning." }
      ]
    },
    "out": {
      "sub": "Three sentences for a customer call. Hear it, then say it.",
      "frases": [
        { "t": "Let me check your order.", "au": "audio/say1.mp3", "img": "https://wolf-labs.pages.dev/p/4910702a791e/biz-cena-a1-03/img/live-capa.webp" },
        { "t": "I can send four more chairs today.", "au": "audio/say2.mp3", "img": "https://wolf-labs.pages.dev/p/4910702a791e/biz-cena-a1-03/img/live-capa.webp" },
        { "t": "Could you send me an email, please?", "au": "audio/say3.mp3", "img": "https://wolf-labs.pages.dev/p/4910702a791e/biz-cena-a1-03/img/live-capa.webp" }
      ]
    },
    "focus": {
      "sub": "Can, could, let me. Four quick ones.",
      "regra": "<b>I can</b> + verb · <b>Can you / Could you</b> + verb + <b>please</b>? · <b>Let me</b> + verb.",
      "itens": [
        { "tipo": "monta", "t": "Put the words in order.", "r": "Can you give me your name please?", "aceita": [], "d": "Dica: <b>Can you</b> + verbo + <b>please</b> para pedir com educação." },
        { "tipo": "escreve", "t": "Fix it: one word is extra.", "mostra": "I can to send it today.", "r": "I can send it today.", "aceita": [], "d": "Dica: depois de <b>can</b> vem o verbo, sem <i>to</i>." },
        { "tipo": "escreve", "t": "Fix it: one word is wrong.", "mostra": "She can sends the chairs on Friday.", "r": "She can send the chairs on Friday.", "aceita": ["She can send them on Friday."], "d": "Dica: depois de <b>can</b>, o verbo não leva <i>s</i>." },
        { "tipo": "escreve", "t": "Fix it: make it a polite question.", "mostra": "You can help me please?", "r": "Can you help me please?", "aceita": ["Could you help me please?"], "d": "Dica: pergunta com <b>Can you</b> no começo." }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/4910702a791e/biz-cena-a1-03/img/live-capa.webp",
      "leg": "A phone and boxes on a desk",
      "pede": "Look at the picture: a phone and boxes on a desk. A customer calls with a problem. Write 2 or 3 sentences: how can you help? Use <b>I can</b> or <b>Let me</b>.",
      "ph": "I am sorry. I can …",
      "ex": "I am sorry. Let me check your order. I can send a new box on Friday."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        { "q": "How can you help a friend this week?", "ph": "I can …", "ex": "I can help my friend with English." },
        { "q": "What can't you do on Sunday?", "ph": "I can't …", "ex": "I can't work on Sunday. I stay at home." }
      ]
    }
  }
};
