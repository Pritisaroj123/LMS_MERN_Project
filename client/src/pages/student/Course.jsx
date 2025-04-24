import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { Link } from "react-router-dom";

const Course = ({course}) => {
  return (
    <Link to={`/course-detail/${course._id}`}>
    <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      <div className="relative">
        <img
           src={course.courseThumbnail}
          //src="data:image/jpeg;base64,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"
          alt="course"
          className="w-full h-36 object-cover rounded-t-lg"
        />
      </div>
      <CardContent className="px-5 py-4 space-y-3">
        <h1 className="hover:underline font-bold text-lg truncate">
          {course.courseTitle}
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={course.creator?.photoUrl || "https://github.com/shadcn.png"} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="font-medium text-sm">{course.creator?.name}</h1>
          </div>
          <Badge className={'bg-blue-600 text-white px-2 py-1 text-xs rounded-full'}>
            {course.courseLevel}
          </Badge>
        </div>
        <div className="text-lg font-bold">
            <span>₹{course.coursePrice}</span>
        </div>
      </CardContent>
    </Card>
    </Link>
  );
};

export default Course;
