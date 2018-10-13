<?php
    header("Content-type:text/html;charset=utf-8");
     error_reporting(E_ALL ^ E_DEPRECATED);
     $db = mysql_connect("localhost","root","1669519865"); //连接数据库   (地址 用户名 密码)
     mysql_select_db("bc-cgal",$db); //选择数据库 数据库名称 连接
     mysql_query("set names utf8");//设置编码格式

   $which=$_REQUEST["val"];
   $query="SELECT * FROM `cgla` WHERE (`val` like '%$which%')";
   $result=mysql_query($query);

// if(mysqli_query($conn,$query)){
//     echo '加载完成！';
// }else{
//     echo '加载失败！'.mysqli_error($conn)
// };

$search=array();
while($ord=mysql_fetch_array($result)){
$search[]=$ord;
}


echo json_encode($search);
// echo 1;
// echo ($which);
?>