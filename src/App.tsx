import {
  Outlet,
  RouterProvider,
  createReactRouter,
} from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { routeConfig } from "./routes";

const router = createReactRouter({ routeConfig });
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <div className="min-h-screen" style={{ backgroundColor: "#1e293b" }}>
          <Header />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <Outlet />
          </main>
          <Footer />
        </div>
      </RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
