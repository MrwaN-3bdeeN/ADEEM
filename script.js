
function googleTranslateElementInit()
 {
   new google.translate.TranslateElement({ pageLanguage: 'en'},
   'google_translate_element');
}





function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,ar',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}

const switchButton = document.getElementById('language-switcher');

// Function to switch to Arabic
function switchToArabic() {
    const googleTranslateElement = document.querySelector('.goog-te-combo');
    if (googleTranslateElement) {
        googleTranslateElement.value = 'ar';
        googleTranslateElement.dispatchEvent(new Event('change'));
    }
}

// Event listener for language switcher button
switchButton.addEventListener('click', switchToArabic);





const languageSelector = document.getElementById('language-selector');
const translatedContent = document.getElementById('translated-content');

// Function to fetch and display translated content
async function fetchAndDisplayTranslation(languageCode) {
    const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY`;
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            q: Array.from(translatedContent.querySelectorAll('h2, p, h3, li')).map(element => element.textContent),
            source: 'en',
            target: languageCode,
        }),
    });
    const data = await response.json();
    
    // Update DOM with translated content
    const translatedElements = translatedContent.querySelectorAll('h2, p, h3, li');
    translatedElements.forEach((element, index) => {
        element.textContent = data.translations[index].translatedText;
    });
}

// Event listener for language selector change
languageSelector.addEventListener('change', (event) => {
    fetchAndDisplayTranslation(event.target.value);
});

// Initialize with default language (English)
fetchAndDisplayTranslation('en');










const translateButton = document.getElementById('translateButton');
const targetLanguage = 'ar'; // Replace with your target language code

translateButton.addEventListener('click', () => {
  // Get all translatable elements (e.g., with a specific class)
  const elementsToTranslate = document.querySelectorAll('.translatable');

  elementsToTranslate.forEach(element => {
    const originalText = element.textContent;

    // Use your chosen translation API to translate the text
    fetch(`https://your-translation-api-endpoint?text=<span class="math-inline">\{originalText\}&target\=</span>{targetLanguage}`)
      .then(response => response.json())
      .then(data => {
        element.textContent = data.translatedText;
      })
      .catch(error => {
        console.error('Translation error:', error);
      });
  });
});


// Array
// var course1 = "css"
// var course2 = "html"
// var course3 = "javascript"

// var courses=[]
// courses[0]='css'
// courses[1]='html'
// courses[2]='js'

// ( 'css' , 'html' , 'js' )
//    0        1        2



// var courses = ['css','html','js' , 1234 , 12.7 , 5]

// courses[10]="mm"

// for (const iterator of courses) {
//     console.log(iterator);
// }

// console.log(courses);

// custom object
// var info={
//     key: value,
//     key: value
// }

// var info={
//     name:'mohamed',
//     courses:['html','css'],
//     GPA:3.9
// }

// console.log(info);

// Array Functions

var arr1 = [1, 2, 3, 4, 5, 6]
var arr2 = ['m', 'n', 'k']

// console.log(arr1);

// console.log(arr1 + arr2);
// var result = arr1.concat(arr2) // result => array

//var result = arr1.join('&')  // result => string

// 1,  2,  3,  4  elements
// 0,  1,  2,  3  index

// arr1.push(10)  // add number one 
// // 1,  2,  3,  4,  10  elements
// // 0,  1,  2,  3,  4  index
// arr1.unshift("marwa", 44) // add list
// //'marwa',  44,  1,  2,  3,  4,  10  elements
// // 0,        1,  2,  3,  4,  5,  6   index

// arr1.pop() // remove last element
// //'marwa',  44,  1,  2,  3,  4,    elements
// // 0,        1,  2,  3,  4,  5,     index
// arr1.shift() // remove first element
// // 44,  1,  2,  3,  4,   elements
// //  0,  1,  2,  3,  4,    index

//var result = arr1.slice(2)      // start, end 
//var result = arr1.splice(2, 2)    // start , number of elements
// arr1.reverse()

// console.log(arr1);

// arr1.find(fun)  // fun => callback function


// function fun(elem, index, array) {  // parameters => 1- element 2- index 3- array
//     console.log("the element: " + elem + " in the index: " + index);
//     console.log(array);
// }

// //arr1.filter (   (elem)  => { if(elem>3){ console.log(elem);}  }    )
// arr1.filter (   (elem)  => {  console.log(elem>3); }    )

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

//console.log("the result : "+ result + " and the type : " + typeof(result));

// string 

var str1 = "Hello, " 
var str2 = "Web Fundamental G1 Web"
var str =str1.concat(str2)
//"Hello, Web Fundamental G1 Web"  
// 01234 678                          // last index = 23 ===> length =24
// console.log(str.length); // 24
// console.log(typeof( str));

// var str= new String("Hello Web Fundamental G1")
// console.log( typeof( str));

// var result = str.charAt(4)  // charcater
// var result = str.charCodeAt(4)  // ascii code

// var index = str.indexOf('G')  // start search form beginning
// var index = str.indexOf('G1 Web',4)  // start from index 4
// console.log(index);
// var index = str.lastIndexOf('e')
// var result = str.substring(6, 24)

// var result = str1.concat(str2)
// var result = str1 + str2

// var result= str.replace('e','o')  // only one element
// var result= str.replaceAll('e','o')

// 13-7-24  13/7/2024
// 0123456

// str= str.toLocaleLowerCase()
// str= str.fontcolor("blue")
// str= str.italics()
// str= str.link("https://www.w3schools.com/js/js_string_search.asp")
// document.write(str);


// Math

// var pi=Math.PI
// var e=Math.E
// console.log(Math.sin(90))
// console.log(Math.cos(90))

// // 10.2  ==>  10.5
// console.log(Math.ceil(10.2))   // plus 1 in any case
// console.log(Math.floor(10.6))  // cancel . in any case  ==> trunc
// console.log(Math.round(10.6))  // round off

// console.log(Math.abs(-12));
// console.log(Math.sqrt(4));
// console.log(Math.pow(2,3));   // 2 power 3
// console.log(Math.min(2 ,3 ,1 ,5, 0));
// console.log(Math.max(2,5,1,7));

// //document.write(Math.random());  // 0 to 1
// document.write(Math.random()*10);  // 0 to 10


/// Date
/// jan   feb   ....  dec
/// 0      1    ....  11    ==> sum = 12
/// sun   mon   ....  sat
/// 0      1    ....  6     ==> sum = 7

// var date = new Date() // current date
var date = new Date(2024,11,10)
// // date.setDate(12)
// // date.setHours(21)
// // date.setMinutes(30)
// // date.setSeconds(30)
// // //document.write(date.getFullYear());
// // //document.write(date.toLocaleDateString());
// // document.write(date.toLocaleTimeString());

// document.write(date.toLocaleTimeString())

// Error

try{
    alet('hello from try block')
}
catch(err)
{
    document.write("error name: "+ err.name+" and error message: "+err.message) 
}
finally
{
    document.write("finally block")
}
