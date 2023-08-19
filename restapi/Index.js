const apiKey = require('../middleWare/apikey');

const router = require ('express').Router();
const apiKeyMiddleWare =require('../middleWare/apikey');

router.get('/',(req,res)=>{ //get request to send the file for use 
    res.render('index',{
        title:'My Home Page of the ejs' // title tags for ejs files 
    });  // take the path of current folder and add index path in it 
}); // routes


router.get('/about',(req,res)=>{ //get request to send the file for use 
    res.render('about',{
        title:'My Home Page of the ejs'
    });  // take the path of current folder and add about path in it 
});// about  is the name of view and we can passs object through the render method
 // routes 


router.get('/download',(req,res)=>{
    res.download(path.resolve(__dirname)+'views\about.ejs');
});
router.get('/api/products',apiKeyMiddleWare,(req,res)=>{ //  if you wanty to apply this middleware int the all middleware
    // then use app.use(middlleware );
    res.json(
        [
            {
                id:'123',
                name:'chrome'
            },
            {
                id:'124',
                name : 'firefox'
            }
        ]
    );
});



module.exports=router;