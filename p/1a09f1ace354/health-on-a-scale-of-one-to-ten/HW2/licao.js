/* ON A SCALE OF ONE TO TEN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: escala de dor: on a scale of, mild/moderate/severe, palavras da dor. B1+ (B1 na plataforma): nenhum português. Tom calmo, queixas leves do dia a dia; nada de doença grave, emergência ou perda. Imagens só as escuras e neutras da aula (sem leito, sem corredor). */
window.HW2 = {
  "id": "health-on-a-scale-of-one-to-ten",
  "titulo": "On a Scale of One to Ten",
  "nivel": "B1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "rating everyday pain: On a scale of zero to ten, how bad is it? / What number would you give it?; anchors mild (1-3), moderate (4-6), severe (7-10); pain words sharp, dull, throbbing, burning, comes and goes; a headache (not a pain of head); severe pain (not very strong pain); on a scale (not in a scale); ask again after treatment",
  "abrir": "How do you explain the number ten to a patient?",
  "fecho": "Ask: <b>On a scale of zero to ten, how bad is it?</b> (on a scale, not <i>in a scale</i>). Give anchors: <b>mild</b> 1–3, <b>moderate</b> 4–6, <b>severe</b> 7–10. Listen for the words: <b>sharp</b>, <b>dull</b>, <b>throbbing</b>, <b>burning</b>, <b>comes and goes</b>. Say <i>a headache</i>, <i>severe pain</i>. And ask again after treatment.",
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
      "sub": "Mia, a physiotherapist, sees Leo for a sore back after a weekend in the garden. A new scene, about one minute.",
      "img": "../img/live-capa.webp",
      "leg": "A heat pack on the treatment table",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Hi, Leo. Come in. How's your back today?"
        },
        {
          "quem": "leo",
          "t": "Better, thanks. But it still hurts when I bend down."
        },
        {
          "quem": "mia",
          "t": "On a scale of zero to ten, how bad is it?"
        },
        {
          "quem": "leo",
          "t": "Hmm, I don't know. Maybe a seven?"
        },
        {
          "quem": "mia",
          "t": "Let me explain. Zero is no pain at all, and ten is the worst pain you can imagine. One to three is mild. Four to six is moderate: it bothers you, but you can still do your daily activities."
        },
        {
          "quem": "leo",
          "t": "Oh, then it's a four. I can work, and I can walk the dog."
        },
        {
          "quem": "mia",
          "t": "Good. What does it feel like? Sharp or dull?"
        },
        {
          "quem": "leo",
          "t": "A dull ache most of the day. It's only sharp when I bend down."
        },
        {
          "quem": "mia",
          "t": "Is it constant, or does it come and go?"
        },
        {
          "quem": "leo",
          "t": "It comes and goes. It's a bit worse in the morning."
        },
        {
          "quem": "mia",
          "t": "OK. A heat pack first, then your exercises, and then I'll ask you again."
        },
        {
          "quem": "leo",
          "t": "That feels much better. Now it's a two."
        },
        {
          "quem": "mia",
          "t": "Great. Two is mild. Keep doing the exercises at home."
        }
      ],
      "perguntas": [
        {
          "q": "What number does Leo give after Mia explains the scale?",
          "op": [
            "A four",
            "A seven",
            "A two"
          ],
          "a": 0,
          "por": "Oh, then it's a four."
        },
        {
          "q": "When is the pain sharp?",
          "op": [
            "When he bends down",
            "When he walks the dog",
            "At night"
          ],
          "a": 0,
          "por": "It's only sharp when I bend down."
        },
        {
          "q": "What number does Leo give after the exercises?",
          "op": [
            "A two",
            "A five",
            "A zero"
          ],
          "a": 0,
          "por": "Now it's a two."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the pain scale. Hear it, then say it.",
      "frases": [
        {
          "t": "On a scale of zero to ten, how bad is it?",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Zero is no pain at all, and ten is the worst pain you can imagine.",
          "au": "audio/say2.mp3",
          "img": "../img/live-capa.webp"
        },
        {
          "t": "It's a dull ache, and it comes and goes.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Numbers and pain words. Four quick ones.",
      "regra": "<b>On a scale of</b> zero to ten · <b>mild · moderate · severe</b> · <b>a headache</b> · <b>severe pain</b> · <b>a dull ache</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It's a dull ache in my lower back.",
          "aceita": [],
          "d": "Hint: <b>a dull ache</b> + where it is."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "In a scale of zero to ten, how bad is it?",
          "r": "On a scale of zero to ten, how bad is it?",
          "aceita": [
            "On a scale of 0 to 10, how bad is it?",
            "On a scale from zero to ten, how bad is it?"
          ],
          "d": "Hint: the preposition is <b>on</b>: <i>on a scale of</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I have a pain of head.",
          "r": "I have a headache.",
          "aceita": [
            "I've got a headache."
          ],
          "d": "Hint: in English, one word: <b>a headache</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I have a very strong pain in my knee.",
          "r": "I have a severe pain in my knee.",
          "aceita": [
            "I have severe pain in my knee.",
            "I have a bad pain in my knee.",
            "I have a really bad pain in my knee."
          ],
          "d": "Hint: pain is <b>severe</b> or <b>bad</b>, not <i>very strong</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-capa.webp",
      "leg": "A heat pack and a cold pack, ready",
      "pede": "Look at the picture: a heat pack and a cold pack on a table. A patient has a sore shoulder after a long day at the computer. Write 2 or 3 sentences to the patient: ask for a number, give the anchors, and say you will ask again after the treatment.",
      "ph": "On a scale of zero to ten, …",
      "ex": "On a scale of zero to ten, how bad is it? Four to six is moderate, so you can still work. I'll ask you again after the heat pack."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a small pain you had this year, like a headache or tired legs. What did it feel like? What number would you give it?",
          "ph": "It was a … It was about a …",
          "ex": "It was a dull headache after a long day. It was about a three, so it was mild."
        },
        {
          "q": "How do you explain moderate pain to a patient? Use daily activities.",
          "ph": "Moderate pain bothers you, but …",
          "ex": "Moderate pain bothers you, but you can still work, cook and sleep."
        }
      ]
    }
  }
};
