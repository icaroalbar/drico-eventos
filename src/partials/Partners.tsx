"use client";

import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const data = [
  "moto",
  "casas bahia",
  "ambev",
  "claro",
  "venancio",
  "sumicity",
  "swift",
  "vivo",
  "coca cola",
  "pernambucanas",
  "honda",
];

export default function Partners() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
  return (
    <section className="flex flex-col items-center justify-center py-24">
      <div className="space-y-5">
        <h1 className="max-w-3xl scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl ">
          Nossos principais
          <span className="text-primary"> parceiros:</span>
        </h1>
        <div className="flex gap-x-5">
          <Carousel
            plugins={[plugin.current]}
            className="max-w-5xl"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {data.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-[6/3] items-center justify-center p-6">
                        <Image
                          src={`/${item}_logo.png`}
                          width={100}
                          height={100}
                          alt={`Logo ${item}`}
                          className="pt-1"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
