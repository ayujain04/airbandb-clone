import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const client = global.prisma || new PrismaClient();
//this checks if we are in development
if(process.env.NODE_ENV !== "production") global.prisma = client;

export default client;
