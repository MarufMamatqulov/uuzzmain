import "@/styles/globals.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import MediaQueryProvider from "@/context/MediaQueryProvider";
import { LanguageProvider } from "@/context/LanguageProvider";

import MainLayout from "@/layouts/MainLayout/MainLayout";

const App = ({ Component, pageProps }) => {
  return (
    <MediaQueryProvider>
      <LanguageProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </LanguageProvider>
    </MediaQueryProvider>
  );
};

export default App;
