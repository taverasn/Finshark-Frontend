import axios from "axios";
import {
  PortfolioDelete,
  PortfolioGet,
  PortfolioPost,
} from "../Models/Portfolio";
import { handleError } from "../Helpers/ErrorHandler";

const api =
  "https://finshark-frontend20240702155930.azurewebsites.net/api/portfolio/";

export const portfolioAddAPI = async (symbol: string) => {
  try {
    const data = await axios.post<PortfolioPost>(api + `?symbol=${symbol}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const portfolioDeleteAPI = async (symbol: string) => {
  try {
    const data = await axios.delete<PortfolioDelete>(api + `?symbol=${symbol}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const portfolioGetAPI = async () => {
  try {
    const data = await axios.get<PortfolioGet[]>(api);
    return data;
  } catch (error) {
    handleError(error);
  }
};
