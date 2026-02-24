/*
-server ko start karna
*/

const { log } = require("node:console")
const app = require("./src/app")
app.listen(3000,()=>{
    console.log("server is running on port no. 3000");
    
})
