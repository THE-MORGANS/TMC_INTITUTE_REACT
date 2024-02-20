<!doctype html>
<html class="no-js" lang="zxx">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>{{ $toptitle }}</title>
    <meta name="author" content="themeholy">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="robots" content="INDEX,FOLLOW">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <link rel="apple-touch-icon" sizes="57x57" href="assets/img/favicons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="assets/img/favicons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg">
    <link rel="apple-touch-icon" sizes="76x76" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg">
    <link rel="apple-touch-icon" sizes="114x114" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg">
    <link rel="apple-touch-icon" sizes="120x120" href="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1667831345/Tmc%20institute/fav_dmznt6.jpg">
    <link rel="apple-touch-icon" sizes="144x144" href="{{ asset('assets/img/favicons/apple-icon-144x144.png')}}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{ asset('assets/img/favicons/apple-icon-152x152.png')}}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('assets/img/favicons/apple-icon-180x180.png')}}">
    <link rel="icon" type="image/png" sizes="192x192" href="{{ asset('assets/img/favicons/android-icon-192x192.png')}}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('assets/img/favicons/favicon-32x32.png')}}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{ asset('assets/img/favicons/favicon-96x96.png')}}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('assets/img/favicons/favicon-16x16.png')}}">
    <link rel="manifest" href="{{ asset('assets/img/favicons/manifest.html')}}">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="{{ asset('assets/img/favicons/ms-icon-144x144.png')}}">
    <meta name="theme-color" content="#ffffff">
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&amp;family=Jost:wght@300;400;500;600;700;800;900&amp;family=Roboto:wght@100;300;400;500;700&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('assets/css/app.min.css')}}">
    <link rel="stylesheet" href="{{ asset('assets/css/fontawesome.min.css')}}">
    <link rel="stylesheet" href="{{ asset('assets/css/style.css')}}">
</head>

<body>
  @yield('content')
  
  <script type="text/javascript">
    var image = "{{ asset('images/placeholder.png') }}"
    var userpic = {{ Js::from(auth()->user()->picture??"") }};

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
    var additional    = {{ Js::from( $additional??"") }}
    var admin = {{ Js::from($admin??"") }}
    var captchaimg = {{ Js::from(captcha_src()) }}
    var nextpage = {{  JS::from($nextpage??"")}}
    var additionalpic = {{ JS::from($additionalpic??"") }}
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
  <script src="{{ mix('js/app.js') }}"></script>

  <script src="{{ asset('assets/js/vendor/jquery-3.6.0.min.js')}}"> </script>
  <script src="{{ asset('assets/js/app.min.js')}}"></script>
  <script src="{{ asset('assets/js/main.js')}}"></script>

</body>
</html>
