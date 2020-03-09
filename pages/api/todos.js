import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  const todos = await prisma.todo.findMany({});

  res.json(todos);
};
