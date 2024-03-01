# AWB | Autoworkbot
**The bot will send `/work`, `/tips` and `/overtime` every so minute. 
This bot can be used with both mobile and windows.**
## ❓ Usage (Windows)
Requirements:
- Discord Token
- Render.com account: [Create](https://dashboard.render.com/register?next=%2F)
- Cron Job account: [Create](https://console.cron-job.org/signup)
- Franchise (The bot will require you to have joined a franchise as the values are hard coded for now)
- Channel Id

Steps:
1. Create a new web service at render.com
![image](https://github.com/Infernite/autoaworkbot/assets/96887546/8010fd1f-9c60-4f50-b454-8654532a319d)
2. Continue with the default and click next
3. Go to Public Git repository and paste this repository's link
4. The name, branch and region can be anything, make sure the runtime is `node`, build command is `npm install` and Start Command is `node index.js`
5. Select the `free` Instance Type and at `Environment Variables` the variable name should be `token`,value should be your token, another variable is `channel` and the value should be your channel id
6. Create the web service, it should take up to 5 minutes.
7. You should see a similar link above the logs, copy the link and go to cron-job.org
![image](https://github.com/Infernite/autoaworkbot/assets/96887546/3ace005d-958e-41c8-a34a-73002f523a70)
8. At crong-job, create a new cron-job, paste the link and set the Execution schedule to every 5 minutes. Name can be anything and leave the other values to default
9. Done, you should have an infinitely working bot
---
**Used a modified version of discord.js-selfbot-v13, using this bot might lead to your account getting banned. Use at your own risk.**
