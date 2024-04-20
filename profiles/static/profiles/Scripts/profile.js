document.addEventListener('DOMContentLoaded', function() {
    let pictureholder = document.getElementsByClassName("picture-holder")[0];
    let modal = document.getElementById("modal");
    let arrow = document.getElementById("arrow");


    let insideModalorPicture = false;



    // Function to show modal
    function showModal() {
        modal.classList.add("Open-modal");
        modal.classList.remove("Close-modal");
        arrow.classList.add("arrowup")
        arrow.classList.remove("arrowdown")
        console.log('Modal should appear now');
    }

    // Function to hide modal
    function hideModal() {

        modal.classList.remove("Open-modal");
        modal.classList.add("Close-modal");
        arrow.classList.remove("arrowup");
        arrow.classList.add("arrowdown")
        console.log('Modal should disappear now');
    }

    pictureholder.addEventListener("mouseenter", ()=>{
        insideModalorPicture = true;
    })

    pictureholder.addEventListener("mouseover", ()=>{
        showModal();

    })

    pictureholder.addEventListener("mouseleave", ()=>{
        insideModalorPicture = false;
        
        setTimeout(()=>{
            if(!insideModalorPicture){
            hideModal()
                }
        }, 200)
    })


    modal.addEventListener("mouseenter", ()=>{
        insideModalorPicture = true;

    })

    modal.addEventListener("mouseleave", ()=>{
        insideModalorPicture = false;
        
        setTimeout(()=>{
            if(!insideModalorPicture){
            hideModal()
                }
        }, 200)

    })

    






    let burger = document.getElementsByClassName("hamburger-menu")[0];
    let burgerclose = true;

    let lists = document.getElementById("lists");

    burger.addEventListener("click", ()=>{
        burgerclose = !burgerclose;

        if(burgerclose === true){
            lists.classList.remove("open-menu");
            lists.classList.add("closed-menu");
        }else{
            lists.classList.add("open-menu");
            lists.classList.remove("closed-menu");
        }
    })
});
