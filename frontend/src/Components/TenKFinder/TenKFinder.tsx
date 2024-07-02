import { useEffect, useState } from "react";
import { CompanyTenK } from "../../company";
import TenKFinderItem from "./TenKFinderItem/TenKFinderItem";
import { v4 as uuidv4 } from "uuid";
import Spinner from "../Spinner/Spinner";
import { getTenK } from "../../api";

interface Props {
  ticker: string;
}

const TenKFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<CompanyTenK[]>();
  useEffect(() => {
    const getTenKData = async () => {
      const value = await getTenK(ticker!);
      setCompanyData(value!.data);
    };
    getTenKData();
  }, [ticker]);
  return (
    <div className="inline-flex rounded-md shadow-sm m-4">
      {companyData ? (
        companyData?.slice(0, 5).map((tenK) => {
          return <TenKFinderItem key={uuidv4()} tenK={tenK} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default TenKFinder;
