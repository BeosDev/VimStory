function isAdmin(req,res,next){
    if (req.isAuthenticated() && req.user.U_Authorization === 0)
        return next();
    res.redirect('/');
}

function isLoggined(req,res,next){
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
}

function isUser(req,res,next){
    if (req.isAuthenticated() && req.user.U_Authorization === 1)
        return next();
    res.redirect('/');
}

module.exports = {
    isAdmin,
    isUser,
    isLoggined
}