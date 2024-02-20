<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>{{ $toptitle?$toptitle:'Document' }}</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css">
    {{--  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">  --}}
    <meta charset="utf-8">
<meta name="language" content="en"/>
<meta name="description" content="We Are The Leading And Specialist Provider Of Specialized Corporate Training Including Governance, Risk & Compliance, Financial Crime, And Leadership Training Focused On Cultivating The Right Attitude And Skills In Your Teams."/>
<meta name="keyword" content="TMC Institute, Best Learning Management System, Affordable Price For E-Learning Platform, Learn at your comfort, Fast Track your Career, "/>
<meta name="author" content="TMC Institute"/>

<link rel="canonical" href="https://tmcinstitute.com/" />

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

    <link rel="shortcut icon" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg" type="image/x-icon"/>
    <link rel="stylesheet" href="{{ asset('assets/css/app.min.css')}}">
    <link rel="stylesheet" href="{{ asset('assets/css/fontawesome.min.css')}}">
    <link rel="stylesheet" href="{{ asset('assets/css/style.css')}}">

</head>
<body>
    <div class=''>
        <div class="preloader grid place-content-center" >
            <div class="w-60">
                <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg" alt="preloader" class="preloader__item" />
            </div>

          </div>
    @yield('content')
    </div>
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
