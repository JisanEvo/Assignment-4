


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


