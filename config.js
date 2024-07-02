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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_04_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NixcbiAgICAgICAgNTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NyxcbiAgICAgICAgNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNixcbiAgICAgICAgMjI5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAzLFxuICAgICAgICA3NixcbiAgICAgICAgNjIsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDczLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDczLFxuICAgICAgICAxNDQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjEsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE3LFxuICAgICAgICA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM1LFxuICAgICAgICAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNixcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMjQsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzksXG4gICAgICAgIDM2LFxuICAgICAgICA3NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDg3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMCxcbiAgICAgICAgNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEsXG4gICAgICAgIDg1LFxuICAgICAgICA1NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTMxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NCxcbiAgICAgICAgODMsXG4gICAgICAgIDY3LFxuICAgICAgICAyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDM1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMxLFxuICAgICAgICA1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDMxLFxuICAgICAgICAyNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDQzLFxuICAgICAgICA1NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyLFxuICAgICAgICA4OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA3OCxcbiAgICAgICAgODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgODEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid2NYbDZSQkcwTHYwMi9QWVo3VkltbTU0QW51bzZEaEVZM2ozZVZlZm0ycz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNGs1RlhYQjhTdGV1ZTdtSXBhcldQd1wiLFxuICBcInBob25lSWRcIjogXCJhNjVkODRhMS05NWNiLTQ3M2ItODczZS02MzA5ZDY3ZDhmZjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEyLFxuICAgICAgMTM0LFxuICAgICAgNyxcbiAgICAgIDEwOCxcbiAgICAgIDEzMCxcbiAgICAgIDE4OSxcbiAgICAgIDEzOSxcbiAgICAgIDg5LFxuICAgICAgMTMwLFxuICAgICAgNDMsXG4gICAgICA0LFxuICAgICAgMTY1LFxuICAgICAgMTk0LFxuICAgICAgNTYsXG4gICAgICA3NyxcbiAgICAgIDI2LFxuICAgICAgNjIsXG4gICAgICAxODQsXG4gICAgICAyNDcsXG4gICAgICAxMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTUsXG4gICAgICAxNzAsXG4gICAgICA4MixcbiAgICAgIDc5LFxuICAgICAgMjI2LFxuICAgICAgNTQsXG4gICAgICAxNzksXG4gICAgICAxMzQsXG4gICAgICAyMDUsXG4gICAgICA4MixcbiAgICAgIDEzLFxuICAgICAgNTEsXG4gICAgICAyMzQsXG4gICAgICAxODAsXG4gICAgICA1NCxcbiAgICAgIDE4NCxcbiAgICAgIDMzLFxuICAgICAgMTc5LFxuICAgICAgMjM5LFxuICAgICAgMjAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjY0N0JENzI3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3OTg1MTUwNTI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIn5QcmluY2Ugcm9ja3kgd3J5ICzCv8K/Pz9cIixcbiAgICBcImxpZFwiOiBcIjIzMzU2NDg4NDk5MjIxOToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BpSnFkZ0hFSXJta0xRR0dCUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidnJ6SnN6MjY1cG4zYWtSUmpPaDFFMGVwQkE2VHF4SXpTQVo3anF1bXJROD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXbzF4MTlWckUxTDd3L2dXdXhxc2IveE0xb1BsUjhHeFpmOHNIcURXVnZpdDdNRlJjU2NnU1l6MHB6MnFEckJQWjZnSnhJeEVTZEk2MnNhemJuWUJEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYUHA3RGhyZFBia09HS1ZjVWsvaERpcXFoUXc0bStDMks1OUpFbUFMWUtBcmUrdU5IbktCY1JWU29veC91MmMvaStZODM4MTRYVkEzcG5BNUpEbjdDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3OTg1MTUwNTI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk5Mzk4NTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBOU5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUE5Ti5qc29uIjogIntcImtleURhdGFcIjpcInRmYm85bk9ZandZbm84QkpkNUtLWFVucS9iMDBNVTFRWU55V045Um56ems9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA2NDI3MDU4MixcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
