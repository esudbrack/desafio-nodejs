export default async function (req, res, next) {
  if (req.is_admin) {
    return next();
  }
  return res.status(403).send({ message: "You shall not pass." });
}
