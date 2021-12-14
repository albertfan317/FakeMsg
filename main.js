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
      "altText": "我笨笨",
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
              "text": "我笨笨的",
              "weight": "bold",
              "align": "center",
              "size": "30px"
            }
          ]
        }
      }

      }
    ]).then(function (){liff.closeWindow();});
  }
  
}).catch(function(error) {
  console.log(error);
});
