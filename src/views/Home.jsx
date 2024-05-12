import { useContext } from "react"
import { PhotoContext } from "../contexts/PhotoContext"
import Foto from "../components/Foto"
const Home = ()=> {

    const {photos} = useContext(PhotoContext)

    return (
        <>
        <h2 className="text-center text-success">Natural Pic</h2>
        <div className="row m-1">
            {photos && photos.map(photo =>(
                <Foto photo={photo} key={photo.id}/>
            ))}
        </div>
        </>
    )
}
export default Home