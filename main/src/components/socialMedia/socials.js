import { faGithub, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TbBrandLeetcode } from "react-icons/tb";
export const socials = [
    {
        name: 'github',
        path: 'https://github.com/ouchkaih',
        icon:  <FontAwesomeIcon icon={faGithub} className='w-5 h-5' />

    },
    {
        name: 'twitter',
        path: 'https://twitter.com/ouchkaih',
        icon:  <FontAwesomeIcon icon={faXTwitter} className='w-5 h-5' />

    },
    {
        name: 'instagram',
        path: 'https://www.instagram.com/ismailouchkaih/',
        icon: <FontAwesomeIcon icon={faInstagram} className='w-5 h-5' />
    },
    {
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/ismail-ouchkaih-8a5022231/',
        icon: <FontAwesomeIcon icon={faLinkedinIn} className='w-5 h-5' />
    },
    {
        name: 'leetcode',
        path: 'https://github.com/ouchkaih',
        icon: <TbBrandLeetcode  className='w-7 h-7'/>
    }
]