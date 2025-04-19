import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";

export default function PriceListPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/price-list">Price List</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* Price List Section */}
      <div className="space-y-16">
        <h2 className="text-3xl font-bold text-center mb-8">Price List</h2>

        {/* 这里用 aspect-w-16 aspect-h-9 来保持 16:9 比例；图片会完整显示 */}
        <div className="w-full ">
          <Image
            src="/price_list.jpg"
            alt="price list"
            width={1920}
            height={1080}
            quality={75}
          />
          <Image
            src="/price_deco.png"
            alt="price features"
            width={1920}
            height={1080}
            quality={75}
          />
          <Image
            src="/hicaps.jpg"
            alt="participating with hicaps"
            width={1920}
            height={1080}
            quality={75}
          />
        </div>
      </div>
    </div>
  );
}
