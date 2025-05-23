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
        {/* Remedial Massage Section */}
        <section className="flex flex-col gap-8 items-center">
          <h2 className="text-3xl font-bold text-center mb-8">
            Remedial Massage
          </h2>
          <div className="flex-1">
            <Image
              src="/service_remedial.jpg"
              alt="Remedial Massage"
              width={1200}
              height={500}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="flex-1 space-y-4">
            <div className="space-y-3">
              <p>
                Remedial massage is a targeted form of massage therapy that
                addresses specific areas of pain, tension, or injury within the
                body. It is an effective treatment for restoring function to
                injured muscle tissue, boosting circulation, and promoting
                relaxation. This therapeutic approach is highly personalized,
                with therapists conducting an initial assessment to identify the
                root causes of discomfort or dysfunction before designing a
                tailored treatment plan.
              </p>
              <p>
                During a remedial massage session, the therapist applies precise
                pressure and uses a variety of techniques, such as deep tissue
                massage, trigger point therapy, and stretching. These techniques
                are aimed at releasing tight muscles, improving range of motion,
                and decreasing pain. The therapist may focus on specific areas
                that are problematic, ensuring that the treatment is both
                effective and efficient.
              </p>
              <p>
                Remedial massage is beneficial for a wide range of conditions,
                including back pain, headaches, arthritis, sports injuries, and
                repetitive strain injuries. It can also aid in the management of
                chronic conditions such as fibromyalgia and chronic fatigue
                syndrome. Each session typically lasts between 60 to 90 minutes,
                depending on the individual&apos;s needs and the severity of
                their condition.
              </p>
              <p>
                This form of massage is often recommended as part of a broader
                health management strategy, complementing other treatments such
                as physiotherapy or chiropractic care. Whether aiming to recover
                from an injury, manage a chronic condition, or simply maintain
                optimal body function, remedial massage offers a profound way to
                enhance overall health and wellbeing.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
