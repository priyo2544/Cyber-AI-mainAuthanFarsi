"use client";

import useAccordion from "@/app/hooks/useAccordian";

interface FaqItem {
    question: string;
    answer: string;
  }
  
  interface FaqSectionProps {
    title: string;
    faqs: FaqItem[];
    className?: string;
  }
  
  export default function FaqSection({ 
    title,
    faqs,
    className = ''
  }: FaqSectionProps) {
      const [activeIndex, handleAccordion] = useAccordion();
    return (
      <section className={`faq-section ${className}`}>
        <div className='py-20 xl:pb-[150px] xl:pt-[130px]'>
          <div className='global-container'>
            {/* Title Section */}
            <div className='jos mx-auto mb-10 text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[856px]'>
              <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-white sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
                {title}
              </h2>
            </div>
  
            {/* FAQ List */}
            <ul className='accordion flex flex-col gap-y-6'>
              {faqs.map((faq, index) => (
                <li
                  key={index}
                  className={`jos accordion-item is-2 rounded-[10px] bg-[#121212] px-7 py-[30px] ${
                    activeIndex === index ? 'active' : ''
                  }`}
                  data-jos_delay={`${0.1 * (index + 1)}`}
                >
                  <div
                    onClick={() => handleAccordion(index)}
                    className='accordion-header mb-[10px] flex items-center justify-between text-xl leading-[1.33] -tracking-[1px] lg:text-3xl'
                  >
                    <h5 className='font-spaceGrotesk text-white'>
                      {faq.question}
                    </h5>
                    <div className='accordion-icon is-outline-green'>
                      <span className='accordion-icon-plus' />
                    </div>
                  </div>
                  <div className='accordion-content'>
                    <p>{faq.answer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }