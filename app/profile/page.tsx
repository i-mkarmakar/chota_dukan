"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Package,
  Mail,
  Star,
  Check,
  Github,
  LinkIcon,
  Twitter,
  Ban,
  ShoppingBag,
  Activity,
  MessagesSquare,
} from "lucide-react";
import { useUser, useClerk } from "@clerk/nextjs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ProfileHeader from "@/components/home/ProfileHeader";

export default function ProfilePage() {
  const { user } = useUser();

  if (!user) return null;

  const emailAddress = user.primaryEmailAddress?.emailAddress;

  return (
    <div className="w-full px-2 mx-auto max-w-6xl">
      <ProfileHeader
        imageUrl="/placeholder.svg"
        editable={true}
        bannerUrl={"/bg.webp"}
      />
      <div className="max-w-6xl mx-auto px-4">
        <div className="pt-20 pb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold">{user.fullName}</h1>
                <span className="rounded-full bg-transparent px-3 text-sm font-semibold leading-6 text-yellow-300 ring-1 ring-inset ring-yellow-300/10 flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  Ships in 2 days
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground portrait:text-xs">
                {emailAddress && (
                  <>
                    <Mail className="h-4 w-4" />
                    <span>{emailAddress}</span>
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button>
                <Link
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Link>
              </Button>
                <Button>
                  <Link
                    href={""}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Link>
                </Button>
                <Button>
                  <Link
                    href={""}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon className="h-4 w-4 mr-2" />
                    Website
                  </Link>
                </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <Star className="h-5 w-5 mb-2 text-yellow-400" />
                  <span className="text-2xl font-bold">4.94</span>
                  <span className="text-sm dark:text-muted-foreground">
                    Rating
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <Check className="h-5 w-5 mb-2 text-green-600" />
                  <span className="text-2xl font-bold">20</span>
                  <span className="text-sm dark:text-muted-foreground">
                    Sold by me
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <Ban className="h-5 w-5 mb-2 text-red-600" />
                  <span className="text-2xl font-bold">6</span>
                  <span className="text-sm dark:text-muted-foreground">
                    Cancelled as seller
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <ShoppingBag className="h-5 w-5 mb-2 text-blue-600" />
                  <span className="text-2xl font-bold">2</span>
                  <span className="text-sm dark:text-muted-foreground">
                    Bought as buyer
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Tabs defaultValue="friends" className="space-y-4">
          <TabsList className="w-fit justify-start">
            <TabsTrigger value="friends" className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              Selling
            </TabsTrigger>
            <TabsTrigger value="posts" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Stories
            </TabsTrigger>
            <TabsTrigger value="activity" className="flex items-center gap-2">
              <MessagesSquare className="h-4 w-4" />
              Reviews
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
