# Repository Guidelines

## Project Structure & Module Organization
- `src/` contains the Vue 3 app: views in `src/views/`, shared UI in `src/components/`, routes in `src/router/`, state in `src/store/`, and API wrappers in `src/api/`.
- `src/assets/` holds styles and static assets imported by the app; `public/` is for assets served as-is.
- `vite/` and `vite.config.js` contain build tooling; `index.html` is the Vite entry.
- `html/` and `bin/` exist in the repo; review before editing if you plan to add new templates or scripts.

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run dev` starts the Vite dev server for local development.
- `npm run build:prod` builds a production bundle.
- `npm run build:stage` builds with staging mode (`.env.staging`).
- `npm run preview` serves the production build locally for verification.

## Coding Style & Naming Conventions
- Use 2-space indentation in `.vue`, `.js`, and `.json` files to match existing code.
- Prefer ES module imports and Vue `<script setup>` where already used.
- Keep component and module names clear and scoped (e.g., `UserTable.vue`, `user.js` in `src/api/`).
- ESLint 与 Prettier 为必选项，所有新增/修改文件必须通过 lint 与格式化。

## TypeScript Migration Goals
- 目标：将项目逐步迁移为 `vue3 + typescript`，核心代码从 `.js` 转为 `.ts`，组件脚本使用 `<script setup lang="ts">`。
- 迁移范围：`src/` 下业务代码、工具函数、路由与状态管理先行；构建配置与脚本按需逐步升级。
- 产出标准：新增/改动文件优先使用 TypeScript；关键模块需补齐类型定义与导出类型。

## Migration Notes & 注意事项
- 避免一次性大范围重构，优先按模块分批迁移，保证功能可用。
- 第三方库类型：优先使用官方类型或 `@types/*`，必要时在 `src/types/` 下补充声明文件。
- 保持 API 接口层类型清晰：为请求参数与返回值建立类型/接口，避免 `any`。
- 新增配置请记录在本文件（例如：`tsconfig.json`、`vite` TS 插件、`eslint`/`prettier`）。

## Testing Guidelines
- No testing framework or test scripts are configured in `package.json`.
- If adding tests, document the framework and add scripts (e.g., `npm run test`) and a clear folder such as `tests/` or `src/**/__tests__/`.

## Commit & Pull Request Guidelines
- Git history currently shows simple init-style messages (e.g., `init`, `dev init`), with no formal convention.
- Use short, imperative summaries and include a brief body when changes are non-trivial.
- PRs should describe the change, link related issues, and include screenshots for UI updates.

## Configuration Tips
- Environment files: `.env.development`, `.env.staging`, `.env.production`. Update the correct file for each target.
- Keep secrets out of the repo; use env variables for API endpoints and keys.
