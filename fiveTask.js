

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

