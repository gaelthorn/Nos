
        // Configuração do player de música
        const audio = document.getElementById('backgroundMusic');
        const playPauseBtn = document.getElementById('playPauseBtn');
        const volumeSlider = document.getElementById('volumeSlider');
        let revealedPromises = 0;

        // Inicia a música automaticamente
        window.addEventListener('load', function() {
            audio.volume = 0.01; // Volume inicial baixo (25%)
            
            const playPromise = audio.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    playPauseBtn.textContent = '⏸️ Pausar';
                }).catch(error => {
                    console.log('Autoplay bloqueado, aguardando interação do usuário');
                    playPauseBtn.textContent = '▶️ Tocar';
                    
                    document.addEventListener('click', function startMusic() {
                        audio.play().then(() => {
                            playPauseBtn.textContent = '⏸️ Pausar';
                        });
                        document.removeEventListener('click', startMusic);
                    }, { once: true });
                });
            }
        });

        // Controle de play/pause
        playPauseBtn.addEventListener('click', function() {
            if (audio.paused) {
                audio.play();
                playPauseBtn.textContent = '⏸️ Pausar';
            } else {
                audio.pause();
                playPauseBtn.textContent = '▶️ Tocar';
            }
        });

        // Controle de volume
        volumeSlider.addEventListener('input', function() {
            audio.volume = this.value / 100;
        });

        // Função para revelar promessas
        function revealPromise(card, number) {
            if (!card.classList.contains('revealed')) {
                card.classList.add('revealed');
                revealedPromises++;
                updatePromisesCounter();
                
                // Efeito visual especial quando todas as promessas são reveladas
                if (revealedPromises === 3) {
                    setTimeout(() => {
                        document.body.style.animation = 'pulse 2s ease-in-out';
                        setTimeout(() => {
                            document.body.style.animation = '';
                        }, 2000);
                    }, 500);
                }
            }
        }

        // Atualiza contador de promessas
        function updatePromisesCounter() {
            const counter = document.getElementById('promisesCounter');
            if (revealedPromises === 3) {
                counter.textContent = '✨ Todas as promessas foram reveladas! Nosso amor está completo ✨';
                counter.style.color = '#8b2635';
                counter.style.fontWeight = 'bold';
            } else {
                counter.textContent = `Clique nas promessas para revelar nossos juramentos eternos (${revealedPromises}/3 reveladas)`;
            }
        }

        // Navegação entre páginas
        function previousPage() {
            // AQUI VOCÊ PODE COLOCAR O LINK PARA A PÁGINA ANTERIOR
            window.location.href = 'index.html';
            // Exemplo: window.location.href = 'primeira-pagina.html';
        }

        function nextPage() {
            // AQUI VOCÊ PODE COLOCAR O LINK PARA A PRÓXIMA PÁGINA
            window.location.href = 'pag3.html';
            // Exemplo: window.location.href = 'terceira-pagina.html';
        }

        // Criação de pétalas de rosa flutuantes
        function createFloatingPetal() {
            const petal = document.createElement('div');
            petal.className = 'rose-petal';
            petal.innerHTML = '🌹';
            petal.style.left = Math.random() * 100 + '%';
            petal.style.animationDuration = (Math.random() * 15 + 15) + 's';
            petal.style.fontSize = (Math.random() * 10 + 12) + 'px';
            
            document.getElementById('elementsContainer').appendChild(petal);
            
            setTimeout(() => {
                petal.remove();
            }, 20000);
        }

        // Cria pétalas flutuantes periodicamente
        setInterval(createFloatingPetal, 4000);
        
        // Cria algumas pétalas iniciais
        for(let i = 0; i < 3; i++) {
            setTimeout(createFloatingPetal, i * 2000);
        }

        // Efeito de pulsação suave no body
        setInterval(() => {
            if (revealedPromises === 3) {
                document.body.style.filter = 'brightness(1.05)';
                setTimeout(() => {
                    document.body.style.filter = 'brightness(1)';
                }, 1000);
            }
        }, 8000);

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'971a56984406978d',t:'MTc1NTYxMzcxNS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();