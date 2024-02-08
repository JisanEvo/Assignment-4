function calculateMoney(ticketSale) {
    if(ticketSale <=0){
        return `Please Provide a Positive Number`
    }

    const total=ticketSale*120-(500+(8*50));
    return total;

    }





    function checkName(name) {

        const lowercaseName = name.toLowerCase();

        if (['a', 'y', 'i', 'e', 'o', 'u', 'w'].some(endLetter => lowercaseName.endsWith(endLetter))) {
            return 'Good Name';
        }


        return 'Bad Name';
    }






function deleteInvalids(elements) {
    if (!Array.isArray(elements)) {
        return 'Your input is not a valid array';
    }


    const unique = [];
    for (const item of elements) {


        if (typeof item === `number` && !isNaN(item)) {
            unique.push(item)
        }


    }
    return unique;
}




function password(obj) {
    if (typeof obj.birthYear === 'string' && obj.birthYear.length !== 4) {


return `Invalid BirthDay Date`

    }

    else {
        return object.siteName[0].toUpperCase() + object.siteName.substring(1) + `#` + object.name + `@` + object.birthYear;

    }

}




function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
      return 'Invalid input';
    }


    let sum = 0;
    let tax = 0;

    for (const item of arr) {
      if (item >= 3000) {
        tax = item * 0.2;
      }
      sum +=item;
    }

    const total = sum - tax ;

    const livecost=total-livingCost;

    if (livecost <= 0) {
        return 'Earn More';
    }

    return livecost;
}
