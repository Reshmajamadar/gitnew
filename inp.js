// var inp=document.querySelector("input")
// var btn=document.querySelector("button")
// btn.addEventListener("click",()=>{
//     console.log(inp);
//     let somevalue=inp.value;
//     document.body.style.background=somevalue
// })

var inp=document.querySelector("input")
var btn=document.querySelector("button");
var h1=document.querySelector("h1");
var select=document.querySelector("#selectTag")
btn.addEventListener("click",()=>{


                     let someValue=inp.value;
                    let selectValue=select.value;
                    console.log(selectValue);

         switch(selectValue)
         {
            case "Prime":
            isPrime(someValue)
            break;
            case "even":
            isEven(someValue)
            break;
            default:
        }
                
})
function isPrime(x)
    {
        var num=Number(x)
        let flag=false;
        for(let i=2;i<=parseInt(num/2);i++)
        {
            if(num%i==0)
            {
                flag=true;
                break
                console.log("is not");
            }
        }
            if(flag==true)
            {
            h1.innerText= `${x} is not prime`
            }
            else{
                h1.innerText=`${x} is prime`
               }
        }
        function isEven(x)
        {
            var num=Number(x)
            if(num%2==0)
            {
                h1.innerText=`${x} is a even number`
            }
            else{
                h1.innerText=`${x} in not even numbere`
            }
        }