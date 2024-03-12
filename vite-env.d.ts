interface ImportMetaEnv {
  readonly VITE_CRYPTO_API_KEY: string;
  readonly VITE_NEWS_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  VITE_NEWS_API_KEY: string;
}
