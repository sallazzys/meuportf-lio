// ==========================================
// 1. SEÇÃO DE HABILIDADES (CLIQUE NOS BOTÕES)
// ==========================================
const botoesHabilidade = document.querySelectorAll('.btn-habilidade');
const textoDescricao = document.getElementById('textoDescricao');

botoesHabilidade.forEach(botao => {
    botao.addEventListener('click', () => {
        const informacao = botao.getAttribute('data-info');
        textoDescricao.textContent = informacao;
        textoDescricao.classList.remove('text-muted', 'text-white');
        textoDescricao.classList.add('text-danger'); 
    });
});


// ==========================================
// 2. ÁREA DO JAVASCRIPT (REVELAR CONTATO)
// ==========================================
const botaoContato = document.getElementById('btnMensagem');
const respostaJS = document.getElementById('respostaJS');

if (botaoContato && respostaJS) {
    botaoContato.addEventListener('click', () => {
        respostaJS.innerHTML = '📞 Telefone / WhatsApp: <span class="text-danger">(41) 99999-8888</span>';
    });
}


// ==========================================
// 3. ANIMAÇÃO DA BOLA DE BASQUETE & MÚSICA
// ==========================================
const btnArremessar = document.getElementById('btnArremessar');
const bola = document.getElementById('bola');
const btnMusicaFlutuante = document.getElementById('btnMusicaFlutuante');
const minhaMusica = document.getElementById('minhaMusica');

if (btnArremessar && bola) {
    btnArremessar.addEventListener('click', () => {
        bola.classList.add('quicar');
        btnArremessar.disabled = true;

        // Quando a animação de 4 segundos terminar:
        setTimeout(() => {
            bola.classList.remove('quicar');
            btnArremessar.disabled = false;
            
            // Remove a classe 'd-none' do Bootstrap para revelar o botão flutuante
            if (btnMusicaFlutuante) {
                btnMusicaFlutuante.classList.remove('d-none');
            }
        }, 4000);
    });
}

// Ação de clicar no botão flutuante para dar play na música
if (btnMusicaFlutuante && minhaMusica) {
    btnMusicaFlutuante.addEventListener('click', () => {
        minhaMusica.play();
        btnMusicaFlutuante.innerHTML = '🎶 Tocando...';
    });
}