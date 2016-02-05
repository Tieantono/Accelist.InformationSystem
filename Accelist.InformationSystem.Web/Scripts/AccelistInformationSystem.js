$("#registrationForm").ready(function () {
    $("#mainFamilyForm").hide();
    $("#biologicalFamilyForm").hide();
    $("#childForm").hide();
    var singleFlag = null;
    var child = 0;
    $("#Status").change(function () {
        if ($("#Status option:selected").text() == "Single") {
            $("#personalForm #mainFamilyBtn").attr("id", "biologicalFamilyBtn");
            $("#biologicalFamilyForm #mainFamilyBtn").attr("id", "personalBtn");
            singleFlag = true;
        }
        if ($("#Status option:selected").text() != "Single") {
            $("#personalForm #biologicalFamilyBtn").attr("id", "mainFamilyBtn");
            $("#biologicalFamilyForm #personalBtn").attr("id", "mainFamilyBtn");
            singleFlag = false;
        }
    })
    if ($("#Status option:selected").text() == "Single") {
        $("#personalForm #mainFamilyBtn").attr("id", "biologicalFamilyBtn");
        $("#biologicalFamilyForm #mainFamilyBtn").attr("id", "personalBtn");
        singleFlag = true;
    }
    if ($("#Status option:selected").text() != "Single") {
        $("#personalForm #biologicalFamilyBtn").attr("id", "mainFamilyBtn");
        $("#biologicalFamilyForm #personalBtn").attr("id", "mainFamilyBtn");
        singleFlag = false;
    }
    $("#mainFamilyForm #personalBtn").click(function () {
        $("#mainFamilyForm").fadeOut("fast", function () {
            $("#personalForm").fadeIn("fast");
        });
    })
    $("#mainFamilyForm #biologicalFamilyBtn").click(function () {
        $("#mainFamilyForm").fadeOut("fast", function () {
            $("#biologicalFamilyForm").fadeIn("fast");
        })
    })

    $("#personalForm").on("click", "#biologicalFamilyBtn", function () {
        $("#personalForm").fadeOut("fast", function () {
            $("#biologicalFamilyForm").fadeIn("fast");
        })
    })
    $("#personalForm").on("click", "#mainFamilyBtn", function () {
        $("#personalForm").fadeOut("fast", function () {
            $("#mainFamilyForm").fadeIn("fast");
        })
    })
    $("#biologicalFamilyForm").on("click", "#personalBtn", function () {
        $("#biologicalFamilyForm").fadeOut("fast", function () {
            $("#personalForm").fadeIn("fast");
        })
    })
    $("#biologicalFamilyForm").on("click", "#mainFamilyBtn", function () {
        $("#biologicalFamilyForm").fadeOut("fast", function () {
            $("#mainFamilyForm").fadeIn("fast");
        })
    })

    $("#Gender").change(function () {
        if ($("#Gender option:selected").text() == "Male") {
            $("#wife").show();
            $("#husband").hide();
            $("#MateGender").attr("value", "Female");
        }
        else {
            $("#wife").hide();
            $("#husband").show();
            $("#MateGender").attr("value", "Male");
        }
    })
    if ($("#Gender option:selected").text() == "Male") {
        $("#wife").show();
        $("#husband").hide();
        $("#MateGender").attr("value", "Female");
    }
    else {
        $("#wife").hide();
        $("#husband").show();
        $("#MateGender").attr("value", "Male");
    }

    if (child == 0) {
        $("#removeChildBtn").hide();
    }
    $("#addChildBtn").click(function () {
        child++;
        if(child > 0){
            $("#removeChildBtn").show();
        }
        $("#childForm").show();
        //Child's Name
        $("#childForm").append('<div id="childFormContainer'+child+'"></div>');
        $("#childFormContainer"+child+"").append('<div id="childNameGroup' + child + '" class="form-group"><h4 class="col-sm-offset-1"><strong>Child #' + child + '</strong></h4></div>');
        $("#childNameGroup" + child + "").append('<label id="childNameLabel' + child + '" for="childNameText'+child+'" class="col-sm-2 control-label">Name</label>');
        $("#childNameGroup" + child + "").append('<div id="childNameColumn' + child + '" class="col-sm-10"></div>');
        $("#childNameColumn" + child + "").append('<input id="childNameText' + child + '" type="text" class="form-control"/>');
        //Child's Birth Place & Date
        $("#childFormContainer"+child+"").append('<div id="childBirthGroup' + child + '" class="form-group"></div>');
        $("#childBirthGroup" + child + "").append('<label id="childBirthPlaceLabel' + child + '" for="childBirthPlaceText'+child+'" class="col-sm-2 control-label">Birth Place</label>');
        $("#childBirthGroup" + child + "").append('<div id="childBirthPlaceColumn' + child + '" class="col-sm-4"></div>');
        $("#childBirthPlaceColumn" + child + "").append('<input id="childBirthPlaceText' + child + '" type="text" class="form-control"/>');
        $("#childBirthGroup" + child + "").append('<label id="childBirthDateLabel' + child + '" for="childBirthDateText'+child+'" class="col-sm-2 control-label col-sm-pull-1">& Date</label>')
        $("#childBirthGroup" + child + "").append('<div id="childBirthDateColumn' + child + '" class="col-sm-4 col-sm-pull-1"></div>');
        $("#childBirthDateColumn" + child + "").append('<input id="childBirthDateText' + child + '" type="text" class="form-control"/>');
        //Child's Gender
        $("#childFormContainer" + child + "").append('<div id="childGenderGroup' + child + '" class="form-group"></div>');
        $("#childGenderGroup" + child + "").append('<label id="childGenderLabel' + child + '" for="childGenderDropDown' + child + '" class="col-sm-2 control-label">Gender</label>');
        $("#childGenderGroup" + child + "").append('<div id="childGenderColumn' + child + '" class="col-sm-10"></div>');
        $("#childGenderColumn" + child + "").append('<select id="childGenderDropDown' + child + '" class="form-control"><option value="0">Male</option><option value="1">Female</option</select>');
        //Child's Job
        $("#childFormContainer" + child + "").append('<div id="childJobGroup' + child + '" class="form-group"></div>');
        $("#childJobGroup" + child + "").append('<label id="childJobLabel' + child + '" for="childJobText' + child + '" class="col-sm-2 control-label">Job/Occupation</label>');
        $("#childJobGroup" + child + "").append('<div id="childJobColumn' + child + '" class="col-sm-10"></div>');
        $("#childJobColumn" + child + "").append('<input id="childJobText' + child + '" type="text" class="form-control"/>');
    });
    $("#childForm").on("click", "#addChildBtn", function () {
        child++;
        if (child > 0) {
            $("#removeChildBtn").show();
        }
    })
    $("#removeChildBtn").click(function () {
        if (child > 1) {
            $("#childFormContainer" + child + "").remove();
            child--;
        }
        else{
            $("#removeChildBtn").hide();
            $("#childFormContainer" + child + "").remove();
            child--;
        }
    })
    $("#childForm").on("click", "#removeChildBtn", function () {
        if (child > 1) {
            $("#childFormContainer" + child + "").remove();
            child--;
        }
        else {
            $("#removeChildBtn").remove();
            $("#childFormContainer" + child + "").remove();
            child--;
        }
    })
})