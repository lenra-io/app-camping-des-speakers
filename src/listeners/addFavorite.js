import { Favorite } from "../classes/Favorite.js";
/**
 * 
 * @param {import("@lenra/app-server").props} props 
 * @param {import("@lenra/app-server").event} _event 
 * @param {import("@lenra/app-server").Api} api 
 */
export async function addFavorite(props, _event, api) {
    api.data.createDoc(new Favorite(props.session, "@me"));
    api.data.find(Favorite, {}).then((data) => {
        console.log("ADD FAVORITE");
        console.log(data);
    });
}