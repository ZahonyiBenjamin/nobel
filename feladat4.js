function szemely_keresese()
{
    document.getElementById("szemelyek").style.visibility = "visible"
    var keresett_szemely = document.getElementById("kereses_szemely").value.toLowerCase()
    var van = false
    var tablazat = document.getElementById("szemelyek")
    document.getElementById("none").innerHTML = ""

    tablazat.innerHTML = `<tr>
        <th>Név</th>
        <th>Év</th>
        <th>Kategória</th>
        <th>Motiváció</th>
    </tr>`

    if (keresett_szemely != "")
    {
        for (const item of adatok.prizes)
        {
            if (item.laureates != null)
            {
                for (const jeloltek of item.laureates)
                {
                    if (jeloltek.surname != null)
                    {
                        if (jeloltek.firstname.toLocaleLowerCase().includes(keresett_szemely) || jeloltek.surname.toLocaleLowerCase().includes(keresett_szemely))
                        {
                            van = true

                            tablazat.innerHTML += `
                            <tr>
                                <td>${jeloltek.firstname} ${jeloltek.surname}</td>
                                <td>${item.year}</td>
                                <td>${item.category}</td>
                                <td>${jeloltek.motivation}</td>
                            </tr>
                            `
                        }
                        
                    }
                    else
                    {
                        if (jeloltek.firstname.toLocaleLowerCase().includes(keresett_szemely))
                        {
                        van = true

                        tablazat.innerHTML += `
                        <tr>
                            <td>${jeloltek.firstname}</td>
                            <td>${item.year}</td>
                            <td>${item.category}</td>
                            <td>${jeloltek.motivation}</td>
                        </tr>
                        `
                        }
                    }
    
                }
            }
        }
    }
    

    if (!van)
    {
        document.getElementById("szemelyek").style.visibility = "hidden"
        document.getElementById("none").innerHTML = "Nincs ilyen személy."
    }
}
