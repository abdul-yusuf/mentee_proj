var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var icon = document.querySelector('#icon')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')


apik = "96a4b810b8d005bf9219b1748108b7b3"

var clear_d = 'https://weather-website-client.tomorrow.io/wp-content/uploads/2021/07/pexels-skitterphoto-3768-1024x575.jpg'

document.body.style.backgroundImage = `url(${clear_d})`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.height = '90vh';

function convertion(val){
    return (val - 273).toFixed(0)
}

async function request(){
    await fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
    .then(res => res.json())
    .then(data => {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var icons = data['weather']['0']['icon']
        var tempature = data['main']['temp']
        var wndspd = data['wind']['speed']
        var link = src=`http://openweathermap.org/img/wn/${ convertion(icons)}@2x.png`
        console.log(icons)
        city.innerHTML=`Weather of <span>${nameval}<span>`
        temp.innerHTML = `<span>${ convertion(tempature)} ⁰C</span>`

        sli = icons.slice(-1)

        if (sli == 'n') {
            day_time = "night";
            console.log(day_time)
          } else {
            day_time = "day";
            console.log(day_time)
          }

        var tunder_d = ''
        var tunder_n = ''
        var clear_d = 'https://weather-website-client.tomorrow.io/wp-content/uploads/2021/07/pexels-skitterphoto-3768-1024x575.jpg'
        var clear_n = ''
        var rain_d = ''
        var rain_n = ''
        var snow_d = ''
        var snow_n = ''
        var mist_d = ''
        var mist_n = ''
        icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${icons}@2x.png">`
        description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
        wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
        // document.body.style.backgroundImage = clear_d;
        // document.body.style.backgroundImage = `url(${clear_d})`;
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${descrip+'-'+day_time+'time'}')`;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.height = '90vh';
        })
};

    btn.addEventListener('click',()=>{
        request();
    });
    inputval.addEventListener('keyup',(event)=>{
        if (event.key == "Enter"){
            request();
        }
    });
