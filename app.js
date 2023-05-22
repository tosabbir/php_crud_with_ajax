jQuery(document).ready(function(){

    // insert form normal from 
    jQuery(document).on('click','.register', function(){
        let name = jQuery('.name').val();
        let phone = jQuery('.phone').val();
        let email = jQuery('.email').val();
        let status = jQuery('.status').val();
    
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
                jQuery('.name').val('');
                jQuery('.phone').val('');
                jQuery('.email').val('');
                jQuery('.status').val('');

                show();
                // jQuery('.name').removeClass('is-invalid', 'is-valid');
                // jQuery('.phone').removeClass('is-invalid', 'is-valid');
                // jQuery('.email').removeClass('is-invalid', 'is-valid');
                // jQuery('.status').removeClass('is-invalid', 'is-valid');
            }
           });

        
    });

    // insert form modal form 
    jQuery(document).on('click','#register', function(){
        let name = jQuery('#name').val();
        let phone = jQuery('#phone').val();
        let email = jQuery('#email').val();
        let status = jQuery('#status').val();
    
        // let flag = true ;
        if(name === ""){
            jQuery('#name').addClass('is-invalid');
            // jQuery('<badge class= "text-danger nameError">Name Field Is Required</badge>').insertAfter('#name');
            // flag = false;
        }else{
            jQuery('#name').addClass('is-valid');
            // jQuery('#nameError').remove();      
        }
        if(phone === ""){
            jQuery('#phone').addClass('is-invalid');
            // jQuery('<badge class= "text-danger phoneError">Phone Field Is Required</badge>').insertAfter('#phone');
            // flag = false;
        }else{
            jQuery('#phone').addClass('is-valid');    
            // jQuery('#phoneError')#remove();          
        }
        if(email === ""){
            jQuery('#email').addClass('is-invalid');
            // jQuery('<badge class= "text-danger emailError">Email Field Is Required</badge>').insertAfter('#email');
            // flag = false;
        }else{
            jQuery('#email').addClass('is-valid');    
            // jQuery('.emailError').remove();          
        }
        // if(status === "---Select Status---"){
        //     jQuery('#status').addClass('is-invalid');
        //     jQuery('<badge class= "text-danger statusError">Status Field Is Required</badge>').insertAfter('#status');
        //     flag = false;
        // }else if((status === "Active") || (status === "Inactive")){
        //     jQuery('#status').addClass('is-valid');    
        //     jQuery('#statusError').remove();
              
        // }
        if(status === ""){
            jQuery('#status').addClass('is-invalid');
            // jQuery('<badge class= "text-danger statusError">Status Field Is Required</badge>').insertAfter('#status');
            // flag = false;
        }else{
            jQuery('#status').addClass('is-valid');    
            // jQuery('#statusError').remove();          
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
                jQuery('#name').val('');
                jQuery('#phone').val('');
                jQuery('#email').val('');
                jQuery('#status').val('');

                // remove value form form 
                jQuery('.name').val('');
                jQuery('.phone').val('');
                jQuery('.email').val('');
                jQuery('.status').val('');

                show();
                // jQuery('#name').removeClass('is-invalid', 'is-valid');
                // jQuery('#phone').removeClass('is-invalid', 'is-valid');
                // jQuery('#email').removeClass('is-invalid', 'is-valid');
                // jQuery('#status').removeClass('is-invalid', 'is-valid');
            }
           });

        
    });


    show();
    function show(){
        jQuery.ajax({
            type: "POST",
            data: {
                'call': "show",
            },
            url: "controllers/crud_controller.php",
            success: function (response) {
                jQuery('.tableData').html(response);
            }
        });
    }

    // inactive to active reaquest here 
    jQuery(document).on('click', '.inactive', function(){
        let id = jQuery(this).val();
        jQuery.ajax({
            type: "POST",
            data: {
                'call': "active",
                'id': id,
            },
            url: "controllers/crud_controller.php",
            success: function (response) {
                show();
            }

        });
    })

    // active to inactive request here 
    jQuery(document).on('click', '.active', function(){
        let id = jQuery(this).val();
        jQuery.ajax({
            type: "POST",
            data: {
                'call': "inactive",
                'id': id,
            },
            url: "controllers/crud_controller.php",
            success: function (response) {
                show();
            }

        });
    })

    // get id from table delete button and set id to confirm delete button on modal
    jQuery(document).on('click', '.delete', function(){
        let id = jQuery(this).val();
        jQuery('#deleteModalbtn').val(id);
    })

    // finally delete request from confirmation delete button on modal 
    jQuery(document).on('click', '#deleteModalbtn', function(){
        let id = jQuery(this).val();
        
        jQuery.ajax({
            type: "POST",
            data: {
                'call': "delete",
                'id': id,
            },
            url: "controllers/crud_controller.php",
            success: function (response) {
                jQuery('#deleteModal').modal('hide');
                show();
            }

        });
    })
});