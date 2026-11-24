# 리스타트

소상공인 폐업 통합 관리 플랫폼 리스타트

## 서비스 소개

폐업의 막막함은 덜고, 새로운 시작은 더 쉽게.
폐업은 끝이 아니라, 복잡한 정리 과정의 시작입니다.

## 핵심 기능 (미확정)

- 폐업 일정 관리
- 폐업 가이드 AI
- 지원정보 안내
- 카카오 로그인 지원

## 기술 스택

**Frontend**
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&labelColor=20232a)
![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&labelColor=20232a)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&labelColor=20232a)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white&labelColor=20232a)

**Tools**
![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?logo=eslint&logoColor=white&labelColor=20232a)
![Git](https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white&labelColor=20232a)
![GitHub](https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white&labelColor=20232a)
![Notion](https://img.shields.io/badge/-Notion-000000?logo=notion&logoColor=white&labelColor=20232a)
![Figma](https://img.shields.io/badge/-Figma-F24E1E?logo=figma&logoColor=white&labelColor=20232a)
![Vercel](https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white&labelColor=20232a)

## 팀원 소개

| <img src="https://github.com/Limlim0208.png" width=120 /> | <img src="https://github.com/hyunji726.png" width=120 /> |
| :-------------------------------------------------------: | :------------------------------------------------------: |
|          [임유미](https://github.com/Limlim0208)          |          [장현지](https://github.com/hyunji726)          |
|                          13기 FE                          |                         14기 FE                          |

## 프로젝트 구조

```bash
public/           # 빌드 때 그대로 복사되는 파일 (favicon, 폰트, MSW 워커 등)
src/
├── api/          # axios 인스턴스, 도메인별 API 함수
├── assets/       # 이미지, svg 아이콘
├── components/   # common(공통), layout(화면 틀), 도메인별 컴포넌트
├── constants/    # 에러 코드, 라우트 경로 등 상수
├── hooks/        # 커스텀 훅 (서버 데이터 조회 훅 포함)
├── mock/         # MSW 핸들러, 목 데이터
├── pages/        # 라우트 단위 화면
├── router/       # 라우터 설정 (경로-페이지 연결, 보호 라우트)
├── stores/       # Zustand store
├── styles/       # 전역 스타일, 테마
├── types/        # 타입 정의
├── utils/        # 날짜, cn 등 순수 함수
├── App.tsx
├── main.tsx
└── setupTests.ts   # Vitest 테스트 환경 설정
```

### 새 페이지 추가 방법

1. `src/pages`에 페이지 컴포넌트를 만듭니다. (예: `src/pages/AboutPage.tsx`)
2. `src/router/index.tsx`에서 import한 뒤, `Layout`의 `children`에 라우트를 추가합니다.
   ```tsx
   { path: 'about', Component: AboutPage } // → /about
   ```
   - `path` 앞에는 `/`를 붙이지 않습니다.
   - 하위 경로가 있으면 `children`으로 묶고, 부모 경로의 화면은 `index: true`로 지정합니다.
3. 페이지 이동은 `<a>` 대신 `<Link to="/about">`을 씁니다. (`<a>`는 전체 새로고침)

## 실행 방법

**프로젝트**

```bash
npm install -g pnpm
pnpm install
pnpm dev
```

**StoryBook**

```bash
pnpm storybook
```

## 배포 주소

🔗 [배포 링크](<>)

## Contact

📧 [Gmail](<>)
