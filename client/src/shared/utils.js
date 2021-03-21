// * -- cookies calculate level function
export function calculateLevel(punctions, startingLevel = 10) {
    if (punctions < startingLevel) {
        return 1;
    }

    return 1 + calculateLevel(punctions, startingLevel * 2);
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

export const parseServerError = (errors) => {
    let errorMsg = '';
    errors.forEach((error) => {
        if (!error.field) {
            errorMsg = errorMsg.concat(`${error.message}\n`);
        } else {
            errorMsg = errorMsg.concat(`-${error.field}: ${error.message}\n`);
        }
    });
    return errorMsg;
};
