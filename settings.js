require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAK6OZFx1JmFoYAQAAHgHAAAKAAAAY3JlZHMuanNvbpVU2a6iShT9lZt6PaZlEBCTkzSi4iwIgnrTDwUUUMpkVaFgx3*vcMZ+6Ns5l6eihr3X3mut*RPkBaZogRow+AlKgq+QoXbJmhKBARhWUYQI6IAQMggGQBvhAyeP6zoPo3smXtfuWIn9W2ThnVXUmZR0r4ujes7m+e4ZPDqgrPwUB38JqPvRvTRGvn3mLKfbQ+4qsidd4xheVK7WciQt60Ja8szSrWfwaCNCTHAej8sEZYjAdIEaE2LyNfj6euSr1PL9tSM+7bKjsdsXGy51zngiuvOuZ5uXPncbDaeZ9TX4B0xuiOzV8467rN3t*cbtJmpIltnUeVINXruMniZZ4MfY6r3CpzjOUTgLUc4wa77cd12XRlGYH02B29hKuT0c4dCMlbnRmOPIY+q46JtWbOuOO*sacPcAD6cDeeLc9Tn17sWOX*SFk+ckw7Ka6DM4p3sJjfOQGsHvwE3yrpXz*+n7bD0cL5ll+sdDs6b1cn*Ve6cbTNYkUbZ+mLs47Hvjk3cQtK*BN9xwqpvErBOBI4srhKE+acr0XLFcrO+j4L5fLryn3mqOb5*wIavI31CuqTC*a1GiX+0VF*XWYexmiTg5lZ5JtbmxcXpHacWTkb7dCrayzZaVinw7g8q45G3UFfrpKKm2zlyj0n4KD+XVaM6n2*NLRWfUzEIw4B8dQFCMKSOQ4SJv94R+B8DwaqOAIPbSXdAvZO*cP64dqLpavJ8FvrE0bFua9wN9r3NFpA29g0UQd6XPoANKUgSIUhROMWUFaVaIUhgjCgb**uiAHNXslbc2W58XOyDChLJdXpVpAcN3Vj9OYRAUVc7sJg*0doEIGHCf24gxnMe0bWSVQxIk+Ir0BDIKBhFMKfooEREUggEjFfqwrV6EbefF7XY+do8G6IDshREcggEQJFmRRV7ieoI66H2n325tVFiW33LEQAfksL0Mtg3M*xmmFQIdkL495FRJkgRZlBRO5Aa97+3+4wNymyFEDOKUtl5aGfvbKjbGs+hUBJxhaKtY02MNfJb4LpZXNoYHJRjVunfZ3c31+ZD5sF4mXmEK+10*vk6jyFHTZX7hgtx6*kOQ1m1MVfiLfOtm8XTJ93gvOBmSOO4mjtTNFGd1NA9hbQ1H1LflhgvT4XZjiDPZz7X7fo+JWUdm37cW3jF19MkwD++HTa3Hz222EF1xgH5PZq4iZ9gLaebWx5u7sasrlvu0vnetjYuzTdrospA+zaOdRKBC+7JYbvyJgFSZkz3Jm7hNwk9kFHLnZu4WybYUXf560l5l*GKj9G184ReFteS1vxFGL9PgjaU*c*KOt9Ua9+j89vRtrPyHNYeWtxG1vpVe0tX9fjTmmUDtnnsZqSlvzpa1KHLdoy3JbDrnwOPxowPKFLKoIBkYAJr5EHQAKapWuLM8Kv42abXVbGTFs7baFFKmfZrBwRmiDGYlGPCKIsg9WVHl11smKcoppElbuNHTsqpVdqOVpc0gezcX0NpvwU*A4xdQSwECFAMUAAAICACujmRcdSZhaGAEAAB4BwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAACIBAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '233537547164',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 3000,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'ryen21x',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 'ryeen121',
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12342605,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || 'xxxxxx',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || '25-12-2026'
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
