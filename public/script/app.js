
(function(){
    function start(){
        console.log("App stared..");

            let deleteButtons = document.querySelectorAll('.btn-danger');

            for(button of deleteButtons)
            {
                button.addEventListener('click', (event)=>{
               if(!confirm("Are you sure?"))
               {
                   event.preventDefault();
                   window.location.assign("/book-list");
               }
                });
            }
    }
    window.addEventListener("load", start);

})();