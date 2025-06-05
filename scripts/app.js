console.log('JS loaded!!');

let a = parseFloat(prompt('Enter Number for a'));
let b = parseFloat(prompt('Enter Number for b'));

// Create your variables below this line

let isEqual = a == b;              
let isStrictEqual = a === b;      
let isNotEqual = a != b;           
let isStrictNotEqual = a !== b;   

let add = a+b;
let sub = a-b;
let multiply =a*b;
let power = a**b;
let division = a/b;

let isGreaterThan = a>b;
let isGreaterOrEqual = a>=b;
let isLessThan = a<b;
let isLessOrEqual =a <= b;
let andResult =  a > 5 && b > 5
let orResult =a > 5 || b > 5;

function getBadge(value) {
    return value ? `<span class="badge bg-success">True</span>` : `<span class="badge bg-danger">False</span>`;
}

const resultsDiv = document.querySelector('#results');
resultsDiv.innerHTML = `
    <div class="container card mt-4">
        <div class="row m-2">
            <div class="col-md-3">
                <h2 class="card-title">Variables</h2>
                <p class="card-text">a: <strong>${a}</strong></p>
                <p class="card-text">b: <strong>${b}</strong></p>
            </div>
            <div class="col-md-3">
                <h2 class="card-title">Comparisons</h2>
                <p class="card-text">isEqual (a == b): <strong>${getBadge(isEqual)}</strong></p>
                <p class="card-text">isStrictEqual (a === b): <strong>${getBadge(isStrictEqual)}</strong></p>
                <p class="card-text">isNotEqual (a != b): <strong>${getBadge(isNotEqual)}</strong></p>
                <p class="card-text">isStrictNotEqual (a !== b): <strong>${getBadge(isStrictNotEqual)}</strong></p>
            </div>
            <div class="col-md-3">
                <h2 class="card-title">Mathematical</h2>
                <p class="card-text">Addition (a + b): <strong>${add}</strong></p>
                <p class="card-text">Subtraction (a - b): <strong>${sub}</strong></p>
                <p class="card-text">Multiply (a * b): <strong>${multiply}</strong></p>
                <p class="card-text">Power (a<sup>b</sup>): <strong>${power}</strong></p>
                <p class="card-text">Division (a / b): <strong>${division}</strong></p>
            </div>
            <div class="col-md-3">
                <h2 class="card-title">Logical</h2>
                <p class="card-text">isGreaterThan (a > b): <strong>${getBadge(isGreaterThan)}</strong></p>
                <p class="card-text">isGreaterOrEqual (a >= b): <strong>${getBadge(isGreaterOrEqual)}</strong></p>
                <p class="card-text">isLessThan (a < b): <strong>${getBadge(isLessThan)}</strong></p>
                <p class="card-text">isLessOrEqual (a <= b): <strong>${getBadge(isLessOrEqual)}</strong></p>
                <p class="card-text">andResult (a > 5 && b > 5): <strong>${getBadge(andResult)}</strong></p>
                <p class="card-text">orResult (a > 5 || b > 5): <strong>${getBadge(orResult)}</strong></p>
            </div>
        </div>
    </div>
`;
//2025 Build
