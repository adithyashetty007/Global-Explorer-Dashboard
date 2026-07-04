import './App.css';
import { AppProviders } from './providers/AppProviders';

function App() {
  return (
    <AppProviders>
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600">Global Explorer Dashboard</h1>
      </div>
    </AppProviders>
  );
}

export default App;
