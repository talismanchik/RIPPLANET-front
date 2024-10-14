export type UserType = {
    id: number
    last_name: string
    first_name: string,
    middle_name: string
    gender: 'Мужской' | 'Женский'
    last_name_en: string
    first_name_en: string
    middle_name_en: string
    date_of_birth: string
    religion_id: number
    photos: string[]
    social_profiles: string[]
    email: string
    email_verified_at: string
    role: 'admin' | 'user'
    created_at: string
    updated_at: string
    phone: string
}