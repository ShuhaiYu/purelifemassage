import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";

export default function FootMassagePage() {
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
            <BreadcrumbLink href="/services/foot-massage">
              Foot Massage
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-16">
        {/* Foot Massage Section */}
        <section className="flex flex-col gap-8 items-center">
          <h2 className="text-3xl font-bold text-center mb-8">
            Foot Massage (Reflexology)
          </h2>
          <div className="flex-1">
            <Image
              src="/service_foot.jpg"
              alt="Remedial Massage"
              width={1200}
              height={500}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="flex-1 space-y-4">
            <div className="space-y-3">
              <p>
                Foot Massage (Reflexology) is a therapeutic massage technique
                that focuses on stimulating specific points on the soles of the
                feet, believed to correspond to different organs and systems in
                the body. According to the principles of reflexology, applying
                pressure to these points can promote health and healing in the
                related body areas.
              </p>
              <p>
                The practice begins with a gentle cleansing of the feet,
                followed by a series of pressing, rubbing, and kneading
                maneuvers targeting various reflex points. Each point is
                massaged using thumb and finger techniques, which are said to
                release blockages and restore energy flow throughout the body.
                Commonly treated areas include the toes, arch, and heel, each
                linked to aspects like digestion, respiratory health, and
                hormonal balance.
              </p>
              <p>
                Reflexology sessions typically last between 40 to 60 minutes,
                during which the client can relax in a comfortable position.
                This non-invasive therapy is often considered a holistic
                approach to wellness, complementing traditional medical
                treatments and offering a peaceful, rejuvenating experience.
                Many find it particularly beneficial for stress relief,
                improving circulation, and supporting overall vitality.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
