module.exports = function(req, res, next)
{            
    res.locals = req.session;
    next(null, req, res);
}