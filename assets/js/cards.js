const cardsContainer = document.getElementById('cardsContainer');
        var cards = [
                {   
                    nama        : 'Filda Fajriati',
                    id          : 'MSTB202101111997',
                    ttl         : 'Bandung, 01 November 1997',
                    kelamin     : 'Perempuan',
                    status      : 'Married',
                    pekerjaan   : 'Pegawai Swasta',
                    warganegara : 'Korea',
                    image       : './assets/image/foto/filda.jpg'
                },
                {   
                    nama        : 'Hamdani Abdul A',
                    id          : 'MSTB202114042002',
                    ttl         : 'Bandung, 14 April 2002',
                    kelamin     : 'Laki - Laki',
                    status      : 'Jomblo',
                    pekerjaan   : 'Pegawai Swasta',
                    warganegara : 'Indonesia',
                    image       : './assets/image/foto/hamdani.jpg'
                },
                {   
                    nama        : 'Indra Prakoso P',
                    id          : 'MSTB202117031994',
                    ttl         : 'Bandung, 17 Maret 1994',
                    kelamin     : 'Laki-laki',
                    status      : 'Jomblo',
                    pekerjaan   : 'Pegawai Swasta',
                    warganegara : 'Indonesia',
                    image       : './assets/image/foto/indra.jpg'
                },
            ];
cardsContainer.innerHTML = cards.map((card) => {
    return `
        <div class="relative w-full max-w-xs mx-auto overflow-hidden transition duration-300 border shadow-lg lg:max-w-sm rounded-2xl hover:shadow-xl">
            <img class="" src="./assets/image/card-bg.png" alt="">
            <div class="absolute inset-0 grid items-center w-full gap-1 p-5 justify-items-center">
                <h2><img src="./assets/image/logo.png" class="w-28" alt=""></h2>
                <div class="flex-shrink-0 overflow-hidden rounded-full w-28 h-28">
                    <img src="${card.image}" class="object-cover object-center w-full h-full" />
                </div>
                <div class="flex flex-col items-center">
                    <div class="flex flex-col items-center mb-4">
                        <h2 class="text-3xl font-light text-center text-blue-900">${card.nama}</h2>
                        <h3 class="text-lg font-bold">${card.id}</h3>
                    </div>
                    <table class="mb-4 text-xs">
                        <tr class="">
                            <th class="text-right text-blue-900">Tempat/Tanggal Lahir</th>
                            <th class="px-2">:</th>
                            <th class="text-left">${card.ttl}</th>
                        </tr>
                        <tr>
                            <th class="text-right text-blue-900">Jenis Kelamin</th>
                            <th class="px-2">:</th>
                            <th class="text-left">${card.kelamin}</th>
                        </tr>
                        <tr>
                            <th class="text-right text-blue-900">Status</th>
                            <th class="px-2">:</th>
                            <th class="text-left">${card.status}</th>
                        </tr>
                        <tr>
                            <th class="text-right text-blue-900">Pekerjaan</th>
                            <th class="px-2">:</th>
                            <th class="text-left">${card.pekerjaan}</th>
                        </tr>
                        <tr>
                            <th class="text-right text-blue-900">Kewarganegaraan</th>
                            <th class="px-2">:</th>
                            <th class="text-left">${card.warganegara}</th>
                        </tr>
                    </table>
                    <h5 class="text-sm font-semibold text-blue-900">www.mstbootcamp.co.id</h5>
                </div>
            </div>
        </div>
    `
} ).join('')