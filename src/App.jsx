import React from 'react'

import './App.css'

function App({ store }) {
  const good = () => {
    store.dispatch({
      type: 'GOOD',
    })
  }

  const ok = () => {
    store.dispatch({
      type: 'OK',
    })
  }

  const bad = () => {
    store.dispatch({
      type: 'BAD',
    })
  }

  const reset = () => {
    store.dispatch({
      type: 'ZERO',
    })
  }

  return (
    <div className="container">
      <main>
        <div>
          <div className="grid">
            <button onClick={good}>Good</button>
            <button onClick={ok}>OK</button>
            <button onClick={bad}>Bad</button>
          </div>

          <h2 className="stats-title">Statistics</h2>

          <div className="grid stats">
            <div className="stats-item">
              <h3>Good</h3>
              <span>{store.getState().good}</span>
            </div>
            <div className="stats-item">
              <h3>OK</h3>
              <span>{store.getState().ok}</span>
            </div>
            <div className="stats-item">
              <h3>Bad</h3>
              <span>{store.getState().bad}</span>
            </div>
          </div>

          <button onClick={reset} className="secondary">
            Reset stats
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
