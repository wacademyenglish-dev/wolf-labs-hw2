/* SALARY TALK · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: salary talk: thank, ask, make the ask; Based on; if we could, I would. B1: nenhum português. Só live-conversa (lum 13). */
window.HW2 = {
  "id": "hired-salary-talk",
  "titulo": "Salary Talk",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/8c4322fe7a3a/hired-salary-talk/img/live-conversa.webp",
  "alvo": "salary talk after an offer: thank first, ask one clarifying question, then make the ask (Based on ..., I'm targeting ...); a conditional to move things forward (If we could ..., I'd ...); Based ON, a month, would after if + past",
  "abrir": "Someone offers you less money than you hoped. What do you say first?",
  "fecho": "The order of a good salary talk: <b>thank</b> (<i>Thank you so much, I'm excited</i>), <b>ask</b> one question (<i>Could you tell me how the bonus works?</i>), then <b>make the ask</b>: <i>Based on my experience, I'm targeting nine thousand a month.</i> It is <b>based on</b>, never <i>based in</i>. To move things forward: <b>If we could ..., I'd ...</b> (<i>would</i>, not <i>will</i>).",
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
      "sub": "Mia and Leo talk about her offer call. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/8c4322fe7a3a/hired-salary-talk/img/live-conversa.webp",
      "leg": "Two cups on a dark table",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you look happy. How was the call with Brightway?"
        },
        {
          "quem": "mia",
          "t": "They made me an offer! Seven thousand five hundred a month. But I was hoping for about nine."
        },
        {
          "quem": "leo",
          "t": "So what did you say first?"
        },
        {
          "quem": "mia",
          "t": "I thanked them. I said, thank you so much, I'm really excited about the role."
        },
        {
          "quem": "leo",
          "t": "Good. Never start with, I'm disappointed. What was next?"
        },
        {
          "quem": "mia",
          "t": "A question. I said, could you tell me how the annual bonus works?"
        },
        {
          "quem": "leo",
          "t": "Smart. And then the ask?"
        },
        {
          "quem": "mia",
          "t": "Based on my five years of experience and the market, I'm targeting nine thousand a month. Is it possible to make up the difference?"
        },
        {
          "quem": "leo",
          "t": "And then?"
        },
        {
          "quem": "mia",
          "t": "I stopped talking. It was very hard, but it worked. They will talk to the director."
        },
        {
          "quem": "leo",
          "t": "Perfect. If they come back with a better number, thank them again."
        },
        {
          "quem": "mia",
          "t": "I will. And if we could add two remote days, I'd be ready to sign this week."
        }
      ],
      "perguntas": [
        {
          "q": "What did Mia say first?",
          "op": [
            "She thanked them",
            "She said she was disappointed",
            "She asked for nine thousand"
          ],
          "a": 0,
          "por": "I thanked them. I said, thank you so much, I'm really excited about the role."
        },
        {
          "q": "What did Mia ask before the ask?",
          "op": [
            "How the annual bonus works",
            "How many remote days there are",
            "Who the director is"
          ],
          "a": 0,
          "por": "I said, could you tell me how the annual bonus works?"
        },
        {
          "q": "What did Mia do after the ask?",
          "op": [
            "She stopped talking",
            "She took a lower number",
            "She asked for more"
          ],
          "a": 0,
          "por": "I stopped talking. It was very hard, but it worked."
        }
      ]
    },
    "out": {
      "sub": "Three lines for an offer call. Hear it, then say it.",
      "frases": [
        {
          "t": "Thank you so much, I'm really excited about the role.",
          "img": "https://wolf-labs.pages.dev/p/8c4322fe7a3a/hired-salary-talk/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Could you tell me how the annual bonus works?",
          "img": "https://wolf-labs.pages.dev/p/8c4322fe7a3a/hired-salary-talk/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Based on the market, I'm targeting nine thousand a month.",
          "img": "https://wolf-labs.pages.dev/p/8c4322fe7a3a/hired-salary-talk/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Thank, ask, then make the ask. Four quick ones.",
      "regra": "<b>Based on</b> + your value · <b>a month</b> · <b>If we could ..., I would ...</b> · thank first, ask one question, then make the ask.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Based on my experience, I'm targeting nine thousand a month.",
          "aceita": [],
          "d": "Hint: start with <b>Based on</b>, then the ask: <b>I'm targeting</b> + the number."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Based in my experience, I am targeting nine thousand.",
          "r": "Based on my experience, I am targeting nine thousand.",
          "aceita": [
            "Based on my experience, I'm targeting nine thousand."
          ],
          "d": "Hint: it is <b>based on</b>, never <i>based in</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If we could start in May, I will sign.",
          "r": "If we could start in May, I would sign.",
          "aceita": [
            "If we could start in May, I'd sign."
          ],
          "d": "Hint: <b>If we could ...</b> needs <b>would</b> in the second part, not <i>will</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I am looking for nine thousand for month.",
          "r": "I am looking for nine thousand a month.",
          "aceita": [
            "I am looking for nine thousand per month.",
            "I'm looking for nine thousand a month.",
            "I'm looking for nine thousand per month."
          ],
          "d": "Hint: a salary is <b>a month</b> or <b>per month</b>, never <i>for month</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/8c4322fe7a3a/hired-salary-talk/img/live-conversa.webp",
      "leg": "Two cups on a dark table",
      "pede": "Look at the picture: two cups on a table, the start of a serious talk. You get a job offer, and you hope for more. Write 2 or 3 sentences: <b>thank</b> them, <b>ask</b> one question, then <b>make the ask</b> with <b>Based on ...</b>.",
      "ph": "Thank you so much for the offer. Could you tell me ...?",
      "ex": "Thank you so much for the offer. Could you tell me how the bonus works? Based on my experience, I'm targeting nine thousand a month."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "A company offers you less than you hoped. What do you say first?",
          "ph": "Thank you so much. I'm ...",
          "ex": "Thank you so much for the offer. I'm really excited about the role."
        },
        {
          "q": "Besides salary, what else could you ask for?",
          "ph": "If we could ..., I'd ...",
          "ex": "If we could add two remote days, I'd be very happy to accept."
        }
      ]
    }
  }
};
