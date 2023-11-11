<?php

namespace Database\Seeders;

use App\Models\Branches;
use App\Models\BranchSelecta;
use App\Models\Selecta;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SelectaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        $supplies = [
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'BOOM-BOOM PINIPIG CHOCOLATE 60ML', 'price' => 16.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'BOOM BOOM PINIPIG VANILLA 60ML', 'price' => 16.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'BOOM BOOM CHOCO COOKIES', 'price' => 16.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'BOOM BOOM PINIPIG UBE', 'price' => 16.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'BOOM BOOM COOKIES & CREAM', 'price' => 16.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CUPS UBE 100ML', 'price' => 20.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CUPS ROCKY ROAD', 'price' => 20.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CUPS CHOCO 100ML', 'price' => 20.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CUPS DOUBLE DUTCH', 'price' => 20.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CUPS MANGO', 'price' => 20.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CUPS COOKIES AND CREAM', 'price' => 20.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'ICSTICKS MANGO SLICE 60ML', 'price' => 16.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'ICSTICKS WAFFER SWEET CORN', 'price' => 16.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'PADDLE POP IC WATER MELON TM 58ML', 'price' => 16.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'ICSTICKS COOKIES & CREAM 60ML', 'price' => 10.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'ICSTICKS QUEZO REAL 60ML', 'price' => 10.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'ICSTICKS ROCKY ROAD 60ML', 'price' => 10.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'ICSTICKS UBE KESO 60ML', 'price' => 10.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'OOH WATER MELON STICK 70ML', 'price' => 10.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'ICSTICKS PINE APPLE 70ML', 'price' => 10.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'WALLS IC SANDWICH 80ML', 'price' => 20.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CORNETTO CHOCOLATE 110ML', 'price' => 25.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CORNETTO COOKIES & CREAM 110ML', 'price' => 25.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CORNETTO HALO-HALO 110ML', 'price' => 25.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CORNETTO ROCKY ROAD 110ML', 'price' => 25.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CORNETTO UBE KESO 110ML', 'price' => 25.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CORNETTO HAZELNUT CRUNCH 110ML', 'price' => 25.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CORNETTO VANILLA 110ML', 'price' => 25.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CORNETTO DISC MATCHA COOKIE 115ML', 'price' => 30.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CORNETTO DISC NUTTY CHOCOLATE 115ML', 'price' => 30.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CORNETTO DISC MILK TEA 115ML', 'price' => 30.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CORNETTO DISC BLACK CHOCO COOKIE 115ML', 'price' => 30.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CORNETTO DISC WHITE CHOCO C&C 115ML', 'price' => 30.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'BIRTHDAY BASO CHOCO 400ML', 'price' => 50.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'BIRTHDAY BASO KESO 400ML', 'price' => 50.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'BIRTHDAY BASO UBE 400ML', 'price' => 50.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'PISTACHIO & CASHEW PINT 450ML', 'price' => 115.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'DOUBLE DUTCH 450ML', 'price' => 115.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'COOKIES & CREAM 450ML', 'price' => 115.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'COFFEE CRUMBLE 450ML', 'price' => 115.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'QUEZO REAL 450ML', 'price' => 115.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SUPREME DOUBLE DUTCH TUB 750ML', 'price' => 149.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SUPREME ROCKY ROAD TUB 750ML', 'price' => 149.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SUPREME COOKIES &CREAM TUB 750ML', 'price' => 149.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SUPREME COFEE CRUMBLE TUB 750ML', 'price' => 149.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SUPREME CHOCO ALMOND FUDGE TUB', 'price' => 149.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SUPREME QUEZO REAL TUB 750ML', 'price' => 149.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'DOUBLE SUPREME-DOUBLE DUTCH/ COOKIES & CREAM TUB 750ML', 'price' => 149.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'DOUBLE SUPREME- ROCKY ROAD/ COOKIES & CREAM TUB 750ML', 'price' => 149.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'DOUBLE SUPREME- DOUBLE DUTCH/ROCKY ROAD TUB 750ML', 'price' => 149.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CREAMDAE SUPREME 2 IN 1 BUKO PANDAN/ MANGO FLOAT 1.3L', 'price' => 185.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CREAMDAE SUPREME 2 IN 1 BROWNIE A LA MODE/ COOKIE CRUMBLE 1.3L', 'price' => 185.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CREAMDAE SUPREME 2 IN 1 COOKIES IN CREAM/CHOCO MALLOW 1.3L', 'price' => 185.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CREAMDAE SUPREME 2 IN 1 UBE KESO/HALO-HALO 1.3L', 'price' => 185.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CREAMDAE SUPREME 3 IN 1 + 1 CHOCO/KESO/UBE/MAGO 1.5L', 'price' => 149.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CREAMDAE SUPREME 2 IN 1 BUKO PANDAN/ MANGO FLOAT TUB 750ML', 'price' => 115.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CREAMDAE SUPREME 2 IN 1 COOKIES IN CREAM/CHOCO MALLOW TUB 750ML', 'price' => 115.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'CREAMDAE SUPREME 2 IN 1 UBE KESO/ HALO-HALO TUB 750ML', 'price' => 115.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA SUPER THICK CLASIC UBE ROYALE 3.0L', 'price' => 499.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA SUPER THICK CLASIC CHOCOLATE 3.0L', 'price' => 499.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA SUPER THICK CLASIC VANILLA 3.0L', 'price' => 499.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA CLASSIC SUPER THICK MANGO 1.4L', 'price' => 265.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA CLASIC SUPER THICK STRAWBERRY 1.4L', 'price' => 265.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA CLASIC SUPER THICK CHOCOLATE 1.4L', 'price' => 265.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA CLASIC SUPER THICK UBE ROYALE 1.4L', 'price' => 265.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA CLASIC SUPER THICK CLASSIC VANILLA1.4L', 'price' => 265.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA CLASSIC BUCO MELON 1.3L', 'price' => 350.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA HERSHEYS MIK CHOCOLATE WITH ALMONDS 1.3L', 'price' => 350.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA HERSHEYS CARAMEL KISS 1.3L', 'price' => 350.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA HERSHEYS COOKIES & CHOCOLATE 1.3L', 'price' => 350.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA HERSHEYS COOKIS & CREAM 1.3L', 'price' => 350.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA HERSHEYS KISSES DARK FUDGE 1.3L', 'price' => 350.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA DOUBLE DUTCH 1.3L', 'price' => 350.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA HAZELNUT BROWNIE 1.3L', 'price' => 350.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA UBE MOUNTAIN 1.3L', 'price' => 350.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA MANGO OVERLOAD 1.3L', 'price' => 350.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA HERSHEYS COOKIES & CHOCOLATE 2.5L', 'price' => 599.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA HERSHEYS KISSES ALMONDS 2.5L', 'price' => 599.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA HERSHEYS COOKIES & CREAM 2.5L', 'price' => 599.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA HERSHEYS KISSES DARK FUDGE 2.5L', 'price' => 599.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA DOUBLE DUTCH 2.5L', 'price' => 599.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA HAZELNUT BROWNIE 2.5L', 'price' => 599.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA UBE MOUNTAIN 2.5L', 'price' => 599.00],
            ['warning' => 20, 'quantity' => 0, 'product_name' => 'SELECTA MANGO OVERLOAD 2.5L', 'price' => 599.00],
        ];
        
        $branch = Branches::all();
        foreach ($supplies as $Supply) {
            
            $selecta=Selecta::create([
                'product_name' => $Supply['product_name'],
                'price' => $Supply['price'],
            ]);
            for ($i = 1; $i <= count( $branch); $i++) {
                BranchSelecta::create([
                    'branchid' => $i,
                    'selectaid'=>$selecta->id
                    ] + $Supply,
                );
            }
        }
    }
}
