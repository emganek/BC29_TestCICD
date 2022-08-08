import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import { Suspense } from 'react';
import { LoadingContextProvider } from './contexts/loading.context';
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <LoadingContextProvider>
          <Router />
        </LoadingContextProvider>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
