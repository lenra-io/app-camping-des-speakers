import { Note } from "../classes/Note.js";

/**
 * 
 * @param {import("@lenra/app-server").props} props 
 * @param {import("@lenra/app-server").event} event 
 * @param {import("@lenra/app-server").Api} api 
 */
export async function saveNote(props, event, api) {
    if (props._id) {
        props.note = event.value.note;
        return api.data.updateDoc(props);
    }
    return api.data.createDoc(new Note(props.session, "@me", event.value.note));
}

/**
 * 
 * @param {import("@lenra/app-server").props} props 
 * @param {import("@lenra/app-server").event} event 
 * @param {import("@lenra/app-server").Api} api 
 */
export async function deleteNote(props, event, api) {
    console.log(props);
    let note = await api.data.getDoc(Note, props._id);

    return api.data.deleteDoc(note);
}
