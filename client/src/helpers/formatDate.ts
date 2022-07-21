import { format } from "date-fns";

const formatDate = (date: Date) => {
  let dateFormat = format(new Date(date), "MMMM yyyy");
  return dateFormat;
};

const formatDate2 = (date: Date) => {
  let dateFormat = format(new Date(date), "EEE dd.M.yyyy");
  return dateFormat;
};

const formatDateFromNumber = (monthNumber: number) => {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString("en-US", {
    month: "short",
  });
};

export { formatDate, formatDate2, formatDateFromNumber };
