var liffID = '1656659206-oYR2MMXv';

liff.init({
  liffId: liffID
}).then(function() {
  console.log('LIFF init');

  
  if (liff.isInClient()){
  // 寄送訊息
    liff.sendMessages([
      {
      "type": "flex",
      "altText": "Flex Message",
      "contents": 
        
      {
        "type": "bubble",
        "size": "micro",
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "我是兔子",
              "weight": "bold",
              "align": "center",
              "size": "30px"
            }
          ]
        }
      }

      }
    ]).then(function (){liff.closeWindow();})
  }
  
}).catch(function(error) {
  console.log(error);
});
