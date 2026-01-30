const checkAPIkey = async (req,res,next)=>{
    const api_key = req.headers["x-api-key"];
    try{
        if(!api_key){
            return res.status(401).json({
                success:false,
                msg:"Missing API key"
            })
        }

        if(api_key !== process.env.API_KEY){
            return res.status(403).json({
                success:false,
                msg:"Invalid api key"
            })
        }

        next();

        console.log(api_key);
    }catch(err){
        console.log("erro in api_key",err);
    }
}

module.exports = checkAPIkey;