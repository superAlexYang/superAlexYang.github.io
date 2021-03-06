
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
			"description": "Developed a database website to store millions of images and texts data using Python, Flask and SQLite; Reduced marking time by implementing a GUI Web App and deployed on AWS"
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
			"title": "RRL Stock Trader",
			"date worked": "Jan, 2018",
			"description": "Using Reinforcement Learning to train a stock trader. Project of Udacity Machine Learning Engineer Nanodegree",
			"image": "https://github.com/superAlexYang",
			"github": "https://github.com/superAlexYang/RRL_stock_trader",
			"progress": 100
		},
		{
			"title": "Dog Breed Identification",
			"date worked": "Dec, 2017",
			"description": "Using CNN to identify dog breed. Project of Udacity Machine Learning Engineer Nanodegree",
			"image": "https://github.com/superAlexYang",
			"github": "https://github.com/superAlexYang/Dog_Identification",
			"progress": 100
		},
		{
			"title": "Customer Segments",
			"date worked": "Nov, 2017",
			"description": "Using unsupervised learning algorithms to describe the variation in the different types of customers.",
			"image": "https://github.com/superAlexYang",
			"github": "https://github.com/superAlexYang/customer_segments",
			"progress": 100
		},
		{
			"title": "Finding Donors",
			"date worked": "Nov, 2017",
			"description": "Using supervised alogrithms to accurately model individuals' income.",
			"image": "https://github.com/superAlexYang",
			"github": "https://github.com/superAlexYang/Finding_Donors",
			"progress": 100
		},
		{
			"title": "Boston Hoursing",
			"date worked": "Oct, 2017",
			"description": "Predicting Boston Housing Prices using decision tree. Project of Udacity Machine Learning Engineer Nanodegree",
			"image": "https://github.com/superAlexYang",
			"github": "https://github.com/superAlexYang/Boston_Housing",
			"progress": 100
		},
		{
			"title": "Deeplearning Specialization Assignments",
			"date worked": "Sep, 2017",
			"description": "Assignments Notebooks for Coursera Deeplearning Specialization Courses",
			"image": "https://github.com/superAlexYang",
			"github": "https://github.com/superAlexYang/Deeplearning_Assignment",
			"progress": 100
		},
		{
			"title": "Yelp Business Analysis",
			"date worked": "Jan 2018 - May 2018",
			"description": "Project for Data Camps",
			"image": "https://github.com/superAlexYang",
			"github": "https://github.com/superAlexYang/Yelp_Business_Analysis",
			"progress": 100
		},
		{
			"title": "Walmart Store Sales Forecasting",
			"date worked": "Oct, 2017",
			"description": "Final Project for Advanced Data Analysis Course",
			"image": "https://github.com/superAlexYang",
			"github": "https://github.com/superAlexYang",
			"progress": 100
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
			// display github json info if they exisit
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
			"school": "Coursera",
			"dates": 2018,
			"url": "https://www.coursera.org/account/accomplishments/specialization/certificate/ZZEV9KNJ3L7T"
		},
		{
			"title": "Object Oriented Programming in Java Specialization",
			"school": "Coursera",
			"dates": 2017,
			"url": "https://www.coursera.org/account/accomplishments/specialization/certificate/F5S9AJSVZ3GV"
		},
		{
			"title": "Data Structures and Algorithms Specialization",
			"school": "Coursera",
			"dates": 2017,
			"url": "https://www.coursera.org/account/accomplishments/specialization/certificate/CCPYMGWV2K9V"
		},
		{
			"title": "Machine Learning Specialization",
			"school": "Coursera",
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
									.append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse]["url"]).replace("#", education.onlineCourses[onlineCourse]["url"]));
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






