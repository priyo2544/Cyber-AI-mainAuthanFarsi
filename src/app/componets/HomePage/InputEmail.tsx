import Image from "next/image";
import Link from "next/link";

export default function InputEmail() {
    return (
        <div className='mt-4'>
        <form
          action='#'
          method='post'

          className='jos mt-11 text-base font-bold px-3'
        >
          <div className='relative mx-auto h-[60px] max-w-[500px] overflow-hidden rounded'>
            <input
              type='email'
              placeholder='Enter your email...'
              className='h-full w-full bg-colorCodGray px-6 pr-[150px]'
              required={true}
            />
            <button
              type='submit'
              className='button absolute right-0 top-0 inline-block h-full rounded border-none bg-colorGreen py-0 text-black after:border-none after:bg-white'
            >
              Get Started
            </button>
          </div>
        </form>
        <div className='jos mt-4 flex items-center justify-center gap-x-[1px] sm:gap-x-[10px] text-center text-base px-3'>
          <Image
            src='/svgs/icon-green-badge-check.svg'
            alt='icon-green-badge-check.svg'
            width={20}
            height={20}
            className='inline-block'
          />
          <p>
            By signing up you agree to our
            <Link
              rel='noopener noreferrer'
              href='http://www.example.com'
              className='underline hover:text-colorGreen px-1'
            >
              Terms &amp; Conditions.
            </Link>
          </p>
        </div>
      </div>
    )
}

