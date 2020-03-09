import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const todo = await prisma.todo.findOne({
    where: { id: req.query.todo as string }
  });

  if (req.query.week === "week_1") {
    await prisma.todo.update({
      where: { id: todo.id },
      data: { text: req.body.text }
    });
  }
  res.json({ todo });
};
