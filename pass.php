<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="stylesheet2.css">
</head>
<body>



</div>

  <?php 

$random1=mt_rand(1,3);
$random2=mt_rand(1,3);

echo '<h1 class="class1">NOBI v.s. サザエさん (ログインは下から Pass:11111)</h1>';
if($random1==1){
    echo '<img class=1 src="image2\のび太グー.jpg" alt="">';
    if($random2==1){
     
        echo '<img src="image2\さざえチョキ.jpg" alt="">';
        echo '<br>';
        echo '<img src="image2\のび太勝ち.jpg" alt="">';
   
        
    }elseif($random2==2){

        echo '<img src="image2\さざえパー.jpg" alt="">';
        echo '<br>';
        echo '<img src="image2\のび太負け.jpg" alt="">';


    }else{

        echo '<img src="image2\さざえグー.jpg" alt="">';
        echo '<br>';
        echo '<img src="image2\のび太あいこ.jpg" alt="">';
    }
}elseif($random1==2){
    echo '<img src="image2\のび太チョキ.jpg" alt="">';
    if($random2==1){
        echo '<img src="image2\さざえパー.jpg" alt="">';
        echo '<br>';
        echo '<img src="image2\のび太勝ち.jpg" alt="">';
    }elseif($random2==2){

        echo '<img src="image2\さざえグー.jpg" alt="">';
        echo '<br>';
        echo '<img src="image2\のび太負け.jpg" alt="">';
    }else{
  
        echo '<img src="image2\さざえチョキ.jpg" alt="">';
        echo '<br>';
        echo '<img src="image2\のび太あいこ.jpg" alt="">';
    }
}else{
    echo '<img src="image2\のび太パー.jpg" alt="">';
    if($random2==1){

        echo '<img src="image2\さざえグー.jpg" alt="">';
        echo '<br>';
        echo '<img src="image2\のび太勝ち.jpg" alt="">';
    }elseif($random2==2){

        echo '<img src="image2\さざえチョキ.jpg" alt="">';
        echo '<br>';
        echo '<img src="image2\のび太負け.jpg" alt="">';
    }else{

        echo '<img src="image2\さざえパー.jpg" alt="">';
        echo '<br>';
        echo '<img src="image2\のび太あいこ.jpg" alt="">';
    }   
}
?>

<form action="gate.php" method="post">
<label>Pass: </label><input type="text" name="password">
<input type="submit" value="Login">

</form>













</body>
</html>