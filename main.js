var liffID = '1656659206-oYR2MMXv';

liff.init({
  liffId: liffID
}).then(function() {
  console.log('LIFF init');

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
            "text": "我是兔子",
            "weight": "bold",
            "size": "xl"
          }
        ]
      } 
    }
  ]);
  
}).catch(function(error) {
  console.log(error);
});