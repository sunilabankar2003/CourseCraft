import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import Course from "./Course";

const Profile = () => {
  const isLoading = true;

  const enrolledCourses = [1, 1, 1, 1, 1];

  if (isLoading) {
    return <ProfileSkeleton />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 my-20">
      <h1 className="font-bold text-2xl text-center md:text-left">PROFILE</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex flex-col items-center">
          <Avatar className="h-24 w-24 md:h-32 md:w-32 mb-4">
            <AvatarImage src="https://tse1.mm.bing.net/th/id/OIP.FDZJc1RCwMS-COPgulpa-wHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="mb-2">
            <h1 className="font-semibold text-gray-900 dark:text-gray-100">
              Name:
              <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                Anthony Stark
              </span>
            </h1>
          </div>
          <div className="mb-2">
            <h1 className="font-semibold text-gray-900 dark:text-gray-100">
              Email:
              <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                stark@gmail.com
              </span>
            </h1>
          </div>
          <div className="mb-2">
            <h1 className="font-semibold text-gray-900 dark:text-gray-100">
              Role:
              <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                Intructor
              </span>
            </h1>
          </div>
          <Dialog>
            <DialogTrigger>
              <Button size="sm" className="mt-2">
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label>Name:</Label>
                  <Input
                    type="text"
                    placeholder="Name"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label>Profile Photo:</Label>
                  <Input type="file" accept="image/*" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                      Wait...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>
        <h1 className="font-medium text-lg">Courses you're enrolled in.</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5">
          {enrolledCourses.length === 0 ? (
            <h1>You haven't enrolled yet.</h1>
          ) : (
            enrolledCourses.map((course, index) => <Course key={index} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;


/* =========================
   PROFILE SKELETON
========================= */

const ProfileSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-5 mt-15">

      {/* PROFILE */}
      <Skeleton className="h-7 w-24 mb-2" />

      {/* Profile Information */}
      <div className="flex items-center gap-8">

        {/* Profile Image */}
        <Skeleton className="h-28 w-28 rounded-full shrink-0" />

        {/* User Details */}
        <div className="space-y-4">

          {/* Name */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-32" />
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-40" />
          </div>

          {/* Role */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-20" />
          </div>

          {/* Edit Button */}
          <Skeleton className="h-7 w-24 rounded-md" />

        </div>
      </div>


      {/* COURSES */}
      <div className="mt-4">

        {/* Heading */}
        <Skeleton className="h-5 w-60 mb-5" />

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

          {[...Array(3)].map((_, index) => (
            <CourseSkeleton key={index} />
          ))}

        </div>
      </div>

    </div>
  );
};


/* =========================
   COURSE SKELETON
========================= */

const CourseSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-md">

      {/* Course Image */}
      <Skeleton className="w-full h-36 rounded-none" />

      {/* Course Details */}
      <div className="p-5 space-y-4">

        {/* Course Title */}
        <Skeleton className="h-5 w-4/5" />

        {/* Instructor + Level */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            {/* Instructor Avatar */}
            <Skeleton className="h-8 w-8 rounded-full" />

            {/* Instructor Name */}
            <Skeleton className="h-4 w-28" />

          </div>

          {/* Level Badge */}
          <Skeleton className="h-5 w-16 rounded-full" />

        </div>

        {/* Price */}
        <Skeleton className="h-5 w-14" />

      </div>

    </div>
  );
};