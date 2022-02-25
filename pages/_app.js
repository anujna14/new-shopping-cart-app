import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../Redux/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="flex flex-col h-full">
        <ToastContainer />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}

export default MyApp;
