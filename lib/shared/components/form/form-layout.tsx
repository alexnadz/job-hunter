import { ReactNode } from 'react';
import { Card, CardContent } from '@/lib/shared/components/ui/card';

type FormLayoutProps = {
    children: ReactNode;
    title?: string;
    description?: string;
    className?: string;
};

export const FormLayout = ({ children, title, description, className = '' }: FormLayoutProps) => {
    return (
        <Card className={`w-full p-6 ${className}`}>
            <CardContent className="p-0 space-y-6">
                {(title || description) && (
                    <div className="flex flex-col items-center space-y-2 text-center">
                        {title && (
                            <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
                        )}
                        {description && (
                            <p className="text-sm text-muted-foreground">{description}</p>
                        )}
                    </div>
                )}
                {children}
            </CardContent>
        </Card>
    );
};
