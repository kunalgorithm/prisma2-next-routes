import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const todo = await prisma.todos.findOne({
    where: { id: req.query.todo as string }
  });

  if (todo) {
    res.status(200).json({ todo });
  } else {
    res
      .status(404)
      .json({ message: `Todo with id: ${req.query.todo} not found.` });
  }
};
