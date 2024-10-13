export const UseDate = (birthdayDate: string, deathDate: string) => {
    /*if (isNaN(new Date(birthdayDate).getTime())) {
        return null;
    }*/

    const birthday = birthdayDate ? new Date(birthdayDate).getFullYear() : null
    const death = deathDate ? new Date(deathDate).getFullYear() : null
    const life = birthday && death ? death - birthday : null
    console.log(birthday)
    console.log(birthdayDate)
    return {birthday, death, life}
};

