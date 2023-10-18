/*
Create a Date Object syntex:-
================================
Date(); // 'Fri Sep 29 2023 18:52:50 GMT+0000 (Coordinated Universal Time)', typeof 'string'
Date.now(); // timestamp:- 1696013877239, typeof 'number'

new Date(); // 2023-09-29T19:03:25.937Z, typeof 'object'
new Date().getTime()//timestamp:- 1696013877239, typeof 'number'

new Date(timestamp);
new Date("YYYY-MM-DDTHH:mm:ss.sssZ");
new Date(year,monthIndex,day,hours,minutes,seconds,milliseconds);

note:-
====
timestamp:- the number of milliseconds since midnight at the beginning of 01 jan 1970 UTC

*/

const date = Date();
const timestamp1 = Date.now();
// console.log(date, typeof date);
// console.log(timestamp1,typeof timestamp1);

const myDate = new Date();
const timestamp2 = myDate.getTime();
// console.log(myDate, typeof myDate);
// console.log(timestamp2, typeof timestamp2);


/************************* create a Date Object ****************************************/
const today = new Date();
const myBirthday = new Date(723168000000);
const myBirthday2 = new Date('December 01,1992 00:00:00');
const myBirthday3 = new Date('1992-12-01T00:00:00.000Z');

const myBirthday4 = new Date('1992-12-01');
const myBirthday5 = new Date('12-01-1992');

const myBirthday6 = new Date(1992, 11, 1, 0, 0, 0);

// console.log('today', today);
// console.log('myBirthday', myBirthday);
// console.log("myBirthday2", myBirthday2);
// console.log('myBirthday3', myBirthday3);
// console.log('myBirthday4', myBirthday4);
// console.log('myBirthday5', myBirthday5);
// console.log('myBirthday6', myBirthday6);

// console.log(myBirthday === myBirthday2);
// console.log(myBirthday - myBirthday2);




// Note:-
// console.log(new Date(0));
// console.log(new Date(null));
// console.log(new Date(undefined));
// console.log(new Date(NaN));

// console.log(new Number(null));
// console.log(new Number(undefined));
// console.log(new Number(true));
// console.log(new Number(false));
// console.log(new Number(""));

/*************************** Formats of toString method  ***********************************/

const myJoiningDate = new Date();

// console.log(myJoiningDate);
// console.log('myJoiningDate.toString()', myJoiningDate.toString());
// console.log('myJoiningDate.toDateString()', myJoiningDate.toDateString());
// console.log('myJoiningDate.toTimeString()', myJoiningDate.toTimeString());

// console.log('myJoiningDate.toLocaleString()',myJoiningDate.toLocaleString(),'\n');
// console.log('myJoiningDate.toLocaleDateString()',myJoiningDate.toLocaleDateString(),'\n');
// console.log('myJoiningDate.toLocaleTimeString()',myJoiningDate.toLocaleTimeString(),'\n');

// console.log('myJoiningDate.toISOString()', myJoiningDate.toISOString());
// console.log('myJoiningDate.toUTCString()', myJoiningDate.toUTCString());
// console.log('myJoiningDate.toJSON()', myJoiningDate.toJSON());

/**************  To get Date, Month and Year or Time ***********/

const _date = new Date();

const [day, date_, month, year, hours, minutes, seconds, milliseconds, LocaleTimeString] = [
    _date.getDay(),
    _date.getDate(),
    _date.getMonth(),
    _date.getFullYear(),
    _date.getHours(),
    _date.getMinutes(),
    _date.getSeconds(),
    _date.getMilliseconds(),
    _date.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', timeZoneName: "short" })
]

// console.log(day, date_, month, year, hours, minutes, seconds, milliseconds);

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];

const am_pm = hours < 12 ? 'AM' : 'PM';

// console.log(
//     `Current day name, date & time:-
//     ${dayNames[day]} ${date_}-${month + 1}-${year}  ${hours}:${minutes} ${am_pm}`
// );

// console.log(
//     `Current date & time: ${date_}-${month + 1}-${year}  ${LocaleTimeString}`
// );



const seconds1 = Math.floor(Date.now() / 1000);
const seconds2 = Math.floor(_date.getTime() / 1000);
// console.log('seconds1', seconds1);
// console.log('seconds2', seconds2);


const now = new Date();
const locales = 'en-IN';
const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Asia/Kolkata',
    timeZoneName: 'long',
};

// console.log(now.toLocaleString(locales, options));

const Current_DayandDate = new Date();
// console.log(Current_DayandDate.toLocaleString('en-IN', {
//     weekday:'short',
//     day:'2-digit',
//     month:'2-digit',
//     year:'2-digit',
//     hour:'2-digit',
//     minute:'2-digit',
//     second:'2-digit',
//     timeZone:'Asia/Kolkata',
//     timeZoneName:'short',
// }));


/*
Locales:-
*********
To format dates and times using English in India, you can use the locale code 'en-IN'.


Date-time component options:-
*****************************
const options = {
    weekday: 'long'/ 'short'/'narrow',
    day/month/year/hour/minute/second: 'numeric'/"2-digit",
    hour12: true/false,
    timeZone: 'Asia/Kolkata',
    timeZoneName: 'long'/'short'/'longOffset'/'shortOffset'/'longGeneric'/'shortGeneric',
};
*/


/************************************** Note:- ****************************************
#Style shortcuts
================
dateStyle
The date formatting style to use when calling format(). Possible values are "full", "long", "medium", and "short".

timeStyle
The time formatting style to use when calling format(). Possible values are "full", "long", "medium", and "short".

#Note: 
=======
dateStyle and timeStyle can be used with each other, but not with other date-time component options (e.g. weekday, hour, month, etc.).

******************************************************************************/

// *Using DateTimeFormat

const todayDate = new Date();
console.log(new Intl.DateTimeFormat().format(today));


// *Using dateStyle

console.log(new Intl.DateTimeFormat('en-IN',{
    dateStype:'full',
    timeZone:'Asia/Kolkata'})
    .format(Date.now()));

// *Using timeStyle 

console.log(new Intl.DateTimeFormat('en-IN',
{timeStyle:"full",
timeZone:'Asia/Kolkata',
})
.format(Date.now()));

// *Using dayPeriod

console.log(new Intl.DateTimeFormat('en-IN',{
    hour: "numeric",
    hourCycle: "h12",
    dayPeriod: "short",
    timeZone: "Asia/Kolkata",
})
.format(Date.now()));

// *Using timeZoneName:- ("short","long","shortOffset","longOffset","shortGeneric","longGeneric",)

console.log(new Intl.DateTimeFormat('en-IN',{
    dateStyle:'short',
    timeStyle:'short',
    timeZone:'Asia/Kolkata',
}).format(Date.now()));

console.log(new Intl.DateTimeFormat('en-IN',{
    dateStyle:'short',
    timeStyle:'short',
    timeZone:'Asia/Kolkata',
}).format(new Date(1992,11,1,0,0,0)));

console.log(new Date())