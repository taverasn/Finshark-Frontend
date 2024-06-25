import { SyntheticEvent } from "react";
import CardPortfolio from "../CardPortfolio/CardPortfolio";
import { v4 as uuidv4 } from "uuid";

interface Props {
  portfolioValues: string[];
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const ListPortfolio = ({ portfolioValues, onPortfolioDelete }: Props) => {
  return (
    <>
      <h3>My Portfolio</h3>
      <ul>
        {portfolioValues &&
          portfolioValues.map((portfolioValue) => {
            return (
              <CardPortfolio
                portfolioValue={portfolioValue}
                key={uuidv4()}
                onPortfolioDelete={onPortfolioDelete}
              />
            );
          })}
      </ul>
    </>
  );
};

export default ListPortfolio;
