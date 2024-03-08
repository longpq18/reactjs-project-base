import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RecoilRoot } from "recoil";

import AppRoutes from "@/routes";

import "@/translates/i18n";

import MaskLoading from "@/components/mask-loading";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <I18nextProvider i18n={i18next}>
          <AppRoutes />
        </I18nextProvider>
      </RecoilRoot>
      <MaskLoading ref={(ref) => MaskLoading.setInstance(ref)} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
