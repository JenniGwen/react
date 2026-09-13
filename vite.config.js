//pakai yg single page application (SPA)
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
//tambahin files html sini
export default defineConfig({
  plugins: [react()],
  // build: {
  //   rollupOprions: {
  //     input: {
  //       index: "index.html",
  //       HelloWorld: "HelloWorld.html"
  //     }
  //   }
  // }
})

//klo multi page application hrs buat main.jsx di tiap component + html file tiap component
//trus nnti uncomment yg build & rollUpOptions
//biasanya utk debug tiap component
//tp krn utk routing biasanya SPA n seterusnya mau buat prototype yg berlanjutan di tiap sesi, jd pakai SPA
