import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getBooks = async (req, res) => {
  const books = await prisma.books.findMany();
  res.json(books);
};
export const createBook = async (req, res) => {
  const { name, author, page } = req.body;
  const result = await prisma.books.create({
    data: { name, author, page },
  });
  res.json(result);
};
export const updateBook = async (req, res) => {
  const { id } = req.params;

  const { name, author, page } = req.body;
  const book = await prisma.books.update({
    where: { id: Number(id) },
    data: { name, author, page },
  });
  res.json(book);
};
export const deleteBook = async (req, res) => {
  const { id } = req.params;
  const book = await prisma.books.delete({
    where: { id: Number(id) },
  });
  res.json(book);
};
