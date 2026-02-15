// Array de personagens
let personagens = [
    new Personagem('Warrior', 50, 200, 40, true),
    new Personagem('Mage', 80, 120, 20, false),
    new Personagem('Hunter', 60, 150, 30, false),
    new Personagem('Undead', 50, 300, 30, true),
];

let logMessages = [];
const originalLog = console.log;
console.log = function(...args) {
    originalLog.apply(console, args);
    const message = args.join(' ');
    logMessages.push(message);
    atualizarLog();
};

function renderizarPersonagens() {
    const container = document.getElementById('personagens-container');
    container.innerHTML = '';

    personagens.forEach((personagem, index) => {
        const porcentagemVida = (personagem.pontosVida / personagem.vidaMaxima) * 100;
        const escudoClass = personagem.possuiEscudo ? 'escudo-ativo' : '';
        const mortoClass = !personagem.vivo ? 'morto' : '';

        const card = `
            <div class="personagem-card ${escudoClass} ${mortoClass}">
                <div class="personagem-nome">${personagem.nome} ${!personagem.vivo ? '☠️' : ''}</div>
                
                <div class="vida-bar">
                    <div class="vida-fill" style="width: ${porcentagemVida}%">
                        ${personagem.pontosVida}/${personagem.vidaMaxima}
                    </div>
                </div>

                <div class="stat">
                    <span class="stat-label">⚔️ Ataque:</span>
                    <span class="stat-value">${personagem.poderAtaque}</span>
                </div>

                <div class="stat">
                    <span class="stat-label">🛡️ Defesa:</span>
                    <span class="stat-value">${personagem.poderDefesa}</span>
                </div>

                <div class="stat">
                    <span class="stat-label">🛡️ Escudo:</span>
                    <span class="stat-value">${personagem.possuiEscudo ? 'Ativo ✓' : 'Inativo ✗'}</span>
                </div>

                <div class="stat">
                    <span class="stat-label">Status:</span>
                    <span class="stat-value">${personagem.vivo ? 'Vivo 💚' : 'Morto ☠️'}</span>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

function executarAtaque() {
    const atacanteIndex = document.getElementById('atacante').value;
    const alvoIndex = document.getElementById('alvo').value;

    if (atacanteIndex === alvoIndex) {
        alert('Um personagem não pode atacar a si mesmo!');
        return;
    }

    logMessages = [];
    personagens[atacanteIndex].atacar(personagens[alvoIndex]);
    renderizarPersonagens();
}

function toggleEscudoPersonagem() {
    const personagemIndex = document.getElementById('atacante').value;
    logMessages = [];
    personagens[personagemIndex].toggleEscudo();
    renderizarPersonagens();
}

function curarPersonagem() {
    const personagemIndex = document.getElementById('atacante').value;
    logMessages = [];
    personagens[personagemIndex].curar(30);
    renderizarPersonagens();
}

function resetarJogo() {
    personagens = [
        new Personagem('Guerreiro', 50, 200, 40, true),
        new Personagem('Mago', 80, 120, 20, false),
        new Personagem('Arqueiro', 60, 150, 30, false),
        new Personagem('Morto Vivo', 45, 180, 35, true)
    ];
    logMessages = ['Game reseted!'];
    renderizarPersonagens();
    atualizarLog();
}

function atualizarLog() {
    const logContent = document.getElementById('log-content');
    logContent.innerHTML = logMessages.map(msg => 
        `<div class="log-item">${msg}</div>`
    ).join('');
    logContent.scrollTop = logContent.scrollHeight;
}
window.addEventListener('DOMContentLoaded', () => {
    renderizarPersonagens();
});
