import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  const todos = await prisma.todos.findMany({ orderBy: { createdAt: "desc" } });

  res.status(200).json(todos);
};
