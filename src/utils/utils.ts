
export function retrieveStatefromLocalStorage(key: string) {
    const state = localStorage.getItem(key);
    if (state) {
        return JSON.parse(state);
    }
    return null;
}

export function saveStatetoLocalStorage(state: any) {
    localStorage.setItem("state", JSON.stringify(state));
}

export function retrieveStatefromDB() {
    
}