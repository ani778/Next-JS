import Link from "next/link";
import {useEffect} from 'react'
import {useRouter} from 'next/router'

const Error = () => {
    const router = useRouter();

    useEffect( ()=> {
        setTimeout(() => {
            router.push('/')
        },3000)
    },[])
    return ( 
        <div>
            <h1>Oooooops..</h1>
            <p>That page not found</p>
            <p>Go to the <Link href="/">Homepage</Link></p>
        </div>
     );
}
 
export default Error;