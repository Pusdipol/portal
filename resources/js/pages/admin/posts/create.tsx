import { Head, Link, useForm } from '@inertiajs/react';
import PostForm from '@/components/admin/post-form';

interface Category {
    id: number;
    name: string;
}

export default function AdminPostCreate({
    categories,
}: {
    categories: Category[];
}) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        category_id: '',
        custom_author: '',
        content: '',
        status: 'draft' as 'draft' | 'published',
        thumbnail: null as File | null,
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post('/admin/posts', { forceFormData: true });
    }

    return (
        <>
            <Head title="Tambah Berita — Admin" />
            <div className="mx-auto max-w-4xl px-4 py-8">
                <Link
                    href="/admin/posts"
                    className="mb-6 inline-block text-sm text-blue-600 hover:underline"
                >
                    ← Kembali
                </Link>
                <h1 className="mb-6 text-2xl font-bold">
                    Tambah Berita / Kegiatan
                </h1>

                <PostForm
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

AdminPostCreate.layout = {
    breadcrumbs: [
        {
            title: 'Kelola Berita',
            href: '/admin/posts',
        },
        {
            title: 'Tambah Berita',
            href: '/admin/posts/create',
        },
    ],
};
