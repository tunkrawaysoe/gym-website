import AnchorLink from "react-anchor-link-smooth-scroll";
type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Benefit = ({icon,description,title}: Props) => {
  return (
    <div className='mt-5 border-2 border-gray-100 px-5 py-10 rounded-md text-center'>
       <div className='flex justify-center mb-4'>
         <div className='border-2 rounded-full p-4 border-gray-100 bg-primary-500'>
            {icon}
         </div>
       </div>

      <h4 className='font-bold'>{title}</h4>

      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        
        href={``}
      >
        <p>Learn More</p>
      </AnchorLink>
    </div>
  )
}

export default Benefit