import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS === 'true' && repositoryName ? `/${repositoryName}/` : '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/recharts/')) return 'recharts'
          if (id.includes('node_modules/victory-vendor/')) return 'd3-vendor'
          if (id.includes('node_modules/d3-')) return 'd3'
        },
      },
    },
  },
})
