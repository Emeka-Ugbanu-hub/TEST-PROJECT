import Personal from "./partials/personal"
import Explore from "./partials/explore"
const HomeGridOne = () => {
  return (
    <>
    <div className="flex flex-col h-screen w-full  overflow-y-scroll hidden md:block " >
<Personal/>
<Explore/>
    </div>
    </>
  )
}

export default  HomeGridOne