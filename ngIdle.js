angular.module('ngIdle',[])

    .factory('ngIdle', function($compile,$rootScope,$document) {
        return {
            setOnIdle: function(func,timeout){
                var idleTime = 0;
                $document.ready(function () {
                    var idleInterval = setInterval(timerIncrement, 1000);
                    $document.bind('mousemove',function (e) {
                        idleTime = 0;
                    });
                    $document.bind('keypress',function (e) {
                        idleTime = 0;
                    });
                });

                function timerIncrement() {
                    idleTime = idleTime + 1;
                    if (idleTime > timeout) {
                        func();
                    }
                }
            }
        }
    });
