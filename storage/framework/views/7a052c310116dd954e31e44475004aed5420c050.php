<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title><?php echo e($toptitle?$toptitle:'Document'); ?></title>
    <link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css"/>
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css">
    
    <meta charset="utf-8">
    <meta name="language" content="en"/>
    <meta name="description" content="We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams."/>
    <meta name="keyword" content="TMC Institute, Best Learning Management System, Affordable Price For E-Learning Platform, Learn at your comfort, Fast Track your Career, "/>
    <meta name="author" content="TMC Institute"/>

    <link rel="canonical" href="https://tmcinstitute.com/" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" rel="stylesheet"/>
    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg">
    <link rel="apple-touch-icon" sizes="180x180" type="image/x-icon" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg">
    <link rel="icon" type="image/png" sizes="32x32" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg">
    <link rel="icon" type="image/png" sizes="16x16" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg">

    <meta property="og:locale" content="en_US">
    <meta property="og:type" content="website">
    <meta property="og:title" content="TMC Institute | The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime">
    <meta property="og:description" content="We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams.">

    <meta property="og:url" content="https://tmcinstitute.com/">
    <meta property="og:site_name" content="TMC Institute">
    <meta property="og:image" content="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg">
    <meta property="og:image:width" content="1600">
    <meta property="og:image:height" content="863">
    <meta name="msapplication-TileColor" content="#004281">
    <meta name="theme-color" content="#ffffff">
    <meta name="mobile-web-app-capable" content="yes"> 
    <meta name="apple-mobile-web-app-title" content="TMC Institute">
    <meta name="msapplication-TileImage" content="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg">

    <link rel="stylesheet" href="<?php echo e(asset('assets/css/app.min.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('assets/css/fontawesome.min.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('assets/css/style.css')); ?>">

</head>
<body>
    <?php echo $__env->yieldContent('content'); ?> 
<script>
    var layout = "<?php echo e(asset('image/Layer7.svg')); ?>";
    var lay = "<?php echo e(asset('assets/img/normal/emailVerify.png')); ?>";
    var img1 = "<?php echo e(asset('assets/img/normal/about_1_shape1.png')); ?>";
    var img2 = "<?php echo e(asset('assets/img/normal/wcu_1_shape2.png')); ?>";
    var image = "<?php echo e(asset('image/Images.png')); ?>";
    var left = "<?php echo e(asset('image/Left.png')); ?>";
    var next = "<?php echo e(asset('images/bg.png')); ?>";
    var message = " <?php echo e(session()->get('message')??""); ?> ";
    var  token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    var hype =    "<?php echo e(Request::url()); ?>";
    var cart = <?php echo e(Js::from(json_decode($cart->usercartdetails??''))); ?>

    var money = <?php echo \Illuminate\Support\Js::from($money??"")->toHtml() ?>;
    var email = <?php echo \Illuminate\Support\Js::from(auth()->user()->email??"")->toHtml() ?>;
    var picture = "<?php echo e(asset('image/TMC-Institute-Logo2 1 (1).png')); ?>";
    var userimage = <?php echo \Illuminate\Support\Js::from(auth()->user()->picture??"")->toHtml() ?>;
    var username =  <?php echo e(Js::from(auth()->user()->fullname??"")); ?>

    var usersemail = <?php echo e(Js::from(auth()->user()->email??"")); ?>

    var userpic = <?php echo e(Js::from(auth()->user()->picture??"")); ?>;
    var Cris = "<?php echo e(asset('image/Cris 1.png')); ?>";
    var Dusig = "<?php echo e(asset('image/Dusig 1.png')); ?>";
    var Exra  = "<?php echo e(asset('image/Exra 1.png')); ?>";
    var J0ne = "<?php echo e(asset('image/J 1.png')); ?>"
    var countries = <?php echo \Illuminate\Support\Js::from($countries??"")->toHtml() ?>;
    var additional = <?php echo e(Js::from(json_decode($additional??""))); ?>

    var gifted_email = <?php echo e(JS::from($gifted_email??"")); ?>

    var code  = <?php echo e(JS::from($code??"")); ?>

    var personname = <?php echo e(JS::from($fullname??"")); ?>

    var captchaimg = <?php echo e(Js::from(captcha_src())); ?>

    var userinfoma = <?php echo e(Js::from($userinfoma??"")); ?>

    var currencysymbol = <?php echo e(Js::from($currencysymbol??"")); ?>

    var currencyex = <?php echo e(Js::from($currencyex??"")); ?>

    var coursesdata = <?php echo e(Js::from($coursesdata??"")); ?>

    
</script>
 
    <script src="<?php echo e(mix('js/app.js')); ?>"></script>
    <script src="<?php echo e(asset('assets/js/vendor/jquery-3.6.0.min.js')); ?>"> </script>
    <script src="<?php echo e(asset('assets/js/app.min.js')); ?>"></script>
    <script src="<?php echo e(asset('assets/js/main.js')); ?>"></script>
       

    <script type="text/javascript">
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
</html>
<?php /**PATH /Users/infosert/Documents/laravel_projects/TMC_INTITUTE_REACT/resources/views/layout/seclanding.blade.php ENDPATH**/ ?>