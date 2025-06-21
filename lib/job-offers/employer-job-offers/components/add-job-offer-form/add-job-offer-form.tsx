'use client';

import { FormLayout } from '@/lib/shared';
import { AddJobOfferFormContent } from './add-job-offer-form-content';

export const AddJobOfferForm = () => (
    <div className="max-w-3xl mx-auto py-6">
        <FormLayout title="Add New Job Offer">
            <AddJobOfferFormContent />
        </FormLayout>
    </div>
);

{
    /* <h1 className="text-2xl font-bold mb-6">Add New Job Offer</h1> */
}
{
    /* <div className="bg-card rounded-lg shadow p-6">
            <AddJobOfferFormContent />
        </div> */
}
