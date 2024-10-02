import Link from"next/link"
export default function Footer(){
    return(
        <div className="Footer">
            
            <ul className="Footer-button">
                <Link href={"/facebook-icon"}><li>Facebook</li></Link>
                <Link href={"/twitter-icon"}><li>twitter</li></Link>
            </ul>
        </div>
    )
}