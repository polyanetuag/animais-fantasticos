export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);

  }
  
  dadosAgora() {
     const dataAgora = new Date();
     this.diaAgora = dataAgora.getDay();
     this.horarioAgora = dataAgora.getUTCHours() - 3;

  }

  estaAberto() {
    this.semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;// verificando o dia de funcionamento
    this.horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1]);
    return this.semanaAberto && this.horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }

}
