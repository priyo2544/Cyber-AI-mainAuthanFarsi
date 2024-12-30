import Image from "next/image";
import Link from "next/link";

interface ContentSection1Props {
    title: string;
    description1: string;
    description2: string;
    imageSrc: string;
}

const pStyle = 'mb-8 text-lg leading-[1.42] last:mb-0 lg:text-[21px]'

export default function ContentSection1({ title, description1, description2, imageSrc }: ContentSection1Props) {
    return (
        <section id='section-content-1'>
          {/* Section Spacer */}
          <div className='py-20 xl:py-[130px]'>
            {/* Section Container */}
            <div className='global-container'>
              <div className='grid items-center gap-10 md:grid-cols-[minmax(0,_1fr)_1.3fr] lg:gap-[60px] xl:gap-x-[94px]'>
                <div className='jos' data-jos_animation='fade-left'>
                  <div className='overflow-hidden rounded-[10px]    '>
                    <Image
                      src={imageSrc}
                      alt='content-img-2'
                      width={550}
                      height={550}
                      className='h-auto w-full'
                    />
                  </div>
                </div>
                <div className='jos' data-jos_animation='fade-right'>
                  {/* Section Content Block */}
                  <div className='mb-6'>
                    <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px]  font-satoshi sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
                      {title}
                    </h2>
                  </div>
                  {/* Section Content Block */}
                  <div>
                    <p className={pStyle}>
                      {description1}
                    </p>
                    <p className={pStyle}>
                      {description2}
                    </p>
                    <Link
                      rel='noopener noreferrer'
                      href='https://www.example.com'
                      className='button inline-block h-full rounded border-none bg-colorGreen py-3 text-base text-black after:border-none after:bg-white'
                    >
                      Explore the Platform
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
    )
}