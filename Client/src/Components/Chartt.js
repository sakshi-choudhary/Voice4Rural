import React, { useEffect } from "react";
import Chart from "chart.js";

export default function Chartt(props) {
  useEffect(() => {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Feb 21",
          "Mar 21",
          "April 21",
          "May 21",
          "June 21",
          "July 21",
          "Aug 21",
          "Sep 21",
          "Oct 21",
          "Nov 21",
          "Dec 21",
          "Jan 21",
        ],
        datasets: [
          {
            label: "Forecast Values",
            data: [
              `${props.feb}`,
              `${props.mar}`,
              `${props.apr}`,
              `${props.may}`,
              `${props.jun}`,
              `${props.jul}`,
              `${props.aug}`,
              `${props.sep}`,
              `${props.oct}`,
              `${props.nov}`,
              `${props.dec}`,
              `${props.jan}`,
            ],
          },
        ],
      },
    });
  });
  return (
    <div className="App">
      <canvas id="myChart" width="400" height="400" />
    </div>
  );
}
