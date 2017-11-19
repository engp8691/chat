'use strict';

module.exports = function(_, passport, User){
	return{
		SetRouting: function(router){
			router.get('/', this.indexPage);
			router.get('/signup', this.getSignUp);
			router.get('/home', this.homePage);

			router.post('/signup', User.SignUpValidation, this.postSignUp);
		},

		indexPage: function(req, res){
			return res.render('index', {test: 'This is a test'}); //index.ejs
		},

		getSignUp: function(req, res){
			// The name error is the same as in the validator helper
			const errors = req.flash('error');
			return res.render('signup', {title: 'Yonglin Char | Login', messages: errors, hasErrors: errors.length > 0}); //signup.ejs
		},

		postSignUp: passport.authenticate('local.signup', {
			successRedirect: '/home',
			failureRedirect: '/signup',
			failureFlash: true
		}),

		homePage: function(req, res){
			return res.render('home');
		}
	}
}


