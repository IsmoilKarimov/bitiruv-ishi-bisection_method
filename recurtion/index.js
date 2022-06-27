
// Bisekshn method
// Bisekshn usuli yordamida funksiyaning epsilon berilgan qiymat aniqlikdagi ildizini topish 
// Rekursiv dasturlashdan foydalangan holatda dasturni ildizini topish

// Oraliqqa berilgan shart  | b - a | <= E(Epsilon)


// function func(x,array){
//     for(let i=0; i<=array.length;i++){
//         F+=array[i]*Math(x,array.length-i)
//     }
//     return F      
// }  

function func(x){
    let F = Math.pow(x,3) + 3*x - 5
    return F
}

let k = 0 
function rekursiya_bisection(a, b, E){              
    // if ( func(a) * func(b) >= 0){  
    //     console.log(`Berilgan [${a};${b}] oraliqda tenglamaning ildizi mavjudlik sharti bajarilmadi!!!`)
    //     console.log(`Ildizni boshqa oraliqda qidirish tavsiya qilinadi`);
    //     return false
    //  }      
    // else if( Math.abs(b-a) >= E){   
    //         k++
    //         x = (a+b) / 2
    //         if(func(a) * func(x) < 0){
    //             console.log(k + '-qadam: ' + `[${a};${b}] oraliqda x=`+ x + `; f(${x})=${func(x)}`)
    //             return rekursiya_bisection(a,x,E)
    //         }
    //         else {
    //             console.log(k + '-qadam: ' + `[${a};${b}] oraliqda  x=`+ x + `; f(${x})=${func(x)}`)
    //             return rekursiya_bisection(x,b,E)
    //         }                        
    //     } 
    //     console.log('Ilzdining berilgan aniqlikdagi taqribiy qiymatini topish uchun sarflangan urinishlar soni:', k)
}

let a,b,E 
rekursiya_bisection(a, b, E)        
module.exports = {rekursiya_bisection, func}