import { HomePage } from "./pages/HomePage"

import './index.css'
import { DataProvider } from './context/dataContext';
import { ModalProvider } from "./context/modalContext";

const App = () => {
  return (
    <AppState>
      <HomePage />
    </AppState>
  )
}



const AppState: React.FC = ({ children }) => {
  return (
    <DataProvider>
      <ModalProvider>
      {children}
      </ModalProvider>
    </DataProvider>
  )
};


export default App
