<?php

$conn = mysqli_connect("localhost","root","","bocweb");
mysqli_set_charset($conn,"utf8");
$query='SELECT * FROM bocweb';
$result=mysqli_query($conn,$query);

// if(mysqli_query($conn,$query)){
//     echo '加载完成！';
// }else{
//     echo '加载失败！'.mysqli_error($conn)
// };

$lilist=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($lilist);

?>




