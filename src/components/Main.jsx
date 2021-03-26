import Leftbar from "./Leftbar";
import Profile from "./Profile";

function Main() {
    return (
     <div className="main">
          <div className="container">
             <div className="main-inner">
             <Leftbar/>
              <Profile/>
             </div>
          </div>
     </div>
    );
  }
  
  export default Main;