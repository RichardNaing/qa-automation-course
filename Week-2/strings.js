// What is a String?

let str1 = "What is String?";
let str2 = "Astring is a sequence of charaters wrapped in!";

console.log(str1 + str2);
console.log(str1 + " " + str2);

// 1. String Length

const studentName = "RichardNaing"; // length count space as a 1 length
console.log(studentName.length);

// 2. Accessing Characters

let fileName = "20260125AAPL_Trade_FIle.log";
console.log(fileName[0]); // 2 (first charater)
console.log(fileName[5]); // 1 is the fith number.
console.log(fileName.startsWith(2026));
console.log(fileName.endsWith(File));

// 3. Changing Case

console.log(studentName.toUpperCase());
console.log(studentName.toLowerCase());

// 4. Trimming Spaces

console.log(str2.trim());
let trimItNow = "   ManySpace is not good.  "; //Trimed only front and back extra space
console.log(trimItNow.trim());

// 5. Text Slice (Start, end)

console.log(studentName.slice(0, 7));
console.log(studentName.slice(7));

// 6. Replace (SearchValue, newValue)

let replace = "The main goal is not to fear of coding!";
console.log(replace.replace("fear", "afriad"));

// 7.Includes (substring)

console.log(replace.includes("goal")); // True
console.log(replace.includes("afraid")); // False
let studentEmail = "richardnaing.gmail.com";
console.log(studentEmail.includes("@")); // False

// 8. Split (separator)

let tradeLog =
  "8=FIX.4.2|9=145|35=D|34=4|49=TDAmer|52=20090323-15:40:29|56=Nasdaq|115=XYZ|";
console.log(tradeLog.split("|"));

// 9. Concat (string1, string2,..)

console.log(str1.concat(" ", str2));

// 10. indexOf (substring)

console.log(tradeLog.indexOf("35=D"));
console.log(tradeLog.indexOf("35=1"));

// 11. startWith() and endsWith()

console.log(tradeLog.startsWith("8=FIX.4.2"));
console.log(studentEmail.endsWith("com"));

// 12. Template Literals

let wellComeMessage = `Well Come!, ${studentName}!`;
console.log(wellComeMessage);

// 13. Multi-Line Strings

let winterStormNewUpdate = `Winter storm live updates for NYC and Tri-State Area as snow, sleet and dangerous cold take over
`;
console.log(winterStormNewUpdate);

// 14. Expressions Inside Template Literrals

let day1Run = 120;
let day2Run = 140;

console.log(
  `The total running miles of ${day1Run} and ${day2Run} is ${day1Run + day2Run} miles.`,
);

// 15. Combining String Methods + Template Literals

let user = "Naim";
let score = 180;

console.log(`Runner: ${user.toLocaleUpperCase()}, Score: ${score}`);
