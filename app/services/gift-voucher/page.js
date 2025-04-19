import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";

export default function GiftVoucherPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl min-h-screen">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/services">Services</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/services/gift-voucher">
              Gift Voucher
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="space-y-16">
        <section className="flex flex-col  gap-8 items-center">
          <h2 className="text-3xl font-bold text-center mb-8">Gift Voucher</h2>
          <p className="text-lg text-center mb-4">
            Only valid for purchases at the Warringah Mall store.
          </p>
          <div className="flex-1 space-y-4">
            <Image
              src="/gift-voucher-2.jpg"
              alt="Remedial Massage"
              width={1200}
              height={500}
              className="rounded-lg shadow-lg object-cover"
            />
            <Image
              src="/gift-voucher-1.jpg"
              alt="Remedial Massage"
              width={1200}
              height={500}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
