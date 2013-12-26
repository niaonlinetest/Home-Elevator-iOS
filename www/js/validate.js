var minYear=1900;
var maxYear = 2010;

function isInteger(s){
	var i;
    for (i = 0; i < s.length; i++){   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag){
	var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++){   
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function daysInFebruary (year){
	//February has 29 days in any year evenly divisible by four,
    //EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}
function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31
		if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
		if (i==2) {this[i] = 29}
   } 
   return this
}
function isDate1(dtStr, dtCh){
	
	var dtCh = (dtCh == null) ? "-" : dtCh;
	
	var error='';
	var daysInMonth = DaysArray(12)
	var pos1=dtStr.indexOf(dtCh)
	var pos2=dtStr.indexOf(dtCh,pos1+1)
	var strDay=dtStr.substring(0,pos1)
	var strMonth=dtStr.substring(pos1+1,pos2)
	var strYear=dtStr.substring(pos2+1)
	strYr=strYear
	if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
	if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
	for (var i = 1; i <= 3; i++) {
		if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
	}
	month=parseInt(strMonth)
	day=parseInt(strDay)
	year=parseInt(strYr)
	if (pos1==-1 || pos2==-1){
		error+="- The date format should be : dd"+dtCh+"mm"+dtCh+"yyyy.\n";
		return error
	}
	if (strMonth.length<1 || month<1 || month>12){
		error+="- Please enter a valid month\n";
		return error
	}
	if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
		error+="- Please enter a valid day.";
		return error
	}
	if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
		error+="- Please enter a valid 4 digit year.\n";
		return error
	}
	if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
		error+="- Please enter a valid date.\n";
		return error
	}
return error;
}

function isValidMobile1(mobileNumber){
	var error = '';
	var mN = ''; var validChars = '0123456789';
	for(var i = 0; i < mobileNumber.length; i++) {if(validChars.indexOf(mobileNumber.substr(i, 1)) > -1) { mN += mobileNumber.substr(i, 1) } }
	if(mN.length > 0) {
		if(mN.substr(0, 1) == '0') { mN = '44' + mN.substr(1) }
		else if(mN.substr(0, 3) == '440') { mN = '44' + mN.substr(3) }
	}
	else {
		error+="- Please specify a valid mobile number\n";
		return error
	}
	if(mN.length < 9) { 
		if(mN.length > 7) {
			if(!confirm('Please confirm that the mobile number you have\nentered is correct and in international format:.\n\n                      ' + mN + '\n\nIf it is correct click \'OK\', otherwise click \'Cancel\'.')) {
				
				error += 'Sorry but the mobile number you have supplied is too short to be valid.\n'
				return error 	
			}
		}
		else { error += 'Sorry but the mobile number you have supplied is too short to be valid.\n'; 
		 return error }
	}
	if(arguments[1]) { arguments[1].value = mN }
	return error
}

function isUsername(val)
{
	var errors = ''; 
	if (!isNaN(val))
					{
						errors+='-Name must contain character only.\n';
						val_new.style.backgroundColor = '#FFF';	
						return errors	
					}
	
	if((val.length<5) || (val.length > 15))
	{
						errors+='-Name must contain 5 to 15 characters only.\n';
						val_new.style.backgroundColor = '#FFF';	
						return errors		
					}
		 return errors			
}
function isName(val)
{
	var errors = ''; 
	if (!isNaN(val))
					{
						errors+='-Contact must contain character only.\n';
						val_new.style.backgroundColor = '#FFF';	
						return errors	
					}
	
		 return errors			
}

function formvalid(frmObj) { 
	var i,p,q,nm,test,num,min,max,errors='',args=formvalid.arguments;
	j=0;
	//	/^([-a-zA-Z0-9._]+@[-a-zA-Z0-9.]+(\.[-a-zA-Z0-9]+)+)$/;
	var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var regBlank = /[^\s]/;
	var regAlphaNum = /^([a-zA-Z0-9_]+)$/;
	var regDate = /^([0-9_]+-[0-9][0-9]+-[0-9][0-9]+)$/;
	
	var formtype = frmObj.elements;
	//alert (MM_validateForm.arguments[1].name);
	//alert("sss--->"+document.forms[""+args[0]].elements[""+args[0]].value);
	var checked = '';
	for (i=0; i<(formtype.length); i++) 
	{	
		//test1=document.forms[0].elements;
		//alert(formtype[i].name);
		//alert(i);
		
		mesg = formtype[i].title;
		test = formtype[i].lang;
		//alert(test);
		val = formtype[i];
		val_new = formtype[i];
		val_new.style.backgroundColor = '';
		if (val) 
		{	nm=mesg; 
			
			val = val.value;
			if(regBlank.test(val))
			{
				if(test.indexOf('isAlphaNum')!=-1)
				{
				result = trim(val);
				if(result.length==0){
				errors += '- '+nm+' is required.\n'; 
				}else{
					if(!regAlphaNum.test(val))
					{
						errors+='- '+nm+': Only Alpha Numeric and "_" Chars Allowed.\n';
						val_new.style.backgroundColor = '#FFF';
					}
				}
				}
				else if(test.indexOf('RisCheck')!=-1)
				{
					
					
						if(!val_new.checked){
						errors += '- '+nm+' is not checked.\n';
						}
					
				}
				else if (test.indexOf('isDate2') != -1) 
				{ 
					errors += isDate1(val, '/');
			    }
				else if (test.indexOf('isUsername') != -1) 
				{
				 errors += isUsername(val);	
				}
				else if (test.indexOf('isName') != -1) 
				{
				 errors += isName(val);	
				}
				else if (test.indexOf('isDate') != -1) 
				{ 
					errors += isDate1(val);
			    }
				else if (test.indexOf('isMobile') != -1) 
				{ 
					errors += isValidMobile1(val);
				}
				else if (test.indexOf('ischeckone') != -1) 
				{ 
					errors += is_any_check_box_checked(fObj);
			    }
				else if (test.indexOf('isEmail')!=-1) 
				{ 
					p=val.indexOf('@');
					s=val.indexOf('.');
			        if (p<1 || p==(val.length-1))
					{
						errors+='- '+nm+' must contain an e-mail Address.\n';
						val_new.style.backgroundColor = '#FFF';
		
					}
					//else if(s<p || s==(val.length-1))
					else if(!regEmail.test(val))
					{
						errors+='- '+nm+' must contain a valid e-mail Address.\n';
						val_new.style.backgroundColor = '#FFF';
					}
			     }
				else if (test.indexOf('isAmount')!=-1) 
				{ 		
					
					if (parseFloat(val) < parseFloat(val_new.getAttribute('maxlength')))
					{
						errors+='- You cannot request transfers for amounts under £'+ val_new.getAttribute('maxlength') +'.\n';
						val_new.style.backgroundColor = '#FFF';		
					}
			    }
				else if (test.indexOf('isNaN')!=-1) 
				{ 
					if (isNaN(val))
					{
						errors+='- '+nm+' must be enter without spaces.\n';
						val_new.style.backgroundColor = '#FFF';		
					}
			    }
				else if (test.indexOf('isMax')!=-1) 
				{ 
					if (getWordCount(val) <= val_new.getAttribute('maxlength'))
					{
						errors+='- '+nm+' must contain more than '+ val_new.getAttribute('maxlength') +' words.\n';
						val_new.style.backgroundColor = '#FFF';		
					}
			    }
				else if (test.indexOf('isMin')!=-1) 
				{ 
					if (val.length < val_new.getAttribute('minlength'))
					{
						errors+='- '+nm+' contain at least '+ val_new.getAttribute('minlength') +' Charter. Now only '+ val.length +' Charter\n';
						val_new.style.backgroundColor = '#FFF';		
					}
			    }
				else if (test.indexOf('isUploadP')!=-1) 
				{ 
					var new1 = val.toLowerCase()
					if ((new1.indexOf(".jpg") == -1 && new1.indexOf(".gif") == -1))
					{
						errors+='- '+nm+' Only upload .jpg or .gif.\n';
						val_new.style.backgroundColor = '#FFF';		
					}
			    }
				else if (test.indexOf('isUrl')!=-1) 
				{ 
					p=val.indexOf('http://');
					s=val.indexOf('.');
			        if (p<0 || p==(val.length-1))
					{
						errors+='- '+nm+' must be starting with "http://www."\n';
						val_new.style.backgroundColor = '#FFF';
		
					}
					else if(s<p || s==(val.length-1))
					{
						errors+='- '+nm+' must be starting with "http://www."\n';
						val_new.style.backgroundColor = '#FFF';
					}
			     }else if (test.indexOf('isChar')!=-1) 
				 { 
					var first_char;
					first_char= val.charAt(0);
					if(first_char==0||first_char==1||first_char==2||first_char==3||first_char==4||first_char==5||first_char==6||first_char==7||first_char==8||first_char==9){
					 errors+='- '+nm+' must starts with  a char.\n';
					 val_new.style.backgroundColor = '#FFF';
					}
			     }
	   			 else if (test.charAt(0)=='R')
				{
					result = trim(val);
					
				if(result.length==0){
				errors += '- '+nm+' is required.\n'; 
				val_new.style.backgroundColor = '#FFF';
				}
				}
				else if(test.indexOf('isEqual') != -1)
				{
						equal_obj_val = test.substring(7,test.indexOf(":"));
						//alert(equal_obj_val);
						mesg_string =test.substring((test.indexOf(":")+1));
						if(val != formtype[equal_obj_val].value)
						{
							errors+='- '+nm+' must be same to '+mesg_string+'.\n';
							formtype[equal_obj_val].style.backgroundColor = '#FFF';
							val_new.style.backgroundColor = '#FFF';
						}
						
				}
			}
			else if (test.charAt(0) == 'R'){
				errors += '- '+nm+' is required.\n'; 
				val_new.style.backgroundColor = '#FFF';
			}
			
			
		}
		if(errors !="")
		{	if(j<=0)
			{
				
				focusitem = formtype[i];
				j++;
			}
			
		}
	} 
	
//return errors;
  
  if (errors)
  {
	alert('The following errors occurred:\n\n'+errors);
	
	focusitem.focus();
	return false;
   }
   else
	return true;

//  document.MM_returnValue = (errors == '');
	
}

function trim(inputString) {
   // Removes leading and trailing spaces from the passed string. Also removes
   // consecutive spaces and replaces it with one space. If something besides
   // a string is passed in (null, custom object, etc.) then return the input.
   if (typeof inputString != "string") { return inputString; }
   var retValue = inputString;
   var ch = retValue.substring(0, 1);
   while (ch == " ") { // Check for spaces at the beginning of the string
      retValue = retValue.substring(1, retValue.length);
      ch = retValue.substring(0, 1);
   }
   ch = retValue.substring(retValue.length-1, retValue.length);
   while (ch == " ") { // Check for spaces at the end of the string
      retValue = retValue.substring(0, retValue.length-1);
      ch = retValue.substring(retValue.length-1, retValue.length);
   }
   while (retValue.indexOf("  ") != -1) { // Note that there are two spaces in the string - look for multiple spaces within the string
      retValue = retValue.substring(0, retValue.indexOf("  ")) + retValue.substring(retValue.indexOf("  ")+1, retValue.length); // Again, there are two spaces in each of the strings
   }
   return retValue; // Return the trimmed string back to the doc
} // Ends the "trim" function

//CODE FOR RECURRENCE STUFF




function checkall(objForm){

	len = objForm.elements.length;

	var i=0;
	for( i=0 ; i<len ; i++) {
		if (objForm.elements[i].type=='checkbox') {
			objForm.elements[i].checked = objForm.check_all.checked;
		}
	}
}

function is_any_check_box_checked(fObj)
{
	found=false;
	for(i=0;i<fObj.length;i++)
	{
		if(fObj[i].type=="checkbox" && fObj[i].checked) 
		{
			found=true;
			message="Please check one checkbox of it";
			break	
		}
		alert(message);		
	}
	return found;
	
}