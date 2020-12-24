// navegação entre as imagens e a descrição dos animais

// 1- selecionando os elementos
export default class initTabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';

  }

  // 2-função para alternar as classes que estão em ativo
  
  //ativa o tab de acordo com o index da mesma 
  activeTab(index) {
    this.tabContent.forEach((section) => { // para remover a classe ativo, foi usado o loop foreach
      section.classList.remove(this.activeClass);
    });

    const direcao = this.tabContent[index].dataset.anime;// exercício efeitos do DOM - Dataset
    this.tabContent[index].classList.add(this.activeClass, direcao);// adiciona a classe ativo
  }

  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    if(this.tabMenu.length && this.tabContent.length) {
      //ativar primeiro item
      this.activeTab(0);
      this.addTabNavEvent()
    }
    return this;
  }
}
