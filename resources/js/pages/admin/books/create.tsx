import { Head, Link, useForm } from '@inertiajs/react';
import BookForm from '@/components/admin/book-form';

interface Category {
    id: number;
    name: string;
}

export default function AdminBookCreate({
    categories,
}: {
    categories: Category[];
}) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        author: '',
        category_id: '',
        isbn: '',
        description: '',
        published_year: '',
        cover: null as File | null,
        file: null as File | null,
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post('/admin/books', { forceFormData: true });
    }

    return (
        <>
            <Head title="Tambah Buku — Admin" />
            <div className="mx-auto max-w-2xl px-4 py-8">
                <Link
                    href="/admin/books"
                    className="mb-6 inline-block text-sm text-blue-600 hover:underline"
                >
                    ← Kembali
                </Link>
                <h1 className="mb-6 text-2xl font-bold">Tambah Buku</h1>

                <BookForm
                    data={data}
                    setData={setData}
                    errors={errors}
                    processing={processing}
                    categories={categories}
                    submit={submit}
                />
            </div>
        </>
    );
}

AdminBookCreate.layout = {
    breadcrumbs: [
        {
            title: 'Kelola Buku',
            href: '/admin/books',
        },
        {
            title: 'Tambah Buku',
            href: '/admin/books/create',
        },
    ],
};
