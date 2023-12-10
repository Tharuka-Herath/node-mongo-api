const jsonWebToken = require('jsonwebtoken')

function verifyToken(req,res,next){
    const authorizeHeader = req.headers.authorization;
    if(!authorizeHeader){
        return res.status(401).json({error:'no token provided!'})
    }

    if(!authorizeHeader.startsWith('Bearer ')){
       
        return res.status(401).json({error:'invalid token format'})
    }

    const token = authorizeHeader.slice(7);

    if (!token) {
        return res.status(401).json({error:'invalid token!'})
    } 

    try {
        const decodedData=jsonWebToken.verify(token,process.env.SECRET_KEY);
        console.log(decodedData)
        next();
    } catch (error) {
        return res.status(401).json({error:'invalid token!'})
    }
}

module.exports = verifyToken