<?php

namespace App\Filament\Resources;

use App\Models\HeroItem;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use App\Filament\Resources\HeroItemResource\Pages;

class HeroItemResource extends Resource
{
    protected static ?string $model = HeroItem::class;
    protected static ?string $navigationIcon = 'heroicon-o-photo';
    protected static ?string $navigationGroup = 'Website';
    protected static ?string $modelLabel = 'Hero Slide';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\FileUpload::make('image')
                    ->image()
                    ->directory('hero-images')
                    ->required()
                    ->columnSpanFull(),
                    
                Forms\Components\TextInput::make('title')
                    ->required()
                    ->maxLength(255),
                    
                Forms\Components\Textarea::make('description')
                    ->required()
                    ->columnSpanFull(),
                    
                Forms\Components\TextInput::make('order')
                    ->numeric()
                    ->default(0),
                    
                Forms\Components\Toggle::make('is_active')
                    ->default(true),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image')
                    ->size(40),
                    
                Tables\Columns\TextColumn::make('title')
                    ->searchable()
                    ->sortable(),
                    
                Tables\Columns\IconColumn::make('is_active')
                    ->boolean(),
                    
                Tables\Columns\TextColumn::make('order')
                    ->sortable(),
            ])
            ->defaultSort('order')
            ->reorderable('order')
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
    public static function getPages(): array
    {
        return [
            'index' => Pages\ListHeroItems::route('/'),
            'create' => Pages\CreateHeroItem::route('/create'),
            'edit' => Pages\EditHeroItem::route('/{record}/edit'),
        ];
    }
}