'use server'
import prisma from "@/db/db";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "@/app/auth/auth";



export default async function getUserData(){
    const session = await getServerSession(NEXT_AUTH);
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      select: {
        userTokens: true,
        name: true,
        email: true,
      },
    });
    if (!user) {
      console.log("User Doesnot exist");
    }
    const tokenBalance = user?.userTokens || Number;
  return tokenBalance
}