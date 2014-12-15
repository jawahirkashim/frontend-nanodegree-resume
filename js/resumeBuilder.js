var bio= {
	"name":"Jawahir Kashim",
	"role":"Senior Software Developer",
	"contacts":{
		"mobile":"07795735716",
		"email":"jawahir.abul2007@gmail.com",
		"github":"jawahir",
		"twitter":"@jawhair",
		"location":"Bangalore"
	},
	"welcomeMessage":"lorem ipsum dlolor sit amet etc etc etc.",
	"skills":["Java, C, HTML and ABAP","MySQL, Oracle","Eclipse,SAP NetWeaver","SAP-CRM"],
	"bioPic": "images/kashim.jpg"
}

if(bio.name.length>0)
{
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLcontactGeneric.replace("%contact%","Contacts");
	var formattedContacts = formattedMobile.replace("%data%","Data");
	$("#topContacts").append(formattedContacts);

	var formattedKey = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#topContacts").append(formattedKey);
	formattedKey = HTMLemail.replace("%data%",bio.contacts.email);
	$("#topContacts").append(formattedKey);
	formattedKey = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#topContacts").append(formattedKey);
	formattedKey = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	$("#topContacts").append(formattedKey);
	formattedKey = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts").append(formattedKey);

	formattedKey = HTMLbioPic.replace("%data%",bio.bioPic);
	$("#header").append(formattedKey);
	
	
}

if (bio.skills.length >0) 
{
	$("#header").append(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);

};
var education ={
	"schools":[
	{
		"name":"KV Panchgram",
		"city":"Panchgram",
		"degree":"12th",
		"majors":["PCM"],
		"url":"http://example.com"
	},
	{
		"name":"NIT Silchar",
		"city":"Silchar",
		"degree":"BTech",
		"majors":["ECE"],
		"url":"http://example.com"
	}
	],
	"onlineCourses":[
	{
		"title":"JavaScript Crash Course",
		"school":"Udacity",
		"dates":2014,
		"url":"http://www.udacity.com/course/ud804"
	}
	]

}


var work = {
	"jobs":[
	{
		"employer":"TCS",
		"title":"System Engineer",
		"location":"White Field",
		"dates":"January 2012-May 2014",
		"description":"Design High level and Low level diagram of the Telecom Store Inventory.Implemented the Administration module of Telecom Store Inventory following MVC architecture.The user interface is build in JSP, HTML, CSS and is interlinked to Controller and DOA classes using Java.Implemented Servlet for the controller logic.To establish connection with Oracle Data Base, JDBC components is implemented.The details of all the products in the Store Inventory are also generated in Excel's and PDF's.",
	},
	{
		"employer":"Samsung",
		"title":"Senior Software Developer",
		"location":"Dodanakundi",
		"dates":"June 2014---Present",
		"description":"Design High level and Low level diagram of the Telecom Store Inventory.Implemented the Administration module of Telecom Store Inventory following MVC architecture.The user interface is build in JSP, HTML, CSS and is interlinked to Controller and DOA classes using Java.Implemented Servlet for the controller logic.To establish connection with Oracle Data Base, JDBC components is implemented.The details of all the products in the Store Inventory are also generated in Excel's and PDF's.",
	}
	]

}

function displayWork()
{
	for(job in work.jobs)
	{
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedTitle = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedTitle);
	}
}

displayWork();

//////////////////////
//not working
//////////////////////
$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});
////////////////////////////////////////
//working
//////////////

function locationizer(work_obj){
	var locationArray =[];

	for(job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}
console.log(locationizer(work));
//////////////////////////////////////////////////

function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);
inName("Sebastian Laskar");

/////////////////////////////////////////////////////
//lo0p
var jawarhi ={};
jawarhi.job="Developer";

var makeCourse = function(){
	//make a course
	console.log("Made a course");
}

var courses = 0;
while(jawarhi.job ==="Developer")
{
	makeCourse();
	courses = courses+1;
	if(courses===10)
	{
		jawarhi.job ="Learning Specialist";
	}
}
console.log(jawarhi.job);

/////////////////////////////////////////
var projects = {
"projects":[
	{
		"title":"Sample Project 1",
		"dates":"2014",
		"description":"Design High level and Low level diagram of the Telecom Store Inventory.Implemented the Administration module of Telecom Store Inventory following MVC architecture.The user interface is build in JSP, HTML, CSS and is interlinked to Controller and DOA classes using Java.Implemented Servlet for the controller logic.To establish connection with Oracle Data Base, JDBC components is implemented.The details of all the products in the Store Inventory are also generated in Excel's and PDF's. ",
		"images":["images/convo.jpg","images/fry.jpg"]
	}
	
]
}



projects.display = function(){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length>0){
			for(image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}

	}

}

projects.display();
/////////////////////////////////////////
$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);


///////////////////////////////////////
//projects.display();



















