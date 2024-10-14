export const useUserDate = (birthdayDate: string ) => {

    if(birthdayDate){
        const today = new Date();
        const birth = new Date(birthdayDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDifference = today.getMonth() - birth.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        const birthday = birth.getFullYear()
        return {birthday, age}
    }else {
        return {birthday: null, age: null}
    }



};