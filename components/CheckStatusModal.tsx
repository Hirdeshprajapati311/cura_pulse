"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getAppointmentsByIdentifier } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";
import { StatusBadge } from "@/components/StatusBadge";
import { Appointment } from "@/types/appwrite.types";

const CheckStatusSchema = z.object({
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 characters")
    .max(15, "Phone number must be at most 15 characters"),
});

export const CheckStatusModal = () => {
  const [open, setOpen] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const form = useForm<z.infer<typeof CheckStatusSchema>>({
    resolver: zodResolver(CheckStatusSchema),
    defaultValues: {
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof CheckStatusSchema>) => {
    setIsLoading(true);
    setSearched(false);
    setAppointments([]);

    try {
      const result = await getAppointmentsByIdentifier(values.phone);
      if (result && result.documents) {
        setAppointments(result.documents);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setSearched(true);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <p className="text-green-500 cursor-pointer hover:underline">
          Check Status
        </p>
      </DialogTrigger>
      <DialogContent className="shad-dialog sm:max-w-md overflow-y-auto max-h-[80vh]">
        <DialogHeader className="mb-4 space-y-3">
          <DialogTitle className="capitalize text-dark-200 dark:text-white">Check Appointment Status</DialogTitle>
          <DialogDescription className="text-dark-600 dark:text-light-200">
            Enter your phone number to view your appointment history.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-input-label text-dark-200 dark:text-light-200">Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="(555) 123-4567"
                      {...field}
                      className="shad-input bg-light-200 dark:bg-dark-400 text-dark-200 dark:text-light-200 border-dark-500 placeholder:text-dark-600 dark:placeholder:text-dark-600"
                    />
                  </FormControl>
                  <FormMessage className="shad-error" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="shad-primary-btn w-full"
              disabled={isLoading}
            >
              {isLoading ? "Searching..." : "Check Status"}
            </Button>
          </form>
        </Form>

        {searched && (
          <div className="mt-6 space-y-4">
            <h3 className="text-16-semibold text-dark-200 dark:text-white">Results ({appointments.length})</h3>
            
            {appointments.length === 0 ? (
               <p className="text-dark-600">No appointments found for this number.</p>
            ) : (
                <div className="space-y-4">
                    {appointments.map((apt) => (
                        <div key={apt.$id} className="p-4 rounded-lg bg-light-200 dark:bg-dark-500 flex flex-col gap-2 border border-dark-400 shadow-sm">
                             <div className="flex justify-between items-start">
                                 <div>
                                     <p className="text-14-medium text-dark-200 dark:text-white">Dr. {apt.primaryPhysician}</p>
                                     <p className="text-12-regular text-dark-600 dark:text-light-200">{formatDateTime(apt.schedule).dateTime}</p>
                                 </div>
                                 <StatusBadge status={apt.status} />
                             </div>
                             {apt.note && (
                                <p className="text-12-regular text-dark-600 dark:text-light-200 mt-2">Note: {apt.note}</p>
                             )}
                        </div>
                    ))}
                </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
