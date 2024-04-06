import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 2000,
    httpOnly: true,
    sameSite: "strict",
    secure: "development",
  });
  //   console.log(token);
};

export default generateTokenAndSetCookie;
