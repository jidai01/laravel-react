import { NavMain } from '@/components/nav-main';
import { type NavItem } from '@/types';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { BookOpen, School, GraduationCap, Users, User } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

const mainNavItems: NavItem[] = [
    {
        title: 'Fakultas',
        href: '/fakultas',
        icon: School,
    },
    {
        title: 'Program Studi',
        href: '/program-studi',
        icon: BookOpen,
    },
    {
        title: 'Mata Kuliah',
        href: '/mata-kuliah',
        icon: GraduationCap,
    },
    {
        title: 'Dosen',
        href: '/dosen',
        icon: User,
    },
    {
        title: 'Mahasiswa',
        href: '/mahasiswa',
        icon: Users,
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex flex-col gap-6 p-4">
                <h1 className="text-2xl font-semibold">Dashboard</h1>

                {/* Main Navigation rendered as a grid of cards */}
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {mainNavItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-4 rounded-lg border border-border bg-background p-4 shadow-sm transition hover:bg-accent"
                        >
                            {item.icon && <item.icon />}
                            <span className="font-medium text-foreground">{item.title}</span>
                        </a>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
