// super-treadmill.js, version 1.0

// Cycle through HTML elements in a super awesome treadmill fashion

// Copyright (c) 2015 nishadmenezes
// project located at https://github.com/nishadmenezes/super-treadmill.
// Licenced under the MIT license (see LICENSE file)

(function ( $ ) {
 
    var running = false;

    // moves treadmill in the downward direction
    treadmillDown = function(obj, speed) {
                    setTimeout( function() {
                        if(running) {
                            var elm = obj.find('.treadmill-unit').last();
                            var elm2 = elm.clone();
                            var height = elm.height();
                            elm2.css('top', -height + 'px');
                            elm2.css('height', '0px');
                            elm2.prependTo(obj);
                            elm2.animate({
                                'top': '0px',
                                'height': height
                            }, 1000, function() { 
                                elm.remove();
                            });

                            treadmillDown(obj, speed);
                        }
                    }, speed);
    },

    //moves treadmill in the upward direction
    treadmillUp = function(obj, speed) {
                    setTimeout( function() {
                        if(running) {
                            var elm = obj.find('.treadmill-unit').first();
                            var elm2 = elm.clone();
                            var height = elm.height();
                            elm.animate({
                                'height': '0px',
                                'top': -height
                            }, 1000, function() {
                                elm.remove();
                            });
                            elm2.appendTo(obj);

                            treadmillUp(obj, speed);
                        }                   
                    }, speed);
    },

    // decides which type of treadmill to use
    selectTreadmill = function(direction, obj, speed) {
        if(direction == "down")
            treadmillDown(obj, speed);
        else
            treadmillUp(obj, speed);
    },
    
    // starts the treadmill
    $.fn.startTreadmill = function( options ) {

        var treadmillHeight = 0;

        var settings = $.extend({
            // These are the defaults.
            runAfterPageLoad: true,
            direction: "down",
            speed: "medium",
            viewable: 3,
            pause: false
        }, options );

        // Sets the height of Super Treadmill to viewable times height of the first unit else it is set to user-defined css value
        if(settings.viewable <= $(this).children().length && settings.viewable != 0)
            treadmillHeight = settings.viewable * $(this).find('.treadmill-unit').first().height();
        else
            treadmillHeight = $(this).height();

        $(this).css('height', treadmillHeight);

        
        // Super-Treadmill starts immediately after the page load
        if(settings.runAfterPageLoad)
            running = true;

        
        // Setting the tread speed of the Super-Treadmill
        var treadSpeed = 3000;

        if(settings.speed == "slow" || settings.speed == "medium" || settings.speed == "fast" || $.isNumeric(settings.speed)) {
            if(settings.speed == "slow")
                treadSpeed = 5000; // 5 seconds
            else if(settings.speed == "fast")
                treadSpeed = 1200; // 1.2 seconds
            else if(settings.speed == "medium")
                treadSpeed = 3000; // 3 seconds
            else
                treadSpeed = settings.speed; // user-defined value
        }
        else
            $.error("Super-Treadmill can only use one of its predefined speeds: 'slow', 'medium', 'fast' or a number that you specify, which it later converts into milliseconds");

        
        // Binding events to pause the Super-Treadmill during mouse enter and leave.
        if(settings.pause) {
            $(this).mouseenter( function() {
                running = !running;
            });

            $(this).mouseleave( function() {
                running = !running;
                selectTreadmill(settings.direction, $(this), treadSpeed);
            });
        }

        selectTreadmill(settings.direction, $(this), treadSpeed);
        
    };
 
}( jQuery ));
