<?php

namespace App\Filament\Resources\HeroItemResource\Pages;

use App\Filament\Resources\HeroItemResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateHeroItem extends CreateRecord
{
    protected static string $resource = HeroItemResource::class;
}
