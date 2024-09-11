<?php

namespace App\Http\Controllers;

use App\Helper\Help;
use App\Http\Resources\CourseInfomation;
use App\Http\Resources\Personvideos;
use App\Models\Additional;
use App\Models\Admin;
use App\Models\CourseInfo;
use App\Models\grouppurchase;
use App\Models\User;
use App\Models\userscourse;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Cookie;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\Cookie;
class FrontendController extends Controller
{
    public function __construct(){

    }
    public function reactview(Request $request){ 
        $cookies =  true;
        $data = 'stephen';
        $toptitle = 'TMC Institute-Home';
        return view('index', ['data'=>$data, 'cookies'=>$cookies, 'toptitle'=>$toptitle, ]);
    }

    public function signup(){ 
        $toptitle = 'TMC Institute-User-Sign-Up'; 
        $currencysymbol =  (new Help)->getplace();
        $currencyex =  (new Help)->moneyconvert();
        $info = CourseInfo::orderBy('id', 'asc')->get();
        $data =  CourseInfomation::collection($info)->resolve();
        $page= 1;
        $pagdata =  $this->paginate($data, 6, $page); 

        return view('signup', ['toptitle'=>$toptitle,  'currencysymbol'=>$currencysymbol,   'coursesdata'=>$pagdata, 'currencyex'=>$currencyex,]);
    }

    public static function dashboard($data, $cart, $uni){

        return view('dashboard', ['coursesdata'=>$data, 'cart'=>$cart, 'unihead'=>$uni]);
    }
    public function login(){
        $toptitle = 'TMC Institute-User-login';
        $currencysymbol =  (new Help)->getplace();
        $currencyex =  (new Help)->moneyconvert();
        $info = CourseInfo::orderBy('id', 'asc')->get();
        $data =  CourseInfomation::collection($info)->resolve();
        $page= 1; 
        $pagdata =  $this->paginate($data, 6, $page); 
 
        return view('login', ['toptitle'=>$toptitle,  'currencysymbol'=>$currencysymbol,   'coursesdata'=>$pagdata, 'currencyex'=>$currencyex,]);
    }

    public function companylogin(){
        $toptitle = 'TMC Institute-Company-Login';
        $currencysymbol =  (new Help)->getplace();
        $currencyex =  (new Help)->moneyconvert();
        $info = CourseInfo::orderBy('id', 'asc')->get();
        $data =  CourseInfomation::collection($info)->resolve();
        $page= 1;
        $pagdata =  $this->paginate($data, 6, $page); 
        return view('companylogin', ['toptitle'=>$toptitle, 'currencysymbol'=>$currencysymbol,   'coursesdata'=>$pagdata, 'currencyex'=>$currencyex]);
    }
    public function activationmail(){ 
        $toptitle = 'TMC Institute-Activation Mail';
        return view('activationmail', ['toptitle'=>$toptitle]); 
    }
    public static function verified(){
        $toptitle = 'TMC Institute-User Verify';
        return view('verified', ['toptitle'=>$toptitle]);

    }

    public  function companyverified(){
        $toptitle = 'TMC Institute-Company Verify';
        return view('verifiedcompany', ['toptitle'=>$toptitle]);

    }

    public static  function coursedetails($data, $coursepurshase, $money){
        return view('coursedetails',['nibble'=>$data, 'coursepurshase'=>$coursepurshase, 'money'=>$money]);
    }

    public function cart($cart, $money){
        return view('cart', ['cart'=>$cart, 'money'=>$money]);
    }

    public function Main(){
        return view('mainpage');
    }

    public function Profile(Additional $add){
        $toptitle = 'TMC Institute-User Profile';
       $additional = $add->where(['user_id'=>auth()->user()->id])->first();
       $currencysymbol =  (new Help)->getplace();
        $currencyex =  (new Help)->moneyconvert();
        $info = CourseInfo::orderBy('id', 'asc')->get();
        $data =  CourseInfomation::collection($info)->resolve();
        $page= 1;
        $pagdata =  $this->paginate($data, 6, $page); 

        return view('profile', ["additional"=>$additional, 'toptitle'=>$toptitle,  'currencysymbol'=>$currencysymbol,   'coursesdata'=>$pagdata, 'currencyex'=>$currencyex,]);
    }

    public function Input(){
        return view('input');
    }

    public function contact(Additional $add){
        $countries = $this->list_countries();
        $additional = $add->where(['user_id'=>auth()->user()->id])->first();
         $help = new Help();
         $currencysymbol =  (new Help)->getplace(); 
         $userinfoma = $help->getplace();
        $toptitle = 'TMC Institute-User Details';
        $currencyex =  (new Help)->moneyconvert();
        $info = CourseInfo::orderBy('id', 'asc')->get();
        $data =  CourseInfomation::collection($info)->resolve();
        $page= 1;
        $coursesdata =  $this->paginate($data, 6, $page);
        return view('newdesign.contact', compact('countries', 'currencyex', 'additional', 'coursesdata','currencysymbol', 'toptitle', 'userinfoma'));
    }

    public function residential(){
        return view('residential');
    }

    public static function invoiceshow(){
        return view('invoice');
    }

    public function snatika(Additional $add){
        $countries = $this->list_countries();
        $additional = $add->where(['user_id'=>auth()->user()->id])->first();
         $help = new Help();
         $currencysymbol =  (new Help)->getplace(); 
         $userinfoma = $help->getplace();
        $toptitle = 'TMC Institute-User Details';
        $currencyex =  (new Help)->moneyconvert();
        $info = CourseInfo::orderBy('id', 'asc')->get();
        $data =  CourseInfomation::collection($info)->resolve();
        $page= 1;
        $coursesdata =  $this->paginate($data, 6, $page);
        return view('newdesign.snatika', compact('countries', 'currencyex', 'additional', 'coursesdata','currencysymbol', 'toptitle', 'userinfoma'));
    }

    public function question(){
        $toptitle = 'TMC Institute';
        return view('question', ['toptitle'=>$toptitle]);
    }

    public function Adminreg(){
        $toptitle = 'TMC Institute-Company Registration';
        $currencysymbol =  (new Help)->getplace();
        $currencyex =  (new Help)->moneyconvert();
        $info = CourseInfo::orderBy('id', 'asc')->get();
        $data =  CourseInfomation::collection($info)->resolve();
        $page= 1;
        $pagdata =  $this->paginate($data, 6, $page); 

        return view('adminreg', ['toptitle'=>$toptitle, 'currencysymbol'=>$currencysymbol,   'coursesdata'=>$pagdata, 'currencyex'=>$currencyex,]); 
        
    }

    public function gifted($code, $email,  $recent){
        $toptitle = 'TMC Institute-User Registration';
        
        return view('gifted',['gifted_email'=>$email, 'code'=>$code, 'fullname'=>$recent->fullname, 'toptitle'=>$toptitle]);
    }

    public function mycourses( $personvideos){
        return view('mycourses',["videos"=>$personvideos]);
    }

    public function aboutcourse($id, CourseInfo $courseinfo){
        $course =  $courseinfo->find($id);
        if($course){
            return view('aboutcourse', ['coursedetail'=>$course]);
        }else{
            return redirect('/mycourses');
        }

    }

    public function pdftest(){
        return view('pdftest');
    }

    public function privacy(){
        $toptitle = 'TMC Institute-Privacy';
        $currencysymbol =  (new Help)->getplace();
        $currencyex =  (new Help)->moneyconvert();
        $info = CourseInfo::orderBy('id', 'asc')->get();
        $data =  CourseInfomation::collection($info)->resolve();
        $page= 1;
        $pagdata =  $this->paginate($data, 6, $page); 

        return view('privacy', ['toptitle'=>$toptitle, 'currencysymbol'=>$currencysymbol,   'coursesdata'=>$pagdata, 'currencyex'=>$currencyex,]);
    }
}
