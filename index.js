let arr=[
    {
        id:1,
        name:"zain",
        job:"frontend  develper",
        photo:"./imiges/y2.png",
        text:" Zvoluptates, voluptatibus, asperiores mollitia corporis cumque quam quod minus, officiis animi. Iure perferendis ducimus quisquam deleniti optio!"


    },
    {
        id:2,
        name:"hamad",
        job:"App develper",
        photo:"./imiges/u3.png",
        text:" hvoluptates, voluptatibus, asperiores mollitia corporis cumque quam quod minus, officiis animi. Iure perferendis ducimus quisquam deleniti optio!"



    },
    {
        id:3,
        name:"waqar",
        job:"game develper",
        photo:"./imiges/u4.png",
        text:" Wvoluptates, voluptatibus, asperiores mollitia corporis cumque quam quod minus, officiis animi. Iure perferendis ducimus quisquam deleniti optio!"



    }
]
console.log("hii")
let namee=document.querySelector(".name")
let img=document.querySelector(".photo")
let duty=document.querySelector(".duty")
let text=document.querySelector(".rand")
let left=document.querySelector(".left")
let right=document.querySelector(".right")
let job=document.querySelector(".duty")
let count=-1;
right.addEventListener("click",()=>{

    
   
    if(count==3)
    {
        count=-1;
        namee.textContent="sara john";
        img.src="./imiges/u1.png"
        job.textContent="web development"
        text.textContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero modi temp ora omnis veritatis quod architecto"
       

    }
    else
    {
        count++
        if(count==3)
        {
            count=-1;
            namee.textContent="sara john";
            img.src="./imiges/u1.png"
            job.textContent="web development"
            text.textContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero modi temp ora omnis veritatis quod architecto"
    
        }
        else{
            console.log(count)
            namee.textContent=arr[count].name;
            text.textContent=arr[count].text;
            img.src=arr[count].photo;
            job.textContent=arr[count].job;
        }
     


        
        
    }
  
})
left.addEventListener("click",()=>{
    if(count==-1)
    {
        {
            count=2;
            namee.textContent=" waqar";
            img.src="./imiges/u4.png"
            text.textContent=arr[count].text;
            img.src=arr[count].photo;
            
        }
    }
    else{
        count--;

        if(count>=0)
        {
            console.log(count)
            namee.textContent=arr[count].name;
            text.textContent=arr[count].text;
            img.src=arr[count].photo;
            job.textContent=arr[count].job;
    
    
            
          
    
        }
        else
        {
            count=3;
            namee.textContent="sara john";
            img.src="./imiges/u1.png"
            job.textContent=" web development"
            text.textContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero modi temp  ora omnis veritatis quod architecto"
          
            
        }
    }


   
  
})
let random=document.querySelector(".random")
random.addEventListener("click",()=>{

let ran=func();
console.log(ran)
    namee.textContent=arr[ran].name;
    text.textContent=arr[ran].text;
    img.src=arr[ran].photo;
    job.textContent=arr[ran].job;
})
function func()
{
    return Math.floor(Math.random()*3)
}