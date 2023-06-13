import { Data } from "@lenra/app-server";

export class Note extends Data {
    /**
     * 
     * @param {string} session
     * @param {string} note 
     * @param {user} user 
     */
    constructor(session, user, note) {
        super();
        this.user = user;
        this.session = session;
        this.note = note;
    }
}