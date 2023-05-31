export const views = {
	"layout": "layout",
	"menu": "menu",
	"navbar": "navbar",
	"pages": {
		"agenda": {...{
			"speaker": "pages.agenda::speaker"
		}, toJSON: () => "pages.agenda"},
		"map": "pages.map",
		"session": "pages.session",
		"speaker": "pages.speaker",
		"speakers": "pages.speakers"
	}
};
export const listeners = {
	"onEnvStart": "onEnvStart",
	"onSessionStart": "onSessionStart",
	"onUserFirstJoin": "onUserFirstJoin"
};
