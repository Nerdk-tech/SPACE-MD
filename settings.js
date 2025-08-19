require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAMFxE1tz+P9yWgQAAH0HAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVGAVElIjeGEAQxDsq6MY+lFBCydWqAhon*PcN7O6Zftid7eWpSIrMk+eczB8gyzFFNmqA*AMUBFeQofbImgIBGajl5YII6IIAMghkEK60ju01jc+ZWko3sYODme55*QB2Zvx4CiXhvFCGU9U39Rfw6IKiPCfY*01C94YltXI98WgmqEcy3tJ1e2YFmZo4wzq2cue2d1Zpo20HL+DRZoSY4CzUiwiliMDERs0aYvI1+K6h+INX0t+LgiZ0bPGsUOjDw64JboGg9sKLbdfL10MSxYOvwS+ur*Mpb1hGgxqvNGOntxnHRnVEKzQQo6VQH8PIOw+iaDd6g09xmKHAClDGMGu+zHupb2dkFW8t8+hpQi0uNa7QrVHaJEJzWLvktXc1+4sA77j+14AvD0XPnFtXu7PHPb+KzA2s1PO9Mzf3N+PoLHFok4WnF5rgfwa+Jh9eif8P77HmFoOJ69*zjh+dtutVrbpIuuEkd2pNMnjoD5Cv7syLvvka*IyvTpGnRKWErqd1ahv2SQk3o*PxSjf4oMJjrHL8wdK1+hPvkJXkdygXF9ZLelfJ622KYzWht2xUTe*8fRdG+VQ402QycdRkZO76jhEGUbrU5ij2gnOl6dJpNQqGy6lS34UD39xSc1VvT4tqEIYvz45i1FgBkLlHFxAUYsoIZDjP2pjEdQEMKgf5BLEnu2CGlNQKnHl4XPNT0pfIZgs34wNh9*ls+3qd03HBrW2TLtup6IKC5D6iFAUmpiwnzQJRCkNEgfznX12QoVf2pltbTeC64IIJZfusLJIcBh+ifnyEvp+XGXOazNfaAyJA*hRGjOEspC2NZQaJH+EKaRFkFMgXmFD0s0FEUABkRkr0c2i1PGh5H09czjXWS9AF6VMPHAAZ8MJg3OdEcTDmxiNZ+E6*1W1aWBTfMsRAF2SwvQ3+WO13c8UFXZA8*xMErs+NBUHiRFHqy8L3Nvz4CbjNHyAGcUKBDDR7Ggm5v9Dt6TKm++lU0UNFCxXwq8EPo7wpUc6dxMk69eh6qHCfph3fsSLnHht43q*G2cKbWGNJmyzLevHyD0mADM4dYteIuQfHdYfkFIgaf85gx5xnmbmp4iGkw*we4YQjtTq7sUCah0mki5zRCS3jgj1rc6*FjZT6XGwHvm1eYpWPNi9ttQBV2Eefixm5cFVWTmBDvWcdeXvVqx1dr7LQX6iD3O2p9DYSD1ZcBSPXqa6zmlMdTodKTEY33bEOHW9dD70bn96P+epUWGXAGZHyZuHnCCXvqws*3dVK175eMHpugneJ*lPKN+Ct4*qP7qcc77vlX+ZTPeN+sS96dG1x5wGbz6pMx9aeiuoRj+e9092omzWqw*uZTsDj8VcXFAlkl5ykQAY0PWPQBSQvW*9a2SX*TSVNtSztve0EUqb8mokdThFlMC2AzEmiOOT4kSC93VqTvDAhjVoG1twxurQGb5SicBhkHyMGlPYxzRI8*gZQSwECFAMUAAAICADBcRNbc*j*cloEAAB9BwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAACCBAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
