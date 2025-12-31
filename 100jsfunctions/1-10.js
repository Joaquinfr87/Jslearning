//1
function minutesToHours(minutes) {
    return minutes/60   
}
//2
function averageOf4Numbers(nr1, nr2, nr3, nr4) {
    return (nr1+nr2+nr3+nr4)/4    
}
//3
function concat3(string1, string2, string3, separator) {
    return string1+separator+string2+separator+string3;
}
//4
function max5(nr1, nr2, nr3, nr4, nr5) {
    let max = 0
    if(nr1>nr2) max = nr1 
    else max = nr2
    if(nr3>max) max = nr3
    if(nr4>max) max = nr4
    if(nr5>max) max = nr5
    return max
}
//5
function getMonthsNeededToWait(index1, index2) {
    if(index1<index2) return index2-index1
    else return 12-index1+index2
}
//6
function getGasolineAmount(distance, consumptionPer100Km) {
    return distance/100*2*consumptionPer100Km
}
//7
function lastNRevert(text, n) {
    return text.split('').slice(text.length-n).reverse().join('');
}
//8
function getBusinessAddress(business) {
    let array = Object.values(business.address)
    array[1] =`number ${array[1]}`
    return array.join(', ')
}
//9
function getUserObject(firstName, lastName, age) {
    return {age:age,name: firstName+" "+lastName} 
}
//10
function canDriveCar(user, car) {
    return user.age >= 18 || car.engineSize < 1000
}
//11
function areAllNumbersEven(numbers) {
    return !numbers.some(a=>a%2==1)
}
//12


