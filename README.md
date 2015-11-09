# ngIdleTimer
AngularJS Module to execute a function when no there's no user interaction after a predefined lapse.

##Installation
1. Download latest release from [here](https://github.com/nico-val/ngIdleTimer/releases/latest)

2. Include **ngIdleTimer.js** in your HTML. 

    ```html
    <script src="ngIdleTimer.js"></script>
    ```

3. Inject the module in your app.

    ```javascript
    angular.module('myApp',['ngIdleTimer']);
    ```

##Usage
1. Inject ngIdleTimer in your controller
    ```javascript
    angular.controller('myController',['ngIdleTimer',function(ngIdleTimer){
      /* ... */
    }]);
    ```
    
2. Set your Idle Timer using
    ```javascript
    ngIdleTimer.onIdleTimeOut(function, numSeconds);
    ```
    **function** is, of course, the function you wan't to be executed when no user interaction is detected after **numSeconds** seconds

