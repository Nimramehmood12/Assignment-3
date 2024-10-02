import Link from "next/link"

export default function Header(){
    return(
       <div className="header">
        <ul className="header-buttons">
        <Link href={"/"}>
            <li>Home</li>
            </Link>
            <Link href={"https://www.pexels.com/@pixabey/"}>
            <li>About us</li>
            </Link>
            <Link href={"https://www.foodpanda.pk/contents/contact.htm"}>
            <li>Contact us</li>
            </Link>
            <Link href={"https://pixabay.com/"}>
            <li>Portfolio</li>
            </Link>
            <Link href={"/responsive"}>
            <li>Responsive</li>
            </Link>
        </ul>
       </div> 
    )
}
