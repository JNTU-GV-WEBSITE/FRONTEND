import { Button } from "react-bootstrap"
import { Link } from "react-router-dom";

const SampleButton = () =>{
    return(
        <div>
            <Link to="/a">
                <Button>Image Gallery</Button>
            </Link>
            <Link to ="/b">
                <Button>Footer</Button>
            </Link>
            <Link to ="/c">
                <Button>Api</Button>
            </Link>
        </div>
    )   
}
export default SampleButton;