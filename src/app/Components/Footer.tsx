import Link from "next/link"
import {Linkedin, Instagram, Facebook} from 'lucide-react';
import "../globals.css";

const footerSocials = [
    { id: 1, social: "LinkeIn", url: "https://www.linkedin.com/in/clibera1996/",
        icon: <Linkedin/>,
    },
    {
        id: 2, social: "Instagram", url: "https://www.instagram.com/care_therapy_sa/",
        icon: <Instagram/>,
    },
    {
        id: 3, social: "FaceBook", url: "https://www.facebook.com/",
        icon: <Facebook/>,
    }
]

const footerLinks = [
  { id: 1, text: "Home", link: "/" },
  { id: 2, text: "Our Story", link: "/OurStory" },
  { id: 3, text: "Services", link: "/OurServices" },
  { id: 4, text: "Blog", link: "/OurBlog" },
  { id: 5, text: "Contact", link: "/ContactUs" },
];
 
const Footer = () => {
        return (
            <footer data-theme="light" className="footer bg-gray-100 footer-horizontal footer-center text-base-content rounded p-10" role="contentinfo">
                <div className="grid grid-flow-row gap-5">
                    <nav className="grid grid-flow-col gap-4" aria-label="Footer navigation">
                        {footerLinks.map(({ id, text, link }) => (
                            <Link key={id} href={link} className="link link-hover">
                            {text}
                            </Link>
                        ))}
                    </nav>
                    <nav aria-label="Social media" className="grid grid-flow-col gap-4">
                    {footerSocials.map(({ id, url, social, icon }) => (
                        <a key={id} href={url} target="_blank" rel="noopener noreferrer" aria-label={`Visit us on ${social}`} className="hover:text-sky-600 transition-colors">
                            {icon}
                            <span className="sr-only">{social}</span>
                        </a>
                    ))}
                    </nav>
                    <address className="not-italic grid grid-flow-col gap-4 text-sm" aria-label="Contact information">
                        <a href="mailto:caretherapysa@gmail.com" aria-label="Email CARE Therapy">
                            caretherapysa@gmail.com
                        </a>
                        <a href="tel:+27797908846" aria-label="Call CARE Therapy">
                            +27 79 790 8846
                        </a>
                    </address>
                    <aside>
                        <p className="text-xs text-gray-500">
                            &copy; {new Date().getFullYear()} CARE Therapy Pty Ltd. All rights reserved.
                        </p>
                    </aside>
                </div>
        </footer>
)
}
 
export default Footer