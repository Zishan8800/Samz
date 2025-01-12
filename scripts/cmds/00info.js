const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "NTKhang",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const authorName = " 𝗦𝗔𝗛𝗘𝗟 𝗔𝗛𝗠𝗘𝗗 𝗝𝗜𝗦𝗔𝗡 ";
		const ownAge = "『 𝟭𝟵+👾 』";
		const messenger = "𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸.𝗰𝗼𝗺/𝘁𝗲𝗿𝗮.𝗯𝗮𝗽.𝗰4𝗫";
		const authorFB = "𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸.𝗰𝗼𝗺/𝘁𝗲𝗿𝗮.𝗯𝗮𝗽.𝗰4𝗫";
		const authorNumber = "_01731736377";
		const Status = "𝗡𝗔𝗕𝗜𝗟𝗔 💗 𝗦𝗔𝗛𝗘𝗟";
		const urls = [
"https://i.imgur.com/ykAKHTG.jpeg",
"https://i.imgur.com/ykAKHTG.jpeg",
"https://i.imgur.com/ykAKHTG.jpeg",
"https://i.imgur.com/ykAKHTG.jpeg"
];
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `《 𝘽𝙊𝙏 𝘼𝙉𝘿 𝙊𝙒𝙉𝙀𝙍 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙉𝙏𝙄𝙊𝙉 》⸙
\🤖BOT NAME : ⩸__${global.GoatBot.config.nickNameBot}__⩸
\👾BOT SYSTEM PREFIX : ${global.GoatBot.config.prefix}
\💙 OWNER NAME: ${authorName}
\📝  : ${ownAge}
\💕𝒜ℊℯ: ${Status}
\🌐𝒲𝓅 : ${authorNumber}
\🌍 ℱ𝒶𝒸ℯ𝒷ℴℴ𝓀 ℒ𝒾𝓃𝓀 : ${authorFB}
\🗓𝒟𝒶𝓉ℯ : ${date}
\⏰𝒩ℴ𝓌 𝒯𝒾𝓃ℯ : ${time}
\🔰𝒜𝓃𝓎 ℋℯ𝓁𝓅 𝒞ℴ𝓃𝓉ℯ𝒸𝓉 :⩸__${messenger}__⩸
\📛BOT I'S RUNNING FOR : ${uptimeString}
    𝒯ℯ𝓁𝒾ℊ𝓇𝒶𝓂: — কথা বলার মত কেউ নেই>
    ℐ𝓃𝓈𝓉𝒶ℊ𝓇𝒶𝓂: এটা তো সেলেব্রিটিদের জন্য, আমি সেলেব্রিটি না 🙂
    𝒞𝒶𝓅𝒸𝓊𝓉: ভিডিও এডিট করি 😑
    𝒯𝒾𝓀𝓉ℴ𝓀: এটা তো প্রতিবন্দীরা চালায় 😷
    𝒴ℴ𝓊𝓉𝓊𝒷ℯ: বিরহের গান শুনি 😒💔
\===============`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
