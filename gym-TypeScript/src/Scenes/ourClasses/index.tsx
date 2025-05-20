import { SelectedPage } from "@/Shared/type"
import Head from "@/Shared/Head";
import {type ClassType } from "@/Shared/type";
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image6,
  },
];


type Props = {
    setSelectedPage : (value : SelectedPage) => void ;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-gray-20 py-6">
        {/**Title and description */}
        <div className="w-5/6 mx-auto">
            <Head>OUR CLASSES</Head>
            <p className="my-2">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
            </p>
        </div>
        {/** Side Scrolling Image */}
        <div className="my-5 w-full  overflow-y-hidden overflow-x-auto">
          <ul className="w-[1000px] h-[350px] whitespace-nowrap ">
            {
              classes.map((item,index)=>(
                <Class key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image = {item.image}

                />
              
              ))
            }

          </ul>


        </div>

    </section>
  )
}

export default OurClasses