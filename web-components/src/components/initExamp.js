if (localStorage.getItem('chatList') === null) {
  localStorage.setItem('chatList', JSON.stringify([0, 1]));
  
  localStorage.setItem('dialogID_0', JSON.stringify({
    0: {
      text: 'read',
      time: (new Date('2019-10-10')).getTime(),
      owner: 8080,
      status: 'read',
    },
  }));
  
  localStorage.setItem('dialogID_1', JSON.stringify({
    0: {
      text: 'not read',
      time: (new Date()).getTime(),
      owner: 1,
      status: 'new',
    },
  }));
  }