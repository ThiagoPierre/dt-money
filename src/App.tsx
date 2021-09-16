import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"
import { useState } from "react"
import Modal from 'react-modal';
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');

const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  

  function handleOpenNewTransacionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransacionModal() {
      setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransacionModal} />
      <Dashboard/>
      <GlobalStyle/>
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransacionModal}
      />
    </TransactionsProvider>
  )
}

export default App

