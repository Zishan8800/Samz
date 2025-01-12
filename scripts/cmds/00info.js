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
		const authorName = " 𝗡𝗦 𝗦𝗔𝗛𝗘𝗟 𝗔𝗛𝗠𝗘𝗗 𝗝𝗜𝗦𝗔𝗡 ";
		const ownAge = "『 𝟭𝟵+ 』";
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
			body: `ღ《 𝗕𝗢𝗧 𝗔𝗡𝗗 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 𝗡𝗦 》⸙
\🤖BOT NAME : ⩸__${global.GoatBot.config.nickNameBot}__⩸
\👾BOT SYSTEM PREFIX : ${global.GoatBot.config.prefix}
\💙 OWNER NAME: ${authorName}
\📝AGE  : ${ownAge}
\💕Marred: ${Status}
\🌐WP : ${authorNumber}
\🌍 FACEBOOK LINK : ${authorFB}
\🗓DATE : ${date}
\⏰NOW TIME : ${time}
\🔰ANY HELP CONTACT :⩸__${messenger}__⩸
\📛BOT I'S RUNNING FOR : ${uptimeString}
    𝗧𝗲𝗹𝗶𝗴𝗿𝗮𝗺: — কথা বলার মত কেউ নেই>
    𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺: এটা তো সেলেব্রিটিদের জন্য, আমি সেলেব্রিটি না 🙂
    𝗖𝗮𝗽𝗰𝘂𝘁: ভিডিও এডিট করি 😑
    𝗧𝗶𝗸𝘁𝗼𝗸: এটা তো প্রতিবন্দীরা চালায় 😷
    𝗬𝗼𝘂𝘁𝘂𝗯𝗲: বিরহের গান শুনি 😒💔
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
