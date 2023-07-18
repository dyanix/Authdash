import connectMongo from "../../../database/conn";
import Users from "../../../model/schema";
import { hash } from "bcrypt";

export default async function handler(req, res) {
  try {
    await connectMongo();

    if (req.method === 'POST') {
      if (!req.body) {
        return res.status(404).json({
          error: "Don't have form data...!"
        });
      }

      const { email, password } = req.body;

      const checkExisting = await Users.findOne({ email });
      if (checkExisting) {
        return res.status(422).json({ message: "User already exists" });
      }

      const hashedPassword = await hash(password, 12);
      const newUser = await Users.create({ email, password: hashedPassword });

      res.status(201).json({ status: true, user: newUser });
    } else {
      res.status(500).json({ message: "HTTP method not valid, only POST is accepted" });
    }
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}
