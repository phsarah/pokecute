import Router from './route/Router';
import GlobalState from './global/GlobalState';
import { ChakraProvider } from "@chakra-ui/react"
import './App.css';

function App() {
  return (
    <div >
      <ChakraProvider>
        <GlobalState>
            <Router/>
        </GlobalState>
        </ChakraProvider>
    </div>
  );
}

export default App;
