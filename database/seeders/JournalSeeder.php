<?php

namespace Database\Seeders;

use App\Models\Journal;
use Illuminate\Database\Seeder;

class JournalSeeder extends Seeder
{
    public function run(): void
    {
        Journal::firstOrCreate(
            ['name' => 'Next Generation Management and Innovation Review'],
            [
                'ojs_base_url' => 'https://jurnal.pusdipol.com/index.php/ngmir',
                'logo' => null,
                'description' => 'Next Generation Management and Innovation Review.',
            ]
        );
    }
}
