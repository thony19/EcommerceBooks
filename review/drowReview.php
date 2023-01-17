<?php
$sql = "SELECT * FROM reviews";
$resultado = $conexion -> query($sql);

if ( $resultado -> num_rows > 0 ){
    while($row = $resultado->fetch_assoc()) {
        echo
        '<div class="card">
            <div class="layer"></div>
            <div class="content">
                <div class="details">
                    <h2>
                        '.$row["name"].'
                        <br>
                    </h2>
                </div>
                <p>
                    '.$row["message"].'
                </p>
            </div>
            </div>';
    }
}

$conexion -> close();
?>






            <!-- // if(isset($_SESSION['cart'])){
                //Loop through it like any other array.
                // foreach($_SESSION['cart'] as $productId){
                    //Print out the product ID.
                    // echo $productId, '<br>';
                // }
            // } -->
        
<!-- <script>
    let testimonials = document.getElementById('testimonials');
    let name =  ?>;
    console.log(name);
	testimonials.innerHTML+=`
	<div class="card">
	<div class="layer"></div>
	<div class="content">
		<div class="details">
				<h2>
                   <br>
				</h2>
			</div>
		<p>.</p>
	</div>
	</div>
	`
</script> -->