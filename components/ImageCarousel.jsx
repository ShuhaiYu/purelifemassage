"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

export default function ImageCarousel() {
  const total = 5; // 假设有5张图片
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: total }).map((_, i) => (
            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
              <Image
                src={`/photos/main-${i + 1}.jpg`}
                alt={`Pure Life Massage ${i + 1}`}
                width={400}
                height={300}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                priority={i === 0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* 上一页 / 下一页 按钮 */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
