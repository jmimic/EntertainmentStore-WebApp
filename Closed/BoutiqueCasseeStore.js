var loggedIn = "False";
var username = "#%a!";
var password = "!a@$";

// 01-CSS-HTML-Examples/CSS_hide+show/TabExample.html
var currentTab = "";
      function showTabA() {
         if (currentTab != "TabA") {
            currentTab = "TabA";
            showNoTabs();
            document.getElementById("TabA").style.backgroundColor = "lightBlue";
            document.getElementById("SectionA").style.display = "inline";
			document.getElementById("showLoginStatusHome").innerHTML = "";
         }
      }

      function showTabB() {
         if (currentTab != "TabB") {
            currentTab = "TabB";
            showNoTabs();
            document.getElementById("TabB").style.backgroundColor = "lightBlue";
            document.getElementById("SectionB").style.display = "inline";
         }
      }

      function showTabC() {
         if (currentTab != "TabC") {
            currentTab = "TabC";
            showNoTabs();
            document.getElementById("TabC").style.backgroundColor = "lightBlue";
            document.getElementById("SectionC").style.display = "inline";
         }
      }
	  
	  function showTabD() {
         if (currentTab != "TabD") {
            currentTab = "TabD";
            showNoTabs();
            document.getElementById("TabD").style.backgroundColor = "lightBlue";
            document.getElementById("SectionD").style.display = "inline";
         }
      }
	  
	  function showTabE() {
		  if (currentTab != "TabE") {
            currentTab = "TabE";
            showNoTabs();
            document.getElementById("TabE").style.backgroundColor = "lightBlue";
            document.getElementById("SectionE").style.display = "inline";
         }
      }
	  
	  function showTabF() {
		  if (currentTab != "TabF") {
            currentTab = "TabF";
            showNoTabs();
            document.getElementById("TabF").style.backgroundColor = "lightBlue";
            document.getElementById("SectionF").style.display = "inline";
			document.getElementById("showLoginStatus").innerHTML = "";
         }
      }
	  
      function showNoTabs() {
         document.getElementById("TabA").style.backgroundColor = "transparent";
         document.getElementById("TabB").style.backgroundColor = "transparent";
         document.getElementById("TabC").style.backgroundColor = "transparent";
		 document.getElementById("TabD").style.backgroundColor = "transparent";
		 document.getElementById("TabE").style.backgroundColor = "transparent";
		 document.getElementById("TabF").style.backgroundColor = "transparent";

         document.getElementById("SectionA").style.display = "none";
         document.getElementById("SectionB").style.display = "none";
         document.getElementById("SectionC").style.display = "none";
		 document.getElementById("SectionD").style.display = "none";
		 document.getElementById("SectionE").style.display = "none";
		 document.getElementById("SectionF").style.display = "none";
      }

function getBlurays(){
	var xhr = new XMLHttpRequest();
	var uri = "http://localhost:8188/Service.svc/brlist";
	xhr.open("GET", uri, true);
	xhr.setRequestHeader("Accept", "application/json;charset=UTF-8");
	xhr.onload = function() {
		var resp = JSON.parse(xhr.responseText);
		showBlurays(resp);
	}
	xhr.send(null);
}

function searchBlurays(){
	var xhr = new XMLHttpRequest();
	var inputBr = document.getElementById('searchBlurays').value;
	var uri = "http://localhost:8188/Service.svc/brsearch?term="+inputBr;
	xhr.open("GET", uri, true);
	xhr.setRequestHeader("Accept", "application/json;charset=UTF-8");
	xhr.onload = function() {
		var resp = JSON.parse(xhr.responseText);
		showBlurays(resp);
	}
	xhr.send(null);
}

function showBlurays(blurays) {
	var tableContent = "<tr class='Id'><td></td><td></td><td> </td><td></td><td></td></tr>\n";
	for (var i = 0; i < blurays.length; ++i) {
      var record = blurays[i];
	  var img = "<img src=\"http://localhost:8188/Service.svc/brimg?id=" + record.Id + "\"></img>";
	  var Title = record.Title;
	  if (i & 1 == 1) { // odd row
         tableContent += "<tr class='orderOdd'>";
      }
      else { // even row
         tableContent += "<tr class='orderEven'>";
      }
	  if (loggedIn == "True"){
		  var linkBluray = "blurayResponse('"+record.Id+"');";
		  //var uri = "window.location.href='http://localhost:8189/Service.svc/brbuy?id=" + recordId + "'";
		  var buyBluray = '<input type="button" value="Buy Now" onclick='+linkBluray+'>';
		  tableContent += "<td>" + img + "</td><td>" + Title + "</td><td>" + buyBluray + "</td></tr>\n";
	  } else {
			var linkBluray = "showTabF()";
			var buyBluray = '<input type="button" value="Buy Now" onclick=' + linkBluray + '>';
			tableContent += "<td>" + img + "</td><td>" + Title + "</td><td>" + buyBluray + "</td></tr>\n";
		
	  } 
   }
   document.getElementById("show_blurays").innerHTML = tableContent;
}

function blurayResponse(recordId){
	var xhr = new XMLHttpRequest();
	var uri = "http://localhost:8189/Service.svc/brbuy?id=" + recordId;
	xhr.open("GET", uri, true);
	xhr.setRequestHeader("Accept", "application/json;charset=UTF-8");
	xhr.onload = function() {
		var resp = JSON.parse(xhr.responseText);
		alert(resp);
	}
	xhr.send(null);
}

function getBooks(){
	var xhr = new XMLHttpRequest();
	var uri = "http://localhost:8188/Service.svc/booklist";
	xhr.open("GET", uri, true);
	xhr.setRequestHeader("Accept", "application/json;charset=UTF-8");
	xhr.onload = function() {
		var resp = JSON.parse(xhr.responseText);
		showBooks(resp);
	}
	xhr.send(null);
}

function searchBooks(){
	var xhr = new XMLHttpRequest();
	var inputBk = document.getElementById('searchBooks').value;
	var uri = "http://localhost:8188/Service.svc/booksearch?term="+inputBk;
	xhr.open("GET", uri, true);
	xhr.setRequestHeader("Accept", "application/json;charset=UTF-8");
	xhr.onload = function() {
		var resp = JSON.parse(xhr.responseText);
		showBooks(resp);
	}
	xhr.send(null);
}

function showBooks(books) {
	var tableContent = "<tr class='Id'><td></td><td></td><td> </td><td></td><td></td></tr>\n";
	for (var i = 0; i < books.length; ++i) {
      var record = books[i];
	  var img = "<img src=\"http://localhost:8188/Service.svc/bookimg?id=" + record.Id + "\"></img>";
      var Title = record.Title;
	  var AuthorSurname = record.AuthorSurname;
	  var AuthorInitials = record.AuthorInitials;
	  if (i & 1 == 1) { // odd row
         tableContent += "<tr class='orderOdd'>";
      }
      else { // even row
         tableContent += "<tr class='orderEven'>";
      }
	  if (loggedIn == "True"){
		  var linkBook = "bookResponse('"+record.Id+"');";
		  //var uri = "window.location.href='http://localhost:8189/Service.svc/bookbuy?id=" + recordId + "'";
		  var buyBook = '<input type="button" value="Buy Now" onclick='+linkBook+'>';
		  tableContent += "<td>" + img + "</td><td>" + Title + "</td><td>" + buyBook + "</td></tr>\n";
	  } else {
		  var linkBook = "showTabF()";
		  var buyBook = '<input type="button" value="Buy Now" onclick=' + linkBook + '>';
		  tableContent += "<td>" + img + "</td><td>" + Title + "</td><td>" + buyBook + "</td></tr>\n";
	}
   }
   document.getElementById("show_books").innerHTML = tableContent;
}

function bookResponse(recordId){
	var xhr = new XMLHttpRequest();
	var uri = "http://localhost:8189/Service.svc/bookbuy?id=" + recordId;
	xhr.open("GET", uri, true);
	xhr.setRequestHeader("Accept", "application/json;charset=UTF-8");
	xhr.onload = function() {
		var resp = JSON.parse(xhr.responseText);
		alert(resp);
	}
	xhr.send(null);
}

function postRegister(){
	var xhr= new XMLHttpRequest();
	var uri= "http://localhost:8188/Service.svc/register";
	xhr.open("POST", uri, true);
	xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	var inputName = document.getElementById('postUsername').value;
	var inputPassword = document.getElementById('postPassword').value;
	var inputAddress = document.getElementById('postAddress').value;
	var registerData = JSON.stringify({"Address": inputAddress,"Name":inputName,"Password":inputPassword});
	xhr.onload= function() {
		var currentTime = new Date(new Date().getTime()).toLocaleString(); 
		document.getElementById("showName").innerHTML = ("Username:   "+inputName);
		document.getElementById("showRegisteredStatus").innerHTML = (xhr.responseText);
		document.getElementById("showRegisteredDate").innerHTML = currentTime;
		document.getElementById("postUsername").value = "";
		document.getElementById("postPassword").value = "";
		document.getElementById("postAddress").value = "";
	}
	xhr.send(registerData);
}	

function postHTMLcomment(){
	var xhr= new XMLHttpRequest();
	var inputName = document.getElementById('postCommentName').value;
	var uri= "http://localhost:8188/Service.svc/comment?name="+inputName;
	xhr.open("POST", uri, true);
	xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	var inputComment = document.getElementById('postComment').value;
	var inputCommentLength = inputComment.length;
	xhr.setRequestHeader("Content-Length", inputCommentLength);
	xhr.onload= function() {
		getHTMLcomments()
		document.getElementById("postCommentName").value = "";
		document.getElementById("postComment").value = "";
	}
	xhr.send(JSON.stringify(inputComment));
}

function getHTMLcomments(){
	var xhr = new XMLHttpRequest();
	var uri = "http://localhost:8188/Service.svc/htmlcomments";
	xhr.open("GET", uri, true);
	xhr.setRequestHeader("Accept", "application/json;charset=UTF-8");
	xhr.onload = function() {
		var resp = xhr.responseText;
		document.getElementById("showComments").innerHTML = resp;
		var currentTime = new Date(new Date().getTime()).toLocaleString(); 
		document.getElementById("showDate").innerHTML = "Comments as of:&emsp;" + currentTime;
	}
	xhr.send(null);
}

function getVersion(){
	var xhr = new XMLHttpRequest();
	var uri = "http://localhost:8188/Service.svc/version";
	xhr.open("GET", uri, true);
	xhr.setRequestHeader("Accept", "application/json;charset=UTF-8");
	xhr.onload = function() {
		var resp = JSON.parse(xhr.responseText);
		document.getElementById("showVersion").innerHTML = "Version:   "+resp;
		document.getElementById("Logout").style.display = "none";
	}
	xhr.send(null);
}

function userLogINhome(){
	var xhr = new XMLHttpRequest();
	var uri = "http://localhost:8189/Service.svc/id";
	username = document.getElementById("loginUsernameHome").value;
	password = document.getElementById("loginPasswordHome").value;
	if (username == ""){
		username = "#%a!";
		password = "!a@$";
		} else if (password == ""){
		username = "#%a!";
		password = "!a@$";
		}
	xhr.open("GET", uri, true, username, password);
	xhr.withCredentials = true;
	xhr.onload = function(){
		if (username == "#%a!"){
			document.getElementById("showLoginStatusHome").innerHTML = "Invalid Username or Password";
			}
		else if (password == "!a@$"){
			document.getElementById("showLoginStatusHome").innerHTML = "Invalid Username or Password";
			}
		else if (xhr.status == 200){
			document.getElementById("loginUsernameHome").value = "";
			document.getElementById("loginPasswordHome").value = "";
			document.getElementById("LoginSec").style.display = "none";
			loggedIn = "True";
			getBooks(); 
			getBlurays();
			document.getElementById("showLoginStatusHome").innerHTML = "Successfully logged in";
			document.getElementById("WelcomeBack").innerHTML = "Welcome Back, " + username;
			document.getElementById("TabE").style.display = "none";
			document.getElementById("TabF").style.display = "none";
			document.getElementById("Logout").style.display = "inline";
		} else {
			document.getElementById("showLoginStatusHome").innerHTML = "Invalid Username or Password";
		}
		}
	xhr.send(null);
}

function userLogIN(){
	var xhr = new XMLHttpRequest();
	var uri = "http://localhost:8189/Service.svc/id";
	username = document.getElementById("loginUsername").value;
	password = document.getElementById("loginPassword").value;
	if (username == ""){
		username = "#%a!";
		password = "!a@$";
		} else if (password == ""){
		username = "#%a!";
		password = "!a@$";
		}
	xhr.open("GET", uri, true, username, password);
	xhr.withCredentials = true;
	xhr.onload = function(){ 
		if (username == "#%a!"){
			document.getElementById("showLoginStatus").innerHTML = "Invalid Username or Password";
			}
		else if (password == "!a@$"){
			document.getElementById("showLoginStatus").innerHTML = "Invalid Username or Password";
			}
		else if (xhr.status == 200){
			document.getElementById("loginUsername").value = "";
			document.getElementById("loginPassword").value = "";
			document.getElementById("LoginSec").style.display = "none";
			loggedIn = "True";
			document.getElementById("showLoginStatus").innerHTML = "Successfully logged in";
			document.getElementById("WelcomeBack").innerHTML = "Welcome Back, " + username;
			document.getElementById("TabE").style.display = "none";
			document.getElementById("TabF").style.display = "none";
			document.getElementById("Logout").style.display = "inline";
			getBooks(); 
			getBlurays();
			showTabA();
		} else {
			document.getElementById("showLoginStatus").innerHTML = "Invalid Username or Password";
		}
		}
	xhr.send(null);
}

function userLogOUT(){
	var xhr = new XMLHttpRequest();
	var uri = "http://localhost:8189/Service.svc/id";
	username = document.getElementById("loginUsername").value = "#%a!";
	password = document.getElementById("loginPassword").value = "!a@$";
	xhr.open("GET", uri, true, username, password);
	xhr.withCredentials = true;
	xhr.onload = function(){ 
		document.getElementById("Logout").style.display = "none";
		document.getElementById("loginUsername").value = "";
		document.getElementById("loginPassword").value = "";
		document.getElementById("LoginSec").style.display = "inline";
		document.getElementById("TabE").style.display = "initial";
		document.getElementById("TabF").style.display = "initial";
		document.getElementById("WelcomeBack").innerHTML = "";
		document.getElementById("showLoginStatus").innerHTML = "";
		document.getElementById("showLoginStatusHome").innerHTML = "";
		loggedIn = "False";
		username = "#%a!";
		password = "!a@$";
		alert("Successfully signed out");
		getBooks(); 
		getBlurays();
		//showNoTabs();
		showTabA();
	}
	xhr.send(null);
}

function userLogOUTonload(){
	var xhr = new XMLHttpRequest();
	var uri = "http://localhost:8189/Service.svc/id";
	username = document.getElementById("loginUsername").value = "#%a!";
	password = document.getElementById("loginPassword").value = "!a@$";
	xhr.open("GET", uri, true, username, password);
	xhr.withCredentials = true;
	xhr.onload = function(){ 
		document.getElementById("Logout").style.display = "none";
		document.getElementById("loginUsername").value = "";
		document.getElementById("loginPassword").value = "";
		document.getElementById("LoginSec").style.display = "inline";
		document.getElementById("WelcomeBack").innerHTML = "";
		document.getElementById("showLoginStatus").innerHTML = "";
		document.getElementById("showLoginStatusHome").innerHTML = "";
		username = "#%a!";
		password = "!a@$";
		loggedIn = "False";
		getBooks(); 
		getBlurays(); 
		//showNoTabs();
		showTabA();
	}
	xhr.send(null);
}
