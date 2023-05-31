export const views = {
	"menu": "menu",
	"navbar": "navbar",
	"pages": {
		"agenda": {...{
			"speaker": "pages.agenda::speaker"
		}, toJSON: () => "pages.agenda"},
		"map": "pages.map",
		"session": "pages.session",
		"speakers": "pages.speakers"
	}
};
export const listeners = {
	"onEnvStart": "onEnvStart",
	"onSessionStart": "onSessionStart",
	"onUserFirstJoin": "onUserFirstJoin"
};
