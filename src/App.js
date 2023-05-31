import React from 'react';
import PowerUsageCalculator from './components/PowerUsageCalculator';

const App = () => {
  return (
    <div className="app">
    <header style={{ display: 'flex', justifyContent: 'center' }}>
      <h1 className="title">KPLC Power Usage Calculator</h1>
    </header>
      <main className="main">
        <PowerUsageCalculator />
      </main>
      <footer style={{ display: 'flex', justifyContent: 'center' }}>
        <p className="footer-text"></p>
      </footer>
    </div>
  );
};

export default App;
