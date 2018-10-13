<?php
    header("Content-type:text/html;charset=utf-8");
     error_reporting(E_ALL ^ E_DEPRECATED);
     $db = mysql_connect("localhost","root",""); //连接数据库   (地址 用户名 密码)
     mysql_select_db("bocweb",$db); //选择数据库 数据库名称 连接
     mysql_query("set names utf8");//设置编码格式

   $query="SELECT * FROM `cgla-load`";
   $result=mysql_query($query);

// if(mysqli_query($conn,$query)){
//     echo '加载完成！';
// }else{
//     echo '加载失败！'.mysqli_error($conn)
// };

$lilist=array();
while($ord=mysql_fetch_array($result)){
$lilist[]=$ord;
}
;

echo json_encode($lilist);
// echo 1;
?>