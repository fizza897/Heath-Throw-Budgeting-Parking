"use client";

import React, { ChangeEvent, useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, addDays } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaCalendarAlt } from "react-icons/fa"; // Import the calendar icon

interface FormData {
  terminal: string;
  airport: string;
  PickDate: Date | null;
  PickTime: string;
  DropDate: Date | null;
  DropTime: string;
}

const FormSchema = z.object({
  PickDate: z.date().nullable().optional(),
  DropDate: z.date().nullable().optional(),
  PickTime: z.string().optional(),
  DropTime: z.string().optional(),
  airport: z.string().nonempty(),
  terminal: z.string().optional(),
});

const formatDate = (date: Date | null) => {
  if (!date) return "";
  const dayOfWeek = format(date, "EEE"); // Get the short name of the day of the week
  const formattedDate = format(date, "dd/MM/yyyy");
  return `${dayOfWeek}.${formattedDate}`; // Format as 'Day.DD/MM/YYYY'
};

const AirportForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      PickDate: null,
      DropDate: null,
      PickTime: "",
      DropTime: "",
      airport: "",
      terminal: "",
    },
  });

  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    terminal: "",
    airport: "",
    PickDate: null,
    PickTime: "",
    DropDate: null,
    DropTime: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (
    date: Date | null,
    field: "PickDate" | "DropDate"
  ) => {
    if (field === "PickDate") {
      setFormData((prevData) => ({
        ...prevData,
        PickDate: date,
        DropDate: addDays(date ?? new Date(), 4),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        DropDate: date,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.airport ||
      !formData.PickDate ||
      !formData.PickTime ||
      !formData.DropDate ||
      !formData.DropTime
    ) {
      alert("Please fill all required fields");
      return;
    }

    localStorage.setItem("userdata", JSON.stringify(formData));
    router.push("/quote");
  };

  return (
    <div className="w-full mx-auto rounded-t-3xl mt-[-20%] z-10">
      <div className="w-[80%] mx-auto bg-white rounded-t-3xl p-4 px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Button className="outline-primary border-primary text-xs sm:text-sm h-10 sm:h-12 px-4 sm:px-6">
            Airport Parking
          </Button>
          <Button
            className="outline-primary text-primary border-primary text-xs sm:text-sm h-10 sm:h-12 px-4 sm:px-6"
            variant={"outline"}
          >
            Hotel & Parking
          </Button>
          <Button
            className="outline-primary text-primary border-primary text-xs sm:text-sm h-10 sm:h-12 px-4 sm:px-6"
            variant={"outline"}
          >
            Lounge
          </Button>
          <Button
            className="outline-primary text-primary border-primary text-sm h-10 sm:h-12 px-4 sm:px-6"
            variant={"outline"}
          >
            Airport Transfer
          </Button>
        </div>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 container bg-white rounded-3xl shadow-lg p-6 sm:p-9">
            {/* Airport Dropdown */}
            <div className="flex flex-col sm:w-[240px] ">
              <label className="text-gray-700 font-semibold mb-2">
                Airport
              </label>
              <select
                name="airport"
                className="py-2 px-4 bg-white w-full rounded-lg border border-gray-300 h-[80%]"
                value={formData.airport}
                onChange={handleChange}
              >
                <option>Select Airport</option>
                <option value="HeathrowAirport">Heathrow Airport</option>
              </select>
            </div>

            {/* Date From */}
            <div className="flex flex-col sm:w-[340px] sm:ml-[-35%] z-[1px] rounded-lg">
              <label className="text-gray-700 font-semibold mb-2">
                Date From
              </label>
              <div className="flex items-center space-x-2 rounded-lg border border-gray-300">
                <Form {...form}>
                  <FormField
                    control={form.control}
                    name="PickDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full sm:w-[180px] pl-3 text-left font-normal border-none",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                <FaCalendarAlt className="mr-2 text-gray-500" />
                                {field.value ? (
                                  formatDate(field.value)
                                ) : (
                                  <span>Pick a date</span>
                                )}
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              className="bg-white-500"
                              mode="single"
                              selected={formData.PickDate}
                              onSelect={(date) => {
                                field.onChange(date);
                                handleDateChange(date, "PickDate");
                              }}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </Form>

                <input
                  type="time"
                  name="PickTime"
                  className="w-full sm:w-[120px] py-2 px-4 bg-white border-none rounded-lg"
                  value={formData.PickTime}
                  onChange={handleChange}
                  pattern="[0-9]{2}:[0-9]{2}"
                />
              </div>
            </div>

            {/* Date To */}
            <div className="flex flex-col sm:w-[350px] sm:ml-[-41%]">
              <label className="text-gray-700 font-semibold mb-2">
                Date To
              </label>
              <div className="flex items-center space-x-2 rounded-lg border border-gray-300">
                <Form {...form}>
                  <FormField
                    control={form.control}
                    name="DropDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full sm:w-[180px] pl-3 text-left font-normal border-none",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                <FaCalendarAlt className="mr-2 text-gray-500" />
                                {formData.DropDate ? (
                                  formatDate(formData.DropDate)
                                ) : (
                                  <span>Pick a date</span>
                                )}
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              className="bg-white-500"
                              mode="single"
                              selected={formData.DropDate}
                              onSelect={(date) => {
                                field.onChange(date);
                                handleDateChange(date, "DropDate");
                              }}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </Form>

                <input
                  type="time"
                  name="DropTime"
                  className="w-full sm:w-[120px] py-2 px-4 bg-white border-none rounded-lg"
                  value={formData.DropTime}
                  onChange={handleChange}
                  pattern="[0-9]{2}:[0-9]{2}"
                />
              </div>
            </div>
            {/* Submit Button */}
            <div className="flex justify-center items-center sm:col-span-3 ml-[1000px] mt-[-110px]">
              <Button
                type="submit"
                className="bg-primary text-white hover:bg-darkGreen rounded-md py-2 px-6 w-[150px]"
              >
                Get Quote
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AirportForm;
