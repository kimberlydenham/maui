<!-- slide javascript -->

<script type="text/javascript">

    var currentMenu = "";
var lastMenu = "";
var mousePos = "";
var menuOpen = false;
var do_items = 0;
var see_items = 0;
var drink_items = 0;
var eat_items = 0;
var relax_items = 0;
var activities_items = 0;
$(document).ready(function(){
/* do_items */
do_items=$("#do_items").height();
$("#do_items").hide().css({height:do_items});
$("#do").mouseenter( function(){mousePos = "do_items";if (menuOpen == false) {currentMenu = mousePos;}});
/* see_items */
see_items=$("#see_items").height();
$("#see_items").hide().css({height:see_items});
$("#see").mouseenter( function(){mousePos = "see_items";if (menuOpen == false) {currentMenu = mousePos;}});
/* drink_items */
drink_items=$("#drink_items").height();
$("#drink_items").hide().css({height:drink_items});
$("#drink").mouseenter( function(){mousePos = "drink_items";if (menuOpen == false) {currentMenu = mousePos;}});
/* eat_items */
eat_items=$("#eat_items").height();
$("#eat_items").hide().css({height:eat_items});
$("#eat").mouseenter( function(){mousePos = "eat_items";if (menuOpen == false) {currentMenu = mousePos;}});
/* relax_items */
relax_items=$("#relax_items").height();
$("#relax_items").hide().css({height:relax_items});
$("#relax").mouseenter( function(){mousePos = "relax_items";if (menuOpen == false) {currentMenu = mousePos;}});
/* activities_items */
activities_items=$("#activities_items").height();
$("#activities_items").hide().css({height:activities_items});
$("#activities").mouseenter( function(){mousePos = "activities_items";if (menuOpen == false) {currentMenu = mousePos;}});
});




    // Hide Sub Nav Items

    $("#see-rooms").hide();

    $("#drink-weddings").hide();

    $("#drink-events-list").hide();

    $("#activities-area").hide();



    /* Sub Nav Toggle */

    $("#area-activities").mouseenter(function(){$("#activities-area").slideDown("slow");});

    $("#rooms").mouseenter(function(){$("#see-rooms").slideDown("slow");});

    $("#weddings").mouseenter(function(){$("#drink-weddings").slideDown("slow");});

    $("#events").mouseenter(function(){$("#drink-events-list").slideDown("slow");});



    $(document).ready(function () {

        // set default based on current page

        $('.nav .slide div a').each(function () {

            var href = $(this).attr('href');

            var page = document.location.href;

            if (page.indexOf(href) != -1) {

                var objId = $(this).parents('div').attr('id');

                mousePos = objId+"_items";

                return false;

            }

        });

        // Set Interval

        setInterval(CloseMenu, 200);

    });

    function CloseMenu() {

        if (currentMenu != lastMenu && menuOpen == false) {

            menuOpen = (getHeight(currentMenu) != 0);

            $("#" + currentMenu).slideDown("slow");

            $("#" + currentMenu).queue(function () {

                menuOpen = false;

                $(this).dequeue();

            });



            if (lastMenu != "") {

                $("#" + lastMenu).slideUp();



                if (lastMenu == "activities-items") {

                    $("#activities-area").slideUp();

                }



                if (lastMenu == "see-items") {

                    $("#see-rooms").slideUp();

                }



                if (lastMenu == "drink-items") {

                    $("#drink-weddings").slideUp();

                    $("#drink-events-list").slideUp();

                }

            }



            lastMenu = currentMenu;

        }



        if (currentMenu != mousePos) {

            currentMenu = mousePos;

        }

    }

    function getHeight(menuName) {return eval(menuName);}

</script>
