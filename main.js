var liffID = '1656659206-oYR2MMXv';

liff.init({
  liffId: liffID
}).then(function() {
  console.log('LIFF init');

  // 寄送訊息
  liff.sendMessages([
    {
      type: 'text',
      text: 'Hello, World!'
    }
  ])
  
}).catch(function(error) {
  console.log(error);
});