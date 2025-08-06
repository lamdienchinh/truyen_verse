"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Form } from "@workspace/ui/components/form";

import { useCreateRecommendationForm } from "../hooks/use-create-recommendation-form";
import { useNovels } from "../hooks/use-recommendations";
import { CreateRecommendationLayout } from "./create-recommendation-layout";
import { FormActions } from "./form-actions";
import {
  BasicInfoFields,
  DateRangeFields,
  SettingsFields,
} from "./form-fields";

export function CreateRecommendationForm() {
  const { data: novels = [] } = useNovels();
  const { form, onSubmit, isPending } = useCreateRecommendationForm();

  return (
    <CreateRecommendationLayout>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Thông tin cơ bản</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <BasicInfoFields control={form.control} novels={novels} />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Cài đặt</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <SettingsFields control={form.control} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Thời gian hiển thị</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <DateRangeFields
                    control={form.control}
                    getValues={form.getValues}
                  />
                </CardContent>
              </Card>

              {/* Actions */}
              <FormActions isPending={isPending} />
            </div>
          </div>
        </form>
      </Form>
    </CreateRecommendationLayout>
  );
}
