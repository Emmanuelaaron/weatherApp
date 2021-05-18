const myResultsTable = (hum, press, temp) => {
    const table = document.createElement('table')
    table.classList.add('table', 'table-striped')

    const thead = document.createElement('thead')
    const trhead = document.createElement('tr')
    trhead.classList.add('success')

    const tempr = document.createElement('th')
    tempr.innerHTML = 'Temp(celsius)'
    tempr.classList.add('text-light')

    const humi = document.createElement('th')
    humi.innerHTML= 'Humidity'
    humi.classList.add('text-info')

    const pressu = document.createElement('th')
    pressu.innerHTML = 'Pressure(Pa)'
    pressu.classList.add('text-primary')

    const tbody = document.createElement('tbody')
    tbody.classList.add('bg-light')
    const trbody = document.createElement('tr')

    const tempData = document.createElement('td')
    tempData.innerHTML = temp

    const humiData = document.createElement('td')
    humiData.innerHTML = hum

    const pressuData = document.createElement('td')
    pressuData.innerHTML = press

    trhead.appendChild(tempr)
    trhead.appendChild(humi)
    trhead.appendChild(pressu)

    trbody.appendChild(tempData)
    trbody.appendChild(humiData)
    trbody.appendChild(pressuData)

    thead.appendChild(trhead)
    tbody.appendChild(trbody)

    table.appendChild(thead)
    table.appendChild(tbody)


    return table
}

export default myResultsTable