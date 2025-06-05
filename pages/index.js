import { useEffect, useRef } from 'react';

function Home() {
    const audioRef = useRef(null);

    useEffect(() => {
        // Autoplay após interação do usuário (alguns navegadores bloqueiam autoplay sem clique)
        const playSound = () => {
            if (audioRef.current) {
                audioRef.current.volume = 0.2;
                audioRef.current.play().catch(() => {});
            }
            window.removeEventListener('click', playSound);
        };
        window.addEventListener('click', playSound);
    }, []);

    return (
        <div style={{
            backgroundColor: '#0d0d0d',
            color: '#e0e0e0',
            fontFamily: 'Courier New, monospace',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden',
            textShadow: '0 0 5px #880808',
        }}>
            {/* NÉVOA */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: `url('https://i.imgur.com/BpHrkFb.png') repeat`,
                opacity: 0.07,
                animation: 'fog 60s linear infinite',
                zIndex: 0,
            }} />

            {/* TÍTULO */}
            <h1 style={{
                fontFamily: 'Gothic A1, sans-serif',
                color: '#880808',
                marginBottom: '1rem',
                letterSpacing: '2px',
                fontSize: '2rem',
                zIndex: 1,
            }}>🕯️ CURSO DEV TREVOSO!!</h1>

            {/* ASCII ART */}
            <pre style={{
                whiteSpace: 'pre-wrap',
                lineHeight: '1.1',
                fontSize: '0.85rem',
                zIndex: 1,
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

            {/* SOM AMBIENTE */}
            <audio ref={audioRef} loop>
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" type="audio/mpeg" />
                Seu navegador não suporta áudio.
            </audio>

            {/* CSS ANIMATION */}
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