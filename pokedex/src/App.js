import Router from './route/Router';
import GlobalState from './global/GlobalState';
import './App.css';

function App() {
  return (
    <div >
        <GlobalState>
            <Router/>
        </GlobalState>
    </div>
  );
}

export default App;
