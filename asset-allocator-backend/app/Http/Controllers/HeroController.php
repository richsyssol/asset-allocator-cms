<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\HeroItem;
use Illuminate\Http\Request;

class HeroController extends Controller
{
    public function index()
    {
        $heroItems = HeroItem::where('is_active', true)
            ->orderBy('order')
            ->get();

        return response()->json($heroItems);
    }
}
