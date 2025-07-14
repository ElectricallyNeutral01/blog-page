import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8 px-4">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;