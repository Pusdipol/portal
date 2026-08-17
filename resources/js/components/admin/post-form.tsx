import { Link } from '@inertiajs/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface Category {
    id: number;
    name: string;
}

interface PostFormProps {
    data: any;
    setData: (key: string, value: any) => void;
    errors: any;
    processing: boolean;
    categories: Category[];
    submit: (e: React.FormEvent) => void;
    isEdit?: boolean;
    currentThumbnail?: string | null;
}

export default function PostForm({
    data,
    setData,
    errors,
    processing,
    categories,
    submit,
    isEdit = false,
    currentThumbnail = null,
}: PostFormProps) {
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean']
        ],
    };

    return (
        <form onSubmit={submit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Kolom Kiri */}
                <div className="space-y-6">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">
                            Judul *
                        </label>
                        <input
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        {errors.title && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.title}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">
                            Kategori
                        </label>
                        <Select
                            value={data.category_id}
                            onValueChange={(value) => setData('category_id', value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Pilih kategori" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((c) => (
                                    <SelectItem key={c.id} value={String(c.id)}>
                                        {c.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">
                            Penulis (Opsional)
                        </label>
                        <p className="mb-2 text-xs text-slate-500">Isi jika tulisan merupakan opini pakar dari luar. Jika dikosongkan, nama Anda (Admin) akan digunakan sebagai penulis.</p>
                        <input
                            value={data.custom_author}
                            onChange={(e) => setData('custom_author', e.target.value)}
                            placeholder="Contoh: Dr. Hadi Purnomo, S.I.K, M.H"
                            className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        {errors.custom_author && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.custom_author}
                            </p>
                        )}
                    </div>
                </div>

                {/* Kolom Kanan */}
                <div className="space-y-6">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">
                            Status *
                        </label>
                        <Select
                            value={data.status}
                            onValueChange={(value) => setData('status', value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Pilih status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="draft">Draft</SelectItem>
                                <SelectItem value="published">Publikasikan</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">
                            {isEdit ? 'Ganti Thumbnail (gambar, maks 2MB)' : 'Thumbnail (gambar, maks 2MB)'}
                        </label>
                        {isEdit && currentThumbnail && (
                            <div className="mb-3">
                                <p className="mb-1 text-xs text-slate-500">
                                    Thumbnail saat ini:
                                </p>
                                <img
                                    src={`/storage/${currentThumbnail}`}
                                    alt="Thumbnail"
                                    className="h-24 w-auto rounded border"
                                />
                            </div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                                setData(
                                    'thumbnail',
                                    e.target.files?.[0] ?? null,
                                )
                            }
                            className="text-sm block w-full text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                        {errors.thumbnail && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.thumbnail}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                    Konten *
                </label>
                <div className="bg-white">
                    <ReactQuill 
                        theme="snow"
                        value={data.content}
                        onChange={(content) => setData('content', content)}
                        modules={modules}
                        className="h-64 mb-12"
                    />
                </div>
                {errors.content && (
                    <p className="mt-1 text-xs text-red-500">
                        {errors.content}
                    </p>
                )}
            </div>

            <div className="flex gap-4 pt-4">
                <button
                    type="submit"
                    disabled={processing}
                    className="rounded-lg bg-slate-900 px-6 py-2.5 text-white transition hover:bg-slate-700 disabled:opacity-60"
                >
                    {processing ? 'Menyimpan...' : (isEdit ? 'Perbarui Berita' : 'Simpan Berita')}
                </button>
                <Link
                    href="/admin/posts"
                    className="rounded-lg border border-slate-300 px-6 py-2.5 text-sm text-slate-600 transition hover:border-slate-500"
                >
                    Batal
                </Link>
            </div>
        </form>
    );
}
