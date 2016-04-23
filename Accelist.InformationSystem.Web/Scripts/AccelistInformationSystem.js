$("#registrationForm").ready(function () {
    $("#mainFamilyForm").hide();
    $("#biologicalFamilyForm").hide();
    $("#workExpForm").hide();
    $("#academicRecordForm").hide();
    $("#workshopRecordForm").hide();
    $("#bankAccountForm").hide();
    $("#otherRecordForm").hide();
    $("#agreeForm").hide();
    $("#SD").hide();
    $("#SMP").hide();
    $("#SMU").hide();
    $("#D3").hide();
    $("#S1").hide();

    var singleFlag = null;
    var child = 0;
    var sibling = 0;
    var childTotal = 0;
    var siblingTotal = 0;
    var work = 0;
    var workTotal = 0;
    var workshop = 0;
    var workshopTotal = 0;

    if ($("#personalForm").css("display") != "none") {
        $("#personalList").addClass("active");
    }

    //$("#formList button").click(function () {
    //    $(this).addClass("form-control");
    //});
    
    $("#Status").change(function () {
        if ($("#Status option:selected").text() == "Single") {
            $("#personalForm #mainFamilyBtn").attr("id", "biologicalFamilyBtn");
            $("#biologicalFamilyForm #mainFamilyBtn").attr("id", "personalBtn");
            $("#mainFamilyList").addClass("disabled");
            singleFlag = true;
        }
        if ($("#Status option:selected").text() != "Single") {
            $("#personalForm #biologicalFamilyBtn").attr("id", "mainFamilyBtn");
            $("#biologicalFamilyForm #personalBtn").attr("id", "mainFamilyBtn");
            $("#mainFamilyList").removeClass("disabled");
            singleFlag = false;
        }
    })
    if ($("#Status option:selected").text() == "Single") {
        $("#personalForm #mainFamilyBtn").attr("id", "biologicalFamilyBtn");
        $("#biologicalFamilyForm #mainFamilyBtn").attr("id", "personalBtn");
        $("#mainFamilyList").addClass("disabled");
        singleFlag = true;
    }
    if ($("#Status option:selected").text() != "Single") {
        $("#personalForm #biologicalFamilyBtn").attr("id", "mainFamilyBtn");
        $("#biologicalFamilyForm #personalBtn").attr("id", "mainFamilyBtn");
        $("#mainFamilyList").removeClass("disabled");
        singleFlag = false;
    }
    $("#mainFamilyForm #personalBtn").click(function () {
        $("#mainFamilyForm").fadeOut("fast", function () {
            $("#personalForm").fadeIn("fast");
        });
        $("#mainFamilyList").removeClass("active");
        $("#personalList").addClass("active");
    });
    $("#mainFamilyForm #biologicalFamilyBtn").click(function () {
        $("#mainFamilyForm").fadeOut("fast", function () {
            $("#biologicalFamilyForm").fadeIn("fast");
        });
        $("#mainFamilyList").removeClass("active");
        $("#biologicalFamilyList").addClass("active");
    });

    $("#personalForm").on("click", "#biologicalFamilyBtn", function () {
        $("#personalForm").fadeOut("fast", function () {
            $("#biologicalFamilyForm").fadeIn("fast");
        });
        $("#personalList").removeClass("active");
        $("#biologicalFamilyList").addClass("active");
    });
    $("#personalForm").on("click", "#mainFamilyBtn", function () {
        $("#personalForm").fadeOut("fast", function () {
            $("#mainFamilyForm").fadeIn("fast");
        });
        $("#personalList").removeClass("active");
        $("#mainFamilyList").addClass("active");
    });
    $("#biologicalFamilyForm").on("click", "#personalBtn", function () {
        $("#biologicalFamilyForm").fadeOut("fast", function () {
            $("#personalForm").fadeIn("fast");
        });
        $("#biologicalFamilyList").removeClass("active");
        $("#personalList").addClass("active");
    });
    $("#biologicalFamilyForm").on("click", "#mainFamilyBtn", function () {
        $("#biologicalFamilyForm").fadeOut("fast", function () {
            $("#mainFamilyForm").fadeIn("fast");
        });
        $("#biologicalFamilyList").removeClass("active");
        $("#mainFamilyList").addClass("active");
    });

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

    //Child Form
    if (child == 0) {
        $("#removeChildBtn").hide();
    }
    $("#addChildBtn").click(function () {
        child++;
        if (child > 0) {
            $("#removeChildBtn").show();
        }
        $("#childForm").show();
        //Child's Name
        $("#childForm").append('<div id="childFormContainer' + child + '"></div>');
        $("#childFormContainer" + child + "").append('<div id="childNameGroup' + child + '" class="form-group"><h4 class="col-sm-offset-1"><strong>Child #' + child + '</strong></h4></div>');
        $("#childNameGroup" + child + "").append('<label id="childNameLabel' + child + '" for="childNameText' + child + '" class="col-sm-2 control-label">Name</label>');
        $("#childNameGroup" + child + "").append('<div id="childNameColumn' + child + '" class="col-sm-10"></div>');
        $("#childNameColumn" + child + "").append('<input id="childNameText' + child + '" type="text" class="form-control"/>');
        //Child's Birth Place & Date
        $("#childFormContainer" + child + "").append('<div id="childBirthGroup' + child + '" class="form-group"></div>');
        $("#childBirthGroup" + child + "").append('<label id="childBirthPlaceLabel' + child + '" for="childBirthPlaceText' + child + '" class="col-sm-2 control-label">Birth Place</label>');
        $("#childBirthGroup" + child + "").append('<div id="childBirthPlaceColumn' + child + '" class="col-sm-4"></div>');
        $("#childBirthPlaceColumn" + child + "").append('<input id="childBirthPlaceText' + child + '" type="text" class="form-control"/>');
        $("#childBirthGroup" + child + "").append('<label id="childBirthDateLabel' + child + '" for="childBirthDateText' + child + '" class="col-sm-2 control-label col-sm-pull-1">& Date</label>')
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

        childTotal = $("div[id^='childFormContainer']").length;
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
        else {
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

    //Sibling Form
    if (sibling == 0) {
        $("#removeSiblingBtn").hide();
    }
    $("#addSiblingBtn").click(function () {
        sibling++;
        if (sibling > 0) {
            $("#removeSiblingBtn").show();
        }
        $("#siblingForm").show();
        //Sibling's Name
        $("#siblingForm").append('<div id="siblingFormContainer' + sibling + '"></div>');
        $("#siblingFormContainer" + sibling + "").append('<div id="siblingNameGroup' + sibling + '" class="form-group"><h4 class="col-sm-offset-1"><strong>Sibling #' + sibling + '</strong></h4></div>');
        $("#siblingNameGroup" + sibling + "").append('<label id="siblingNameLabel' + sibling + '" for="siblingNameText' + sibling + '" class="col-sm-2 control-label">Name</label>');
        $("#siblingNameGroup" + sibling + "").append('<div id="siblingNameColumn' + sibling + '" class="col-sm-10"></div>');
        $("#siblingNameColumn" + sibling + "").append('<input id="siblingNameText' + sibling + '" type="text" class="form-control"/>');
        //Sibling's Birth Place & Date
        $("#siblingFormContainer" + sibling + "").append('<div id="siblingBirthGroup' + sibling + '" class="form-group"></div>');
        $("#siblingBirthGroup" + sibling + "").append('<label id="siblingBirthPlaceLabel' + sibling + '" for="siblingBirthPlaceText' + sibling + '" class="col-sm-2 control-label">Birth Place</label>');
        $("#siblingBirthGroup" + sibling + "").append('<div id="siblingBirthPlaceColumn' + sibling + '" class="col-sm-4"></div>');
        $("#siblingBirthPlaceColumn" + sibling + "").append('<input id="siblingBirthPlaceText' + sibling + '" type="text" class="form-control"/>');
        $("#siblingBirthGroup" + sibling + "").append('<label id="siblingBirthDateLabel' + sibling + '" for="siblingBirthDateText' + sibling + '" class="col-sm-2 control-label col-sm-pull-1">& Date</label>')
        $("#siblingBirthGroup" + sibling + "").append('<div id="siblingBirthDateColumn' + sibling + '" class="col-sm-4 col-sm-pull-1"></div>');
        $("#siblingBirthDateColumn" + sibling + "").append('<input id="siblingBirthDateText' + sibling + '" type="text" class="form-control"/>');
        //Sibling's Gender
        $("#siblingFormContainer" + sibling + "").append('<div id="siblingGenderGroup' + sibling + '" class="form-group"></div>');
        $("#siblingGenderGroup" + sibling + "").append('<label id="siblingGenderLabel' + sibling + '" for="siblingGenderDropDown' + sibling + '" class="col-sm-2 control-label">Gender</label>');
        $("#siblingGenderGroup" + sibling + "").append('<div id="siblingGenderColumn' + sibling + '" class="col-sm-10"></div>');
        $("#siblingGenderColumn" + sibling + "").append('<select id="siblingGenderDropDown' + sibling + '" class="form-control"><option value="0">Male</option><option value="1">Female</option</select>');
        //Sibling's Job
        $("#siblingFormContainer" + sibling + "").append('<div id="siblingJobGroup' + sibling + '" class="form-group"></div>');
        $("#siblingJobGroup" + sibling + "").append('<label id="siblingJobLabel' + sibling + '" for="siblingJobText' + sibling + '" class="col-sm-2 control-label">Job/Occupation</label>');
        $("#siblingJobGroup" + sibling + "").append('<div id="siblingJobColumn' + sibling + '" class="col-sm-10"></div>');
        $("#siblingJobColumn" + sibling + "").append('<input id="siblingJobText' + sibling + '" type="text" class="form-control"/>');
        
        siblingTotal = $("div[id^='siblingFormContainer']").length;
    });
    $("#siblingForm").on("click", "#addSiblingBtn", function () {
        sibling++;
        if (sibling > 0) {
            $("#removeSiblingBtn").show();
        }
    })
    $("#removeSiblingBtn").click(function () {
        if (sibling > 1) {
            $("#siblingFormContainer" + sibling + "").remove();
            sibling--;
        }
        else {
            $("#removeSiblingBtn").hide();
            $("#siblingFormContainer" + sibling + "").remove();
            sibling--;
        }
    })
    $("#siblingForm").on("click", "#removeSiblingBtn", function () {
        if (sibling > 1) {
            $("#siblingFormContainer" + sibling + "").remove();
            sibling--;
        }
        else {
            $("#removeSiblingBtn").remove();
            $("#siblingFormContainer" + sibling + "").remove();
            child--;
        }
    })

    $("#workExpBtn").click(function () {
        $("#biologicalFamilyForm").fadeOut("fast", function () {
            $("#workExpForm").fadeIn("fast");
        });
        $("#biologicalFamilyList").removeClass("active");
        $("#workExpList").addClass("active");
    });

    $("#workExpForm").on("click", "#biologicalFamilyBtn", function () {
        $("#workExpForm").fadeOut("fast", function () {
            $("#biologicalFamilyForm").fadeIn("fast");
        });
        $("#workExpList").removeClass("active");
        $("#biologicalFamilyList").addClass("active");
    });

    //Work Experience Form
    if (work == 0) {
        $("#removeWorkBtn").hide();
    }

    $("#addWorkBtn").click(function () {
        work++;
        if (work > 0) {
            $("#removeWorkBtn").show();
        }
        $("#workForm").show();
        if (work > 5 && $("#workFormMax").length == 0) {
            $("#work").append('<p id="workFormMax" class="error-msg">Maximum data need has reached</p>');
        }
        if ($("#workFormMax").length != 0) {
            work = 5;
        }
        if (work <= 5 && $("#workFormMax").length == 0) {
            //Work Company
            $("#workForm").append('<div id="workFormContainer' + work + '"></div>');
            $("#workFormContainer" + work + "").append('<div id="workCompanyGroup' + work + '" class="form-group"><h4 class="col-sm-offset-1"><strong>Work Experience #' + work + '</strong></h4></div>');
            $("#workCompanyGroup" + work + "").append('<label id="workCompanyLabel' + work + '" for="workCompanyText' + work + '" class="col-sm-2 control-label">Company Name</label>');
            $("#workCompanyGroup" + work + "").append('<div id="workCompanyColumn' + work + '" class="col-sm-10"></div>');
            $("#workCompanyColumn" + work + "").append('<input id="workCompanyText' + work + '" type="text" class="form-control"/>');
            //Work Position
            $("#workFormContainer" + work + "").append('<div id="workPositionGroup' + work + '" class="form-group"></div>');
            $("#workPositionGroup" + work + "").append('<label id="workPositionLabel' + work + '" for="workPositionText' + work + '" class="col-sm-2 control-label">Position</label>');
            $("#workPositionGroup" + work + "").append('<div id="workPositionColumn' + work + '" class="col-sm-10"></div>');
            $("#workPositionColumn" + work + "").append('<input id="workPositionText' + work + '" type="text" class="form-control"/>');

            //Working Duration
            $("#workFormContainer" + work + "").append('<div id="workDurationGroup' + work + '" class="form-group"></div>');
            $("#workDurationGroup" + work + "").append('<label id="workJoinDateLabel' + work + '" for="workJoinDateText' + work + '" class="col-sm-2 control-label">Join Date</label>');
            $("#workDurationGroup" + work + "").append('<div id="workJoinDateColumn' + work + '" class="col-sm-4"></div>');
            $("#workJoinDateColumn" + work + "").append('<input id="workJoinDateText' + work + '" type="text" class="form-control"/>');
            $("#workDurationGroup" + work + "").append('<label id="workEndDateLabel' + work + '" for="workEndDateText' + work + '" class="col-sm-2 control-label col-sm-pull-1">End Date</label>')
            $("#workDurationGroup" + work + "").append('<div id="workEndDateColumn' + work + '" class="col-sm-4 col-sm-pull-1"></div>');
            $("#workEndDateColumn" + work + "").append('<input id="workEndDateText' + work + '" type="text" class="form-control"/>');

            workTotal = $("div[id^='workFormContainer']").length;
        }
    });
    $("#workForm").on("click", "#addWorkBtn", function () {
        work++;
        if (work > 0) {
            $("#removeWorkBtn").show();
        }
    })
    $("#removeWorkBtn").click(function () {
        if (work == 5) {
            $("#workFormMax").remove();
        }
        $("#workFormContainer" + work + "").remove();
        work--;
        if (work < 1) {
            $("#removeWorkBtn").hide();
        }
    })
    $("#workForm").on("click", "#removeWorkBtn", function () {
        if (work > 1) {
            $("#workFormContainer" + work + "").remove();
            work--;
        }
        else {
            $("#removeWorkBtn").remove();
            $("#workFormContainer" + work + "").remove();
            child--;
        }
    })

    $("#academicBtn").click(function () {
        $("#workExpForm").fadeOut("fast", function () {
            $("#academicRecordForm").fadeIn("fast");
        });
        $("#workExpList").removeClass("active");
        $("#academicList").addClass("active");
    });
    $("#academicRecordForm").on("click", "#workExpBtn", function () {
        $("#academicRecordForm").fadeOut("fast", function () {
            $("#workExpForm").fadeIn("fast");
        });
        $("#academicList").removeClass("active");
        $("#workExpList").addClass("active");
    });

    $("#Academic").change(function () {
        if ($("#Academic option:selected").text() == "SD") {
            $("#SD").show();
            $("#SMP").hide();
            $("#SMU").hide();
            $("#D3").hide();
            $("#S1").hide();
        }
        if ($("#Academic option:selected").text() == "SMP") {
            $("#SD").show();
            $("#SMP").show();
            $("#SMU").hide();
            $("#D3").hide();
            $("#S1").hide();
        }
        if ($("#Academic option:selected").text() == "SMU") {
            $("#SD").show();
            $("#SMP").show();
            $("#SMU").show();
            $("#D3").hide();
            $("#S1").hide();
        }
        if ($("#Academic option:selected").text() == "D3") {
            $("#SD").show();
            $("#SMP").show();
            $("#SMU").show();
            $("#D3").show();
            $("#S1").hide();
        }
        if ($("#Academic option:selected").text() == "S1") {
            $("#S1").show();
        }
    })
    if ($("#Academic option:selected").text() == "SD") {
        $("#SD").show();
        $("#SMP").hide();
        $("#SMU").hide();
        $("#D3").hide();
        $("#S1").hide();
    }
    if ($("#Academic option:selected").text() == "SMP") {
        $("#SD").show();
        $("#SMP").show();
        $("#SMU").hide();
        $("#D3").hide();
        $("#S1").hide();
    }
    if ($("#Academic option:selected").text() == "SMU") {
        $("#SD").show();
        $("#SMP").show();
        $("#SMU").show();
        $("#D3").hide();
        $("#S1").hide();
    }
    if ($("#Academic option:selected").text() == "D3") {
        $("#SD").show();
        $("#SMP").show();
        $("#SMU").show();
        $("#D3").show();
        $("#S1").hide();
    }
    if ($("#Academic option:selected").text() == "S1") {
        $("#SD").show();
        $("#SMP").show();
        $("#SMU").show();
        $("#D3").show();
        $("#S1").show();
    }

    $("#workshopBtn").click(function () {
        $("#academicRecordForm").fadeOut("fast", function () {
            $("#workshopRecordForm").fadeIn("fast");
        });
        $("#academicList").removeClass("active");
        $("#workshopList").addClass("active");
    });
    $("#academicRecordForm").on("click", "#workExpBtn", function () {
        $("#academicRecordForm").fadeOut("fast", function () {
            $("#workExpForm").fadeIn("fast");
        });
        $("#academicList").removeClass("active");
        $("#workExpList").addClass("active");
    });

    //Workshop Form
    if (workshop == 0) {
        $("#removeWorkshopBtn").hide();
    }

    $("#addWorkshopBtn").click(function () {
        workshop++;
        if (workshop > 0) {
            $("#removeWorkshopBtn").show();
        }
        $("#workshopForm").show();
        if (workshop > 5 && $("#workshopFormMax").length == 0) {
            $("#workshop").append('<p id="workshopFormMax" class="error-msg">Maximum data need has reached</p>');
        }
        if ($("#workshopFormMax").length != 0) {
            workshop = 5;
        }
        if (workshop <= 5 && $("#workshopFormMax").length == 0) {
            //Workshop Name
            $("#workshopForm").append('<div id="workshopFormContainer' + workshop + '"></div>');
            $("#workshopFormContainer" + workshop + "").append('<div id="workshopCompanyGroup' + workshop + '" class="form-group"><h4 class="col-sm-offset-1"><strong>Workshop #' + workshop + '</strong></h4></div>');
            $("#workshopCompanyGroup" + workshop + "").append('<label id="workshopCompanyLabel' + workshop + '" for="workshopCompanyText' + workshop + '" class="col-sm-2 control-label">Company Name</label>');
            $("#workshopCompanyGroup" + workshop + "").append('<div id="workshopCompanyColumn' + workshop + '" class="col-sm-10"></div>');
            $("#workshopCompanyColumn" + workshop + "").append('<input id="workshopCompanyText' + workshop + '" type="text" class="form-control"/>');
            //Workshop Institute
            $("#workshopFormContainer" + workshop + "").append('<div id="workshopInstituteGroup' + workshop + '" class="form-group"></div>');
            $("#workshopInstituteGroup" + workshop + "").append('<label id="workshopInstituteLabel' + workshop + '" for="workshopInstituteText' + workshop + '" class="col-sm-2 control-label">Institute Name</label>');
            $("#workshopInstituteGroup" + workshop + "").append('<div id="workshopInstituteColumn' + workshop + '" class="col-sm-5"></div>');
            $("#workshopInstituteColumn" + workshop + "").append('<input id="workshopInstituteText' + workshop + '" type="text" class="form-control"/>');
            $("#workshopInstituteGroup" + workshop + "").append('<label id="workshopYearLabel' + workshop + '" for="workshopYearText' + workshop + '" class="col-sm-2 control-label col-sm-pull-1">Year</label>')
            $("#workshopInstituteGroup" + workshop + "").append('<div id="workshopYearColumn' + workshop + '" class="col-sm-3 col-sm-pull-1"></div>');
            $("#workshopYearColumn" + workshop + "").append('<input id="workshopYearText' + workshop + '" type="text" class="form-control"/>');

            workshopTotal = $("div[id^='workshopFormContainer']").length;
        }
    });
    $("#workshopForm").on("click", "#addWorkshopBtn", function () {
        workshop++;
        if (workshop > 0) {
            $("#removeWorkshopBtn").show();
        }
    })
    $("#removeWorkshopBtn").click(function () {
        if (workshop == 5) {
            $("#workshopFormMax").remove();
        }
        $("#workshopFormContainer" + workshop + "").remove();
        workshop--;
        if (workshop < 1) {
            $("#removeWorkshopBtn").hide();
        }
    })
    $("#workshopForm").on("click", "#removeWorkshopBtn", function () {
        if (workshop > 1) {
            $("#workshopFormContainer" + workshop + "").remove();
            workshop--;
        }
        else {
            $("#removeWorkshopBtn").remove();
            $("#workshopFormContainer" + workshop + "").remove();
            child--;
        }
    });

    $("#bankBtn").click(function () {
        $("#workshopRecordForm").fadeOut("fast", function () {
            $("#bankAccountForm").fadeIn("fast");
        });
        $("#workshopList").removeClass("active");
        $("#bankList").addClass("active");
    });
    $("#workshopRecordForm").on("click", "#academicBtn", function () {
        $("#workshopRecordForm").fadeOut("fast", function () {
            $("#academicRecordForm").fadeIn("fast");
        });
        $("#workshopList").removeClass("active");
        $("#academicList").addClass("active");
    });

    //Bank Form
    $("#otherBtn").click(function () {
        $("#bankAccountForm").fadeOut("fast", function () {
            $("#otherRecordForm").fadeIn("fast");
        });
        $("#bankList").removeClass("active");
        $("#otherList").addClass("active");
    });
    $("#bankAccountForm").on("click", "#workshopBtn", function () {
        $("#bankAccountForm").fadeOut("fast", function () {
            $("#workshopRecordForm").fadeIn("fast");
        });
        $("#bankList").removeClass("active");
        $("#workshopList").addClass("active");
    });

    //Other Form
    $("#agreeBtn").click(function () {
        $("#otherRecordForm").fadeOut("fast", function () {
            $("#agreeForm").fadeIn("fast");
        });
        $("#otherList").removeClass("active");
        $("#agreeList").addClass("active");
    });
    $("#otherRecordForm").on("click", "#bankBtn", function () {
        $("#otherRecordForm").fadeOut("fast", function () {
            $("#bankAccountForm").fadeIn("fast");
        });
        $("#otherList").removeClass("active");
        $("#bankList").addClass("active");
    });

    //Agree Form
    $("#agreeForm").on("click", "#otherBtn", function () {
        $("#agreeForm").fadeOut("fast", function () {
            $("#otherRecordForm").fadeIn("fast");
        });
        $("#agreeList").removeClass("active");
        $("#otherList").addClass("active");
    });

    $("#agreeForm").on("click", "#submitBtn", function () {
        gatherChild();
        postChild();
        //postTest();
        //alert(JSON.stringify(testData));
        alert(JSON.stringify(childData));
    });

    //Validation
    
    var testData = [];
    function postTest() {
        testData.push({ Tests: "test" });
        testData.push({ Tests: "test1" });
        testData.push({ Tests: "test2" });

        $.ajax({
            url: '/Account/Register',
            type: 'post',
            data: JSON.stringify(testData),
            contentType: 'application/json;',
            dataType: "json"
        });
    }

    var childData = [];
    var siblingData = [];
    var workExpData = [];


    childData.push({
        ChildName: "Asd",
        ChildGender: "0",
        ChildBirthPlace: "Asd",
        ChildDatePlace: "Asd",
        ChildJob: "Asd"
    });
    childData.push({
        ChildName: "Asd",
        ChildGender: "0",
        ChildBirthPlace: "Asd",
        ChildDatePlace: "Asd",
        ChildJob: "Asd"
    });

    function gatherChild() {
        for (var i = 0; i < childTotal; i++) {
            childData.push({
                ChildName: $("input[id='childNameText" + (i + 1) + "']").val(),
                ChildGender: $("select[id='childGenderDropDown" + (i + 1) + "'] option:selected").val(),
                ChildBirthPlace: $("input[id='childBirthPlaceText" + (i + 1) + "']").val(),
                ChildDatePlace: $("input[id='childBirthDateText" + (i + 1) + "']").val(),
                ChildJob: $("input[id='childJobText" + (i + 1) + "']").val()
            });
        }
    }

    function gatherSibling() {
        for (var i = 0; i < siblingTotal; i++) {
            siblingData.push({
                SiblingName: $("input[id='siblingNameText" + (i + 1) + "']").val(),
                SiblingBirthPlace: $("input[id='siblingBirthPlaceText" + (i + 1) + "']").val(),
                SiblingDatePlace: $("input[id='siblingBirthDateText" + (i + 1) + "']").val(),
                SiblingGender: $("select[id='siblingGenderDropDown" + (i + 1) + "'] option:selected").text()
            });
        }
    }
    //function gatherWorkExp() {
    //    for (var i = 0; i < siblingTotal; i++) {
    //        siblingData.push({
    //            "SiblingName": $("input[id='siblingNameText" + (i + 1) + "']").val(),
    //            "SiblingBirthPlace": $("input[id='siblingBirthPlaceText" + (i + 1) + "']").val(),
    //            "SiblingDatePlace": $("input[id='siblingBirthDateText" + (i + 1) + "']").val(),
    //            "SiblingGender": $("select[id='siblingGenderDropDown" + (i + 1) + "'] option:selected").text(),
    //        });
    //    }
    //}


    function postChild() {
        $.ajax({
            url: '/Account/Register',
            type: 'post',
            data: JSON.stringify(childData),
            contentType: 'application/json;',
            dataType: "json"
        });
    }
});