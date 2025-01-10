/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";
import path from "path";

const config: Config = {
  globals: {
    __IS_DEV__: true,
  },
  clearMocks: true,
  testEnvironment: "jest-environment-jsdom", // Используйте jsdom для DOM-тестов
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  moduleDirectories: ["node_modules"],
  modulePaths: ["<rootDir>/src"], // Добавлено для поддержки абсолютных путей
  testMatch: ["<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)"],
  rootDir: "../../",
  setupFilesAfterEnv: ["<rootDir>/config/jest/setupTests.ts"], // Убедитесь, что файл существует
  moduleNameMapper: {
    "\\.(scss|css)$": "identity-obj-proxy", // Моки для SCSS
    "\\.svg$": path.resolve(__dirname, "jestEmptyComponent.tsx"), // Мок для SVG
    "\\.(jpg|jpeg|png|gif|webp|avif|ico|bmp|tiff)$": "jest-transform-stub",
    "^shared/(.*)$": "<rootDir>/src/shared/$1", // Алиас для shared
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Для обработки TypeScript
  },
  transformIgnorePatterns: ["\\\\node_modules\\\\", "\\.pnp\\.[^\\\\]+$"],
};

export default config;
