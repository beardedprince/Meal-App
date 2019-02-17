     
                const button =  document.getElementById('btn');
                const modal = document.getElementById('modals');
        
                const distroy = document.getElementsByClassName('close')[0];

                button.onclick = function() {
                    modal.style.display = "block";
                    console.log('modal oppened');
                }
                distroy.onclick = function() {
                    modal.style.display = "none"
                    console.log('modal closed');
                }
               

        





   

   