import { Head, Link, useForm } from '@inertiajs/react';
import PostForm from '@/components/admin/post-form';

interface Category {
    id: number;
    name: string;
}

interface Post {
    id: number;
    title: string;
    category_id: number | null;
    custom_author: string | null;
    content: string;
    status: 'draft' | 'published';
    thumbnail: string | null;
}

export default function AdminPostEdit({
    post,
    categories,
}: {
    post: Post;
    categories: Category[];
}) {
    const { data, setData, post: submitPost, processing, errors } = useForm({
        _method: 'PUT',
        title: post.title,
        category_id: post.category_id ? String(post.category_id) : '',
        custom_author: post.custom_author || '',
        content: post.content,
        status: post.status,
        thumbnail: null as File | null,
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        submitPost(`/admin/posts/${post.id}`, { forceFormData: true });
    }

    return (
        <>
            <Head title={`Edit: ${post.title} — Admin`} />
            <div className="mx-auto max-w-4xl px-4 py-8">
                <Link
                    href="/admin/posts"
                    className="mb-6 inline-block text-sm text-blue-600 hover:underline"
                >
                    ← Kembali
                </Link>
                <h1 className="mb-6 text-2xl font-bold">Edit Berita</h1>

                <PostForm
                    data={data}
                    setData={setData}
                    errors={errors}
                    processing={processing}
                    categories={categories}
                    submit={submit}
                    isEdit={true}
                    currentThumbnail={post.thumbnail}
                />
            </div>
        </>
    );
}

AdminPostEdit.layout = {
    breadcrumbs: [
        {
            title: 'Kelola Berita',
            href: '/admin/posts',
        },
        {
            title: 'Edit Berita',
            href: '#',
        },
    ],
};
