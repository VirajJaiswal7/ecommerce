import jwt from "jsonwebtoken";

export const isAuthenticate = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(400).json({
        message: "User not authenticated",
        success: false,
      });
    }

    // match token
    const compareToken = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!compareToken) {
      return res.status(400).json({
        message: "Invailid token",
        success: false,
      });
    }

    req.id = compareToken.userId;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
