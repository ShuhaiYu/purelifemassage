import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";

export default function PhotosPage() {
  const imageCount = 7; // 假设有7组图片

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/photos">Photos</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-16">
        <h2 className="text-3xl font-bold text-center mb-8">Photos</h2>

        {/* 图片展示区域 */}
        <div className="space-y-12">
          {[...Array(imageCount)].map((_, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Main Image */}
              <div className="w-full md:w-2/3 relative group">
                <Image
                  src={`/photos/main-${index + 1}.jpg`}
                  alt={`Main view ${index + 1}`}
                  width={1900}
                  height={1200}
                  className={`
                    w-full
                    h-auto           /* 手机：自适应高度，保持比例 */
                    object-contain   /* 手机：完整显示，不裁剪 */
                    rounded-lg
                    shadow-xl
                    transition-transform duration-300
                    group-hover:scale-105
                    md:h-96          /* ≥md：固定高度 */
                    md:object-cover  /* ≥md：填充并裁剪 */
                  `}
                  priority={index < 3} // 前3张优先加载
                />
              </div>

              {/* Side Image */}
              <div className="w-full md:w-1/3 relative group">
                <Image
                  src={`/photos/side-${index + 1}.jpg`}
                  alt={`Side view ${index + 1}`}
                  width={1200}
                  height={1900}
                  className={`
                    w-full
                    h-auto
                    object-contain
                    rounded-lg
                    shadow-xl
                    transition-transform duration-300
                    group-hover:scale-105
                    md:h-96
                    md:object-cover
                  `}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
