// Home module routes list
DI.resolve('events').subscribe('router.collecting', router => {
    router.group({
        prefix: '/properties/{:id}',
        middleware: [],
    }, routerGroup => {
        // SingleProperty page
		routerGroup.add('/{title}', SinglePropertyPage);
		// end of routes
    });
});