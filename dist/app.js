const menu=document.querySelector('.menu');
const nav=document.querySelector('#nav');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menú');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('pending');observer.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(element=>{element.classList.add('pending');observer.observe(element);});}
const products={black:{title:'Radical / Original',image:'assets/launch-black.jpg',alt:'Camiseta Radical de lanzamiento, diseño naranja sobre negro',post:'Dd-cWpgFVNM'},white:{title:'Radical / Original',image:'assets/launch-white.jpg',alt:'Camiseta Radical Original puesta, vista posterior',post:'Dd-cWpgFVNM'},halloween:{title:'Lift or Die Trying',image:'assets/halloween.jpg',alt:'Camiseta de Halloween con estampado violeta',post:'Deh6TXBlfje'}};
const dialog=document.querySelector('#product-dialog');
let lastProductButton;
document.querySelectorAll('[data-product]').forEach(button=>button.addEventListener('click',()=>{const product=products[button.dataset.product];lastProductButton=button;document.querySelector('#dialog-title').textContent=product.title;const image=document.querySelector('#dialog-image');image.src=product.image;image.alt=product.alt;document.querySelector('#original-post').href=`https://www.instagram.com/radicalapparel2/p/${product.post}/`;dialog.showModal();document.body.style.overflow='hidden';}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.style.overflow='';lastProductButton?.focus();});
document.querySelector('#year').textContent=new Date().getFullYear();
