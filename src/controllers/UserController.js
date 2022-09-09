import User from "../models/User";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

class UserController {
  async create(req, res) {
    try {
      let { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res
          .status(400)
          .send({ message: "You must enter a name, email and password." });
      }

      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).send({ message: "User already registered." });
      }

      password = await bcryptjs.hash(password, 8);

      let user = new User({ name, email, password });
      await user.save();

      return res.send({ message: "User created with success." });
    } catch (error) {
      return res.status(500).send({ message: "Internal server error." });
    }
  }

  async login(req, res) {
    try {
      let { email, password } = req.body;

      let user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      const checkpassword = await bcryptjs.compare(password, user.password);
      if (!checkpassword) {
        return res.status(400).json({ message: "Credenciais inválidas!" });
      }

      user = user.toJSON();
      delete user.password;

      const token = jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: "8h",
      });

      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).send({ message: "Internal server error." });
    }
  }
}

export default new UserController();
