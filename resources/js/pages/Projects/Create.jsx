import { Head } from '@inertiajs/react';
import AdminLayout from '../../components/AdminLayout';
import ProjectForm from '../../components/ProjectForm';

export default function Create({ categories }) {
    return (
        <AdminLayout title="Add a project">
            <Head title="Add project" />
            <ProjectForm categories={categories} />
        </AdminLayout>
    );
}
