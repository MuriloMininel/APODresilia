// Lógica para busca na API.
$.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=Zt5ss0RRWEJhhqmyjC3hqGiOwqGeAKxXR4yumBwm`,
    method: "get",
    success: function(response){
        document.getElementById("texto").innerText = response.explanation
        document.getElementById("titulo").textContent = response.title
        date.setAttribute("max",response.date)
        if(response.media_type=="image"){
            document.getElementById("dia").style.backgroundImage = `url(${response.url})`
            document.getElementById("dia").style.display = "flex"
            document.getElementById("video").style.display = "none"
        }
        else if(response.media_type=="video"){
            document.getElementById("video").setAttribute("src",response.url)
            document.getElementById("dia").style.display = "none"
            document.getElementById("video").style.display = "flex"
        }
    }
})

document.getElementById("enviar").addEventListener("click",()=>{
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=Zt5ss0RRWEJhhqmyjC3hqGiOwqGeAKxXR4yumBwm&date=${date.value}`,
        method: "get",
        success: function(response){
            document.getElementById("texto").innerText = response.explanation
            document.getElementById("titulo").textContent = response.title
            date.setAttribute("max",response.date)
            if(response.media_type=="image"){
                document.getElementById("dia").style.backgroundImage = `url(${response.url})`
                document.getElementById("dia").style.display = "flex"
                document.getElementById("video").style.display = "none"
            }
            else if(response.media_type=="video"){
                document.getElementById("video").setAttribute("src",response.url)
                document.getElementById("dia").style.display = "none"
                document.getElementById("video").style.display = "flex"
            }
        }
    })
})