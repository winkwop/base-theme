import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    // Çıktıyı 'dist' yerine 'assets' klasörüne veriyoruz
    outDir: "assets",

    // Assets klasörünü her buildde silme (içinde style.css veya resimler olabilir)
    emptyOutDir: false,

    // Kodları küçült (Minify)
    minify: true,

    lib: {
      entry: path.resolve(__dirname, "src/main.js"),
      name: "WinkwopTheme",
      fileName: () => "theme.bundled.js", // Sabit isim, hash (random sayı) yok!
      formats: ["iife"], // Tarayıcıda doğrudan çalışacak format (Immediately Invoked Function Expression)
    },

    rollupOptions: {
      // Çıktının adını garantiye alalım
      output: {
        entryFileNames: "theme.bundled.js",
        assetFileNames: "theme.[ext]", // CSS çıkarsa buraya
      },
    },
  },
});
