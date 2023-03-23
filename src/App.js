
import './App.css'; 
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
<AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
