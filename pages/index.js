import { useEffect, useRef, useState } from 'react';

function Home() {
    const ambientRef = useRef(null);
    const laughRef = useRef(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Detecta o modo noturno com base no horário
        const hour = new Date().getHours();
        setIsDarkMode(hour >= 18 || hour < 6);

        // Inicia o som ambiente após interação do usuário
        const playAmbient = () => {
            if (ambientRef.current) {
                ambientRef.current.volume = 0.3;
                ambientRef.current.play().catch(() => {});
            }
            window.removeEventListener('click', playAmbient);
        };
        window.addEventListener('click', playAmbient);
    }, []);

    const handleClick = () => {
        if (laughRef.current) {
            laughRef.current.currentTime = 0;
            laughRef.current.play().catch(() => {});
        }
    };

    return (
        <div style={{
            backgroundColor: isDarkMode ? '#0d0d0d' : '#f0f0f0',
            color: isDarkMode ? '#e0e0e0' : '#1a1a1a',
            fontFamily: 'Courier New, monospace',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden',
            textShadow: isDarkMode ? '0 0 5px #880808' : 'none',
        }}>
            {/* Efeito de Névoa */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: `url('https://www.vecteezy.com/video/22922687-fog-smoke-mist-vapor-fire-mystery-scene-overlay-background-drifting-clouds') repeat`,
                opacity: 0.07,
                animation: 'fog 60s linear infinite',
                zIndex: 0,
            }} />

            {/* Título */}
            <h1 style={{
                fontFamily: 'Gothic A1, sans-serif',
                color: '#880808',
                marginBottom: '1rem',
                letterSpacing: '2px',
                fontSize: '2rem',
                zIndex: 1,
            }}>🕯️ Arte Gótica</h1>

            {/* Arte ASCII */}
            <pre
                onClick={handleClick}
                style={{
                    whiteSpace: 'pre-wrap',
                    lineHeight: '1.1',
                    fontSize: '0.85rem',
                    zIndex: 1,
                    cursor: 'pointer',
                }}>
{`         @@@%%%%%%%%%%@@
       @@@%%%%%%%%%#######%@@
     @@@@%%%%%%%######?######%@
    @@@@%%%%%%%#######:########%@
  @@@@@%%%%%%#########:??#######%
  @@@%%%%%####???###?+:??####?###@
 @@@%%%%%%#?+???###?:+?##??###?##@
@??%@%%%##????????++:;+?+?????//?#@
#  ;?%#?+; ..::+?+ ::;++++++?+???#@
%  :?%;;;:  ....:#+ :;+++????+???#
#;;+??+++:   ...;##: ;;;++???++?%
%#%+::++?#+;:::;?##+ ;;;;++??++#
%?% : :???+?++???######?+;;+??#
@%# ; ;??;;+ ;???+;;:..::.:+?%
 @???;;?+;;;+ ;:;;......;;;#@
 %##?++?+++;+ ??% @%%@@@@
 @_:?_:+_:_:#%`}
            </pre>

            {/* Áudio Ambiente */}
            <audio ref={ambientRef} loop>
                <source src="https://pixabay.com/sound-effects/message-28358/" type="audio/mpeg" />
                Seu navegador não suporta áudio.
            </audio>

            {/* Áudio da Risada */}
            <audio ref={laughRef}>
                <source src="https://freesound.org/people/Robinhood76/sounds/171168/" type="audio/mpeg" />
                Seu navegador não suporta áudio.
            </audio>

            {/* Animação da Névoa */}
            <style>
                {`
                @keyframes fog {
                    from { background-position: 0 0; }
                    to { background-position: 1000px 0; }
                }
                `}
            </style>
        </div>
    );
}

export default Home;