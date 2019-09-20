
//Work JSON 
var work = {
	"jobs":[
		{
			"employer": "ACAI, LLC",
			"title": "Data Scientist Intern",
			"location": "Willimantic, CT",
			"dates": "JUN 2018 - JUN 2019",
			"description": "Created MapReduce scripts and Hive queries to spot user request patterns from log data; Developed an interactive map visualization app using Tableau; Increased marking spped by deploying a GUI web App for marking vechicles information and the bounding box of images and using a trained CNN model to give suggestions of vehicle's information"
		},
		{
			"employer": "University of Connecticut",
			"title": "Graduate Research Assistant",
			"location": "Hartford, CT",
			"dates": "JAN 2018 - MAY 2018",
			"description": "Provide one-on-one and in-classroom instructional technology support to faculty and staff members to create and strengthen online learning opportunities for CSE students; assist the Academic Computing department in the development of Blackboard, Moodle and ePortfolio instructor training materials and workshops. Work collaboratively with the Institutional Advancement, Academic Affairs and IT departments on web design/redesign projects; develop and provide technical support for interactive web applications by utilizing various programming languages including Velocity, HTML, CSS and Javascript; use the dotCMS content management system to maintain the website of the four academic areas under the Academic Affairs department; Use InDesign, Photoshop. Illustrator, Publisher and Acrobat to design and publish online documents including postcards, flyers, brochures, web banners and email invitations"
		},
		{
			"employer": "Hebei Weitian Co. Ltd.",
			"title": "Financial Assistant",
			"location": "Shijiazhuang, Hebei",
			"dates": "Aug 2015 - Aug 2016",
			"description": "Responsible for the cost accounting of the company, and use Excel to produce company profit statements, collect and collate financial data, conduct financial analysis, and report to superiors; Using R and Shiny to visualize and analysis sales data"
		}

	]

};
// Display work json info
work.display = function(){
	
	for (var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs[job]["title"]))
								.append(HTMLworkEmployer.replace("%data%", work.jobs[job]["employer"]))
								.append(HTMLworkLocation.replace("%data%", work.jobs[job]["location"]))
								.append(HTMLworkDates.replace("%data%", work.jobs[job]["dates"]))
								.append(HTMLworkDescription.replace("%data%", work.jobs[job]["description"]));
	}
		
}
// Projects JSON
var projects = {
	"projects": [
		{
			"title": "Yelp Business Analysis",
			"date worked": "Jan 2018 - May 2018",
			"description": "Neighborhood Map project for Udacity Front-end Web Development Nanodegree",
			"image": "http://lei-clearsky.github.io/images/1.jpg",
			"github": "https://github.com/lei-clearsky/neighborhood-map-seperate-model",
			"demo": "http://lei-clearsky.github.io/neighborhood-map-seperate-model/",
			"progress": 100
		},
		{
			"title": "Arcade Game",
			"date worked": "Nov, 2014",
			"description": "Classic arcade game clone project for Udacity Front-end Web Development Nanodegree",
			"image": "http://lei-clearsky.github.io/images/1.jpg",
			"github": "https://github.com/lei-clearsky/p3-arcade-game",
			"demo": "http://lei-clearsky.github.io/p3-arcade-game/",
			"progress": 100
		},
		{
			"title": "Resume",
			"date worked": "Oct, 2014",
			"description": "Resume project for Udacity Front-end Web Development Nanodegree",
			"image": "http://lei-clearsky.github.io/images/1.jpg",
			"github": "https://github.com/lei-clearsky/nanodegree-fewd-p2",
			"demo": "http://lei-clearsky.github.io/nanodegree-fewd-p2/",
			"progress": 100
		},
		{
			"title": "Lazy Recipe",
			"date worked": "Oct, 2013 - Dec, 2013",
			"description": "My first Rails project. Search recipes by ingredients, ingredients are sorted from the least to the most.",
			"image": "http://lei-clearsky.github.io/images/2.jpg",
			"github": "https://github.com/lei-clearsky/search-recipes-app",
			"demo": "http://powerful-wildwood-2510.herokuapp.com/",
			"progress": 100
		},
		{
			"title": "Mu Theta At Large",
			"date worked": "Jul, 2014 - Aug, 2014",
			"description": "My first WordPress project. Redesigned a new resonsive WordPress theme and converted a flash based site",
			"image": "http://lei-clearsky.github.io/images/3.jpg",
			"github": "https://github.com/lei-clearsky/muthetaatlarge/tree/master/wp-content/themes/mtal",
			"demo": "http://muthetaatlarge.org/",
			"progress": 100
		},
		{
			"title": "FIFA Matches",
			"date worked": "Sept, 2014 - Oct, 2014",
			"description": "A drag and drop FIFA soccer game. Drag and drop the coutry icons and output and retrive result through a generated json object.",
			"image": "http://lei-clearsky.github.io/images/4.jpg",
			"github": "https://github.com/lei-clearsky/WWC-project-fifa",
			"progress": 100
		},
		{
			"title": "WordPress Twitter Plugin",
			"date worked": "Aug, 2014 - Sept, 2014",
			"description": "A WordPress twitter plugin. Users can input Authentication keys to display their tweets from twitter.",
			"image": "http://lei-clearsky.github.io/images/5.jpg",
			"github": "https://github.com/lei-clearsky/wp-theme-and-plugin/tree/master/wp-content/plugins/wpplugin-test",
			"progress": 90
		},
		{
			"title": "CSE Official Website",
			"date worked": "July, 2013 - Present",
			"description": "I redesigned and created the front-end of the College of Saint Elizabeth's official website. The previous site is in Flash.",
			"image": "http://lei-clearsky.github.io/images/6.jpg",
			"demo": "http://www.cse.edu/",
			"progress": 100
		},
		{
			"title": "CSE WordPress Intranet",
			"date worked": "Jul, 2014 - Sept, 2014",
			"description": "Converted College of Saint Elizabeth website to a WordPress site with custom theme and widgets",
			"image": "http://lei-clearsky.github.io/images/1.jpg",
			"github": "https://github.com/lei-clearsky/wp-theme-and-plugin/tree/master/wp-content/themes/college",
			"progress": 80
		}
	]

};
// Display project json info
projects.display = function(){
	var d3Div = new Array(projects.projects.length);
	var progressDiv = new Array(projects.projects.length);

	for (var project in projects.projects){

			$("#projects").append(HTMLprojectStart);

			$(".project-entry:last").append('<div id="div' + project + '"></div>')
										.append(HTMLprojectTitle.replace("%data%", projects.projects[project]["title"]))
										.append(HTMLprojectDates.replace("%data%", projects.projects[project]["date worked"]))
										.append(HTMLprojectDescription.replace("%data%", projects.projects[project]["description"]));
			// display demo or github json info if they exisit
			if (projects.projects[project]["demo"] != undefined )
				$(".project-entry:last").append(HTMLprojectDemo.replace("#", projects.projects[project]["demo"]));
			if (projects.projects[project]["github"] != undefined )
				$(".project-entry:last").append(HTMLprojectGithub.replace("#", projects.projects[project]["github"]));
			
			// call d3 progress chart function
			projects.progressChart(d3Div, progressDiv, project, 'div' + project, projects.projects[project]["progress"]);

	}

}
// project d3 progress chart function
projects.progressChart = function(d3Div, progressDiv, project, container, value) {

	d3Div[project] = d3.select(document.getElementById(container));

	progressDiv[project] = radialProgress(document.getElementById(container))
        .diameter(150)
        .value(value)
        .render();
};

//Bio JSON
var bio = {
	"first name": "Mingpei",
	"last name": "Yang",
	"role": "Data Scientist",
	"welcome message": "I'm passionate about data analysis, machine learning and deeplearning. Feel free to check out my Github repositories and demo projects. You can also find me on Linkedin",
	"contacts": 
		{
			"mobile number": "000-000-0000",
			"email": "mingpei_yang@163.com",
			"github username": "superalexyang",
			"location": "Shijiazhuang, Hebei"
		},
	"skills": ["Python", "R", "SAS", "Java", "JavaScripts", "C++", "Oracle SQL", "MySql", "SQLite", "Hadoop", "Hive", "Kafka", "Spark", "Tableau", "TensorFlow", "Pytorch", "Keras", "Pandas", "Beautiful Soup", "Shiny", "sklearn", "HTML", "CSS", "Javascript", "JQuery", "PHP", "MySQL", "WordPress"]

};
bio.display = function(){
	var formattedFName = HTMLheaderFName.replace("%data%", bio["first name"].toUpperCase());
	var formattedLName = HTMLheaderLName.replace("%data%", bio["last name"].toUpperCase());
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role.toUpperCase());
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile number"]);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github username"]);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter handle"]);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio["bio pic"]);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio["welcome message"]);

	
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedLName);
	$("#header").prepend(formattedFName);	
	$("#header").append(formattedWelcomeMsg);
	$("#topContacts ul").append(formattedMobile);
	$("#topContacts ul").append(formattedEmail);
	$("#topContacts ul").append(formattedGithub);
	$("#topContacts ul").append(formattedTwitter);	
	$("#topContacts ul").append(formattedLocation);

}
//Education JSON
var education = {
	"schools": [
		{
			"name": "University of Connecticut",
			"location": "Hartford, CT",
			"degree": "Graduate",
			"majors": ["M.S. in Business Analytics and Project Management"],
			"dates": "May 2018",
			"url": "https://uconn.edu/"
		},
		{
			"name": "Dalian Neusoft University of Information",
			"location": "Dalian, Liaoning",
			"degree": "Bachelars",
			"majors": ["B.S. in Financial Management"],
			"dates": "June 2015",
			"url": "https://www.neusoft.edu.cn/"
		}
	],
	"onlineCourses": [
		{
			"title": "Machine Learning Engineer Nanodegree",
			"school": "Udacity",
			"dates": 2018,
			"url": "https://graduation.udacity.com/confirm/PFTTCRPW"
		},
		{
			"title": "Full Stack Web Developer Nanodegree",
			"school": "Udacity",
			"dates": 2017,
			"url": "https://graduation.udacity.com/confirm/MG2AKFNL"
		},
		{
			"title": "Deep Learning Specialization",
			"school": "Udacity",
			"dates": 2018,
			"url": "https://www.coursera.org/account/accomplishments/specialization/certificate/ZZEV9KNJ3L7T"
		},
		{
			"title": "Object Oriented Programming in Java Specialization",
			"school": "Udacity",
			"dates": 2017,
			"url": "https://www.coursera.org/account/accomplishments/specialization/certificate/F5S9AJSVZ3GV"
		},
		{
			"title": "Data Structures and Algorithms Specialization",
			"school": "Udacity",
			"dates": 2017,
			"url": "https://www.coursera.org/account/accomplishments/specialization/certificate/CCPYMGWV2K9V"
		},
		{
			"title": "Machine Learning Specialization",
			"school": "Udacity",
			"dates": 2017,
			"url": "https://www.coursera.org/account/accomplishments/specialization/certificate/SQGSJ59TUK7W"
		}
	],
};
// Display education json info
education.display = function(){
	for (var school in education.schools){	
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school]["dates"]))
									.append(HTMLschoolName.replace("%data%", education.schools[school]["name"]).replace("#", education.schools[school]["url"]))
									.append(HTMLschoolLocation.replace("%data%", education.schools[school]["location"]));
																											
		for(var major in education.schools[school].majors){
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school]["majors"][major]));
		}
	}
	$("#education").append(HTMLonlineClasses);
	// Display online courses
	for (var onlineCourse in education.onlineCourses){	
		var num = education.schools.length + parseInt(onlineCourse);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse]["dates"]))
									.append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse]["school"]))
									.append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse]["title"]))
									.append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse]["url"]));
	}
}
// Display a list of skill labels
var skillsChartLabels = function(){
	for (skill in polarData){
	  var skillLabel = polarData[skill].label;
	  var skillLabelColor = polarData[skill].labelcolor;
	  var skillHTML = '<span class="label ' + skillLabelColor + '">' + skillLabel + '</span>';
	  $("#skills-list").append(skillHTML);
	}
}

// Call functions
window.onload = function(){
	var ctx = document.getElementById("skills-chart").getContext("2d");
	window.myPolarArea = new Chart(ctx).PolarArea(polarData, {
  		responsive:false
	});
	// Call skillsChartLabels function defined
	skillsChartLabels();
};
// Call bio, work, projects and education functions
bio.display();
work.display();
projects.display();
education.display();






