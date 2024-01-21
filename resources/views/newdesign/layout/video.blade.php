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

 <link rel="stylesheet"  href="https://video-react.github.io/assets/video-react.css"/>
  <link rel="stylesheet" href="{{ asset('css/style.css') }}"/>
  {{--  <link rel="stylesheet" href="{{ asset('css/icons.css') }}"/>  --}}
  <link rel="stylesheet" href="{{ asset('css/uikit.css') }}"/>
  <link rel="stylesheet" href="{{ asset('css/tailwind.min.css') }}"/>
  {{--  <link rel="stylesheet" href="{{ asset('css/icons.css') }}}}" />  --}}
  <link rel="shortcut icon" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg" type="image/x-icon"/>

  <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  <title>{{ $toptitle }}</title>
</head>
<body>

@yield('content')


</body>
<script type="text/javascript">
 var image = "{{ asset('images/placeholder.png') }}"
 var userpic = {{ Js::from(auth()->user()->picture??"") }};
 {{--  console.log(userpic);  --}}
 var usersemail = {{ Js::from(auth()->user()->email??"") }}
 var username = @json(session()->get('userdetail')->fullname??"");
 var featured  = {{ Js::from($featured??"") }};
 var popular = {{ Js::from($popular??"") }}
 var recent = {{ Js::from($recent??"")}}
 var cart = {{ Js::from(json_decode($cart->usercartdetails??'')) }};
var allcourse = {{ Js::from($allcourse??"")}}
var single =  @js($single??"");
var video = {{ Js::from($video??"") }}
var usercourse = {{ Js::from($usercourse??"") }}
var fetchdata   = {{ Js::from($fetchdata??"") }}
var coursepurshase = {{ Js::from($coursepurshase??"") }}
var unique  = {{ Js::from($unihead??"") }};
var coursesdata = {{ Js::from($coursesdata??"") }}
var coursecomplete = {{ Js::from($coursecomplete??"") }}

var question  = {{ Js::from($question??"")}}
{{--  var num = {{ Js::from($num??"") }}  --}}
var word = {{ Js::from($word??"") }}

{{--  var question  = {{ Js::from($question??"")}}  --}}
var num = {{ Js::from($num??"") }}

var downresult = {{ Js::from($downresult??"") }}
var greatereight = {{ Js::from($greatereight??"") }}
</script>
<script src="{{ mix('js/app.js') }}"></script>
<script src="{{ asset('js/uikit.js') }}"></script>
{{--  <script src="{{ asset('js/bootstrap-select.min.js') }}"></script>
<script src="{{ asset('js/tippy.all.min.js') }}"></script>
<script src="{{ asset('js/custom.js') }}"></script>
<script src="{{ asset('js/simplebar.js') }}"></script>  --}}
<script src="{{ asset('js/jquery-3.6.0.min.js') }}"></script>
<script src="{{ asset('js/uikit.min.js') }}"></script>
{{--  <script src="{{ asset('js/ionicons.js') }}"></script>  --}}
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
