<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Resto - Restaurant Bootstrap 4 Template by GetTemplates.co</title>
    <meta name="description" content="Resto">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- External CSS -->
    <link rel="stylesheet" href="vendor/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="vendor/select2/select2.min.css">
    <link rel="stylesheet" href="vendor/owlcarousel/owl.carousel.min.css">
    <link rel="stylesheet" href="https://cdn.rawgit.com/noelboss/featherlight/1.7.13/release/featherlight.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.0.1/css/tempusdominus-bootstrap-4.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/brands.css">

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Josefin+Sans:300,400,700">
    <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

    <!-- CSS -->
    <link rel="stylesheet" href="css/style.min.css">
    <link rel="stylesheet" href="css/style.css" />

    <!-- Modernizr JS for IE8 support of HTML5 elements and media queries -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js"></script>
</head>
<body>
    <div class="con center-content">
        <div class="box_1 glass">
            <div class="">
            <form method="POST" action="login.php">
            <div class="text-center md-3">
                <b><h2>LOGIN</h2></b>
            </div>
            <div class="mb-3">
                <label for="InputNumber" class="form-label px-2">Phone number</label>
                <input type="text" name="number" class="form-control rounded-pill px-2" id="InputNumber" placeholder="04xx xxx xxx" required onkeyup="checkNum(this)">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label px-2">Password</label>
                <input type="password" name="pass" class="form-control rounded-pill px-2" id="exampleInputPassword1" required onkeyup="hideFail()">
            </div>
                <div class="pt-5">
                    <button type="submit" class="btn rounded-pill w-100">Login</button>
                </div>
            <?php
            if (isset($_GET['success'])) {
                echo "
                    <div class='alert alert-success' role='alert' id='success'>
                        Account creation success, let's login
                    </div>
                    ";
            }
            if (isset($_GET['failed'])) {
                echo "
                    <br/>
                    <div class='alert alert-danger' role='alert' id='fail'>
                        Invalid login
                    </div>
                    ";
            }
            ?>
            <br />
        </form>
            </div>
        </div>
    </div>

    <script>
        async function checkNum(el) {
            let text = el.value;
            let li = text.split('');
            let i = parseInt(li[li.length - 1]);
            console.log(i);
            if(isNaN(i)) {
                el.value = li.slice(0,-1).join('');
            } 
        };


    </script>

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js"></script>
    <script src="vendor/bootstrap/popper.min.js"></script>
    <script src="vendor/bootstrap/bootstrap.min.js"></script>
    <script src="vendor/select2/select2.min.js "></script>
    <script src="vendor/owlcarousel/owl.carousel.min.js"></script>
    <script src="vendor/stellar/jquery.stellar.js" type="text/javascript" charset="utf-8"></script>
    <script src="vendor/isotope/isotope.min.js"></script>
    <script src="vendor/lightcase/lightcase.js"></script>
    <script src="vendor/waypoints/waypoint.min.js"></script>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>

    <script src="js/app.min.js "></script>
</body>
</html>