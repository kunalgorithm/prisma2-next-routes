import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
const prisma = new PrismaClient();
export default async (req, res) => {
  const {
    query: { id, name },
    method
  } = req;

  console.log(`✍️ req received for ${id}, ${req.body.text}`);

  switch (method) {
    case "GET":
      // Get data from your database
      res.status(200).json({ id, name: `User ${id}` });
      break;
    case "PUT":
      // Update or create data in your database
      if (req.body.text) {
        await prisma.todos.upsert({
          where: { id },
          create: {
            id: id ? id : uuidv4(),
            ...req.body
          },
          update: {
            ...req.body
          }
        });
      } else {
        await prisma.todos.update({
          where: { id },
          data: { ...req.body }
        });
      }
      res.status(200).json({ id, name: name || `User ${id}` });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
