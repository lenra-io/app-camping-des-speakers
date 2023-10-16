import { Favorite } from "../classes/Favorite.js";

/**
 * 
 * @param {import("@lenra/app").props} props 
 * @param {import("@lenra/app").event} _event 
 * @param {import("@lenra/app").Api} api 
 */
export async function toggleFavorite(props, _event, api) {
    const collection = api.data.coll(Favorite);
    const [fav] = await collection.find({ user: "@me" })
    if (!fav) return collection.createDoc(new Favorite([props.session], "@me"));

    if (fav.sessions.includes(props.session)) fav.sessions = fav.sessions.filter(s => s !== props.session);
    else fav.sessions.push(props.session);
    await collection.updateDoc(fav);
}

/**
 * 
 * @param {import("@lenra/app").props} props 
 * @param {import("@lenra/app").event} _event 
 * @param {import("@lenra/app").Api} api 
 */
export async function toggleFavoriteFilter(props, _event, api) {
    console.log("_event", _event);
    const collection = api.data.coll(Favorite);
    const [fav] = await collection.find({ user: "@me" })
    if (!fav) return collection.createDoc(new Favorite([], "@me", true));
    fav.filter = !fav.filter;
    await collection.updateDoc(fav);
}