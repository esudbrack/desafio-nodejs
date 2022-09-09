import { verify } from "jsonwebtoken";

export default async function (req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token inexistente!" });
  }
  const [, token] = authHeader.split(" ");

  try {
    const decoded = await verify(token, process.env.JWT_SECRET);

    const id = decoded.sub;

    req.userId = id;

    return next();
  } catch (error) {
    return res.status(403).send({ message: "Token inválido!" });
  }
}
