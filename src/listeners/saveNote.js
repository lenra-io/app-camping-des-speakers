import { Note } from "../classes/Note.js";

/**
 * 
 * @param {import("@lenra/app-server").props} props 
 * @param {import("@lenra/app-server").event} event 
 * @param {import("@lenra/app-server").Api} api 
 */
export async function saveNote(props, event, api) {
    const [note] = await api.data.find(Note, { user: "@me" })
    if (!note) {
        return api.data.createDoc(new Note(props.session, "@me", [event.value.note]));
    } else {
        note.notes = [...note.notes, event.value.note];
        return api.data.updateDoc(note);
    }
}
