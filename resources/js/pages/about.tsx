import { Head } from '@inertiajs/react';

import GuestLayout from '@/layouts/guest-layout';

const OrgNode = ({
    title,
    name,
    photoUrl,
}: {
    title: string;
    name?: string;
    photoUrl: string;
}) => (
    <div className="group relative z-10 flex h-full w-full flex-col items-center">
        <div className="relative h-full w-full max-w-[200px] overflow-hidden rounded-[20px] border border-gray-100 bg-white p-[2px] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            {/* Animated chroma background border using brand colors */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1f5476] via-[#2596be] to-[#ffe100] opacity-20 transition-opacity duration-500 group-hover:opacity-100"></div>

            {/* The actual light card */}
            <div className="relative z-10 flex h-full flex-col overflow-hidden rounded-[18px] bg-white p-2 text-center">
                {/* Chroma Grid Pattern */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #1f5476 1px, transparent 1px), linear-gradient(to bottom, #1f5476 1px, transparent 1px)`,
                        backgroundSize: '20px 20px',
                    }}
                ></div>

                {/* Photo Frame - Square aspect ratio for more compact height */}
                <div className="relative mb-3 aspect-square w-full shrink-0 overflow-hidden rounded-[14px] bg-gray-50 shadow-inner">
                    <img
                        src={photoUrl}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* Gradient Overlay for premium feel on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1f5476]/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                </div>

                <div className="flex flex-1 flex-col justify-center px-1 pb-1">
                    {name ? (
                        <>
                            <h3 className="relative z-10 mb-0.5 text-sm leading-tight font-bold tracking-tight text-[#1f5476] sm:text-base">
                                {name}
                            </h3>
                            <p className="relative z-10 text-[10px] leading-relaxed font-medium text-[#2596be] sm:text-xs">
                                {title}
                            </p>
                        </>
                    ) : (
                        <h3 className="relative z-10 mb-0.5 text-xs leading-relaxed font-bold tracking-wide text-[#1f5476] sm:text-sm">
                            {title}
                        </h3>
                    )}
                </div>
            </div>
        </div>
    </div>
);

export default function About() {
    return (
        <GuestLayout>
            <Head title="Tentang Kami" />

            {/* Header Section */}
            <section className="relative overflow-hidden bg-[#1f5476] px-6 py-20 lg:px-12">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                    }}
                ></div>
                <div className="relative mx-auto max-w-4xl text-center text-white">
                    <h1 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                        Tentang <span className="text-[#ffe100]">Kami</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-white/80 sm:text-xl">
                        Mengenal lebih dekat Pusat Studi Kepolisian Universitas
                        Langlangbuana, wujud kolaborasi strategis untuk keamanan
                        dan ketertiban masyarakat.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="mx-auto max-w-6xl px-6 py-16 lg:px-12 lg:py-24">
                {/* Tentang */}
                <div className="mb-20">
                    <div className="mb-8 flex items-center gap-4">
                        <h2 className="text-3xl font-bold text-[#1f5476]">
                            Fokus & Visi
                        </h2>
                    </div>
                    <p className="mb-6 text-lg leading-relaxed text-gray-700">
                        Pusat Studi Kepolisian Unla merupakan wadah kolaborasi
                        strategis antara dunia akademik, praktisi hukum, dan
                        institusi kepolisian (khususnya Polda Jawa Barat) untuk
                        mengkaji isu-isu strategis terkait kepolisian dan hukum.
                    </p>
                    <div className="grid gap-6 sm:grid-cols-3">
                        {[
                            {
                                title: 'Kajian dan Penelitian',
                                desc: 'Menghasilkan kajian ilmiah inovatif yang mendukung pemeliharaan keamanan dan ketertiban masyarakat (kamtibmas) serta tantangan sosial terkini.',
                            },
                            {
                                title: 'Rekomendasi Kebijakan',
                                desc: 'Menyusun rekomendasi kebijakan berbasis data dan kajian akademik yang mendalam untuk mendukung tugas dan fungsi Polri.',
                            },
                            {
                                title: 'Pusat Referensi',
                                desc: 'Menjadi referensi utama bagi para akademisi maupun praktisi yang ingin menggali lebih dalam mengenai isu-isu kepolisian.',
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-[#2596be]/30 hover:shadow-md"
                            >
                                <h3 className="mb-3 font-bold text-[#1f5476]">
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-600">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sejarah */}
                <div className="mb-20 rounded-3xl bg-gray-50 p-8 sm:p-12">
                    <div className="mb-8 flex items-center gap-4">
                        <h2 className="text-3xl font-bold text-[#1f5476]">
                            Sejarah Pembentukan
                        </h2>
                    </div>
                    <p className="mb-8 text-lg leading-relaxed text-gray-700">
                        Pembentukan pusat studi ini didorong oleh hubungan
                        historis yang sangat kuat antara Universitas
                        Langlangbuana dan keluarga besar Kepolisian Republik
                        Indonesia (Polri). Sejumlah pendiri kampus Unla
                        merupakan purnawirawan dan mantan pejabat di lingkungan
                        Polda Jabar.
                    </p>
                    <div className="space-y-6 border-l-2 border-[#2596be]/20 pl-6">
                        <div className="relative">
                            <div className="absolute top-1 -left-[31px] h-3 w-3 rounded-full bg-[#2596be] ring-4 ring-gray-50"></div>
                            <h4 className="font-bold text-[#1f5476]">
                                Februari 2026
                            </h4>
                            <p className="mt-2 text-gray-600">
                                Rencana pendirian dan sinergi pusat studi ini
                                mulai dimatangkan secara intensif oleh pihak
                                Polda Jabar dan Unla.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute top-1 -left-[31px] h-3 w-3 rounded-full bg-[#ffe100] ring-4 ring-gray-50"></div>
                            <h4 className="font-bold text-[#1f5476]">
                                10 Juni 2026
                            </h4>
                            <p className="mt-2 text-gray-600">
                                Posko Pusat Studi Kepolisian secara resmi
                                diluncurkan di Kampus Unla, Bandung. Peresmian
                                ini dipimpin langsung oleh Kapolda Jawa Barat,
                                Irjen Pol. Dr. Rudi Setiawan, dan dirangkaikan
                                dengan kegiatan <em>Focus Group Discussion</em>{' '}
                                (FGD) sebagai langkah awal penguatan kerja sama.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Struktur Organisasi */}
                <div>
                    <div className="mb-8 flex items-center gap-4">
                        <h2 className="text-3xl font-bold text-[#1f5476]">
                            Struktur Organisasi
                        </h2>
                    </div>
                    {/* <p className="mb-6 text-lg leading-relaxed text-gray-700">
                        Berdasarkan informasi kelembagaan pada saat
                        peluncurannya:
                    </p>
                    <div className="mb-16 grid gap-6 sm:grid-cols-2">
                        <div className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-[#2596be]/30 hover:shadow-md">
                            <div>
                                <h3 className="font-bold text-[#1f5476]">
                                    Kedudukan
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                                    Pusat Studi Kepolisian berstatus sebagai{' '}
                                    <strong className="text-[#1f5476]">
                                        unit khusus yang berada langsung di
                                        bawah supervisi Rektor Unla
                                    </strong>
                                    .
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-[#2596be]/30 hover:shadow-md">
                            <div>
                                <h3 className="font-bold text-[#1f5476]">
                                    Kepemimpinan
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                                    Unit ini diketuai oleh{' '}
                                    <strong className="text-[#1f5476]">
                                        Dr. Ahmad Johan
                                    </strong>
                                    , yang pada saat pembentukannya juga
                                    merangkap jabatan sebagai Ketua Lembaga
                                    Penelitian dan Pengabdian kepada Masyarakat
                                    (LPPM) Unla. Hubungan dengan LPPM ini
                                    mengukuhkan fungsi pusat studi tersebut
                                    sebagai perpanjangan tangan kampus dalam
                                    bidang riset kepolisian.
                                </p>
                            </div>
                        </div>
                    </div> */}

                    {/* Org Chart */}
                    <div className="mt-12 flex w-full flex-col items-center overflow-x-hidden rounded-3xl border border-gray-100 bg-gray-50/50 px-4 py-12 shadow-sm md:px-8">
                        {/* REKTOR */}
                        <OrgNode
                            title="REKTOR"
                            name="Irjen. Pol. (P) Dr. Drs. A. Kamil Razak, S.H., M.H."
                            photoUrl="/images/rektor.png"
                        />
                        <div className="h-8 w-0.5 shrink-0 bg-[#2596be]/30"></div>

                        {/* WAKIL REKTOR I */}
                        <OrgNode
                            title="WAKIL REKTOR I"
                            name="Prof. Imas Rosidawati, S.H., M.H."
                            photoUrl="/images/wr-1.png"
                        />
                        <div className="h-8 w-0.5 shrink-0 bg-[#2596be]/30"></div>

                        {/* BKKSN */}
                        <OrgNode
                            title="Kepala Pusat Studi Kepolisian"
                            name="Dr. Ahmad Johan, S.E., M.M"
                            photoUrl="/images/KPSK.png"
                        />
                        <div className="h-8 w-0.5 shrink-0 bg-[#2596be]/30"></div>

                        {/* Branches Container */}
                        <div className="relative flex w-full flex-col items-center justify-center gap-0 md:flex-row md:items-stretch md:gap-4">
                            {/* Desktop Horizontal Line */}
                            <div className="absolute top-0 right-[12.5%] left-[12.5%] z-0 hidden h-0.5 bg-[#2596be]/30 md:block"></div>

                            {[
                                {
                                    title: 'Koordinator Bidang Kajian Harkamtibmas, Perlindungan, Pengayoman, dan Pelayanan Masyarakat',
                                    photoUrl:
                                        'https://randomuser.me/api/portraits/men/11.jpg',
                                },
                                {
                                    title: 'Koordinator Bidang Kajian Penegakan Hukum, Keamanan Nasional, dan Keamanan Dalam Negeri',
                                    photoUrl:
                                        'https://randomuser.me/api/portraits/women/12.jpg',
                                },
                                {
                                    title: 'Koordinator Bidang Kajian Isu Strategis, Ketahanan Pangan, Siber, Korupsi, TPPU, dan Kejahatan Transnasional',
                                    photoUrl:
                                        'https://randomuser.me/api/portraits/men/71.jpg',
                                },
                                {
                                    title: 'STAF TATA USAHA',
                                    photoUrl:
                                        'https://randomuser.me/api/portraits/women/44.jpg',
                                },
                            ].map((branch, idx) => (
                                <div
                                    key={idx}
                                    className="flex w-full max-w-[200px] flex-1 shrink-0 flex-col items-center md:max-w-none"
                                >
                                    {/* Mobile vertical line */}
                                    {idx > 0 && (
                                        <div className="h-8 w-0.5 shrink-0 bg-[#2596be]/30 md:hidden"></div>
                                    )}

                                    <div className="relative z-10 mt-0 flex h-full w-full shrink-0 flex-col items-center md:pt-8">
                                        {/* Desktop vertical line */}
                                        <div className="absolute top-0 z-0 hidden h-8 w-0.5 bg-[#2596be]/30 md:block"></div>
                                        <OrgNode
                                            title={branch.title}
                                            photoUrl={branch.photoUrl}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
