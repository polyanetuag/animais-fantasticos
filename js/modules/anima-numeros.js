export default class animaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros  = document.querySelectorAll(numeros);
    this.observerTarget  = document.querySelectorAll(observerTarget);
    this.observerClass  = observerClass;

    //bind - o this do objeto ao callback da mutação
    this,this.handleMutation = this.handleMutation.bind(this);
  }

  //recebe um elemento do dom, com numero em seu texto. Incrementa a partir de 0 até o número final
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);

    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total; // para dar corretamente o valor corretamente
        clearInterval(timer);
      }
    }, 25); //* Math.random() - para animar de forma aleatoria
  }

  // ativa incrementar numero para cada numero selecionado do dom
  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));
  }
  
  //função que ocorre quando as mutações ocorrerem
  handleMutation(mutation) { // para que a animação ocorra quando o usuário estiver na tela
    if (mutation[0].target.classList.contains(thisobserverClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  //adiciona o mutationObserver p/ verificar quando a classe ativo é adicionada ao element target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
