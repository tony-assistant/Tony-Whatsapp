const fs = require("fs");
const axios = require("axios");
const { Client, Location } = require("./index");

const SESSION_FILE_PATH = "./session.json";
let sessionCfg;
if (fs.existsSync(SESSION_FILE_PATH)) {
    sessionCfg = require(SESSION_FILE_PATH);
}

const client = new Client({
    puppeteer: { headless: false },
    session: sessionCfg,
});

client.initialize();

client.on("qr", (qr) => {});

client.on("authenticated", (session) => {
    sessionCfg = session;
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function (err) {
        if (err) {
            console.error(err);
        }
    });
});

client.on("auth_failure", (msg) => {});

client.on("ready", () => {});

client.on("message", async (msg) => {
    axios
        .post("http://localhost:3333/api/whatsapp-message", {
            phone: msg.from,
            message: msg.body,
        })
        .then((response) => {
            if (response.data.status) {
                response.data.messages.map((message) => {
                    client.sendMessage(msg.from, message);
                });
            }
        })
        .catch((err) => {
            console.log(err);
        });
});

client.on("message_create", (msg) => {
    if (msg.fromMe) {
    }
});

client.on("message_revoke_everyone", async (after, before) => {
    if (before) {
    }
});

client.on("message_revoke_me", async (msg) => {});

client.on("message_ack", (msg, ack) => {
    if (ack == 3) {
    }
});

client.on("group_join", (notification) => {
    notification.reply("User joined.");
});

client.on("group_leave", (notification) => {
    notification.reply("User left.");
});

client.on("group_update", (notification) => {});

client.on("change_battery", (batteryInfo) => {
    const { battery, plugged } = batteryInfo;
});

client.on("disconnected", (reason) => {});
