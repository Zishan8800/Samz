module.exports = {
 config: {
	 name: "Sahel",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "rifat") {
 return message.reply({
 body: " 「❥︎----ღ᭄_ʜᴇʏ ..\n❥︎----ღ᭄_  ᴮᴿᴼᵀᴴᴱᴿ❞࿐.♡.\nᥫ 𓆩Īⱦ'ꞩ Ꞧīӻⱥⱦ𓆪\n\n𝐁𝐎𝐓𝐎𝐖𝐍𝐄𝐑\nꜱᴀʜᴇʟ ᴀʜᴍᴇᴅ」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/nocvHfz.mp4")
 });
 }
 }
}
