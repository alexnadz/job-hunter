import { FooterLink } from './footer-link';
import { FooterLinkItem } from './public-footer.consts';

type FooterLinksColumnProps = {
    title: string;
    links: FooterLinkItem[];
};

export const FooterLinksColumn = ({ title, links }: FooterLinksColumnProps) => (
    <div>
        <h3 className="mb-4 font-medium text-white">{title}</h3>
        <ul className="space-y-2 text-sm">
            {links.map((link, index) => (
                <li key={index}>
                    <FooterLink href={link.href}>{link.text}</FooterLink>
                </li>
            ))}
        </ul>
    </div>
);
