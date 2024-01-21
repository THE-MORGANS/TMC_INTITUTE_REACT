
<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  <meta name="author" content="flexkit" />
  <meta name="csrf-token" content="{{ csrf_token() }}">
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

  
  <link rel="preconnect" href="https://fonts.gstatic.com">

  <!------------------ Fonts ------------------>
  <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Allura&display=swap" rel="stylesheet">

  <!--------------- Stylesheets --------------->
  <link rel="stylesheet" href="{{ asset('css/plugins/swiper.min.css')}}" type="text/css" />
  <link rel="stylesheet" href="{{ asset('css/plugins/jquery.fancybox.css')}}" type="text/css" />
  <link rel="stylesheet" href="{{ asset('css/style.css')}}" type="text/css" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  
  <!--[if lt IE 9]>
    <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
  <![endif]-->

  <!------------- Document Title -------------->
  <title>{{ $toptitle }}</title>

</head>

<body>
  @include('newdesign.layout.header')
 

  @yield('content')
  <!------------ End Header Type 2 ------------>

  @include('newdesign.layout.footer')

  <script type="text/javascript">
    var image = "{{ asset('images/placeholder.png') }}"
    var userpic = {{ Js::from(auth()->user()->picture??"") }};
    console.log(userpic);
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
    var purchasedcourse = {{ Js::from($purchasedcourse??"")}}
    var currencyex = {{ Js::from($currencyex??"") }}
    var currencysymbol = {{ Js::from($currencysymbol??"") }}
    {{--  var currencycode = {{ Js::from($currencycode??"") }}  --}}
    var word = {{ Js::from($word??"") }}
    var todollar = {{ Js::from($poundtodollar??"") }}
    var poundton  = {{ Js::from($poundton??"")}}
    var othersmoneys = {{ Js::from($othermoney??"") }};
    
   </script>

  <!----------- External JavaScripts ---------->
  <script src="{{ mix('js/app.js') }}"></script>
  <script src="{{ asset('resources/js/app.js') }}" defer></script>

  <script src="{{ asset('js/jquery-3.6.0.min.js') }}"></script>
  <script src="{{ asset('js/uikit.min.js') }}"></script>

  <script src="{{ asset('js/plugins/jquery.min.js')}}"></script>
  <script src="{{ asset('js/plugins/bootstrap.bundle.min.js')}}"></script>
  <script src="{{ asset('js/plugins/bootstrap-slider.min.js')}}"></script>
  <script src="{{ asset('js/plugins/jquery.fancybox.js')}}"></script>
  <!-- <script src="{{ asset('js/plugins/jquery.waypoints.min.js')}}"></script> -->
  <!-- <script src="{{ asset('js/plugins/sticky.min.js')}}"></script> -->
  <script src="{{ asset('js/plugins/swiper.min.js')}}"></script>
  <script src="{{ asset('js/plugins/countdown.js')}}"></script>

  <!-------------- Footer Scripts ------------->

  <script src="{{ asset('js/theme.js')}}"></script>
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
</body>
</html>
