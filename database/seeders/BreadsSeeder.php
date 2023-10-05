<?php

namespace Database\Seeders;

use App\Models\Breads;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BreadsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $bread = array(
            'ATIS-ATIS (B)',			
            'ATIS-ATIS (M)',
            'BANANA CAKE',
            'BELGIUM',
            'BINANGKAL',
            'BIRTHDAY CAKE',
            'BOHOL',
            'BUKO PIE',
            'BUNS',
            'CHEESE BREAD',
            'CHEESE DSAL',
            'CHIFFON CAKE',
            'CHOCO CUP CAKE',
            'CHOCO FLOWER',
            'CHOCO GERMAN',
            'CHOCO ROLL',
            'CHOCO SQUASH',
            'CHOCOLATE CAKE',
            'CINNAMON',
            'COCO BREAD/PANSO',
            'CORNSTARCH CAKE',
            'CRINKLES - CHOCO',
            'CRINKLES - UBE',
            'CUP CAKE',
            'DELETCHE',
            'DOUGHNUT',
            'EGG BREAD',
            'ELORDE',
            'ENSAIMADA PLAIN (B)',
            'ENSAIMADA PLAIN (S)',
            'ENSAIMADA with chz (B)',
            'ENSAIMONGGO (B)',
            'ENSAIMONGGO (S)',
            'FRANCIS (B)',
            'FRANCIS (M)',
            'GERMAN LOAF',
            'HALF MOON',
            'HOPIA',
            'TALIAN BREAD',
            'MAIS-MAIS',
            'MARBLE CAKE',
            'MAYONNAISE',
            'MONGO BREAD (B)',
            'MONGO BREAD',
            'MUNAY BREAD (B)',
            'MUNAY BREAD (M)',
            'MUSHROOM',
            'HAND BREAD',
            'PANDESAL (B)',
            'PANDESAL (S)',
            'PANDESAL (M)',
            'PAPAYA (B)',
            'PAPAYA (M)',			
            'PINEAPPLE PIE',
            'PINEAPPLE ROLL',
            'RED PIE',
            'SLICE/LOAF BREAD PLAIN',
            'SLICE/LOAF BREAD with chz',
            'SPANISH ROLL',
            'STAR BREAD (B)',
            'SWEETHEART',
            'TIRE BREAD (B)',
            'TORTA',
            'UBE CHEESE',
            'UBE ENGLISH',
            'UBE FLOWER',
            'UBE GERMAN',
            'UBE PIE',
            'UBE ROLL',
            'UBE SQUASH',
            'WHEAT BREAD',
            'YOVO-PANDAN',
            'YOYO-UBE',
            'GRACIOSA',
            'BROWNIES',
            'BUTTER SCOTCH',
            'PUTO CHEESE',
            'PUTO UBE',
            'PUTO PANDAN',
            'PEANUT BUTTER');

        for($i=0; $i < 80; $i++){
            $user = new Breads;
            $user->bread_name = $bread[$i];
            $user->price = 5;
            $user->save();
        }
    }
}
