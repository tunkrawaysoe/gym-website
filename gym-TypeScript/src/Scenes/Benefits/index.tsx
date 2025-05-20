import { type BenefitType } from "../../Shared/type";
import Header from "@/Shared/Head";
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/16/solid";
import Benefit from "./Benefit";
import Head from "@/Shared/Head";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/Shared/ActionButton";
ActionButton


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];


const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto w-5/6 py-20 min-h-full">
      {/**Header */}
      <div className=" md:w-3/5 md:my-5">
        <Header>
          More Than Just Gym.
        </Header>
        <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
        </p>
      </div>

      <div className="md:flex justify-between gap-8">
        {benefits.map(({icon,title,description}:BenefitType)=>(
          <Benefit
          icon={icon}
          title={title}
          description={description}
         />
        ))}

      </div>

      {/** Image and description */}
      <div className="md:flex mt-6  mx-auto md:mt-30 justify-between items-center gap-20">
        {/** Image */}
        <img src={`${BenefitsPageGraphic}`}/>

        {/** Description */}
        <div className="mt-4">
          {/**Title */}
          <div className="relative">
            <div className="before:absolute before:-top-16 before:-left-20 before:z-[-1] before:content-abstractwaves">
             <Head> MILLIONS OF HAPPY MEMBERS GETTING{" "}<span className="text-primary-500">Fit.</span></Head>
            </div>
          </div>

          {/**Description */}
          <div className="text-sm md:text-lg mb-6 z-[-1]">
            <p className="my-5">Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.</p>
            <p>
               Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
            </p>
          </div>

          {/**Button */}
          
            <div className="relative">
              <div className=" before:absolute before:-bottom-20 before:right-40 before:content-sparkles">
                <ActionButton >Join Now</ActionButton>

              </div>
            </div>

        </div>


      </div>
      
    
    </section>
  );
};

export default Benefits;
