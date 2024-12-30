import Image from "next/image";
interface ContentSection2Props {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    bulletPoints: string[];
    imagePosition?: 'left' | 'right';
}

export default function ContentSection2({ 
    title, 
    description, 
    imageSrc, 
    imageAlt,
    bulletPoints,
    imagePosition = 'right' 
}: ContentSection2Props) {
    return (
        <section id='section-content-2'>
          <div className='py-20 xl:py-[130px]'>
            <div className='global-container'>
              <div className='grid items-center gap-10 md:grid-cols-[1.1fr_minmax(0,_1fr)] lg:gap-[60px] xl:gap-x-[110px]'>
                <div 
                  className={`jos ${imagePosition === 'right' ? 'order-2' : 'order-1'}`} 
                  data-jos_animation='fade-left'
                >
                  <div className='overflow-hidden rounded-[10px]'>
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      width={550}
                      height={550}
                      className='h-auto w-full'
                    />
                  </div>
                </div>
                <div 
                  className={`jos ${imagePosition === 'right' ? 'order-1' : 'order-2'}`} 
                  data-jos_animation='fade-right'
                >
                  <div className='mb-6'>
                    <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-white sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
                      {title}
                    </h2>
                  </div>
                  <div className=''>
                    <p className='mb-8 text-lg leading-[1.42] last:mb-0 lg:text-[21px]'>
                      {description}
                    </p>
                    <ul className='flex flex-col gap-y-5 font-spaceGrotesk text-xl leading-tight tracking-tighter lg:mt-12 lg:text-[28px]'>
                      {bulletPoints.map((point, index) => (
                        <li key={index} className='flex items-start gap-x-3'>
                          <div className='mt-[2.5px] h-[30px] w-[30px]'>
                            <Image
                              src='/svgs/icon-green-badge-check.svg'
                              alt='check-circle'
                              width={30}
                              height={30}
                              className='h-full w-full'
                            />
                          </div>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}