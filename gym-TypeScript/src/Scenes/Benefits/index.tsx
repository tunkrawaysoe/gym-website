import { type BenefitType } from "../../Shared/type";
import Header from "@/Shared/Head";
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/16/solid";
import Benefit from "./Benefit";


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
    <section className="mx-auto w-5/6 py-20 h-full">
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
    
    </section>
  );
};

export default Benefits;
