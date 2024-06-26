import RatioList from "../../Components/RatioList/RatioList";
import Table from "../../Components/Table/Table";

type Props = {};

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>Finshark Design Page</h1>
      <h2>
        This is FinShark's design page. This is where we will house various
        design aspects of the app.
      </h2>
      <RatioList />
      <Table />
    </>
  );
};

export default DesignPage;
