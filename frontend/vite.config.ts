import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import pluginRewriteAll from 'vite-plugin-rewrite-all';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.API_BASEURL': JSON.stringify(env.API_BASEURL),
      'process.env.TOAST_AUTO_DELETE': JSON.stringify(env.TOAST_AUTO_DELETE),
      'process.env.TOAST_AUTO_DELETE_TIME': JSON.stringify(env.TOAST_AUTO_DELETE_TIME),
      'process.env.EMAILJS_SERVICE_ID': JSON.stringify(env.EMAILJS_SERVICE_ID),
      'process.env.EMAILJS_TEMPLATE_ID': JSON.stringify(env.EMAILJS_TEMPLATE_ID),
      'process.env.EMAILJS_PUBLIC_KEY': JSON.stringify(env.EMAILJS_PUBLIC_KEY),
    },
    plugins: [
      react(),
      pluginRewriteAll(),
    ],
    resolve: {
      alias: {
        src: "/src",
      }
    }
  };
});
