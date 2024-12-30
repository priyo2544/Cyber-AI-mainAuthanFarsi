"use client";

import useAccordion from "@/app/hooks/useAccordian";
import Image from "next/image";

interface AccordionItem {
    icon: string;
    title: string;
    content: string;
  }
  
  interface CounterItem {
    value: number;
    label: string;
  }
  
  interface AccordionSectionProps {
    // New props
    accordionItems: AccordionItem[];
    heading: string;
    description: string;
    counterItems: CounterItem[];
  }
  
  export default function AccordionSection({
    accordionItems,
    heading,
    description,
    counterItems
  }: AccordionSectionProps) {

    const [activeIndex, handleAccordion] = useAccordion();
    return (
      <section id='content-section-4'>
        <div className='pb-20 xl:pb-[150px]'>
          <div className='global-container'>
            <div className='grid items-center gap-12 lg:grid-cols-[minmax(0,_.75fr)_1fr] lg:gap-20 xl:gap-24'>
              {/* Process Accordion */}
              <ul className='accordion tab-content flex flex-col gap-y-6' id='process-accordian'>
                {accordionItems.map((item, index) => (
                  <li
                    key={index}
                    className={`jos accordion-item rounded-[10px] bg-[#121212] px-7 py-[30px] ${
                      activeIndex === index ? 'active' : ''
                    }`}
                    data-jos_delay='0.1'
                  >
                    <div
                      onClick={() => handleAccordion(index)}
                      className='accordion-header flex items-center justify-between text-xl leading-[1.2] -tracking-[1px] lg:text-3xl'
                    >
                      <div className='mb-3 flex items-center gap-x-6'>
                        <Image
                          src={item.icon}
                          alt='icon-green-process-accordion'
                          width={36}
                          height={50}
                          className='h-[50px] w-auto'
                        />
                        <h5 className='font-spaceGrotesk text-white'>{item.title}</h5>
                      </div>
                      <div className='accordion-icon is-chevron'>
                        {/* Chevron images remain the same */}
                        <Image
                          src='/svgs/icon-white-cheveron-down.svg'
                          alt='chevron'
                          width={30}
                          height={30}
                        />
                        <Image
                          src='/svgs/icon-green-cheveron-up.svg'
                          alt='chevron'
                          width={30}
                          height={30}
                          className='absolute inset-0'
                        />
                      </div>
                    </div>
                    <div className='accordion-content disappear translate-y-3 text-lg leading-[1.42] lg:text-[21px]'>
                      <p>{item.content}</p>
                    </div>
                  </li>
                ))}
              </ul>
  
              <div className='jos' data-jos_animation='fade-right'>
                <div className='mb-6'>
                  <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-white sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
                    {heading}
                  </h2>
                </div>
                <div>
                  <p className='mb-8 text-lg leading-[1.42] last:mb-0 lg:text-[21px]'>
                    {description}
                  </p>
                </div>
                
                <ul className='mt-[50px] grid grid-cols-1 gap-10 gap-y-5 text-center sm:grid-cols-3'>
                  {counterItems.map((counter, index) => (
                    <li key={index}>
                      <h3 className='font-spaceGrotesk text-5xl leading-[1.05] tracking-[-1px] text-colorGreen md:text-5xl lg:text-6xl xl:text-[70px]'
                          data-module='countup'>
                        <span className='start-number' data-countup-number={counter.value}>
                          {counter.value}
                        </span>
                        %
                      </h3>
                      <span className='mt-4 block text-[21px] font-normal'>
                        {counter.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }