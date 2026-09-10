import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { Badge } from "@/components/ui/badge";

const Course = () => {
  return (
    <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-0 pb-2">
      <div className="flex justify-between items-center">
        <div className="relative w-full h-36 overflow-hidden">
          <img
            className="w-full h-full object-cover block"
            src="https://forecastegy.com/img/best-react-courses-udemy/3873464_Nextjs14React-TheCompleteGuide.jpg"
            alt="course"
          />
        </div>
      </div>

      <CardContent className={"px-5 py-4 space-y-3"}>
        <h1 className="hover:underline font-bold text-lg truncate">
          Next.js Complete Course in Hindi 2024
        </h1>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://tse1.mm.bing.net/th/id/OIP.FDZJc1RCwMS-COPgulpa-wHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="font-sm font-medium">Mr. Amol Sharma</h1>
          </div>
          <Badge
            className={"bg-blue-600 text-white px-2 py-1 text-xs rounded-full"}
          >
            Advanced
          </Badge>
        </div>
        <div className="text-lg font-bold">
          <span>₹499</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Course;
