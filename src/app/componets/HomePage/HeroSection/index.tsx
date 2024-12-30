import SpinningLogo from "./LogoSpinner";

interface HeroSectionProps {
    title: string;
    description: string;
}
// ... existing imports ...

const HeroSection = ({ title, description }: HeroSectionProps) => {
  return (
      <section id='hero-section'>
        <div className='relative z-[1] overflow-hidden text-center dark:text-white'>
          <div className="relative bg-[url('/images/cyber.jpg')] bg-cover bg-no-repeat pb-20 pt-28 md:pb-[265px] md:pt-40 lg:pt-44 xl:pt-[224px] before:absolute before:inset-0 before:bg-black/60 before:content-['']">
            <div className="relative z-10 backdrop-blur-sm px-4">
              <SpinningLogo />
              <div className='global-container'>
                <h2 className='mb-6 leading-none -tracking-[3px] text-white font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl sm:text-6xl font-satoshi'>
                  {title}
                </h2>
                <div className='mx-auto max-w-[1090px]'>
                  <p className='leading-[1.33] lg:text-xl xl:text-2xl font-satoshi text-lg'>
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection;
