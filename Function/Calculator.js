const a = parseInt(prompt("연산자를 입력하세요"));
const b = parseInt(prompt("피연산자를 입력하세요"));
const Operator = prompt("연산기호를 입력하세요");


function Calculator(a,b, Operator){
    switch(Operator){
        case '+':
            sum(a,b);
            break;        
            
        case '-':
            min(a,b);
            break;        
            
        case '*':
                mul(a,b);
            break;        
            
        case '/':
            div(a,b);
            break;        
        default:
                throw Error('unknown command');
        }
    }
    
const sum = (a,b) => alert(a + b);        
const min = (a,b) => alert(a - b); 
const mul = (a,b) => alert(a * b); 
const div = (a,b) => alert(a / b); 
Calculator(a,b,Operator);
