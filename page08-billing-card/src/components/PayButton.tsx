import { cookie } from "../App";

function PayButton() {
  const handleClick = () => {
    const curCard = cookie.get("card");
    if (curCard !== undefined) {
      console.log(
        "카드 번호: " +
          curCard.card_no +
          "\n카드 비밀번호 앞 2자리: " +
          curCard.card_pw.substr(0, 2) +
          "\n카드 만료 년/월: " +
          curCard.expire_year +
          "/" +
          curCard.expire_month +
          "\nCVC 번호: " +
          curCard.cvcNumber
      );
    } else {
      window.alert("결제 방법을 선택해주세요.");
    }
  };

  return (
    <div
      style={{
        margin: "30px",
        cursor: "pointer",
        backgroundColor: "#ddd",
        borderRadius: "10px",
        padding: "8px",
        width: "100px",
      }}
      onClick={handleClick}
    >
      결제하기
    </div>
  );
}

export default PayButton;
