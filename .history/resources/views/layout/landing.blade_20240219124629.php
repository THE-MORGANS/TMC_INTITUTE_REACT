<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
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

    <title>{{ $toptitle?$toptitle:'Document' }}</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet"  href="https://video-react.github.io/assets/video-react.css"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg" type="image/x-icon"/>
    {{--  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">  --}}

</head>
<body>
<article class=''>
    <div class="preloader grid place-content-center">
        <div class="w-60">
            <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1659435270/Tmc%20institute/TMC_Institute_logo_kpv3d4.jpg" alt="preloader" class="preloader__item" />
        </div>

      </div>
{{--  @include('partials.navbar')  --}}
@yield('content')
{{--  @include('partials.footer')  --}}
</article>
</body>
<script>

   var app = {{ Js::from($data??"") }};
    var cookies = @json($cookies??"");
   var picture = "{{ asset('image/TMC-Institute-Logo2 1 (1).png') }}";
   var mainimg = "{{  asset('image/Image.png') }}";
   var videoimg = "{{ asset('image/Video call.png')  }}";
   var audio = "{{ asset('image/Vector.png') }}";
   var live = "{{  asset('image/Vector (1).png') }}";
   var records = "{{  asset('image/Vector (2).png') }}";
   var groups = "{{ asset('image/Group.png') }}";
   var image = "{{ asset('image/Images.png') }}";
   var rectangle = "{{ asset('image/Rectangle 2870.png') }}"
   var rectangle2 = "{{ asset('image/Rectangle 2870 (1).png') }}"
   var rectangle3 = "{{  asset('image/Rectangle 2870 (2).png') }}"
   var rectangle4 = "{{ asset('image/Rectangle 2870 (3).png') }}"
   var userpic = {{ Js::from(auth()->user()->picture??"") }};
    var username = @json(session()->get('userdetail')->fullname??"");
    var image4 = "{{ asset('image/Image (3).png') }}";
    var img2 = "{{ asset('image/Img (3).png') }}"
    var img3 = "{{ asset('image/Image (6).png') }}"
     var hype =    "{{ Request::url() }}";
     var fetchdata = @json($nibble??"");
       var usersemail = {{ Js::from(auth()->user()->email??"") }}
       var purchasecourse =@json($coursepurshase??"");
       var coursesdata = @json($coursesdata??"");
       var cart = {{ Js::from(json_decode($cart->usercartdetails??'')) }};
          var money = @js($money??"");
        var unique  = {{ Js::from($unihead??"") }};
        var videos = {{ Js::from($videos??'') }};
         var coursedetail = @json($coursedetail??"");
         var captchaimg = {{ Js::from(captcha_src()) }}

         {{--  var pdffile = "{{  asset('images/ujpverxbylo7jozxnacs.pdf') }}";  --}}
</script>
<script src="{{ mix('js/app.js') }}"></script>
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
<script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
<script src="{{ asset('js/swap.js') }}"></script>
</html>
