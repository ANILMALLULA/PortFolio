(this["webpackJsonp18-glass-portfolio-design"]=this["webpackJsonp18-glass-portfolio-design"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),c=i(7),s=i.n(c),r=i(2),l=i(3),o=i(5),d=i(4),j=(i(12),i(0)),m=[{id:0,name:"HTML"},{id:1,name:"Java Script"},{id:2,name:"CSS"},{id:3,name:"React"},{id:4,name:"SQL"},{id:5,name:"Python"}],h=[{id:0,qualification:"Graduation",qualificationSource:"B.Tech (Electronics and Communication Engineering)",percentage:"80%"},{id:1,qualification:"Intermediate",qualificationSource:"Aditya Junior College, Palakol",percentage:"96.5%"},{id:2,qualification:"SSC",qualificationSource:"Sunshine English Medium School, Valluru",percentage:"95%"}],u=function(e){Object(o.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(r.a)(this,i);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).renderSkillsList=function(){return Object(j.jsx)("ul",{className:"skills-list",children:m.map((function(e){return Object(j.jsx)("li",{className:"skill-item",children:Object(j.jsx)("p",{className:"skill",children:e.name})},e.id)}))})},e.renderEducationDetailsList=function(){return h.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"qualification",children:e.qualification}),Object(j.jsx)("p",{className:"education-place",children:e.qualificationSource}),Object(j.jsxs)("p",{className:"education-place",children:["Percentage:",Object(j.jsx)("span",{className:"percentage",children:e.percentage})]})]})},e.id)}))},e}return Object(l.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"about-section-heading",children:"Career Objective:"}),Object(j.jsx)("p",{className:"about-section-description",children:"To secure a position in an organisation where I can utilize and apply my skills and knowledge, which would enable me as a professional to grow while fulfilling organizational goals."}),Object(j.jsxs)("div",{className:"education-and-skills-container",children:[Object(j.jsxs)("div",{className:"education-details-container",children:[Object(j.jsx)("h1",{className:"education-and-skills-heading",children:"Education"}),Object(j.jsx)("ul",{className:"education-details-list",children:this.renderEducationDetailsList()})]}),Object(j.jsxs)("div",{className:"skills-container",children:[Object(j.jsx)("h1",{className:"education-and-skills-heading",children:"Skills"}),this.renderSkillsList()]})]})]})}}]),i}(n.Component),p=(i(14),i.p+"static/media/location.5a635ac1.JPG"),b=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"contact-section-heading",children:"My Contact"}),Object(j.jsx)("img",{className:"location-image",src:p,alt:"location-map"}),Object(j.jsx)("p",{className:"contact-section-description",children:"I have been looking for a new Oppurtunity where I can utilize my skills and learn new techs and trends in the market. If you like my profile, Please do contact me. Thank you!!"}),Object(j.jsx)("p",{className:"contact-details",children:"Please Contact:"}),Object(j.jsx)("p",{className:"mobile-number",children:"9010433267"}),Object(j.jsx)("p",{className:"email",onClick:function(e){window.location="mailto:mallula9010@gmail.com",e.preventDefault()},children:"mallula9010@gmail.com"})]})},O=(i(15),function(){return Object(j.jsxs)("div",{className:"home-section",children:[Object(j.jsxs)("h1",{className:"username",children:["Anil Kumar ",Object(j.jsx)("span",{className:"surname",children:"Mallula"})]}),Object(j.jsx)("p",{className:"designation",children:"Front End Developer"}),Object(j.jsx)("p",{className:"experience-description",children:"Experienced in ReactJS and JavaScript, HTML, CSS, SQL and Python."}),Object(j.jsx)("p",{className:"description1",children:"Currently working as Project Engineer at Wipro Technologies, Limited."})]})}),g=(i(16),i.p+"static/media/ProfPic.53807faf.jpg"),f=function(e){Object(o.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(r.a)(this,i);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).renderNavItemsList=function(){var t=e.props,i=t.navBarItems,n=t.activeNavBarItem,a=t.changeActiveNavBarItem;return i.map((function(e){var t=n===e.name?"active-item":"";return Object(j.jsxs)("li",{className:"nav-item ".concat(t),onClick:function(){return a(e.name)},children:[Object(j.jsx)("img",{className:"item-image",src:e.iconUrl,alt:e.name}),Object(j.jsx)("p",{className:"item-name",children:e.name})]},e.id)}))},e}return Object(l.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)("img",{className:"profile-image",src:g,alt:"profile"}),Object(j.jsx)("ul",{className:"nav-items-list",children:this.renderNavItemsList()})]})}}]),i}(n.Component),x=(i(17),function(e){Object(o.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(r.a)(this,i);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).renderProjectsList=function(){return projectsData.map((function(e){return Object(j.jsxs)("li",{className:"project-item",children:[Object(j.jsx)("img",{className:"project-image",src:e.imageUrl,alt:"work"}),Object(j.jsx)("p",{className:"project-name",children:e.name})]},e.id)}))},e}return Object(l.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"projects-heading",children:"WORK EXPERIENCE"}),Object(j.jsxs)("div",{className:"companyDetails",children:[Object(j.jsx)("p",{className:"companyname",children:"Wipro Limited -"}),Object(j.jsx)("p",{className:"experience",children:"Jun, 2019 to present"})]}),Object(j.jsxs)("ul",{className:"list-items",children:[Object(j.jsx)("li",{children:"Working as a Frontend Developer."}),Object(j.jsx)("li",{children:"Understanding Client requirements and work accordingly."}),Object(j.jsx)("li",{children:"Design, discuss and develop UI based on Client requirements using FED technologies like ReactJs, JS, HTML, CSS, Bootstrap."}),Object(j.jsx)("li",{children:"Working effectively with team members and committed to timely completion of tasks assigned."}),Object(j.jsx)("li",{children:"Out of own interest, learnt Python and SQL languages."}),Object(j.jsx)("li",{children:"As a skill development objective, joined in online training institute for Full stack development and built number of UIs as a practice objective."})]}),Object(j.jsx)("h1",{className:"projects-heading1",children:"INTERPERSONAL SKILLS"}),Object(j.jsxs)("ul",{className:"list-items",children:[Object(j.jsx)("li",{children:"Ability to rapidly build relationship and set up trust."}),Object(j.jsx)("li",{children:"Confident and Determined."}),Object(j.jsx)("li",{children:"Positive attitude."})]})]})}}]),i}(n.Component)),v=(i(18),[{id:0,imageUrl:"https://assets.ccbp.in/frontend/react-js/linkedin-logo-img.png",name:"linkedIn",siteUrl:"https://www.linkedin.com/in/anil-kumar-mallula-601299169/"},{id:2,imageUrl:"https://assets.ccbp.in/frontend/react-js/instagram-logo-img.png",name:"instagram",siteUrl:"https://www.instagram.com/aspiring_anil/"},{id:3,imageUrl:"https://assets.ccbp.in/frontend/react-js/facebook-logo-img.png",name:"facebook",siteUrl:"https://www.facebook.com/mallulaanil/"},{id:4,imageUrl:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",name:"github",siteUrl:"https://github.com/ANILMALLULA"}]),N=function(e){Object(o.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(r.a)(this,i);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).renderSocialMediaAppsList=function(){return v.map((function(e){return Object(j.jsx)("a",{href:e.siteUrl,children:Object(j.jsx)("img",{className:"app-logo",src:e.imageUrl,alt:e.name})},e.id)}))},e}return Object(l.a)(i,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"social-media-section",children:this.renderSocialMediaAppsList()})}}]),i}(n.Component);i(19);var y=function(){return Object(j.jsxs)("div",{style:{display:"flex",flexWrap:"wrap"},children:[Object(j.jsxs)("div",{style:{width:"50%",padding:"10px"},children:[Object(j.jsx)("h1",{className:"projects-heading1",children:"Hobbies"}),Object(j.jsxs)("ul",{className:"list-items",children:[Object(j.jsx)("li",{children:"Long Drives"}),Object(j.jsx)("li",{children:"Listening to Music"}),Object(j.jsx)("li",{children:"Playing and love to watch cricket"}),Object(j.jsx)("li",{children:"Spending valuable time with friends and family."})]})]}),Object(j.jsxs)("div",{style:{width:"50%",padding:"10px"},children:[Object(j.jsx)("h1",{className:"projects-heading1",children:"Additional Info:"}),Object(j.jsxs)("ul",{className:"list-items",children:[Object(j.jsx)("li",{children:"Date of Birth: 1st July 1998 "}),Object(j.jsx)("li",{children:"Marital Status: Single"}),Object(j.jsx)("li",{children:"Nationality: India"}),Object(j.jsx)("li",{children:"Languages known: English, Hindi, Telugu"})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"projects-heading1",children:"ACHIEVEMENTS and EXTRA \u2013CURRICULAR ACTIVITIES:"}),Object(j.jsxs)("ul",{className:"list-items",children:[Object(j.jsx)("li",{children:"Won First prize in Project Expo event of GVIT college fest 2018."}),Object(j.jsx)("li",{children:"Won Second prize in Project Expo of ANDHRA UNIVERSITY fest in 2018."}),Object(j.jsx)("li",{children:"Won Third prize in Archetype event of NIPUNA 2K17 fest of our college."}),Object(j.jsx)("li",{children:"Won Excellence Awards in Wipro for Quarterly performances"}),Object(j.jsx)("hr",{}),Object(j.jsx)("li",{children:"Student Coordinator for the initiation of Civil services coaching in our college"}),Object(j.jsx)("li",{children:"Works as a volunteer for SPORTS and QUIZ in TRANCE 2K18 event of our college"}),Object(j.jsx)("li",{children:"Actively participated in various sports events from my school days."})]})]})]})},k=(i(20),[{id:0,iconUrl:"https://assets.ccbp.in/frontend/react-js/home-img.png",name:"HOME"},{id:1,iconUrl:"https://assets.ccbp.in/frontend/react-js/about-img.png",name:"ABOUT"},{id:2,iconUrl:"https://assets.ccbp.in/frontend/react-js/projects-img.png",name:"WORK EXPERIENCE"},{id:3,iconUrl:"https://assets.ccbp.in/frontend/react-js/about-img.png",name:"MORE INFO"},{id:4,iconUrl:"https://assets.ccbp.in/frontend/react-js/person-img.png",name:"CONTACT"}]),I=function(e){Object(o.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(r.a)(this,i);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={activeNavBarItem:k[0].name},e.renderComponent=function(){switch(e.state.activeNavBarItem){case k[1].name:return Object(j.jsx)(u,{});case k[2].name:return Object(j.jsx)(x,{});case k[3].name:return Object(j.jsx)(y,{});case k[4].name:return Object(j.jsx)(b,{});default:return Object(j.jsx)(O,{})}},e.changeActiveNavBarItem=function(t){e.setState({activeNavBarItem:t})},e}return Object(l.a)(i,[{key:"render",value:function(){var e=this.state.activeNavBarItem;return Object(j.jsxs)("div",{className:"portfolio-container",children:[Object(j.jsx)(f,{activeNavBarItem:e,changeActiveNavBarItem:this.changeActiveNavBarItem,navBarItems:k}),Object(j.jsxs)("div",{className:"portfolio-body",children:[Object(j.jsx)("div",{className:"active-section",children:this.renderComponent()}),Object(j.jsx)(N,{})]})]})}}]),i}(n.Component),S=(i(21),function(){return Object(j.jsx)("div",{className:"app-container",children:Object(j.jsx)(I,{})})});s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.46583e43.chunk.js.map