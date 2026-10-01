const ytdlp = require("yt-dlp-exec")

const download = async (req,res)=>{
try{
    const {url,start,end}=req.query;
    if(!url || !start || !end){
        return res.status(400).json({
            success:false,
            message:"all fields are required"
        })
    }
    let newpath = `clip${Date.now()}.mp4.webm`
    await ytdlp(url,{
        downloadSection:`*${start}-${end}`,
        output:newpath
    })
    res.download(newpath)
}catch(err){
    res.status(500).json({
        success:false,
        message:"Server Error"
    })
}
}

module.exports=download;