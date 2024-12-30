import Image from "next/image";
import Link from "next/link";
interface Testimonial {
    id: string;
    rating: number;
    content: string;
    author: {
        name: string;
        role: string;
        image: string;
    };
}

interface TestimonialSectionProps {
    title: string;
    trustpilotLink: string;
    testimonials: Testimonial[];
}

export default function TestimonialSection({
    title = "What people are saying about AI cybersecurity",
    trustpilotLink = "https://www.example.com",
    testimonials = [],
}: TestimonialSectionProps) {
    return (
        <section id='testimonial-section' className="relative">
            <div className='pb-20 xl:pb-[150px] overflow-hidden'>
                <div className='global-container'>
                    {/* Header Section */}
                    <div className='mb-10 flex flex-wrap items-center justify-between gap-8 md:mb-16 lg:mb-20'>
                        <div className='jos max-w-[480px] lg:max-w-2xl xl:max-w-[840px]'>
                            <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-white sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
                                {title}
                            </h2>
                        </div>
                        <Link
                            rel='noopener noreferrer'
                            href={trustpilotLink}
                            className='button inline-block h-full rounded border-none bg-colorGreen py-3 text-base text-black after:border-none after:bg-white'
                        >
                            Read All Trustpilot Reviews
                        </Link>
                    </div>
                </div>

                {/* Testimonial Slider */}
                <div className='horizontal-slide-from-right-to-left grid w-[200%] grid-flow-col gap-6'>
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className='flex w-[415px] flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white'
                        >
                            <div className='block'>
                                <Image
                                    src='/svgs/icon-green-rating.svg'
                                    alt={`${testimonial.rating} star rating`}
                                    width={146}
                                    height={25}
                                />
                            </div>
                            <p>{testimonial.content}</p>
                            <div className='flex items-center gap-x-4'>
                                <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                                    <Image
                                        src={testimonial.author.image}
                                        alt={`${testimonial.author.name}'s profile picture`}
                                        width={60}
                                        height={60}
                                        className='h-full w-full object-cover object-center'
                                    />
                                </div>
                                <div className='flex flex-col gap-y-1'>
                                    <span className='block text-lg font-semibold leading-[1.6]'>
                                        {testimonial.author.name}
                                    </span>
                                    <span className='block text-sm font-light leading-[1.4]'>
                                        {testimonial.author.role}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}