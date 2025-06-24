import { Button } from '@/lib/shared/ui/button';

export const ContactSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="mb-6 text-3xl font-bold">Want to Learn More?</h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                    We&apos;re always happy to chat about how Job Hunter can help with your hiring
                    needs or job search. Reach out to our team today.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button size="lg">Contact Us</Button>
                    <Button variant="outline-on-light" size="lg">
                        Join Our Team
                    </Button>
                </div>
            </div>
        </section>
    );
};
