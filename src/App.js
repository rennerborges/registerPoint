import React from 'react';
// import Main from './components/Main';

import Teste from './components/teste';

function App() {
  return (
    <div className="App">
      {/* <div style={styles.App}>
        <Main />
      </div> */}
    <Teste/>
    </div>
  );
}

const styles = {
  App: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    backgroundColor: '#e0e0e0',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export default App;
