import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Providers from 'Providers';

function App() {
  return (
    <div className="App">
      <Providers>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Providers>
    </div>
  );
}

export default App;
