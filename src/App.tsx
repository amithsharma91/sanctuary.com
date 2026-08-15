import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import ScrollToTop from "./components/feature/ScrollToTop";
import ScrollProgress from "./components/feature/ScrollProgress";
import FloatingActions from "./components/feature/FloatingActions";
import SiteSchema from "./components/feature/SiteSchema";
import ErrorBoundary from "./components/feature/ErrorBoundary";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <ErrorBoundary>
          <ScrollToTop />
          <ScrollProgress />
          <FloatingActions />
          <SiteSchema />
          <AppRoutes />
        </ErrorBoundary>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;