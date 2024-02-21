"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Textarea } from "@/components/ui/textarea";

type FormFieldName = "name" | "phone" | "email" | "message";

type FormProps = {
  label: string;
  name: FormFieldName;
};

const data: FormProps[] = [
  {
    label: "nome",
    name: "name",
  },
  {
    label: "telefone",
    name: "phone",
  },
  {
    label: "e-mail",
    name: "email",
  },
  {
    label: "mensagem",
    name: "message",
  },
];

export default function Partners() {
  const formSchema = z.object({
    name: z.string(),
    phone: z.string().min(11).max(11),
    email: z.string().email(),
    message: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    form.reset();
    console.log(values);
  }

  return (
    <main className="bg-[#13161b] py-10">
      <div className="container grid grid-cols-2">
        <div className="col-span-1">01</div>
        <div className="col-span-2 lg:col-span-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {data.map((item, index) => (
                <FormField
                  key={index}
                  control={form.control}
                  name={`${item.name}`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="capitalize">{item.label}</FormLabel>
                      <FormControl>
                        {item.label === "mensagem" ? (
                          <Textarea
                            rows={10}
                            placeholder={`Digite sua mensagem`}
                            {...field}
                            className={`bg-transparent ring-primary focus:ring-primary ${
                              form.formState.errors[item.name] &&
                              "border-red-800"
                            }`}
                          />
                        ) : (
                          <Input
                            placeholder={`Digite seu ${item.label}`}
                            {...field}
                            className={`bg-transparent ring-primary focus:ring-primary ${
                              form.formState.errors[item.name] &&
                              "border-red-800"
                            }`}
                          />
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button
                type="submit"
                className="w-full rounded bg-primary text-white hover:bg-green-700"
              >
                Enviar
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}
