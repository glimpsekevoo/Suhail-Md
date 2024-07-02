const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.cSUHAIL_17_53_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDM3LFxuICAgICAgICAzMixcbiAgICAgICAgMTYxLFxuICAgICAgICA3MixcbiAgICAgICAgMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MixcbiAgICAgICAgODcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NixcbiAgICAgICAgOTIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYzLFxuICAgICAgICA5OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICA4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA2NSxcbiAgICAgICAgODYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MixcbiAgICAgICAgMzQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM0LFxuICAgICAgICA1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDUsXG4gICAgICAgIDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyLFxuICAgICAgICA1NixcbiAgICAgICAgNTMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NixcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICA2OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjksXG4gICAgICAgIDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjksXG4gICAgICAgIDY4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc3LFxuICAgICAgICA0LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA4NyxcbiAgICAgICAgODQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvNnpWamljczN4MWUzNytiOHp2OXlPY3U5cVBObnJGc0FNenF2YUF3SFBNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2TVViNGJNUlNZT1NLbWZxWXI2ekh3XCIsXG4gIFwicGhvbmVJZFwiOiBcImFjNGRkNzJmLWRmMDUtNDUyMS1hYmU1LWM0ZjkyZTU4M2NiOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTcsXG4gICAgICAyMjcsXG4gICAgICAxNjIsXG4gICAgICA3NCxcbiAgICAgIDIxNCxcbiAgICAgIDE0NyxcbiAgICAgIDEwNyxcbiAgICAgIDEwOSxcbiAgICAgIDE4NyxcbiAgICAgIDc1LFxuICAgICAgMTIzLFxuICAgICAgOTYsXG4gICAgICA1NixcbiAgICAgIDY1LFxuICAgICAgMTEsXG4gICAgICA4NixcbiAgICAgIDg5LFxuICAgICAgMTM0LFxuICAgICAgMTg0LFxuICAgICAgMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgMjM2LFxuICAgICAgOTAsXG4gICAgICA5OCxcbiAgICAgIDI3LFxuICAgICAgODYsXG4gICAgICAxLFxuICAgICAgNzQsXG4gICAgICAyMTksXG4gICAgICAxMTgsXG4gICAgICAyNDksXG4gICAgICAxNzcsXG4gICAgICAxNjIsXG4gICAgICAyMDcsXG4gICAgICAyMjcsXG4gICAgICAyMDQsXG4gICAgICA0MSxcbiAgICAgIDEzMSxcbiAgICAgIDE4OCxcbiAgICAgIDEwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUOEVUUFNHWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0Nzk4NTE1MDUyOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJ+UHJpbmNlIHJvY2t5IHdyeSAswr/Cvz8/XCIsXG4gICAgXCJsaWRcIjogXCIyMzM1NjQ4ODQ5OTIyMTk6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQaUpxZGdIRUkvOWtMUUdHQllnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZyekpzejI2NXBuM2FrUlJqT2gxRTBlcEJBNlRxeEl6U0FaN2pxdW1yUTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieXBlaWsyME1BWmR3VUIycHo4WVljU2ZrdklIczg4V1E3czNlNkV2aGlOQmdqZTR2ZEZRVm14aklVbmk5N2QrOEppKzNidlNPQXFGR1hEaFNxcW95RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTnU3dXBiQ2xTU2tkUGhWZUI4MEJUNVpkaXF6SUFLVG0wK0svbTJLcEFyNUdERUkxelhKMUdyNkFzeGdDNVhWc1JubXVFWDVBMDAvSjkwUXByUUhxQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0Nzk4NTE1MDUyOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5OTQyODAzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQTkzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBOTMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5Y2RuZzJYYXdPd0RKWmFubXVuTW9aY0N6NmVUNFdrLzJnb0RjTEI0KzMwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNjQyNzA1ODQsXCJjdXJyZW50SW5kZXhcIjoxOCxcImRldmljZUluZGV4ZXNcIjpbMTYsMCwxNyw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk5MjY5NjkyOTdcIn0iCn0="// PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
