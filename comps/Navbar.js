import Link from "next/link";
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <>
            <Image src="/next.svg" width={125} height={50}/>
            <h1>This is Navbar</h1>
            <Link href="/">Home</Link> 
            <Link href="/about">About</Link>
            <Link href="/ninjas">Ninja</Link>
        </>
     );
}
 
export default Navbar;