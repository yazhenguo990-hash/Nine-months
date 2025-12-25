
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  },
  // 如果你的仓库名不是 username.github.io，请修改下面的 base 为 '/你的仓库名/'
  base: './', 
});
