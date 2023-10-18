/******* forEach ********/
const programmingLanguages = ['javascript', 'java', '#c', 'c++', 'python']

programmingLanguages.forEach(function (lan) {
    // console.log(lan);
})

programmingLanguages.forEach((lan) => {
    // console.log(lan);
})

function printMe(lan) {
    // console.log(lan);
}

programmingLanguages.forEach(printMe);


programmingLanguages.forEach((lan, index, arr) => {
    // console.log(lan, index, arr);
})


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach(item => console.log(item.languageName));