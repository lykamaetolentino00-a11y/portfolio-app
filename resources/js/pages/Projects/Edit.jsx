import { Head } from '@inertiajs/react';
import AdminLayout from '../../components/AdminLayout';
import ProjectForm from '../../components/ProjectForm';

export default function Edit({ project, categories }) {
    return (
        <AdminLayout title="Edit project">
            <Head title={`Edit ${project.title}`} />
            <ProjectForm project={project} categories={categories} />
        </AdminLayout>
    );
}
