import { Head, Link, useForm } from '@inertiajs/react';
import BookForm from '@/components/admin/book-form';

interface Category {
    id: number;
    name: string;
}

interface Book {
    id: number;
    title: string;
    author: string;
    isbn: string | null;
    description: string | null;
    published_year: number | null;
    category_id: number | null;
    cover_path: string | null;
    file_path: string | null;
}

interface Props {
    book: Book;
    categories: Category[];
}

export default function AdminBookEdit({ book, categories }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        title: book.title,
        author: book.author,
        category_id: book.category_id?.toString() ?? '',
        isbn: book.isbn ?? '',
        description: book.description ?? '',
        published_year: book.published_year?.toString() ?? '',
        cover: null as File | null,
        file: null as File | null,
        _method: 'PUT',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post(`/admin/books/${book.id}`, { forceFormData: true });
    }

    return (
        <>
            <Head title="Edit Buku — Admin" />
            <div className="mx-auto max-w-2xl px-4 py-8">
                <Link
                    href="/admin/books"
                    className="mb-6 inline-block text-sm text-blue-600 hover:underline"
                >
                    ← Kembali
                </Link>
                <h1 className="mb-6 text-2xl font-bold">Edit Buku</h1>

                <BookForm
                    data={data}
                    setData={setData}
                    errors={errors}
                    processing={processing}
                    categories={categories}
                    submit={submit}
                    isEdit={true}
                    currentCover={book.cover_path}
                    currentFile={book.file_path}
                />
            </div>
        </>
    );
}

AdminBookEdit.layout = {
    breadcrumbs: [
        {
            title: 'Kelola Buku',
            href: '/admin/books',
        },
        {
            title: 'Edit Buku',
            href: '#',
        },
    ],
};
