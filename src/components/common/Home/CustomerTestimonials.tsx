import BeWiseTypography from '@/components/common/BeWiseTypography';
import { testimonials } from '@/lib/constants/arrays/testimonials';
import { testimonials_img } from '@/lib/constants/imagespatharray/testimonialspath';
import { TYPOGRAPHY_VARIANT } from '@/lib/constants/typography';

const CustomerTestimonials = () => {
  return (
    <div className='min-h-screen mb-6 lg:mb-0 mx-auto bg-[url("/images/homebgimages/customersectionbg.svg")] text-center  bg-no-repeat bg-cover bg-white grid  lg:grid-cols-2 gap-4'>
      <div className='flex w-10/12 pl-3 mx-auto flex-col  items-start justify-center '>
        <BeWiseTypography variant={TYPOGRAPHY_VARIANT.H2}>What Our Customer says</BeWiseTypography>
        <p className='text-gray-600 text-start mb-10'>
          Our partners trust us to transform student experiences and drive success. Through tailored programs, we've
          boosted engagement, strengthened career outcomes, and supported institutional growth. Colleges value our
          seamless collaboration and measurable results. Join us to empower your students and achieve more together!
        </p>
      </div>
      <div className='w-11/12 pr-3 lg:ml-0 mx-auto flex flex-col  justify-center gap-6 '>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`w-full md:w-10/12 mx-auto flex items-center gap-5 bg-white border border-l-4 border-b-4 rounded-l-lg shadow-md p-6 hover:shadow-lg transition-all ${
              index % 2 === 1 ? 'ml-4' : 'mr-4'
            } ${index % 2 === 1 ? 'border-l-blue-700' : ''}`}
          >
            <img src={testimonials_img[index]} alt={testimonial.name} className='w-16 h-16 rounded-full mx-auto mb-4' />
            <div className='text-start'>
              <h3 className='text-xl font-semibold mb-2'>{testimonial.name}</h3>
              <p className='text-gray-500 text-sm'>{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerTestimonials;
