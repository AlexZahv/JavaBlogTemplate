app.controller('javaBlogController',function($rootScope){
    $rootScope.$on("$locationChangeStart",function(event, next, current){
        var lol=next;
    });
});