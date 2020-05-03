import React from "react";
import { withStyles, lighten } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const Stats = ({ lang, percent }) => {
  const BorderLinearProgress = withStyles({
    root: {
      height: 8,
      backgroundColor: lighten("#ff6c5c", 0.5),
    },
    bar: {
      borderRadius: 50,
      backgroundColor: "#ff6c5c",
    },
  })(LinearProgress);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h4 style={{ margin: "10px" }}>{lang} </h4>{" "}
      <BorderLinearProgress
        style={{ width: "50%" }}
        variant="determinate"
        color="secondary"
        value={+percent}
      />
    </div>
  );
};

export default Stats;
