function ev_keresese()
{
    document.getElementById("evlista").innerHTML = ""
    var keresett_ev = parseInt(document.getElementById("kereses_ev").value)
    var van = false
    for (const item of adatok.prizes)
    {
        if (item.laureates != null)
        {
            if (keresett_ev == item.year)
            {
                van = true
                for (const jeloltek of item.laureates)
                {
                    if (jeloltek.surname != null)
                    {
                        document.getElementById("evlista").innerHTML += 
                        `<li>
                        <b>${item.category}:</b> ${jeloltek.firstname} ${jeloltek.surname}
                        </li>`
                    }
                    else
                    {
                        document.getElementById("evlista").innerHTML += 
                        `<li>
                        <b>${item.category}:</b> ${jeloltek.firstname}
                        </li>`
                    }
                }
            }

        }
        else
        {
            if (keresett_ev == item.year)
            {
                document.getElementById("evlista").innerHTML += 
                `<li>
                <b>${item.category}:</b> ${item.overallMotivation}
                </li>`
            }
        }
    }
    if(!van)
    {
        document.getElementById("evlista").innerHTML = "Nincsenek adatok erre az évre."
    }
}
