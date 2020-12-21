import React, { useState } from "react";

import CircleVote from "../circle/view/CircleVote";
import CircleResult from "../circle/view/CircleResult";

function CircleThemeVoting() {
  const [scores, setScore] = useState([3, 2, 0, 5]);
  const [step, setStep] = useState(0);
  const goNext = () => setStep(step + 1);
  const goPrev = () => setStep(step - 1);

  function render() {
    switch (step) {
      case 1:
        return <CircleResult goPrev={goPrev} scores={scores} />;
      case 0:
      default:
        return (
          <CircleVote goNext={goNext} scores={scores} setScore={setScore} />
        );
    }
  }

  return render();
}

export default CircleThemeVoting;
