import { useForm } from 'react-hook-form';
import Head from '@/Shared/Head';

type Props = {}

const ContactUs = (props: Props) => {
  return (
    <section className='w-5/6 mx-auto'>
        {/**Heading ,form and Image */}
        <div>
            {/**Heading */}
            <div className='w-3/5'>
                <Head>
                    <span className='text-primary-500'>JOIN NOW </span>
                    TO GET IN SHAPE
                </Head>
                <p className='text-sm'>
                    Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                    sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                    adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                </p>
                
            </div>
            <div>
                <img/>
            </div>
        </div>
    
        
    </section>
  )
}

export default ContactUs