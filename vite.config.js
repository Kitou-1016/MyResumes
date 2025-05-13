import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"; // 如剛開始時建造專案選擇vue，才會有此行
import requireTransform from "vite-plugin-require-transform";
export default defineConfig({
  plugins: [
    vue(),
    requireTransform({
      fileRegex: /.js$|.vue$/,
    }),
  ],
});
