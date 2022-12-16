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
        <div className="flex justify-center">
          <div className="container">
            <Header />
            <main className="p-8 border-b-2 border-gray-100">
              <Outlet />
            </main>

            <Footer />
          </div>
        </div>
      </RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
