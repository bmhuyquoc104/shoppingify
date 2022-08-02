import { useQueryClient } from "react-query";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { formatDateFromNumber } from "../../helpers/formatDate";
import React, { useEffect } from "react";
import { useGetMonthlySaleByYear } from "../../hooks/useItems";
import {
  ChartSectionStyled,
  ChartSectionSkeletonStyled,
} from "./ChartSection.styled";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ChartSection() {
  // Declare queryClient to get query data
  const queryClient = useQueryClient();
  // use custom hook to get data from input year
  const { mutate, isLoading } = useGetMonthlySaleByYear();

  useEffect(() => {
    const year = { year: 2022 };
    mutate(year);
  }, []);

  // Get the data by the query name
  const arr: any = queryClient.getQueryData([`sale-monthly-items`]);

  // format the month
  const month = formatDateFromNumber(2);

  // set up options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  // set up label for the chart
  const labels = arr
    ?.map((element: any) => formatDateFromNumber(element.month))
    .reverse();
  const dataL = arr?.map((element: any) => element.total).reverse();

  // set up data for the chart
  const data = {
    labels,
    datasets: [
      {
        label: "items",
        lineTension: 0.8,
        data: dataL,
        borderColor: "#F9A109",
        backgroundColor: "#F9A109",
      },
    ],
  };
  return (
    <>
      {isLoading ? (
        <ChartSectionSkeletonStyled></ChartSectionSkeletonStyled>
      ) : (
        <ChartSectionStyled>
          <h2>Monthly Summary</h2>
          <Line height={120} options={options} data={data} />
        </ChartSectionStyled>
      )}
    </>
  );
}

export default ChartSection;
