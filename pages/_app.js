import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout/>
      <Component {...pageProps} />
    </SSRProvider>
  );
}
