const { Validator } = require('node-input-validator');


const articleValidator = (res, res, next) => {
    const v = new Validator(req.body, {
        title: 'require',
        categorie: 'required',
        content: 'required',
        image: 'required'
    });

    v.check().then(( matched ) =>{
        if (!matched) {
            // error
            req.flash('errorFormValidator', v.errors);
            return res.redirect('/add-article');
        }
        next();
    });
}

module.exports = articleValidator ;