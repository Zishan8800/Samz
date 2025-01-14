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
      name: '𝕊𝕋𝔸𝕍𝔼ℕ 𝕁𝕀𝕊𝔸ℕ ',
      gender: 'ɱαℓε',
      age: '𝟏𝟗+',
      height: '𝚄𝙽𝙺𝙽𝙾𝚆𝙽',
      facebookLink: 'ʜᴛᴛᴘꜱ://ᴡᴡᴡ.ꜰᴀᴄᴇʙᴏᴏᴋ.ᴄᴏᴍ/ᴛᴇʀᴀ.ʙᴀᴘ.ᴄ4x',
      nick: 'ᅳNᅳᅳiᅳᅳcᅳᅳkᅳᅳnᅳᅳaᅳᅳmᅳᅳeᅳ ᅳEᅳᅳrᅳᅳrᅳᅳoᅳᅳrᅳ '
    };

    const bold = 'https://i.imgur.com/eW5DpQr.jpeg'; // Replace with your Google Drive videoid link https://drive.google.com/uc?export=download&id=here put your video id

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
