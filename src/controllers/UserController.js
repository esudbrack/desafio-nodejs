import User from "../models/User";
import bcryptjs from "bcryptjs";

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
}

export default new UserController();
