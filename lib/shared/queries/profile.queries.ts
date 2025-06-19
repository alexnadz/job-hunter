import { ProfileInsert, QueryParams, QuerySupabaseClientParam } from '@/lib/shared/types';

const GET_PROFILE_BY_USER_ID_ERROR_MESSAGE =
    'Unable to fetch user profile at this time. Please try again later.';
const GET_PROFILE_FOR_CURRENT_USER_ERROR_MESSAGE =
    'Unable to fetch user profile at this time. Please try again later.';
const INSERT_PROFILE_ERROR_MESSAGE =
    'Unable to create user profile at this time. Please try again later.';

export const getProfileByUserId = async ({
    supabaseClient,
    args: params,
}: QueryParams<{ userId: string }>) => {
    const { userId } = params;

    try {
        const { data: profileData, error: profileError } = await supabaseClient
            .from('profiles')
            .select('*')
            .eq('user_id', userId)
            .single();

        // TODO:
        // if (!profileData) {
        //     console.error(profileError);
        //     throw new Error(GET_PROFILE_BY_USER_ID_ERROR_MESSAGE);
        // }

        // TODO:
        if (profileError) {
            console.error(profileError);
            throw new Error(profileError.message);
        }

        return {
            profileData,
        };
    } catch (error) {
        console.error(error);
        throw new Error(GET_PROFILE_BY_USER_ID_ERROR_MESSAGE);
    }
};

export const getProfileForCurrentUser = async ({ supabaseClient }: QuerySupabaseClientParam) => {
    try {
        const {
            data: { user },
        } = await supabaseClient.auth.getUser();

        // TODO: create common error messages
        if (!user) {
            throw new Error('User not found');
        }

        const { profileData } = await getProfileByUserId({
            supabaseClient: supabaseClient,
            args: { userId: user.id },
        });

        return {
            profileData,
        };
    } catch (error) {
        console.error(error);
        throw new Error(GET_PROFILE_FOR_CURRENT_USER_ERROR_MESSAGE);
    }
};

export const insertProfile = async ({
    supabaseClient,
    args,
}: QueryParams<{ insertProfileData: ProfileInsert }>) => {
    const { insertProfileData } = args;

    try {
        const { data: profileData, error: profileError } = await supabaseClient
            .from('profiles')
            .insert(insertProfileData)
            .select('*')
            .single();

        if (profileError) {
            console.error(profileError);
            throw new Error(profileError.message);
        }

        return {
            profileData,
        };
    } catch (error) {
        console.error(error);
        throw new Error(INSERT_PROFILE_ERROR_MESSAGE);
    }
};
