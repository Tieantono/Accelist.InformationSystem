//$("#registrationForm").ready(function () {
//    $("#mainFamilyForm").hide();
//    $("#biologicalFamilyForm").hide();
//    $("#workExpForm").hide();
//    $("#academicRecordForm").hide();
//    $("#workshopRecordForm").hide();
//    $("#bankAccountForm").hide();
//    $("#otherRecordForm").hide();
//    $("#agreeForm").hide();
//    $("#SD").hide();
//    $("#SMP").hide();
//    $("#SMU").hide();
//    $("#D3").hide();
//    $("#S1").hide();

//    var singleFlag = null;
//    var child = 0;
//    var sibling = 0;
//    var childTotal = 0;
//    var siblingTotal = 0;
//    var work = 0;
//    var workTotal = 0;
//    var workshop = 0;
//    var workshopTotal = 0;
//    var currentFormFlag = "#personalForm";

//    if ($("#personalForm").css("display") != "none") {
//        $("#personalList").addClass("active");
//    }

//    //$("#formList button").click(function () {
//    //    $(this).addClass("form-control");
//    //});

//    $("#Status").change(function () {
//        if ($("#Status option:selected").text() == "Single") {
//            $("#personalForm #mainFamilyBtn").attr("id", "biologicalFamilyBtn");
//            $("#biologicalFamilyForm #mainFamilyBtn").attr("id", "personalBtn");
//            $("#mainFamilyList").addClass("disabled");
//            singleFlag = true;
//        }
//        if ($("#Status option:selected").text() != "Single") {
//            $("#personalForm #biologicalFamilyBtn").attr("id", "mainFamilyBtn");
//            $("#biologicalFamilyForm #personalBtn").attr("id", "mainFamilyBtn");
//            $("#mainFamilyList").removeClass("disabled");
//            singleFlag = false;
//        }
//    })
//    if ($("#Status option:selected").text() == "Single") {
//        $("#personalForm #mainFamilyBtn").attr("id", "biologicalFamilyBtn");
//        $("#biologicalFamilyForm #mainFamilyBtn").attr("id", "personalBtn");
//        $("#mainFamilyList").addClass("disabled");
//        singleFlag = true;
//    }
//    if ($("#Status option:selected").text() != "Single") {
//        $("#personalForm #biologicalFamilyBtn").attr("id", "mainFamilyBtn");
//        $("#biologicalFamilyForm #personalBtn").attr("id", "mainFamilyBtn");
//        $("#mainFamilyList").removeClass("disabled");
//        singleFlag = false;
//    }
//    $("#mainFamilyForm #personalBtn").click(function () {
//        $("#mainFamilyForm").fadeOut("fast", function () {
//            $("#personalForm").fadeIn("fast");
//        });
//        $("#mainFamilyList").removeClass("active");
//        $("#personalList").addClass("active");
//    });
//    $("#mainFamilyForm #biologicalFamilyBtn").click(function () {
//        $("#mainFamilyForm").fadeOut("fast", function () {
//            $("#biologicalFamilyForm").fadeIn("fast");
//        });
//        $("#mainFamilyList").removeClass("active");
//        $("#biologicalFamilyList").addClass("active");
//    });

//    $("#personalForm").on("click", "#biologicalFamilyBtn", function () {
//        $("#personalForm").fadeOut("fast", function () {
//            $("#biologicalFamilyForm").fadeIn("fast");
//        });
//        $("#personalList").removeClass("active");
//        $("#biologicalFamilyList").addClass("active");
//        currentFormFlag = "#biologicalFamilyForm";
//    });
//    $("#personalForm").on("click", "#mainFamilyBtn", function () {
//        $("#personalForm").fadeOut("fast", function () {
//            $("#mainFamilyForm").fadeIn("fast");
//        });
//        $("#personalList").removeClass("active");
//        $("#mainFamilyList").addClass("active");
//    });
//    $("#biologicalFamilyForm").on("click", "#personalBtn", function () {
//        $("#biologicalFamilyForm").fadeOut("fast", function () {
//            $("#personalForm").fadeIn("fast");
//        });
//        $("#biologicalFamilyList").removeClass("active");
//        $("#personalList").addClass("active");
//        currentFormFlag = "#personalForm";
//    });
//    $("#biologicalFamilyForm").on("click", "#mainFamilyBtn", function () {
//        $("#biologicalFamilyForm").fadeOut("fast", function () {
//            $("#mainFamilyForm").fadeIn("fast");
//        });
//        $("#biologicalFamilyList").removeClass("active");
//        $("#mainFamilyList").addClass("active");
//    });

//    $("#Gender").change(function () {
//        if ($("#Gender option:selected").text() == "Male") {
//            $("#wife").show();
//            $("#husband").hide();
//            $("#MateGender").attr("value", "Female");
//        }
//        else {
//            $("#wife").hide();
//            $("#husband").show();
//            $("#MateGender").attr("value", "Male");
//        }
//    })
//    if ($("#Gender option:selected").text() == "Male") {
//        $("#wife").show();
//        $("#husband").hide();
//        $("#MateGender").attr("value", "Female");
//    }
//    else {
//        $("#wife").hide();
//        $("#husband").show();
//        $("#MateGender").attr("value", "Male");
//    }

//    //Child Form
//    if (child == 0) {
//        $("#removeChildBtn").hide();
//    }
//    $("#addChildBtn").click(function () {
//        child++;
//        if (child > 0) {
//            $("#removeChildBtn").show();
//        }
//        $("#childForm").show();
//        //Child's Name
//        $("#childForm").append('<div id="childFormContainer' + child + '"></div>');
//        $("#childFormContainer" + child + "").append('<div id="childNameGroup' + child + '" class="form-group"><h4 class="col-sm-offset-1"><strong>Child #' + child + '</strong></h4></div>');
//        $("#childNameGroup" + child + "").append('<label id="childNameLabel' + child + '" for="childNameText' + child + '" class="col-sm-2 control-label">Name</label>');
//        $("#childNameGroup" + child + "").append('<div id="childNameColumn' + child + '" class="col-sm-10"></div>');
//        $("#childNameColumn" + child + "").append('<input id="childNameText' + child + '" type="text" class="form-control"/>');
//        //Child's Birth Place & Date
//        $("#childFormContainer" + child + "").append('<div id="childBirthGroup' + child + '" class="form-group"></div>');
//        $("#childBirthGroup" + child + "").append('<label id="childBirthPlaceLabel' + child + '" for="childBirthPlaceText' + child + '" class="col-sm-2 control-label">Birth Place</label>');
//        $("#childBirthGroup" + child + "").append('<div id="childBirthPlaceColumn' + child + '" class="col-sm-4"></div>');
//        $("#childBirthPlaceColumn" + child + "").append('<input id="childBirthPlaceText' + child + '" type="text" class="form-control"/>');
//        $("#childBirthGroup" + child + "").append('<label id="childBirthDateLabel' + child + '" for="childBirthDateText' + child + '" class="col-sm-2 control-label col-sm-pull-1">& Date</label>')
//        $("#childBirthGroup" + child + "").append('<div id="childBirthDateColumn' + child + '" class="col-sm-4 col-sm-pull-1"></div>');
//        $("#childBirthDateColumn" + child + "").append('<input id="childBirthDateText' + child + '" type="text" class="form-control"/>');
//        //Child's Gender
//        $("#childFormContainer" + child + "").append('<div id="childGenderGroup' + child + '" class="form-group"></div>');
//        $("#childGenderGroup" + child + "").append('<label id="childGenderLabel' + child + '" for="childGenderDropDown' + child + '" class="col-sm-2 control-label">Gender</label>');
//        $("#childGenderGroup" + child + "").append('<div id="childGenderColumn' + child + '" class="col-sm-10"></div>');
//        $("#childGenderColumn" + child + "").append('<select id="childGenderDropDown' + child + '" class="form-control"><option value="0">Male</option><option value="1">Female</option</select>');
//        //Child's Job
//        $("#childFormContainer" + child + "").append('<div id="childJobGroup' + child + '" class="form-group"></div>');
//        $("#childJobGroup" + child + "").append('<label id="childJobLabel' + child + '" for="childJobText' + child + '" class="col-sm-2 control-label">Job/Occupation</label>');
//        $("#childJobGroup" + child + "").append('<div id="childJobColumn' + child + '" class="col-sm-10"></div>');
//        $("#childJobColumn" + child + "").append('<input id="childJobText' + child + '" type="text" class="form-control"/>');

//        childTotal = $("div[id^='childFormContainer']").length;
//    });
//    $("#childForm").on("click", "#addChildBtn", function () {
//        child++;
//        if (child > 0) {
//            $("#removeChildBtn").show();
//        }
//    })
//    $("#removeChildBtn").click(function () {
//        if (child > 1) {
//            $("#childFormContainer" + child + "").remove();
//            child--;
//        }
//        else {
//            $("#removeChildBtn").hide();
//            $("#childFormContainer" + child + "").remove();
//            child--;
//        }
//    })
//    $("#childForm").on("click", "#removeChildBtn", function () {
//        if (child > 1) {
//            $("#childFormContainer" + child + "").remove();
//            child--;
//        }
//        else {
//            $("#removeChildBtn").remove();
//            $("#childFormContainer" + child + "").remove();
//            child--;
//        }
//    })

//    //Sibling Form
//    if (sibling == 0) {
//        $("#removeSiblingBtn").hide();
//    }
//    $("#addSiblingBtn").click(function () {
//        sibling++;
//        if (sibling > 0) {
//            $("#removeSiblingBtn").show();
//        }
//        $("#siblingForm").show();
//        //Sibling's Name
//        $("#siblingForm").append('<div id="siblingFormContainer' + sibling + '"></div>');
//        $("#siblingFormContainer" + sibling + "").append('<div id="siblingNameGroup' + sibling + '" class="form-group"><h4 class="col-sm-offset-1"><strong>Sibling #' + sibling + '</strong></h4></div>');
//        $("#siblingNameGroup" + sibling + "").append('<label id="siblingNameLabel' + sibling + '" for="siblingNameText' + sibling + '" class="col-sm-2 control-label">Name</label>');
//        $("#siblingNameGroup" + sibling + "").append('<div id="siblingNameColumn' + sibling + '" class="col-sm-10"></div>');
//        $("#siblingNameColumn" + sibling + "").append('<input id="siblingNameText' + sibling + '" type="text" class="form-control"/>');
//        //Sibling's Birth Place & Date
//        $("#siblingFormContainer" + sibling + "").append('<div id="siblingBirthGroup' + sibling + '" class="form-group"></div>');
//        $("#siblingBirthGroup" + sibling + "").append('<label id="siblingBirthPlaceLabel' + sibling + '" for="siblingBirthPlaceText' + sibling + '" class="col-sm-2 control-label">Birth Place</label>');
//        $("#siblingBirthGroup" + sibling + "").append('<div id="siblingBirthPlaceColumn' + sibling + '" class="col-sm-4"></div>');
//        $("#siblingBirthPlaceColumn" + sibling + "").append('<input id="siblingBirthPlaceText' + sibling + '" type="text" class="form-control"/>');
//        $("#siblingBirthGroup" + sibling + "").append('<label id="siblingBirthDateLabel' + sibling + '" for="siblingBirthDateText' + sibling + '" class="col-sm-2 control-label col-sm-pull-1">& Date</label>')
//        $("#siblingBirthGroup" + sibling + "").append('<div id="siblingBirthDateColumn' + sibling + '" class="col-sm-4 col-sm-pull-1"></div>');
//        $("#siblingBirthDateColumn" + sibling + "").append('<input id="siblingBirthDateText' + sibling + '" type="text" class="form-control"/>');
//        //Sibling's Gender
//        $("#siblingFormContainer" + sibling + "").append('<div id="siblingGenderGroup' + sibling + '" class="form-group"></div>');
//        $("#siblingGenderGroup" + sibling + "").append('<label id="siblingGenderLabel' + sibling + '" for="siblingGenderDropDown' + sibling + '" class="col-sm-2 control-label">Gender</label>');
//        $("#siblingGenderGroup" + sibling + "").append('<div id="siblingGenderColumn' + sibling + '" class="col-sm-10"></div>');
//        $("#siblingGenderColumn" + sibling + "").append('<select id="siblingGenderDropDown' + sibling + '" class="form-control"><option value="0">Male</option><option value="1">Female</option</select>');
//        //Sibling's Job
//        $("#siblingFormContainer" + sibling + "").append('<div id="siblingJobGroup' + sibling + '" class="form-group"></div>');
//        $("#siblingJobGroup" + sibling + "").append('<label id="siblingJobLabel' + sibling + '" for="siblingJobText' + sibling + '" class="col-sm-2 control-label">Job/Occupation</label>');
//        $("#siblingJobGroup" + sibling + "").append('<div id="siblingJobColumn' + sibling + '" class="col-sm-10"></div>');
//        $("#siblingJobColumn" + sibling + "").append('<input id="siblingJobText' + sibling + '" type="text" class="form-control"/>');

//        siblingTotal = $("div[id^='siblingFormContainer']").length;
//    });
//    $("#siblingForm").on("click", "#addSiblingBtn", function () {
//        sibling++;
//        if (sibling > 0) {
//            $("#removeSiblingBtn").show();
//        }
//    })
//    $("#removeSiblingBtn").click(function () {
//        if (sibling > 1) {
//            $("#siblingFormContainer" + sibling + "").remove();
//            sibling--;
//        }
//        else {
//            $("#removeSiblingBtn").hide();
//            $("#siblingFormContainer" + sibling + "").remove();
//            sibling--;
//        }
//    })
//    $("#siblingForm").on("click", "#removeSiblingBtn", function () {
//        if (sibling > 1) {
//            $("#siblingFormContainer" + sibling + "").remove();
//            sibling--;
//        }
//        else {
//            $("#removeSiblingBtn").remove();
//            $("#siblingFormContainer" + sibling + "").remove();
//            child--;
//        }
//    })

//    $("#workExpBtn").click(function () {
//        $("#biologicalFamilyForm").fadeOut("fast", function () {
//            $("#workExpForm").fadeIn("fast");
//        });
//        $("#biologicalFamilyList").removeClass("active");
//        $("#workExpList").addClass("active");
//    });

//    $("#workExpForm").on("click", "#biologicalFamilyBtn", function () {
//        $("#workExpForm").fadeOut("fast", function () {
//            $("#biologicalFamilyForm").fadeIn("fast");
//        });
//        $("#workExpList").removeClass("active");
//        $("#biologicalFamilyList").addClass("active");
//    });

//    //Work Experience Form
//    if (work == 0) {
//        $("#removeWorkBtn").hide();
//    }

//    $("#addWorkBtn").click(function () {
//        work++;
//        if (work > 0) {
//            $("#removeWorkBtn").show();
//        }
//        $("#workForm").show();
//        if (work > 5 && $("#workFormMax").length == 0) {
//            $("#work").append('<p id="workFormMax" class="error-msg">Maximum data need has reached</p>');
//        }
//        if ($("#workFormMax").length != 0) {
//            work = 5;
//        }
//        if (work <= 5 && $("#workFormMax").length == 0) {
//            //Work Company
//            $("#workForm").append('<div id="workFormContainer' + work + '"></div>');
//            $("#workFormContainer" + work + "").append('<div id="workCompanyGroup' + work + '" class="form-group"><h4 class="col-sm-offset-1"><strong>Work Experience #' + work + '</strong></h4></div>');
//            $("#workCompanyGroup" + work + "").append('<label id="workCompanyLabel' + work + '" for="workCompanyText' + work + '" class="col-sm-2 control-label">Company Name</label>');
//            $("#workCompanyGroup" + work + "").append('<div id="workCompanyColumn' + work + '" class="col-sm-10"></div>');
//            $("#workCompanyColumn" + work + "").append('<input id="workCompanyText' + work + '" type="text" class="form-control"/>');
//            //Work Position
//            $("#workFormContainer" + work + "").append('<div id="workPositionGroup' + work + '" class="form-group"></div>');
//            $("#workPositionGroup" + work + "").append('<label id="workPositionLabel' + work + '" for="workPositionText' + work + '" class="col-sm-2 control-label">Position</label>');
//            $("#workPositionGroup" + work + "").append('<div id="workPositionColumn' + work + '" class="col-sm-10"></div>');
//            $("#workPositionColumn" + work + "").append('<input id="workPositionText' + work + '" type="text" class="form-control"/>');

//            //Working Duration
//            $("#workFormContainer" + work + "").append('<div id="workDurationGroup' + work + '" class="form-group"></div>');
//            $("#workDurationGroup" + work + "").append('<label id="workJoinDateLabel' + work + '" for="workJoinDateText' + work + '" class="col-sm-2 control-label">Join Date</label>');
//            $("#workDurationGroup" + work + "").append('<div id="workJoinDateColumn' + work + '" class="col-sm-4"></div>');
//            $("#workJoinDateColumn" + work + "").append('<input id="workJoinDateText' + work + '" type="text" class="form-control"/>');
//            $("#workDurationGroup" + work + "").append('<label id="workEndDateLabel' + work + '" for="workEndDateText' + work + '" class="col-sm-2 control-label col-sm-pull-1">End Date</label>')
//            $("#workDurationGroup" + work + "").append('<div id="workEndDateColumn' + work + '" class="col-sm-4 col-sm-pull-1"></div>');
//            $("#workEndDateColumn" + work + "").append('<input id="workEndDateText' + work + '" type="text" class="form-control"/>');

//            workTotal = $("div[id^='workFormContainer']").length;
//        }
//    });
//    $("#workForm").on("click", "#addWorkBtn", function () {
//        work++;
//        if (work > 0) {
//            $("#removeWorkBtn").show();
//        }
//    })
//    $("#removeWorkBtn").click(function () {
//        if (work == 5) {
//            $("#workFormMax").remove();
//        }
//        $("#workFormContainer" + work + "").remove();
//        work--;
//        if (work < 1) {
//            $("#removeWorkBtn").hide();
//        }
//    })
//    $("#workForm").on("click", "#removeWorkBtn", function () {
//        if (work > 1) {
//            $("#workFormContainer" + work + "").remove();
//            work--;
//        }
//        else {
//            $("#removeWorkBtn").remove();
//            $("#workFormContainer" + work + "").remove();
//            child--;
//        }
//    })

//    $("#academicBtn").click(function () {
//        $("#workExpForm").fadeOut("fast", function () {
//            $("#academicRecordForm").fadeIn("fast");
//        });
//        $("#workExpList").removeClass("active");
//        $("#academicList").addClass("active");
//    });
//    $("#academicRecordForm").on("click", "#workExpBtn", function () {
//        $("#academicRecordForm").fadeOut("fast", function () {
//            $("#workExpForm").fadeIn("fast");
//        });
//        $("#academicList").removeClass("active");
//        $("#workExpList").addClass("active");
//    });

//    $("#Academic").change(function () {
//        if ($("#Academic option:selected").text() == "SD") {
//            $("#SD").show();
//            $("#SMP").hide();
//            $("#SMU").hide();
//            $("#D3").hide();
//            $("#S1").hide();
//        }
//        if ($("#Academic option:selected").text() == "SMP") {
//            $("#SD").show();
//            $("#SMP").show();
//            $("#SMU").hide();
//            $("#D3").hide();
//            $("#S1").hide();
//        }
//        if ($("#Academic option:selected").text() == "SMU") {
//            $("#SD").show();
//            $("#SMP").show();
//            $("#SMU").show();
//            $("#D3").hide();
//            $("#S1").hide();
//        }
//        if ($("#Academic option:selected").text() == "D3") {
//            $("#SD").show();
//            $("#SMP").show();
//            $("#SMU").show();
//            $("#D3").show();
//            $("#S1").hide();
//        }
//        if ($("#Academic option:selected").text() == "S1") {
//            $("#S1").show();
//        }
//    })
//    if ($("#Academic option:selected").text() == "SD") {
//        $("#SD").show();
//        $("#SMP").hide();
//        $("#SMU").hide();
//        $("#D3").hide();
//        $("#S1").hide();
//    }
//    if ($("#Academic option:selected").text() == "SMP") {
//        $("#SD").show();
//        $("#SMP").show();
//        $("#SMU").hide();
//        $("#D3").hide();
//        $("#S1").hide();
//    }
//    if ($("#Academic option:selected").text() == "SMU") {
//        $("#SD").show();
//        $("#SMP").show();
//        $("#SMU").show();
//        $("#D3").hide();
//        $("#S1").hide();
//    }
//    if ($("#Academic option:selected").text() == "D3") {
//        $("#SD").show();
//        $("#SMP").show();
//        $("#SMU").show();
//        $("#D3").show();
//        $("#S1").hide();
//    }
//    if ($("#Academic option:selected").text() == "S1") {
//        $("#SD").show();
//        $("#SMP").show();
//        $("#SMU").show();
//        $("#D3").show();
//        $("#S1").show();
//    }

//    $("#workshopBtn").click(function () {
//        $("#academicRecordForm").fadeOut("fast", function () {
//            $("#workshopRecordForm").fadeIn("fast");
//        });
//        $("#academicList").removeClass("active");
//        $("#workshopList").addClass("active");
//    });
//    $("#academicRecordForm").on("click", "#workExpBtn", function () {
//        $("#academicRecordForm").fadeOut("fast", function () {
//            $("#workExpForm").fadeIn("fast");
//        });
//        $("#academicList").removeClass("active");
//        $("#workExpList").addClass("active");
//    });

//    //Workshop Form
//    if (workshop == 0) {
//        $("#removeWorkshopBtn").hide();
//    }

//    $("#addWorkshopBtn").click(function () {
//        workshop++;
//        if (workshop > 0) {
//            $("#removeWorkshopBtn").show();
//        }
//        $("#workshopForm").show();
//        if (workshop > 5 && $("#workshopFormMax").length == 0) {
//            $("#workshop").append('<p id="workshopFormMax" class="error-msg">Maximum data need has reached</p>');
//        }
//        if ($("#workshopFormMax").length != 0) {
//            workshop = 5;
//        }
//        if (workshop <= 5 && $("#workshopFormMax").length == 0) {
//            //Workshop Name
//            $("#workshopForm").append('<div id="workshopFormContainer' + workshop + '"></div>');
//            $("#workshopFormContainer" + workshop + "").append('<div id="workshopCompanyGroup' + workshop + '" class="form-group"><h4 class="col-sm-offset-1"><strong>Workshop #' + workshop + '</strong></h4></div>');
//            $("#workshopCompanyGroup" + workshop + "").append('<label id="workshopCompanyLabel' + workshop + '" for="workshopCompanyText' + workshop + '" class="col-sm-2 control-label">Company Name</label>');
//            $("#workshopCompanyGroup" + workshop + "").append('<div id="workshopCompanyColumn' + workshop + '" class="col-sm-10"></div>');
//            $("#workshopCompanyColumn" + workshop + "").append('<input id="workshopCompanyText' + workshop + '" type="text" class="form-control"/>');
//            //Workshop Institute
//            $("#workshopFormContainer" + workshop + "").append('<div id="workshopInstituteGroup' + workshop + '" class="form-group"></div>');
//            $("#workshopInstituteGroup" + workshop + "").append('<label id="workshopInstituteLabel' + workshop + '" for="workshopInstituteText' + workshop + '" class="col-sm-2 control-label">Institute Name</label>');
//            $("#workshopInstituteGroup" + workshop + "").append('<div id="workshopInstituteColumn' + workshop + '" class="col-sm-5"></div>');
//            $("#workshopInstituteColumn" + workshop + "").append('<input id="workshopInstituteText' + workshop + '" type="text" class="form-control"/>');
//            $("#workshopInstituteGroup" + workshop + "").append('<label id="workshopYearLabel' + workshop + '" for="workshopYearText' + workshop + '" class="col-sm-2 control-label col-sm-pull-1">Year</label>')
//            $("#workshopInstituteGroup" + workshop + "").append('<div id="workshopYearColumn' + workshop + '" class="col-sm-3 col-sm-pull-1"></div>');
//            $("#workshopYearColumn" + workshop + "").append('<input id="workshopYearText' + workshop + '" type="text" class="form-control"/>');

//            workshopTotal = $("div[id^='workshopFormContainer']").length;
//        }
//    });
//    $("#workshopForm").on("click", "#addWorkshopBtn", function () {
//        workshop++;
//        if (workshop > 0) {
//            $("#removeWorkshopBtn").show();
//        }
//    })
//    $("#removeWorkshopBtn").click(function () {
//        if (workshop == 5) {
//            $("#workshopFormMax").remove();
//        }
//        $("#workshopFormContainer" + workshop + "").remove();
//        workshop--;
//        if (workshop < 1) {
//            $("#removeWorkshopBtn").hide();
//        }
//    })
//    $("#workshopForm").on("click", "#removeWorkshopBtn", function () {
//        if (workshop > 1) {
//            $("#workshopFormContainer" + workshop + "").remove();
//            workshop--;
//        }
//        else {
//            $("#removeWorkshopBtn").remove();
//            $("#workshopFormContainer" + workshop + "").remove();
//            child--;
//        }
//    });

//    $("#bankBtn").click(function () {
//        $("#workshopRecordForm").fadeOut("fast", function () {
//            $("#bankAccountForm").fadeIn("fast");
//        });
//        $("#workshopList").removeClass("active");
//        $("#bankList").addClass("active");
//    });
//    $("#workshopRecordForm").on("click", "#academicBtn", function () {
//        $("#workshopRecordForm").fadeOut("fast", function () {
//            $("#academicRecordForm").fadeIn("fast");
//        });
//        $("#workshopList").removeClass("active");
//        $("#academicList").addClass("active");
//    });

//    //Bank Form
//    $("#otherBtn").click(function () {
//        $("#bankAccountForm").fadeOut("fast", function () {
//            $("#otherRecordForm").fadeIn("fast");
//        });
//        $("#bankList").removeClass("active");
//        $("#otherList").addClass("active");
//    });
//    $("#bankAccountForm").on("click", "#workshopBtn", function () {
//        $("#bankAccountForm").fadeOut("fast", function () {
//            $("#workshopRecordForm").fadeIn("fast");
//        });
//        $("#bankList").removeClass("active");
//        $("#workshopList").addClass("active");
//    });

//    //Other Form
//    $("#agreeBtn").click(function () {
//        $("#otherRecordForm").fadeOut("fast", function () {
//            $("#agreeForm").fadeIn("fast");
//        });
//        $("#otherList").removeClass("active");
//        $("#agreeList").addClass("active");
//    });
//    $("#otherRecordForm").on("click", "#bankBtn", function () {
//        $("#otherRecordForm").fadeOut("fast", function () {
//            $("#bankAccountForm").fadeIn("fast");
//        });
//        $("#otherList").removeClass("active");
//        $("#bankList").addClass("active");
//    });

//    //Agree Form
//    $("#agreeForm").on("click", "#otherBtn", function () {
//        $("#agreeForm").fadeOut("fast", function () {
//            $("#otherRecordForm").fadeIn("fast");
//        });
//        $("#agreeList").removeClass("active");
//        $("#otherList").addClass("active");
//    });

//    $("#agreeForm").on("click", "#submitBtn", function () {
//        gatherChild();
//        postChild();
//        //postTest();
//        //alert(JSON.stringify(testData));
//        alert(JSON.stringify(childData));
//    });

//    //Validation

//    var testData = [];
//    function postTest() {
//        testData.push({ Tests: "test" });
//        testData.push({ Tests: "test1" });
//        testData.push({ Tests: "test2" });

//        $.ajax({
//            url: '/Account/Register',
//            type: 'post',
//            data: JSON.stringify(testData),
//            contentType: 'application/json;',
//            dataType: "json"
//        });
//    }

//    var childData = [];
//    var siblingData = [];
//    var workExpData = [];


//    childData.push({
//        ChildName: "Asd",
//        ChildGender: "0",
//        ChildBirthPlace: "Asd",
//        ChildDatePlace: "Asd",
//        ChildJob: "Asd"
//    });
//    childData.push({
//        ChildName: "Asd",
//        ChildGender: "0",
//        ChildBirthPlace: "Asd",
//        ChildDatePlace: "Asd",
//        ChildJob: "Asd"
//    });

//    function gatherChild() {
//        for (var i = 0; i < childTotal; i++) {
//            childData.push({
//                ChildName: $("input[id='childNameText" + (i + 1) + "']").val(),
//                ChildGender: $("select[id='childGenderDropDown" + (i + 1) + "'] option:selected").val(),
//                ChildBirthPlace: $("input[id='childBirthPlaceText" + (i + 1) + "']").val(),
//                ChildDatePlace: $("input[id='childBirthDateText" + (i + 1) + "']").val(),
//                ChildJob: $("input[id='childJobText" + (i + 1) + "']").val()
//            });
//        }
//    }

//    function gatherSibling() {
//        for (var i = 0; i < siblingTotal; i++) {
//            siblingData.push({
//                SiblingName: $("input[id='siblingNameText" + (i + 1) + "']").val(),
//                SiblingBirthPlace: $("input[id='siblingBirthPlaceText" + (i + 1) + "']").val(),
//                SiblingDatePlace: $("input[id='siblingBirthDateText" + (i + 1) + "']").val(),
//                SiblingGender: $("select[id='siblingGenderDropDown" + (i + 1) + "'] option:selected").text()
//            });
//        }
//    }
//    //function gatherWorkExp() {
//    //    for (var i = 0; i < siblingTotal; i++) {
//    //        siblingData.push({
//    //            "SiblingName": $("input[id='siblingNameText" + (i + 1) + "']").val(),
//    //            "SiblingBirthPlace": $("input[id='siblingBirthPlaceText" + (i + 1) + "']").val(),
//    //            "SiblingDatePlace": $("input[id='siblingBirthDateText" + (i + 1) + "']").val(),
//    //            "SiblingGender": $("select[id='siblingGenderDropDown" + (i + 1) + "'] option:selected").text(),
//    //        });
//    //    }
//    //}


//    //$("#formList button").each(function () {
//    //    $("button").click(function () {
//    //        //alert($(this).attr("id"));
//    //        if ($(this).hasClass("disabled") == false) {
//    //            if ($(this).attr("id") == "personalList") {
//    //                $(currentFormFlag).fadeOut("fast");
//    //                $("#personalBtn").trigger("click");
//    //            }
//    //            if ($(this).attr("id") == "mainFamilyList") {
//    //                $(currentFormFlag).fadeOut("fast");
//    //                $("#personalForm #mainFamilyBtn").trigger("click");
//    //            }
//    //        }
//    //        else {
//    //            alert("test");
//    //        }
//    //    });
//    //    return false;
//    //});


//    function postChild() {
//        $.ajax({
//            url: '/Account/Register',
//            type: 'post',
//            data: JSON.stringify(childData),
//            contentType: 'application/json;',
//            dataType: "json"
//        });
//    }
//});


//$("#employeeListPage").ready(function () {
//    GenerateRowNumber();

//    $(".dataRow").on("click", ".deleteEmployeeBtn", function () {
//        var employeeId = $(this).val();
//        $(this).closest(".dataRow").fadeOut("slow", function () {
//            $(this).closest(".dataRow").remove();
//            deleteEmployee(employeeId);
//            GenerateRowNumber();
//        });
//    });

//    function GenerateRowNumber() {
//        $(".dataRow").each(function (i) {
//            $(".testColumn", this).html(i + 1);
//        });
//    }

//    function deleteEmployee(indexString) {
//        $.ajax({
//            url: '/Employee/DeleteEmployee',
//            type: 'post',
//            data: { 'index': indexString }
//        });
//    }
//});

$("#employeeMasterData").ready(function () {
    $(function () {
        $("#BirthDate").datepicker();
    });
    $(function () {
        $("#StatusChangeDate").datepicker();
    });

    //$("#mateRelation").on("change", "#Gender", function () {

    //});

    if ($("#Gender option:selected").text() == "Male") {
        $("#mateRelation").text("Wife");
        $("#mateGender").text("Female");
    }
    if ($("#Gender option:selected").text() == "Female") {
        $("#mateRelation").text("Husband");
        $("#mateGender").text("Male");
    }

    $("#Gender").change(function () {
        if ($("#Gender option:selected").text() == "Male") {
            $("#mateRelation").text("Wife");
            $("#mateGender").text("Female");
        }
        if ($("#Gender option:selected").text() == "Female") {
            $("#mateRelation").text("Husband");
            $("#mateGender").text("Male");
        }
    });

    $(this).on("change", "#CurrentAddress", function () {
        if ($(this).val() == "new") {
            $("textarea", "#currentAddressTextarea").prop("disabled", false);
        }
        else {
            var getVal = $("#addressTextarea").val();
            $("textarea", "#currentAddressTextarea").val(getVal);
            $("textarea", "#currentAddressTextarea").prop("disabled", true);
        }
    });

    $(this).on("change", "[id^=siblingIsYourself]", function () {
        //if ($("#siblingIsYourself:checkbox").is(":checked")) {
        //    var fullName = $("#EmployeeName").val();
        //    $("#siblingName1").val(fullName);
        //}
        var i = 0;
        $("[id^=siblingIsYourself]").each(function () {
            i++;
        });

        //alert(i);

        if ($("[id^=siblingIsYourself]:checkbox").is(":checked")) {
            var fullName = $("#EmployeeName").val();
            $("#siblingFullName1").val(fullName);
        }
        else {
            $("#siblingFullName1").val("");
        }
    });

    //Append a new row for Child data on Main Family Form
    var childTotal = 0;
    $("#mainFamilyForm").ready(function () {
        var childCount = 0;
        $("#addChildBtn").click(function () {
            if (childCount == 0) {
                addRemoveChildBtn();
            }
            childCount++;
            childTotal++;
            appendChildRow("#mainFamilyTableRow", childCount);
        });
        $("#mainFamilyForm").on("click", "#removeChildBtn", function () {
            $("#childRow" + childCount + "").remove();
            childCount--;
            childTotal--;
            if (childCount == 0) {
                $("#removeChildBtn").remove();
            }
        });

        function appendChildRow(mainFamilyTableRow, childCount) {
            var numRow = '<td><label class="control-label">Child#' + childCount + '</label></td>';
            var fullNameRow = '<td><input id="childFullName' + childCount + '" type="text" class="form-control" /></td>';
            var birthDateRow = '<td><input id="childBirthDate' + childCount + '" type="text" class="form-control" /></td>';
            var birthPlaceRow = '<td><input id="childBirthPlace' + childCount + '" type="text" class="form-control" /></td>';
            var genderRow = '<td><select id="childGender' + childCount + '" class="form-control"><option value="0">Male</option><option value="1">Female</option></select></td>';
            var jobRow = '<td><input id="childJob' + childCount + '" type="text" class="form-control" /></td>';
            $(mainFamilyTableRow).append('<tr id="childRow' + childCount + '">' + numRow + fullNameRow + birthDateRow + birthPlaceRow + genderRow + jobRow + '</tr>');
        }

        function addRemoveChildBtn() {
            $("#childBtn").append('<button id="removeChildBtn" type="button" class="btn btn-danger">Remove Child</button>');
        }

        $(this).on("focus", "[id^=childBirthDate]", function () {
            $("[id^=childBirthDate]").datepicker();
        });
    });


    //Append a new row for Sibling data on Biological Family Form
    var siblingTotal = 1;
    $("#biologicalFamilyForm").ready(function () {
        var siblingCount = 1;
        $("#addSiblingBtn").click(function () {
            if (siblingCount == 1) {
                addRemoveSiblingBtn();
            }
            siblingCount++;
            siblingTotal++;
            appendSiblingRow("#biologicalFamilyTableRow", siblingCount);
        });
        $("#biologicalFamilyForm").on("click", "#removeSiblingBtn", function () {
            $("#siblingRow" + siblingCount + "").remove();
            siblingCount--;
            siblingTotal--;
            if (siblingCount == 1) {
                $("#removeSiblingBtn").remove();
            }
        });

        function appendSiblingRow(biologicalFamilyTableRow, siblingCount) {
            var numRow = '<td><label class="control-label">Sibling#' + siblingCount + '</label></td>';
            var fullNameRow = '<td><input id="siblingFullName' + siblingCount + '" type="text" class="form-control" /></td>';
            var birthDateRow = '<td><input id="siblingBirthDate' + siblingCount + '" type="text" class="form-control" /></td>';
            var birthPlaceRow = '<td><input id="siblingBirthPlace' + siblingCount + '" type="text" class="form-control" /></td>';
            var genderRow = '<td><select id="siblingGender' + siblingCount + '" class="form-control"><option value="0">Male</option><option value="1">Female</option></select></td>';
            var jobRow = '<td><input id="siblingJob' + siblingCount + '" type="text" class="form-control" /></td>';
            var yourselfCheckBox = '<td><label class="control-label"><input id="siblingIsYourself' + siblingCount + '" type="checkbox" class="form-control"/>Yourself</label></td>'
            $(biologicalFamilyTableRow).append('<tr id="siblingRow' + siblingCount + '">' + numRow + fullNameRow + birthDateRow + birthPlaceRow + genderRow + jobRow + yourselfCheckBox + '</tr>');
        }

        function addRemoveSiblingBtn() {
            $("#siblingBtn").append('<button id="removeSiblingBtn" type="button" class="btn btn-danger">Remove Sibling</button>');
        }

        $(this).on("focus", "[id^=siblingBirthDate]", function () {
            $("[id^=siblingBirthDate]").datepicker();
        });
    });


    //Append a new row on Work Experience Form
    var workExpTotal = 0;
    $("#workExpForm").ready(function () {
        var workExpCount = 0;
        $("#addWorkExpBtn").click(function () {
            if (workExpCount == 0) {
                addRemoveWorkExpBtn();
            }
            if (workExpCount <= 4) {
                workExpCount++;
                workExpTotal++;
                $("#emptyWorkExpRow").hide();
                appendWorkExpRow("#workExpTableRow", workExpCount);
            }
            else {
                alert("Maximum Work Experience reached");
            }
        });
        $("#workExpForm").on("click", "#removeWorkExpBtn", function () {
            $("#workExpRow" + workExpCount + "").remove();
            workExpCount--;
            workExpTotal++;
            if (workExpCount == 0) {
                $("#removeWorkExpBtn").remove();
                $("#emptyWorkExpRow").show();
            }
        });

        function appendWorkExpRow(workExpTableRow, workExpCount) {
            var numRow = '<td><label class="control-label">' + workExpCount + '</label></td>';
            var companyRow = '<td><input id="workExpCompany' + workExpCount + '" type="text" class="form-control" /></td>';
            var positionRow = '<td><input id="workExpPosition' + workExpCount + '" type="text" class="form-control" /></td>';
            var expRow = '<td><input id="workExpExperience' + workExpCount + '" type="text" class="form-control" /></td>';
            var startYearRow = '<td><input id="workExpStartYear' + workExpCount + '" type="text" class="form-control" /></td>';
            var endYearRow = '<td><input id="workExpEndYear' + workExpCount + '" type="text" class="form-control" /></td>';
            $(workExpTableRow).append('<tr id="workExpRow' + workExpCount + '">' + numRow + companyRow + positionRow + expRow + startYearRow + endYearRow + '</tr>');
        }

        function addRemoveWorkExpBtn() {
            $("#workExpBtn").append('<button id="removeWorkExpBtn" type="button" class="btn btn-danger">Remove Working Experience</button>');
        }
    });


    //Append a new row on Academic Record Form
    $("#academicRecordForm").ready(function () {
        var academicLevel = ["Elementary", "Junior High", "Senior High", "S1", "S2"];
        var academicLevelFlag = -1;
        $("#addAcademicLevelBtn").click(function () {
            if (academicLevelFlag == -1) {
                addRemoveLevelBtn();
            }
            if ((academicLevelFlag + 1) <= (academicLevel.length - 1)) {
                academicLevelFlag++;
                $("#emptyAcademicRow").hide();
                appendAcademicLevelRow();
            }
            else {
                alert("Maximum Academic Level Data reached");
            }
        });

        $("#academicRecordForm").on("click", "#removeAcademicLevelBtn", function () {
            $("#academicLevel" + academicLevel[academicLevelFlag].replace(" ", "") + "").remove();
            academicLevelFlag--;
            if (academicLevelFlag == -1) {
                $("#removeAcademicLevelBtn").remove();
                $("#emptyAcademicRow").show();
            }
        });

        function appendAcademicLevelRow() {
            var levelRow = '<td><label class="control-label">' + academicLevel[academicLevelFlag] + '</label></td>';
            var schoolNameRow = '<td><input type="text" class="form-control" /></td>';
            var startYearRow = '<td><input type="text" class="form-control" /></td>';
            var endYearRow = '<td><input type="text" class="form-control" /></td>';
            var achievementRow = '<td><input type="text" class="form-control" /></td>';
            $("#academicLevelTableRow").append('<tr id="academicLevel' + academicLevel[academicLevelFlag].replace(" ", "") + '">' + levelRow + schoolNameRow + startYearRow + endYearRow + achievementRow + '</tr>');
        }

        function addRemoveLevelBtn() {
            $("#academicLevelBtn").append('<button id="removeAcademicLevelBtn" type="button" class="btn btn-danger">Remove Academic Record</button>');
        }
    });


    //Append a new row on Training Record Form
    var trainingTotal = 0;
    $("#trainingRecordForm").ready(function () {
        var trainingCount = 0;
        $("#addTrainingBtn").click(function () {
            if (trainingCount == 0) {
                addRemoveTrainingBtn();
            }
            if (trainingCount <= 4) {
                trainingCount++;
                trainingTotal++;
                $("#emptyTrainingRow").hide();
                appendTrainingRow("#trainingTableRow", trainingCount);
            }
            else {
                alert("Maximum Training Data reached");
            }
        });
        $("#trainingRecordForm").on("click", "#removeTrainingBtn", function () {
            $("#trainingRow" + trainingCount + "").remove();
            trainingCount--;
            trainingTotal--;
            if (trainingCount == 0) {
                $("#removeTrainingBtn").remove();
                $("#emptyTrainingRow").show();
            }
        });

        function appendTrainingRow(trainingTableRow, trainingCount) {
            var trainingNumRow = '<td><label class="control-label">' + trainingCount + '</label></td>';
            var trainingNameRow = '<td><input id="trainingName' + trainingCount + '" type="text" class="form-control" /></td>';
            var trainingProviderRow = '<td><input id="trainingProvider' + trainingCount + '" type="text" class="form-control" /></td>';
            var trainingPlaceRow = '<td><input id="trainingPlace' + trainingCount + '" type="text" class="form-control" /></td>';
            var trainingYearRow = '<td><input id="trainingYear' + trainingCount + '" type="text" class="form-control" /></td>';
            $(trainingTableRow).append('<tr id="trainingRow' + trainingCount + '">' + trainingNumRow + trainingNameRow + trainingProviderRow + trainingPlaceRow + trainingYearRow + '</tr>');
        }

        function addRemoveTrainingBtn() {
            $("#trainingBtn").append('<button id="removeTrainingBtn" type="button" class="btn btn-danger">Remove Training Certificate</button>');
        }
    });

    

    function gatherChild() {
        var i = 0;
        var childList = [];
        do {
            childList.push({
                FullName: $('input[id="childFullName' + (i + 1) + '"]').val(),
                Gender: $('select[id="childGender' + (i + 1) + '"]').val(),
                BirthPlace: $('input[id="childBirthPlace' + (i + 1) + '"]').val(),
                BirthDate: $('input[id="childBirthDate' + (i + 1) + '"]').val(),
                Job: $('input[id="childJob' + (i + 1) + '"]').val()
            });
            i++;
        } while (i < childTotal);
        return childList;
    }

    function gatherSibling() {
        var i = 0;
        var siblingList = [];
        do {
            siblingList.push({
                FullName: $('input[id="siblingFullName' + (i + 1) + '"]').val(),
                Gender: $('select[id="siblingGender' + (i + 1) + '"]').val(),
                BirthPlace: $('input[id="siblingBirthPlace' + (i + 1) + '"]').val(),
                BirthDate: $('input[id="siblingBirthDate' + (i + 1) + '"]').val(),
                Job: $('input[id="siblingJob' + (i + 1) + '"]').val()
            });
            i++;
        } while (i < siblingTotal);
        return siblingList;
    }

    function gatherWorkExp() {
        var i = 0;
        var workExpList = [];
        do {
            workExpList.push({
                CompanyName: $('input[id="workExpCompany' + (i + 1) + '"]').val(),
                Position: $('input[id="workExpPosition' + (i + 1) + '"]').val(),
                Experience: $('input[id="workExpExperience' + (i + 1) + '"]').val(),
                StartYear: $('input[id="workExpStartYear' + (i + 1) + '"]').val(),
                EndYear: $('input[id="workExpEndYear' + (i + 1) + '"]').val()
            });
            i++;
        } while (i < workExpTotal);
        return workExpList;
    }

    function gatherAcademic() {
        var i = 0;
        var academicList = [];
        do {
            academicList.push({
                Level: $('input[id="trainingName' + (i + 1) + '"]').val(),
                Provider: $('input[id="trainingProvider' + (i + 1) + '"]').val(),
                Place: $('input[id="trainingPlace' + (i + 1) + '"]').val(),
                Year: $('input[id="trainingYear' + (i + 1) + '"]').val()
            });
            i++;
        } while (i < trainingTotal);
        return trainingList;
    }

    function gatherTraining() {
        var i = 0;
        var trainingList = [];
        do {
            trainingList.push({
                Name: $('input[id="trainingName' + (i + 1) + '"]').val(),
                Provider: $('input[id="trainingProvider' + (i + 1) + '"]').val(),
                Place: $('input[id="trainingPlace' + (i + 1) + '"]').val(),
                Year: $('input[id="trainingYear' + (i + 1) + '"]').val()
            });
            i++;
        } while (i < trainingTotal);
        return trainingList;
    }

    function gatherJsonStringModel() {
        var jsonStringModel = {};
        jsonStringModel = {
            ChildList: gatherChild(),
            SiblingList: gatherSibling(),
            WorkExpList: gatherWorkExp(),
            TrainingList: gatherTraining()
        }
        return jsonStringModel;
    }

    $(this).on("submit", "#employeeMasterDataForm", function (e) {
        var jsonStringModel = gatherJsonStringModel()

        var jsonString = JSON.stringify(jsonStringModel);
        alert(jsonString);
        if (jsonStringModel == null) {
            e.preventDefault();
        }
        $("#employeeMasterDataForm").append('<input id="jsonStringModel" name="jsonStringModel" type="hidden"/>');
        $("#jsonStringModel").val(jsonString);
    });
});