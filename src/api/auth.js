export const signIn = (email, password) => {
    return fetch({
        method: 'POST',
        url: '/auth',
        body: {email, password},
    });
}
