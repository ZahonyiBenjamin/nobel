var lenyilo = document.getElementById("lenyilo")

var max = adatok.prizes[0].year
var min = adatok.prizes[adatok.prizes.length - 1].year


for (let i = max; i >= min; i--)
{
    lenyilo.innerHTML += `
    <option value="${i}">${i}</option>
    `
}

var keresett_ev = parseInt(document.getElementById("lenyilo").value)
ev_kivalasztas()
function ev_kivalasztas()
{
    document.getElementById("none2").innerHTML = ""
    keresett_ev = parseInt(document.getElementById("lenyilo").value)
    console.log(keresett_ev)
    document.getElementById("gombok").innerHTML = ""
    var van = false
    for (const item of adatok.prizes)
    {
        if (item.laureates != null)
        {
            if (keresett_ev == item.year)
            {
                document.getElementById("gombok").innerHTML += 
                `
                <button class="kategoria_gombok" data-bs-toggle="collapse" data-bs-target="#${item.category}">${item.category}</button>
                <div id="${item.category}" class="collapse dobozok">
                
                </div>
                <br>
                `
                van = true
                for (const jeloltek of item.laureates)
                {
                    if (jeloltek.surname != null)
                    {
                        document.getElementById(item.category).innerHTML += `
                        <b>${jeloltek.firstname} ${jeloltek.surname}:</b> <em>${jeloltek.motivation}</em>
                        <br>
                        ` 
                    }
                    else
                    {
                        document.getElementById(item.category).innerHTML += `
                        <b>${jeloltek.firstname}:</b> <em>${jeloltek.motivation}</em>
                        <br>
                        ` 
                    }
                }
            }
        }
        if (item.laureates == null && !van)
        {
            if (keresett_ev == item.year)
            {
                document.getElementById("none2").innerHTML = "Erre az évre nincsenek adatok."
            }
        }
    }   
}


