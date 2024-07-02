import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCompanyProfile } from "../../api";
import { CompanyProfile } from "../../company";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Tile from "../../Components/Tile/Tile";
import Spinner from "../../Components/Spinner/Spinner";
import TenKFinder from "../../Components/TenKFinder/TenKFinder";
import { formatRatio } from "../../Helpers/NumberFormatting";

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    getProfileInit();
  }, []);

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" subTitle={company.companyName} />
            <Tile
              title="Price"
              subTitle={"$" + formatRatio(company.price).toString()}
            />
            <Tile
              title="DCF"
              subTitle={"$" + formatRatio(company.dcf).toString()}
            />
            <Tile title="Sector" subTitle={company.sector} />
            <TenKFinder ticker={company.symbol} />
            <p className="br-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4">
              {company.description}
            </p>
          </CompanyDashboard>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CompanyPage;
