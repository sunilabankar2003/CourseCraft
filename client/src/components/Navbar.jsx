import { School, Menu } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DarkMode from "@/DarkMode";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { Link } from "react-router-dom";

const Navbar = () => {
  const user = true;

  return (
    <div className="h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
      {/* Desktop */}
      <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center h-full px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <School size={30} />

          <h1 className="font-extrabold text-2xl">E-Learning</h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage src="https://tse1.mm.bing.net/th/id/OIP.FDZJc1RCwMS-COPgulpa-wHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-40" align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>

                <DropdownMenuItem>
                  <Link to="profile">Profile</Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Link to="my-learning">My Learning</Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Link to="profile">Dashboard</Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline">Login</Button>

              <Button>Sign Up</Button>
            </div>
          )}

          {/* Dark Mode */}
          <DarkMode />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden justify-between items-center px-4 h-full">
        <h1 className="font-extrabold text-2xl">E-Learning</h1>
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;

const MobileNavbar = () => {
  const role = "instructor";
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="rounded-full bg-gray-200 hover:bg-gray-500"
        >
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="right">
        <SheetHeader className="pr-12">
          <div className="flex items-center">
            <SheetTitle>E-Learning</SheetTitle>
          </div>

          <SheetDescription>Learn. Build. Grow.</SheetDescription>

          <div className="mt-2">
            <DarkMode />
          </div>
        </SheetHeader>

        <div className="flex flex-col gap-2 mt-6">
          <Button variant="ghost" className="justify-start">
            My Learning
          </Button>

          <Button variant="ghost" className="justify-start">
            Profile
          </Button>

          <Button variant="ghost" className="justify-start">
            Settings
          </Button>

          <Button variant="ghost" className="justify-start text-red-600">
            Log out
          </Button>
        </div>
        {role === "instructor" && (
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Dashboard</Button>
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};
