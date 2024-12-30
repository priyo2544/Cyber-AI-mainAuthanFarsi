interface TextSliderProps {
    bulletPoints: string[];
}

export default function TextSlider({ bulletPoints }: TextSliderProps) {
    return (
        <div id='text-slide-section' className="overflow-hidden">
            <div className='bg-colorGreen py-5'>
                <div className='horizontal-slide-from-left-to-right grid grid-flow-col whitespace-nowrap gap-x-4'>
                    {bulletPoints.map((point, index) => (
                        <div key={index} className='flex text-4xl font-bold uppercase leading-5 text-black'>
                            {point}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}