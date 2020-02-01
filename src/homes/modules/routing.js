// add your routes
// home page
Router.add('/', HomePage);
Router.add('/property/{:id}', PropertyPage);
Router.add('/property/{:id}/{title}', PropertyPage);