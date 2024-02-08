function checkName(name) {

    const lowercaseName = name.toLowerCase();

    if (['a', 'y', 'i', 'e', 'o', 'u', 'w'].some(endLetter => lowercaseName.endsWith(endLetter))) {
        return 'Good Name';
    }


    return 'Bad Name';
}

