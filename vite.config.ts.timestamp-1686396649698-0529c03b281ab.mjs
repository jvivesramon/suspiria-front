// vite.config.ts
import { defineConfig } from "file:///Users/judit/Desktop/FINAL-PROJECT-202304/Judit-Vives-Final-Project-front-202304-bcn/node_modules/vite/dist/node/index.js";
import react from "file:///Users/judit/Desktop/FINAL-PROJECT-202304/Judit-Vives-Final-Project-front-202304-bcn/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    include: ["./src/**/*.test.{ts,tsx}"],
    coverage: {
      provider: "c8",
      reporter: ["lcov", "text"],
      all: true,
      src: ["src"],
      exclude: [
        "**/*.test.{ts,tsx}",
        "**/types.ts",
        "**/*.d.ts",
        "src/routers/appRouter.tsx",
        "src/routers/lazyPages.ts",
        "src/styles/GlobalStyle.ts",
        "src/main.tsx",
        "src/components/App/*.tsx"
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvanVkaXQvRGVza3RvcC9GSU5BTC1QUk9KRUNULTIwMjMwNC9KdWRpdC1WaXZlcy1GaW5hbC1Qcm9qZWN0LWZyb250LTIwMjMwNC1iY25cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9qdWRpdC9EZXNrdG9wL0ZJTkFMLVBST0pFQ1QtMjAyMzA0L0p1ZGl0LVZpdmVzLUZpbmFsLVByb2plY3QtZnJvbnQtMjAyMzA0LWJjbi92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvanVkaXQvRGVza3RvcC9GSU5BTC1QUk9KRUNULTIwMjMwNC9KdWRpdC1WaXZlcy1GaW5hbC1Qcm9qZWN0LWZyb250LTIwMjMwNC1iY24vdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICB0ZXN0OiB7XG4gICAgZ2xvYmFsczogdHJ1ZSxcbiAgICBlbnZpcm9ubWVudDogXCJqc2RvbVwiLFxuICAgIHNldHVwRmlsZXM6IFwiLi9zcmMvc2V0dXBUZXN0cy50c1wiLFxuICAgIGluY2x1ZGU6IFtcIi4vc3JjLyoqLyoudGVzdC57dHMsdHN4fVwiXSxcbiAgICBjb3ZlcmFnZToge1xuICAgICAgcHJvdmlkZXI6IFwiYzhcIixcbiAgICAgIHJlcG9ydGVyOiBbXCJsY292XCIsIFwidGV4dFwiXSxcbiAgICAgIGFsbDogdHJ1ZSxcbiAgICAgIHNyYzogW1wic3JjXCJdLFxuICAgICAgZXhjbHVkZTogW1xuICAgICAgICBcIioqLyoudGVzdC57dHMsdHN4fVwiLFxuICAgICAgICBcIioqL3R5cGVzLnRzXCIsXG4gICAgICAgIFwiKiovKi5kLnRzXCIsXG4gICAgICAgIFwic3JjL3JvdXRlcnMvYXBwUm91dGVyLnRzeFwiLFxuICAgICAgICBcInNyYy9yb3V0ZXJzL2xhenlQYWdlcy50c1wiLFxuICAgICAgICBcInNyYy9zdHlsZXMvR2xvYmFsU3R5bGUudHNcIixcbiAgICAgICAgXCJzcmMvbWFpbi50c3hcIixcbiAgICAgICAgXCJzcmMvY29tcG9uZW50cy9BcHAvKi50c3hcIixcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsWUFBWTtBQUFBLElBQ1osU0FBUyxDQUFDLDBCQUEwQjtBQUFBLElBQ3BDLFVBQVU7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFVBQVUsQ0FBQyxRQUFRLE1BQU07QUFBQSxNQUN6QixLQUFLO0FBQUEsTUFDTCxLQUFLLENBQUMsS0FBSztBQUFBLE1BQ1gsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
