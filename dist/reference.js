const stage = document.querySelector('.radical-stage');
const columns = [...document.querySelectorAll('.word-column')];
const stageMotion = matchMedia('(prefers-reduced-motion: reduce)');
let stageFrame = false;
function updateStage() {
  stageFrame = false;
  const rect = stage.getBoundingClientRect();
  const range = Math.max(1, stage.offsetHeight - innerHeight);
  const progress = stageMotion.matches ? 1 : Math.min(1, Math.max(0, -rect.top / range));
  const factor = innerWidth < 768 ? .5 : 1;
  columns.forEach((column, side) => {
    column.style.opacity = String(.35 + progress * .65);
    column.querySelectorAll('[data-word]').forEach((word, i) => {
      const offset = (side === 0 ? -1 : 1) * (60 + i * 40) * factor * (1 - progress);
      word.style.transform = `translateX(${offset}px)`;
    });
  });
}
function scheduleStage() { if (!stageFrame) { stageFrame = true; requestAnimationFrame(updateStage); } }
addEventListener('scroll', scheduleStage, {passive:true});
addEventListener('resize', scheduleStage);
stageMotion.addEventListener('change', scheduleStage);
updateStage();
const marquee = document.querySelector('.radical-marquee');
const toggle = document.querySelector('.marquee-toggle');
toggle.addEventListener('click', () => {
  const paused = marquee.classList.toggle('paused');
  toggle.setAttribute('aria-pressed', String(paused));
  toggle.setAttribute('aria-label', paused ? 'Reanudar cinta animada' : 'Pausar cinta animada');
  toggle.textContent = paused ? '▷' : 'Ⅱ';
});
