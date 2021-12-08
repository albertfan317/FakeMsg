var liffID = '1656659206-oYR2MMXv';

liff.init({
  liffId: liffID
}).then(function() {
  console.log('LIFF init');

  if(!isLoggedIn) {
    liff.login({
      redirectUri: 'https://albert0317.github.io/EliteJellyfish/'
    });
  }

  // 寄送訊息
  liff.sendMessages([
    {
      "type": "bubble",
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "你好"
          }
        ]
      }
    }
  ])
  
}).catch(function(error) {
  console.log(error);
});