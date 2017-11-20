'use strict';

module.exports = function(_){
	return {
		SignUpValidation: (req, res, next) => {
			req.checkBody('username', 'Username Is Required').notEmpty();
			req.checkBody('username', 'Username Must Not Be Less Than 5').isLength({min: 5});
			req.checkBody('email', 'Email Is Required').notEmpty();
			req.checkBody('email', 'Email is Invalid').isEmail();
			req.checkBody('password', 'Password Is Required').notEmpty();
			req.checkBody('password', 'Password Must Not Be Less Than 5').isLength({min: 5});

			req.getValidationResult()
				.then((result) => {
					const errors = result.array();
					// console.log(errors);

					const messages = [];
					errors.forEach((error)=>{
						messages.push(error.msg);
					});

					req.flash('error', messages);
					res.redirect('/signup');
				})
				.catch((err) => {
					return next();
				})
		},

		LoginValidation: (req, res, next) => {
			req.checkBody('email', 'Email Is Required').notEmpty();
			req.checkBody('email', 'Email is Invalid').isEmail();
			req.checkBody('password', 'Password Is Required').notEmpty();
			req.checkBody('password', 'Password Must Not Be Less Than 5').isLength({min: 5});

			req.getValidationResult()
				.then((result) => {
					const errors = result.array();
					// console.log(errors);

					const messages = [];
					errors.forEach((error)=>{
						messages.push(error.msg);
					});

					req.flash('error', messages);
					res.redirect('/');
				})
				.catch((err) => {
					return next();
				})
		}
	}
}

