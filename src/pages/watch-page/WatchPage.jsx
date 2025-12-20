import { useSearchParams } from "react-router"
import Header from "../../widgets/header"

const WatchPage = ()=>{
    const [searchParams] = useSearchParams()
    return(
        <>
        <Header/>
        <div>
            <iframe width="420" height="315" src ={`https://www.youtube.com/embed/${searchParams.get('v')}`}></iframe>
        </div>
        </>
    )
}
export default WatchPage