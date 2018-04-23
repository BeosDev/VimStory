function authAdmin(req,res,next){
    if (req.isAuthenticated() && req.user.roleId === 1)
        return next();
    res.redirect('/');
}

function authMod(req,res,next){
    if (req.isAuthenticated() && req.user.roleId === 2)
        return next();
    res.redirect('/');
}

module.exports = {
    authAdmin,
    authMod
}