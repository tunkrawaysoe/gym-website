

type Props = {}

const NavBar = (props: Props) => {
  const flexBetween = "flex items-center w-full justify-between";

  return (
    <div className={`${flexBetween} py-2 fixed z-30`}>
      <div className={`${flexBetween} mx-auto w-5/6 bg-black gap-3`}>
        <div>
          Hello

        </div>
        <div>
          World
        </div>

      </div>
    </div>
  )
}

export default NavBar