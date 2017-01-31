app.controller('headerController', function ($scope, $interval) {
    var sliderImages = [
        'img/java.png',
        'img/angular.png',
        'img/js.png',
        'img/php.png',
        'img/html.png'
    ];
    var imageNum = 0;
    $scope.imgHeaderPath = sliderImages[imageNum++];
    $interval(function () {
        if (imageNum == sliderImages.length - 1)
            imageNum = 0;
        $scope.imgHeaderPath = sliderImages[imageNum];
        imageNum++;
    }, 5000);

});