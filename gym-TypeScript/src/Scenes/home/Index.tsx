import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import ActionButton from '@/Shared/ActionButton';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from '@/Shared/type';

type Props = {
    setSelectedPage :  (value : SelectedPage)=>void
    
}

const Home = ({setSelectedPage}: Props) => {
    
  return (
    <section id='home' className="gap-16 py-10 md:h-full md:pb-0">
        <div className='flex'>
            <div>
                <div>
                    <img alt="" src={`${HomePageText}`}/>
                    <p>
                        Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                        Studios to get the Body Shapes That you Dream of.. Get Your Dream
                        Body Now.
                    </p>
                </div>
                <div className='flex'>
                    <ActionButton>
                        Join Now
                    </ActionButton>
                    <AnchorLink className='text-sm font-bold text-primary-500  underline'
                    onClick = {()=>setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}>
                        <p>Learn More</p>

                    </AnchorLink>

                </div>
          </div>

            <div>
                <img alt='home-page-graphic' src={`${HomePageGraphic}`}/>

            </div>
        </div>
    </section>
  )
}

export default Home