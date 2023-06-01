import { Data } from "@lenra/app-server";

export class Favorite extends Data {
    /**
     * 
     * @param {string[]} sessions 
     * @param {user} user 
     */
    constructor(sessions, user) {
        super();
        this.sessions = sessions;
        this.user = user;
    }
}