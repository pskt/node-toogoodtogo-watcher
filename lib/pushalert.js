const got = require("got");
const { config } = require("./config");

const api = got.extend({
    prefixUrl: "https://api.pushalert.co/rest/v1/",
});

module.exports = {
    notifyPushAlert,
};

function notifyPushAlert(textMessage, htmlMessage, url) {
    api.post(
        `send`,
        {
            headers: {
                Authorization: `api_key=${config.get("notifications.pushAlert.apiKey")}`
            },
            form: {
                title: 'TGTG',
                message: textMessage,
                url: url
            }
        }
    );
}
