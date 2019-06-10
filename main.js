//slide show

const shImagesCount = 6;
const timeOut = 1500;
let timeCount = 0;

let index = 0;
let image = document.getElementById("mainImage");

function setImage()
{
    image.src = "sh" + index + ".jpg";
    image.alt = "image " + index;
}

function changeImage()
{
    if(index < shImagesCount-1)
    {
        index++;
    }else
    {
        index = 0;
    }
    setImage();

   
}

function imageHandle()
{
    if(timeCount >= timeOut)
    {
        changeImage();
        timeCount = 0;
    }else if(timeCount > timeOut / 2)
    {
        image.style.opacity = (1 - (timeCount / timeOut)) * 2;
        timeCount++;
    }else
    {
        image.style.opacity = timeCount / timeOut * 2;
        timeCount++;
    }
    
    setTimeout(imageHandle, 1);
}

imageHandle();