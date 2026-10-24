/* THE SMALL PRINT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: contract language (shall, prior to, subject to, liable for). C1: zero portugues. */
window.HW2 = {
  "id": "the-small-print",
  "titulo": "The Small Print",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/1a0b46a14d3a/the-small-print/img/live-capa.webp",
  "alvo": "contract language read and explained in plain English: shall = must (an obligation, not the future); shall not; prior to + noun / -ing; subject to = only if; be liable for; upon + -ing; provided that; notwithstanding",
  "abrir": "Think of the last contract or terms you accepted. Did you read every line?",
  "fecho": "Read it like a lawyer, explain it like a friend. <b>shall</b> = <i>must</i>: an obligation, never a prediction, and no <i>to</i> after it. <b>Prior to</b> + noun or <b>-ing</b>: <i>prior to signing</i>. <b>Subject to</b> = only if. <b>Liable for</b> = responsible for paying.",
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
  "rate": "-8%",
  "rodadas": {
    "listen": {
      "sub": "Mia helps Leo read a tenancy agreement. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/1a0b46a14d3a/the-small-print/img/live-conversa.webp",
      "leg": "A quiet waiting room",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the landlord wants me to sign this tenancy agreement today. Can you read it with me?"
        },
        {
          "quem": "mia",
          "t": "Sure. Clause three says: the Tenant shall pay the rent prior to the fifth of each month. That's an obligation, not a prediction."
        },
        {
          "quem": "leo",
          "t": "So shall just means must. I always read it as a future."
        },
        {
          "quem": "mia",
          "t": "Most people do. Now look at this: the deposit shall be returned within thirty days, subject to a final inspection."
        },
        {
          "quem": "leo",
          "t": "Subject to? That sounds like a promise to me."
        },
        {
          "quem": "mia",
          "t": "It isn't. It means the deposit comes back only if the flat passes the inspection."
        },
        {
          "quem": "leo",
          "t": "And this one? The Landlord shall not be liable for any loss of personal belongings."
        },
        {
          "quem": "mia",
          "t": "In plain English: if something of yours is stolen, he doesn't have to pay for it."
        },
        {
          "quem": "leo",
          "t": "That's a big deal. I should ask him to change it before I sign."
        },
        {
          "quem": "mia",
          "t": "Good. Ask in writing, and the clause can be changed, provided that both sides sign the new version."
        },
        {
          "quem": "leo",
          "t": "Provided that both sides sign. Got it. Prior to signing anything, I'll ask what I don't understand."
        }
      ],
      "perguntas": [
        {
          "q": "What does shall mean in clause three?",
          "op": [
            "The tenant must pay: it is an obligation",
            "The tenant will probably pay",
            "The tenant may pay if he wants"
          ],
          "a": 0,
          "por": "That's an obligation, not a prediction."
        },
        {
          "q": "When does the deposit come back?",
          "op": [
            "Only if the flat passes a final inspection",
            "Always, within thirty days",
            "Only if the landlord agrees"
          ],
          "a": 0,
          "por": "It means the deposit comes back only if the flat passes the inspection."
        },
        {
          "q": "What does the liability clause mean in plain English?",
          "op": [
            "The landlord does not pay if your things are stolen",
            "The landlord must pay for stolen belongings",
            "The tenant pays for all repairs"
          ],
          "a": 0,
          "por": "If something of yours is stolen, he doesn't have to pay for it."
        }
      ]
    },
    "out": {
      "sub": "Three lines of small print. Hear it, then say it.",
      "frases": [
        {
          "t": "The tenant shall give written notice prior to leaving the flat.",
          "img": "https://wolf-labs.pages.dev/p/1a0b46a14d3a/the-small-print/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The deposit will be returned, subject to a satisfactory inspection.",
          "img": "https://wolf-labs.pages.dev/p/1a0b46a14d3a/the-small-print/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The landlord shall not be liable for damage caused by the tenant.",
          "img": "https://wolf-labs.pages.dev/p/1a0b46a14d3a/the-small-print/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Read the contract, fix the English. Four quick ones.",
      "regra": "<b>shall</b> + plain verb (no <b>to</b>) · <b>prior to</b> + <b>-ing</b> · <b>subject to</b> (never subject of) · <b>liable for</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Prior to signing the contract, please read every clause.",
          "aceita": [],
          "d": "Hint: <b>prior to</b> is followed by a noun or the <b>-ing</b> form."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Prior to sign the lease, ask questions.",
          "r": "Prior to signing the lease, ask questions.",
          "aceita": [
            "Prior to signing the lease ask questions."
          ],
          "d": "Hint: <b>prior to</b> is a preposition, so the verb after it takes <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The tenant shall to pay the rent.",
          "r": "The tenant shall pay the rent.",
          "aceita": [
            "The tenant must pay the rent."
          ],
          "d": "Hint: after <b>shall</b>, like after any modal verb, the plain verb: no <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The deposit is subject of a final inspection.",
          "r": "The deposit is subject to a final inspection.",
          "aceita": [],
          "d": "Hint: the fixed phrase is <b>subject to</b>, meaning it depends on."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/1a0b46a14d3a/the-small-print/img/live-capa.webp",
      "leg": "A sealed document and an old key",
      "pede": "Look at the picture: a sealed document and an old key. Write 2 or 3 sentences: explain in plain English one rule you have agreed to (a lease, a phone plan, a gym). Use <b>shall</b>, <b>prior to</b> or <b>subject to</b> for the legal version, then say it simply.",
      "ph": "The contract says I must … prior to …",
      "ex": "My gym contract says I must give thirty days' notice prior to cancelling. The price is subject to change. In plain English, they can raise it, but they have to tell me first."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Have you ever signed something without reading it properly? What happened?",
          "ph": "I once signed … without …",
          "ex": "I once accepted a phone plan without reading it. Prior to renewing, I realised the price had doubled."
        },
        {
          "q": "Explain one rule of your phone plan, gym or rental in plain English.",
          "ph": "In plain English, it means …",
          "ex": "In plain English, my phone plan means I pay a fee if I leave early."
        }
      ]
    }
  }
};
