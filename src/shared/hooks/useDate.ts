export const useDate = (birthdayDate: string, deathDate: string) => {

    const birthday = birthdayDate ? new Date(birthdayDate).getFullYear() : null
    const death = deathDate ? new Date(deathDate).getFullYear() : null
    const age = birthday && death ? death - birthday : null
    return {birthday, death, age}
};

