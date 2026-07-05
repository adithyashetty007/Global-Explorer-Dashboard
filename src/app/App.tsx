import './App.css';
import { AppProviders } from './providers';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
}

export default App;
