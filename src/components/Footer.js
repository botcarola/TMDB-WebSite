import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {

    return(
        <footer className="flex justify-center bg-zinc-900 ">
            <ul className="w-48 flex p-3 text-gray-50 text-2xl justify-evenly">
                <li>
                    <a href="https://www.linkedin.com/in/carolina-lerner-223034214/" target="_blank">
                        <BsLinkedin />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/botcarola" target="_blank">
                        <BsGithub />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/car0labc/" target="_blank">
                        <BsInstagram />
                    </a>
                </li>        
            </ul>
            <div>
            </div>            
        </footer>
    )
}

export default Footer;