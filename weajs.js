

const input=document.querySelector(".box #input");
const btn=document.querySelector(".box #search-btn");
const temp=document.querySelector(".temp .temp-show");
const info=document.querySelector(".card .hum .value");
const vis=document.querySelector(".card .vis .value");
const pre=document.querySelector(".card .Pressure .value");
const wind=document.querySelector(".card .wind .value");
const hum=document.querySelector(".card .hum .value");


btn.addEventListener("click",async(evt) =>
{
      evt.preventDefault();
      
            if(input.value ===" "){
                  return;
            }
      
       const apikey="7c7737e6e90a3a02b0a93d9d7f256cb9";
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${apikey}`;
      try
      {
            const respose=await fetch(url);
     // console.log(response);
      const data= await respose.json();
      console.log(data)
      temp.innerText=`${Math.floor(data.main.temp)}°C`;
 console.log("btn clicked!")
 console.log("data",data)  ;
 vis.innerText=`${Math.round(data.visibility/1000).toFixed(1)}km`;
 console.log("visibility",data.visibility);
 wind.innerText=`${Math.round(data.wind.speed * 3.6)}km/h`;
 console.log("wind",data.wind.speed);
      hum.innerText=`${(data.main.humidity)}%`;
 console.log("humidity",data.main.humidity);
 pre.innerText=`${(data.main.pressure)}hPa`;
 console.log("pressure",data.main.pressure);


      }
      catch(error){
      console.error(error);
      
      }

});