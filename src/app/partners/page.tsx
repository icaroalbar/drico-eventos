"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Link from "next/link";
import Image from "next/image";
import { Toaster } from "@/components/ui/toaster";
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
import axios from "axios";
import { toast } from "@/components/ui/use-toast";

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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    form.reset();
    axios.post("./api/hello", values);
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Em breve, nossa equipe vai entrar em contato.",
    });
  }

  return (
    <main className="bg-[#13161b] py-10">
      <Toaster />
      <div className="container grid grid-cols-2 gap-x-5">
        <div className="col-span-1">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Fale conosco
          </h2>
          <p className="text-justify leading-7 [&:not(:first-child)]:mt-6">
            Estamos dispostos a sanar quaisquer dúvidas que possam surgir. Caso
            queira falar conosco, basta preencher o formulário ao lado ou entrar
            em contato conosco através de nosso WhatsApp apontando a câmera do
            seu celular para o QR code abaixo ou{" "}
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5521972451303"
              className="inline-flex items-center gap-x-1 text-primary hover:underline"
            >
              clicando aqui <Icon name={"ExternalLink"} size={17} />
            </Link>
            .
          </p>
          <Image
            src="/qr_code.png"
            width={350}
            height={40}
            alt="Logo Drico eventos"
            className="mx-auto pt-10"
          />
        </div>
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
