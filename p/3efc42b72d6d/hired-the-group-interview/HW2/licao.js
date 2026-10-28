/* THE GROUP INTERVIEW · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: entrevista em grupo: concordar, somar, discordar com educação, turnos. B1: nenhum português. live-capa e live-conversa (escuras). */
window.HW2 = {
  "id": "hired-the-group-interview",
  "titulo": "The Group Interview",
  "nivel": "B1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "the language of a good team player in a group interview: agree (I agree with ...), build (Building on what ... said), disagree softly (I see it slightly differently, because ...), take and give turns (Can I add something? / What do you think, ...?)",
  "abrir": "In a group task, do you talk first or listen first?",
  "fecho": "Interviewers want the one who listens. <b>Build</b>: <i>Building on what Ana said, ...</i>. <b>Agree</b>: <i>I agree with Ana</i> (never <i>I am agree</i>). <b>Disagree softly</b>: <i>I see it slightly differently, because ...</i>. <b>Turns</b>: <i>Can I add something?</i> <i>What do you think, Bruno?</i>",
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
      "sub": "Mia and Leo talk about her group interview. A new scene, about one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "Sticky notes on a window",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, how was the group interview? Were there many candidates?"
        },
        {
          "quem": "mia",
          "t": "Five. At first, one man talked all the time, and nobody else could speak."
        },
        {
          "quem": "leo",
          "t": "What did you do?"
        },
        {
          "quem": "mia",
          "t": "I waited, and then I said, can I add something?"
        },
        {
          "quem": "leo",
          "t": "Good. And did you agree with the others?"
        },
        {
          "quem": "mia",
          "t": "With one person, yes. I said, building on what Ana said, we could invite the best clients too."
        },
        {
          "quem": "leo",
          "t": "Nice. What about when you disagreed?"
        },
        {
          "quem": "mia",
          "t": "One candidate wanted a discount week. I said, I see it slightly differently, because the budget is small."
        },
        {
          "quem": "leo",
          "t": "Polite, and with a reason. Did the quiet candidate speak?"
        },
        {
          "quem": "mia",
          "t": "Only after I asked, what do you think, Bruno? And he had the best idea!"
        },
        {
          "quem": "leo",
          "t": "That is leadership. They want a team player, not the loudest voice."
        }
      ],
      "perguntas": [
        {
          "q": "What did Mia say when she wanted to speak?",
          "op": [
            "Can I add something?",
            "Be quiet, please",
            "My idea is better"
          ],
          "a": 0,
          "por": "I waited, and then I said, can I add something?"
        },
        {
          "q": "Why did Mia disagree about the discount week?",
          "op": [
            "The budget is small",
            "She doesn't like discounts",
            "Ana said no"
          ],
          "a": 0,
          "por": "I see it slightly differently, because the budget is small."
        },
        {
          "q": "What happened when Mia asked Bruno?",
          "op": [
            "He had the best idea",
            "He left the room",
            "He said no"
          ],
          "a": 0,
          "por": "And he had the best idea!"
        }
      ]
    },
    "out": {
      "sub": "Three lines for a group task. Hear it, then say it.",
      "frases": [
        {
          "t": "Building on what Ana said, we could invite the best clients.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I see it slightly differently, because the budget is small.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "What do you think, Bruno?",
          "img": "../img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Agree, build, take turns. Four quick ones.",
      "regra": "<b>I agree with</b> (no <i>am</i>) · <b>Building on</b> · <b>What do you think ...?</b> · <b>Can I add</b> (no <i>to</i>).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Building on what Ana said, I would add a point.",
          "aceita": [],
          "d": "Hint: credit the other person first, then add your idea."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I am agree with Ana.",
          "r": "I agree with Ana.",
          "aceita": [],
          "d": "Hint: <b>agree</b> is a verb, so no <i>am</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Building in Ana's idea, we need a budget.",
          "r": "Building on Ana's idea, we need a budget.",
          "aceita": [],
          "d": "Hint: it is <b>building on</b>, never <i>building in</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Can I to add something?",
          "r": "Can I add something?",
          "aceita": [],
          "d": "Hint: after <b>can</b>, use the plain verb, no <i>to</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-conversa.webp",
      "leg": "Sticky notes on a dark window",
      "pede": "Look at the picture: sticky notes full of ideas. In a group task, you must choose ONE event for a hotel. Write 2 or 3 sentences: <b>build</b> on an idea, <b>disagree</b> softly, or <b>invite</b> a quiet person.",
      "ph": "Building on what ... said, ...",
      "ex": "Building on Leo's idea, we could invite our best clients to a concert. I see it slightly differently, because a concert is cheaper. What do you think, Mia?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "In a group, do you usually talk first or listen first? Why?",
          "ph": "I usually ... because ...",
          "ex": "I usually listen first, because I want to understand the ideas."
        },
        {
          "q": "How can you invite a quiet person to speak?",
          "ph": "What do you think, ...?",
          "ex": "I can say, what do you think, Ana? We haven't heard from you."
        }
      ]
    }
  }
};
