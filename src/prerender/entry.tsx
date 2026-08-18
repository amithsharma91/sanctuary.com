import { Suspense } from "react";
import { MemoryRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { AppRoutes } from "../router";
import ErrorBoundary from "../components/feature/ErrorBoundary";
import SiteSchema from "../components/feature/SiteSchema";
import serverI18n from "../i18n/server";

interface PrerenderAppProps {
  path: string;
}

/**
 * Server-side render tree for the static prerender step. Mirrors App.tsx but
 * uses a MemoryRouter pinned to a single path, and the SSR-safe i18n instance.
 */
export function PrerenderApp({ path }: PrerenderAppProps) {
  return (
    <I18nextProvider i18n={serverI18n}>
      <MemoryRouter initialEntries={[path]}>
        <ErrorBoundary>
          <SiteSchema />
          <Suspense fallback={null}>
            <AppRoutes />
          </Suspense>
        </ErrorBoundary>
      </MemoryRouter>
    </I18nextProvider>
  );
}
