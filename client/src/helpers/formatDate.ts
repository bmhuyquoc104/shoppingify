import { format } from "date-fns";

const formatDate = (date: Date) => {
  let dateFormat = format(new Date(date), "MMM yyyy");
  return dateFormat;
};

const formatDate2 = (date: Date) => {
  let dateFormat = format(new Date(date), "EEE dd.M.yyyy");
  return dateFormat;
};

export { formatDate, formatDate2 };
