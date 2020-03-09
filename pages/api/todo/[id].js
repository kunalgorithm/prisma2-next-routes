import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
const prisma = new PrismaClient();
export default async (req, res) => {
  const {
    query: { id, name },
    method
  } = req;

  console.log(`✍️ req received for ${id}, ${req.body.text}`);
  if (!req.body.text) res.status(400);

  switch (method) {
    case "GET":
      // Get data from your database
      res.status(200).json({ id, name: `User ${id}` });
      break;
    case "PUT":
      // Update or create data in your database
      await prisma.todos.upsert({
        where: { id },
        create: {
          id: id ? id : uuidv4(),
          text: req.body.text
        },
        update: {
          text: req.body.text
        }
      });
      res.status(200).json({ id, name: name || `User ${id}` });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
