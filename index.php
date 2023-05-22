<?php
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajax Crud</title>
    
    <!-- bootstrap cdn here  -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <!-- fontwosam cdn here  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


</head>
<body>
    <div class="container-fluid">
        <h2 class="text-center py-2">Student Registration By PHP & Ajax</h2>
        <p class="text-center py-2">This is a very simple Student Registration Project for crud operation purpose with php and ajax</p>

        <hr>
      <div class="row justify-space-between align-items-center">
        
      <!-- Students Registration Form here  -->
        <div class="col-md-4 ">
            <div class="card text-start">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Add Students</h4>
                    </div>
                    <div class="card-body">
                        
                        <!-- response message here  -->
                        <div class="responseMessageBox">
                            <!-- <div class="alert alert-info" role="alert">
                                <strong>Response Message Here</strong> 
                            </div> -->
                        </div>
                        
                        
                        <div class="mb-3 ">
                            <label for="name" class="form-label">Name:</label>
                            <input type="text"
                            class="form-control name" name="name" id="name" placeholder="Add Student Name" >
                            <!-- <badge class= "text-danger">Name Field Is Required</badge> -->
                        </div>

                        <div class="mb-3 ">
                            <label for="phone" class="form-label">Phone:</label>
                            <input type="text"
                            class="form-control phone" name="phone" id="phone" placeholder="Add Student Phone Number" >
                        </div>
                        
                        <div class="mb-3 ">
                            <label for="email" class="form-label">Email:</label>
                            <input type="email"
                            class="form-control email" name="email" id="email" placeholder="Add Student Email Address">
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">Status:</label>
                            <select class="form-select status" name="status" id="status" value="">
                                <option >---Select Status---</option>
                                <option value="1">Active</option>
                                <option value="2">Inactive</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="btn btn-info btn-sm register" id="register" name= "register" >Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- all student information show here  -->
         <div class="col-md-8 ">
            <div class="card text-start">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">All Students</h4>
                    </div>
                    <div class="card-body">
                     <div class="table-responsive-md">
                        <table class="table table-striped
                        table-hover	
                        table-borderless
                        table-primary
                        align-middle">
                            <thead class="table-light">
                                <caption>All Students</caption>
                                <tr>
                                    <th>Sl:</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody class="table-group-divider">
                                     <tr class="table-primary" >    
                                        <td>1</td>
                                        <td>Tanbir</td>
                                        <td>01784788744</td>
                                        <td>tanbir@live.com</td>
                                        <td>
                                        <button type="Submit" class="btn btn-dark btn-sm" id="statusBtn" name = "statusBtn" >Active</button>
                                        </td>
                                        <td>
                                            <button type="Submit" class="btn btn-info btn-sm"><i class="fa fa-edit"></i></button>
                                            <button type="Submit" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>Sl:</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </tfoot>
                        </table>
                     </div>
                     
                    </div>
                    
                </div>
            </div>
        </div>
      </div>
    </div>

     <!-- jquery cdn here  -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>

    <!-- bootstrap cdn here  -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>

    <!-- js file link here  -->
    <script src="app.js"></script>


</body>
</html>

<?php
    session_unset();
?>