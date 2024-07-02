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


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_17_36_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDExLFxuICAgICAgICAxODYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIyLFxuICAgICAgICA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTksXG4gICAgICAgIDU0LFxuICAgICAgICA5MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEsXG4gICAgICAgIDc1LFxuICAgICAgICAxOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDkwLFxuICAgICAgICA2NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDczLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDksXG4gICAgICAgIDg0LFxuICAgICAgICAxODksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICA0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAwLFxuICAgICAgICA4NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDM5LFxuICAgICAgICA1MCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDUzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDkyLFxuICAgICAgICAyOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjI4LFxuICAgICAgICA3NixcbiAgICAgICAgMjIwLFxuICAgICAgICA4NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE5LFxuICAgICAgICA1NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzOSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDU1LFxuICAgICAgICAzMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDYzLFxuICAgICAgICAzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzLFxuICAgICAgICA4MixcbiAgICAgICAgMTAzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTczLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDUxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA2OSxcbiAgICAgICAgODUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDczLFxuICAgICAgICA5MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKWjd5Q00wb1JYRUdnbW93SU4vLzczQTE4blZVYXNld2g3YjMvNFVvcHdzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1X29RY1pxQ1FnS2JBS0tUQ1RRN1RBXCIsXG4gIFwicGhvbmVJZFwiOiBcImUyNDcxYzJmLTgxNzUtNGVkMS1iZDg1LTFhZWNkNDBjMjlhYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOSxcbiAgICAgIDU4LFxuICAgICAgMTE5LFxuICAgICAgMTMsXG4gICAgICA2NyxcbiAgICAgIDE3NCxcbiAgICAgIDcsXG4gICAgICAxOTMsXG4gICAgICAxMTYsXG4gICAgICA0NixcbiAgICAgIDEyLFxuICAgICAgMjMzLFxuICAgICAgMzYsXG4gICAgICA3NyxcbiAgICAgIDM2LFxuICAgICAgMzYsXG4gICAgICA0NCxcbiAgICAgIDI0MyxcbiAgICAgIDE3LFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU1LFxuICAgICAgMTEsXG4gICAgICAyMTQsXG4gICAgICAxNDksXG4gICAgICAyNSxcbiAgICAgIDE1NCxcbiAgICAgIDE5NSxcbiAgICAgIDIxNyxcbiAgICAgIDc1LFxuICAgICAgMjU0LFxuICAgICAgNixcbiAgICAgIDE5MSxcbiAgICAgIDIsXG4gICAgICAyMSxcbiAgICAgIDIyMSxcbiAgICAgIDE3OCxcbiAgICAgIDE2MSxcbiAgICAgIDUxLFxuICAgICAgMTkyLFxuICAgICAgMjMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk4yOEhMUTVXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3OTg1MTUwNTI6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIn5QcmluY2Ugcm9ja3kgd3J5ICzCv8K/Pz9cIixcbiAgICBcImxpZFwiOiBcIjIzMzU2NDg4NDk5MjIxOToyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BpSnFkZ0hFS2Yxa0xRR0dCVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidnJ6SnN6MjY1cG4zYWtSUmpPaDFFMGVwQkE2VHF4SXpTQVo3anF1bXJROD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXQitwZTE2b2E5MXFHK3FvQWpYVXBXRFl4WkJBanhnSXNHTmJVanBIM3M3MDVGZ1VubitMNVJFTGl0MlRYaGpRMmNla1dRUDJNTEJlYlNsM1lsYlRCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIbVU0TWFVMVc1bHEwTEVMTXBKTHlUMTMyL3Jtbkk4VXRqWTcyYVM4Z2o2a2hFZTQ0UzNTdkJYNU1BK0tqVTg2aW5Ub1NtY1YvelJWVTd4MjVqeDVDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3OTg1MTUwNTI6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk5NDE4MDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBOU5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUE5Ti5qc29uIjogIntcImtleURhdGFcIjpcInRmYm85bk9ZandZbm84QkpkNUtLWFVucS9iMDBNVTFRWU55V045Um56ems9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA2NDI3MDU4MixcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="// PUT your SESSION_ID 


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
