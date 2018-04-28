function isAdmin(req,res,next){
    if (req.user.U_Authorization === 0)
        return next();
    res.redirect('/admin/books');
}

function isLoggined(req,res,next){
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
}

function isMod(req,res,next){
    if (req.user.U_Authorization === 1)
        return next();
    res.redirect('/admin/books');
}

module.exports = {
    isAdmin,
    isMod,
    isLoggined
}