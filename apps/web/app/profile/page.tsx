"use client";

import ProfileContent from "@/components/profile/profile-content";
import ProfileHeader from "@/components/profile/profile-header";
import ProfileInfo from "@/components/profile/profile-info";
import { IUser } from "@/type/user";
import { useState } from "react";
export default function Profile() {
  const [userData, setUserData] = useState<IUser>({
    _id: 'abcd',
    name: "Chinh Lâm Điền",
    avatar: "/placeholder.svg?height=128&width=128",
    status: "Độc giả nhiệt tình",
    readCount: 157,
    readingCount: 3,
    reviewCount: 42,
    joinDate: "Tháng 1, 2022",
    about:
      "Xin chào! Tôi là một độc giả đam mê truyện chữ. Tôi thích khám phá những thế giới mới thông qua các trang sách và chia sẻ cảm nhận với cộng đồng. Thể loại yêu thích của tôi là tiên hiệp và ngôn tình, nhưng tôi cũng rất thích thử những thể loại mới!",
  });

  const updateUserData = (newData: IUser) => {
    setUserData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <div className="min-h-screen">
      <ProfileHeader userData={userData} />
      <div className="container pt-20 pb-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <ProfileInfo userData={userData} updateUserData={updateUserData} />
          </div>
          <div className="w-full md:w-2/3">
            <ProfileContent
              userData={userData}
              updateUserData={updateUserData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
