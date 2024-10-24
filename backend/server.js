import express from 'express';

const app = express();

// app.use(express.static('dist'))    // distribution bad corporate practice static middleware

// app.get('/' , (req, res) =>

//     {res.send('SERVER IS READY TUSHAR');}
// );


app.get('/api/jokes', (req, res)=>{    
       const jokes = [
          {
            "id": 1,
            "title": "Why don't scientists trust atoms?",
            "content": "Because they make up everything!"
          },
          {
            "id": 2,
            "title": "Why did the math book look sad?",
            "content": "Because it had too many problems."
          },
          {
            "id": 3,
            "title": "Why can't you give Elsa a balloon?",
            "content": "Because she will let it go!"
          },
          {
            "id": 4,
            "title": "What do you call fake spaghetti?",
            "content": "An impasta!"
          },
          {
            "id": 5,
            "title": "Why did the scarecrow win an award?",
            "content": "Because he was outstanding in his field!"
          }
        ];

        res.send(jokes);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT , ()=>{
    console.log(`express is listening on port ${PORT}`)
})