export type DeceasedsProfilesType = {
    id: number
    user_id: number
    last_name: string,
    first_name: string,
    middle_name: string,
    gender: string
    last_name_en: string
    first_name_en: string
    middle_name_en: string
    date_of_birth: string
    date_of_death: string
    cause_of_death: string
    religion_id: number
    country: string
    region: string
    city: string
    coordinates: string
    grave_photo: string[]
    photos: string[]
    social_profiles: string
    created_at: string
    updated_at: string
    isFavorite: boolean
}