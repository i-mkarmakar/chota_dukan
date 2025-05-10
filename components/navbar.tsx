"use client";

import React from "react";
import Link from "next/link";
import { useUser, useClerk } from "@clerk/nextjs";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  Command,
  Globe,
  LogOut,
  Mail,
  MessageSquare,
  MessagesSquare,
  Monitor,
  MoonIcon,
  PlusCircle,
  RssIcon,
  Search,
  Sparkles,
  SunMediumIcon,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { user } = useUser();
  const { signOut } = useClerk();

  return (
    <div className="flex items-center justify-between p-4 shadow-md">
      <h1 className="text-lg font-semibold">Navbar</h1>

      {user && (
        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-8 h-8 bg-transparent cursor-pointer border-none rounded-full flex justify-center items-center">
                <Image
                  src={user.imageUrl}
                  alt="User Avatar"
                  width={35}
                  height={35}
                  className="rounded-full"
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-60 p-2 m-2" align="end">
            <DropdownMenuLabel className="font-normal">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile">
                  <User />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => alert("Billing Clicked")}>
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => alert("Team Clicked")}>
                Team
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => alert("Subscription Clicked")}>
                Subscription
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => signOut({ redirectUrl: "/" })}>
                <LogOut />
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
};

export default Navbar;
