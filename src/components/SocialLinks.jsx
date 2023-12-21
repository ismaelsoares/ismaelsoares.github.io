import { LogoGithub, LogoInstagram, LogoTwitter, LogoLinkedin } from 'react-ionicons';
export const SocialLinks = () => {
    return (
        <div id="social-links">
            <a href="https://github.com/ismaelsoares" target='_blank' rel="noreferrer">
                <LogoGithub />
            </a>
            <a href="https://instagram.com/ismael_soares" target='_blank' rel="noreferrer">
                <LogoInstagram />
            </a>
            <a href="https://twitter.com/ismael_doria" target='_blank' rel="noreferrer">
                <LogoTwitter />
            </a>
            <a href="https://linkedin.com/in/ismaeldoria" target='_blank' rel="noreferrer">
                <LogoLinkedin />
            </a>
        </div>
    );
}