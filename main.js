const strikethrough = () => {
    let arguments = document.querySelector('li');
    arguments.style.textDecoration = "line-through"
}
strikethrough()

//input: id(str-representing 1 id) && url(str)
//output: set source of image with url
const imageSource = (imageId,urlLink) => {
    //identify image
    let id = document.getElementById(imageId)
    //change src to given url
    id.src= urlLink;
}

imageSource("image-1","http://www.tioxic.com/wp-content/uploads/trex_4.jpg")
imageSource("image-2","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5uOGJ6K1Dst5QyVxcP2PhTw_dq8nSfqPFKYKc8xUI26JmmFqQmbAdPmCA-siHy0iEnqw&usqp=CAU")
imageSource("image-3","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4Ul7GdwDzBXUl6wRAFdHVvkYngvtoc68iAnScnwiiTH5bVSP-Dgigc2PYV6zkUQxHOI&usqp=CAU")

//input:n/a
//output:always removed first li from arguements ul
const removeFirst = () => {
    //identify first li
    let li = document.querySelector('li')
    li.remove()
}
removeFirst()
//remove the next li
removeFirst()

//input: font size(str) && id(str)
//output: changes the size of any text on page
const changeSize = (font,textId) => {
    let text = document.getElementById(textId);
    text.style.fontSize=font
}
changeSize('100px','thing-2')

//part2

//input:arguments id
//output: dom element appened to aruguements ul
const addElement = (domElement) => {
    //identify arguements
    let arguments = document.getElementById('arguments');
    //add domelement to arguments ul
    arguments.appendChild(domElement)
}
let newImage = document.createElement('img')
addElement(newImage)

//input:newImage
//output: modifies height by 30 pixles
const modifyImage = (image) => {
    //identify image
    let picture = document.getElementById(image)
    picture.style.height = '30px'
}
//query an image element and pass it
modifyImage('image-1')

//input:element
//output: give class "invisible"
const invis = (domElement) => {
    //indentify element
    let element = document.getElementById(domElement);
    element.setAttribute('class','invisible')
}
//query element
// invis('arguments')


//part 3

//input: text (str)
//output: return new li with the given text as inner text
const addText = (text) => {
    //create li
    let li = document.createElement('li')
    li.innerText = text
    return li
}

// addText('this is a new list item')

//set stored ele as a variable
let storedEle = addText('this is a new list item')

//test element by adding to the page
addElement(storedEle)

//input:headersize(str) && text(str)
//output: returns a new header of that size
const headerSize = (header,text) => {
    let newHeader = document.createElement(`h${header}`);
    newHeader.innerText = text
    return newHeader
}
//store header size in variable and add to html page
let storedSize = headerSize("4",'this is the new header')

addElement(storedSize)