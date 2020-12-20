const express = require('express');
const app = express();
var port = process.env.PORT || 3000;
const exec = require('child_process').exec;
app.get('/', (req, res) => res.send("Hello world1"));
app.get('/test', (req, res) => res.send("Hello world"));
app.get('/test/git', (req, res) => res.send("Hello world3"));
app.get('/test/git/version', (req, res) => 
{
    exec(`git --version`, function(error, stdout, stderr){
        if(error)
            {
                res.send({message:stderr});
            }
            else{
                res.send({message:stdout});
            }
      });
});

app.get('/test/git/clone', (req, res) => 
{
    exec(`cd deploy && sh build.sh`, function(error1, stdout1, stderr1){
        if(error1)
        {
            res.send({message:stderr1});
        }
        else
        {
            res.send({message:stdout1});
        }
    })
            
 
});

app.listen(port, ()=>console.log('server is in 3000'));