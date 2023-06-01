import { Data } from "@lenra/app-server";

export class Favorite extends Data {
    /**
     * 
     * @param {string[]} sessions 
     * @param {boolean} filter 
     * @param {user} user 
     */
    constructor(sessions, user, filter = false) {
        super();
        this.user = user;
        this.sessions = sessions;
        this.filter = filter;
    }
}