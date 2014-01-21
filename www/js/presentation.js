function enableFormButtons() {
    if (localStorage.projDir != undefined) {
        global.jQuery("#createProject").prop("disabled", false);
        //global.jQuery("#openProject").prop("disabled", false);
        global.jQuery("#isServerStarted").prop("disabled", false);
    }    
}

function disableFormButtons() {
    global.jQuery("#createProject").prop("disabled", true);
    //global.jQuery("#openProject").prop("disabled", true); 
    global.jQuery("#isServerStarted").prop("disabled", true);  
}

function setButtonLabels() {
    global.jQuery("#createProject").html("create project");
    global.jQuery("#openProject").html("open project");    
    global.jQuery("#settings").html("settings");
}

function initGUI() {
    setButtonLabels();
    disableFormButtons();    
    global.jQuery("#projectDirectoryHolder").hide();
    hideOverlays();
}

function hideOverlays() {
    global.jQuery("#overlay-bg").hide();
    initAlertOverlay();
    initSettingsOverlay();
}

function initAlertOverlay() {
    global.jQuery("#alertOk").html("ok");
    global.jQuery("#alertOverlay").hide();
}

function alertOverlay(message) {
    global.jQuery("#alertContent").text(message);
    global.jQuery("#alertOverlay").show();
    global.jQuery("#overlay-bg").show();
}

function initSettingsOverlay() {
    global.jQuery("#settingsCancel").html("cancel");
    global.jQuery("#settingsSave").html("save");
    global.jQuery("#settingsOverlay").hide();

	global.jQuery("#ipAddress").val(localStorage.ipAddress);
	global.jQuery("#portNumber").val(localStorage.portNumber);
}

function settingsOverlay() {
    global.jQuery("#settingsOverlay").show();
    global.jQuery("#overlay-bg").show();
}

function validateIPaddress(ipaddress) {  
    var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;   
    if(ipaddress.match(ipformat)) {
        return true;
    } else {
        return false;
    }     
}  

function initSessionData() {
	if (localStorage.projDir != undefined) {                      
        console.log("localStorage.projDir: " + localStorage.projDir);
        enableFormButtons();
        global.jQuery("#currentProjectDir").text("Current project directory: " + localStorage.projDir);
    }

	if (localStorage.ipAddress == undefined) {
		localStorage.ipAddress = "127.0.0.1";
		global.jQuery("#ipAddress").val(localStorage.ipAddress);
	}
	
	if (localStorage.portNumber == undefined) {
		localStorage.portNumber = "1337";
		global.jQuery("#portNumber").val(localStorage.portNumber);
	}

}
