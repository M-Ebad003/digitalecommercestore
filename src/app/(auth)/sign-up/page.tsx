"use client"
import { Icons } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="containe relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto shadow flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 w-20" />
            <h1 className="text-2xl font-bold">Create an account</h1>
            <Link
              className={cn(
                buttonVariants({
                  variant: "link",
                }),
                "text-base gap-1.5"
              )}
              href="/sign-in"
            >
              Already have an account? Sign-in
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6">
              
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
