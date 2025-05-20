import { SelectedPage } from "@/Shared/type"
import Head from "@/Shared/Head";
Head



type Props = {
    setSelectedPage : (value : SelectedPage) => void ;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-6">
        {/**Title and description */}
        <div className="w-5/6 mx-auto">
            <Head>OUR CLASSES</Head>
            <p>
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
            </p>
        </div>
        {/** Side Scrolling Image */}
        <div className="w-full">


        </div>

    </section>
  )
}

export default OurClasses