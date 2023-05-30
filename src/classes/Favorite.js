import { Data } from "@lenra/app-server";

export class Favorite extends Data {
    /**
     * 
     * @param {string} session 
     * @param {user} user 
     */
    constructor(session, user) {
        super();
        this.session = session;
        this.user = user;
    }
}