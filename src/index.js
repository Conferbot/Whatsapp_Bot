const qrcode = require("qrcode-terminal");

const { Client } = require("whatsapp-web.js");
const client = new Client();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", (message) => {
  if (message.body === "Hi") {
    message.reply("Hlo buddy how can i help u?...");
    console.log("coming");
  }
  console.log(message.body);
});

client.initialize();
