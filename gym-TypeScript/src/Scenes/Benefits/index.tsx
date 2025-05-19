import { SelectedPage } from "@/Shared/type";
import Header from "@/Shared/Head";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

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
