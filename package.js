Package.describe({
	summary: 'A wrapper for node-irc, thats open source and up to date',
	version: "0.4.0",
	git: "https://github.com/rfox90/meteor-irc",
	name: "ahref:irc"
});

Package.on_use(function (api) {
	api.addFiles('index.js','server');
	api.export('irc','server');
});

Npm.depends({
	irc:'0.4.0'
});