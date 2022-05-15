const submit = document.querySelector('.btn');
const celcius = document.querySelector('.celcius');
const fahrenheit = document.querySelector('.fahrenheit');
const kelvin = document.querySelector('.kelvin');
const weather_image = document.querySelector('.weather_image');

const conditionImage = {
    
    supercold: 'https://images.unsplash.com/photo-1622032493435-8bb0706ab31f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    socold: 'https://images.unsplash.com/photo-1541415569148-c6782ebe7e2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    extraCold: 'https://images.unsplash.com/photo-1512864666823-fed78bed3614?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    cold: "https://images.unsplash.com/photo-1610297130518-4037818df8e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    normalCold: "https://images.unsplash.com/photo-1604537466573-5e94508fd243?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    normal: "https://images.unsplash.com/photo-1429704658776-3d38c9990511?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1679&q=80",
    sunny: "https://images.unsplash.com/photo-1618929181291-65c1bd5b9f4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
    desert: "https://images.unsplash.com/photo-1489573280374-2e193c63726c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    sohot: 'https://images.unsplash.com/photo-1568801556940-e5b3a55fa6ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    superhot: 'https://images.unsplash.com/photo-1605180307739-7c12fdfa7a26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    fire: 'https://images.unsplash.com/photo-1573144693925-249c8159d330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80',
    sun: 'https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    muri: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    

}

let lastEdit = "celcius"

const updateLastEdit = () => {
    celcius.addEventListener('keyup' , (e)=> {
        lastEdit = 'celcius'
    })

    fahrenheit.addEventListener('keyup' , (e)=> {
        lastEdit = 'fahrenheit'
    })

    kelvin.addEventListener('keyup' , (e)=> {
        lastEdit = 'kelvin'
    })
};
updateLastEdit();


const updateImage = (temp) => {
    if ( temp < -100){
        weather_image.setAttribute('src', conditionImage.supercold)
    }else if( temp > -100&&temp <= -50 ){
        weather_image.setAttribute('src', conditionImage.socold)
    }else if(temp > -50 &&temp <= -10  ){
        weather_image.setAttribute('src', conditionImage.extraCold)
    }else if(temp > -10 && temp <= 0){
        weather_image.setAttribute('src', conditionImage.cold)
    }else if(temp > 0 && temp <= 15){
        weather_image.setAttribute('src', conditionImage.normalCold)
    }else if(temp > 15 && temp <= 25){
        weather_image.setAttribute('src', conditionImage.normal)
    }else if(temp > 25 && temp <= 35){
        weather_image.setAttribute('src', conditionImage.sunny)
    }else if(temp > 35 && temp <= 50){
        weather_image.setAttribute('src', conditionImage.desert)
    }else if(temp > 50 && temp <= 65){
        weather_image.setAttribute('src', conditionImage.sohot)
    }else if(temp > 65 && temp <= 100){
        weather_image.setAttribute('src', conditionImage.superhot)
    }else if(temp > 100 && temp <= 500){
        weather_image.setAttribute('src', conditionImage.fire)
    }else if(temp > 500){
        weather_image.setAttribute('src', conditionImage.sun)
    }else{
        weather_image.setAttribute('src', conditionImage.muri)
    }
}

const convert = (lastEdited)=> {
    if (lastEdited === 'celcius'){
        const fvlue = (parseFloat(celcius.value) * 9 / 5) + 32
        const kvlue = (parseFloat(celcius.value) ) + 273
        fahrenheit.value = Math.floor(fvlue) + ' °F'
        kelvin.value = Math.floor(kvlue)+ ' K'

    }else if (lastEdited ==='fahrenheit'){
        const cvlue = (parseFloat(fahrenheit.value) - 32) * 5 / 9
        const kvlue = (parseFloat(fahrenheit.value) - 32) * 5 / 9 + 273
        celcius.value = Math.floor(cvlue)+  ' °C'
        kelvin.value = Math.floor(kvlue)+ ' K'


    }else if (lastEdited === 'kelvin'){
        const cvlue = (parseFloat(kelvin.value)) - 273
        const fvlue = (parseFloat(kelvin.value) - 273.15) * 9 / 5 + 32
        celcius.value = Math.floor(cvlue)+ ' °C'
        fahrenheit.value = Math.floor(fvlue)+ ' °F'

    }
};

submit.addEventListener('click', () => {
    convert(lastEdit)

    let temp = 0 

    if (lastEdit === 'celcius'){
        temp =celcius.value
    }else if (lastEdit ==='fahrenheit'){
        temp = (parseFloat(fahrenheit.value) - 32) * 5 / 9
    }else if (lastEdit === 'kelvin'){
        temp = (parseFloat(kelvin.value)) - 273
    }
    updateImage(temp)
});