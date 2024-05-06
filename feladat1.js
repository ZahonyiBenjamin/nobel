console.log(adatok)
var elso = document.getElementById("elso")
var modalok = document.getElementById("modalok")
var cim = document.getElementById("cim")
var szoveg = document.getElementById("szoveg")


var i = 0



for (const item of adatok.prizes)
{
    elso.innerHTML += `<div class="col-2">
    <button type="button" class="btn btn-primary modal_gombok" data-bs-toggle="modal" data-bs-target="#${i}">${item.year} ${item.category}</button>
    </div>
    `
    modalok.innerHTML += `
    <div class="modal" id="${i}">
        <div class="modal-dialog">
            <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">${item.year} ${item.category}</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div id="body${i}" class="modal-body">

            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

            </div>
        </div>
    </div>`


    if (item.laureates != null)
    {
        for (const jeloltek of item.laureates)
        {
            if (jeloltek.surname != null)
            {
                document.getElementById(`body${i}`).innerHTML +=
                `
                <p>
                <b>${jeloltek.firstname} ${jeloltek.surname}:</b> <em>${jeloltek.motivation}</em>
                </p>
                `
            }
            else
            {
                document.getElementById(`body${i}`).innerHTML +=
                `
                <p>
                <b>${jeloltek.firstname}:</b> <em>${jeloltek.motivation}</em>
                </p>
                `
            }
        }
    }
    else
    {
        document.getElementById(`body${i}`).innerHTML +=
        `
        <p>
        ${item.overallMotivation}
        </p>
        `
    }


    i++
}
