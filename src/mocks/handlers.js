import {rest} from "msw";
import {users} from "@/fixtures/users";

export const handlers = [
    rest.post('auth', (req, res, ctx) => {
        const {email, password} = JSON.parse(req.body);
        const user = users.find((user) =>
            user.email === email && user.password === password
        );

        if (user) {
            return res(ctx.json({user}));
        }

        return res(ctx.status(401));
    })
];
