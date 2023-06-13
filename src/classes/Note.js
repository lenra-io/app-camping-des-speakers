import { Data } from "@lenra/app-server";

export class Note extends Data {
    /**
     * 
     * @param {string} session
     * @param {string[]} notes 
     * @param {user} user 
     */
    constructor(session, user, notes) {
        super();
        this.user = user;
        this.session = session;
        this.notes = notes;
    }
}