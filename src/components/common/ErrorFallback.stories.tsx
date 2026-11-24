import type { Meta, StoryObj } from '@storybook/react-vite';
import { ErrorFallback } from './ErrorFallback';

const meta = {
  title: 'Common/ErrorFallback',
  component: ErrorFallback,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ErrorFallback>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomMessage: Story = {
  args: {
    title: '페이지를 찾을 수 없습니다',
    message: '주소를 다시 확인해 주세요.',
  },
};

export const WithActions: Story = {
  args: {
    children: (
      <div className="flex gap-2">
        <button
          className="rounded bg-gray-900 px-4 py-2 text-sm text-white"
          onClick={() => window.location.reload()}
        >
          새로고침
        </button>
        <button className="rounded border border-gray-300 px-4 py-2 text-sm text-gray-700">
          홈으로 이동
        </button>
      </div>
    ),
  },
};
