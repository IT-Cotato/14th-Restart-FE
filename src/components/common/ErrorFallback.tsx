import type { ReactNode } from 'react';

type ErrorFallbackProps = {
  title?: string;
  message?: string;
  /** 새로고침, 다시 시도, 홈으로 이동 등의 액션 영역 */
  children?: ReactNode;
};

export function ErrorFallback({
  title = '문제가 발생했습니다',
  message = '잠시 후 다시 시도해 주세요.',
  children,
}: ErrorFallbackProps) {
  return (
    <div
      role="alert"
      className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center"
    >
      <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
      <p className="text-sm text-gray-600">{message}</p>
      {children}
    </div>
  );
}
