<?php

    header("Content-type:text/html;charset=utf-8");
    error_reporting(E_ALL ^ E_DEPRECATED);
    $db=mysql_connect("localhost","root","");
    mysql_select_db("bocweb",$db);
    mysql_query('set names utf8');

    $sql="SELECT * FROM `sign` order by `s_id` asc";
    $data=mysql_query($sql);
    $results = array();

    while ($row = mysql_fetch_assoc($data)) {
    $results[] = $row;
    }
    if($results){
        echo json_encode($results);
    
    }else{
        echo mysql_error();
    }
?>