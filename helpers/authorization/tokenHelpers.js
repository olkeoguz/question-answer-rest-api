const sendJwtToClient = (user,res) => {
    //Generate JWT
    const token =user.generateJwtFromUser();
    const {JWT_COOKIE,NODE_ENV} =process.env;
    return res
    .status(200)
    .cookie("accessToken",token,{
        httpOnly: true,
        expires:new Date(Date.now()+ parseInt(JWT_COOKIE)*1000*60), //Expires Date 1000*60 = 10 minutes
        secure: NODE_ENV ==="development" ? false : true
    })
    .json({
        success:true,
        access_token:token,
        data : {
            name:user.name,
            email:user.email
        }
    });

};
const isTokenIncluded = (req) =>{
    return (req.headers.authorization && req.headers.authorization.startsWith("Bearer:")
    );
};
const getAccessTokenFromHeader = (req)=>{
    const authorization = req.headers.authorization;
    const access_token =authorization.split(" ")[1]; // Seperates bearer and access token
    return access_token;
}
module.exports= {
    sendJwtToClient,
    isTokenIncluded,
    getAccessTokenFromHeader
};