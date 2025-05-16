export default function expression () {
    const d = new Date();
    const time = d.getHours();

    console.log(time);
    
    if (time >= 5) {
        console.log('Good Morning!');
    } else if (time >= 11) {
        console.log ('Good Afternoon!');
    } else if (time >= 18) {
        console.log ('Good Evening')
    } else {
        console.log ('Good Night');
    }
}