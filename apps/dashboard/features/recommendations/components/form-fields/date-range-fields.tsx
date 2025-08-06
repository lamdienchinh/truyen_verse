"use client";

import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { Calendar } from "lucide-react";
import { useState } from "react";
import { Control, UseFormGetValues } from "react-hook-form";

import { Button } from "@workspace/ui/components/button";
import { Calendar as CalendarComponent } from "@workspace/ui/components/calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover";

import { CreateRecommendationFormValues } from "../../types/create-recommendation.schema";

interface DateRangeFieldsProps {
  control: Control<CreateRecommendationFormValues>;
  getValues: UseFormGetValues<CreateRecommendationFormValues>;
}

export function DateRangeFields({ control, getValues }: DateRangeFieldsProps) {
  const [startDateOpen, setStartDateOpen] = useState(false);
  const [endDateOpen, setEndDateOpen] = useState(false);

  return (
    <>
      <FormField
        control={control}
        name="startDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Ngày bắt đầu</FormLabel>
            <Popover open={startDateOpen} onOpenChange={setStartDateOpen}>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {field.value ? (
                      format(field.value, "dd/MM/yyyy", {
                        locale: vi,
                      })
                    ) : (
                      <span>Chọn ngày bắt đầu</span>
                    )}
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={field.value}
                  onSelect={(date) => {
                    field.onChange(date);
                    setStartDateOpen(false);
                  }}
                  disabled={(date) => date < new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="endDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Ngày kết thúc</FormLabel>
            <Popover open={endDateOpen} onOpenChange={setEndDateOpen}>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {field.value ? (
                      format(field.value, "dd/MM/yyyy", {
                        locale: vi,
                      })
                    ) : (
                      <span>Chọn ngày kết thúc</span>
                    )}
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={field.value}
                  onSelect={(date) => {
                    field.onChange(date);
                    setEndDateOpen(false);
                  }}
                  disabled={(date) => {
                    const startDate = getValues("startDate");
                    return (
                      date < new Date() || (startDate && date <= startDate)
                    );
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
