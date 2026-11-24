import type { Meta, StoryObj } from '@storybook/react-vite';
import { ErrorFallback } from './ErrorFallback';

const meta = {
  title: 'Common/ErrorFallback',
  component: ErrorFallback,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '에러가 발생했을 때 ErrorBoundary의 `fallback`으로 보여주는 화면입니다. 제목과 안내 문구를 바꿀 수 있고, children으로 새로고침·홈 이동 같은 액션 영역을 넣을 수 있습니다.',
      },
      story: {
        inline: false, // min-h-screen 때문에 문서 페이지가 길어지는 것을 방지
        iframeHeight: 320,
      },
    },
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
