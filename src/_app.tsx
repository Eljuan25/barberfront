

import 'bootstrap/dist/css/bootstrap.min.css'; // Importar los estilos de Bootstrap
import '../styles/globals.css'; // Importar otros estilos globales si los tienes

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
