import { IUser } from "@/type/user";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Book, BookOpen, Clock, Star } from "lucide-react";
import { useState } from "react";

export default function ProfileInfo({
  userData,
  updateUserData,
}: {
  userData: IUser;
  updateUserData: (newUser: IUser) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(userData);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(userData);
  };

  const handleSave = () => {
    updateUserData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6 ">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            {isEditing ? (
              <Input
                name="name"
                value={editData.name}
                onChange={handleChange}
                className="mt-1"
              />
            ) : (
              userData.name
            )}
          </CardTitle>
          <p className="text-gray-500">
            {isEditing ? (
              <Input
                name="status"
                value={editData.status}
                onChange={handleChange}
                className="mt-1"
              />
            ) : (
              userData.status
            )}
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center">
              <Book className="mr-2 h-4 w-4" />
              <span>Đã đọc: {userData.readCount} truyện</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="mr-2 h-4 w-4" />
              <span>Đang đọc: {userData.readingCount} truyện</span>
            </div>
            <div className="flex items-center">
              <Star className="mr-2 h-4 w-4" />
              <span>Đánh giá: {userData.reviewCount} truyện</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>Tham gia: {userData.createdAt}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Thể loại ưa thích</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">Ongoing</div>
        </CardContent>
      </Card>
      {isEditing ? (
        <div className="flex space-x-2">
          <Button onClick={handleSave}>Lưu</Button>
          <Button variant="outline" onClick={handleCancel}>
            Hủy
          </Button>
        </div>
      ) : (
        <Button onClick={handleEdit}>Chỉnh sửa thông tin</Button>
      )}
    </div>
  );
}
