import Image from "next/image";
import Link from "next/link";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  delay: number;
  link: string;
}

interface ServicesSectionProps {
  title?: string;
  services: ServiceItem[];
}

const ServiceCard = ({ service }: { service: ServiceItem }) => (
  <li
    className='jos group rounded-[10px] bg-[#121212] p-[30px]'
    data-jos_delay={service.delay}
  >
    <div className='mb-8 flex items-center gap-x-6'>
      <div className='h-[50px] w-[50px]'>
        <Image
          src={service.icon}
          alt={`${service.title} icon`}
          width={50}
          height={50}
          className='h-full w-auto'
        />
      </div>
      <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
        {service.title}
      </div>
    </div>
    <p className='mb-7 text-[21px] leading-[1.4]'>
      {service.description}
    </p>
    <Link
      href={service.link}
      className='relative flex h-[30px] w-[30px] items-center justify-center overflow-hidden'
    >
      <Image
        src='/svgs/icon-white-arrow-right.svg'
        alt='icon-white-arrow-right'
        width={30}
        height={30}
        className='relative left-0 transition-all duration-300 group-hover:left-full'
      />
      <Image
        src='/svgs/icon-green-arrow-right.svg'
        alt='icon-white-arrow-right'
        width={30}
        height={30}
        className='absolute -left-full transition-all duration-300 group-hover:left-0'
      />
    </Link>
  </li>
);

export default function ServicesSection({ 
  title = "Get all the tools to tackle cybersecurity together",
  services,
}: ServicesSectionProps) {
  return (
    <section id='service-section'>
      <div className='pb-20 pt-20 xl:pb-[130px] xl:pt-[150px]'>
        <div className='global-container'>
          <div className='jos mx-auto mb-10 text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[856px]'>
            <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-white sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
              {title}
            </h2>
          </div>
          <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}