const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryItem = document.querySelector('.gallery')

const imagesList = images.map(({ url, alt }) => {
  return`<li class = item-list>
           <img class=item-list__img
             src="${url}"
             alt = "${alt}">
          </li >`
  
}).join('')
 
galleryItem.insertAdjacentHTML('afterbegin', imagesList,)
console.log(galleryItem)


// const addItemList = document.createElement('li')
// addItemList.classList.add('item-list')
  
// const foo = images.map((image) => {
//   const addItemListImg = document.createElement('img')
//   addItemListImg.classList.add('item-list__img')
//   addItemListImg.src = image.url
//   addItemListImg.alt = image.alt
//   galleryItem.append(addItemList,addItemListImg)
  
// })