export const views = {
	"layout": "layout",
	"menu": "menu",
	"navbar": "navbar",
	"pages": {
		"agenda": {...{
			"speaker": "pages.agenda::speaker"
		}, toJSON: () => "pages.agenda"},
		"map": "pages.map",
		"speakers": "pages.speakers"
	}
};
export const listeners = {
	"increment": "increment",
	"onEnvStart": "onEnvStart",
	"onSessionStart": "onSessionStart",
	"onUserFirstJoin": "onUserFirstJoin"
};
