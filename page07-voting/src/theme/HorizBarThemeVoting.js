import React, { useState } from "react";

import HorizBarVote from "../horizBar/view/HorizBarVote";
import HorizBarResult from "../horizBar/view/HorizBarResult";

function HorizBarThemeVoting() {
  const [scores, setScore] = useState([3, 2, 0, 5]);
  const [step, setStep] = useState(0);
  const goNext = () => setStep(step + 1);
  const goPrev = () => setStep(step - 1);

  function render() {
    switch (step) {
      case 1:
        return <HorizBarResult goPrev={goPrev} scores={scores} />;
      case 0:
      default:
        return (
          <HorizBarVote goNext={goNext} scores={scores} setScore={setScore} />
        );
    }
  }

  return render();
}

export default HorizBarThemeVoting;
