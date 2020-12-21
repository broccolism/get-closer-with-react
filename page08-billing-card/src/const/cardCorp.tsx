export { colors, vinNumbers };

const colors = new Map<string, any>([
  [
    "하나카드",
    {
      start: "#035B62",
      end: "#00898E",
    },
  ],
  [
    "신한카드",
    {
      start: "#5BBADC",
      end: "#1381C3",
    },
  ],
  [
    "우체국체크",
    {
      start: "#E54561",
      end: "#A8103F",
    },
  ],
]);

const vinNumbers = new Map<string, string>([
  ["532750", "하나카드"],
  ["430305", "신한카드"],
  ["944119", "우체국체크"],
]);
