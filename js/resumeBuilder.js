var bio = {
	"name": "Rasha Khatib",
	"role": "Web Developer",
	"contacts": {
		"mobile": "650-537-5453",
		"email": "rasharasem@gmail.com",
		"github": "RashaHussein",
		"twitter": "RashaRasem",
		"location": "Mountain View, CA"
	},
	"welcomeMessage": "Let's Build Stuff",
	"skills": ["Being Awesome", "Building Websites", "Writing great Javascript code", "Public Speaking", "Blogging", "Winning hackathons!"],
	"biopic": "images/rasha.jpg",
	"display": function(){
		var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
		var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);

		var formattedMobile = HTMLmobile.replace("%data%", bio["contacts"]["mobile"]);
		var formattedEmail = HTMLemail.replace("%data%", bio["contacts"]["email"]);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio["contacts"]["twitter"]);
		var formattedGithub = HTMLgithub.replace("%data%", bio["contacts"]["github"]);
		var formattedLocation = HTMLlocation.replace("%data%", bio["contacts"]["location"]);

		var formattedPic = HTMLbioPic.replace("%data%", bio["biopic"]);
		var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio["welcomeMessage"]);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedLocation);

		$("#header").append(formattedPic);
		$("#header").append(formattedMessage);

		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (var i = 0; i < bio["skills"].length; i++) {
				var formattedSkill = HTMLskills.replace("%data%", bio["skills"][i]);
				$("#skills").append(formattedSkill);
			}
		}

		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedLocation);
	}
};

var work = {
	"jobs": [
		{
			"employer": "Manshar",
			"title": "Web Developer",
			"location": "Mountain View",
			"dates": "2014 - now",
			"description": "Build the UI of the main page of Manshar blogging platform"
		},
		{
			"employer": "GirlDev",
			"title": "Web Developer",
			"location": "San Francisco",
			"dates": "2015 - now",
			"description": "Build a mentor mentee matching platform for girls in tech."
		}
	],
	"display": function(){
		var jobs = work.jobs;
		for (var i = 0; i < jobs.length; ++i) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", jobs[i]["employer"]);
			var formattedTitle = HTMLworkTitle.replace("%data%", jobs[i]["title"]);
			var formatterdEmployerTitle = formattedEmployer + formattedTitle;
			var formattedDates = HTMLworkDates.replace("%data%", jobs[i]["dates"]);
			var formattedWorkLoc = HTMLworkLocation.replace("%data%", jobs[i]["location"]);
			var formattedDesc = HTMLworkDescription.replace("%data%", jobs[i]["description"]);

			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(formatterdEmployerTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedWorkLoc);
			$(".work-entry:last").append(formattedDesc);
		}
	}
};

var projects = {
	"projects": [
		{
			"title": "Coin Run",
			"dates": "2011",
			"description": "Augmented reality game built on top of Google Maps and the character moves with teh player walking and running in the real world",
			"images": ["images/coinrun.png"]
		},
		{
			"title": "GirlDev",
			"dates": "2015",
			"description": "Mentor Mentee matchmaking site",
			"images": ["images/girldev.png"]
		},
		{
			"title": "Manshar",
			"dates": "2014",
			"description": "Blogging Platform in Arabic",
			"images": ["images/manshar.png"]
		}
	],
	display: function(){
		var projects = this.projects;
		for(var i = 0; i < projects.length; ++i) {
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects[i]["title"]);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects[i]["dates"]);
			var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects[i]["description"]);
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDesc);

			// Append images of each project
			var images = projects[i]["images"];
			for (var j = 0; j < images.length; ++j) {
				var formattedProjectImg = HTMLprojectImage.replace("%data%", images[j]);
				$(".project-entry:last").append(formattedProjectImg);
			}
		}
	}
};

var education = {
	"schools":[
		{
			"name": "Birzeit University",
			"location": "Ramallah, Palestine",
			"degree": "Bachelor Degree",
			"majors": ["Computer Systems Engineering"],
			"dates": "2007-2013",
			"url": "http://birzeit.edu/"
		}
	],
	"onlineCourses": [
		{
			"title": "Web Development",
			"school": "Udacity",
			"date": 2013,
			"url": "https://goo.gl/q94wza"
		}
	],
	"display": function(){
		var schools = education["schools"];
		var courses = education["onlineCourses"];
		for(var i = 0; i < schools.length; ++i) {
			var formattedSchoolName = HTMLschoolName.replace("%data%", schools[i]["name"]);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", schools[i]["degree"]);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", schools[i]["dates"]);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", schools[i]["location"]);
			for (var j = 0; j < schools[i]["majors"].length; ++j) {
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", schools[i]["majors"][i]);
			}
		}

		for(var k = 0; k < courses.length; ++k) {
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", courses[k]["title"]);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", courses[k]["school"]);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", courses[k]["date"]);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", courses[k]["url"]);

			$("#education").append(HTMLschoolStart);
			$(".education-entry").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry").append(formattedSchoolDates);
			$(".education-entry").append(formattedSchoolLocation);
			$(".education-entry").append(formattedSchoolMajor);

			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
			$(".education-entry:last").append(formattedOnlineDates);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
};

var resume = {
	"addMap": function() {
		$("#mapDiv").append(googleMap);
	},
	"logClickLocation": function() {
		// Log clicks quiz
		$(document).click(function(loc){
			var x = loc.pageX;
			var y = loc.pageY;

			logClicks(x, y);
		});
	},
	"displayResume": function() {
		bio.display();
		work.display();
		projects.display();
		education.display();
		this.addMap();
		this.logClickLocation();
	}
};

resume.displayResume();
