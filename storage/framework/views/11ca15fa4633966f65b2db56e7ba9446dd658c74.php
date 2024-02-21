<!doctype html>
<html class="no-js" lang="zxx">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title><?php echo e($toptitle); ?></title>
    <meta name="author" content="themeholy">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="robots" content="INDEX,FOLLOW">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <link rel="apple-touch-icon" sizes="57x57" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg">
    <link rel="apple-touch-icon" sizes="60x60" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg">
    <link rel="apple-touch-icon" sizes="72x72" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg">
    <link rel="apple-touch-icon" sizes="76x76" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg">
    <link rel="apple-touch-icon" sizes="114x114" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg">
    <link rel="apple-touch-icon" sizes="120x120" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg">
    <link rel="apple-touch-icon" sizes="144x144" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg">
    <link rel="apple-touch-icon" sizes="152x152" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg">
    <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg">
    <link rel="icon" type="image/png" sizes="192x192" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg">
    <link rel="icon" type="image/png" sizes="32x32" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg">
    <link rel="icon" type="image/png" sizes="96x96" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg">
    <link rel="icon" type="image/png" sizes="16x16" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg">
    <link rel="manifest" href="<?php echo e(asset('assets/img/favicons/manifest.html')); ?>">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg">
    <meta name="theme-color" content="#ffffff">
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&amp;family=Jost:wght@300;400;500;600;700;800;900&amp;family=Roboto:wght@100;300;400;500;700&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo e(asset('assets/css/app.min.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('assets/css/fontawesome.min.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('assets/css/style.css')); ?>">
</head>

<body>
  <?php echo $__env->yieldContent('content'); ?>
  
  <script type="text/javascript">
    var image = "<?php echo e(asset('images/placeholder.png')); ?>"
    var userpic = <?php echo e(Js::from(auth()->user()->picture??"")); ?>;
 
    var usersemail = <?php echo e(Js::from(auth()->user()->email??"")); ?>

    var username = <?php echo json_encode(session()->get('userdetail')->fullname??"", 15, 512) ?>;
    var featured  = <?php echo e(Js::from($featured??"")); ?>;
    var popular = <?php echo e(Js::from($popular??"")); ?>

    var recent = <?php echo e(Js::from($recent??"")); ?>

    var cart = <?php echo e(Js::from(json_decode($cart->usercartdetails??''))); ?>;
    var allcourse = <?php echo e(Js::from($allcourse??"")); ?> 
    var single =  <?php echo \Illuminate\Support\Js::from($single??"")->toHtml() ?>;
    var video = <?php echo e(Js::from($video??"")); ?>

    var usercourse = <?php echo e(Js::from($usercourse??"")); ?>

    var fetchdata   = <?php echo e(Js::from($fetchdata??"")); ?>  
    var coursepurshase = <?php echo e(Js::from($coursepurshase??"")); ?>

    var unique  = <?php echo e(Js::from($unihead??"")); ?>;
    var coursesdata = <?php echo e(Js::from($coursesdata??"")); ?>

    var purchasedcourse = <?php echo e(Js::from($purchasedcourse??"")); ?>

    var currencyex = <?php echo e(Js::from($currencyex??"")); ?>

    var currencysymbol = <?php echo e(Js::from($currencysymbol??"")); ?>

    
    var word = <?php echo e(Js::from($word??"")); ?>

    var todollar = <?php echo e(Js::from($poundtodollar??"")); ?>

    var poundton  = <?php echo e(Js::from($poundton??"")); ?>

    var othersmoneys = <?php echo e(Js::from($othermoney??"")); ?>;
    var additional    = <?php echo e(Js::from( $additional??"")); ?>

    var admin = <?php echo e(Js::from($admin??"")); ?>

    var captchaimg = <?php echo e(Js::from(captcha_src())); ?>

    var nextpage = <?php echo e(JS::from($nextpage??"")); ?>

    var additionalpic = <?php echo e(JS::from($additionalpic??"")); ?>

    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/6311da2337898912e966ce56/1gburo81e';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
</script>

  <!----------- External JavaScripts ---------->
  <script src="<?php echo e(mix('js/app.js')); ?>"></script>

  <script src="<?php echo e(asset('assets/js/vendor/jquery-3.6.0.min.js')); ?>"> </script>
  <script src="<?php echo e(asset('assets/js/app.min.js')); ?>"></script>
  <script src="<?php echo e(asset('assets/js/main.js')); ?>"></script>

</body>
</html>
<?php /**PATH /Applications/XAMPP/xamppfiles/htdocs/Tmcs/resources/views/newdesign/layout/newindex.blade.php ENDPATH**/ ?>