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
      name: '𝙎𝘼𝙃𝙀𝙇 𝘼𝙃𝙈𝙀𝘿 𝙅𝙄𝙎𝘼𝙉',
      gender: '𝙈𝙖𝙡𝙚',
      age: '𝟭𝟵+',
      height: '𝙐𝙣𝙠𝙣𝙤𝙬𝙣',
      facebookLink: '𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙄𝘿 𝙉𝙖𝙖𝙞',
      nick: '𝙉𝙞𝙘𝙠𝙣𝙖𝙢𝙚 𝙉𝙖𝙞'
    };

    const bold = 'https://i.imgur.com/ykAKHTG.jpeg'; // Replace with your Google Drive videoid link https://drive.google.com/uc?export=download&id=here put your video id

    const tmpFolderPath = path.join(__dirname, 'tmp');

    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }

    const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
    const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

    fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

    const response = `
Owner Information:💗
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
