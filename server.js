const express=require('express');

app =express();

app.get('/api/user', (req, res) => {
    const users = [
      {id: 1, firstName: 'John', lastName: 'Doe',imgurl: 'https://www.pexels.com/photo/women-s-white-and-black-button-up-collared-shirt-774909/'},
      {id: 2, firstName: 'meeravali', lastName: 'shaik',imgurl: 'https://www.pexels.com/photo/adult-beard-boy-casual-220453/'},
      {id: 3, firstName: 'rashmika', lastName: 'mandana',imgurl: 'https://www.pexels.com/photo/woman-wearing-black-eyeglasses-1239291/'},
    ];
  
    res.json(users);
  });
  
  const port = 5000;

  app.listen(port, () => `Server running on port ${port}`);