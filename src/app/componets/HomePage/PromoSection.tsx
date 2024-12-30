import Image from "next/image";

// Define TypeScript interfaces for our props
interface PromoItem {
  icon: string;
  title: string;
  description: string;
  delay?: string;
}

interface PromoSectionProps {
  items: PromoItem[];
  className?: string;
}

const PromoSection = ({ items, className = '' }: PromoSectionProps) => {
  return (
    <div id='promo-section' className={className}>
      <div className='relative z-[1] pt-20 md:-mt-[135px] md:pt-0'>
        <div className='global-container'>
          <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {items.map((item, index) => (
              <li
                key={`promo-item-${index}`}
                className='jos rounded-[10px] bg-[#121212] p-[30px] text-white'
                data-jos_delay={item.delay || `0.${index + 1}`}
              >
                <div className='mb-6 flex items-center gap-x-6'>
                  <div className='h-[50px] w-[50px]'>
                    <Image
                      src={item.icon}
                      alt={`${item.title} icon`}
                      width={50}
                      height={50}
                      className='h-full w-auto'
                    />
                  </div>
                  <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
                    {item.title}
                  </div>
                </div>
                <p className='text-[21px] leading-[1.4]'>
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;