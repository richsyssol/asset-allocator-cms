<?php

namespace App\Filament\Resources\HeroItemResource\Pages;

use App\Filament\Resources\HeroItemResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListHeroItems extends ListRecords
{
    protected static string $resource = HeroItemResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
