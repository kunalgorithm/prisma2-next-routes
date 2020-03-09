import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const todo = await prisma.todos.findOne({
    where: { id: req.query.todo as string }
  });

  await prisma.todos.update({
    where: { id: todo.id },
    data: { text: req.body.text }
  });

  res.json({ todo });
};
