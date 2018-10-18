// Show the amount of links and headings on a page.
function displaySummary(){
	var listLinks = document.querySelectorAll('a');
	var listHeadings = document.querySelectorAll('h1,h2,h3,h4,h5,h6');
	var summary = document.createElement('div');
	summary.id = "vasilis-srm-summary";
	var countLinks = listLinks.length;
	if(countLinks == 0) {
		countLinks = "no";
	}
	var countHeadings = listHeadings.length;
	if(countHeadings == 0) {
		countHeadings = "no";
	}
	summary.innerHTML = document.title + ". Web Content. <br>This document has " + countLinks + " links and " + countHeadings + " headings.";
	if(!document.querySelector('#vasilis-srm-summary')){
		document.body.insertBefore(summary,document.querySelector('body > *:first-child'));
	}
	document.documentElement.setAttribute('data-vasilis-srm', (countLinks*1 + countHeadings*1));
}
displaySummary();

// If there are a few items in an element, it is sometimes pronounced as group
function showGroup() {
	var ps = document.querySelectorAll('p, nav, section, article');
	var i = 0;
	while(i < ps.length) {
		groupLength = ps[i].childNodes.length;
		if(groupLength > 1) {
			var groupChild = document.createElement('span');
			groupChild.classList.add('vasilis-srm-group');
			groupChild.innerHTML = " Group " + groupLength + " items";
			ps[i].appendChild(groupChild);
		}
		i++;
	}
}
showGroup();

// Form elements are pronounced, of course, but before and after don’t work on them
function showForms(){
	var inputs = document.querySelectorAll('input, textarea, select');
	var i = 0;
	while(i < inputs.length) {
		//button
		var message = '';
		if (inputs[i].getAttribute('type') == "submit" || inputs[i].getAttribute('type') == "button" || inputs[i].getAttribute('type') == "reset") {
			message = ", button";
		}
		// hidden
		else if (inputs[i].getAttribute('type') == "hidden") {
			message = "";
		}
		//checkbox
		else if (inputs[i].getAttribute('type') == "checkbox") {
			var ch = "unchecked";
			if(inputs[i].checked) {
				ch = "checked";
			}
			message = ", checkbox, " + ch;
		}
		//radio 
		else if (inputs[i].getAttribute('type') == "radio") {
			var ch = "unselected";
			if(inputs[i].checked) {
				ch = "selected";
			}
			message = ", radionutton, " + ch;
		}
		else {
			var msg = ", edit text, "
			if (inputs[i].tagName == "SELECT") {
				msg = ", popup button, ";
			}
			if(inputs[i].labels && inputs[i].labels.length > 0){
				message = msg + inputs[i].labels[0].innerText;
			}
			else {
				message = msg + "blank";
			}
		}
		var span = document.createElement('span');
		span.innerHTML = "<span class=\"vasilis-srm-span\">" + message + ". </span>";
		//inputs[i].replaceWith(span);
		inputs[i].parentNode.insertBefore(span, inputs[i].nextSibling);
		i++;
	}
}
showForms();

// Before and after don’t work on images
function showImage(){
	var imgs = document.querySelectorAll('img');
	var i = 0;
	while(i < imgs.length) {
		if (imgs[i].getAttribute('alt') == null) {
			message = imgs[i].getAttribute('src');
		}
		else {
			message = imgs[i].getAttribute('alt');
		}
		var span = document.createElement('span');
		span.innerHTML = "<span class=\"vasilis-srm-span\"> " + message + ", image. </span>";
		//imgs[i].replaceWith(span);
		imgs[i].parentNode.insertBefore(span, imgs[i].nextSibling);
		i++;
	}
}
showImage();

// This can be used to replace symbols by how they are spoken
const replaceOnDocument = (pattern, string, {target = document.body} = {}) => {
	// Handle `string` — see the last section
	[
	  target,
	  ...target.querySelectorAll("*:not(script):not(noscript):not(style)")
	].forEach(({childNodes: [...nodes]}) => nodes
	  .filter(({nodeType}) => nodeType === document.TEXT_NODE)
	  .forEach((textNode) => textNode.textContent = textNode.textContent.replace(pattern, string)));
  };
  
  // Replace | with the words "vertical line";
  replaceOnDocument(/\|/g, ", vertical line, ");

  function exponentionalize(){
	var els = document.querySelectorAll('a, h1, h2, h3, h4, h5, h6, button, [class^="vasilis-srm"],li:first-child,navigation');
	var i = 0;
	var exp = (document.querySelector('html').getAttribute('data-vasilis-srm') * 1);
	var excl = '';
	if (exp > 10) {
		excl = "!";
	}
	while(i < els.length) {
		els[i].setAttribute('data-vasilis-srm-expo',excl);	
	}
  }