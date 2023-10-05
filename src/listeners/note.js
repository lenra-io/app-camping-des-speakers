import { Note } from "../classes/Note.js";

/**
 * 
 * @param {import("@lenra/app").props} props 
 * @param {import("@lenra/app").event} event 
 * @param {import("@lenra/app").Api} api 
 */
export async function saveNote(props, event, api) {
    const collection = api.data.coll(Note);
    if (props._id) {
        props.note = event.value.note;
        return collection.updateDoc(props);
    }
    return collection.createDoc(new Note(props.session, "@me", event.value.note));
}

/**
 * 
 * @param {import("@lenra/app").props} props 
 * @param {import("@lenra/app").event} event 
 * @param {import("@lenra/app").Api} api 
 */
export async function deleteNote(props, event, api) {
    const collection = api.data.coll(Note);
    console.log(props);
    let note = await collection.getDoc(props._id);

    return collection.deleteDoc(note);
}
