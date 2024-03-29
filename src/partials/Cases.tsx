"use client";

import React, { useRef } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const data = ["vivo", "corona", "claro", "pernambucanas"];

export default function Cases() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
  return (
    <section
      className="flex flex-col items-center justify-center bg-action bg-cover bg-bottom py-24"
      id="cases"
    >
      <div className="space-y-5">
        <h1 className="max-w-3xl scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl ">
          Cases <span className="text-primary"> incríveis</span> que fizemos{" "}
          <span className="text-primary">acontecer:</span>
        </h1>
        <div className="flex justify-center gap-x-5 xl:max-w-5xl">
          <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="container rounded bg-background/30"
          >
            <CarouselContent>
              {data.map((item, index) => (
                <CarouselItem key={index} className="max-w-xs">
                  <div className="p-1">
                    <CardContent className="flex aspect-square flex-col items-center justify-center gap-y-3 p-6">
                      <Image
                        src={`/case_${item}.jpg`}
                        width={250}
                        height={250}
                        alt={`Evento ${item}`}
                        className="aspect-[8/6] pt-1"
                      />
                      <CardTitle className="text-2xl capitalize">
                        {item}
                      </CardTitle>
                    </CardContent>
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
