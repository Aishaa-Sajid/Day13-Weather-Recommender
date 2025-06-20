let weatherCondition="";
let tempratureCel=0;
let recommendation="Enjoy your day";

weatherCondition=prompt("What's the weather like today?(Type:sunny,rainy,cloudy,snowy etc.)").toLowerCase();
tempratureCel=Number(prompt("What's the temprature in celsius?"));

if(weatherCondition === "sunny")
{
    if(tempratureCel > 25){
        recommendation="It's hot and sunny! Wear light clothes and go for a swim or find some shade!";
    }
    else if(tempratureCel >= 15){
        recommendation="It's NICE and SUNNY, perfect for walk in the park or a picnic.";
    }
    else{
        recommendation="It's sunny but a bit chilly.A light jacket might be good for your outdoor activity. ";
    }
}

else if(weatherCondition==="rainy"){
   if( tempratureCel < 10){
        recommendation="Its cold and rainy! Stay cozy indoors with a warm drink and a good book.";
   }
   else{
    recommendation="It's rainy! Grab an umbrellaand perhaps visit a museum or a cafe. ";
   }
}

else if(weatherCondition === "cloudy"){
    recommendation= "It's cloudy. A good day for indoor activities or a relaxed stroll,but may be bring a light layer.";
}

else if(weatherCondition === "snowy"){
    recommendation= "Wow it's snowing! Bundle up in warm  layers,make some hot chocolate, and enjoy the winter wonderland(Maybe build a snowman!).";
}

else{
    recommendation="Hmm, I am not sure about that weather.Whatever it is, I hope you have a great day.";
}

alert(`Weather Report: ${recommendation}`);