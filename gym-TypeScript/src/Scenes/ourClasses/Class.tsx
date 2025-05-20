

type Props = {
  name : string;
  description ?: string
  image : string;
}

const Class = ({name , description , image}: Props) => {
   const overlayStyles = `p-5 absolute z-30 flex
 h-full w-[350px] flex-col items-center justify-center
  whitespace-normal bg-black text-center text-white
  opacity-0 transition duration-500 hover:opacity-70`;

  return (
    <li className="relative mx-5  inline-block">
       <div className={`${overlayStyles} text-sm` }>
         <h2 className="text-2xl my-4">
          {name}
         </h2>
         <p>
          {description}
         </p>
       </div>
       
       <div className="h-full w-[350px]">
        <img  src={`${image}`}/>
       </div>

    </li>
  )
}

export default Class