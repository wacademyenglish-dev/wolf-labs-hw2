/* THE TRUCK WAS WAITING · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past continuous + past simple (was driving when it started). A2: dicas em português só nas notas (d). Só imagens live-* escuras. */
window.HW2 = {
  "id": "the-truck-was-waiting",
  "titulo": "The Truck Was Waiting",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/c2ac5bf27dc8/the-truck-was-waiting/img/live-estrada-noite.webp",
  "alvo": "past continuous + past simple: was / were + -ing for the long action, the past simple for the short one that cuts in (when); the workers WERE, Dale WAS; a state verb stays simple (knew, not was knowing); questions: What were you doing?",
  "abrir": "What were you doing at nine last night?",
  "fecho": "The long action: <b>was / were + -ing</b>. The short one that cuts in: the <b>past simple</b>. <i>The truck was driving when it started to snow.</i> More than one person: <b>were</b>. A state stays simple: <i>Dale knew the address</i>. The question: <i>What were you doing?</i>",
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
      "sub": "Mia and Leo in a warehouse office. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/c2ac5bf27dc8/the-truck-was-waiting/img/live-porta.webp",
      "leg": "A door in the snow",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the order for Oriel Street is three days late. What happened?"
        },
        {
          "quem": "mia",
          "t": "On Monday the truck was driving to Chicago when it started to snow."
        },
        {
          "quem": "leo",
          "t": "And on Wednesday?"
        },
        {
          "quem": "mia",
          "t": "The workers were loading the ovens when the forklift broke."
        },
        {
          "quem": "leo",
          "t": "Was Dale at the right door?"
        },
        {
          "quem": "mia",
          "t": "No. He was waiting at Gate B, but the restaurant team was waiting at the front door."
        },
        {
          "quem": "leo",
          "t": "Did he call them?"
        },
        {
          "quem": "mia",
          "t": "He was calling the old number. Nobody was answering."
        },
        {
          "quem": "leo",
          "t": "So what do I tell the owner?"
        },
        {
          "quem": "mia",
          "t": "Tell her the truck arrives today at twelve, at the front door."
        }
      ],
      "perguntas": [
        {
          "q": "What was the truck doing when it started to snow?",
          "op": [
            "It was driving to Chicago",
            "It was loading ovens",
            "It was waiting at Gate B"
          ],
          "a": 0,
          "por": "The truck was driving to Chicago when it started to snow."
        },
        {
          "q": "What broke on Wednesday?",
          "op": [
            "The forklift",
            "The truck",
            "The phone"
          ],
          "a": 0,
          "por": "The workers were loading the ovens when the forklift broke."
        },
        {
          "q": "Where was Dale waiting?",
          "op": [
            "At Gate B",
            "At the front door",
            "In Chicago"
          ],
          "a": 0,
          "por": "He was waiting at Gate B."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the delay. Hear it, then say it.",
      "frases": [
        {
          "t": "The truck was driving when it started to snow.",
          "img": "https://wolf-labs.pages.dev/p/c2ac5bf27dc8/the-truck-was-waiting/img/live-estrada-noite.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The workers were loading the ovens when the forklift broke.",
          "img": "https://wolf-labs.pages.dev/p/c2ac5bf27dc8/the-truck-was-waiting/img/live-armazem.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Dale was waiting at Gate B.",
          "img": "https://wolf-labs.pages.dev/p/c2ac5bf27dc8/the-truck-was-waiting/img/live-portao.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "was or were? Long action or short? Four quick ones.",
      "regra": "<b>was / were + -ing</b> = the long action · the <b>past simple</b> = the short one that cuts in · <b>were</b> with more than one · <b>knew</b>, not <i>was knowing</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "What were you doing when the truck arrived?",
          "aceita": [],
          "d": "Dica: pergunta: <b>What were you</b> + verbo com <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The workers was loading the ovens.",
          "r": "The workers were loading the ovens.",
          "aceita": [],
          "d": "Dica: vários trabalhadores pedem <b>were</b>, não <i>was</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one verb is wrong.",
          "mostra": "Dale was knowing the address.",
          "r": "Dale knew the address.",
          "aceita": [],
          "d": "Dica: <b>know</b> é verbo de estado: fica no passado simples, <b>knew</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the question is wrong.",
          "mostra": "What you were doing at six?",
          "r": "What were you doing at six?",
          "aceita": [],
          "d": "Dica: na pergunta, <b>were</b> vem antes de <b>you</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/c2ac5bf27dc8/the-truck-was-waiting/img/live-armazem.webp",
      "leg": "A dark warehouse aisle with a forklift",
      "pede": "Look at the picture: a warehouse at night. Write 2 or 3 sentences about a delay: what <b>was happening</b> and what <b>happened</b>. Use <b>was / were + -ing</b> and <b>when</b>.",
      "ph": "The truck was driving when …",
      "ex": "The truck was driving to Chicago when it started to snow. The workers were waiting at the front door. Dale knew the address."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What were you doing at nine last night?",
          "ph": "At nine I was …",
          "ex": "At nine last night I was cooking dinner."
        },
        {
          "q": "Were you ever late for something? What were you doing when you saw the time?",
          "ph": "I was … when I saw the time.",
          "ex": "I was watching TV when I saw the time."
        }
      ]
    }
  }
};
