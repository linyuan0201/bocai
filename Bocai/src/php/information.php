<?php

    header("Content-type:text/html;charset=utf-8");
    error_reporting(E_ALL ^ E_DEPRECATED);
    $db=mysql_connect("localhost","root","1419497772zc");
    mysql_select_db("case",$db);
    mysql_query('set names utf8');

    $sql="SELECT `s_id`, `s_decrition` FROM `sign` WHERE 1";
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