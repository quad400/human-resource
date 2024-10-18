"use client"

import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const Hero = () => {
  const images = ["/assets/hero1.png", "/assets/hero2.png"];

  return (
    <section className="bg-sky-50 w-full h-full min-h-screen">

    <div className=" flex justify-between container items-center space-x-7 max-md:flex-col max-md:justify-center max-md:items-center">
      <div className="w-1/2 max-md:w-full  flex flex-col items-start justify-start h-full mt-40 max-md:mt-32">
      <h4 className="text-sm text-blue-950 font-normal">Talent Sourcing</h4>
        <h1 className="text-7xl max-md:text-4xl text-blue-950 my-4">
          Talent Sourcing that scales with you
        </h1>
        <p className="text-sm text-blue-950 font-normal leading-7">
          Build a talent pipeline as big as your goals with a sourcing strategy
          that connects you to more qualified candidates – and keeps them
          engaged.{" "}
        </p>
        <p className="text-sm text-blue-950 font-normal">
          All within Greenhouse.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-1/2 max-md:w-full h-full">
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent className=" w-full h-full">
            {images.map((item, index) => (
              <CarouselItem
                key={index}
                className=""
              >
                  <Card className="w-full">
                    <CardContent className="flex  justify-start items-start relative h-[400px] w-full">
                      <Image src={item} alt={`${index}`} fill />
                    </CardContent>
                  </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
    </section>
  );
};

export default Hero;
