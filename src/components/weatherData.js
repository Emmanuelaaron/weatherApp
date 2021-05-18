const bodyContent = () => {
    const fullBodyContent = document.createElement('div')
    fullBodyContent.classList.add(
        'vh-100', 'd-flex', 'align-items-center', 
        'justify-content-center'
    )

    const cityName = document.createElement('div')
    cityName.classList.add(
        'text-muted', 'col-5', 
        'text-center', 'display-1', 
        'my-auto'
        )
    cityName.innerHTML = 'Welcome To myWeather'
    cityName.id = 'cityName'

    const tableSide = document.createElement('div')
    tableSide.classList.add('text-warning',
    'text-center', 'bg-ifo', 
    'col-5', 
    )
    tableSide.innerHTML= 'Search for any city and get the weather Stats'
    tableSide.id = 'myTable'


    fullBodyContent.appendChild(cityName)
    fullBodyContent.appendChild(tableSide)
    return fullBodyContent
}

export default bodyContent