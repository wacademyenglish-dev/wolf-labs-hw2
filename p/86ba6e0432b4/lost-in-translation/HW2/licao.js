/* LOST IN TRANSLATION · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: wish / if only: now, past, other people. B2: nenhum português. Imagens live-* (todas escuras). */
window.HW2 = {
  "id": "lost-in-translation",
  "titulo": "Lost in Translation",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/86ba6e0432b4/lost-in-translation/img/live-capa.webp",
  "alvo": "wishes and regrets: I wish I knew / were (now, past simple, were for all) · I wish I had known / If only someone had told me (past regret, past perfect) · I wish people would (other people); never I wish I know, I wish I would be, If only I have known",
  "abrir": "What do you wish you had known before your last trip?",
  "fecho": "<b>Now</b>: <i>I wish I knew more people here. I wish I were braver.</i> <b>The past</b>: <i>I wish I had known about tipping. If only someone had told me!</i> <b>Other people</b>: <i>I wish people would speak more slowly.</i> Never <i>I wish I know</i>, never <i>I wish I would be</i> for yourself.",
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
      "sub": "Mia and Leo talk about her first week in Toronto. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/86ba6e0432b4/lost-in-translation/img/live-capa.webp",
      "leg": "Toronto at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, how was your first week at the Toronto office?"
        },
        {
          "quem": "mia",
          "t": "Honestly, a bit confusing. A coworker asked how I was, and I talked about my back for five minutes."
        },
        {
          "quem": "leo",
          "t": "Ha! In Canada that question just means hello."
        },
        {
          "quem": "mia",
          "t": "I wish I had known that on Monday. I also forgot to tip at dinner, and the waiter looked so sad."
        },
        {
          "quem": "leo",
          "t": "If only someone had told you! People tip about fifteen to twenty percent there."
        },
        {
          "quem": "mia",
          "t": "And everybody says sorry all the time, even when I bump into them. I wish people would explain these things."
        },
        {
          "quem": "leo",
          "t": "What do you wish were different right now?"
        },
        {
          "quem": "mia",
          "t": "I wish I knew more people here. And I wish I were braver at lunch."
        },
        {
          "quem": "leo",
          "t": "Then meet Megan. She's from Ontario, and she explains everything with jokes."
        },
        {
          "quem": "mia",
          "t": "Perfect. I wish I had met her on day one."
        }
      ],
      "perguntas": [
        {
          "q": "What did Mia talk about for five minutes?",
          "op": [
            "Her back",
            "Her flight",
            "Her new flat"
          ],
          "a": 0,
          "por": "I talked about my back for five minutes."
        },
        {
          "q": "What does \"How are you?\" mean in Toronto?",
          "op": [
            "Just hello",
            "A real question about health",
            "An invitation to dinner"
          ],
          "a": 0,
          "por": "In Canada that question just means hello."
        },
        {
          "q": "What does Mia wish people would do?",
          "op": [
            "Explain these things",
            "Speak more loudly",
            "Say sorry less"
          ],
          "a": 0,
          "por": "I wish people would explain these things."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about wishes. Hear it, then say it.",
      "frases": [
        {
          "t": "I wish I had known about tipping before that dinner.",
          "img": "https://wolf-labs.pages.dev/p/86ba6e0432b4/lost-in-translation/img/live-a.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If only someone had told me that meetings start on the dot.",
          "img": "https://wolf-labs.pages.dev/p/86ba6e0432b4/lost-in-translation/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I wish people would explain these things to newcomers.",
          "img": "https://wolf-labs.pages.dev/p/86ba6e0432b4/lost-in-translation/img/live-b.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Now, the past, other people. Four quick ones.",
      "regra": "<b>wish</b> + past simple (<b>were</b> for all) = now · <b>wish / if only</b> + <b>had</b> + third form = the past · <b>wish</b> + someone + <b>would</b> = other people.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I wish I had known about tipping.",
          "aceita": [],
          "d": "Hint: a regret about the past: <b>wish</b> + <b>had</b> + third form."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one verb is wrong.",
          "mostra": "I wish I know more people here.",
          "r": "I wish I knew more people here.",
          "aceita": [],
          "d": "Hint: a wish about now: <b>wish</b> + past simple."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: a regret about yesterday.",
          "mostra": "I wish I didn't interrupt her yesterday.",
          "r": "I wish I hadn't interrupted her yesterday.",
          "aceita": [
            "I wish I had not interrupted her yesterday."
          ],
          "d": "Hint: for the past, use <b>had</b> + third form, not the simple past."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I wish I would be less shy.",
          "r": "I wish I were less shy.",
          "aceita": [
            "I wish I was less shy."
          ],
          "d": "Hint: <b>would</b> is for other people. For yourself, use the past form."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/86ba6e0432b4/lost-in-translation/img/live-b.webp",
      "leg": "A maple leaf on a wet bench",
      "pede": "Look at the picture: a maple leaf on a wet bench in Toronto. Write 2 or 3 sentences: what do you wish you had known before a trip or a new job, or what do you wish were different now? Use <b>I wish I had known</b>, <b>I wish I were</b> or <b>I wish people would</b>.",
      "ph": "I wish I had known …",
      "ex": "I wish I had known that the shops close at six. I wish I were less shy. I wish people would speak more slowly."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you wish you had known before your last trip or your last job?",
          "ph": "I wish I had known …",
          "ex": "I wish I had known that the shops closed at six."
        },
        {
          "q": "What do you wish other people would stop doing?",
          "ph": "I wish people would stop …",
          "ex": "I wish people would stop talking during movies."
        }
      ]
    }
  }
};
