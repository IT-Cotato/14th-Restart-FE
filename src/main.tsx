import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import { App } from './App';

async function enableMocking() {
  if (!import.meta.env.DEV) return;

  const { worker } = await import('@/mock/browser');
  return worker.start({ onUnhandledFrame: 'bypass' });
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('root 요소를 찾을 수 없습니다.');
}

enableMocking()
  .catch((error: unknown) => {
    console.error('[MSW] 목 서버를 시작하지 못했습니다.', error);
  })
  .then(() => {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
  });
