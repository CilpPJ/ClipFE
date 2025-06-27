import { Global } from '@emotion/react';

import { ApplicationProvider } from './providers';
import { Routes } from './routes';
import { globalStyles } from './styles';

function App() {
  return (
    <ApplicationProvider>
      <Global styles={globalStyles} />
      <Routes />
    </ApplicationProvider>
  );
}

export default App;
