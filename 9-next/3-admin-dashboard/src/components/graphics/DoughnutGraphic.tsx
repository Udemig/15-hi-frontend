"use client";

import { ChartData } from "@/types";
import { FC } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

interface Props {
  data: ChartData;
}

const DoughnutGraphic: FC<Props> = ({ data }) => {
  return <Doughnut data={data} />;
};

export default DoughnutGraphic;
