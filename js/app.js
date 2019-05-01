var app = angular.module('coldwellApp', []);
app.service('SCORM', function SCORMFactory() {
    var factory = {};
    if (typeof pipwerks !== 'undefined') {
        var scorm = pipwerks.SCORM;
        scorm.version = "1.2";
    }
    
    var lmsConnected = "";
    var completionStatus = "";
    var uname = "";

    factory.initCourse = function () {
        lmsConnected = scorm.init();
        //      $scope.model.userName = scorm.get("cmi.core.student_name");
        if (lmsConnected) {

            completionStatus = scorm.get("cmi.core.lesson_status");
            if (completionStatus == "completed") {
                $("#quizButton").removeClass("disabled");
                //swal('Course completed!', 'You have already completed the course', 'success');
            }
            else if (status === "ab-initio") {

                //this is the very first launch, no bookmark will be found in LMS
                //do nothing

            }
            else {
                // bookmark = scorm.get("cmi.core.lesson_location");
                //console.log('bookmark: ' + bookmark);
                //If a bookmark is found, use its value as the target URL
                // if (bookmark) {
                //     url = bookmark;
                // }
            }
            console.log('completion status: ' + completionStatus);
            //    console.log(scorm.get("cmi.core.student_name"));
            uname = scorm.get("cmi.core.student_name");
            uname = uname.replace(/,/g, "");
            console.log("initc : " + uname);

        }
        // $location.path(url);
        // scorm.set("cmi.core.lesson_location", url);
        scorm.save();

    }

    factory.setStatus = function (status) {
        if (lmsConnected) {
            var success = scorm.set("cmi.core.lesson_status", status);
            completionStatus = scorm.get("cmi.core.lesson_status");
            console.log('completion status: ' + completionStatus);
            scorm.quit();
        }
    }

    factory.usernme = function () {
        console.log("usernme : " + uname);
        return uname;
    }

    return factory;

});
function getMenuArray() {
    this.menu_items = [];

    this.menu_items.push({ menu_text: 'Main Menu', action_node: 'Main Menu', new_menu: [1, 2, 3] }); //0 --
    this.menu_items.push({ menu_text: 'Course Tutorial', action_node: 'Tutorial', new_menu: [0, 2, 3] }); //1 --
    this.menu_items.push({ menu_text: 'Inside The Smart Home', action_node: 'Inside the Smart Home', new_menu: [0, 2, 4, 5, 6, 8, 7, 3] }); //2 --
    this.menu_items.push({ menu_text: 'Educating Clients', action_node: 'Educating Clients About Smart Homes', new_menu: [0, 2, 3, 15, 16, 17, 18] }); //3 --
    this.menu_items.push({ menu_text: 'Smart Home Tech Matters', action_node: 'Why Smart Home Technology Matters', new_menu: [0, 2, 4, 9, 5, 6, 8, 7, 3] }); //4 --
    this.menu_items.push({ menu_text: 'History', action_node: 'History of Smart Home Technology', new_menu: [0, 2, 4, 5, 6, 8, 7, 3] }); //5 --
    this.menu_items.push({ menu_text: 'Definition', action_node: 'Definition of Smart Home', new_menu: [0, 2, 4, 5, 6, 10, 8, 7, 3] }); //6 --
    this.menu_items.push({ menu_text: 'Recognizing Smart Home', action_node: 'Recognizing Smart Home Technology in the Home', new_menu: [0, 2, 4, 5, 6, 8, 7, 13, 27, 3] }); //7 --
    this.menu_items.push({ menu_text: 'Recognizing Categories', action_node: 'Recognizing Smart Home Categories', new_menu: [0, 2, 4, 5, 6, 8, 21, 7, 3] }); //8 --
    this.menu_items.push({ menu_text: 'Agent Testimonial', action_node: 'Agent Testimonial 4', new_menu: [0, 2, 4, 9, 5, 6, 8, 7, 3] }); //9 --
    this.menu_items.push({ menu_text: 'Glossary (PDF)', action_node: 'Amazon', new_menu: 'https://s3.amazonaws.com/coldwellbanker-realestate/SmartHome_Glossary.pdf' }); //10 --
    this.menu_items.push({ menu_text: 'Course Outline (PDF)', action_node: 'Amazon', new_menu: 'https://s3.amazonaws.com/coldwellbanker-realestate/SmartHome_Course_Outline.pdf' }); //11 --
    this.menu_items.push({ menu_text: 'Checklist', action_node: 'Amazon', new_menu: [] }); //12 --//do not delete
    this.menu_items.push({ menu_text: 'Agent Testimonial', action_node: 'Agent Testimonial 5', new_menu: [0, 2, 4, 5, 6, 8, 7, 13, 27, 3] }); //13 --
    this.menu_items.push({ menu_text: 'Find a Pro (PDF)', action_node: 'Amazon', new_menu: 'https://s3.amazonaws.com/coldwellbanker-realestate/Find_A_CEDIA_Pro_In_Your_Area.pdf' }); //14 --
    this.menu_items.push({ menu_text: 'Solutions: CEDIA', action_node: 'CEDIA Sources', new_menu: [0, 2, 3, 15, 14, 16, 17, 18] }); //15 --
    this.menu_items.push({ menu_text: 'Staging Kit', action_node: 'Staging Kit', new_menu: [0, 2, 3, 15, 16, 22, 25, 28, 17, 18] }); //16 --
    this.menu_items.push({ menu_text: 'Taking Action', action_node: 'Taking Action', new_menu: [0, 2, 3, 15, 16, 17, 23, 18] }); //17 --
    this.menu_items.push({ menu_text: 'Resources After The Course', action_node: 'Resources', new_menu: [0, 2, 3, 15, 16, 17, 18, 24, 26, 29] }); //18 --
    this.menu_items.push({ menu_text: 'Upgrade Livability', action_node: 'Upgrade livability', new_menu: [] }); //19 //do not delete
    this.menu_items.push({ menu_text: 'Make Differentiation', action_node: 'Amazon', new_menu: [] }); //20 //do not delete
    this.menu_items.push({ menu_text: 'Agent Testimonial', action_node: 'Agent Testimonial 1', new_menu: [0, 2, 4, 5, 6, 8, 21, 7, 3] }); //21 --
    this.menu_items.push({ menu_text: 'Agent Testimonial', action_node: 'Agent Testimonial 2', new_menu: [0, 2, 3, 15, 16, 22, 25, 28, 17, 18] }); //22 --
    this.menu_items.push({ menu_text: 'Agent Testimonial', action_node: 'Agent Testimonial 3', new_menu: [0, 2, 3, 15, 16, 17, 23, 18] }); //23 --
    this.menu_items.push({ menu_text: 'Course Summary', action_node: 'Agent Testimonial 6', new_menu: [0, 2, 3, 15, 16, 17, 18, 24, 26, 29] }); //24 --
    this.menu_items.push({ menu_text: 'Seller Buyer Handoff (PDF)', action_node: 'Amazon', new_menu: 'https://s3.amazonaws.com/coldwellbanker-realestate/Seller_Buyer_Handoff.pdf' }); //25 --
    this.menu_items.push({ menu_text: 'Seller Questionnaire (PDF)', action_node: 'Amazon', new_menu: 'https://s3.amazonaws.com/coldwellbanker-realestate/Seller_Questions.pdf' }); //26 --
    this.menu_items.push({ menu_text: 'Smart Home Checklist (PDF)', action_node: 'Amazon', new_menu: 'https://s3.amazonaws.com/coldwellbanker-realestate/Smart+Home+Checklist-PDF.pdf' }); //27 --
    this.menu_items.push({ menu_text: 'CB Exchange Staging Kit Info', action_node: 'Html', new_menu: 'https://www.cbexchange.com/content/cb/en/content/communications/smart-home-staging-kit.html' }); //28 --
    this.menu_items.push({ menu_text: 'CB Exchange Resource Page', action_node: 'Html', new_menu: 'https://www.cbexchange.com/content/cb/en/content/brand-engagement/smart-home-resource-page.html' }); //29 --

    return this.menu_items;
}

app.controller('MainCtrl', function ($scope, SCORM) {

    if (typeof pipwerks === 'undefined') {
        var scorm = null
    }
    else
    var scorm = pipwerks.SCORM;
    if (scorm != null)
        SCORM.initCourse();
    $scope.slideInLeft = false;
    $scope.slideOutLeft = false;
    if (scorm != null)
    var x = scorm.get("cmi.core.lesson_location").split(" ");
    $scope.nodeCheck = {};
    $scope.nodeCheck["Main Menu"] = false;
    $scope.nodeCheck["Inside the Smart Home"] = false;
    $scope.nodeCheck["Educating Clients About Smart Homes"] = false;
    $scope.nodeCheck["Tutorial"] = false;
    $scope.nodeCheck["CEDIA Sources"] = false;
    $scope.nodeCheck["Staging Kit"] = false;
    $scope.nodeCheck["Taking Action"] = false;
    $scope.nodeCheck["Resources"] = false;
    $scope.nodeCheck["Why Smart Home Technology Matters"] = false;
    $scope.nodeCheck["History of Smart Home Technology"] = false;
    $scope.nodeCheck["Definition of Smart Home"] = false;
    $scope.nodeCheck["Recognizing Smart Home Categories"] = false;
    $scope.nodeCheck["Recognizing Smart Home Technology in the Home"] = false;
    $scope.nodeCheck["Agent Testimonial 6"] = false;
    if(typeof x !== 'undefined')
    for (i = 0; i < x.length; i++) {
        var y = x[i].replace("_", " ");
        var temp2 = y.indexOf("_");
        while (temp2 >= 0) {
            y = y.replace("_", " ");
            temp2 = y.indexOf("_");
        }
        $scope.nodeCheck[y] = true;
    }
    //console.log(x);


    //Build Init Menu
    function menu_build($menu_objects) {
        var menu_s = getMenuArray();
        var temp_array = [];
        for (object in $menu_objects) {
            temp_array.push(menu_s[$menu_objects[object]]);
            //console.log($menu_objects[object], menu_s[$menu_objects[object]]);
        }
        $scope.menu_items = temp_array;
        //console.log('New Menu', temp_array);
    }
    $scope.complete = "";
    raptor.api.on("clipStart", function (event, data) {
        var name = raptor.api.state().name;
        $scope.name = name;
        if ($scope.nodeCheck[name]) {
            $scope.$apply($scope.complete = "Video Viewed");
        }
        else if ($scope.nodeCheck[name] == false) {
            $scope.$apply($scope.complete = "Video Not Viewed");
        }
        else {
            $scope.$apply($scope.complete = "");
        }
        $("#textComplete").show();
        $('#textComplete').css('visibility', 'visible');

        $('#textComplete').addClass('fade-out1');
        $('#textComplete').removeClass('fade-in');
        $(".fade-out1").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
    function () {
        $("#textComplete").hide();
        $('#textComplete').css('visibility', 'hidden');
        $('#textComplete').addClass('fade-in');
        $('#textComplete').removeClass('fade-out1');
    });

    });
    raptor.api.on("clipEnd", function (event, data) {

        var name = raptor.api.state().name;
        $scope.nodeCheck[name] = true;
        var temp = name.replace(" ", "_");
        var temp2 = temp.indexOf(" ");
        while (temp2 >= 0) {
            temp = temp.replace(" ", "_");
            temp2 = temp.indexOf(" ");
        }
        if (scorm!= null && !scorm.get("cmi.core.lesson_location").includes(temp)) {
            scorm.set("cmi.core.lesson_location", scorm.get("cmi.core.lesson_location") + " " + temp);
            scorm.save();
        }

        if ($scope.nodeCheck[name]) {
            $scope.$apply($scope.complete = "Video Viewed");
        }

        else if ($scope.nodeCheck[name] == false) {
            $scope.$apply($scope.complete = "Video Not Viewed");
        }
        else {
            $scope.$apply($scope.complete = "");
        }
        if (name == "Main Menu") {
            $('#point').css('visibility', 'visible');
            $('#circle').css('visibility', 'visible');
            $('#circle').addClass('fade-in');
            $('#point').addClass('fade-in');
            $('#circle').removeClass('fade-out');
            $('#point').removeClass('fade-out');
        }
        else {
            $scope.firstClipEnd = false;
        }
        if ($scope.nodeCheck["Main Menu"] &&
               $scope.nodeCheck["Inside the Smart Home"] &&
               $scope.nodeCheck["Educating Clients About Smart Homes"] &&
               $scope.nodeCheck["CEDIA Sources"] &&
               $scope.nodeCheck["Staging Kit"] &&
               $scope.nodeCheck["Taking Action"] &&
               $scope.nodeCheck["Resources"] &&
               $scope.nodeCheck["Why Smart Home Technology Matters"] &&
               $scope.nodeCheck["History of Smart Home Technology"] &&
               $scope.nodeCheck["Definition of Smart Home"] &&
               $scope.nodeCheck["Recognizing Smart Home Categories"] &&
               $scope.nodeCheck["Recognizing Smart Home Technology in the Home"] && $scope.nodeCheck["Agent Testimonial 6"]) {
            var nodeFinish = true;


        }
        if (nodeFinish) {
            $("#quizButton").removeClass("disabled");
            if (scorm != null) {
                scorm.set("cmi.core.lesson_status", "completed");
                scorm.save();
            }
        }

    });
    menu_build([1, 2, 3]);
    $scope.name = ""
    $scope.sub_menu_state = false;
    $scope.menu_button_click = function () {
        $('#sub_menu').css('display', 'block');
        $('#circle').removeClass('fade-in');
        $('#point').removeClass('fade-in');
        $('#circle').addClass('fade-out');
        $('#point').addClass('fade-out');
        $('#point').css('visibility', 'hidden');
        $('#circle').css('visibility', 'hidden');
        document.getElementById("quizButton").style.visibility = "visible";

        var temp = ("Inside the Smart Home" == $scope.name ||
           "Educating Clients About Smart Homes" == $scope.name ||
           "Tutorial" == $scope.name ||
           "CEDIA Sources" == $scope.name ||
           "Staging Kit" == $scope.name ||
           "Taking Action" == $scope.name ||
           "Resources" == $scope.name ||
           "Why Smart Home Technology Matters" == $scope.name ||
           "History of Smart Home Technology" == $scope.name ||
           "Definition of Smart Home" == $scope.name ||
           "Recognizing Smart Home Categories" == $scope.name ||
           "Recognizing Smart Home Technology in the Home" == $scope.name || $scope.name == "Agent Testimonial 6")
        if (temp) {
            if (!$scope.sub_menu_state) {
                // document.getElementById("quizButton").style.visibility = "visible";
                //$('#quizButton').addClass('slideInRight');
            }
            else {
                document.getElementById("quizButton").style.visibility = "hidden";
                //document.getElementById("quizButton").style.visibility = "visible";
                //$('#quizButton').removeClass('slideInRight');
                // $('#quizButton').addClass('slideInRight');
            }
        }
        //document.getElementById("quizButton").style.visibility = "hidden";




        $scope.sub_menu_state = !$scope.sub_menu_state;
    }
    $scope.indent = function ($menu_name) {
        arr = ["Smart Home Checklist (PDF)", "Course Summary", "CB Exchange Resource Page", "Seller Buyer Handoff (PDF)", "CB Exchange Staging Kit Info", "Agent Testimonial 6", "Agent Testimonial", "Glossary (PDF)", "Course Outline (PDF)", "Home Buyers Checklist (PDF)", "Find a Pro (PDF)", "Selling a Buyer Handoff (PDF)", "Seller Questionnaire (PDF)"];
        z = $.inArray($menu_name, arr);
        if (z == -1) {
            if ($menu_name == 'Inside The Smart Home')
                return "inside";
            else if ($menu_name == 'Educating Clients')
                return "educating";
            return "";
        }
        else {
            return "indent";
        }
    }
    $scope.node_change = function ($event, $node_name, $menu_name) {
        //console.log('Node Change to:', $node_name);
        //Menu Building
        var menu_s = getMenuArray();

        if ($node_name !== 'Amazon' && $node_name !== 'Html') {
            raptor.api.setNodeByName($node_name);
            raptor.api.play();

            for (var item = 0; item < menu_s.length; item++) {
                //console.log(item);
                if (menu_s[item].action_node === $node_name) {
                    menu_build(menu_s[item].new_menu);
                }
            }
        }
        else {
            // console.log($event.target);
            for (var item = 0; item < menu_s.length; item++) {
                if (menu_s[item].menu_text === $menu_name) {
                    $('#pdf_target').attr('href', menu_s[item].new_menu);
                    $('#pdf_target').attr('target', "_blank");
                    //$('#pdf_target').trigger("click"); 
                    document.getElementById('pdf_target').click();
                }
                else {
                    console.log('Node Not in Array');
                }
            }

        }
    }



});