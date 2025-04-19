import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";

export default function RemedialMassagePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
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
            <BreadcrumbLink href="/services/remedial-massage">
              Remedial Massage
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-16">
      
        {/* Hotstone Massage Section */}
        <section className="flex flex-col  gap-8 items-center">
        <h2 className="text-3xl font-bold text-center mb-8">
            Hotstone Massage
          </h2>
          <div className="flex-1">
            <Image
              src="/service_hot_stone.jpg"
              alt="Remedial Massage"
              width={1200}
              height={500}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="flex-1 space-y-4">
            <div className="space-y-3">
              <p>
                Essential Oil Hotstone Massage is an indulgent therapy that
                blends the soothing warmth of heated basalt stones with the
                aromatic benefits of essential oils to promote deep relaxation
                and well-being. In this specialized massage technique, smooth,
                heated stones are strategically placed on key areas of the body
                to relax the muscles and improve circulation. The heat from the
                stones not only helps to melt away muscular tension but also
                enhances the absorption of the essential oils into the skin.
              </p>
              <p>
                At our spa, clients can choose to enhance their massage
                experience with one of three specially selected oils: lavender,
                sweet orange, or coconut oil. Lavender oil is renowned for its
                calming and relaxing properties, making it an excellent choice
                for reducing anxiety and promoting peaceful sleep. Sweet orange
                oil, with its bright and uplifting aroma, is ideal for boosting
                mood and alleviating stress. Coconut oil, known for its
                hydrating and skin-conditioning properties, adds a deeply
                nourishing component to the massage, leaving the skin soft and
                smooth.
              </p>
              <p>
                Each session lasts between 40 to 60 minutes, during which our
                skilled therapists employ a combination of massage techniques
                and hot stone placements that integrate the chosen essential
                oil. This treatment not only soothes physical tension but also
                balances the senses, providing a holistic approach to wellness.
                It is perfect for those seeking a therapeutic escape from the
                daily grind, offering a serene retreat that rejuvenates both
                body and mind.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
