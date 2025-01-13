const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
config: {
  name: "owner",
  aurthor:"Tokodori",// Convert By Goatbot Tokodori 
   role: 0,
  shortDescription: " ",
  longDescription: "",
  category: "admin",
  guide: "{pn}"
},

  onStart: async function ({ api, event }) {
  try {
    const ownerInfo = {
      name: '𝗦𝗔𝗛𝗘𝗟 𝗔𝗛𝗠𝗘𝗗 𝗝𝗜𝗦𝗔𝗡',
      gender: '𝗠𝗮𝗹𝗲',
      age: '𝟭𝟵+',
      height: '𝗨𝗻𝗸𝗻𝗼𝘄𝗻',
      facebookLink: '𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗘𝗿𝗿𝗼𝗿',
      nick: '𝗡𝗔𝗕𝗜𝗟𝗔-𝗥 𝗝𝗔𝗠𝗔𝗜 𝗫𝗔𝗡'
    };

    const bold = 'https://i.ibb.co/SXpJcYD/b0ad48c6-01ec-464f-8fb5-ed55731f10dc.jpg'; // Replace with your Google Drive videoid link https://drive.google.com/uc?export=download&id=here put your video id

    const tmpFolderPath = path.join(__dirname, 'tmp');

    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }

    const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
    const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

    fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

    const response = `
Owner Information:👾💗
Name: ${ownerInfo.name}
Gender: ${ownerInfo.gender}
Age: ${ownerInfo.age}
Height: ${ownerInfo.height}
Facebook: ${ownerInfo.facebookLink}
Nick: ${ownerInfo.nick}
`;


    await api.sendMessage({
      body: response,
      attachment: fs.createReadStream(videoPath)
    }, event.threadID, event.messageID);

    if (event.body.toLowerCase().includes('ownerinfo')) {
      api.setMessageReaction('🤍', event.messageID, (err) => {}, true);
    }
  } catch (error) {
    console.error('Error in ownerinfo command:', error);
    return api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
},
};
