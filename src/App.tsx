import { Global } from '@emotion/react';

import { Toaster } from './components';
import { ApplicationProvider } from './providers';
import { Routes } from './routes';
import { globalStyles } from './styles';

function App() {
  return (
    <ApplicationProvider>
      <Global styles={globalStyles} />
      <Routes />
      <Toaster />
    </ApplicationProvider>
  );
}

export default App;
