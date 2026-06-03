import React, { useState } from "react";
import "./App.css";
import ColorButton from "./components/ColorButton";
import Counter from "./components/Counter";
import Accordion from "./components/Accordion";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🧪 React Unit Testing Öğrenme Projesi</h1>
        <p>Jest ve React Testing Library ile test yazmayı öğrenin</p>
      </header>

      <main className="app-content">
        <section className="demo-section">
          <h1>Merhaba Dünya</h1>

          <ColorButton />

          <Counter />

          <Accordion />
        </section>

        <section className="info-section">
          <h3>📚 Test Komutları</h3>
          <div className="command-list">
            <div className="command-item">
              <code>npm test</code>
              <span>Testleri çalıştırır</span>
            </div>
            <div className="command-item">
              <code>npm test -- --coverage</code>
              <span>Coverage raporu ile testleri çalıştırır</span>
            </div>
            <div className="command-item">
              <code>npm test -- --watch</code>
              <span>Watch modunda testleri çalıştırır</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
