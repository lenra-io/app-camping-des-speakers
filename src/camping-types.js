/**
 * @typedef {Object} Session
 * @property {SessionAttributes} attributes Les attributs de la session
 * @property {ContentChild[]} children Description de la session
 */

/**
 * @typedef {Object} SessionAttributes 
 * @property {string} key La clé de la session
 * @property {string} title Le titre de la session
 * @property {number} day Le jour de la session
 * @property {string} time L'heure de la session
 * @property {string} duration La durée de la session
 * @property {string} room La salle de la session
 * @property {string[]} speakers Les speakers de la session
 * @property {string} type Le type de la session
 */

/**
 * @typedef {Object} Node
 * @property {string} tag Le tag du noeud
 * @property {ContentChild[]} children Les enfants du noeud
 */

/**
 * @typedef {string|Node} ContentChild
 */

/**
 * @typedef {Object} Speaker
 * @property {SpeakerAttributes} attributes Les attributs du speaker
 * @property {ContentChild[]} children Description du speaker
 */

/**
 * @typedef {Object} SpeakerAttributes
 * @property {string} key La clé du speaker
 * @property {string} name Le nom du speaker
 * @property {string} company L'entreprise du speaker
 * @property {string} photoURL L'url de la photo du speaker
 * @property {Social[]} socials Les réseaux sociaux du speaker
 */

/**
 * @typedef {Object} Social
 * @property {string} name Le pseudo sur le réseau social
 * @property {string} link L'url du profil sur le réseau social
 * @property {string} icon L'icône du réseau social
 */

/**
 * @typedef {Object} Sponsor
 * @property {SponsorAttributes} attributes Les attributs du sponsor
 * @property {ContentChild[]} children Description du sponsor
 */

/**
 * @typedef {Object} SponsorAttributes
 * @property {string} key La clé du sponsor
 * @property {string} title Le nom du sponsor
 * @property {string} logoUrl L'url du logo du sponsor
 * @property {string} url L'url du site web du sponsor
 * @property {number} category Le niveau du sponsor
 * @property {Social[]} socials Les réseaux sociaux du sponsor
 */

/**
 * @typedef {Object} Day
 * @property {string} short Le nom court du jour
 * @property {string} long Le nom long du jour
 */

/**
 * @typedef {Object} Room
 * @property {number} id L'id de la salle
 * @property {string} name Le nom de la salle
 */