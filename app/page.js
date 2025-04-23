import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full relative">
        <Image
          src="/hero.jpg"
          alt="Pure Life Massage"
          width={7257} // 设置实际图片宽度
          height={1947} // 设置实际图片高度
          priority
          quality={80}
        />
      </div>

      {/* Services Section */}
      <section className="py-12 mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative aspect-square">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 bg-background">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Price List Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Price List</h2>

        {/* 这里用 aspect-w-16 aspect-h-9 来保持 16:9 比例；图片会完整显示 */}
        <div className="w-full ">
          <Image
            src="/price_list.jpg"
            alt="Price List"
            width={1920}
            height={1080}
            quality={75}
            priority
          />
          <Image
            src="/hicaps.png"
            alt="participating with hicaps"
            width={1920}
            height={1080}
            quality={75}
            priority
          />
          <Image
            src="/price_deco.png"
            alt="Price Features"
            width={1920}
            height={1080}
            quality={75}
            priority
          />
        </div>
      </section>

      <section className="flex flex-col  gap-8 items-center">
        <h2 className="text-3xl font-bold text-center mb-8">Gift Voucher</h2>
        <p className="text-lg text-center mb-4">
          This gift card is valid for purchase and redeemed at Warringah Mall
          store exclusively.
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

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-extrabold mb-6">
            About Pure Life Massage
          </h2>
          <p className="text-sm md:text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-12">
            Pure Life Massage is a high-end massage shop offering a serene
            experience for mind and body rejuvenation.
            <br />
            Specializing in remedial massage, hot stone massage, and reflexology
            foot massages.
            <br />
            We are committed to providing our clients with an oasis of pleasure
            and relaxation, rooted in our philosophy of enjoying a pure and
            pleasurable lifestyle.
            <br />
            Established in 2020, Pure Life Massage has served over 5,000 guests
            and is currently located at Level 1, Westfield Warringah Mall.
            <br />
            With years of professional expertise and a clean, elegant new store
            environment, we have become the leading massage parlor in the
            Brookvale area.
            <br />
            Choosing us ensures a healing and relaxing journey.
          </p>
        </div>

        <ImageCarousel />
      </section>

      {/* Location Section */}
      {/* <section className="py-12 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center">Visit Us</h2>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <MapPin className="w-6 h-6 text-primary" />
            <p className="text-center sm:text-left">
              Level 1, Westfield Warringah Mall, Brookvale NSW 2100
            </p>
          </div>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!..."
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>
      </section> */}

      {/* Location Section */}
      <div className="w-full relative">
        <a href="https://www.google.com/maps/place/Pure+Life+Massage/@-33.7684942,151.2656739,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ab6cebd577d1:0x2eb9b75a03d0bc85!8m2!3d-33.7684942!4d151.2656739!16s%2Fg%2F11vwqj1n1n?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D">
          <Image
            src="/location.png"
            alt="Pure Life Massage"
            width={7257} // 设置实际图片宽度
            height={1947} // 设置实际图片高度
            priority
            quality={80}
          />
        </a>
      </div>
    </div>
  );
}

// Service data
const services = [
  {
    image: "/remedial.jpg",
    title: "Remedial Massage",
    description:
      "Focused therapy to relieve pain, increase mobility, and repair injury.",
  },
  {
    image: "/foot.jpg",
    title: "Foot Massage (Reflexology)",
    description:
      "Pressure on foot points to improve health, promote relaxation and reduce stress.",
  },
  {
    image: "/hotstone.jpg",
    title: "Hot Stone Massage",
    description:
      "Heated stones to relax muscles, boost circulation, and ease pain.",
  },
];
