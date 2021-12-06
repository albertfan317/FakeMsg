var liffID = '1656659206-oYR2MMXv';

liff.init({
  liffId: liffID
}).then(function() {
  console.log('LIFF init');

  // 寄送訊息
  liff.sendMessages([
    {
      type: "text",
      text: "You've successfully sent a message! Hooray!",
    },
  ])
    .then(() => {
      console.log('message sent');
    })
    .catch((err) => {
      console.log('error', err);
    });
  
}).catch(function(error) {
  console.log(error);
});