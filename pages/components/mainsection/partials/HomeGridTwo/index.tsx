import NewPost from "./partials/newpost"
import ProfilePictures from "./partials/profilepictures"
import RecentPosts from "./partials/recentpost"
const HomeGridTwo = () => {
    return (
      <>
      <div className="flex flex-col h-screen overflow-y-scroll">
      <ProfilePictures/>
     <NewPost/>
     <RecentPosts/>
     </div>
      </>
    )
  }
  
  export default  HomeGridTwo