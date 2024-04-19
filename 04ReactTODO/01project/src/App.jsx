import Createtodo from "./Components/Createtodo"
import Todos from "./Components/Todos"

function App() {
  return (
    <>
    <Createtodo />
    <Todos todos={
      [
        {
          tittle : "GYM",
          description : "go to GYM!",
          complete : false
        }
      ]
    } />
    </>
  )
}

export default App
