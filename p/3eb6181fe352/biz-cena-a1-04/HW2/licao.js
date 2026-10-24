/* BUSINESS 1 · CENA 04 (THIS IS MY KINGDOM) · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: mostrar o escritório: this is..., there is / there are (e a pergunta Is there...?), at / on com horas e dias. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "biz-cena-a1-04",
  "titulo": "This Is My Kingdom",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/3eb6181fe352/biz-cena-a1-04/img/live-capa.webp",
  "alvo": "show an office: This is..., there is / there are, Is there...?, at + time, on + day (never there have)",
  "abrir": "What is on your desk, or in your room, right now?",
  "fecho": "One thing: <b>there is</b>. Two or more: <b>there are</b>. Question: <b>Is there</b> a kitchen? Never <i>there have</i>. Time: <b>at</b> nine. Day: <b>on</b> Monday.",
  "elenco": {
    "mia": { "nome": "Mia", "voz": "en-US-AvaNeural", "cor": "#86c9f0" },
    "leo": { "nome": "Leo", "voz": "en-AU-WilliamMultilingualNeural", "cor": "#f0b866" }
  },
  "rate": "-14%",
  "rodadas": {
    "listen": {
      "sub": "Leo shows Mia the office on her first day. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/3eb6181fe352/biz-cena-a1-04/img/live-capa.webp",
      "leg": "The office, after work",
      "audio": "audio/listen.mp3",
      "falas": [
        { "quem": "leo", "t": "Welcome to Northwind, Mia! This is my desk." },
        { "quem": "mia", "t": "Nice! Is there a kitchen?" },
        { "quem": "leo", "t": "Yes, there is. There is a coffee machine, and there are two fridges." },
        { "quem": "mia", "t": "Where is the meeting room?" },
        { "quem": "leo", "t": "It's next to the kitchen. There are six chairs in it." },
        { "quem": "mia", "t": "What time is lunch?" },
        { "quem": "leo", "t": "Lunch is at twelve thirty. The team meeting is on Monday." },
        { "quem": "mia", "t": "Great. Is there a printer?" },
        { "quem": "leo", "t": "Yes, there are two printers near the door." }
      ],
      "perguntas": [
        { "q": "What is in the kitchen?", "op": ["A coffee machine and two fridges", "Six chairs", "Two printers"], "a": 0, "por": "There is a coffee machine, and there are two fridges." },
        { "q": "Where is the meeting room?", "op": ["Next to the kitchen", "Near the door", "On Monday"], "a": 0, "por": "It's next to the kitchen." },
        { "q": "When is the team meeting?", "op": ["On Monday", "At twelve thirty", "On Friday"], "a": 0, "por": "The team meeting is on Monday." }
      ]
    },
    "out": {
      "sub": "Three sentences for your office tour. Hear it, then say it.",
      "frases": [
        { "t": "This is my desk.", "au": "audio/say1.mp3", "img": "https://wolf-labs.pages.dev/p/3eb6181fe352/biz-cena-a1-04/img/live-capa.webp" },
        { "t": "There are two printers near the door.", "au": "audio/say2.mp3", "img": "https://wolf-labs.pages.dev/p/3eb6181fe352/biz-cena-a1-04/img/live-conversa.webp" },
        { "t": "Lunch is at twelve thirty.", "au": "audio/say3.mp3", "img": "https://wolf-labs.pages.dev/p/3eb6181fe352/biz-cena-a1-04/img/live-capa.webp" }
      ]
    },
    "focus": {
      "sub": "There is, there are, at, on. Four quick ones.",
      "regra": "one thing = <b>there is</b> · two or more = <b>there are</b> · question = <b>Is there</b>? · <b>at</b> nine · <b>on</b> Monday.",
      "itens": [
        { "tipo": "monta", "t": "Put the words in order.", "r": "There is a coffee machine in the kitchen.", "aceita": [], "d": "Dica: uma coisa só: <b>there is</b>." },
        { "tipo": "escreve", "t": "Fix it: one word is wrong.", "mostra": "There have two printers near the door.", "r": "There are two printers near the door.", "aceita": [], "d": "Dica: em inglês não se diz <i>there have</i>. Duas coisas: <b>there are</b>." },
        { "tipo": "escreve", "t": "Fix it: make it a question.", "mostra": "Is have a kitchen here?", "r": "Is there a kitchen here?", "aceita": [], "d": "Dica: a pergunta é <b>Is there</b> ...?, nunca <i>Is have</i>." },
        { "tipo": "escreve", "t": "Fix it: one word is wrong.", "mostra": "The meeting is in Monday at nine.", "r": "The meeting is on Monday at nine.", "aceita": ["The meeting is on Monday at 9."], "d": "Dica: dia da semana pede <b>on</b>; hora pede <b>at</b>." }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/3eb6181fe352/biz-cena-a1-04/img/live-capa.webp",
      "leg": "An office with desks and papers",
      "pede": "Look at the picture: an office with desks and papers. Write 2 or 3 sentences about your office or your room. Use <b>This is</b>, <b>there is</b> or <b>there are</b>.",
      "ph": "This is my … There is …",
      "ex": "This is my desk. There is a lamp on it. There are two windows in my room."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        { "q": "What is in your room?", "ph": "There is … / There are …", "ex": "There is a bed, and there are two chairs." },
        { "q": "When is your English class?", "ph": "My class is on … at …", "ex": "My class is on Tuesday at seven." }
      ]
    }
  }
};
