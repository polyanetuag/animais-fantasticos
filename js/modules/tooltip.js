export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    //bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  //move a ttoltip com base em seus estilos, de acordo com a posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if(event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  };
  
  // remove a tooltip e os eventos de mousemove e mouseleave
  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave); // para remover o evento
    event.currentTarget.removeEventListener('mousemove', this.onMouseMove);// para remover o evento
  };
  
  // cria a tooltip box e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  //cria a tooltip e adiciona os eventos de mouvemove e mouseleave ao target
  onMouseOver(event) {
    // cria a tooltipbox e coloca em uma propriedade
    this.criarTooltipBox(event.currentTarget);
    event.currentTarget.addEventListener('mousemove', this.onMouseMove);
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  //adiciona os eventos de mouseover a cada tooltip
  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }

  
}
