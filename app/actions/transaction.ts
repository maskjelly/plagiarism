'use server'

import prisma from "@/db/db";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../auth/auth";

export default async function UserTransaction(cancleToken: number) {
    // Get the current session
    const session = await getServerSession(NEXT_AUTH);

    if (!session || !session.user?.email) {
        throw new Error("User session is invalid or user email is missing.");
    }

    const email = session.user.email;

    // Retrieve the current user data
    const user = await prisma.user.findUnique({
        where: { email: email },
        select: { userTokens: true } // Retrieve only the userTokens field
    });

    if (!user) {
        throw new Error("User not found.");
    }

    // Calculate the new userTokens value
    const newUserTokens = user.userTokens - cancleToken;

    // Update the userTokens field with the new value
    await prisma.user.update({
        where: { email: email },
        data: { userTokens: newUserTokens }
    });
}
