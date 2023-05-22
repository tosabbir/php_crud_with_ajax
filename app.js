jQuery(document).ready(function(){
    jQuery(document).on('click','.register', function(){
        let name = jQuery('.name').val();
        let phone = jQuery('.phone').val();
        let email = jQuery('.email').val();
        let status = jQuery('.status').val();
    
        // if(name === ""){
        //     jQuery('.name').addClass('is-invalid');
        // }
        // else if(phone === ""){
        //     jQuery('.phone').addClass('is-invalid')
        // }
        // else if(email === ""){
        //     jQuery('.email').addClass('is-invalid')
        // }
        // else if(status === ""){
        //     jQuery('.status').addClass('is-invalid')
        // }


        // let flag = true ;
        if(name === ""){
            jQuery('.name').addClass('is-invalid');
            // jQuery('<badge class= "text-danger nameError">Name Field Is Required</badge>').insertAfter('.name');
            // flag = false;
        }else{
            jQuery('.name').addClass('is-valid');
            // jQuery('.nameError').remove();      
        }
        if(phone === ""){
            jQuery('.phone').addClass('is-invalid');
            // jQuery('<badge class= "text-danger phoneError">Phone Field Is Required</badge>').insertAfter('.phone');
            // flag = false;
        }else{
            jQuery('.phone').addClass('is-valid');    
            // jQuery('.phoneError').remove();          
        }
        if(email === ""){
            jQuery('.email').addClass('is-invalid');
            // jQuery('<badge class= "text-danger emailError">Email Field Is Required</badge>').insertAfter('.email');
            // flag = false;
        }else{
            jQuery('.email').addClass('is-valid');    
            // jQuery('.emailError').remove();          
        }
        // if(status === "---Select Status---"){
        //     jQuery('.status').addClass('is-invalid');
        //     jQuery('<badge class= "text-danger statusError">Status Field Is Required</badge>').insertAfter('.status');
        //     flag = false;
        // }else if((status === "Active") || (status === "Inactive")){
        //     jQuery('.status').addClass('is-valid');    
        //     jQuery('.statusError').remove();
              
        // }
        if(status === ""){
            jQuery('.status').addClass('is-invalid');
            // jQuery('<badge class= "text-danger statusError">Status Field Is Required</badge>').insertAfter('.status');
            // flag = false;
        }else{
            jQuery('.status').addClass('is-valid');    
            // jQuery('.statusError').remove();          
        }

        // if(flag){

        //    jQuery.ajax({
        //     type: "POST",
        //     url: "controllers/crud_controller.php",
        //     data:{
        //         'name': name,
        //         'phone': phone,
        //         'email': email,
        //         'status': status,
        //         'call': "insert",
        //     },
        //     success: function (response) {
        //         jQuery(".responseMessageBox").append(response)
        //     }
        //    });
        // }else{
            
        //     console.log("request not send");
        // }

        jQuery.ajax({
            type: "POST",
            url: "controllers/crud_controller.php",
            data:{
                'name': name,
                'phone': phone,
                'email': email,
                'status': status,
                'call': "insert",
            },
            success: function (response) {
                jQuery(".responseMessageBox").append(response)
            }
           });

        
    });
});