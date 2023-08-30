document.addEventListener('DOMContentLoaded', () => {
    const linkTooltips = document.querySelectorAll('.link-tooltip');
  
    linkTooltips.forEach(link => {
      link.addEventListener('mousemove', e => {
        const tooltip = link.querySelector('::after');
        const offsetX = 15;
        const offsetY = 25;
        tooltip.style.left = e.clientX + offsetX + 'px';
        tooltip.style.top = e.clientY - offsetY + 'px';
      });
    });
  });
  