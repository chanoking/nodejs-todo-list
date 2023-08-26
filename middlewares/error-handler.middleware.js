export default (err, req, res, next) => {
  console.log("에러 처리 미들웨어가 실행되었습니다.");
  console.log(err);

  if (error.name === "ValidationError") {
    return res.status(400).json({ errorMessage: err.messagge });
  }

  return res
    .status(500)
    .json({ errorMessage: "서버에서 문제가 발생했습니다." });
};
