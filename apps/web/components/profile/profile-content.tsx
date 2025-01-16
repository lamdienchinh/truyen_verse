import { IUser } from "@/type/user";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import { Textarea } from "@workspace/ui/components/textarea";
import { useState } from "react";

export default function ProfileContent({
  userData,
  updateUserData,
}: {
  userData: IUser;
  updateUserData: (newUser: IUser) => void;
}) {
  const [activeTab, setActiveTab] = useState("about");
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

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  return (
    <Card>
      <CardContent className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="about">Giới thiệu</TabsTrigger>
            <TabsTrigger value="favorites">Truyện yêu thích</TabsTrigger>
            <TabsTrigger value="activity">Hoạt động gần đây</TabsTrigger>
          </TabsList>
          <TabsContent value="about" className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Về tôi</h3>
            {isEditing ? (
              <Textarea
                name="about"
                value={editData.about}
                onChange={handleChange}
                className="mt-1"
                rows={6}
              />
            ) : (
              <p className="text-gray-600">{userData.about}</p>
            )}
          </TabsContent>
          <TabsContent value="favorites" className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Truyện yêu thích</h3>
            <div className="space-y-4">... Ongoing</div>
          </TabsContent>
          <TabsContent value="activity" className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Hoạt động gần đây</h3>
            <div className="space-y-4">... Ongoing</div>
          </TabsContent>
        </Tabs>
        {activeTab === "about" &&
          (isEditing ? (
            <div className="flex space-x-2 mt-4">
              <Button onClick={handleSave}>Lưu</Button>
              <Button variant="outline" onClick={handleCancel}>
                Hủy
              </Button>
            </div>
          ) : (
            <Button onClick={handleEdit} className="mt-4">
              Chỉnh sửa giới thiệu
            </Button>
          ))}
      </CardContent>
    </Card>
  );
}
