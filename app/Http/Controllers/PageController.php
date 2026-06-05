<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class PageController extends Controller
{
    public function welcome()
    {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }

    public function programmes()
    {
        return Inertia::render('Programmes');
    }

    public function studyAbroad()
    {
        return Inertia::render('StudyAbroad');
    }

    public function studentAdvisory()
    {
        return Inertia::render('StudentAdvisory');
    }

    public function aboutUs()
    {
        return Inertia::render('AboutUs');
    }

    public function contact()
    {
        return Inertia::render('Contact');
    }

    public function terms()
    {
        return Inertia::render('Terms');
    }

    public function privacy()
    {
        return Inertia::render('Privacy');
    }

    public function dashboard()
    {
        return Inertia::render('Dashboard');
    }
}
