import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";

export default function ServicesPage() {
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
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-16">
        {/* Remedial Massage Section */}
        <section className="flex flex-col gap-8 items-center">
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
              <p className="font-accord">
                <span className="text-4xl text-primary">
                  Remedial Massage
                </span>{" "}
                is a targeted form of massage therapy that addresses specific
                areas of pain, tension, or injury within the body. It is an
                effective treatment for restoring function to injured muscle
                tissue, boosting circulation, and promoting relaxation. This
                therapeutic approach is highly personalized, with therapists
                conducting an initial assessment to identify the root causes of
                discomfort or dysfunction before designing a tailored treatment
                plan.
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

        {/* Foot Massage Section */}
        <section className="flex flex-col gap-8 items-center">
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
                <span className="text-4xl text-primary">
                  Foot Massage (Reflexology)
                </span>{" "}
                is a therapeutic massage technique that focuses on stimulating
                specific points on the soles of the feet, believed to correspond
                to different organs and systems in the body. According to the
                principles of reflexology, applying pressure to these points can
                promote health and healing in the related body areas.
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

        {/* Hotstone Massage Section */}
        <section className="flex flex-col  gap-8 items-center">
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
                <span className="text-4xl text-primary">
                  Essential Oil Hotstone Massage
                </span>{" "}
                is an indulgent therapy that blends the soothing warmth of
                heated basalt stones with the aromatic benefits of essential
                oils to promote deep relaxation and well-being. In this
                specialized massage technique, smooth, heated stones are
                strategically placed on key areas of the body to relax the
                muscles and improve circulation. The heat from the stones not
                only helps to melt away muscular tension but also enhances the
                absorption of the essential oils into the skin.
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
