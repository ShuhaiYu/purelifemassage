import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";

export default function VisitUsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl min-h-screen">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/visit-us">Visit Us</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* Price List Section */}
      <div className="space-y-16">
        <h2 className="text-3xl font-bold text-center mb-8">Visit Us</h2>

        {/* 这里用 aspect-w-16 aspect-h-9 来保持 16:9 比例；图片会完整显示 */}
        <div className="w-full ">
          <Image
            src="/visit_us.jpg"
            alt="Visit Us Details"
            width={1920}
            height={1080}
            quality={75}
            priority
          />
          
        </div>
      </div>
    </div>
  );
}
