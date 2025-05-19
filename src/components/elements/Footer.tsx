import { Container } from '../shared/Container'
import Logo from '/assets/icon.svg'
import { navItems } from './Navbar'
import { NavItem } from '../shared/NavItem'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialMedia = [<FaFacebook />, <FaInstagram />, <FaLinkedin />];



const Footer = () => {
    return (
        <footer className='relative pt-10 rounded-t-3xl bg-box-bg'>
            <Container className="pb-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className='flex items-center gap-3 mb-4 md:mb-0'>
                        <img src={Logo} alt="logo image" className='w-7 h-7' />
                        <span className="text-lg font-semi-bold text-heading-1">EdgeAi</span>
                    </div>

                    <ul className='flex gap-6 text-heading-1'>
                        {navItems.map((item, index) => (
                            <NavItem key={index} href={item.href} text={item.text} />
                        ))}
                    </ul>

                    <ul className='flex gap-6 text-heading-1'>
                        {socialMedia.map((item, index) => (
                            <a key={index} href="#" className='text-heading-1 text-2xl hover:scale-105'>
                                {/* {`${item}`} */}
                                {item}
                            </a>
                        ))}
                    </ul>
                </div>
            </Container>
        </footer>
    )
}

export default Footer