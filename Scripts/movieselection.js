$(document).ready(function () {

    var patientRecords = [{
        'RecordDate' : '22/09/2017',
        'Title':'Ultra Sound Scan - Lung',
        'File':'UltraSound_scan.gif'
    },
    {
        'RecordDate' : '27/08/2017',
        'Title':'Ultra Sound Scan - Lung',
        'File':'UltraSound_scan.gif'
    },
    {
        'RecordDate' : '15/07/2017',
        'Title':'Ultra Sound Scan - Lung',
        'File':'UltraSound_scan.gif'
    },{
        'RecordDate' : '02/07/2017',
        'Title':'Ultra Sound Scan - Lung',
        'File':'UltraSound_scan.gif'
    }
    ,{
        'RecordDate' : '22/06/2017',
        'Title':'Ultra Sound Scan - Lung',
        'File':'UltraSound_scan.gif'
    }]

    var patientPresRecords = [{
        'RecordDate' : '22/09/2017',
        'Name':'Dr John Doe - ENT Specialist',
        'Desg':'Doctor',
        'Action':'Approved'
    },
    {
        'RecordDate' : '21/08/2017',
        'Name':'Dr Shery John - Pediatrician',
        'Desg':'Doctor',
        'Action':'<input type="button" class="btn btn-primary btn-xs btnPatienApp"  value="Approve" />'
    },
    {
        'RecordDate' : '12/07/2017',
        'Name':'M. L. Sharma',
        'Desg':'Pharmacist',
        'Action':'Approved'
    },{
         'RecordDate' : '01/7/2017',
        'Name':'H. S. Saini',
        'Desg':'Pharmacist',
        'Action':'<input type="button" class="btn btn-primary btn-xs btnPatienApp" value="Approve" />'
    }
    ,{
        'RecordDate' : '22/06/2017',
        'Name':'Dr Manushi Chillar',
        'Desg':'Doctor',
        'Action':'Approved'
    }]

    var doctorPrescriptions = [{
        'Name':'Dilip Sejwani',
        'PatientId':45634,
        'Phone':9654789665,
        'Gender':'Male',
        'Action':'<a>View</a>'

    },
    {
        'Name':'Lakhan Sejwani',
        'PatientId':45934,
        'Phone':9654789698,
        'Gender':'Male',
        'Action':'<input type="button" class="btn btn-primary btn-xs btnDocApp" value="Request" />'

    },{
        'Name':'satendar Saini',
        'PatientId':45694,
        'Phone':9654789698,
        'Gender':'Male',
        'Action':'<a>View</a>'

    },{
        'Name':'Ashish Baghel',
        'PatientId':45630,
        'Phone':9654789998,
        'Gender':'Male',
        'Action':'<input type="button" class="btn btn-primary btn-xs btnDocApp" value="Request" />'

    }]

    $(".main").click(function(e) {
        if($(event.target).hasClass("btnPatient") || $(event.target).hasClass("PatientHeaderRec"))
        {
            $(".home").addClass("hiddenclass");
            $(".PatientPage").removeClass("hiddenclass");
            $(".PatientActualBody").empty();
            $(".PatientPageBody").removeClass("hiddenclass")
            $(".PatientPrefPageBody").addClass("hiddenclass");
            $(".PatientHeaderRec").addClass("selectedTab");
            $(".PatientHeaderPres").removeClass("selectedTab");
            PatientPage();
        }
        else if($(event.target).hasClass("PatientHeaderPres"))
        {
            $(".PatientPageBody").addClass("hiddenclass");
            $(".PatientPresActualBody").empty();
            $(".PatientPrefPageBody").removeClass("hiddenclass");
            $(".PatientHeaderRec").removeClass("selectedTab");
            $(".PatientHeaderPres").addClass("selectedTab");
            PatientPresPage();
        }
        else if($(event.target).hasClass("btnDoctor"))
        {
            $(".home").addClass("hiddenclass");
            $(".DocPresActualBody").empty();
            $(".DoctorPage").removeClass("hiddenclass");
            DoctorPresPage();
        }
        else if($(event.target).hasClass("btnPharma"))
        {
            $(".home").addClass("hiddenclass");
            $(".PharmaPresActualBody").empty();
            $(".PharmaPage").removeClass("hiddenclass");
            PharmaPresPage();
        }
        else if($(event.target).hasClass("homeBtn")){
            $(".home").removeClass("hiddenclass");
            $(".PatientPage").addClass("hiddenclass");
            $(".DoctorPage").addClass("hiddenclass");
            $(".PharmaPage").addClass("hiddenclass");
        }
        else if($(event.target).hasClass("btnPatienApp")) {
            $(event.target).parent().html("Approved");

        }
        else if($(event.target).hasClass("btnDocApp")) {
            $(event.target).parent().html("<a>View</a>");

        }

        

    });


    function PatientPage() {
        for(var i = 0;i < patientRecords.length;i++) {
            $(".PatientActualBody").append("<div class=\"row\"><div class=\"dateRec\">"  +  patientRecords[i].RecordDate +  "</div><div class=\"titleRec\">" + patientRecords[i].Title +  "</div><div class=\"fileRec\" >" + patientRecords[i].File + "</div></div>")
        }
    }

    function PatientPresPage() {
        for(var i = 0;i < patientPresRecords.length;i++) {
            $(".PatientPresActualBody").append("<div class=\"row\"><div class=\"datePresRec\">"  +  patientPresRecords[i].RecordDate +  "</div><div class=\"titlePresRec\">" + patientPresRecords[i].Name +  "</div><div class=\"desgPresRec\" >" + patientPresRecords[i].Desg + "</div><div class=\"filePresRec\">Attached Files</div><div class=\"actionPresRec\">" + patientPresRecords[i].Action + "</div></div>")
        }

    }

    function DoctorPresPage() {
        for(var i = 0;i < doctorPrescriptions.length;i++) {
            $(".DocPresActualBody").append("<div class=\"row\"><div class=\"docNameRec\">"  +  doctorPrescriptions[i].Name +  "</div><div class=\"docPatientRec\">" + doctorPrescriptions[i].PatientId +  "</div><div class=\"dovPhRec\" >" + doctorPrescriptions[i].Phone + "</div><div class=\"docGenderRec\">" + doctorPrescriptions[i].Gender + "</div><div class=\"docActionRec\">" + doctorPrescriptions[i].Action + "</div></div>")
        }

    }

    function PharmaPresPage() {
        for(var i = 0;i < doctorPrescriptions.length;i++) {
            $(".PharmaPresActualBody").append("<div class=\"row\"><div class=\"docNameRec\">"  +  doctorPrescriptions[i].Name +  "</div><div class=\"docPatientRec\">" + doctorPrescriptions[i].PatientId +  "</div><div class=\"dovPhRec\" >" + doctorPrescriptions[i].Phone + "</div><div class=\"docGenderRec\">" + doctorPrescriptions[i].Gender + "</div><div class=\"docActionRec\">" + doctorPrescriptions[i].Action + "</div></div>")
        }

    }

    var table = $("#tblseatMap")[0];
    for (var i = 0; i < 7; i++) {
        var row = table.insertRow(-1);
        for (var j = 0; j < 16; j++) {
            var cell = row.insertCell(-1)
            cell.innerHTML = "<div class=\"selectTicket\"></div>";
        }
    }

    if ($(".reservationRowClass").length > 0) {
        $(".noReservation").css({ "display": "none" });
    }
    else {
        $("#tblSeatSelected").css({ "display": "none" });
    }

    var variable = 'A'
    var tableColumn = $("#tblColumn")[0];
    for (var i = 0; i < 7; i++) {
        var row = tableColumn.insertRow(-1);
        var cell = row.insertCell(-1)
        if (i == 0) {
            cell.innerHTML = "<div class=\"selectRow\">" + variable + "</div>";
        }
        else {
            cell.innerHTML = "<div class=\"selectRow\">" + nextChar(variable) + "</div>";
            variable = nextChar(variable);
        }
    }

    var tableRow = $("#tblRow")[0];
    var row = tableRow.insertRow(-1);
    for (var i = 1; i < 17; i++) {
        var cell = row.insertCell(-1)
        cell.innerHTML = "<div class=\"selectColumn\">" + i + "</div>"; ;
    }

    $(".selectTicket").click(function (e) {
        $(".seatsValidation").css({ "display": "none" });
        if (e.target.className === "selectTicket") {
            if ($(".selectedTicket").length === parseInt($("#txtNumberSeats").val())) {
                $('.selectedTicket[selected]').removeClass("selectedTicket");
                $('div[selected]').addClass("selectTicket").removeAttr("selected");
                $(e.target).removeClass("selectTicket");
                $(e.target).addClass("selectedTicket").attr('selected', true);
            }
            else {
                $(e.target).removeClass("selectTicket");
                $(e.target).addClass("selectedTicket").attr('selected', true);
            }
        }
        else if (e.target.className === "selectedTicket") {
            $(e.target).removeClass("selectedTicket").removeAttr("selected");
            $(e.target).addClass("selectTicket");
        }

        if ($('.selectedTicket[selected]').length > 0) {
            var length = $('.selectedTicket[selected]').length;
            var seatNumber = "";
            for (var i = 0; i < length; i++) {
                seatNumber = seatNumber + "," + getCHar($('.selectedTicket[selected]')[i].parentNode.parentNode.rowIndex) + ($('.selectedTicket[selected]')[i].parentNode.cellIndex + 1)
            }
            seatNumber = seatNumber.replace(",", "");
            $(".seatSelectedIndicator").css({ "display": "" });
            $(".seatSelectedIndicator").html("Seats Selected : " + seatNumber);
        }

    })

    $("#txtNumberSeats").spinner(
    { max: 5,
        min: 0,
        stop: function (event, ui) {
            if (parseInt($("#txtNumberSeats").val()) > 0) {
                $("#seatsValidDIv").css({ 'display': 'none' });
            }
        }
    }).on('input', function () {
        if ($(this).data('onInputPrevented')) return;
        var val = this.value,
             $this = $(this),
             max = $this.spinner('option', 'max'),
             min = $this.spinner('option', 'min');
        if (!val.match(/^\d+$/)) val = min; //we want only number, no alpha
        this.value = val > max ? max : val < min ? min : val;
    }).on('keydown', function (e) { // to allow 'Backspace' key behaviour
        $(this).data('onInputPrevented', e.which === 8 ? true : false);
    });
    $("#txtNumberSeats").spinner("value", 0);


    $("#btnSelectionStart").click(function (e) {
        var flag = false;
        if ($("#txtUserName").val() == "") {
            flag = true;
            $("#NameValidDIv").css({ 'display': '' });
            $("#NameValidDIv").qtip({
                content: 'Please enter Name.',
                position: { my: 'top right', at: 'bottom center', target: $("#NameValidDIv") },
                show: 'mouseover', hide: 'mouseout',
                style: {
                    classes: 'qtip-light'
                }
            });
        }
        if ($("#txtNumberSeats").val() == 0) {
            flag = true;
            $("#seatsValidDIv").css({ 'display': '' });
            $("#seatsValidDIv").qtip({
                content: 'Please select at least one seat.',
                position: { my: 'top right', at: 'bottom center', target: $("#seatsValidDIv") },
                show: 'mouseover', hide: 'mouseout',
                style: {
                    classes: 'qtip-light'
                }
            })
        }
        if (!flag)
            $("#divSeatSelection").removeClass("opacitySeats")
    });

    $("#txtUserName").keyup(function () {
        if ($("#txtUserName").val().length > 0) {
            $("#NameValidDIv").css({ 'display': 'none' });
        }
    })

    $("#txtNumberSeats").keyup(function () {
        if ($("#txtNumberSeats").val().length > 0) {
            $("#seatsValidDIv").css({ 'display': 'none' });
        }
    })

    $("#btnConfirm").click(function () {

        var table = $("#tblSeatSelected")[0];
        var length = $('.selectedTicket[selected]').length;
        if (parseInt($("#txtNumberSeats").val()) === length) {
            var seatNumber = "";
            for (var i = 0; i < length; i++) {
                seatNumber = seatNumber + "," + getCHar($('.selectedTicket[selected]')[i].parentNode.parentNode.rowIndex) + ($('.selectedTicket[selected]')[i].parentNode.cellIndex + 1)
            }
            seatNumber = seatNumber.replace(",", "");
            var row = table.insertRow(-1);
            row.className = "reservationRowClass";
            var cell = row.insertCell(-1);
            cell.innerHTML = $("#txtUserName").val();
            cell = row.insertCell(-1);
            cell.innerHTML = $("#txtNumberSeats").val();
            cell = row.insertCell(-1);
            cell.innerHTML = seatNumber;

            $('.selectedTicket[selected]').removeClass("selectedTicket");
            $('div[selected]').addClass("alreadyselectedTicket").attr("alreadySelected", true).removeAttr("selected");

            $("#txtUserName").val("");
            $("#txtNumberSeats").val("");
            $("#divSeatSelection").addClass("opacitySeats")

            $(".noReservation").css({ "display": "none" });
            $("#tblSeatSelected").css({ "display": "" });
            $(".seatSelectedIndicator").css({ "display": "none" });
        }
        else {
            $("#seatsValidDIv").css({ 'display': '' });
            $("#seatsValidDIv").qtip({
                content: 'Please select exactly ' + $("#txtNumberSeats").val() + " seat(s). ",
                position: { my: 'top right', at: 'bottom center', target: $("#seatsValidDIv") },
                show: 'mouseover', hide: 'mouseout',
                style: {
                    classes: 'qtip-light'
                }
            })
        }

    });

})

function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}


function getCHar(value) {
    return String.fromCharCode(65 + value);
}