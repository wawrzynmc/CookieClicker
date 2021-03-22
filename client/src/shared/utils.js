// * -- cookies calculate level function
export function calculateLevel(points, startingLevel = 10) {
    if (points < startingLevel) {
        return 1;
    }

    return 1 + calculateLevel(points, startingLevel * 2);
}

// * -- check gained achivements
export function checkAchivements(points, level, achivements, gainedAchivementsIds) {
    const newAchivements = achivements
        .filter((achivement) => {
            return (
                achivement.points <= points &&
                achivement.level <= level &&
                !gainedAchivementsIds.includes(achivement.id)
            );
        })
        .map((achivement) => achivement.id);

    return newAchivements;
}

// * -- local storage functions
export const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (error) {
        console.warn(error);
        return undefined;
    }
};

export const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (error) {
        console.warn(error);
    }
};

// * -- server errors parser
export const parseServerError = (errors) => {
    let errorMsg = '';
    errors.forEach((error) => {
        errorMsg = errorMsg.concat(`${error.message}\n`);
    });
    return errorMsg;
};

// * -- compare arrays
export const compareArraysContent = (array1, array2) => {
    return JSON.stringify(array1) === JSON.stringify(array2);
};

// * -- remove element from array
export const removeValueFromArray = (array, value) => {
    return array.filter(function (element) {
        return element !== value;
    });
};
