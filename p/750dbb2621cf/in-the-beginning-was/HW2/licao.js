/* IN THE BEGINNING WAS · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: fronting e inversão. Versículos (WEB): John 1:1 (Listen), John 1:4 (Out loud), John 1:5 (Você). Nada da Bíblia é marcado como errado. C1: nenhum português. */
window.HW2 = {
  "id": "in-the-beginning-was",
  "titulo": "In the Beginning Was",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/750dbb2621cf/in-the-beginning-was/img/live-lampada.webp",
  "alvo": "fronting and inversion: place or time first, then the verb before the subject (In him was life; Into the room walked a stranger); negative or restrictive adverbs first (Never have I seen, Not only is it, Only then did he understand, Rarely do we); auxiliary before the subject, never Never I have seen",
  "abrir": "What is the first line of a book or a song you remember?",
  "fecho": "A place or time can come first, with the <b>verb before the subject</b>: <i>In a small shop began my love of words.</i> After <b>Never, Rarely, Not only, Only then, Only after</b>, the auxiliary comes before the subject: <i>Never have I seen it. Only then did he understand.</i>",
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
      "sub": "Mia is stuck on the first line of a speech. She quotes John 1:1. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/750dbb2621cf/in-the-beginning-was/img/live-rolos.webp",
      "leg": "A scroll and a candle",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I've been stuck on the first line of my speech for an hour. It's for my grandfather's birthday."
        },
        {
          "quem": "leo",
          "t": "Never have I seen you stuck. You usually write so fast."
        },
        {
          "quem": "mia",
          "t": "Not only is the speech long, but it also has to be perfect. He taught me everything about books."
        },
        {
          "quem": "leo",
          "t": "Then put something unusual first. Where did it all begin?"
        },
        {
          "quem": "mia",
          "t": "In his small print shop. Hmm... In a small print shop began my love of words."
        },
        {
          "quem": "leo",
          "t": "That sounds like the Bible, actually."
        },
        {
          "quem": "mia",
          "t": "You're right. John 1:1 says, “In the beginning was the Word, and the Word was with God, and the Word was God.” The verb comes before the subject, and the line feels important."
        },
        {
          "quem": "leo",
          "t": "Exactly. Rarely do first lines sound that good."
        },
        {
          "quem": "mia",
          "t": "Only now do I believe I can finish it. Thank you."
        }
      ],
      "perguntas": [
        {
          "q": "Why is Mia stuck?",
          "op": [
            "She can't write the first line of her speech",
            "She forgot her grandfather's birthday",
            "She can't find a print shop"
          ],
          "a": 0,
          "por": "I've been stuck on the first line of my speech for an hour."
        },
        {
          "q": "What does Leo suggest?",
          "op": [
            "Putting something unusual first",
            "Making the speech shorter",
            "Asking her grandfather for help"
          ],
          "a": 0,
          "por": "Then put something unusual first."
        },
        {
          "q": "How does Mia feel at the end?",
          "op": [
            "She believes she can finish the speech",
            "She wants to start again",
            "She is still worried"
          ],
          "a": 0,
          "por": "Only now do I believe I can finish it."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about first lines. The third is from the Bible: John 1:4 (World English Bible). Hear it, then say it.",
      "frases": [
        {
          "t": "Rarely do first lines sound as good as this one.",
          "img": "https://wolf-labs.pages.dev/p/750dbb2621cf/in-the-beginning-was/img/live-rolos.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "In a small print shop began my love of words.",
          "img": "https://wolf-labs.pages.dev/p/750dbb2621cf/in-the-beginning-was/img/live-lampada.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "In him was life, and the life was the light of men.",
          "img": "https://wolf-labs.pages.dev/p/750dbb2621cf/in-the-beginning-was/img/live-lampada.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Which word goes first? Four quick ones.",
      "regra": "<b>Never / Rarely / Only then / Not only</b> + auxiliary + subject · place first: <b>In him was life</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Only after the show did we realize the time.",
          "aceita": [],
          "d": "Hint: <b>Only after ...</b> + auxiliary (<b>did</b>) + subject."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "Never I have seen such a thing.",
          "r": "Never have I seen such a thing.",
          "aceita": [],
          "d": "Hint: after <b>Never</b>, the auxiliary comes before the subject."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "Only then he understood.",
          "r": "Only then did he understand.",
          "aceita": [],
          "d": "Hint: <b>Only then</b> needs <b>did</b> before the subject, and the verb goes back to its plain form."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "Not only it is cheap, but also good.",
          "r": "Not only is it cheap, but also good.",
          "aceita": [],
          "d": "Hint: <b>Not only</b> + <b>is</b> + subject."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/750dbb2621cf/in-the-beginning-was/img/live-lampada.webp",
      "leg": "A small oil lamp on a stone",
      "pede": "Look at the picture: a small oil lamp on a stone. Write the first 2 or 3 lines of a story about this lamp. Put something in front: <b>In a dark cave ...</b>, <b>Never ...</b>, <b>Only when ...</b>. Use at least one inversion.",
      "ph": "In a dark cave burned …",
      "ex": "In a dark cave burned a small lamp. Never had it gone out. Only when morning came did it fade."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "John 1:5 says, “The light shines in the darkness, and the darkness hasn’t overcome it.” Think of a difficult week that ended well. Start with Only, Never or Rarely.",
          "ph": "Only after … did I …",
          "ex": "Only after a long week did I understand how much I need rest."
        },
        {
          "q": "What is the first line of your life story? Put something in front.",
          "ph": "In a small town …",
          "ex": "In a small town by the sea began my story."
        }
      ]
    }
  }
};
