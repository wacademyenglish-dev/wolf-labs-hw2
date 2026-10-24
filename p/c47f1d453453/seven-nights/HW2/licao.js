/* SEVEN NIGHTS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: zero conditional: if + presente, presente; he/she/it -s. A2: dicas em português só nas notas (d). Só live-* (já escuras; as claras lab/xicara ficam de fora). */
window.HW2 = {
  "id": "seven-nights",
  "titulo": "Seven Nights",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/c47f1d453453/seven-nights/img/live-quarto.webp",
  "alvo": "zero conditional: if + present, present for habits and facts (no will); he / she / it takes -s; if = maybe, when = always",
  "abrir": "What happens to you if you sleep badly?",
  "fecho": "The rules of your body: <b>if + present, present</b>. A habit, not a prediction: no <i>will</i>. He, she, it: the <b>-s</b>: <i>If she drinks coffee, she stays awake.</i> <b>When</b> = it always happens. <b>If</b> = it may happen, or not.",
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
      "sub": "Mia and Leo talk about sleep. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/c47f1d453453/seven-nights/img/live-quarto.webp",
      "leg": "A bedroom with a purple light",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you look tired. Did you sleep badly again?"
        },
        {
          "quem": "mia",
          "t": "Yes. If I drink coffee after six, I lie awake until midnight."
        },
        {
          "quem": "leo",
          "t": "Do you drink coffee at night?"
        },
        {
          "quem": "mia",
          "t": "Only when I have a lot of work. If I have a lot of work, I drink three cups."
        },
        {
          "quem": "leo",
          "t": "That's the problem. My sister has a rule: if she looks at her phone in bed, she can't sleep."
        },
        {
          "quem": "mia",
          "t": "Same for me! If I take my phone to bed, I read the news for an hour."
        },
        {
          "quem": "leo",
          "t": "So what helps you?"
        },
        {
          "quem": "mia",
          "t": "If the room is dark and quiet, I fall asleep fast. And when I go to bed early, I feel great in the morning."
        },
        {
          "quem": "leo",
          "t": "Then leave the phone in the kitchen. If you don't see it, you don't use it."
        },
        {
          "quem": "mia",
          "t": "Good idea. Let's see tonight."
        }
      ],
      "perguntas": [
        {
          "q": "What happens if Mia drinks coffee after six?",
          "op": [
            "She lies awake until midnight",
            "She falls asleep fast",
            "She feels great"
          ],
          "a": 0,
          "por": "If I drink coffee after six, I lie awake until midnight."
        },
        {
          "q": "What happens if Mia takes her phone to bed?",
          "op": [
            "She reads the news for an hour",
            "She sleeps very fast",
            "She calls Leo"
          ],
          "a": 0,
          "por": "If I take my phone to bed, I read the news for an hour."
        },
        {
          "q": "What helps Mia fall asleep fast?",
          "op": [
            "A dark and quiet room",
            "A strong coffee",
            "A bright light"
          ],
          "a": 0,
          "por": "If the room is dark and quiet, I fall asleep fast."
        }
      ]
    },
    "out": {
      "sub": "Three rules about sleep. Hear it, then say it.",
      "frases": [
        {
          "t": "If I drink coffee at night, I can't sleep.",
          "img": "https://wolf-labs.pages.dev/p/c47f1d453453/seven-nights/img/live-xicara.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If she looks at her phone, she stays awake.",
          "img": "https://wolf-labs.pages.dev/p/c47f1d453453/seven-nights/img/live-telefone.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If the room is dark, I sleep like a stone.",
          "img": "https://wolf-labs.pages.dev/p/c47f1d453453/seven-nights/img/live-quarto.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "If + present, present. Four quick ones.",
      "regra": "<b>if</b> + present, present · no <b>will</b> · he / she / it + <b>-s</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If it is hot, I don't sleep well.",
          "aceita": [],
          "d": "Dica: <b>if</b> + presente, presente. Sem will."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If she drinks coffee, she will stay awake.",
          "r": "If she drinks coffee, she stays awake.",
          "aceita": [],
          "d": "Dica: é um hábito, não uma previsão: sem <b>will</b>. Os dois lados no presente."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If he drink coffee, he can't sleep.",
          "r": "If he drinks coffee, he can't sleep.",
          "aceita": [],
          "d": "Dica: he / she / it leva -s: <b>drinks</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If I drink coffee at night, I woke up at three.",
          "r": "If I drink coffee at night, I wake up at three.",
          "aceita": [],
          "d": "Dica: regra do corpo é presente nos dois lados: <b>wake up</b>, não 'woke up'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/c47f1d453453/seven-nights/img/live-telefone.webp",
      "leg": "A phone glowing on a dark bed",
      "pede": "Look at the picture: a phone glowing on a bed at night. Write 2 or 3 rules about your sleep. Use <b>If + present, present</b>.",
      "ph": "If I …, I …",
      "ex": "If I look at my phone in bed, I stay awake. If I drink coffee at night, I can't sleep. If the room is quiet, I sleep well."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What happens to you if you drink coffee at night?",
          "ph": "If I drink coffee at night, I …",
          "ex": "If I drink coffee at night, I stay awake until two."
        },
        {
          "q": "What do you do if you can't sleep?",
          "ph": "If I can't sleep, I …",
          "ex": "If I can't sleep, I read a book or drink some water."
        }
      ]
    }
  }
};
