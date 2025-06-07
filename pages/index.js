import { useState } from 'react';

export default function Home() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>CURSO DEV TREVOSO<span className="drip" /></h1>

      <pre
        onClick={handleClick}
        style={{
          ...styles.ascii,
          color: clicked ? 'crimson' : '#ccc',
        }}
        title="Clique... se tiver coragem"
      >
{`
         @@@%%%%%%%%%%@@
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
 @_:?_:+_:_:#%
`}
      </pre>

      <style jsx>{`
        .drip::after {
          content: '';
          display: block;
          width: 6px;
          height: 20px;
          margin: 0 auto;
          background: crimson;
          animation: drip 1.2s infinite ease-in-out;
          border-radius: 0 0 50% 50%;
        }

        @keyframes drip {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(10px); opacity: 0.6; }
          100% { transform: translateY(20px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#0a0a0a',
    minHeight: '100vh',
    color: '#ccc',
    fontFamily: "'Courier New', monospace",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '4rem 1rem',
    userSelect: 'none',
  },
  title: {
    fontSize: '2rem',
    color: 'crimson',
    marginBottom: '2rem',
    fontFamily: "'Creepster', cursive", // se quiser importar no _app.js
    textShadow: '0 0 5px crimson, 0 0 10px red',
    textAlign: 'center',
  },
  ascii: {
    fontSize: '13px',
    whiteSpace: 'pre',
    cursor: 'pointer',
    textShadow: '0 0 5px #ff0000aa, 0 0 10px #ff000080',
    transition: 'color 0.3s ease',
  },
};