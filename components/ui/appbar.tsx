"use client";

import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Coins, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import getUserData from "@/app/actions/getData";
import { signOut, useSession } from "next-auth/react";

export default function AppBar() {
  const session = useSession();
  const [tokenBalance, setTokenBalance] = useState<number>(0);
  const name = session.data?.user?.name || "";
  const names = name.split(" ");
  let initials = "";

  for (let i = 0; i < names.length; i++) {
    initials += names[i].charAt(0).toUpperCase();
  }

  const fetchUserData = async () => {
    try {
      const user = await getUserData();
      setTokenBalance(user ?? 0);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setTokenBalance(0);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleReload = () => {
    fetchUserData();
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-stone-950 border-b border-gray-200 dark:border-white light:border-black">
      <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
        Plagiarizz
      </div>

      <div className="flex items-center space-x-2 dark:bg-black dark:bg-zinc-900 px-3 py-2 rounded-md light:bg-black border">
        <Coins className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        <div className="text-gray-600 dark:text-gray-400 font-medium select-none">
          {tokenBalance.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleReload}
          className="h-6 w-6 rounded-full"
          aria-label="Reload balance"
        >
          <RotateCw className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {session.data?.user?.name}
        </span>

        <Button onClick={() => signOut()}>Log Out</Button>

        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg" alt="@johndoe" />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
