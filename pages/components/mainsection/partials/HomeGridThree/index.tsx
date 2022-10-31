import Activity from "./partials/activity"
import Suggested from "./partials/suggested"
const HomeGridThree = () => {
    return (
      <>
      <div className="flex flex-col h-screen overflow-y-scroll hidden md:block ">
     <Activity/>
     <Suggested/>
     </div>
      </>
    )
  }
  
  export default  HomeGridThree