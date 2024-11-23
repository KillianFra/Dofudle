
export function retrieveStatefromLocalStorage(key: string): null | JSON {
    const state = localStorage.getItem(key);
    if (state) {
        const jsonState = JSON.parse(state);
        return jsonState;
    }
    return null;
}

export function saveStatetoLocalStorage(state: any) {
    localStorage.setItem("state", JSON.stringify(state));
}