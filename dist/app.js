const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.remove('pending'); observer.unobserve(entry.target); }
  }), { threshold: .08 });
  document.querySelectorAll('.reveal').forEach(element => { element.classList.add('pending'); observer.observe(element); });
  reducedMotion.addEventListener('change', event => {
    if (event.matches) { document.querySelectorAll('.pending').forEach(el => el.classList.remove('pending')); observer.disconnect(); }
  });
}
const products = {
  black: { title: 'Radical / Original', image: 'assets/launch-black.jpg', alt: 'Camiseta Radical de lanzamiento, diseño naranja sobre negro', post: 'Dd-cWpgFVNM' },
  halloween: { title: 'Lift or Die Trying', image: 'assets/halloween.jpg', alt: 'Camiseta de Halloween con estampado violeta', post: 'Deh6TXBlfje' }
};
const dialog = document.querySelector('#product-dialog');
const dialogImage = document.querySelector('#dialog-image');
const photoOptions = document.querySelector('.photo-options');
let lastProductButton;
let selectedProduct;
function selectPhoto(view) {
  const lifestyle = view === 'lifestyle' && selectedProduct === products.black;
  dialogImage.src = lifestyle ? 'assets/launch-white.jpg' : selectedProduct.image;
  dialogImage.alt = lifestyle ? 'Camiseta Radical Original puesta, vista posterior' : selectedProduct.alt;
  photoOptions.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.photo === view)));
}
document.querySelectorAll('[data-product]').forEach(button => button.addEventListener('click', () => {
  selectedProduct = products[button.dataset.product];
  lastProductButton = button;
  document.querySelector('#dialog-title').textContent = selectedProduct.title;
  document.querySelector('#original-post').href = `https://www.instagram.com/radicalapparel2/p/${selectedProduct.post}/`;
  photoOptions.hidden = selectedProduct !== products.black;
  selectPhoto('studio');
  dialog.showModal();
  document.body.style.overflow = 'hidden';
}));
photoOptions.querySelectorAll('button').forEach(button => button.addEventListener('click', () => selectPhoto(button.dataset.photo)));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => { document.body.style.overflow = ''; lastProductButton?.focus(); });
const priceCard = document.querySelector('.price-card');
priceCard.addEventListener('pointermove', event => {
  if (event.pointerType !== 'mouse' || reducedMotion.matches) return;
  const rect = priceCard.getBoundingClientRect();
  priceCard.style.setProperty('--glow-x', `${event.clientX - rect.left}px`);
  priceCard.style.setProperty('--glow-y', `${event.clientY - rect.top}px`);
});
document.querySelector('#year').textContent = new Date().getFullYear();
