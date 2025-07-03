import { Global } from '@emotion/react';

import { ApplicationProvider } from './app/providers';
import { Routes } from './app/routes';
import { Toaster, globalStyles } from './shared';

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
