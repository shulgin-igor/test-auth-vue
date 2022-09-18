export const signIn = (email, password) => {
    return fetch('/auth', {
        method: 'POST',
        body: JSON.stringify({email, password}),
    }).then((response) => response.json());
}
