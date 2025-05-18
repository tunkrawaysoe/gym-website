import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponserRedBull from '@/assets/SponsorRedBull.png'
import ActionButton from '@/Shared/ActionButton';
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from '@/Shared/type';
import useMediaQuery from '@/hooks/useMediaQuery';


type Props = {
    setSelectedPage :  (value : SelectedPage)=>void
    
}

const Home = ({setSelectedPage}: Props) => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
        <div className='md:flex mx-auto w-5/6 align-center justify-center md:h-5/6'>
        {/* MAIN HEADER */}
          <div className='mt-16 md:basis-3/5 '>
            {/**Headers */}
            <div className='md:-mt-1'>
              <div>
                <img alt='Home-page-text' src={`${HomePageText}`}/>
              </div>
              <p>
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
              </p>
            </div>
            {/** Actions */}
            <div>
              <ActionButton>
                Join Now
              </ActionButton>
              <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
              >
                <p>Learn More</p>
              </AnchorLink>
            </div>
          </div>

          <div>
            <img alt='Home-page-graphic' src={`${HomePageGraphic}`}/>
          </div>
        </div>
     

      {/* SPONSORS */}
      {isNonMobileScreen && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex  items-center justify-between gap-8">
            <img alt="redbull-sponsor" src={SponserRedBull} />
            <img alt="forbes-sponsor" src={SponsorForbes} />
            <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home