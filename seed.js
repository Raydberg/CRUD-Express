import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.books.createMany({
    data: [
      { name: 'Book One', author: 'Author One', page: 100 },
      { name: 'Book Two', author: 'Author Two', page: 200 },
      { name: 'Book Three', author: 'Author Three', page: 300 },
    ],
  });
  console.log('Datos de prueba insertados');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });