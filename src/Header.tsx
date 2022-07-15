import { FC } from "react";
type HeaderProps = {}
const Header: FC<HeaderProps> = (props) => {
    return <div className="flex bg-gray-200" >
        <div  >
            <img className='w-20 h-16' src='https://media.discordapp.net/attachments/966570615236595712/982970628170735646/unknown.png?width=427&height=427' />
        </div>
        <div className="p-2">
            <h1>Ankit Bisht</h1>
            <h2>Portfolio</h2>
        </div>
        <nav className="p-5">
            <ul>
                <li>
                    <a className="p-2" href="#about">Home</a>
                    <a className="p-2" href="#products">About</a>
                    <a className="p-2" href="#services">Projects</a>
                    <a className="p-2" href="#contact">Resume</a>

                </li>
            </ul>
        </nav>
    </div>
};

Header.defaultProps = {

}

export default Header;
