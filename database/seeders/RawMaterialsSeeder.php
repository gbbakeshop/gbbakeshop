<?php

namespace Database\Seeders;

use App\Models\Branches;
use App\Models\BranchRawMaterials;
use App\Models\RawMaterials;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RawMaterialsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $rowMaterialsKilo = [
            'NEY',
            'NCB',
            'NUB',
            'SPRINKLES',
            '00MY',
            '00UP',
            'FROSTY WHIP CREAM',
            'BAKER GEL',
            '00PANADERO V.',
            '00V',
            'PETRACO',
            'PINEAPPLE CRUSHED',
            '00CF',
            'MAGNOLLIA CHEESE',
            '00C',
            '00CS',
            '007G',
            'GB BLIND',
            '0010J',
            'GB EMPROVER',
            '00ALP',
            '008H',
            'Monggo',
            '005E',
            'LUNGA',
            'SHORTENING',
            'MARGARINE',
            'oil B',
            '003C',
            '0015k',
            'ALASKA EVA 305g/can',
            '00BS',
            'Gold Star (3rd)',
            'Sun Moon Star (1st)',
            '00ws',
            'H2o',
        ];
        
        for ($i = 1; $i < count($rowMaterialsKilo); $i++) {
            $ingredients = new RawMaterials;
            $ingredients->raw_materials = $rowMaterialsKilo[$i];
            $ingredients->bind = 'Kilo';
            $ingredients->save();
        }

        $branch = Branches::all();

        foreach ($branch as $branchItem) {
            for ($i=1; $i < count($rowMaterialsKilo); $i++) { 
                BranchRawMaterials::create([
                    'branchid' => $branchItem->id,
                    'raw_materials' => $rowMaterialsKilo[$i],
                    'raw_materials_id' => $i,
                    'quantity' => 0,
                    'bind' => 'Kilo',
                    'warning' => 30,
                ]);
            }
          
        
        }
    }
}
