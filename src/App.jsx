import Header from "./Components/header"
import Main from "./Components/Main"
import Languages from "./data/languages"
function App() {
  return (
    <>
        <Header/>
        <Main languages={Languages}/>
    </>
  )
}
export default App
