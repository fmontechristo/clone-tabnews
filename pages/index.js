function Home() {
    return (
        <div style={{
            backgroundColor: '#0d0d0d', // fundo preto fosco
            color: '#e0e0e0', // cinza claro para contraste
            fontFamily: 'Courier New, monospace', // monoespaçada
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '2rem',
            textShadow: '0 0 5px #880808', // leve brilho avermelhado
        }}>
            <h1 style={{
                fontFamily: 'Gothic A1, sans-serif',
                color: '#880808',
                marginBottom: '1rem',
                letterSpacing: '2px',
                fontSize: '2rem',
            }}>🕯️ Arte Gótica</h1>
            <pre style={{
                whiteSpace: 'pre-wrap',
                lineHeight: '1.1',
                fontSize: '0.85rem',
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
        </div>
    );
}

export default Home;