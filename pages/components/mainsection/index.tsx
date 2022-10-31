import HomeGridOne from "./partials/HomeGridOne"
import HomeGridTwo from "./partials/HomeGridTwo"
import HomeGridThree from "./partials/HomeGridThree"
const MainSection = () => {
  return (
    <>
    <div className="block grid-cols-fixed gap-4 w-10/12 h-screen ml-10 mt-32 md:grid md:ml-20">
<HomeGridOne/>
<HomeGridTwo/>
<HomeGridThree/>
    </div>
    </>
  )
}

export default MainSection