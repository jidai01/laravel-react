import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="flex items-center space-x-2 w-full overflow-hidden">
                <div className="flex aspect-square size-8 shrink-0 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                    <AppLogoIcon className="size-5 fill-current text-white dark:text-black" />
                </div>
                <div className="min-w-0 flex-1 text-left text-sm">
                    <span className="block font-semibold leading-tight">
                        Sistem Informasi Akademik Kampus A
                    </span>
                </div>
            </div>
        </>
    );
}
