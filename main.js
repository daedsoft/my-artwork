const contactBtn = document.querySelector('#contactBtn')
const exploreBtn = document.querySelector('#exploreBtn')
const overlay = document.querySelector('.overlay')
const contactModal = document.querySelector('.contact-modal')
const exploreModal = document.querySelector('.explore-modal')
const closeContactModal = document.querySelector('#closeContact')
const closeExploreModal = document.querySelector('#closeExplore')
const exploreItems = document.querySelectorAll('.explore-item')

contactBtn.addEventListener('click', () => {
    overlay.classList.add('show')    
    contactModal.classList.add('translate')    
})

closeContactModal.addEventListener('click', () => {
    overlay.classList.remove('show')
    contactModal.classList.remove('translate')
})

//

exploreBtn.addEventListener('click', () => {
    overlay.classList.add('show')  
    exploreModal.classList.add('translate')   
})

closeExploreModal.addEventListener('click', () => {
    overlay.classList.remove('show')  
    exploreModal.classList.remove('translate')
    try {
        viewImg.style.display = 'none'
    } catch (error) { }
})

// ******************************************************************
let globalItem
const viewImg = document.querySelector('.view-img')
const closeViewImg = document.querySelector('.close-view-img')
for (let i = 0; i < exploreItems.length; i++){
    exploreItems[i].addEventListener('click', () => {
       try {                
            let source =  exploreItems[i].getAttribute('data-image')                
            let image = viewImg.childNodes[3]
            image.setAttribute('src', source)
        
            viewImg.style.display = 'block'

            globalItem = i
        
       } catch (error) {
            console.log(error)
       }
    })
}

closeViewImg.addEventListener('click', () => {
    viewImg.style.display = 'none'        
})

// ********************************************************************

const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')

btnLeft.addEventListener('click', () => {
   try {
        let prevSource =  exploreItems[globalItem - 1].getAttribute('data-image')  
        let image = viewImg.childNodes[3]
        image.setAttribute('src', prevSource)
        globalItem -= 1
   } catch (error) {
       console.log(error)
   }
})

btnRight.addEventListener('click', () => {
    try {
         let prevSource =  exploreItems[globalItem + 1].getAttribute('data-image')  
         let image = viewImg.childNodes[3]
         image.setAttribute('src', prevSource)
         globalItem += 1
    } catch (error) {
        console.log(error)
    }
 })

 // 

 const checkReady = () => {
    const loading = document.querySelector('.loading')
    loading.style.display = 'none'    
 }

 setTimeout(checkReady, 2000)
 
 
 

