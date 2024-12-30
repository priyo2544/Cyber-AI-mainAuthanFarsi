import { accordionData, faqData, promoItems, servicesData, testimonialData } from "@/app/data";
import dynamic from "next/dynamic";
import HeroSection from "./HeroSection";

const ContentSection1 = dynamic(() => import('./ContentSection1'));
const ContentSection2 = dynamic(() => import('./ContentSection2'));
const PromoSection = dynamic(() => import('./PromoSection'));
const ServicesSection = dynamic(() => import('./ServicesSection'));
const TextSlider = dynamic(() => import('./TextSlider'));
const ContentSection3 = dynamic(() => import('./ContentSection3'));
const AccordionSection = dynamic(() => import('./AccordianSection'));
const FaqSection = dynamic(() => import('./FaqSection'));
const TestimonialSection = dynamic(() => import('./TestimonialSection'));
const CtaSection = dynamic(() => import('./CtaSection'));
const InputEmail = dynamic(() => import('./InputEmail'));
export default function HomePage() {
    return (
        <div>
            <HeroSection
                title="Welcome to the Future of Cyber Security With AI"
                description="We are a team of AI experts dedicated to building the future of AI. We are a team of AI experts dedicated to building the future of AI. Our cyber security platform supercharges your security with AI-powered security tools. Turn mountains of data into actionable insights and respond in real-time."
            />
            {/*...::: Promo Section Start :::... */}
            <PromoSection items={promoItems} />
            <ContentSection1
                title="Industries protect their digital assets"
                imageSrc="/images/3d.jpg"
                description1="Cybersecurity solutions are used by a wide range of all types of organizations across various industries use to protect their digital assets, networks, and sensitive data."
                description2="Our cyber security platform supercharges your security with AI-powered security tools. Turn mountains of data into actionable insights and respond in real-time."
            />

            <ContentSection2
                title="Industries protect their digital assets"
                description="Cybersecurity solutions are used by a wide range of all types of organizations across various industries use to protect their digital assets, networks, and sensitive data."
                imageSrc="/images/p2.jpg"
                imageAlt="content-img-2"
                bulletPoints={[
                    "AI cybersecurity to secure cloud platforms",
                    "Safeguard customer payment information",
                    "Secure digital assets and donor information"
                ]}
                imagePosition="right"
            />
            {/* Separator */}
            <div className='global-container overflow-hidden'>
                <div className='h-[1px] w-full bg-[#363636]' />
            </div>
            {/*...::: Services Section Start :::... */}
            <ServicesSection services={servicesData} />

            {/*...::: Text Slide Section Start :::... */}
            <div className='global-container'>
                <TextSlider bulletPoints={["#cybersecurity", "#hacking", "#tech", "#programming", "#coding", "#cybersecurity", "#hacking", "#tech", "#programming", "#coding"]} />
            </div>

            <ContentSection3
                title="Defenses to stay ahead of all evolving threats"
                imageSrc="/images/p4.jpeg"
                videoUrl="https://www.youtube.com/watch?v=3nQNiWdeH2Q"
            />

            <AccordionSection {...accordionData} />

            {/* Separator */}
            <div className='global-container overflow-hidden'>
                <div className='h-[1px] w-full bg-[#363636]' />
            </div>

            {/*...::: FAQ Section Start :::... */}
            <FaqSection
                title="Our experts are able to answer all your questions"
                faqs={faqData}
            />

            {/*...::: Testimonial Section Start :::... */}
            <TestimonialSection
                title="What people are saying about AI cybersecurity"
                trustpilotLink="https://your-trustpilot-link.com"
                testimonials={testimonialData}
            />
            {/*...::: CTA Section Start :::... */}
            <CtaSection />
            <InputEmail />
        </div>
    )
}