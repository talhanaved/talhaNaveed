var myApp = angular.module('starter', []);

myApp.controller('ctrl', function($scope, $http) {

    angular.element(document).ready(function() {

      console.log("Okay");
    });

    $scope.list = [];

    $scope.list.push({
        quote: "We don't need to find right path and make mistakes finding it. Right path is already told by Allah there is no other way to be right.",
        author: 'Talha Naveed',
        timestamp: '9th Nov, 2017 at 06:29 PM'
    });
    $scope.list.push({
        quote: "Allah Ke Rehmat Jab Tak Bande Par Barasti rehti hai usko galat raho mai kamyabi naseeb nai hone deti. par jab rehmat ka saya hat jata hai tou insan apne gunnaho aur bekhabrio kay bawajood kamyab hone lagta hai. es se bhara azab kuch nai kay khuda bande ko uski ghalez chahto main chor de.",
        author: 'Talha Naveed',
        timestamp: '1st Jun, 2017 at 1;49 PM'
    });
    $scope.list.push({
        quote: "Main tab tak azad nai ho sakta jb tak mje apni hado ka na pata ho, apni hado sy piyar na ho wo hadain jo Allah ny nabi, wo hadain jo mere nai S.A.W chor kar gaye. Jab tak muje qanon tang karte rahe gaye main azad mehsoos nahi kar sako ga. Azadi une he mehsos hoti hai jo muqarar hado main rehna pasand karte hain. jiny Allah kay hukam se piyar hota hy.",
        author: 'Talha Naveed',
        timestamp: '26th May, 2017 at 2:27 AM'
    });
    $scope.list.push({
        quote: "Main tab tak azad nai ho sakta jb tak mje apni hado ka na pata ho, apni hado sy piyar na ho wo hadain jo Allah ny nabi, wo hadain jo mere nai S.A.W chor kar gaye. Jab tak muje qanon tang karte rahe gaye main azad mehsoos nahi kar sako ga. Azadi une he mehsos hoti hai jo muqarar hado main rehna pasand karte hain. jiny Allah kay hukam se piyar hota hy.",
        author: 'Talha Naveed',
        timestamp: '26th May, 2017 at 2:27 AM'
    });
    $scope.list.push({
        quote: "Main tab tak azad nai ho sakta jb tak mje apni hado ka na pata ho, apni hado sy piyar na ho wo hadain jo Allah ny nabi, wo hadain jo mere nai S.A.W chor kar gaye. Jab tak muje qanon tang karte rahe gaye main azad mehsoos nahi kar sako ga. Azadi une he mehsos hoti hai jo muqarar hado main rehna pasand karte hain. jiny Allah kay hukam se piyar hota hy.",
        author: 'Talha Naveed',
        timestamp: '26th May, 2017 at 2:27 AM'
    });
    $scope.list.push({
        quote: "Main tab tak azad nai ho sakta jb tak mje apni hado ka na pata ho, apni hado sy piyar na ho wo hadain jo Allah ny nabi, wo hadain jo mere nai S.A.W chor kar gaye. Jab tak muje qanon tang karte rahe gaye main azad mehsoos nahi kar sako ga. Azadi une he mehsos hoti hai jo muqarar hado main rehna pasand karte hain. jiny Allah kay hukam se piyar hota hy.",
        author: 'Talha Naveed',
        timestamp: '26th May, 2017 at 2:27 AM'
    });
    $scope.list.push({
        quote: "Main tab tak azad nai ho sakta jb tak mje apni hado ka na pata ho, apni hado sy piyar na ho wo hadain jo Allah ny nabi, wo hadain jo mere nai S.A.W chor kar gaye. Jab tak muje qanon tang karte rahe gaye main azad mehsoos nahi kar sako ga. Azadi une he mehsos hoti hai jo muqarar hado main rehna pasand karte hain. jiny Allah kay hukam se piyar hota hy.",
        author: 'Talha Naveed',
        timestamp: '26th May, 2017 at 2:27 AM'
    });


});
