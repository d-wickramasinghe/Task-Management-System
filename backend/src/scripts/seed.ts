import bcrypt from "bcryptjs";
import prisma from "../config/prisma";

async function main() {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: "admin@test.com",
    },
  });

  if (existingUser) {
    console.log("Admin user already exists.");
    return;
  }

  const hashedPassword = await bcrypt.hash("123456", 10);

  await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@test.com",
      password: hashedPassword,
    },
  });

  console.log("Admin user created successfully!");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });