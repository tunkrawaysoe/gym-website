import { useForm } from 'react-hook-form';
import Head from '@/Shared/Head';
import Contact from '@/assets/ContactUsPageGraphic.png';
import Boy from '@/assets/Boyy.png';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactUs = () => {
  const inputStyle = `w-full rounded-lg bg-gray-200 px-5 py-3 placeholder-gray-500`;
  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const isValid = await trigger(); // Wait for validation
    if (!isValid) return;

    // Submit logic here — you could post data to a server
    console.log('Submitted:', data);
  };

  return (
    <section id='contactus' className='w-5/6 mx-auto'>
      <div className='md:flex md:justify-between gap-16 mt-10'>
        {/* Heading */}
        <div className='md:w-3/5'>
          <Head>
            <span className='text-primary-500'>JOIN NOW </span>
            TO GET IN SHAPE
          </Head>
          <p className='my-5'>
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>

          {/* Form */}
          <form
            target='_blank'
            onSubmit={handleSubmit(onSubmit)}
            className='mt-10 flex flex-col gap-5'
          >
            <input
              type='text'
              placeholder='Name'
              className={inputStyle}
              {...register('name', {
                required: 'Name is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters',
                },
                maxLength: {
                  value: 50,
                  message: 'Name cannot exceed 50 characters',
                },
              })}
            />
            {errors.name && (
              <p className='mt-1 text-red-500 text-sm'>{errors.name.message}</p>
            )}

            <input
              type='email'
              placeholder='Email'
              className={inputStyle}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email format',
                },
              })}
            />
            {errors.email && (
              <p className='mt-1 text-red-500 text-sm'>{errors.email.message}</p>
            )}

            <textarea
              placeholder='Message'
              className={inputStyle}
              rows={4}
              {...register('message', {
                required: 'Message is required',
                minLength: {
                  value: 5,
                  message: 'Message must be at least 5 characters',
                },
                maxLength: {
                  value: 200,
                  message: 'Message cannot exceed 200 characters',
                },
              })}
            />
            {errors.message && (
              <p className='mt-1 text-red-500 text-sm'>{errors.message.message}</p>
            )}
           <div>
            <button
              type='submit'
              className=" rounded-lg bg-secondary-500 px-8 py-2 transition duration-500 hover:text-white"
            >
              Submit
            </button>
           </div>
            
          </form>
        </div>

        {/* Image Section */}
        <div className='md:w-2/5'>
          <img src={Boy} alt='Contact Graphic' className='rounded-full' />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
