$(document).ready(function() {
    function seeProjects() {
        window.open("http://daw.local/see-projects.html", '_self');

    };

    $count = 0;
    $("#nextBtn").click(function() {
        if ($count == 0) {
            shrink();
            $("#slider").delay(1000).animate({ left: "-100%" }, 1000);
            zoom();
            $count = 1;
        } else if ($count == 1) {
            $("#slider").delay(1000).animate({ left: "-200%" }, 1000);
            zoom();
            $count = 2;

        }

    });


    $("#prevBtn").click(function() {
        if ($count == 2) {
            shrink();
            $("#slider").delay(1000).animate({ left: "-100%" }, 1000);
            zoom();
            $count = 1;

        } else if ($count == 1) {
            shrink();
            $("#slider").delay(1000).animate({ right: "0%" }, 1000);
            zoom();
            $count = 0;
        }
    });

    function shrink() {

        setTimeout(function() {
            $("#container").css({ '-webkit-clip-path': "polygon(10% 20%,0% 100%,100% 100%,100% 0%,10% 20%)" });
        }, 0);

        setTimeout(function() {
            $("#container").css({ '-webkit-clip-path': "polygon(10% 20%,0% 100%,100% 100%,90% 20%,10% 20%)" });

        }, 150);
        setTimeout(function() {
            $("#container").css({ '-webkit-clip-path': "polygon(10% 20%,0% 100%,90% 80%,90% 20%,10% 20%)" });
        }, 300);
        setTimeout(function() {
            $("#container").css({ '-webkit-clip-path': "polygon(10% 20%,10% 80%,90% 80%,90% 20%,10% 20%)" });
        }, 450);
    }

    function zoom() {
        setTimeout(function() {
            $("#container").css({ '-webkit-clip-path': "polygon(10% 20%,0% 100%,90% 80%,90% 20%,10% 20%)" });
        }, 2000);
        setTimeout(function() {
            $("#container").css({ '-webkit-clip-path': "polygon(10% 20%,0% 100%,100% 100%,90% 20%,10% 20%)" });
        }, 2150);
        setTimeout(function() {
            $("#container").css({ '-webkit-clip-path': "polygon(10% 20%,0% 100%,100% 100%,100% 0%,10% 20%)" });
        }, 2300);
        setTimeout(function() {
            $("#container").css({ '-webkit-clip-path': "polygon(0% 0%,0% 100%,100% 100%,100% 0%,0% 0%)" });
        }, 2450);
    }
});