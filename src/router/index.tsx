import { createBrowserRouter } from 'react-router';
import { ErrorFallback } from '@/components/common/ErrorFallback';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';

/**
 * 새 페이지 추가 방법
 * 1. src/pages 에 페이지 컴포넌트를 만든다. (예: src/pages/AboutPage.tsx)
 * 2. 위에서 import 한 뒤, 아래 Layout 의 children 에 라우트를 한 줄 추가한다.
 *      { path: 'about', Component: AboutPage }   // → /about
 *    - path 앞에는 '/' 를 붙이지 않는다. (부모가 '/' 이므로 'about' 이 '/about' 이 된다)
 *    - 하위 경로가 있으면 children 으로 묶고, 부모 경로 자체의 화면은 index: true 로 지정한다.
 *        { path: 'posts', children: [
 *            { index: true, Component: PostListPage },        // /posts
 *            { path: ':postId', Component: PostDetailPage },  // /posts/123
 *        ] }
 *    - 404('*') 라우트는 항상 맨 아래에 둔다.
 * 3. 페이지 간 이동은 <a> 대신 <Link to="/about"> 을 쓴다. (<a> 는 전체 새로고침)
 */

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    errorElement: <ErrorFallback />,
    children: [
      { index: true, Component: HomePage },
      // 새 페이지 라우트는 여기에 추가
      {
        path: '*',
        element: <ErrorFallback title="404" message="요청하신 페이지를 찾을 수 없습니다." />,
      },
    ],
  },
]);
