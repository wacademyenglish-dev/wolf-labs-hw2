/* I DO MEAN IT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: do / does / did enfático e o auxiliar que já está lá (I AM, I CAN). B1: nenhum português. */
window.HW2 = {
  "id": "i-do-mean-it",
  "titulo": "I Do Mean It",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/8c4d21f70b93/i-do-mean-it/img/live-microfone.webp",
  "alvo": "emphatic do / does / did: I do like it, she does know, I did go (bare verb after DO); with a helper already there, push the helper: I AM tired, I CAN swim; never 'I like, yes!' or 'I do am'",
  "abrir": "Has anyone ever doubted you? What did you say?",
  "fecho": "Somebody doubts you, and you push back. Put the force on <b>do, does or did</b> and keep the verb bare: <i>I do like it. She does know. I did go.</i> If a helper is already there, push it: <i>I AM tired. I CAN swim.</i> Never <i>I like, yes!</i>",
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
      "sub": "Mia and Leo, two roommates on a Sunday night. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/8c4d21f70b93/i-do-mean-it/img/live-sofa.webp",
      "leg": "The sofa, the TV, and an argument",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, be honest. You don't like my cooking."
        },
        {
          "quem": "mia",
          "t": "I do like your cooking! I just don't like the spicy rice."
        },
        {
          "quem": "leo",
          "t": "Fine. But you never help in the kitchen."
        },
        {
          "quem": "mia",
          "t": "I did help! I washed all the dishes on Friday."
        },
        {
          "quem": "leo",
          "t": "Okay. But Sam doesn't care about the rent."
        },
        {
          "quem": "mia",
          "t": "He does care. He paid his half this morning."
        },
        {
          "quem": "leo",
          "t": "Really? And I know you can't cook pasta."
        },
        {
          "quem": "mia",
          "t": "I can cook pasta! Watch me tomorrow."
        },
        {
          "quem": "leo",
          "t": "Fine, fine. Let's watch a movie. Is there any popcorn?"
        },
        {
          "quem": "mia",
          "t": "There is. I did buy some today. It's on the sofa."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia not like?",
          "op": [
            "The spicy rice",
            "The popcorn",
            "The kitchen"
          ],
          "a": 0,
          "por": "I do like your cooking! I just don't like the spicy rice."
        },
        {
          "q": "When did Mia wash the dishes?",
          "op": [
            "On Friday",
            "On Sunday",
            "This morning"
          ],
          "a": 0,
          "por": "I did help! I washed all the dishes on Friday."
        },
        {
          "q": "What did Sam do this morning?",
          "op": [
            "He paid his half of the rent",
            "He cooked pasta",
            "He bought popcorn"
          ],
          "a": 0,
          "por": "He does care. He paid his half this morning."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the scene. Hear it, then say it, with the force on the right word.",
      "frases": [
        {
          "t": "I do like your cooking, but I don't like spicy rice.",
          "img": "https://wolf-labs.pages.dev/p/8c4d21f70b93/i-do-mean-it/img/live-arroz.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "He does care. He did pay the rent this morning.",
          "img": "https://wolf-labs.pages.dev/p/8c4d21f70b93/i-do-mean-it/img/live-sofa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I can cook pasta, and I did wash the dishes.",
          "img": "https://wolf-labs.pages.dev/p/8c4d21f70b93/i-do-mean-it/img/live-pimenta.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Push back with DO, DOES and DID. Four quick ones.",
      "regra": "<b>do / does / did</b> + bare verb pushes the idea: I <b>do</b> like it · she <b>does</b> know it · I <b>did</b> go. A helper already there pushes itself: I <b>AM</b> tired · I <b>CAN</b> swim.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "He did pay the rent this morning.",
          "aceita": [],
          "d": "Hint: <b>did</b> carries the past, so <b>pay</b> stays bare."
        },
        {
          "tipo": "escreve",
          "t": "Push back. Answer the doubt with DO.",
          "mostra": "“You don’t like my idea.”",
          "r": "I do like your idea.",
          "aceita": [
            "I do like it.",
            "I do like it!",
            "I do like your idea!"
          ],
          "d": "Hint: <b>I do like</b> + the rest. The force goes on <b>do</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She does knows the way.",
          "r": "She does know the way.",
          "aceita": [
            "She does know the way"
          ],
          "d": "Hint: <b>does</b> already carries the S, so <b>know</b> stays bare."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I do am tired!",
          "r": "I am tired!",
          "aceita": [
            "I'm tired!"
          ],
          "d": "Hint: <b>am</b> is already a helper. Push <b>AM</b> itself, never <i>do am</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/8c4d21f70b93/i-do-mean-it/img/live-despertador.webp",
      "leg": "An alarm clock at night",
      "pede": "Look at the picture: an alarm clock at night. A friend says you are never on time. Push back in 2 or 3 sentences. Use <b>do, does, did</b> or a helper like <b>am / can</b>.",
      "ph": "I am always on time. I do …",
      "ex": "I am always on time! I did wake up at six today, and I do take the early bus every day. I CAN be punctual when it matters."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "People think you don't like something that you really like. What is it? Push back.",
          "ph": "I do like … I did …",
          "ex": "My friends think I don't like football, but I do like it. I did play it for ten years."
        },
        {
          "q": "Tell me about a time someone doubted you, and you proved them wrong.",
          "ph": "They said I couldn't …, but I did …",
          "ex": "My boss said I couldn't finish the report by Friday, but I did finish it. I did it at midnight."
        }
      ]
    }
  }
};
