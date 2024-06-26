import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import CompanyProfilePage from "../Pages/CompanyProfilePage/CompanyProfilePage";
import IncomeStatementPage from "../Pages/IncomeStatementPage/IncomeStatementPage";
import DesignPage from "../Pages/DesignPage/DesignPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "search", element: <SearchPage /> },
      { path: "design-guide", element: <DesignPage /> },
      {
        path: "company/:ticker",
        element: <CompanyPage />,
        children: [
          { path: "company-profile", element: <CompanyProfilePage /> },
          { path: "income-statement", element: <IncomeStatementPage /> },
        ],
      },
    ],
  },
]);
