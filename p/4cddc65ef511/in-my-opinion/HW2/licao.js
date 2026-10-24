/* IN MY OPINION · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=".
   Better Speaking (B2). Nenhum português na lição. */
window.HW2 = {
  "id": "in-my-opinion",
  "titulo": "In My Opinion",
  "nivel": "B2",
  "minutos": 10,
  "alvo": "the opinion scale (I reckon, I believe, I strongly believe, I'm absolutely certain, I'm not so sure) and the response scale (Exactly, That's true but, I agree up to a point but, Oh come on); I agree, never 'I am agree'; one opinion phrase, never 'In my opinion, I think'; I don't think so, never 'I think that no'",
  "abrir": "What is an opinion you have that most of your friends do not share?",
  "fecho": "Opinions have a scale: <b>I reckon, I believe, I strongly believe, I'm absolutely certain</b>, and the careful one, <b>I'm not so sure, but…</b>. Reactions have a scale too: <b>Exactly · That's true, but · I agree up to a point, but · Oh, come on!</b> Watch the traps: <i>I am agree</i> is <b>I agree</b>, <i>In my opinion, I think</i> needs only one phrase, and <i>I think that no</i> is <b>I don't think so</b>.",
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
      "sub": "Mia and Leo argue, politely, about a plan for their office. A new scene, about one minute.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I reckon we should work from home on Fridays."
        },
        {
          "quem": "leo",
          "t": "Interesting. I'm not so sure, but go on."
        },
        {
          "quem": "mia",
          "t": "I strongly believe people do better work in a quiet place."
        },
        {
          "quem": "leo",
          "t": "That's true, but the team talks less when nobody is in the office."
        },
        {
          "quem": "mia",
          "t": "Fair. Let me put it another way. In my opinion, a short meeting on Friday morning fixes that."
        },
        {
          "quem": "leo",
          "t": "I agree up to a point, but a meeting is not the same as lunch together."
        },
        {
          "quem": "mia",
          "t": "Do you think Friday lunch is that important?"
        },
        {
          "quem": "leo",
          "t": "I don't think so, honestly. But I'm absolutely certain the boss will ask about it."
        },
        {
          "quem": "mia",
          "t": "Oh, come on! She loves a good plan."
        },
        {
          "quem": "leo",
          "t": "Okay, okay. Send me your idea and I will read it."
        },
        {
          "quem": "mia",
          "t": "Deal."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia believe strongly?",
          "op": [
            "People work better in a quiet place",
            "Fridays are too long",
            "The boss is wrong"
          ],
          "a": 0,
          "por": "I strongly believe people do better work in a quiet place."
        },
        {
          "q": "How does Leo react to the Friday meeting idea?",
          "op": [
            "He agrees up to a point",
            "He says exactly",
            "He says oh come on"
          ],
          "a": 0,
          "por": "I agree up to a point, but a meeting is not the same as lunch together."
        },
        {
          "q": "What does Leo say about Friday lunch?",
          "op": [
            "I don't think so",
            "I am agree",
            "I think that no"
          ],
          "a": 0,
          "por": "I don't think so, honestly."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the scene. Hear it, then say it.",
      "frases": [
        {
          "t": "I reckon we should work from home on Fridays.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I agree up to a point, but a meeting is not the same as lunch together.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'm absolutely certain that the boss will ask about it.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Opinion, reaction, trap. Four quick ones.",
      "regra": "<b>I reckon</b> · <b>I strongly believe</b> · <b>I'm not so sure</b> · <b>I agree up to a point, but</b> · <b>I don't think so</b>. One opinion phrase is enough.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I strongly believe that we need more bike lanes.",
          "aceita": [],
          "d": "Hint: <b>I strongly believe that</b> is a strong opinion."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I am agree with you.",
          "r": "I agree with you.",
          "aceita": [
            "I do agree with you."
          ],
          "d": "Hint: <b>agree</b> is a verb. No <i>am</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one phrase is too much.",
          "mostra": "In my opinion, I think it is too expensive.",
          "r": "In my opinion, it is too expensive.",
          "aceita": [
            "I think it is too expensive."
          ],
          "d": "Hint: one opinion phrase is enough. Take one away."
        },
        {
          "tipo": "escreve",
          "t": "Answer no: fix the reply.",
          "mostra": "Do you like the plan? I think that no.",
          "r": "I don't think so.",
          "aceita": [
            "I do not think so."
          ],
          "d": "Hint: to say no politely, use <b>I don't think so</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Think about a rule at work or at school that you like or dislike. Write 2 or 3 sentences: your opinion, and how you would answer someone who disagrees. Use <b>I reckon</b>, <b>I strongly believe</b> or <b>I agree up to a point, but</b>.",
      "ph": "I reckon that …",
      "ex": "I reckon that homework should be shorter. I strongly believe that students learn better with rest. If you disagree, I agree up to a point, but time to rest matters."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you strongly believe about work or school?",
          "ph": "I strongly believe that …",
          "ex": "I strongly believe that everyone needs one day off a week."
        },
        {
          "q": "A friend says: 'Learning English is easy.' How do you react?",
          "ph": "I agree up to a point, but …",
          "ex": "I agree up to a point, but speaking fast is still hard for me."
        }
      ]
    }
  }
};
