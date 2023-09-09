import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
  function handleClick() {
    alert('button click')
  }

  const handleClick2 = () => {
    alert('button 2 click')
  }

  const addToFive = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h2>React Core Concepts Part 2</h2>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => alert('third click')}>Click 3</button>
      {/* complex */}
      <button onClick={() => addToFive(5)}>Click four</button>
    </>
  )
}

export default App
