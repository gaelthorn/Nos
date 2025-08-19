
        // Configuração do player de música
        const audio = document.getElementById('backgroundMusic');
        const playPauseBtn = document.getElementById('playPauseBtn');
        const volumeSlider = document.getElementById('volumeSlider');

        // Inicia a música automaticamente com volume baixo
        window.addEventListener('load', function() {
            audio.volume = 0.01; // Volume inicial baixo (20%)
            
            // Tenta tocar automaticamente
            const playPromise = audio.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    // Música começou a tocar automaticamente
                    playPauseBtn.textContent = '⏸️ Pausar';
                }).catch(error => {
                    // Autoplay foi bloqueado, mas tentaremos novamente no primeiro clique
                    console.log('Autoplay bloqueado, aguardando interação do usuário');
                    playPauseBtn.textContent = '▶️ Tocar';
                    
                    // Adiciona listener para primeiro clique na página
                    document.addEventListener('click', function startMusic() {
                        audio.play().then(() => {
                            playPauseBtn.textContent = '⏸️ Pausar';
                        });
                        document.removeEventListener('click', startMusic);
                    }, { once: true });
                });
            }
        });

        // Também tenta tocar quando a página fica visível
        document.addEventListener('visibilitychange', function() {
            if (!document.hidden && audio.paused) {
                audio.play().catch(() => {});
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

        // Função para próxima página
        function nextPage() {
            // AQUI VOCÊ PODE COLOCAR O LINK PARA SUA PRÓXIMA PÁGINA
            window.location.href ='pag2.html';
            // Exemplo: window.location.href = 'proxima-pagina.html';
        }

        // Criação dos corações flutuantes
        function createFloatingHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '♥';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
            
            document.getElementById('heartsContainer').appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 15000);
        }

        // Cria corações flutuantes periodicamente
        setInterval(createFloatingHeart, 3000);
        
        // Cria alguns corações iniciais
        for(let i = 0; i < 5; i++) {
            setTimeout(createFloatingHeart, i * 1000);
        }

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'97167a6ca2c8e10f',t:'MTc1NTU3MzIzOS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();