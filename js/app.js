/**
 * main Global Variables
 */
const sections=document.body.querySelectorAll("section");
const mainul=document.getElementById("navbar__list");
/**
 * End Global Variables
 * start building the nav
*/

////////////adding<a> dynamically as per section count in the indes.html file //////////
for (i=0;i<sections.length;i++){//repaeating the code dynamiclly .....
    let nwa=document.createElement("a")//creating <a> local variable
    let nwli = document.createElement('li'); // creating <li> local variable
    nwlia=nwli.appendChild(nwa) //making <a> child of <li>
  mainul.appendChild(nwli)  //making <li> a child of <ul>
  }

  /////////////adding content(section.data-nav) to <a> inside nav menu//////////////////
  for(i=0;i<sections.length;i++){
    let anchor=document.getElementsByTagName("a");//declaring <a> locally
  var sectionattribute=sections[i].getAttribute("data-nav"); //getting attributes of sections dynamiclly.
  anchor[i].innerText=sectionattribute// setting inner text of <a> to the ttributesof section.
  };

// Scroll to section on link click
const anchors=document.querySelectorAll("a")
anchors.forEach(function(aa,bb,cc){
    var element=aa.addEventListener("click",function(fun){
    //console.log(fun.target.innerText);
    if(fun.target.innerText===sections[bb].getAttribute("data-nav")){
      sections[bb].scrollIntoView ({ block: 'end', behavior: 'smooth' })
    };
});
});


/**
 * end of building the nav
 * observer api start
 */


const options={
    root:null,
    threshold: 0.70,///// amount of section visible (%) to declare the section visible 
};

var isIntersecting = IntersectionObserverEntry.isIntersecting;////declaring the isintersecting value
let callback=function(entries,observer){////declaring the callback function
    entries.forEach(entry=>{/////looping over each element in the observer api (the sections we have"4")
       if(entry.isIntersecting){/////if visible
         entry.target.classList.add("active")/////add active class to the section
        /////adding the active class for <a>
         anchors.forEach(function check(elm){///////////start- adding active class for <a> in nav menu...
            for(i=0;i<sections.length;i++){
              if( sections[i].classList.contains("active")===true){
              anchors[i].classList.add("active") } //////adding active class to <a>
          if(sections[i].classList.contains("active")===false){
               anchors[i].classList.remove("active")
            }
          
          } });
       }else{/////if none of the above remove the active class
        entry.target.classList.remove("active")
       }
       });
}
////declaring the observer variable...
const observer= new IntersectionObserver(callback,options);
//////looping on every section in var sections to see if it's intersecting....
sections.forEach(function(sec){
    observer.observe(sec)
    });
/**
 *  btn to go to top
 */
    const btn= document.body.querySelector(".upbtn");///declaring the btn var

window.onscroll=function(){/////when to show the button

  if(pageYOffset>=200){/////didnt make it to the upmost top figured 200 is okay
    btn.style.display="block"///////displaying the button
  }else{

    btn.style.display="none"/////keping the button invisible
  };
}

btn.onclick=function(){//// adding the function to go to the top in smooth behavior
window.scrollTo({top: 0, behavior: 'smooth'});

}