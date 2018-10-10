<?php
    header("Content-type:text/html;charset=utf-8");
    error_reporting(E_ALL ^ E_DEPRECATED);
    $db=mysql_connect("localhost","root","123");
    mysql_select_db("project",$db);
    mysql_query('set names utf8');

    $usename=$_REQUEST['usename'];
    $password=$_REQUEST['password'];

    $sql="SELECT * FROM `project_table` WHERE (`t_email`='$usename')";
    $data=mysql_query($sql);
    $_data=mysql_fetch_array($data);

    if($_data){
        echo '{"res":"1"}';
    }else{
        $inset="INSERT INTO `project_table`(`t_id`, `t_email`, `t_pwd`) VALUES (null,'$usename','$password')";
        $_inset=mysql_query($inset);
        echo '{"res":"0"}';
    }
?>