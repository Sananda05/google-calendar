import { getDate, getDay } from "date-fns";

const Dateview = ({ date }) => {
  return <div className="grid_item">{getDate(date)}</div>;
};

export default Dateview;
