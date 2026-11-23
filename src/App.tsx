import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router/dom';
import { queryClient } from '@/api/queryClient';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { ErrorFallback } from '@/components/common/ErrorFallback';
import { router } from '@/router';

export function App() {
  return (
    // 라우트 내부 에러는 errorElement 가 처리하고, 이 경계는 Provider/라우터 자체의 에러를 잡는다.
    <ErrorBoundary
      fallback={() => (
        <ErrorFallback>
          <button
            type="button"
            className="rounded bg-gray-900 px-4 py-2 text-sm text-white"
            onClick={() => {
              window.location.reload();
            }}
          >
            새로고침
          </button>
        </ErrorFallback>
      )}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
