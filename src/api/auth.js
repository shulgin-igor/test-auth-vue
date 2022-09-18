import {ServerError} from "@/errors/ServerError";

export const signIn = (email, password) => {
    return fetch('/auth', {
        method: 'POST',
        body: JSON.stringify({email, password}),
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }

        throw new ServerError(response.status);
    });
}
