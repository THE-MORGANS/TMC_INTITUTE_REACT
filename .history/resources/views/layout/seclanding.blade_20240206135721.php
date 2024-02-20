<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>{{ $toptitle }}</title>
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
    <link rel="manifest" href="{{ asset('assets/img/favicons/manifest.html')}}">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg">
    <meta name="theme-color" content="#ffffff">
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&amp;family=Jost:wght@300;400;500;600;700;800;900&amp;family=Roboto:wght@100;300;400;500;700&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('assets/css/app.min.css')}}">
    <link rel="stylesheet" href="{{ asset('assets/css/fontawesome.min.css')}}">
    <link rel="stylesheet" href="{{ asset('assets/css/style.css')}}">
</head>
<body>
    <article class=''>
        <div class="preloader grid place-content-center" >
            <div class="w-60">
                <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg" alt="preloader" class="preloader__item" />
            </div>

          </div>
        @yield('content')
    </article>
</body>
<script>
var layout = "{{ asset('image/Layer7.svg') }}";
var lay = "{{ asset('image/Layer12.svg') }}";
var image = "{{ asset('image/Images.png') }}";
var left = "{{ asset('image/Left.png') }}";
var next = "{{ asset('images/bg.png') }}";
var message = " {{ session()->get('message')??"" }} ";
var  token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
var hype =    "{{ Request::url() }}";
var cart = {{ Js::from(json_decode($cart->usercartdetails??'')) }}
var money = @js($money??"");
var email = @js(auth()->user()->email??"");
var picture = "{{ asset('image/TMC-Institute-Logo2 1 (1).png') }}";
var userimage = @js(auth()->user()->picture??"");
var username =  {{ Js::from(auth()->user()->fullname??"") }}
var usersemail = {{ Js::from(auth()->user()->email??"") }}
var userpic = {{ Js::from(auth()->user()->picture??"") }};
var Cris = "{{ asset('image/Cris 1.png') }}";
var Dusig = "{{  asset('image/Dusig 1.png') }}";
var Exra  = "{{ asset('image/Exra 1.png') }}";
var J0ne = "{{ asset('image/J 1.png') }}"
var countries = @js($countries??"");
var additional = {{ Js::from(json_decode($additional??"")) }}
var gifted_email = {{ JS::from($gifted_email??"") }}
var code  = {{ JS::from($code??"") }}
var personname = {{ JS::from($fullname??"") }}
var captchaimg = {{ Js::from(captcha_src()) }}
var userinfoma = {{ Js::from($userinfoma??"") }}
{{--  var pdffile = "{{  asset('images/ujpverxbylo7jozxnacs.pdf') }}";  --}}
</script>

<script src="{{ mix('js/app.js') }}"></script>
<script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
<script src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
<script src="{{ asset('js/swap.js') }}"></script>

<script src="{{ asset('js/uikit.js') }}"></script>
<script src="{{ asset('js/bootstrap-select.min.js') }}"></script>
 <script src="{{ asset('js/tippy.all.min.js') }}"></script>
 <script src="{{ asset('js/custom.js') }}"></script>
<script src="{{ asset('js/simplebar.js') }}"></script>
 <script src="{{ asset('js/jquery-3.6.0.min.js') }}"></script>
<script src="{{ asset('js/uikit.min.js') }}"></script>
<script src="{{ asset('js/ionicons.js') }}"></script>

<script src="{{ asset('assets/js/vendor/jquery-3.6.0.min.js')}}"> </script>
  <script src="{{ asset('assets/js/app.min.js')}}"></script>
  <script src="{{ asset('assets/js/main.js')}}"></script>

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
