import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Providers from 'Providers';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Providers>
        <BrowserRouter>
          <Routes />
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 1500
            }}
          />
        </BrowserRouter>
      </Providers>
    </div>
  );
}

export default App;
