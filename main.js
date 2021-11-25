var liffID = '1656659206-oYR2MMXv';

liff.init({
  liffId: liffID
}).then(function() {
  console.log('LIFF init');
  
  // 這邊開始寫使用其他功能
  liff.sendMessages([
    {
      type: 'text',
      text: '好喔'
    }
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