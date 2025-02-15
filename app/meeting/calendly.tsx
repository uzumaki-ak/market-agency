"use client";

import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="w-full">
      <InlineWidget
        styles={{ minHeight: "600px", height: "1000px" }}
        url="https://calendly.com/d/cnfm-gds-w5w/one-off-meeting"
      />
    </div>
  );
};

export default Calendly;
