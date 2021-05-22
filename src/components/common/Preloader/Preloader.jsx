
import preloader from "../../../assets/images/preloader.gif";
const Preloader =()=>{
    return(
        <div className="preloader">
              <img
            src={preloader}
            alt="loader"
          />
        </div>
    );
}

export default Preloader;