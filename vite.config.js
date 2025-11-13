import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react' // This import is correct

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        
        react(), 
        tailwindcss(),
    ],
})