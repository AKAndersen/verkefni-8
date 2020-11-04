/**
 * Verkefni 8 – Caesar dulmál með vefviðmóti
 *
 * Verður að passa _nákvæmlega_ við gefið HTML, mun annars brotna.
 * Þ.e.a.s., ekki þarf að skrifa meðhöndlun á HTML elementum sem vantar
 */

/**
 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @param {string} alphabet Stafróf sem afkóða á út frá
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 */
function encode(str, n, alphabet) {
	let string = '';
	for(let i = 0; i<str.length; i++){
	  let stafur = str.charAt(i);
	  let positionLETTERS = alphabet.indexOf(stafur);
  
	  let number =positionLETTERS+parseInt(n);
	  number = number %32;
	  
	  string +=alphabet[number];
	  //string +=LETTERS.charAt(number);
	  
	}
  
	return string;
  }
  /**
   * Afkóðar streng með því að hliðra honum um n stök.
   *
   * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
   * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
   * @param {string} alphabet Stafróf sem afkóða á út frá
   * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
   */
  function decode(str, n, alphabet) {
	let string = '';
	let z = '';
	for(let i = 0; i<str.length; i++){
	  let stafur = str.charAt(i);
	  let positionLETTERS = alphabet.indexOf(stafur);
	  
	  if((positionLETTERS-parseInt(n))>=0) {z = alphabet.charAt((positionLETTERS-parseInt(n)));}
	  else {z = alphabet.charAt(32+(positionLETTERS-parseInt(n)));}
  
	  string += z;
	}
	return string;
  }
  
  // Default stafróf, uppfært þegar slegið inn í "alphabet"
  let alphabet = 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ';
  
  // Default type, uppfært af radio input
  let type = "encode";
  
  // Default hliðrun, uppfært af "shift"
  let shift = 3;
  
  let str = '';
  
  function radio(flipi){
	if(flipi.value=='encode'){
	  document.getElementById("result").innerHTML=encode(str, shift, alphabet);
	  type = "encode";
	}
	else {
	  document.getElementById("result").innerHTML=decode(str, shift, alphabet);
	  type = "decode";
	}
  }

  function shifting(númer){
	document.getElementById("shiftValue").innerHTML=númer;
	shift = númer;
	if(type=="encode"){
	  document.getElementById("result").innerHTML=encode(str, shift, alphabet);
	}
	else {
	  document.getElementById("result").innerHTML=decode(str, shift, alphabet);
	}
  
  }

  function stafróf(newAlphabet){
	alphabet=newAlphabet.value.toLocaleUpperCase();    
	document.getElementById("shift").setAttribute("max", alphabet.length);
	if(type=="encode"){
	document.getElementById("result").innerHTML=encode(str, shift, alphabet);
	}
	else {
	document.getElementById("result").innerHTML=decode(str, shift, alphabet);
	}
  }
 
  
  
  function input1(Text){
	str=Text.value.toLocaleUpperCase();
	console.log(str);
  
	for(let i = 0; i<str.length;i++){
	  if(alphabet.includes(str[i])==false) {        
		document.getElementById("result").innerHTML="Try again: only letters in stafróf allowed";
		break;
	  }
	  else{
		if(str==""){
		  document.getElementById("result").innerHTML="hello";
		}
		else{
		  if(type=="encode"){
		  document.getElementById("result").innerHTML=encode(str, shift, alphabet);
		  }
		  else {
		  document.getElementById("result").innerHTML=decode(str, shift, alphabet);
		  }
		}
	  }   
	}
  }
  
