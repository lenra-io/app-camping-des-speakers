export const views = {
	"layout": {...{
		"filAriane": "layout::filAriane"
	}, toJSON: () => "layout"},
	"menu": "menu",
	"navbar": "navbar",
	"pages": {
		"agenda": {...{
			"speakerCard": "pages.agenda::speakerCard"
		}, toJSON: () => "pages.agenda"},
		"map": "pages.map",
		"session": "pages.session",
		"speaker": "pages.speaker",
		"speakerList": "pages.speakerList"
	},
	"personnalNotes": "personnalNotes"
};
export const listeners = {
	"deleteNote": "deleteNote",
	"onEnvStart": "onEnvStart",
	"onSessionStart": "onSessionStart",
	"onUserFirstJoin": "onUserFirstJoin",
	"saveNote": "saveNote",
	"toggleFavorite": "toggleFavorite",
	"toggleFavoriteFilter": "toggleFavoriteFilter"
};
