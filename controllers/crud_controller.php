<?php

    $call = $_POST['call'];
    $call();
  
    $con = new mysqli("localhost", "root", "", "ajax_crud");

    // $hostname = 'localhost';
    // $username = 'root';
    // $password = '';
    // $dbname = 'ajax_crud';

    // $con = mysqli_connect('$hostname','$username','$password','$dbname');

    function insert(){
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $email = $_POST['email'];
        $status = $_POST['status'];
       

        if($name === ""){
            echo '
            <div class="alert alert-info" role="alert">
                <strong>Name Field Is Required</strong> 
            </div>
            ';
        }
        if($phone === ""){
            echo '
            <div class="alert alert-info" role="alert">
                <strong>Phone Field Is Required</strong> 
            </div>
            ';
        }
        
        if($status === ""){
            echo '
            <div class="alert alert-info" role="alert">
                <strong>Status Field Is Required</strong> 
            </div>
            ';
        }
        if($email === ""){
            echo '
            <div class="alert alert-info" role="alert">
                <strong>Email Field Is Required</strong> 
            </div>
            ';
        }
        else{
            $con = new mysqli("localhost", "root", "", "ajax_crud");
            $sql = "INSERT INTO students(name,phone,email,status)VALUES('$name', '$phone', '$email', '$status')";
            $insert = $con->query($sql);
            // $insert = mysqli_query( $con, $sql );
            // $insert = mysqli_query($db_connect, "INSERT INTO `students`(`name`, `phone`, `email`, `status`) VALUES ('$name','$phone','$email','$status')");

            if($insert){
                    echo '  <div class="alert alert-info" role="alert">
                                <strong>Student Register Successfully</strong> 
                            </div>
                        ';
            }else{
                echo '  <div class="alert alert-info" role="alert">
                                <strong>Something Is Wrong</strong> 
                            </div>
                        ';
            }
        }
        

    }

?>