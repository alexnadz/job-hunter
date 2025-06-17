import { Tables, TablesInsert, TablesUpdate } from './database.types';

export type JobOffer = Tables<'job_offers'>;
export type JobOfferInsert = TablesInsert<'job_offers'>;
export type JobOfferUpdate = TablesUpdate<'job_offers'>;
