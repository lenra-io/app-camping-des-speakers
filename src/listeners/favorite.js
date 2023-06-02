import { Favorite } from "../classes/Favorite.js";

/**
 * 
 * @param {import("@lenra/app-server").props} props 
 * @param {import("@lenra/app-server").event} _event 
 * @param {import("@lenra/app-server").Api} api 
 */
export async function toggleFavorite(props, _event, api) {
    const [fav] = await api.data.find(Favorite, { user: "@me" })
    if (!fav) return api.data.createDoc(new Favorite([props.session], "@me"));

    if (fav.sessions.includes(props.session)) fav.sessions = fav.sessions.filter(s => s !== props.session);
    else fav.sessions.push(props.session);
    await api.data.updateDoc(fav);
}

/**
 * 
 * @param {import("@lenra/app-server").props} props 
 * @param {import("@lenra/app-server").event} _event 
 * @param {import("@lenra/app-server").Api} api 
 */
export async function toggleFavoriteFilter(props, _event, api) {
    console.log("_event", _event);
    const [fav] = await api.data.find(Favorite, { user: "@me" })
    if (!fav) return api.data.createDoc(new Favorite([], "@me", true));
    fav.filter = !fav.filter;
    await api.data.updateDoc(fav);
}