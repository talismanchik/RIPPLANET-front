export type DeceasedProfileType = {
    id: number
    user_id: number
    last_name: string
    first_name: string
    middle_name: string
    gender: 'Мужской' | 'Женский'
    last_name_en: string
    first_name_en: string
    middle_name_en: string
    date_of_birth: string
    date_of_death: string
    cause_of_death: string | null
    religion_id: number | null
    country: string
    region: string
    city: string
    coordinates: string | null
    grave_photo: string[] | null
    photos: string[] | null
    social_profiles: string[] | null
    created_at: string | null
    updated_at: string | null
    candles: string[]
    hobbies: string[]
    work: string[]
    education: string[]
    religion: string[] | null
}

export const initialState: DeceasedProfileType = {
    id: 1,
    user_id: 1,
    last_name: '',
    first_name: '',
    middle_name: '',
    gender: 'Мужской' ,
    last_name_en: '',
    first_name_en: '',
    middle_name_en: '',
    date_of_birth: '',
    date_of_death: '',
    cause_of_death:  null,
    religion_id:  null,
    country: '',
    region: '',
    city: '',
    coordinates:  null,
    grave_photo:  null,
    photos: [''],
    social_profiles: null,
    created_at: null,
    updated_at: null,
    candles: [''],
    hobbies: [''],
    work: [''],
    education: [''],
    religion:  null
}