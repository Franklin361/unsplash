import { HomePage } from "./pages/HomePage"

import './index.css'

const App = () => {
  return (
    <AppState>
      <HomePage />
    </AppState>
  )
}



const AppState: React.FC = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
};


export default App
