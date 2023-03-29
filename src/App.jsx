import React from 'react'

import './App.css'

function App({ store }) {
  const good = () => {
    store.dispatch({
      type: 'GOOD',
    })
  }

  return (
    <div className="container">
      <main>
        <div>
          <div className="grid">
            <button onClick={good}>good</button>
            <button>ok</button>
            <button>bad</button>
            <button>reset stats</button>
          </div>
          <div>good {store.getState().good}</div>
          <div>ok</div>
          <div>bad</div>
        </div>
      </main>
    </div>
  )
}

export default App
