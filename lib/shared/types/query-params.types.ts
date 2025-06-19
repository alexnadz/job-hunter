import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from '@/lib/shared/types/supabase';

export type QuerySupabaseClientParam = {
    supabaseClient: SupabaseClient<Database, 'public', Database['public']>;
};

export type QueryParams<Args extends object> = {
    args: Args;
} & QuerySupabaseClientParam;
