import ScrambleWords from './components/ScrambleWords'
import './App.scss'

function App() {
  return (
    <main className="mainContainer">
      <div className="stickyContainer">
        <ScrambleWords text={'Javier Pizarro Ortega'} />
      </div>
      <div className="movingContainer">HOLIS</div>
    </main>
  )
}

export default App
