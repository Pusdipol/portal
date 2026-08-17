import { Link } from '@inertiajs/react';
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

interface BookFormProps {
    data: any;
    setData: (key: string, value: any) => void;
    errors: any;
    processing: boolean;
    categories: Category[];
    submit: (e: React.FormEvent) => void;
    isEdit?: boolean;
    currentCover?: string | null;
    currentFile?: string | null;
}

export default function BookForm({
    data,
    setData,
    errors,
    processing,
    categories,
    submit,
    isEdit = false,
    currentCover = null,
    currentFile = null,
}: BookFormProps) {
    return (
        <form onSubmit={submit} className="space-y-5">
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
                    Penulis *
                </label>
                <input
                    value={data.author}
                    onChange={(e) => setData('author', e.target.value)}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {errors.author && (
                    <p className="mt-1 text-xs text-red-500">
                        {errors.author}
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

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">
                        ISBN
                    </label>
                    <input
                        value={data.isbn}
                        onChange={(e) =>
                            setData('isbn', e.target.value)
                        }
                        className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">
                        Tahun Terbit
                    </label>
                    <input
                        type="number"
                        value={data.published_year}
                        onChange={(e) =>
                            setData('published_year', e.target.value)
                        }
                        min={1900}
                        max={2100}
                        className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>
            </div>

            <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                    Deskripsi
                </label>
                <textarea
                    value={data.description}
                    onChange={(e) =>
                        setData('description', e.target.value)
                    }
                    rows={5}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>

            <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                    {isEdit ? 'Cover Baru (kosongkan jika tidak diganti)' : 'Cover (gambar, maks 2MB)'}
                </label>
                {isEdit && currentCover && (
                    <p className="mb-1 text-xs text-slate-400">
                        Cover saat ini: {currentCover}
                    </p>
                )}
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                        setData('cover', e.target.files?.[0] ?? null)
                    }
                    className="text-sm"
                />
                {errors.cover && (
                    <p className="mt-1 text-xs text-red-500">
                        {errors.cover}
                    </p>
                )}
            </div>

            <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                    {isEdit ? 'File PDF Baru (kosongkan jika tidak diganti)' : 'File PDF (maks 20MB)'}
                </label>
                {isEdit && currentFile && (
                    <p className="mb-1 text-xs text-slate-400">
                        File saat ini: {currentFile}
                    </p>
                )}
                <input
                    type="file"
                    accept="application/pdf"
                    onChange={(e) =>
                        setData('file', e.target.files?.[0] ?? null)
                    }
                    className="text-sm"
                />
                {errors.file && (
                    <p className="mt-1 text-xs text-red-500">
                        {errors.file}
                    </p>
                )}
            </div>

            <div className="flex gap-4 pt-2">
                <button
                    type="submit"
                    disabled={processing}
                    className="rounded-lg bg-blue-600 px-6 py-2.5 text-white transition hover:bg-blue-700 disabled:opacity-60"
                >
                    {processing ? 'Menyimpan...' : (isEdit ? 'Simpan Perubahan' : 'Simpan Buku')}
                </button>
                <Link
                    href="/admin/books"
                    className="rounded-lg border border-slate-300 px-6 py-2.5 text-sm text-slate-600 transition hover:border-slate-500"
                >
                    Batal
                </Link>
            </div>
        </form>
    );
}
