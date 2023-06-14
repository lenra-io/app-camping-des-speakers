import { Data } from "@lenra/app-server";

export class Note extends Data {
    /**
     * 
     * @param {string} session
     * @param {user} user 
     * @param {string} note 
     * @param {number} creationDate 
     */
    constructor(session, user, note, creationDate = new Date().getTime()) {
        super();
        this.user = user;
        this.session = session;
        this.note = note;
        this.creationDate = creationDate;
    }
}