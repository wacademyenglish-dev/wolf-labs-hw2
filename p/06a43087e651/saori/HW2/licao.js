/* BEFORE YOU · LIÇÃO DE CASA 2.0 (23/10/2026) · id da plataforma: saori
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: before / after / when + frase inteira ou -ing, nunca TO; sem will depois do nó; when com os dois lados no mesmo tempo.
   A2: dicas em português só nas notas (d). Só as imagens live-* da aula (já escuras).

   A HOMENAGEM À SAORI (memória homenagem-saori; o Carlos pediu "cara nova e com homenagem").
   A HW antiga não tinha a cena; ela entra aqui como um cartão quieto DEPOIS do You e ANTES do resultado:
   quando o motor pinta o resultado, o cartão cobre a tela; "Thank you, Saori" mostra a linha final e
   "See my result" abre o resultado. Os mesmos elementos e textos da cena da aula (aula.js, R.saori):
   a foto REAL ../img/saori.jpg (o arquivo da pasta da aula, sem cópia, sem corte além do círculo, SEM
   filtro: nem cor, nem brilho), o nome, 2013 — 2026, a linha e o botão. Não é exercício, não tem
   timer, não conta ponto, não tem IA. O motor não foi tocado: este bloco só observa o #main.
   Este bloco fica ANTES do window.HW2 (o gera_audio.py e o teste leem o JSON até o fim do arquivo). */
(function () {
  var FOTO = 'https://wolf-labs.pages.dev/p/06a43087e651/saori/img/saori.jpg';
  var st = document.createElement('style');
  st.textContent =
    '.saori-hw{position:fixed;inset:0;z-index:50;display:grid;place-items:center;overflow-y:auto;padding:28px 16px calc(28px + env(safe-area-inset-bottom));background:radial-gradient(520px 420px at 50% 30%,rgba(98,72,200,.18),transparent 70%),#0d0b14;animation:saoriEntra .6s ease}' +
    '.saori-hw .saori{display:grid;justify-items:center;gap:12px;max-width:520px;text-align:center}' +
    '.saori-hw .saori-foto{width:clamp(200px,56vw,280px);aspect-ratio:1;border-radius:50%;overflow:hidden;border:3px solid #4a4036;box-shadow:0 20px 50px rgba(0,0,0,.7)}' +
    '.saori-hw .saori-foto img{width:100%;height:100%;object-fit:cover;display:block;filter:none!important;opacity:1}' +
    '.saori-hw .saori-pre{margin:6px 0 0;font:600 italic 17px/1.4 Manrope,system-ui,sans-serif;color:#958ea8}' +
    '.saori-hw h2{margin:0;font:400 clamp(36px,10vw,52px)/1.1 Gloock,Georgia,serif;letter-spacing:.3em;padding-left:.3em;color:#ece9f4}' +
    '.saori-hw .saori-datas{margin:0;font:700 15px ui-monospace,Menlo,Consolas,monospace;color:#958ea8}' +
    '.saori-hw .saori-linha{margin:8px 0 0;font:600 21px/1.4 Manrope,system-ui,sans-serif;color:#e2a95a}' +
    '.saori-hw .saori-passo{margin:0;font:600 14.5px Manrope,system-ui,sans-serif;color:#958ea8}' +
    '.saori-hw .saori-feito{margin:4px 0 0;font:600 italic 17px Manrope,system-ui,sans-serif;color:#c9c3d8}' +
    '.saori-hw .bt{margin-top:6px}' +
    '@keyframes saoriEntra{from{opacity:0}to{opacity:1}}';
  document.head.appendChild(st);
  function mostra() {
    if (document.querySelector('.saori-hw')) return;
    var c = document.createElement('div');
    c.className = 'saori-hw'; c.setAttribute('role', 'dialog'); c.setAttribute('aria-label', 'Saori');
    c.innerHTML = '<div class="saori"><div class="saori-foto"><img src="' + FOTO + '" alt="Saori"></div>' +
      '<p class="saori-pre">This lesson belongs to a dog called Saori.</p><h2>SAORI</h2><p class="saori-datas">2013 — 2026</p>' +
      '<p class="saori-linha">For every animal that made someone a better person.</p><p class="saori-passo">Read the line out loud, once.</p>' +
      '<div class="saori-fim"><button type="button" class="bt" data-saori="1">Thank you, Saori</button></div></div>';
    document.body.appendChild(c);
    document.documentElement.style.overflow = 'hidden';
    c.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('button') : null; if (!b) return;
      e.stopPropagation();
      if (b.getAttribute('data-saori') === '1') {
        b.parentNode.innerHTML = '<p class="saori-feito">Thirteen years of days like that one.</p><button type="button" class="bt gh" data-saori="2">See my result</button>';
      } else { c.remove(); document.documentElement.style.overflow = ''; window.scrollTo(0, 0); }
    });
  }
  function olha() {
    var m = document.getElementById('main'); if (!m) return;
    var viu = false;
    new MutationObserver(function () {
      var res = !!m.querySelector('.res-topo');
      if (res && !viu) mostra();
      viu = res;
    }).observe(m, { childList: true });
    if (m.querySelector('.res-topo')) { viu = true; mostra(); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', olha); else setTimeout(olha, 0);
})();
window.HW2 = {
  "id": "saori",
  "titulo": "Before You",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/06a43087e651/saori/img/live-d5.webp",
  "alvo": "before / after / when + a whole sentence (before he went out) or -ing (before going out), never to; no will after the knot (after I get home, I'll call you); when keeps both halves in the same tense (when I was a child, we had a dog)",
  "abrir": "What did you do after you got home yesterday?",
  "fecho": "After <b>before</b> and <b>after</b>, a whole sentence (<i>before he went out</i>) or -ing (<i>before going out</i>), never <i>to</i>. After the knot, no <i>will</i>: <i>I’ll call you after I get home</i>. And <b>when</b> keeps both halves in the same tense: <i>When I was a child, we had a dog</i>.",
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
      "sub": "Mia tells Leo about her new dog. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/06a43087e651/saori/img/live-d2.webp",
      "leg": "A dog at a new door",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, how is your new dog?"
        },
        {
          "quem": "mia",
          "t": "She's wonderful. Before she came home, she lived in a shelter for a year."
        },
        {
          "quem": "leo",
          "t": "A whole year? What did she do when she saw your house?"
        },
        {
          "quem": "mia",
          "t": "When she saw the garden, she ran around it three times."
        },
        {
          "quem": "leo",
          "t": "And after that?"
        },
        {
          "quem": "mia",
          "t": "After running in the garden, she drank some water and fell asleep on my sofa."
        },
        {
          "quem": "leo",
          "t": "Before I got my cat, my flat was very quiet."
        },
        {
          "quem": "mia",
          "t": "Same here. Before she arrived, I came home to an empty house. Now she waits at the door."
        },
        {
          "quem": "leo",
          "t": "What will you do when you get home tonight?"
        },
        {
          "quem": "mia",
          "t": "When I get home, I'll take her for a walk. After we walk, I'll give her dinner."
        },
        {
          "quem": "leo",
          "t": "She's a lucky dog."
        },
        {
          "quem": "mia",
          "t": "I think I'm the lucky one."
        }
      ],
      "perguntas": [
        {
          "q": "Where did the dog live before she came home?",
          "op": [
            "In a shelter",
            "In a garden",
            "With Leo"
          ],
          "a": 0,
          "por": "Before she came home, she lived in a shelter for a year."
        },
        {
          "q": "What did she do when she saw the garden?",
          "op": [
            "She ran around it three times",
            "She fell asleep",
            "She waited at the door"
          ],
          "a": 0,
          "por": "When she saw the garden, she ran around it three times."
        },
        {
          "q": "What will Mia do when she gets home tonight?",
          "op": [
            "Take the dog for a walk",
            "Go to the shelter",
            "Call Leo"
          ],
          "a": 0,
          "por": "When I get home, I'll take her for a walk."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about one good day. Hear it, then say it.",
      "frases": [
        {
          "t": "He waited in a shelter before somebody came for him.",
          "img": "https://wolf-labs.pages.dev/p/06a43087e651/saori/img/live-d1.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "When they drove home, he looked out of the window.",
          "img": "https://wolf-labs.pages.dev/p/06a43087e651/saori/img/live-d3.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "After running in the garden, he fell asleep on the sofa.",
          "img": "https://wolf-labs.pages.dev/p/06a43087e651/saori/img/live-d6.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Before, after, when. Four quick ones.",
      "regra": "<b>before / after</b> + a whole sentence or <b>-ing</b> · never <i>before to</i> · no <b>will</b> after the knot · <b>when</b>: both halves in the same tense.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "After she arrived, the house was never quiet.",
          "aceita": [],
          "d": "Dica: depois de <b>after</b>, uma frase inteira: quem chegou? <b>she arrived</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Before to go out, she put on her coat.",
          "r": "Before she went out, she put on her coat.",
          "aceita": [
            "Before going out, she put on her coat."
          ],
          "d": "Dica: depois de <b>before</b>, frase inteira (<i>she went out</i>) ou -ing (<i>going out</i>). Nunca <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'll feed the dog after I will get home.",
          "r": "I'll feed the dog after I get home.",
          "aceita": [],
          "d": "Dica: depois de <b>after</b> / <b>when</b>, sem <b>will</b>: o futuro já está na outra metade (<i>I'll feed</i>)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "When I was a child, we have a cat.",
          "r": "When I was a child, we had a cat.",
          "aceita": [],
          "d": "Dica: uma história no passado: as duas metades no passado, <b>was</b> … <b>had</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/06a43087e651/saori/img/live-d6.webp",
      "leg": "Asleep on the sofa, at the end of a long day",
      "pede": "Look at the picture: a dog asleep on the sofa at the end of a good day. Write 2 or 3 sentences about an animal you know: yours, a friend's or your family's. Use <b>before</b>, <b>after</b> or <b>when</b> with a whole sentence.",
      "ph": "When I was a child, … After she came home, …",
      "ex": "When I was a child, my grandmother had a cat. After she came home from work, the cat always sat on her lap. Before she went to bed, she gave him some food."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you do before you go to bed? And after you wake up?",
          "ph": "Before I go to bed, I … After I wake up, I …",
          "ex": "Before I go to bed, I read a little. After I wake up, I make coffee."
        },
        {
          "q": "Think of an animal or a person who came into your life. What changed after they arrived?",
          "ph": "After … arrived, I …",
          "ex": "After my dog arrived, I started walking every morning."
        }
      ]
    }
  }
};
