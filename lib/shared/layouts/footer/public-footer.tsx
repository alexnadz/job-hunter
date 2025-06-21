import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

import { FooterLinksColumn } from './footer-links-column';
import {
    FOOTER_JOB_SEEKER_LINKS,
    FOOTER_EMPLOYER_LINKS,
    FOOTER_COMPANY_LINKS,
} from './public-footer.consts';
import { FooterLink } from './footer-link';

export const PublicFooter = () => (
    <footer className="bg-gray-950 py-12 px-4 text-gray-300">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                <div>
                    <h2 className="mb-4 text-xl font-bold text-white">JobHub</h2>
                    <p className="mb-4 text-sm">Connecting talent with opportunity</p>
                    <div className="flex space-x-4">
                        <FooterLink href="#">
                            <Facebook size={20} />
                        </FooterLink>
                        <FooterLink href="#">
                            <Twitter size={20} />
                        </FooterLink>
                        <FooterLink href="#">
                            <Linkedin size={20} />
                        </FooterLink>
                        <FooterLink href="#">
                            <Instagram size={20} />
                        </FooterLink>
                    </div>
                </div>

                <FooterLinksColumn title="For Job Seekers" links={FOOTER_JOB_SEEKER_LINKS} />

                <FooterLinksColumn title="For Employers" links={FOOTER_EMPLOYER_LINKS} />

                <FooterLinksColumn title="Company" links={FOOTER_COMPANY_LINKS} />
            </div>

            <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
                <p>© {new Date().getFullYear()} JobHunter. All rights reserved.</p>
            </div>
        </div>
    </footer>
);
