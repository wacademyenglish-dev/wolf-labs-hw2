/* SIX EGGS · LIÇÃO DE CASA 2.0 (piloto, 23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). Este arquivo é JSON puro depois do "=":
   o gera_audio.py lê o mesmo arquivo para gravar o listening e as frases do Out loud.
   Alvo: and / but / so / because juntando duas ideias numa frase só. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "six-eggs",
  "titulo": "Six Eggs",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/7d9feb514f3d/six-eggs/img/capa.jpg",
  "alvo": "and / but / so / because to join two ideas in ONE sentence: a comma before and, but, so; so + result; because + reason",
  "abrir": "What did you buy this week, and why?",
  "fecho": "<b>So</b> puts the result second; <b>because</b> puts the reason second: <i>It was cold, so I took a coat</i> = <i>I took a coat because it was cold</i>.",
  "elenco": {
    "mia": { "nome": "Mia", "voz": "en-US-AvaNeural", "cor": "#86c9f0" },
    "leo": { "nome": "Leo", "voz": "en-AU-WilliamMultilingualNeural", "cor": "#f0b866" }
  },
  "rate": "-14%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo on the train. A new scene, about 30 seconds.",
      "img": "https://wolf-labs.pages.dev/p/7d9feb514f3d/six-eggs/img/cap1.jpg",
      "leg": "On the train, after work",
      "audio": "audio/listen.mp3",
      "falas": [
        { "quem": "mia", "t": "Leo, look! Someone left a notebook on the seat." },
        { "quem": "leo", "t": "Is there a name in it?" },
        { "quem": "mia", "t": "No, but there's a shopping list." },
        { "quem": "leo", "t": "What's on the list?" },
        { "quem": "mia", "t": "Bread, milk and six eggs." },
        { "quem": "leo", "t": "Six eggs? That's a lot." },
        { "quem": "mia", "t": "Maybe they have a big family, so they eat a lot of eggs." },
        { "quem": "leo", "t": "This is our station, so let's take it to the office." },
        { "quem": "mia", "t": "Good idea. Someone is sad because they lost their notebook." },
        { "quem": "leo", "t": "And hungry, because they have no list!" }
      ],
      "perguntas": [
        { "q": "What is in the notebook?", "op": ["A shopping list", "A name and an address", "Six eggs"], "a": 0, "por": "No, but there's a shopping list." },
        { "q": "Why is someone sad?", "op": ["Because they lost their notebook", "Because they have a big family", "Because the train is late"], "a": 0, "por": "Someone is sad because they lost their notebook." }
      ]
    },
    "out": {
      "sub": "Three sentences from the story. Hear it, then say it.",
      "frases": [
        { "t": "Nobody comes back, so she puts it in her bag.", "img": "https://wolf-labs.pages.dev/p/7d9feb514f3d/six-eggs/img/cap1.jpg", "au": "audio/say1.mp3" },
        { "t": "She reads the list, and she sees six eggs.", "img": "https://wolf-labs.pages.dev/p/7d9feb514f3d/six-eggs/img/cap2.jpg", "au": "audio/say2.mp3" },
        { "t": "He buys six eggs because his cat loves eggs.", "img": "https://wolf-labs.pages.dev/p/7d9feb514f3d/six-eggs/img/cap5.jpg", "au": "audio/say3.mp3" }
      ]
    },
    "focus": {
      "sub": "So or because? Four quick ones.",
      "regra": "<b>so</b> + the result · <b>because</b> + the reason · a comma before <b>and, but, so</b>.",
      "itens": [
        { "tipo": "monta", "t": "Put the words in order.", "r": "She cannot read the street because the paper is wet.", "aceita": [], "d": "Dica: <b>because</b> + o motivo (the paper is wet)." },
        { "tipo": "escreve", "t": "Join them with <em>so</em>.", "mostra": "It was cold. I took a coat.", "r": "It was cold, so I took a coat.", "aceita": ["It was cold, so I took my coat.", "It was cold, so I took a jacket."], "d": "Dica: vírgula + <b>so</b> + o resultado." },
        { "tipo": "escreve", "t": "Join them with <em>because</em>.", "mostra": "I was late. The bus didn't come.", "r": "I was late because the bus didn't come.", "aceita": ["I was late because the bus did not come.", "I was late because the bus was late."], "d": "Dica: <b>because</b> + o motivo. Também vale: <i>Because the bus didn't come, I was late.</i>" },
        { "tipo": "escreve", "t": "Fix it: make ONE sentence.", "mostra": "The cat was hungry. So he bought eggs.", "r": "The cat was hungry, so he bought eggs.", "aceita": ["He bought eggs because the cat was hungry."], "d": "Dica: uma frase só: vírgula antes de <b>so</b>, e <b>so</b> com letra pequena." }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/7d9feb514f3d/six-eggs/img/cap5.jpg",
      "leg": "The cat in the box",
      "pede": "Look at the picture. Write 2 or 3 sentences about the cat. Use <b>and, but, so</b> or <b>because</b>.",
      "ph": "The cat is in a box because…",
      "ex": "The cat is in a box because it is warm. It is sleeping, so the house is quiet."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        { "q": "What do you always have in your bag? Why?", "ph": "I always have … because …", "ex": "I always have an umbrella because it rains a lot here." },
        { "q": "What did you buy this week, and why?", "ph": "I bought … because …", "ex": "I bought eggs because I wanted to make a cake." }
      ]
    }
  }
};
