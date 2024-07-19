import JWT from "jsonwebtoken"

const tokenAndCookieGenerator = (userId, res) =>{
    //CREATE JWT TOKEN
    const token = JWT.sign({userId},process.env.JWT_SECRET,{
        expiresIn: "20d"
    })
    //SET NOM NOM NOM - cookie monster
    res.cookie("jwt", token, {
        httpOnly: true, // no cross-site scripting attacks
		sameSite: "strict", // no cross-site request forgery attacks
		secure: process.env.NODE_ENV !== "development",
        maxAge: 20 * 24 * 60 * 60 * 1000 //milliseconds

    })


}

export default tokenAndCookieGenerator;