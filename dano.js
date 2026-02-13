// Sistema de Combate - Modelo de Dano

class Personagem {
  constructor(nome, poderAtaque, pontosVida, poderDefesa, possuiEscudo = false) {
    this.nome = nome;
    this.poderAtaque = poderAtaque;
    this.pontosVida = pontosVida;
    this.vidaMaxima = pontosVida;
    this.poderDefesa = poderDefesa;
    this.possuiEscudo = possuiEscudo;
    this.vivo = true;
  }
  atacar(alvo) {
    if (!this.vivo) {
      console.log(`${this.nome} está morto e não pode atacar!`);
      return null;
    }

    if (!alvo.vivo) {
      console.log(`${alvo.nome} já está morto!`);
      return null;
    }

    console.log(`\n⚔️  ${this.nome} ataca ${alvo.nome}!`);
    console.log(`   Poder de Ataque: ${this.poderAtaque}`);

    const dano = this.calcularDano(alvo);
    alvo.receberDano(dano);

    return dano;
  }
  calcularDano(alvo) {
    let danoBase = this.poderAtaque;
    
    let reducaoDefesa = (alvo.poderDefesa / (alvo.poderDefesa + 100)) * 100;
    let danoAposDefesa = danoBase * (1 - reducaoDefesa / 100);
    
    console.log(`   Defesa de ${alvo.nome}: ${alvo.poderDefesa} (reduz ${reducaoDefesa.toFixed(1)}% do dano)`);

    if (alvo.possuiEscudo) {
      danoAposDefesa *= 0.7;
      console.log(`   🛡️  Escudo ativo! Redução adicional de 30%`);
    }

    const danoFinal = Math.round(danoAposDefesa);
    
    return danoFinal;
  }


  receberDano(dano) {
    this.pontosVida -= dano;
    
    console.log(`   💥 Dano causado: ${dano}`);
    console.log(`   ❤️  Vida de ${this.nome}: ${Math.max(0, this.pontosVida)}/${this.vidaMaxima}`);

    if (this.pontosVida <= 0) {
      this.pontosVida = 0;
      this.vivo = false;
      console.log(`   ☠️  ${this.nome} foi derrotado!`);
    }
  }

  toggleEscudo() {
    this.possuiEscudo = !this.possuiEscudo;
    const status = this.possuiEscudo ? "ativado" : "desativado";
    console.log(`\n🛡️  ${this.nome} ${status} o escudo!`);
  }

  curar(quantidade) {
    const vidaAntes = this.pontosVida;
    this.pontosVida = Math.min(this.pontosVida + quantidade, this.vidaMaxima);
    const vidaCurada = this.pontosVida - vidaAntes;
    console.log(`\n💚 ${this.nome} recuperou ${vidaCurada} pontos de vida!`);
    console.log(`   Vida atual: ${this.pontosVida}/${this.vidaMaxima}`);
  }

  exibirStatus() {
    console.log(`\n📊 Status de ${this.nome}:`);
    console.log(`   ⚔️  Ataque: ${this.poderAtaque}`);
    console.log(`   ❤️  Vida: ${this.pontosVida}/${this.vidaMaxima}`);
    console.log(`   🛡️  Defesa: ${this.poderDefesa}`);
    console.log(`   🛡️  Escudo: ${this.possuiEscudo ? 'Sim' : 'Não'}`);
    console.log(`   Status: ${this.vivo ? 'Vivo' : 'Morto'}`);
  }
}

console.log('='.repeat(50));
console.log('🎮  SISTEMA DE COMBATE - DEMONSTRAÇÃO');
console.log('='.repeat(50));

const guerreiro = new Personagem('Guerreiro', 50, 200, 40, true);
const mago = new Personagem('Mago', 80, 120, 20, false);
const arqueiro = new Personagem('Arqueiro', 60, 150, 30, false);
const mortoVivo = new Personagem('MortoVivo', 50, 300, 30, true);

guerreiro.exibirStatus();
mago.exibirStatus();
arqueiro.exibirStatus();

console.log('\n' + '='.repeat(50));
console.log('⚔️  INÍCIO DO COMBATE');
console.log('='.repeat(50));

mago.atacar(guerreiro);

guerreiro.toggleEscudo(); // Desativa escudo
guerreiro.atacar(mago);

arqueiro.atacar(guerreiro);

mago.atacar(guerreiro);

guerreiro.curar(30);

guerreiro.toggleEscudo(); // Reativa escudo
guerreiro.atacar(mago);

arqueiro.atacar(mago);

console.log('\n' + '='.repeat(50));
console.log('📊 STATUS FINAL');
console.log('='.repeat(50));


guerreiro.exibirStatus();
mago.exibirStatus();
arqueiro.exibirStatus();
mortoVivo.exibirStatus();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Personagem;
}
