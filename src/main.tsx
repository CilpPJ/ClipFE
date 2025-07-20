import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './index.css';
import './shared/styles/font/fonts.css';
import './shared/theme/reset.css';

async function enableMocking() {
  if (import.meta.env.VITE_API_MOCKING !== 'enabled') {
    return;
  }
  const { worker } = await import('./shared/mocks/settings/browser');

  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
