import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"

const App = () => {
  return (
    <>
      <Header />
      <Dashboard></Dashboard>
      <GlobalStyle></GlobalStyle>
    </>
  )
}

export default App

