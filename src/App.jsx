import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import entries from './data.js'

function App() {
  const travelJournalEntries = entries.map((entry) => {
    return (
      <Entry
        key={entry.id}
        obj={entry}
      />
    )
  })

  return (
    <div id="container">
      <Header />
      <div id="entry-container">
        {travelJournalEntries}
      </div>
    </div>
  )
}

export default App
