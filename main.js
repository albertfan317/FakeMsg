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
      type: 'flex',
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