import { EmployerInsert, QueryParams, QuerySupabaseClientParam } from '@/lib/shared/types';
import { getProfileByUserId } from './profile.queries';

const GET_EMPLOYER_BY_USER_ID_ERROR_MESSAGE =
    'Unable to fetch employer at this time. Please try again later.';
const INSERT_EMPLOYER_ERROR_MESSAGE =
    'Unable to create employer at this time. Please try again later.';

export const getEmployerByUserId = async ({
    supabaseClient,
    args,
}: QueryParams<{ userId: string }>) => {
    const { userId } = args;

    try {
        const { profileData } = await getProfileByUserId({ supabaseClient, args: { userId } });

        const { data: employerData, error: employerError } = await supabaseClient
            .from('employers')
            .select('*')
            .eq('profile_id', profileData.id)
            .single();

        // TODO:
        if (employerError) {
            console.error(employerError);
            throw new Error(employerError.message);
        }

        return {
            employerData,
        };
    } catch (error) {
        console.error(error);
        throw new Error(GET_EMPLOYER_BY_USER_ID_ERROR_MESSAGE);
    }
};

export const getEmployerForCurrentUser = async ({ supabaseClient }: QuerySupabaseClientParam) => {
    try {
        const {
            data: { user },
        } = await supabaseClient.auth.getUser();

        // TODO: create common error messages
        if (!user) {
            throw new Error('User not found');
        }

        const { employerData } = await getEmployerByUserId({
            supabaseClient: supabaseClient,
            args: { userId: user.id },
        });

        return {
            employerData,
        };
    } catch (error) {
        console.error(error);
        throw new Error(GET_EMPLOYER_BY_USER_ID_ERROR_MESSAGE);
    }
};

export const insertEmployer = async ({
    supabaseClient,
    args,
}: QueryParams<{ employerInsertData: EmployerInsert }>) => {
    const { employerInsertData } = args;

    try {
        const { data: employerData, error: employerError } = await supabaseClient
            .from('employers')
            .insert(employerInsertData)
            .select('*')
            .single();

        if (employerError) {
            console.error(employerError);
            throw new Error(employerError.message);
        }

        return { employerData };
    } catch (error) {
        console.error(error);
        throw new Error(INSERT_EMPLOYER_ERROR_MESSAGE);
    }
};
