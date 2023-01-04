import { render, act } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Summary from "../components/home/Summary";

jest.mock("react-i18next", () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

test("Renders summary component correctly", () => {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <Summary />
    </QueryClientProvider>
  );

  act(() => {
    queryClient.setQueryData("summary", {
      confirmed: 100,
      recovered: 50,
      deaths: 10,
      lastUpdate: "2020-01-01",
    });
  });
});
