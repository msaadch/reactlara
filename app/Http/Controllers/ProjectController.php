<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia; 

class ProjectController extends Controller
{
    public function index()
    {
        return Inertia::render('MyPage'
        // , ['message' => 'Wah! Mera pehla Laravel + React page chal gaya!']
        );
    }
}
