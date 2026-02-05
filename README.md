⚔️ Sistema de Combate - Jogo de RPG
Um sistema de combate interativo desenvolvido em JavaScript puro, com interface visual moderna e animada. Perfeito para jogos de RPG, simulações de batalha ou aprendizado de programação orientada a objetos.

📋 Índice

. Sobre o Projeto
. Funcionalidades
. Demonstração
. Como Usar
. Estrutura do Projeto
. Mecânicas de Combate
. Personagens
. Personalização
. Tecnologias Utilizadas
. Contribuindo
. Licença

🎮 Sobre o Projeto
Este é um sistema de combate completo que simula batalhas entre personagens com diferentes atributos. O sistema calcula dano baseado em ataque, defesa e escudo, oferecendo uma experiência visual rica com animações e feedback em tempo real.
Por que este projeto?

📚 Educacional: Excelente para aprender POO (Programação Orientada a Objetos) em JavaScript
🎨 Visual: Interface moderna com gradientes, animações e efeitos visuais
🔧 Extensível: Fácil de adicionar novos personagens, habilidades e mecânicas
🎯 Prático: Código limpo e bem organizado, seguindo boas práticas

✨ Funcionalidades

✅ Sistema de combate com cálculo de dano dinâmico
✅ Três personagens únicos (Guerreiro, Mago, Arqueiro)
✅ Sistema de escudo com redução adicional de dano
✅ Barra de vida animada em tempo real
✅ Sistema de defesa com redução percentual
✅ Cura de personagens
✅ Log de combate detalhado
✅ Efeitos visuais para escudo ativo e personagens derrotados
✅ Interface responsiva e moderna
✅ Resetar jogo a qualquer momento

🎬 Demonstração
Interface Principal

Cards de personagens com estatísticas em tempo real
Barra de vida com gradiente colorido
Efeito visual de brilho quando o escudo está ativo
Personagens derrotados ficam em escala de cinza

Controles

Seleção de atacante e alvo via dropdown
Botões coloridos com hover effects
Log de combate com histórico de ações

📁 Estrutura do Projeto
sistema-combate/
│
├── index.html          # Estrutura HTML da aplicação
├── style.css           # Estilos e animações
├── dano.js             # Classe Personagem e sistema de combate
├── app.js              # Lógica da interface e controles
└── README.md           # Este arquivo
Descrição dos Arquivos

index.html: Contém a estrutura HTML com os containers para personagens, controles e log
style.css: Todos os estilos visuais, incluindo gradientes, animações e responsividade
dano.js: Classe Personagem com toda a lógica de combate, cálculo de dano e métodos
app.js: Gerencia a interface, renderização de personagens e interações do usuário

⚔️ Mecânicas de Combate
Cálculo de Dano
O dano é calculado seguindo esta fórmula:
javascript1. Dano Base = Poder de Ataque do atacante

2. Redução por Defesa = (Defesa do alvo / (Defesa do alvo + 100)) * 100
   Dano após Defesa = Dano Base * (1 - Redução por Defesa / 100)

3. Se o alvo possui escudo ativo:
   Dano Final = Dano após Defesa * 0.7 (redução adicional de 30%)

4. Dano é arredondado para número inteiro
Exemplo Prático
Guerreiro (50 ataque) ataca Mago (20 defesa, sem escudo):

Dano Base: 50
Redução por Defesa: (20 / 120) * 100 = 16.67%
Dano após Defesa: 50 * 0.8333 = 41.67
Dano Final: 42

Guerreiro (50 ataque) ataca Arqueiro (30 defesa, COM escudo):

Dano Base: 50
Redução por Defesa: (30 / 130) * 100 = 23.08%
Dano após Defesa: 50 * 0.7692 = 38.46
Redução por Escudo: 38.46 * 0.7 = 26.92
Dano Final: 27

👥 Personagens
🛡️ Guerreiro

Ataque: 50
Vida: 200
Defesa: 40
Escudo Inicial: Sim
Estilo: Tank defensivo com boa resistência

🔮 Mago

Ataque: 80
Vida: 120
Defesa: 20
Escudo Inicial: Não
Estilo: Alto dano, baixa defesa (glass cannon)

🏹 Arqueiro

Ataque: 60
Vida: 150
Defesa: 30
Escudo Inicial: Não
Estilo: Balanceado entre ataque e defesa

🎨 Personalização
Adicionar Novo Personagem

Edite o arquivo app.js

Adicione o novo personagem no array inicial:
javascriptlet personagens = [
    new Personagem('Guerreiro', 50, 200, 40, true),
    new Personagem('Mago', 80, 120, 20, false),
    new Personagem('Arqueiro', 60, 150, 30, false),
    new Personagem('Morto Vivo', 45, 180, 35, true)  // NOVO!
];
Adicione também na função resetarJogo():
javascriptfunction resetarJogo() {
    personagens = [
        new Personagem('Guerreiro', 50, 200, 40, true),
        new Personagem('Mago', 80, 120, 20, false),
        new Personagem('Arqueiro', 60, 150, 30, false),
        new Personagem('Morto Vivo', 45, 180, 35, true)  // NOVO!
    ];
    // ...
}

Edite o arquivo index.html

Adicione a opção nos dois selects:
html<select id="atacante">
    <option value="0">Guerreiro</option>
    <option value="1">Mago</option>
    <option value="2">Arqueiro</option>
    <option value="3">Morto Vivo</option> 
</select>
Modificar Cores e Estilos
Edite o arquivo style.css para customizar:

Gradiente de fundo: Linha 7 (body)
Cores dos botões: Classes .btn-atacar, .btn-escudo, etc.
Barra de vida: Classe .vida-fill
Efeito de escudo: Classe .escudo-ativo

Adicionar Novas Habilidades
No arquivo dano.js, adicione novos métodos à classe Personagem:
javascriptclass Personagem {
    // ... código existente ...
    
    // Nova habilidade: Ataque Crítico
    ataqueCritico(alvo) {
        console.log(`\n💥 ${this.nome} usa ATAQUE CRÍTICO!`);
        const dano = this.calcularDano(alvo) * 2;
        alvo.receberDano(dano);
        return dano;
    }
    
    // Nova habilidade: Regeneração
    regenerar() {
        const cura = Math.floor(this.vidaMaxima * 0.1);
        this.curar(cura);
    }
}
🛠️ Tecnologias Utilizadas

HTML5 - Estrutura semântica
CSS3 - Estilos modernos com:

Flexbox e Grid Layout
Gradientes lineares
Transições e animações
Border radius e shadows


JavaScript (ES6+) - Lógica do jogo com:

Classes (POO)
Arrow functions
Template literals
Manipulação do DOM



🤝 Contribuindo
Contribuições são sempre bem-vindas!

Fork o projeto
Crie uma branch para sua feature (git checkout -b feature/NovaHabilidade)
Commit suas mudanças (git commit -m 'Adiciona nova habilidade X')
Push para a branch (git push origin feature/NovaHabilidade)
Abra um Pull Request

Ideias para Contribuição

🎯 Adicionar sistema de níveis e experiência
🎲 Implementar chance de acerto/crítico
🎨 Criar temas visuais alternativos
🔊 Adicionar efeitos sonoros
📱 Melhorar responsividade mobile
🤖 Criar IA para combate automático
💾 Sistema de salvamento de progresso
🏆 Sistema de conquistas

📝 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

📧 Contato
Desenvolvido com ❤️ para a comunidade de desenvolvedores
Se você gostou deste projeto, deixe uma ⭐!

📚 Aprendizados
Este projeto é excelente para estudar:

✅ Programação Orientada a Objetos em JavaScript
✅ Manipulação do DOM
✅ Event Listeners e callbacks
✅ Cálculos matemáticos em jogos
✅ Organização de código em múltiplos arquivos
✅ CSS moderno com animações
✅ Padrões de design (MVC simplificado)


