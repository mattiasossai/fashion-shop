import type { AppProps } from 'next/app';

// Globale Styles importieren, falls du später Tailwind/andere CSS-Dateien anlegst
// import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
