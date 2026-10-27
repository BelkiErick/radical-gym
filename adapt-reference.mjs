import {readFile,writeFile} from 'node:fs/promises';
let html=await readFile('dist/index.html','utf8');
html=html.replace(/<header class="header">[\s\S]*?<\/header>/,'').replace('<div class="reading-progress" aria-hidden="true"></div>','');
html=html.replace(/<a class="mobile-join"[\s\S]*?<\/a>/,'');
const words=['FUERZA','ACTITUD','SUPÉRATE','RADICAL','ENTRENA','CRECE','AVANZA','SIN LÍMITES'];
const column=(side,items)=>`<div class="word-column ${side}" aria-hidden="true">${items.map((word,i)=>`<span data-word="${i}">${word}</span>`).join('')}</div>`;
const hero=`<section class="radical-stage" id="inicio" aria-label="Radical Gym. Fuerza, actitud y superación.">
  <div class="stage-sticky">
    <div class="stacked-title"><span class="title-layer layer-back" aria-hidden="true">RADICAL</span><span class="title-layer layer-gap" aria-hidden="true">RADICAL</span><span class="title-layer layer-middle" aria-hidden="true">RADICAL</span><h1>RADICAL<span class="sr-only"> Gym en Pifo</span></h1></div>
    <div class="stage-words">${column('words-left',words.slice(0,4))}${column('words-right',words.slice(4))}</div>
  </div>
  <div class="stage-character" aria-hidden="true"><img src="assets/beyond-character.webp" alt="" fetchpriority="high" width="1280" height="724"></div>
</section>`;
const marqueeText='FUERZA · ACTITUD · ENTRENA · CRECE · SUPÉRATE · PIFO · RADICAL · ';
const marquee=`<div class="radical-marquee" aria-label="Fuerza. Actitud. Entrena. Crece. Supérate. Pifo. Radical."><div class="radical-track" aria-hidden="true">${Array.from({length:4},()=>`<span>${marqueeText}</span>`).join('')}</div><button class="marquee-toggle" aria-label="Pausar cinta animada" aria-pressed="false">Ⅱ</button></div>`;
const first=html.indexOf('<section class="hero"');const end=html.indexOf('<section class="club section"');
if(first<0||end<first)throw new Error('Expected hero structure not found');
html=html.slice(0,first)+hero+'\n'+marquee+'\n'+html.slice(end);
html=html.replace('<link rel="stylesheet" href="refinement.css">','<link rel="stylesheet" href="refinement.css"><link rel="stylesheet" href="reference.css">');
html=html.replace('family=DM+Sans:wght@400;500;600;700&display=swap','family=DM+Sans:wght@400;500;600;700&family=Poppins:wght@500&display=swap');
html=html.replace('name="theme-color" content="#101010"','name="theme-color" content="#EC612C"');
await writeFile('dist/index.html',html);
let js=await readFile('dist/app.js','utf8');
const reveal=js.indexOf("if ('IntersectionObserver'");
js="const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');\n"+js.slice(reveal);
const ticker=js.indexOf("const ticker =");const card=js.indexOf("const priceCard =");
js=js.slice(0,ticker)+js.slice(card);
await writeFile('dist/app.js',js);
