import { Tables, TablesInsert, TablesUpdate } from './database.types';

export type JobOffer = Tables<'job_offers'>;
export type JobOfferInsert = TablesInsert<'job_offers'>;
export type JobOfferUpdate = TablesUpdate<'job_offers'>;

export type Employer = Tables<'employers'>;
export type EmployerInsert = TablesInsert<'employers'>;
export type EmployerUpdate = TablesUpdate<'employers'>;

export type Profile = Tables<'profiles'>;
export type ProfileInsert = TablesInsert<'profiles'>;
export type ProfileUpdate = TablesUpdate<'profiles'>;
